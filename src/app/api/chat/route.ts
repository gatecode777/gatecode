import { NextResponse } from 'next/server';

// Local knowledge base fallback for instant response if external AI APIs encounter quota limits
function getFallbackKnowledgeResponse(userMessage: string): string | null {
  const msg = userMessage.toLowerCase();

  if (msg.includes('service') || msg.includes('offer') || msg.includes('do you do') || msg.includes('what can you')) {
    return `Gatecode Technologies provides complete end-to-end digital solutions:

1. **Web Development**: Custom websites, Web Applications, CMS, System Integrations & CRMs.
2. **Mobile App Development**: Android, iOS, hybrid apps, and API integrations.
3. **Digital Marketing**: SEO, Social Media Marketing (SMM), SEM, PPC Ads, Content Marketing & Email Marketing.
4. **Design & Branding**: UI/UX design, wireframing, logo design, graphic design & brand identity.
5. **BPO & Customer Support**: Chat/email support, call center & helpdesk services.
6. **Data Entry & Management**: Data migration, cleansing & Excel management.
7. **Financial & Accounting**: Taxation, auditing & financial management solutions.

How can we assist your business today?`;
  }

  if (msg.includes('contact') || msg.includes('office') || msg.includes('where') || msg.includes('phone') || msg.includes('email') || msg.includes('call') || msg.includes('location') || msg.includes('address')) {
    return `You can reach Gatecode Technologies through the following channels:

📍 **Office Location**: Jaipur, Rajasthan, India  
📞 **Phone**: +91 8502888838 | +91 8502888839  
✉️ **Email**: info@gatecode.in | support@gatecode.in  

Our team is available Monday to Saturday to assist you!`;
  }

  if (msg.includes('quote') || msg.includes('price') || msg.includes('cost') || msg.includes('start') || msg.includes('hire') || msg.includes('project')) {
    return `We would love to discuss your project! You can request a personalized quote or consultation:

1. Fill out our quick form on the [Get Started](/get-started) page.
2. Email us your project details at info@gatecode.in.
3. Call our project advisors directly at +91 8502888838.

Let us know what kind of project you're planning!`;
  }

  if (msg.includes('career') || msg.includes('job') || msg.includes('intern') || msg.includes('hiring') || msg.includes('opening') || msg.includes('apply')) {
    return `Gatecode Technologies is always looking for top talent!

💼 Explore open positions in Web Development, UI/UX Design, Digital Marketing, and Software Engineering on our [Careers](/careers) page.
📩 You can also send your resume to careers@gatecode.in.`;
  }

  if (msg.includes('about') || msg.includes('gatecode') || msg.includes('who are') || msg.includes('company')) {
    return `Gatecode Technologies Pvt. Ltd. is a premier technology consulting and digital solution agency based in Jaipur, India. We empower businesses globally with high-performance web development, mobile apps, UI/UX design, and data-driven digital marketing strategies.`;
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ success: false, error: 'Message is required' }, { status: 400 });
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    const githubToken = process.env.GITHUB_TOKEN;

    const systemPrompt = `You are "Gatecode AI Assistant", the official virtual assistant for Gatecode Technologies Pvt. Ltd.
Your primary role is to answer user queries about Gatecode Technologies, our services, company background, and careers.

About Gatecode Technologies:
- We are a premier technology consulting and digital solution agency based in Jaipur, India.
- Contact Details: Phone: +91 8502888838, +91 8502888839. Email: info@gatecode.in / support@gatecode.in.
- Services we offer:
  1. Web Development (Custom websites, CMS, system integrations, CRM)
  2. Mobile App Development (Android, iOS, hybrid apps, API integrations)
  3. Digital Marketing (SEO, SMO, SMM, SEM, email marketing, content marketing)
  4. BPO & Customer Support (Email/Chat support, call center, helpdesk)
  5. Back-Office & Data Entry (Data migration, data processing, cleansing, Excel management)
  6. Financial Solutions & Audit (Taxation, audit compliance, financial management, accounting)
  7. Design & Branding (Logo design, brand identity, motion graphics, UI/UX, wireframing)

IMPORTANT GUIDELINE - STRICT FILTER:
- You MUST only reply to questions directly related to Gatecode Technologies, its services, company facts, careers/internships, contact info, and pricing/client onboarding.
- If a user asks ANY question outside of this scope (including general programming/coding, homework help, general knowledge, sports, entertainment, politics, recipe, history, math, weather), politely decline and state that you are dedicated to assisting with Gatecode Technologies services.

Keep your answers helpful, premium, clear, and professional.`;

    let botReply = '';

    // Strategy 1: Try Gemini API models if GEMINI_API_KEY is present
    if (geminiKey) {
      const modelsToTry = [
        'gemini-2.0-flash',
        'gemini-flash-latest',
        'gemini-2.5-pro',
        'gemini-pro'
      ];

      const payload = {
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [
          ...(history || []).map((h: { sender: 'user' | 'bot'; text: string }) => ({
            role: h.sender === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }],
          })),
          {
            role: 'user',
            parts: [{ text: message }]
          }
        ]
      };

      for (const modelName of modelsToTry) {
        try {
          const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          if (geminiRes.ok) {
            const geminiData = await geminiRes.json();
            botReply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
            if (botReply) break;
          } else {
            const errText = await geminiRes.text();
            console.warn(`Gemini Model ${modelName} returned status ${geminiRes.status}:`, errText);
          }
        } catch (mErr) {
          console.warn(`Error invoking Gemini model ${modelName}:`, mErr);
        }
      }
    }

    // Strategy 2: Try GitHub Models API if botReply is empty and GITHUB_TOKEN is present
    if (!botReply && githubToken) {
      try {
        const messages = [
          { role: 'system', content: systemPrompt },
          ...(history || []).map((h: { sender: 'user' | 'bot'; text: string }) => ({
            role: h.sender === 'user' ? 'user' : 'assistant',
            content: h.text,
          })),
          { role: 'user', content: message },
        ];

        const ghRes = await fetch('https://models.inference.ai.azure.com/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${githubToken}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7,
            max_tokens: 800,
          }),
        });

        if (ghRes.ok) {
          const ghData = await ghRes.json();
          botReply = ghData.choices?.[0]?.message?.content || '';
        }
      } catch (ghErr) {
        console.warn('GitHub Models API call error:', ghErr);
      }
    }

    // Strategy 3: Smart Gatecode Knowledge Base Fallback if APIs are out of quota or unavailable
    if (!botReply) {
      const fallbackReply = getFallbackKnowledgeResponse(message);
      if (fallbackReply) {
        botReply = fallbackReply;
      } else {
        botReply = `Hello! I am Gatecode AI Assistant. I can help answer your questions regarding Gatecode Technologies, our development and marketing services, career opportunities, or how to get a project quote.

What would you like to know about Gatecode?`;
      }
    }

    return NextResponse.json({ success: true, reply: botReply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}


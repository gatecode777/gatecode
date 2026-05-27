import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ success: false, error: 'Message is required' }, { status: 400 });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.error('Missing GITHUB_TOKEN in env configuration');
      return NextResponse.json({ success: false, error: 'Chatbot service token is not configured.' }, { status: 500 });
    }

    // Strict system prompt forcing the model to only answer questions about Gatecode Technologies
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
- If a user asks ANY question outside of this scope (including general programming/coding, homework help, general knowledge, sports, entertainment, politics, recipe, history, math, weather, or writing content unrelated to our agency), you MUST politely and firmly decline.
- Standard decline message: "I am here to assist you with inquiries regarding Gatecode Technologies and our services. I cannot help with other general topics. Feel free to ask about our development services, company background, or career opportunities!"

Keep your answers helpful, premium, clear, and professional.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(history || []).map((h: { sender: 'user' | 'bot'; text: string }) => ({
        role: h.sender === 'user' ? 'user' : 'assistant',
        content: h.text,
      })),
      { role: 'user', content: message },
    ];

    const response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('GitHub Models API response error:', response.status, errText);
      return NextResponse.json({ success: false, error: 'Failed to generate response from model.' }, { status: 502 });
    }

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || 'Sorry, I am unable to process your request at this moment.';

    return NextResponse.json({ success: true, reply: botReply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

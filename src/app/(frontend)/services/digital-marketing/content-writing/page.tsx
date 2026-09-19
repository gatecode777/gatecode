"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== Section 1: Hero Section ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (15).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Professional Content Writing Services That Articulate Value &amp; Inspire Action
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we craft clear, compelling, and human-first written content tailored to your brand voice. Our content writing services cover website copy, industry articles, SEO blog posts, product descriptions, and promotional collateral designed to inform readers and drive engagement.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 2: Introduction Section ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          Well-crafted words have the power to define your brand, explain complicated value propositions simply, and convince prospective clients to choose your company over competitors. In a digital environment crowded with automated generic text, skilled human copywriting creates the authentic connection modern audiences crave.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., our experienced copywriters understand the subtle balance between persuasive storytelling and search engine optimization. We write for human readers first, ensuring tone, voice, and flow remain natural, while seamlessly incorporating target search topics and structured hierarchy for optimal digital readability.
        </p>
        <p className="dm-about-text">
          Whether you need comprehensive website page copy, technical B2B articles, engaging social media microcopy, or high-converting email newsletters, we adapt our tone to match your exact industry standard. We take the time to understand your products and services deeply, delivering polished, error-free content ready to publish.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Content Writing Services ====================
const services = [
  {
    title: 'Website & Landing Page Copywriting',
    desc: 'We write clear, persuasive website copy that communicates your value proposition and guides visitors toward conversion.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'SEO Blog & Article Writing',
    desc: 'We create thoroughly researched, search-optimized articles that answer user intent and establish strong domain authority.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Technical & B2B Content Writing',
    desc: 'We translate complex software, engineering, and enterprise workflows into accessible, authoritative business content.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Product & Service Descriptions',
    desc: 'We craft compelling, feature-benefit descriptions that clarify offerings, overcome objections, and drive purchasing confidence.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Marketing Collateral & Brochures',
    desc: 'We write polished copy for corporate presentations, one-pagers, sales decks, and downloadable company brochures.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Email Newsletters & Outreach Copy',
    desc: 'We craft engaging subject lines, preview text, and body copy that encourage inbox opens and meaningful click-throughs.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Social Media Captions & Microcopy',
    desc: 'We write punchy, brand-aligned captions and post copy designed to stop scrolling and spark community conversations.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Proofreading & Editorial Polishing',
    desc: 'We review existing content for grammatical precision, sentence flow, formatting clarity, and brand voice alignment.',
    color: '#fbff06',
    text: '#000000',
  },
];

const DigitalServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.dm-service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dm-services-section" ref={sectionRef}>
      <div className="dm-container">
        <h2 className="dm-section-title">Our Content Writing Services</h2>
        <div className="dm-services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="dm-service-card"
              style={{ 
                backgroundColor: service.color, 
                color: service.text,
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              <h3>{service.title}</h3>
              <div
                className="dm-service-divider"
                style={{ backgroundColor: service.color === '#fbff06' ? '#4e7c7e' : '#fbff06' }}
              />
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== Section 4: Why Choose Us / Key Benefits ====================
const benefits = [
  'Original, human-crafted copy with authentic voice and zero robotic generic phrasing',
  'SEO-aligned content naturally incorporating search intent without awkward keyword stuffing',
  'Clear, persuasive messaging that simplifies complex services and drives reader action',
  'Versatile writing expertise covering technical B2B, commercial e-commerce, and corporate',
  'Rigorous editorial standards ensuring clarity, grammatical accuracy, and tone consistency',
  'Reliable delivery schedules with structured review and revision workflows',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Content Writing?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Quality writing is the cornerstone of every successful digital campaign. Whether visitors land on your homepage or read an informational blog post, the clarity and tone of your words directly impact how they perceive your company's professionalism.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our writers research your sector thoroughly before typing a single sentence. We avoid superficial filler, focusing on providing actionable clarity and persuasive structure that helps your brand communicate with confidence.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits:
            </h3>
            <ul className="dm-benefits-list">
              {benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dm-why-choose-image">
            <Image
              src="/images/path.webp"
              alt="Professional Content Writing Process and Editorial Excellence - Gatecode Technologies"
              className="dm-path-illustration"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 5: Marketing Process ====================
const processSteps = [
  {
    title: '1. Briefing & Voice Discovery',
    desc: 'We review your business goals, target readers, key messages, and preferred tone of voice to establish clear guidelines.',
  },
  {
    title: '2. Research & Subject Exploration',
    desc: 'We study your industry, verify facts, analyze competitor positioning, and gather reference data for substance.',
  },
  {
    title: '3. Outline & Structural Approval',
    desc: 'We organize headers, key arguments, and logical flow into a detailed outline to ensure complete alignment upfront.',
  },
  {
    title: '4. First Draft & Persuasive Writing',
    desc: 'Our dedicated copywriters craft engaging, human-written content focused on readability, clarity, and message delivery.',
  },
  {
    title: '5. Editorial Proofing & SEO Review',
    desc: 'Our editors review the draft for grammatical precision, tone consistency, formatting readability, and natural search terms.',
  },
  {
    title: '6. Client Review & Final Polish',
    desc: 'We incorporate your feedback, fine-tune specific phrasing, and deliver clean, publication-ready copy.',
  },
];

const DigitalProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.dm-process-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dm-process-section" ref={sectionRef}>
      <div className="dm-container">
        <h2 className="dm-section-title">Our Content Writing Process</h2>
        <div className="dm-process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="dm-process-item">
              <div className="dm-process-label">{item.title}</div>
              <div className="dm-process-content">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== Industries Section ====================
const industries = [
  'E-Commerce & Retail',
  'Real Estate',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Startups & Enterprises',
];

const DigitalIndustries = () => {
  return (
    <section className="dm-industries-section">
      <div className="dm-container">
        <div className="dm-industries-layout">
          <div className="dm-industries-info">
            <h2 className="dm-section-title dm-section-header-left">
              Industries We Serve
            </h2>
            <ul className="dm-industries-list">
              {industries.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dm-image-grid">
            <Image src="/images/1.webp" alt="E-Commerce Product Copywriting - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Property Writing - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Informational Medical Writing - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Courseware Content Writing - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Business Copywriting - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Expert Content Writing Agency Delivering Clarity, Voice &amp; Impact
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your professional content writing agency dedicated to communicating your commercial message with clarity, style, and precision. We help modern businesses articulate their value proposition, educate prospective clients, and drive conversions across all digital touchpoints.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Compelling Written Content Tailored for Humans and Search Visibility
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            High-ranking content requires more than repeating search phrases; it demands readable structure, authoritative depth, and genuine empathy for the reader’s challenges. Our content writers craft engaging copy that holds reader interest, answers queries thoroughly, and builds genuine brand trust.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>High-Converting Website Copy</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Communicate your products and service benefits clearly with headlines, feature breakdowns, and calls-to-action that drive action.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>In-Depth Technical &amp; B2B Articles</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Demonstrate industry leadership with well-researched, authoritative articles that simplify complex topics for decision-makers.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Brand Storytelling &amp; Microcopy</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Infuse your brand voice into social captions, product descriptions, interface microcopy, and email communications.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Editorial Proofreading &amp; Polishing</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Ensure your drafts are completely free of grammatical errors, repetitive phrasing, and inconsistencies before going live.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Content Writing?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A skilled content team elevates your brand’s authority. Partnering with our specialized copywriting team provides:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero Artificial Filler:</strong> Human-researched writing that reflects real knowledge and speaks directly to your audience.</li>
            <li style={{ marginBottom: '10px' }}><strong>Seamless Search Integration:</strong> Natural keyword implementation that enhances search engine crawlability without hurting readability.</li>
            <li style={{ marginBottom: '10px' }}><strong>Predictable Turnarounds:</strong> Transparent drafting, revision, and delivery timelines designed to support your marketing schedule.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const ContentWritingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Content Writing Services', item: 'https://gatecode.in/services/digital-marketing/content-writing' },
    ],
  };

  const writingServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Content Writing Services',
    name: 'Content Writing Services Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional content writing agency providing website copywriting, SEO blog articles, technical writing, product descriptions, and promotional marketing content.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the content 100% original and human-written?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all content is researched, written, and edited by professional human copywriters. We do not use robotic automated text, ensuring authentic tone and unique perspectives.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you match our company brand voice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review your existing collateral, website, and target audience guidelines during the initial briefing stage, establishing a custom style guide before drafting begins.',
        },
      },
    ],
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(writingServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <SeoContentSection />
      <ContactSection />
    </div>
  );
};

export default ContentWritingServicesPage;

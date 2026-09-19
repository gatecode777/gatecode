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
        style={{ backgroundImage: `url('/images/Rectangle 228 (16).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Strategic Brand Strategy &amp; Promotion Services That Shape Market Leadership
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we help businesses define their identity, articulate their unique market value, and build lasting customer recognition. Our brand strategy and promotion services combine competitive positioning, messaging frameworks, visual identity systems, and multi-channel promotional campaigns.
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
          A strong brand is far more than a memorable logo or an attractive color palette — it is the total perception your customers form about your reliability, expertise, and value. In crowded markets where functional features are quickly imitated, distinctive brand strategy creates the enduring emotional connection that commands premium loyalty.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we ground brand strategy in competitive research and real customer psychology. We work alongside founders, executives, and marketing leaders to uncover what genuinely differentiates your company, crafting unified brand architectures, core value propositions, and cohesive messaging frameworks that resonate across every channel.
        </p>
        <p className="dm-about-text">
          From full corporate rebranding and visual guidelines to product launch campaigns and digital brand promotion, our team ensures your brand speaks with one clear, confident voice. We help you bridge the gap between internal vision and external market perception, creating sustainable brand equity that accelerates long-term commercial growth.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Brand Strategy & Promotion Services ====================
const services = [
  {
    title: 'Brand Positioning & Value Proposition',
    desc: 'We define your brand’s distinct market position, core promises, and differentiation to stand out against competitors.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Visual Identity & Brand Guidelines',
    desc: 'We develop cohesive visual standards covering typography, color systems, imagery, and logo usage guidelines.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Brand Voice & Messaging Frameworks',
    desc: 'We formulate key brand taglines, mission statements, elevator pitches, and tone-of-voice rules for all communication.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Digital Brand Promotion Campaigns',
    desc: 'We design and execute integrated promotional campaigns across search, social, and digital media to expand market reach.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Market & Competitor Differentiation',
    desc: 'We conduct deep competitive benchmarking to identify uncontested market opportunities and sharpen your edge.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Multi-Channel Brand Launch Strategies',
    desc: 'We coordinate end-to-end promotional rollouts for new product launches, company announcements, and rebrandings.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Content & Creative Campaign Direction',
    desc: 'We direct high-impact creative campaigns, video concepts, and marketing collateral aligned with brand standards.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Brand Perception & Sentiment Tracking',
    desc: 'We monitor brand awareness, audience sentiment, and market recall to refine promotional initiatives over time.',
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
        <h2 className="dm-section-title">Our Brand Strategy &amp; Promotion Services</h2>
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
  'Distinct brand positioning that differentiates your business in crowded markets',
  'Cohesive messaging frameworks ensuring consistent communication across every touchpoint',
  'Professional visual identity standards that establish immediate trust and credibility',
  'Multi-channel promotional campaigns designed for sustained reach and audience recall',
  'Practical brand roadmaps connecting creative storytelling with business growth metrics',
  'Transparent performance monitoring tracking brand recognition and engagement over time',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Brand Strategy &amp; Promotion?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Building a memorable brand requires an intentional blend of analytical positioning and creative inspiration. We don’t just deliver static style guides — we build practical, deployable systems that empower your team to communicate with authority across every customer touchpoint.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our brand strategists ensure your brand story connects authentically with real customer needs, creating immediate recognition and long-term brand equity that compounds over time.
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
              alt="Brand Strategy and Promotional Growth Roadmap - Gatecode Technologies"
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
    title: '1. Discovery & Market Benchmarking',
    desc: 'We analyze your company origins, core strengths, competitive landscape, and customer perceptions to set a baseline.',
  },
  {
    title: '2. Value Proposition & Positioning',
    desc: 'We articulate your unique selling proposition, defining the exact market territory your brand will own and defend.',
  },
  {
    title: '3. Messaging Framework & Tone',
    desc: 'We craft taglines, brand narrative, core pillars, and practical guidelines for day-to-day communication.',
  },
  {
    title: '4. Visual Identity Architecture',
    desc: 'We refine visual elements, typography, color palettes, and presentation standards into an accessible brand book.',
  },
  {
    title: '5. Integrated Promotional Rollout',
    desc: 'We design and coordinate launch campaigns across search, social media, PR channels, and internal touchpoints.',
  },
  {
    title: '6. Brand Monitoring & Optimization',
    desc: 'We track brand search volume, social sentiment, and campaign recall, refining promotional strategies as the company scales.',
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
        <h2 className="dm-section-title">Our Brand Strategy Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Brand Positioning - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Corporate Branding - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Practice Brand Strategy - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Academy Brand Promotion - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Hospitality Brand Identity Design - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Comprehensive Brand Strategy &amp; Promotion Agency for Market Leadership
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your trusted partner for strategic brand positioning, identity creation, and digital brand promotion. We help startups, mid-market businesses, and established enterprises craft compelling brand stories that capture attention and build lasting commercial loyalty.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Building Cohesive Identity, Lasting Market Recall &amp; Authentic Differentiation
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A memorable brand gives your business pricing power and resilient customer retention. Our brand strategists blend consumer psychology, market analysis, and creative design to position your business where competitors cannot easily follow.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Competitive Market Positioning</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Identify uncontested market spaces and define clear value propositions that articulate why customers should choose your company.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Unified Brand Architecture &amp; Voice</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Establish cohesive visual guidelines, messaging standards, and tone-of-voice frameworks for seamless cross-channel consistency.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Integrated Multi-Channel Promotion</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Launch coordinated promotional campaigns across search, social platforms, and digital PR to build immediate awareness.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Brand Reputation &amp; Recall</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Cultivate long-term customer trust and brand recall through continuous, authentic storytelling and consistent audience interaction.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Brand Strategy?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Transforming your brand identity requires vision paired with commercial realism. Partnering with our branding and promotion experts delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Strategic Business Grounding:</strong> Brand positioning built on actual market economics, customer needs, and genuine competitive advantages.</li>
            <li style={{ marginBottom: '10px' }}><strong>Actionable Brand Systems:</strong> Practical brand books, digital asset kits, and communication frameworks your internal team can deploy right away.</li>
            <li style={{ marginBottom: '10px' }}><strong>Sustained Promotional Momentum:</strong> Multi-channel rollout plans designed to generate long-term audience recall rather than fleeting buzz.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BrandStrategyPromotionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Brand Strategy & Promotion', item: 'https://gatecode.in/services/digital-marketing/brand-strategy' },
    ],
  };

  const brandServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Brand Strategy & Promotion Services',
    name: 'Brand Strategy & Promotion Services Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional brand strategy and promotion agency offering brand identity development, market positioning, messaging frameworks, and multi-channel brand launch campaigns.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a complete brand strategy include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A complete brand strategy includes market competitor analysis, target audience personas, value proposition, messaging architecture, visual identity guidelines, and an execution roadmap for promotions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does brand strategy help small businesses and startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It clarifies your core differentiator, builds immediate credibility with new customers, prevents wasted marketing spend on inconsistent messaging, and establishes a memorable market presence.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandServiceSchema) }}
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

export default BrandStrategyPromotionPage;

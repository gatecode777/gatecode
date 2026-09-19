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
        style={{ backgroundImage: `url('/images/Rectangle 228 (10).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Strategic Social Media Marketing Services That Build Reach, Engagement &amp; Growth
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we help businesses build active, loyal communities and connect with qualified customers across major social channels. Our social media marketing solutions combine audience research, custom creative content, day-to-day profile management, and targeted paid campaigns to support measurable brand growth.
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
          Social media is no longer just a place to broadcast occasional updates — it is where prospective customers discover your brand, evaluate your credibility, and decide whether they trust your business. Building a sustainable presence requires clear positioning, relatable visual storytelling, and ongoing interaction with your audience.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we provide professional social media marketing services designed around your specific commercial goals. Rather than spreading efforts thin across every platform, we help you identify where your target audience spends their time, crafting high-quality content and structured campaigns that generate meaningful conversations.
        </p>
        <p className="dm-about-text">
          Whether you are an emerging startup, an expanding local company, or an established enterprise, our team balances organic community development with targeted paid social advertising. We focus on genuine engagement, higher brand recall, and consistent referral traffic that turns social touchpoints into real business opportunities.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our SMM Services ====================
const services = [
  {
    title: 'Social Media Strategy & Planning',
    desc: 'We develop comprehensive social roadmaps aligning your brand goals, target demographics, and content pillars for long-term consistency.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Content Creation & Creative Design',
    desc: 'We design high-impact graphics, short-form reels, informative carousels, and persuasive captions tailored to each platform’s audience.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Full-Service Social Media Management',
    desc: 'We handle regular posting schedules, active community interactions, and audience conversations to keep your profiles responsive and active.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Targeted Paid Advertising Campaigns',
    desc: 'We build and manage high-converting Meta and LinkedIn ad funnels to reach specific buyer segments efficiently and cost-effectively.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Audience Research & Engagement',
    desc: 'We identify customer interests and active industry discussions, establishing authentic brand connections that foster long-term loyalty.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Brand Awareness & Reach Expansion',
    desc: 'We implement strategic promotional campaigns designed to increase brand discoverability and introduce your solutions to new prospects.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Analytics & Performance Reporting',
    desc: 'We monitor reach, engagement rates, click-throughs, and conversions to provide actionable insights for continuous campaign refinement.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Platform Profile Optimization',
    desc: 'We optimize bios, visual branding assets, call-to-action buttons, and landing destinations across all active social profiles.',
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
        <h2 className="dm-section-title">Our Social Media Marketing Services</h2>
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
  'Customized social strategies tailored specifically to your industry and audience',
  'High-impact visual content, reels, and persuasive copy designed for engagement',
  'Multi-channel paid campaigns with precise demographic and interest targeting',
  'Active profile management and responsive community interactions',
  'Transparent performance metrics, conversion tracking, and regular reports',
  'Practical growth strategies focused on real business value rather than vanity metrics',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Social Media Marketing?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Succeeding on social media requires more than occasional posting. It takes consistent storytelling, active community management, and strategic distribution that connects with the right people at the right moment.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, we focus on practical, sustainable social media systems that enhance brand authority, attract qualified traffic, and turn casual followers into paying clients.
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
              alt="Social Media Marketing SMM Campaign Metrics - Gatecode Technologies"
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
    title: '1. Audience & Market Analysis',
    desc: 'We analyze your target market, examine competitor strategies, and identify content opportunities to define a clear roadmap.',
  },
  {
    title: '2. Content & Channel Strategy',
    desc: 'We choose the most effective platforms for your business and establish content pillars, visual guidelines, and posting schedules.',
  },
  {
    title: '3. Creative Production & Copywriting',
    desc: 'Our team designs on-brand graphics, reels, carousels, and persuasive captions crafted to encourage audience participation.',
  },
  {
    title: '4. Campaign Scheduling & Execution',
    desc: 'We publish content at optimal times and launch targeted paid advertising campaigns to maximize reach and interaction.',
  },
  {
    title: '5. Community Engagement & Management',
    desc: 'We monitor post responses, interact with comments, and nurture discussions to build an active, trusting brand community.',
  },
  {
    title: '6. Performance Review & Optimization',
    desc: 'We review key metrics such as engagement rate, reach, and link clicks, refining future content to consistently improve results.',
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
        <h2 className="dm-section-title">Our Social Media Marketing Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Brand Social Media Campaigns - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Agency Social Media Advertising - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare and Medical Social Awareness Posts - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Institute SMM Course Promotions - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Restaurant Social Media Branding and Offers - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Top-Rated Social Media Marketing Agency for Measurable Brand Growth
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., a trusted digital marketing and social media agency dedicated to helping businesses grow their online reach, build brand loyalty, and acquire qualified customers. Our social media marketing solutions blend creative visual storytelling with performance advertising to deliver meaningful, long-term impact.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Strategic Social Media Management &amp; Performance Advertising
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Modern social algorithms favor authenticity, consistency, and viewer retention. As a results-oriented social media agency, our specialists combine platform-native creative design with structured paid campaigns across Instagram, Facebook, LinkedIn, and YouTube, ensuring your brand stays visible, memorable, and trusted by your audience.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Meta Advertising (Instagram &amp; Facebook)</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Reach high-intent audiences with precision targeting. We build full-funnel ad campaigns focused on brand discovery, lead generation, and remarketing that optimize your advertising budget.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>B2B LinkedIn Marketing &amp; Authority</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Establish industry leadership and connect with corporate decision-makers. We manage LinkedIn company pages, executive branding, and sponsored content to generate high-value B2B relationships.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Organic Community Building &amp; Engagement</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Turn casual followers into active brand advocates. We craft consistent, valuable content schedules, reply to community conversations, and cultivate authentic audience relationships.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Cross-Platform Content &amp; Creative Strategy</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Capture attention in fast-scrolling feeds with high-impact visuals, reels, carousels, and educational graphics tailored specifically to each platform’s unique audience behavior.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Social Media Marketing?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Achieving consistent results on social media requires authentic brand voice, rigorous data analysis, and proactive creative iteration. Partnering with our dedicated marketing team provides:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Audience-Centric Content:</strong> Content calendars tailored to your specific buyer personas, answering their questions and reflecting genuine value.</li>
            <li style={{ marginBottom: '10px' }}><strong>Data-Driven Social Advertising:</strong> Structured budget allocation, ongoing creative A/B testing, and retargeting to maximize return on ad spend.</li>
            <li style={{ marginBottom: '10px' }}><strong>Transparent Performance Reporting:</strong> Regular reporting on meaningful engagement, follower quality, website referral traffic, and conversion trends.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SocialMediaMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'SMM Services', item: 'https://gatecode.in/services/digital-marketing/smm' },
    ],
  };

  const smmServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Social Media Marketing (SMM)',
    name: 'Top-Rated Social Media Marketing Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional social media marketing services providing social strategy, Meta & LinkedIn ad management, creative design, community engagement, and performance analytics.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What social media platforms do you manage for businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We manage and optimize campaigns across Instagram, Facebook, LinkedIn, YouTube, and X (Twitter), selecting the channels that best match your target audience.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon can we expect results from social media marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Targeted paid ad campaigns typically begin generating reach and leads within days of launch, while organic community growth and authority building establish compounding momentum over 3 to 6 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide content creation along with social media management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our end-to-end service includes customized graphics, short-form reels, informative carousels, caption copywriting, and publishing schedules reviewed for your approval.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smmServiceSchema) }}
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

export default SocialMediaMarketingPage;

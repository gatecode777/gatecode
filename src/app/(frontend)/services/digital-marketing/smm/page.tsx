"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
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
// ==================== Main Page Component ====================
const SocialMediaMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'SMM Services', item: 'https://www.gatecode.in/services/digital-marketing/smm' },
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
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional social media marketing services providing social strategy, Meta & LinkedIn ad management, creative design, community engagement, and performance analytics.',
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
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="digital-marketing/smm" serviceName="social media marketing" />
      <ContactSection />
    </div>
  );
};

export default SocialMediaMarketingPage;

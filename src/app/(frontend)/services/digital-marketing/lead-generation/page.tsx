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
        style={{ backgroundImage: `url('/images/Rectangle 228 (9).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Result-Driven Lead Generation Services That Help Businesses Get Qualified Leads
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we help businesses generate high-quality leads through data-driven digital marketing strategies. Our lead generation services combine audience research, paid campaigns, content marketing, landing page optimization, and conversion tracking to attract potential customers and increase sales opportunities.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 2: Introduction Paragraph ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          Finding potential customers is not enough — businesses need the right leads that have genuine interest in their products or services.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we provide professional lead generation services designed to connect businesses with targeted audiences. Our team uses a combination of digital marketing expertise, customer research, campaign optimization, and conversion strategies to build a consistent lead pipeline.
        </p>
        <p className="dm-about-text">
          Whether you are a startup, small business, or established company, our customized lead generation approach helps you attract qualified prospects, improve customer engagement, and increase growth opportunities.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Lead Generation Services ====================
const services = [
  {
    title: 'Target Audience Research & Lead Strategy',
    desc: 'We analyze your industry, customer behavior, and market opportunities to identify audiences that are most likely to convert.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Social Media Lead Generation',
    desc: 'We create targeted social media campaigns that attract potential customers and encourage them to take action.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'PPC & Paid Advertising Campaigns',
    desc: 'Paid advertising helps businesses reach customers who are actively searching for products and services.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Landing Page Optimization',
    desc: 'A successful lead campaign requires a landing page that converts visitors into leads.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Email Marketing Campaigns',
    desc: 'We help businesses nurture prospects and convert interested users into customers through personalized email campaigns.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'CRM & Lead Management',
    desc: 'Generating leads is only the first step. Proper management helps businesses maximize opportunities.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Sales Funnel Optimization',
    desc: 'We analyze every stage of your customer journey and improve the process from first interaction to final conversion.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Analytics & Performance Tracking',
    desc: 'We monitor campaign performance using data insights to improve results.',
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
        <h2 className="dm-section-title">Our Lead Generation Services</h2>
        <div className="dm-services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="dm-service-card"
              style={{ 
                backgroundColor: service.color, 
                color: service.text,
                transitionDelay: `${index * 0.1}s`,
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

// ==================== Section 4: Why Choose Us ====================
const benefits = [
  'Targeted and qualified leads',
  'Data-driven marketing strategies',
  'Customized campaigns for your business',
  'Transparent performance tracking',
  'Better conversion opportunities',
  'Scalable growth solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode For Lead Generation Services?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Generating leads requires more than running advertisements. It requires understanding customers, creating the right message, and continuously improving campaigns.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, we focus on building sustainable lead generation systems that help businesses attract, engage, and convert potential customers.
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
              alt="Business B2B Lead Generation Funnel and Strategy - Gatecode Technologies"
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
    title: '1. Business & Audience Analysis',
    desc: 'We begin by understanding your business goals, target customers, competitors, and market position to create an effective lead generation strategy.',
  },
  {
    title: '2. Strategy Development',
    desc: 'Our team develops customized campaigns based on audience insights, marketing channels, and business objectives.',
  },
  {
    title: '3. Campaign Launch & Execution',
    desc: 'We launch optimized campaigns across suitable platforms including search engines, social media, and other digital channels.',
  },
  {
    title: '4. Lead Capture & Management',
    desc: 'We create systems to collect, organize, and manage leads efficiently for better sales follow-ups.',
  },
  {
    title: '5. Performance Monitoring',
    desc: 'We continuously analyze campaign data, lead quality, and conversion metrics to improve performance.',
  },
  {
    title: '6. Optimization & Growth',
    desc: 'Based on insights and results, we refine campaigns to increase lead quality and maximize business growth.',
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
        <h2 className="dm-section-title">Our Lead Generation Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Store Customer Acquisition and Lead Generation - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Property Lead Campaigns - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Patient Appointment Leads - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Course Student Admissions Leads - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Restaurant Catering Lead Generation - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Top-Rated Lead Generation Company &amp; Services Agency
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., a trusted lead generation agency helping startups, small businesses, and enterprises build a consistent, high-converting pipeline of qualified prospects. Our multi-channel lead acquisition strategies are tailored to generate measurable, scalable growth for businesses in India and across the globe.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Result-Driven Lead Generation &amp; Conversion Strategies
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Generating high-quality leads requires more than generic outreach; it demands an integrated, intent-driven approach. As a performance-focused lead generation company, our certified marketers combine targeted paid advertising, landing page conversion rate optimization, automated email nurturing, and CRM integration to turn prospects into paying clients cost-effectively.
          </p>

          {/* Key Feature Highlight Cards matching the visual layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>B2B Lead Generation &amp; Growth</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Fuel your sales pipeline with verified decision-makers. We build custom high-converting funnels and outbound outreach campaigns proven to turn industry leads into long-term B2B partnerships.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>PPC &amp; Paid Lead Acquisition</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Reach customers who are actively searching for your solutions. We design laser-targeted Google Ads and social media advertising campaigns that capture high-intent inquiries ready to convert.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Landing Page &amp; Funnel Optimization</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Maximize conversion rates from your ad spend. We create fast, user-centric landing pages with persuasive copy, strategic CTAs, and frictionless lead capture forms.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>CRM Integration &amp; Lead Management</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Never let a qualified opportunity slip through the cracks. We integrate automated lead scoring, CRM pipelines, and behavioral email follow-ups to accelerate your sales cycle.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Lead Generation?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Choosing the right lead generation partner guarantees transparent lead tracking, lower cost-per-acquisition (CPA), and maximum ROI. When you collaborate with our team, you get:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Targeted &amp; Qualified Prospects:</strong> We filter and deliver pre-qualified prospects with genuine interest in your offerings.</li>
            <li style={{ marginBottom: '10px' }}><strong>Omnichannel Funnel Strategies:</strong> Seamless integration of Google search ads, LinkedIn B2B campaigns, meta lead ads, and email automation.</li>
            <li style={{ marginBottom: '10px' }}><strong>Continuous Optimization:</strong> Real-time analytics, A/B testing, and sales pipeline optimization to ensure sustainable business growth.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const LeadGenerationServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Lead Generation Services', item: 'https://gatecode.in/services/digital-marketing/lead-generation' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lead Generation Services',
    name: 'Top-rated Lead Generation Company & Services Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Looking for a top lead generation company? Our lead generation agency provides expert lead generation services to boost sales for small businesses.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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

export default LeadGenerationServicesPage;

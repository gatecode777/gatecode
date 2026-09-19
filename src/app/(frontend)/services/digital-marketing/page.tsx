"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/digitalbg1.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            Best Digital<br />Marketing Company
          </h1>
          <p className="dm-hero-subtitle">
            Welcome to Gatecode Technologies, a premier full-service digital marketing agency based in India. We specialize in delivering data-driven marketing services and high-ROI campaigns designed to accelerate online growth for brands worldwide. Whether you need specialized B2B marketing strategies or scalable white-label solutions, our team crafts customized plans tailored to your exact business goals.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          Achieving dominant online visibility requires more than just basic tactics; it demands an integrated, multi-channel approach. As a leading performance marketing agency, our certified strategists combine deep technical SEO with high-converting social media campaigns. Our goal is simple: to capture intent-driven leads and help you scale customer acquisition cost-effectively.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Search Engine Optimization (SEO)', 
    desc: 'Dominate search rankings and drive high-intent organic traffic. We use proven, technical SEO strategies to ensure your customers find you first on Google.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Social Media Marketing (SMM)', 
    desc: 'Turn followers into loyal customers. We build active, engaged communities and run scroll-stopping campaigns across all major social platforms.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Pay-Per-Click Advertising (PPC)', 
    desc: 'Maximize your ROI with laser-targeted ads. We build and manage data-driven PPC campaigns that capture high-quality leads ready to convert.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Content Marketing', 
    desc: "Tell a story that sells. We craft authoritative, engaging content that answers your audience's questions, builds industry trust, and drives organic reach.", 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Brand Strategy & Promotion', 
    desc: 'Stand out in a crowded market. We develop compelling brand identities and strategic promotional campaigns that leave a lasting digital footprint.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Email Marketing', 
    desc: 'Nurture relationships and drive repeat sales. We build automated, personalized email sequences that keep your audience engaged at every stage of their journey.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Performance Marketing', 
    desc: 'Scale your business efficiently. We execute highly optimized, cross-channel campaigns focused entirely on measurable growth, lower acquisition costs, and high ROI.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Analytics & Reporting', 
    desc: 'Make decisions based on data, not guesswork. We provide 100% transparent, real-time analytics to track user behavior, campaign success, and revenue growth.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
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
        <h2 className="dm-section-title">Our Digital Marketing Services</h2>
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

// ==================== DigitalWhyChoose Component ====================
const benefits = [
  'Increased online visibility',
  'Improved customer engagement',
  'Targeted audience reach',
  'Data-Driven Campaigns',
  'Omnichannel Strategy',
  'White Label & B2B Solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Digital Marketing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating innovative and result-oriented marketing strategies tailored to your business goals. Our approach combines creativity,
          audience targeting, and performance analysis to improve brand visibility, generate leads, and maximize digital growth.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits
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
              alt="Strategic Digital Marketing Services Flow Illustration - Gatecode Technologies"
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

// ==================== DigitalProcess Component ====================
const processSteps = [
  { title: 'Business & Market Analysis', desc: 'Understanding your business, target audience, and market trends.' },
  { title: 'Strategy Planning', desc: 'Creating customized marketing strategies based on your goals.' },
  { title: 'Campaign Creation', desc: 'Designing and launching optimized marketing campaigns.' },
  { title: 'Content & Creative Development', desc: 'Developing engaging visuals and marketing content.' },
  { title: 'Performance Monitoring', desc: 'Tracking campaign performance and audience engagement.' },
  { title: 'Optimization & Growth', desc: 'Continuously improving campaigns for better results and ROI.' },
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
        <h2 className="dm-section-title">Our Marketing Process</h2>
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

// ==================== DigitalIndustries Component ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Education & Training',
  'Healthcare & Wellness',
  'Real Estate & Construction',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Digital Marketing - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant and Hospitality Online Branding - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Business Leads Campaigns - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Education and Training Student Acquisition - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Healthcare and Wellness Brand Campaigns - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Leading Digital Marketing Agency in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies, a full-service digital marketing agency dedicated to accelerating your brand&apos;s online growth. We specialize in delivering data-driven marketing services, high-ROI campaigns, and specialized B2B solutions. Whether you need comprehensive brand scaling or flexible white-label services, our strategies are tailored to generate measurable, long-term results for businesses worldwide.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Result-Driven SEO &amp; Social Media Strategies
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Achieving true online visibility requires a strategic, multi-channel approach. As a performance-focused marketing agency, our certified experts seamlessly integrate technical SEO with high-converting social media campaigns. We focus on capturing intent-driven traffic and scaling your customer acquisition cost-effectively, ensuring every click adds value to your business.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>SEO Services &amp; Local Search</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Dominate search engine results and drive relevant traffic. We provide comprehensive organic SEO and targeted local search optimization to improve your rankings and connect you with customers actively looking for your services.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Social Media Marketing</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Build a loyal, active online community. Our team designs and manages highly targeted, creative campaigns across Instagram, Facebook, LinkedIn, and YouTube to elevate your brand presence and engage your audience.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>B2B Lead Generation &amp; Growth</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Fuel your sales pipeline with high-quality prospects. We design custom conversion funnels and omnichannel campaigns proven to turn industry leads into long-term B2B partnerships.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Automated Email Marketing</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Nurture relationships and drive repeat sales. We build personalized drip sequences, automated newsletters, and behavioral lifecycle flows to keep your audience engaged at every stage of their journey.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Choosing the right marketing partner ensures transparent performance tracking and a clear focus on your Return on Ad Spend (ROAS). When you work with our experts, you gain access to:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Data-Driven Campaigns:</strong> Real-time conversion tracking, rigorous A/B testing, and precise audience retargeting.</li>
            <li style={{ marginBottom: '10px' }}><strong>Omnichannel Strategy:</strong> A unified approach combining organic SEO, Google PPC advertising, email automation, and social media.</li>
            <li style={{ marginBottom: '10px' }}><strong>Scalable Solutions:</strong> Flexible white-label services and B2B marketing systems designed for partner agencies and growing corporate enterprises.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DigitalMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://gatecode.in/services/digital-marketing' },
    ],
  };

  const digitalMarketingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing Services',
    name: 'Best Digital Marketing Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Top digital marketing agency in India providing SEO services, PPC Google Ads, social media marketing services, and lead generation services.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose Gatecode Technologies as the best digital marketing company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a leading digital marketing agency in India providing comprehensive SEO digital marketing, social media marketing services, and performance marketing solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer SEO services in India and local SEO packages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! As a full-service seo services company, we offer organic search engine optimization digital marketing along with affordable local seo services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide automated email marketing services and B2B lead generation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absoluely. We deliver automated email marketing services and white label digital marketing services alongside targeted b2b lead generation services in India.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMarketingSchema) }}
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

export default DigitalMarketingPage;

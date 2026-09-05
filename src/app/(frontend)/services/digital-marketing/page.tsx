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
            DIGITAL<br />MARKETING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We help businesses increase online visibility, attract targeted
            audiences, and drive measurable growth through result-driven
            digital marketing strategies.
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
          At Gatecode Technologies Pvt. Ltd., we provide strategic digital marketing solutions designed to strengthen your online presence and accelerate business growth. Our team combines creativity, data-driven strategies, and modern marketing techniques to help brands connect with the right audience, improve engagement, and generate quality leads. From SEO and social media marketing to performance campaigns and branding, we create customized marketing solutions that deliver real business results.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { title: 'Search Engine Optimization (SEO)', desc: 'Improve website visibility and rank higher on search engines with optimized SEO strategies.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Social Media Marketing (SMM)', desc: 'Build brand awareness and engage audiences through impactful social media campaigns.', color: '#fbff06', text: '#000000' },
  { title: 'Pay-Per-Click Advertising (PPC)', desc: 'Generate targeted traffic and quality leads with performance-focused paid advertising campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Content Marketing', desc: 'Create valuable and engaging content that attracts, informs, and converts audiences.', color: '#fbff06', text: '#000000' },
  { title: 'Brand Strategy & Promotion', desc: 'Strengthen brand identity and improve online presence with strategic branding solutions.', color: '#fbff06', text: '#000000' },
  { title: 'Email Marketing', desc: 'Connect with customers through personalized email campaigns designed to increase engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Performance Marketing', desc: 'Data-driven marketing campaigns focused on measurable growth, ROI, and customer acquisition.', color: '#fbff06', text: '#000000' },
  { title: 'Analytics & Reporting', desc: 'Track campaign performance and customer behavior with detailed analytics and reporting.', color: '#4e7c7e', text: '#ffffff' },
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
  'Lead generation and conversions',
  'Data-driven marketing strategies',
  'Performance tracking and optimization',
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
            Best Digital Marketing Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, recognized as the <strong>best digital marketing company in india</strong> and a full-service <strong>digital marketing agency</strong>. As a premier <strong>digital marketing company in india</strong>, we deliver data-driven <strong>digital marketing services in india</strong>, high-ROI campaigns, specialized <strong>b2b digital marketing services</strong>, and scalable <strong>white label digital marketing services</strong> tailored to accelerate online growth for brands worldwide.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Result-Driven SEO Digital Marketing & Social Media Strategies
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Achieving dominant online visibility requires integrated <strong>search engine optimization digital marketing</strong> and strategic multi-channel distribution. Operating as a leading <strong>performance marketing agency</strong>, our certified strategists combine technical <strong>seo digital marketing</strong> with high-converting <strong>social media marketing services</strong> to capture intent-driven leads and scale customer acquisition cost-effectively.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>SEO Services & Local Search</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Dominate Google search results with a top-rated <strong>seo services company</strong>. We offer organic <strong>seo services india</strong> alongside <strong>affordable local seo services</strong> for local business rankings.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Social Media Marketing Agency</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Build an active online community with an established <strong>social media marketing agency</strong>. We run targeted campaigns across Instagram, Facebook, LinkedIn, and YouTube.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>B2B Lead Generation & Growth</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Fuel your sales pipeline with <strong>b2b lead generation services in india</strong>. We design custom funnels and omnichannel campaigns as a trusted <strong>performance marketing agency</strong>.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Automated Email Marketing Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Nurture leads and drive repeat sales with <strong>automated email marketing services</strong>. We build drip sequences, newsletter automation, and behavioral lifecycle flows.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies as Your Digital Marketing Agency?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Choosing the <strong>best digital marketing agency</strong> guarantees transparent performance tracking and maximum return on ad spend (ROAS). Partnering with our expert <strong>digital marketing company</strong> gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Data-Driven Campaigns:</strong> Real-time conversion tracking, AB testing, and audience retargeting.</li>
            <li style={{ marginBottom: '10px' }}><strong>Omnichannel Strategy:</strong> Seamless integration across <strong>seo digital marketing</strong>, Google PPC ads, <strong>automated email marketing services</strong>, and social media.</li>
            <li style={{ marginBottom: '10px' }}><strong>White Label & B2B Solutions:</strong> Flexible <strong>white label digital marketing services</strong> for partner agencies and corporate clients.</li>
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

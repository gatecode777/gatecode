"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
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

// ==================== Main Page Component ====================
const DigitalMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://www.gatecode.in/services/digital-marketing' },
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
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Top digital marketing agency in India providing SEO services, PPC Google Ads, social media marketing services, and lead generation services.',
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
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="digital-marketing" serviceName="digital marketing" />
      <ContactSection />
    </div>
  );
};

export default DigitalMarketingPage;

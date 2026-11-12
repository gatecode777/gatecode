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
// ==================== Main Page Component ====================
const LeadGenerationServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Lead Generation Services', item: 'https://www.gatecode.in/services/digital-marketing/lead-generation' },
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
      url: 'https://www.gatecode.in',
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
      <ServiceFAQ slug="digital-marketing/lead-generation" serviceName="lead generation" />
      <ContactSection />
    </div>
  );
};

export default LeadGenerationServicesPage;

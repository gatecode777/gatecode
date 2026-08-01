"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Accounting Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/accounting.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            ACCOUNTING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We provide accurate, secure, and efficient accounting solutions that help businesses manage finances,<br />
            maintain compliance, and achieve long-term financial stability.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Accounting Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we offer reliable accounting services designed to simplify financial management and support business growth. 
          Our team focuses on maintaining accurate financial records, ensuring compliance, and delivering organized financial solutions tailored to your 
          business needs. From bookkeeping and taxation to payroll and financial reporting, we help businesses streamline financial operations and make 
          informed decisions with confidence.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Accounting Services) ====================
const services = [
  { title: 'Bookkeeping Services', desc: 'Accurate bookkeeping solutions for organized financial records and smooth transaction management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'GST & Taxation Services', desc: 'Professional GST filing, tax preparation, and compliance solutions to support hassle-free financial operations.', color: '#fbff06', text: '#000000' },
  { title: 'Financial Reporting', desc: 'Detailed financial reports and statements that help businesses track performance and make informed decisions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Payroll Management', desc: 'Efficient payroll processing solutions for salary management, employee records, and compliance.', color: '#fbff06', text: '#000000' },
  { title: 'Accounts Payable & Receivable', desc: 'Streamlined payment management solutions to maintain healthy cash flow and financial accuracy.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Tally & Accounting Software Management', desc: 'Expert management of Tally and accounting software for accurate and efficient financial operations.', color: '#fbff06', text: '#000000' },
  { title: 'Budget Planning & Financial Analysis', desc: 'Strategic budgeting and financial analysis services designed to support business growth and stability.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Audit & Compliance Support', desc: 'Reliable audit assistance and compliance management for financial transparency and operational accuracy.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Accounting Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Accounting Services) ====================
const benefits = [
  'Accurate financial record management',
  'Improved compliance and tax management',
  'Organized payroll and transaction handling',
  'Better financial planning and reporting',
  'Secure and confidential financial processes',
  'Reliable support for business growth',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Accounting Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, organized, and secure accounting solutions that help businesses manage finances efficiently and maintain 
          compliance. Our experienced team combines financial expertise with a client-focused approach to simplify accounting processes, reduce errors, 
          and support long-term business success.
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
              src="/images/path.png"
              alt="Professional Business Accounting Services Lifecycle - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Accounting Services) ====================
const processSteps = [
  { title: 'Financial Requirement Analysis', desc: 'Understanding your business structure and financial management needs.' },
  { title: 'Data Collection & Record Management', desc: 'Organizing and maintaining financial data accurately.' },
  { title: 'Accounting & Compliance Processing', desc: 'Managing bookkeeping, taxation, payroll, and compliance operations.' },
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
        <h2 className="dm-section-title">Our Accounting Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Accounting Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Startups & SMEs',
  'Service-Based Businesses',
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail Bookkeeping - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare and Wellness Financial Auditing - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Real Estate Property Taxation Support - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Logistics and Supply Chain Accounts Handling - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Education and E-Learning Payroll Administration - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Top Accounting Services Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a leading <strong>accounting services company in india</strong> and trusted <strong>accounting and taxation firm in india</strong>. Standing out among established <strong>accounting firms</strong>, our team of certified financial experts delivers end-to-end <strong>accounting services</strong>, <strong>indian cost accounts service</strong>, and specialized <strong>outsourced accounting and bookkeeping services</strong> tailored to maintain complete fiscal health for businesses worldwide.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Professional Accounting & Bookkeeping Services
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Streamlining corporate ledgers requires meticulous precision and tax regulatory compliance. We provide full-suite <strong>accounting and bookkeeping services</strong> and reliable <strong>bookkeeping services in india</strong>, delivering structured <strong>accounting bookkeeping service</strong> management, balance sheet reconciliation, and timely <strong>gst filing goods and services tax</strong> execution.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Accounting & Bookkeeping Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Maintain double-entry ledgers with <strong>bookkeeping services in india</strong>. We handle accounts payable/receivable via high-performance <strong>outsourced accounting and bookkeeping services</strong>.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>GST Filing & Taxation Firm</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Simplify tax preparation with an experienced <strong>accounting and taxation firm in india</strong>. We manage monthly <strong>gst filing goods and services tax</strong> and regional corporate filings.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Payroll Management Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Automate employee salary calculations and tax deductions with structured <strong>payroll management services</strong> powered by modern <strong>accounting software company</strong> tools.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode as Your Accounting Firm in India?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with an experienced <strong>accounting bookkeeping service</strong> provider guarantees zero audit penalties and optimized cash flows. Choosing Gatecode Technologies gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>100% Tax & Legal Compliance:</strong> Timely GST returns, income tax filings, and <strong>indian cost accounts service</strong> alignment.</li>
            <li style={{ marginBottom: '10px' }}><strong>Cloud Software Integration:</strong> Seamless handling of Tally, QuickBooks, Zoho Books, and SAP accounting platforms.</li>
            <li style={{ marginBottom: '10px' }}><strong>Confidential & Secure Handling:</strong> Bank-grade data encryption and strict NDA-backed financial management.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const AccountingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/accounting' },
      { '@type': 'ListItem', position: 3, name: 'Accounting', item: 'https://gatecode.in/services/accounting' },
    ],
  };

  const accountingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Accounting Services',
    name: 'Accounting Services Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Premier accounting services company in India providing bookkeeping services, taxation & compliance, payroll management, and financial reporting.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose Gatecode Technologies for accounting & financial services in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a trusted accounting services company in India providing end-to-end accounting & bookkeeping services, GST tax filing, payroll processing, and financial management.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer bookkeeping services in India and GST tax filing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We deliver comprehensive accounting bookkeeping service management alongside monthly GST filing goods and services tax filing for businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payroll management services and cloud accounting software support do you provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We automate monthly employee payroll processing and integrate with popular accounting software company platforms like Tally, QuickBooks, and Zoho Books.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingSchema) }}
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

export default AccountingServicesPage;

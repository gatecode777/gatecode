"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { systemIntegrationFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Custom Development & System Integration) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (6).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CUSTOM DEVELOPMENT<br />& SYSTEM<br />INTEGRATION
          </h1>
          <p className="dm-hero-subtitle">
            We build purpose-driven software and engineer reliable API bridges to unify disconnected business systems, automate data synchronization, and eliminate operational friction.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Custom Development & System Integration) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our custom development and system integration services help modern enterprises unify disparate software platforms into a cohesive, high-performing digital ecosystem. When applications operate in isolation, organizations suffer from data silos, manual entry mistakes, and sluggish communication between departments.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          We engineer bespoke applications, middleware solutions, and secure API bridges that seamlessly connect your enterprise resource planning (ERP) platforms, customer relationship management (CRM) software, payment gateways, and proprietary legacy databases. Our solutions prioritize data integrity, bank-grade encryption, and real-time synchronization, allowing your teams to work faster and make better-informed decisions.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Custom Development & System Integration) ====================
const services = [
  { 
    title: 'Custom Enterprise Software Engineering', 
    desc: 'Tailor-made business applications designed to solve unique organizational challenges and streamline specialized workflows.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Enterprise API Design & Gateway Architecture', 
    desc: 'Secure RESTful and GraphQL API gateways engineered for high-throughput, authenticated, and rate-limited data exchange.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Seamless CRM & ERP Integrations', 
    desc: 'Real-time synchronization connecting Salesforce, HubSpot, SAP, NetSuite, and custom enterprise databases.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Bidirectional Cloud Data Pipelines', 
    desc: 'Automated data ingestion, ETL workflows, and synchronization bridges that ensure zero information latency across departments.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Legacy System Modernization & Wrapping', 
    desc: 'Encapsulating legacy mainframes and outdated databases with modern API wrappers without disrupting daily operations.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Secure Payment & FinTech Integrations', 
    desc: 'Certified payment gateway connectors with PCI-DSS compliance, fraud detection checks, and automated ledger reconciliation.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Third-Party SaaS & Webhook Integration', 
    desc: 'Connecting external business tools, communication bots, logistics trackers, and document management systems.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Continuous Integration Auditing & Maintenance', 
    desc: '24/7 endpoint monitoring, schema change alerts, proactive error logging, and latency optimization.', 
    color: '#fbff06', 
    text: '#000000' 
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
        <h2 className="dm-section-title">What We Offer</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Custom Development & System Integration) ====================
const benefits = [
  'Unified data visibility across all core enterprise applications.',
  'Eradication of error-prone manual duplicate data entry.',
  'High-speed bidirectional synchronization with zero data loss.',
  'Strict data protection with OAuth 2.0 and end-to-end encryption.',
  'Extend the operational lifespan of existing legacy systems.',
  'Flexible modular architecture that readily accommodates new tools.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Custom Development & Integration Services?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Running enterprise workflows on fragmented applications leads to fragmented insights. Employees spend hours manually copying records across platforms, leading to input mistakes, delayed customer responses, and inaccurate reporting that blinds leadership to operational realities.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, our software integration engineers eliminate these operational gaps. By establishing secure, bidirectional middleware and event-driven API bridges, we automate information flows between your systems, ensuring your databases stay harmonized, secure, and ready to support rapid business scaling.
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
              alt="Custom Development and System Integration Flowchart - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Custom Development & System Integration) ====================
const processSteps = [
  { 
    title: 'System Landscape & Data Flow Audit', 
    desc: 'We map your existing software ecosystem, data structures, protocol dependencies, and synchronization requirements.' 
  },
  { 
    title: 'Integration Architecture & Schema Design', 
    desc: 'We architect middleware specifications, entity mapping tables, and secure authentication protocols.' 
  },
  { 
    title: 'Middleware & Custom API Development', 
    desc: 'Our engineering team builds resilient connectors, error-handling retry queues, and custom business logic.' 
  },
  { 
    title: 'Sandbox Simulation & Data Validation', 
    desc: 'We conduct comprehensive mock data transfers, load testing, and edge-case failure simulations in secure sandbox environments.' 
  },
  { 
    title: 'Phased Production Rollout', 
    desc: 'We deploy connectors in monitored phases, ensuring live data integrity and zero business disruption.' 
  },
  { 
    title: '24/7 Telemetry & Health Monitoring', 
    desc: 'We configure automated endpoint heartbeat checks, transaction logging, and ongoing maintenance support.' 
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
        <h2 className="dm-section-title">Our Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Custom Development & System Integration) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Finance & Accounting',
  'Logistics & Operations',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail API Integrations - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Systems Interface Integration - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Portal and LMS Integrations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Enterprise Database Connections - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Finance and Accounting Platform Integration - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Leading Custom Development &amp; System Integration Services in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, your enterprise technology partner for bespoke custom software engineering and <strong>system integration services</strong>. We bridge the gap between disconnected software applications, cloud databases, and legacy infrastructure to create a unified, automated digital ecosystem.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Eliminating Data Silos Through Resilient Middleware and Modern APIs
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Disconnected enterprise systems force teams to waste hundreds of hours manually transferring records between CRMs, ERPs, inventory software, and accounting platforms. Our integration architects design secure, scalable middleware solutions and custom API layers that ensure instant data synchronization, transactional integrity, and automated operational efficiency.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Real-Time Data Synchronization</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Keep all business records perfectly synchronized across cloud applications, databases, and third-party platforms with zero latency.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Legacy Software Modernization</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Extend the lifespan of valuable proprietary systems by wrapping them in modern REST and GraphQL APIs without risky migrations.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Bank-Grade Security & Encryption</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Protect confidential business data during transit and rest with OAuth 2.0, token authentication, and TLS 1.3 encryption.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Automated Error Recovery & Queues</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Built-in dead-letter queues and automated retry logic ensure no transaction is ever dropped during network interruptions.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Choose Gatecode Technologies for System Integration?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Integrating complex enterprise systems requires rigorous testing and deep architectural expertise. Collaborating with Gatecode Technologies ensures:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Protocol & Platform Versatility:</strong> Proven fluency across REST, GraphQL, SOAP, Webhooks, and legacy database drivers.</li>
            <li style={{ marginBottom: '10px' }}><strong>Zero Data Loss Guarantee:</strong> Atomic transactions and idempotent endpoints ensure data consistency under all network conditions.</li>
            <li style={{ marginBottom: '10px' }}><strong>Proactive Telemetry:</strong> Real-time API uptime monitoring, automated alerts, and continuous maintenance support.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CustomDevelopmentSystemIntegrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/software-development' },
      { '@type': 'ListItem', position: 3, name: 'Custom Development & System Integration', item: 'https://gatecode.in/services/software-development/system-integration' },
    ],
  };

  const integrationServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'System Integration & Custom Software Development',
    name: 'Custom Development & System Integration Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Custom software development and system integration agency delivering API middleware, ERP/CRM bridges, and real-time cloud synchronization.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is system integration, and how does it help our business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'System integration connects different software applications, third-party platforms, and legacy databases into a single cohesive network. It allows information to flow automatically in real time, eliminating manual data entry, reducing human errors, and giving leadership a centralized view of business operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate modern cloud applications with our older, legacy software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We specialize in legacy system modernization. We build secure custom APIs and middleware that act as a bridge between your established legacy databases and modern cloud-based tools, allowing you to access new capabilities without undergoing an expensive or risky system replacement.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does API integration improve our daily business operations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom API integration enables real-time data syncing across all your software tools. This means your team no longer has to manually enter data into multiple systems, which reduces human error, saves countless administrative hours, and provides you with accurate, up-to-date analytics for better decision-making.',
        },
      },
      {
        '@type': 'Question',
        name: "Is our company's data secure during and after the integration process?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Data security is our top priority. We implement robust security protocols, including end-to-end data encryption, secure authentication (like OAuth), and strict compliance checks. We ensure that data flows securely between systems without exposing your architecture to common web vulnerabilities or unauthorized access.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationServiceSchema) }}
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
      <FAQSection
        eyebrow="FAQS"
        titleLine1="FREQUENTLY ASKED"
        titleHighlight="QUESTIONS"
        subtitle="Explore answers to essential questions regarding system integration, API bridges, legacy synchronization, and enterprise security."
        items={systemIntegrationFaqs}
      />
    </div>
  );
};

export default CustomDevelopmentSystemIntegrationPage;

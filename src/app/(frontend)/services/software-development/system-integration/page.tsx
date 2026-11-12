"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
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
            Best Custom App<br />Development &amp; System<br />Integration Services
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
// ==================== Main Page Component ====================
const CustomDevelopmentSystemIntegrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/software-development' },
      { '@type': 'ListItem', position: 3, name: 'Custom Development & System Integration', item: 'https://www.gatecode.in/services/software-development/system-integration' },
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
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Custom software development and system integration agency delivering API middleware, ERP/CRM bridges, and real-time cloud synchronization.',
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
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="software-development/system-integration" serviceName="system integration and custom software" />
      <ContactSection />
    </div>
  );
};

export default CustomDevelopmentSystemIntegrationPage;

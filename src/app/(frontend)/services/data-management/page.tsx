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
        style={{ backgroundImage: `url('/images/data-management.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            DATA<br />MANAGEMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Reliable, accurate, and secure enterprise data management solutions designed to organize datasets, eliminate errors, and accelerate business intelligence.
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
          At Gatecode Technologies Pvt. Ltd., we treat data as the core strategic foundation of modern commercial operations. Disorganized records, duplicate entries, fragmented databases, and manual processing backlogs create severe operational bottlenecks and lead to poor executive decisions. Our enterprise data management services deliver complete end-to-end support—spanning high-speed double-verified data entry, automated ETL processing, rigorous data cleansing, document digitization, CRM database optimization, and actionable BI reporting. Backed by strict non-disclosure protocols, ISO-aligned data privacy frameworks, and modern automation pipelines, we help global organizations maintain pristine data hygiene, streamline operational workflows, and unlock reliable intelligence for confident growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'High-Precision Data Entry', 
    desc: 'Double-key verification and rapid alphanumeric entry across online portals, ERPs, billing systems, and unstructured files.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Automated Data Processing', 
    desc: 'Structured ETL workflows, batch sorting, format transformation, and schema conversion to prepare datasets for analytics.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Data Cleansing & Deduplication', 
    desc: 'Systematic identification and removal of duplicate records, syntax errors, obsolete contacts, and formatting inconsistencies.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Document Digitization & OCR', 
    desc: 'High-resolution scanning, intelligent OCR conversion, and metadata tagging to transform physical paperwork into searchable digital archives.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'CRM Data Optimization', 
    desc: 'Audit, enrichment, contact deduplication, and field structuring across Salesforce, HubSpot, Zoho, and custom CRM platforms.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Data Analysis & BI Dashboards', 
    desc: 'Transforming raw operational metrics into interactive Power BI and Tableau dashboards, visual charts, and executive KPI reports.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Excel & Spreadsheet Modeling', 
    desc: 'Formulating automated macros, dynamic Power Query pipelines, complex formula architectures, and executive tracking spreadsheets.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Secure Cloud Data Migration', 
    desc: 'Zero-downtime data transfer, schema mapping, and post-migration validation between legacy on-premise servers and cloud environments.', 
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
        <h2 className="dm-section-title">Our Data Management Services</h2>
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
  '99.9% data accuracy backed by dual-operator verification',
  'Strict data security with NDA compliance and 256-bit encryption',
  'Scalable processing capacity that easily accommodates volume spikes',
  'Elimination of operational backlogs through fast turnarounds',
  'Seamless compatibility across modern CRMs, ERPs, and cloud storage',
  'Measurable operational cost reduction compared to in-house data teams',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Management Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine human precision with modern data automation to deliver clean, structured, and audit-ready data environments. Our rigorous quality control protocols and enterprise-grade confidentiality ensure that your critical operational information is protected, organized, and immediately accessible.
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
              alt="Custom Data Management Solutions Workflow - Gatecode Technologies"
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
  { title: 'Data Audit & Requirement Scoping', desc: 'Assess current database structures, source formats, quality issues, and project SLA requirements.' },
  { title: 'Workflow Design & Security Setup', desc: 'Establish secure SFTP transfer protocols, field mapping schemas, and non-disclosure governance.' },
  { title: 'Data Extraction & High-Speed Entry', desc: 'Execute structured double-key data entry, optical character recognition, and format extraction.' },
  { title: 'Validation & Quality Assurance', desc: 'Run automated validation scripts and manual spot checks to maintain a strict 99.9% accuracy benchmark.' },
  { title: 'Database Integration & Formatting', desc: 'Upload validated records into client CRMs, custom databases, or cloud analytics storage.' },
  { title: 'Continuous Maintenance & Backups', desc: 'Provide regular database maintenance, periodic deduplication, and encrypted backup archiving.' },
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

// ==================== DigitalIndustries Component ====================
const industries = [
  'Healthcare & Medical',
  'E-Commerce & Retail',
  'Banking & Finance',
  'Education & Training',
  'Corporate Businesses',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Data Entry - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare and Medical Records Digitization - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Real Estate Property Database Structuring - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics and Supply Chain Data Processing - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education and E-Learning Cataloging - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DataManagementServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/data-management' },
      { '@type': 'ListItem', position: 3, name: 'Data Management', item: 'https://www.gatecode.in/services/data-management' },
    ],
  };

  const dataManagementSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Data Management Services',
    name: 'Data Management Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Premier data management company in India offering data entry services, data processing, document digitization services, and database management system solutions.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataManagementSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="data-management" serviceName="data management" />
      <ContactSection />
    </div>
  );
};

export default DataManagementServicesPage;

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
        style={{ backgroundImage: `url('/images/data-management.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            DATA CLEANSING<br />& VALIDATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Restore database integrity, eliminate duplicate records, and maximize operational efficiency with professional data cleansing and validation solutions.
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
          At Gatecode Technologies Pvt. Ltd., we provide comprehensive data cleansing, scrubbing, and validation services designed to eliminate database decay and restore total confidence in your corporate information. Over time, customer records, vendor registries, and product databases accumulate duplicate entries, invalid email addresses, deprecated phone numbers, and inconsistent naming conventions. These data flaws lead to wasted marketing budgets, missed sales opportunities, and inaccurate analytics. Our data quality specialists utilize advanced fuzzy-matching algorithms, regex syntax validation, third-party data enrichment, and address normalization standards to purge redundant records and rectify data anomalies. By restoring pristine data health across your CRM and enterprise systems, we ensure higher deliverability, improved customer outreach, and reliable executive reporting.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Automated Deduplication & Merging', 
    desc: 'Deploying advanced fuzzy-logic algorithms to identify and merge duplicate records while preserving complete historical transaction trails.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Syntax & Format Standardization', 
    desc: 'Normalizing phone numbers, dates, postal codes, and naming conventions to ensure uniform data formatting across all systems.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Address & Geographic Verification', 
    desc: 'Validating street addresses against postal standards, correcting spelling errors, and appending standardized geographic coordinates.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Email & Contact Validation', 
    desc: 'Testing email syntax, domain MX records, and phone availability to eliminate hard bounces and improve marketing campaign deliverability.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Data Enrichment & Appending', 
    desc: 'Filling in missing contact attributes, job titles, corporate domains, and industry classifications using verified third-party datasets.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'CRM Database Scrubbing', 
    desc: 'Auditing and deep-cleaning Salesforce, HubSpot, and Zoho databases to restore pipeline hygiene and streamline sales rep workflows.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Relational Integrity & Anomaly Checks', 
    desc: 'Detecting orphaned records, mismatched foreign keys, impossible numerical values, and illogical date sequences across database tables.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Continuous Quality Monitoring', 
    desc: 'Setting up recurring automated validation rules and scheduled cleansing routines to prevent new data decay from entering systems.', 
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

// ==================== DigitalWhyChoose Component ====================
const benefits = [
  'Elimination of duplicate records and redundant communication costs',
  'Measurable increase in email deliverability and campaign open rates',
  'Enhanced sales team productivity with verified contact phone numbers',
  'Consistent data formatting across all customer touchpoints',
  'Flawless analytics derived from clean, error-free databases',
  'Strict data confidentiality backed by non-disclosure agreements',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Cleansing & Validation Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine cutting-edge algorithmic data scrubbing with human analytical review to eliminate data decay without accidental data loss. Our structured cleansing protocols ensure that your customer and corporate records are enriched, standardized, and immediately ready to support high-converting business operations.
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
              alt="Data Cleansing and Validation Quality Lifecycle - Gatecode Technologies"
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
  { title: 'Data Health Audit & Gap Analysis', desc: 'Profile existing databases to quantify error rates, duplicate clusters, and missing fields.' },
  { title: 'Cleansing Rules & Merge Logic Definition', desc: 'Define field standardization rules, address formats, and primary record retention criteria.' },
  { title: 'Algorithmic Deduplication & Merging', desc: 'Execute fuzzy matching algorithms to isolate and merge duplicate contact and account rows.' },
  { title: 'Verification, Validation & Enrichment', desc: 'Validate syntax, ping domain servers for email validity, and append missing attributes.' },
  { title: 'Quality Assurance & Sanity Testing', desc: 'Conduct statistical sampling audits to ensure zero legitimate records were corrupted or lost.' },
  { title: 'Database Re-Integration & Governance', desc: 'Re-import cleansed datasets into live CRM/ERP environments and deploy ongoing validation rules.' },
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
            <Image src="/images/1.webp" alt="Corporate CRM Data Cleansing - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Record Validation - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="E-Commerce Customer Address Verification - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Financial Ledger Data Deduplication - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education Student Database Standardization - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Professional Data Cleansing and Validation Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Operating on decayed datasets wastes substantial marketing spend, inflates email bounce rates, and frustrates sales teams with disconnected phone numbers and duplicate leads. At Gatecode Technologies, our data cleansing specialists use multi-stage scrubbing techniques to purge inaccuracies, standardize inconsistent fields, and validate critical customer records.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Intelligent Deduplication</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Fuzzy matching algorithms that detect subtle name spelling variations, identical phone numbers, and shared addresses to merge duplicate accounts cleanly.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Syntax & Address Standardization</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Formatting postal addresses, international phone dialing codes, dates, and currency values into globally consistent relational data models.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Contact Verification</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Real-time validation of email deliverability, domain MX records, and telephone connectivity to safeguard sender reputation across campaigns.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Data Enrichment & Filling</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Appending missing corporate attributes, industry SIC codes, employee counts, and decision-maker roles to enhance lead scoring efficacy.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Clean Data Directly Multiplies Commercial Revenue
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A pristine database reduces operational friction, improves customer outreach efficacy, and prevents costly communication errors. Choosing Gatecode Technologies gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Higher Campaign ROI:</strong> Eliminate wasted postage, SMS charges, and invalid email marketing sends.</li>
            <li style={{ marginBottom: '10px' }}><strong>Productive Sales Reps:</strong> Direct sales outreach exclusively to verified, accurate phone numbers and active emails.</li>
            <li style={{ marginBottom: '10px' }}><strong>Trustworthy Executive Reports:</strong> Financial and operational reporting free from duplicate transaction distortions.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DataCleansingValidationServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="digital-marketing-page">
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

export default DataCleansingValidationServicesPage;

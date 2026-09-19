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
            DATA<br />MIGRATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Transfer complex enterprise databases, applications, and cloud storage assets safely with zero data loss, minimal downtime, and rigorous post-migration testing.
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
          At Gatecode Technologies Pvt. Ltd., we provide end-to-end data migration and system transition services designed to move mission-critical business records safely between platforms, databases, and cloud infrastructures. Migrating legacy datasets to modern architectures introduces significant operational risk—including schema mismatches, truncated fields, data corruption, and prolonged system downtime. Our migration engineers follow a battle-tested methodology: conducting thorough pre-migration data audits, structuring bidirectional field mapping, sanitizing legacy records before transfer, executing parallel test cutovers, and implementing comprehensive rollback contingencies. Whether migrating between SQL and NoSQL databases, transitioning on-premise servers to AWS/Azure/GCP, or onboarding into new enterprise ERP/CRM platforms, we guarantee complete data integrity and minimal operational interruption.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Relational Database Migration', 
    desc: 'Secure transfer across MySQL, PostgreSQL, Microsoft SQL Server, and Oracle, ensuring flawless foreign key integrity and index preservation.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'On-Premise to Cloud Migration', 
    desc: 'Migrating legacy on-premise datasets and unstructured file repositories into secure AWS S3, Google Cloud, or Azure cloud storage environments.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'ERP & Core System Migration', 
    desc: 'Transitioning complex enterprise data, historical ledger entries, and vendor registries during SAP, NetSuite, and Microsoft Dynamics upgrades.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'CRM Platform Data Transition', 
    desc: 'Mapping and transferring leads, historical sales pipelines, customer interactions, and contact records between Salesforce, HubSpot, and Zoho.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Pre-Migration Cleansing & Mapping', 
    desc: 'Sanitizing, deduplicating, and normalizing legacy datasets prior to migration to prevent outdated or corrupt data from contaminating new systems.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Automated ETL & Data Translation', 
    desc: 'Engineering high-throughput automated ETL pipelines that translate disparate data types, character encodings, and legacy schemas seamlessly.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Validation & Reconciliation Testing', 
    desc: 'Performing comprehensive row-by-row checksum validations, schema sanity tests, and functional user testing to guarantee 100% data fidelity.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Post-Cutover Support & Audits', 
    desc: 'Providing live operational hypercare, performance tuning, transaction monitoring, and immediate issue resolution following system cutover.', 
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
  'Zero data loss guarantee backed by automated checksum validation',
  'Minimal system downtime planned during low-traffic off-peak windows',
  'Robust rollback contingencies ensuring zero operational business disruption',
  'Thorough pre-migration data sanitation eliminating legacy corrupt records',
  'Bank-grade encrypted data transit compliant with strict privacy regulations',
  'Post-cutover hypercare and rapid resolution of operational edge cases',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Migration Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine proven database engineering protocols with meticulous cutover planning. Our team tests every schema transformation in staging environments before initiating production migrations, ensuring a seamless, stress-free transition for your users and operations.
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
              alt="Enterprise Data Migration Architecture - Gatecode Technologies"
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
  { title: 'System Discovery & Feasibility Study', desc: 'Audit source data structures, volumes, dependencies, target environment constraints, and SLAs.' },
  { title: 'Schema Architecture & Field Mapping', desc: 'Design bidirectional field mappings, handle data type transformations, and configure validation rules.' },
  { title: 'Pre-Migration Data Sanitization', desc: 'Cleanse duplicate rows, reconcile orphan records, and standardize syntax before data transfer.' },
  { title: 'Staging Dry-Run & Reconciliation', desc: 'Execute complete test migrations in isolated sandbox environments to measure timing and verify fidelity.' },
  { title: 'Production Cutover & Transfer', desc: 'Perform live cutover during designated maintenance windows utilizing high-throughput encrypted pipelines.' },
  { title: 'Post-Migration Validation & Hypercare', desc: 'Run automated checksum audits, verify application connectivity, and provide live support.' },
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
            <Image src="/images/1.webp" alt="Banking Database Cloud Migration - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare EHR Data Migration - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Retail E-Commerce Platform Transition - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Supply Chain ERP Data Migration - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Educational Institution Database Upgrade - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Enterprise Data Migration and Cloud Transition Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Migrating critical business databases without experienced technical oversight introduces serious risks of data corruption, lost historical records, and prolonged operational disruption. At Gatecode Technologies, our database migration engineers execute secure, meticulously tested data transfers across relational databases, enterprise applications, and cloud environments with zero data loss.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Relational Database Transfers</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                High-fidelity migrations between SQL Server, Oracle, PostgreSQL, and MySQL maintaining table constraints and foreign key relationships.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Cloud Infrastructure Migration</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Transitioning on-premise servers and legacy storage repositories to scalable cloud environments on AWS, Microsoft Azure, and GCP.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Pre-Migration Data Cleansing</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Auditing, purging duplicate records, and normalizing data types prior to migration to ensure only pristine records populate the new environment.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Checksum Verification & Testing</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Automated row count validation, cryptographic checksum audits, and functional integration tests to guarantee 100% data fidelity.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Professional Migration Planning Guarantees Seamless Upgrades
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A structured migration methodology allows organizations to modernize their digital infrastructure without fear of operational interruption or data loss. Choosing Gatecode Technologies ensures:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero Business Interruption:</strong> Live parallel staging and off-peak production cutovers that minimize system downtime.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete Data Integrity:</strong> Multi-point verification protocols ensuring no records are truncated, dropped, or corrupted.</li>
            <li style={{ marginBottom: '10px' }}><strong>Post-Migration Peace of Mind:</strong> Continuous performance monitoring and immediate developer support during the stabilization period.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DataMigrationServicesPage = () => {
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

export default DataMigrationServicesPage;

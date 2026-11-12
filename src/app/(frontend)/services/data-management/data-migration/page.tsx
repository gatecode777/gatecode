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
      <ServiceFAQ slug="data-management/data-migration" serviceName="data migration" />
      <ContactSection />
    </div>
  );
};

export default DataMigrationServicesPage;

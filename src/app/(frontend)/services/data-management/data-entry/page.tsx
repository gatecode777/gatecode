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
            DATA ENTRY<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Fast, reliable, and double-verified data entry solutions that eliminate administrative backlogs and guarantee 99.9% accuracy.
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
          At Gatecode Technologies Pvt. Ltd., we deliver professional online and offline data entry services engineered to help organizations manage massive information volumes with absolute precision. Manual data entry backlogs drain internal resources and introduce costly clerical errors into core business operations. Our dedicated data management operators utilize dual-key verification, optical character recognition (OCR), and standardized field mapping to process handwritten forms, e-commerce product catalogs, financial invoices, medical records, and customer databases. Backed by strict non-disclosure agreements, encrypted data transfer channels, and multi-tier quality assurance audits, we eliminate paperwork bottlenecks and deliver structured, clean datasets ready for immediate operational use.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Online & Portal Data Entry', 
    desc: 'Direct alphanumeric input into web-based portals, ERP systems, CRM platforms, and content management systems with instant field validation.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Offline & Bulk Form Processing', 
    desc: 'Rapid digitization and capture of handwritten forms, surveys, warranty claims, and physical registration sheets into structured files.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'E-Commerce Catalog Entry', 
    desc: 'Uploading SKU details, product titles, descriptions, technical specifications, variants, pricing, and images across online marketplaces.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Invoice & Receipts Data Entry', 
    desc: 'Capturing line-item purchase orders, vendor invoices, tax figures, billing dates, and remittance details for accounting ledgers.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Document Conversion & Formatting', 
    desc: 'Transforming unstructured PDF, scanned image, or paper files into cleanly formatted Excel, CSV, XML, or database records.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Data Cleansing & Error Correction', 
    desc: 'Cross-verifying data against primary records to remove duplicate entries, fix typos, standardize syntax, and fill missing values.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Database Data Entry & Indexing', 
    desc: 'Entering, categorizing, and indexing corporate database records for rapid searchability and streamlined querying across departments.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Mailing List & CRM Data Entry', 
    desc: 'Compiling, verifying, and updating prospective customer contact details, phone numbers, and physical mailing addresses into CRM systems.', 
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
  'Guaranteed 99.9% accuracy via double-operator data verification',
  'Rapid turnaround times eliminating operational backlogs completely',
  'Strict data confidentiality backed by non-disclosure agreements',
  'Scalable workforce capable of managing high-volume seasonal spikes',
  'Significant cost savings compared to managing in-house data teams',
  'Custom formatting directly compatible with your CRM or ERP software',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Entry Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine experienced data entry specialists with automated quality validation tools to deliver consistently accurate datasets. Our strict security protocols ensure that sensitive customer records, financial receipts, and proprietary documents remain confidential and protected throughout processing.
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
              alt="Professional Data Entry Services Workflow - Gatecode Technologies"
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
  { title: 'Project Scope & Field Mapping', desc: 'Define field schemas, formatting standards, source file types, and delivery deadlines.' },
  { title: 'Secure Data Transfer & Ingestion', desc: 'Receive source files via encrypted cloud storage or secure SFTP connections under strict NDA.' },
  { title: 'Double-Key Data Entry Execution', desc: 'Perform structured alphanumeric input using dual-operator verification to intercept typos.' },
  { title: 'Automated & Manual QA Review', desc: 'Run automated validation scripts followed by random sampling audits by senior QA controllers.' },
  { title: 'File Formatting & Delivery', desc: 'Export completed datasets into clean Excel, CSV, XML, or direct database feeds on schedule.' },
  { title: 'Post-Delivery Verification & Archival', desc: 'Confirm client acceptance, implement revisions if needed, and execute secure temporary archival.' },
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
            <Image src="/images/1.webp" alt="E-Commerce Product Catalog Entry - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Records Data Digitization - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Center Student Enrollment Database - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Finance and Accounting Invoice Entry - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Listing Property Records - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Accurate and Scalable Data Entry Outsourcing Solutions
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Handling large-scale data entry internally frequently diverts valuable core staff, increases payroll expenses, and results in avoidable transcription mistakes. At Gatecode Technologies, our dedicated data processing teams provide fast, secure, and double-verified data entry services designed to keep your business records structured, up-to-date, and readily accessible.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>High-Volume Alphanumeric Entry</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Rapid conversion of printed or handwritten documents, logbooks, and registration forms into structured digital formats with strict field validation.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>E-Commerce Catalog Management</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Comprehensive SKU uploading, product title and description tagging, pricing updates, and image categorization across Shopify, Magento, and Amazon.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Invoice & Ledger Entry</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Meticulous line-item extraction from vendor bills, expense receipts, and credit notes directly into QuickBooks, Tally Prime, and enterprise ERPs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>CRM & Contact List Indexing</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Clean capture and categorization of customer contact information, business cards, survey responses, and sales lead lists with syntax checks.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Outsource Your Data Entry to Gatecode Technologies?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Outsourcing administrative data capture allows your internal team to concentrate on strategic business goals while guaranteeing consistent data quality. Partnering with Gatecode Technologies delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Dual-Operator Quality Control:</strong> Every record is cross-checked against source documents to prevent typo propagation.</li>
            <li style={{ marginBottom: '10px' }}><strong>Enterprise Confidentiality:</strong> Strict non-disclosure agreements, secure encrypted transfer channels, and role-based access.</li>
            <li style={{ marginBottom: '10px' }}><strong>Flexible Turnaround Times:</strong> Same-day and overnight batch processing options to match demanding business cycles.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DataEntryServicesPage = () => {
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

export default DataEntryServicesPage;

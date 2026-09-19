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
            DOCUMENT<br />DIGITIZATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Transform physical paper archives into secure, indexed, and fully searchable digital records with high-precision optical scanning and OCR solutions.
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
          At Gatecode Technologies Pvt. Ltd., we provide professional document digitization, scanning, and optical character recognition (OCR) services that enable organizations to transition seamlessly from paper-cluttered file cabinets to organized, searchable digital repositories. Physical paper records deteriorate over time, consume valuable commercial real estate, and expose organizations to catastrophic loss from fire, water damage, or misplacement. Our digitization specialists employ high-speed industrial scanners, multi-lingual OCR extraction engines, automated metadata tagging, and strict quality inspection workflows to convert historical archives, legal contracts, medical charts, engineering drawings, and financial ledgers into encrypted, searchable PDF/A and cloud database formats. We protect corporate intellectual property while making critical documents instantly retrievable across distributed teams.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'High-Speed Paper Scanning', 
    desc: 'Industrial optical scanning of delicate paper files, bound books, vouchers, invoices, and large-format architectural blueprints up to 600 DPI.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Optical Character Recognition (OCR)', 
    desc: 'Converting scanned image pages into editable, searchable text formats including searchable PDF/A, MS Word, and structured XML.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Metadata Tagging & Indexing', 
    desc: 'Assigning standardized metadata tags such as document ID, author, date, department, and custom taxonomies for instant retrieval.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Electronic Document Archival', 
    desc: 'Structuring hierarchical digital folder systems and secure cloud archives with role-based access control and tamper-proof audit trails.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Legal & Contract Digitization', 
    desc: 'High-fidelity digitization of binding legal contracts, deed records, patents, and compliance filings maintaining strict evidentiary validity.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Medical & Health Record Imaging', 
    desc: 'Digitizing patient case histories, pathology reports, prescription charts, and insurance claim dossiers under strict HIPAA privacy protocols.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Financial Voucher & Bill Archiving', 
    desc: 'Systematic scanning and indexing of purchase orders, vendor invoices, tax receipts, and payment challans linked directly to ERP records.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'DMS & Cloud Storage Integration', 
    desc: 'Uploading digitized collections directly into SharePoint, Google Workspace, AWS S3, or custom Document Management Systems (DMS).', 
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
  'Instant document retrieval via full-text optical searchability',
  'Drastic reduction in physical archive storage and warehouse costs',
  'Permanent preservation against degradation, moisture, and fire damage',
  'Enterprise-grade security with encrypted cloud storage and access controls',
  'Seamless integration into corporate Document Management Systems (DMS)',
  'Strict non-disclosure compliance and confidential on-site/off-site scanning',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Document Digitization Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine industrial document handling protocols with state-of-the-art optical recognition technology. Our meticulous document preparation, de-skewing, image enhancement, and multi-field indexing ensure that your digitized collections are razor-sharp, text-searchable, and fully compliant with corporate records governance.
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
              alt="High-Precision Document Digitization Process - Gatecode Technologies"
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
  { title: 'Document Collection & Prep', desc: 'Sort physical records, remove staples and clips, straighten folds, and organize files into batches.' },
  { title: 'High-Resolution Scanning', desc: 'Scan pages using high-speed duplex sheet-fed and flatbed scanners at 300 to 600 DPI resolution.' },
  { title: 'Image Enhancement & De-skewing', desc: 'Apply automated auto-crop, contrast optimization, despeckling, and rotation for maximum clarity.' },
  { title: 'Intelligent OCR & Text Extraction', desc: 'Convert visual page images into machine-readable text layers using advanced multi-lingual OCR.' },
  { title: 'Metadata Indexing & Tagging', desc: 'Tag each file with document dates, account numbers, record titles, and departmental identifiers.' },
  { title: 'DMS Upload & Physical Re-boxing', desc: 'Upload validated digital files to client cloud repositories and securely re-box physical records.' },
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
            <Image src="/images/1.webp" alt="Banking Historical Ledger Digitization - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Records Scanning - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Legal Firm Contract Archive Digitization - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational University Certificate Digitization - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Accounting Voucher Scanning - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional Document Digitization and Paper Archival Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Relying on physical paper records slows business operations, occupies costly floor space, and exposes organizations to severe data loss risks. At Gatecode Technologies, our document digitization and scanning services convert paper archives into organized, fully searchable, and encrypted digital records that improve organizational productivity.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>High-Resolution Scanning</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                High-speed industrial scanning capturing invoices, contracts, vouchers, and oversized blueprints with crisp 300-600 DPI clarity.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Searchable Optical OCR</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Multi-lingual OCR algorithms that convert scanned image text into searchable PDF/A files for keyword-level instant document discovery.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Metadata Tagging & Taxonomy</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Indexing critical parameters like invoice number, date, vendor name, and category to support automated document retrieval.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>DMS & Cloud Integration</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Direct ingestion into SharePoint, Google Drive, AWS, or on-premise Document Management Systems with role-based access rules.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Digitizing Paper Archives Protects Corporate Knowledge
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Moving to a paperless digital archive safeguards corporate institutional knowledge and ensures instant cross-departmental access. Choosing Gatecode Technologies delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero File Search Latency:</strong> Retrieve any historic voucher or agreement in seconds via automated keyword search.</li>
            <li style={{ marginBottom: '10px' }}><strong>Reduced Real Estate Overheads:</strong> Free up costly physical office square footage previously dedicated to filing boxes.</li>
            <li style={{ marginBottom: '10px' }}><strong>Audit & Regulatory Preparedness:</strong> Maintain tamper-proof, time-stamped digital archives ready for legal or tax review.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DocumentDigitizationServicesPage = () => {
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

export default DocumentDigitizationServicesPage;

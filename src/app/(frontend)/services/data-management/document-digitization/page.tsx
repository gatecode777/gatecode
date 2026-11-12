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
      <ServiceFAQ slug="data-management/document-digitization" serviceName="document digitisation" />
      <ContactSection />
    </div>
  );
};

export default DocumentDigitizationServicesPage;

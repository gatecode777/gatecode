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
        style={{ backgroundImage: `url('/images/Rectangle 228 (17).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            BACK OFFICE<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Streamline business operations, eliminate administrative backlogs, and reduce operating costs with accurate, scalable back-office outsourcing solutions.
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
          At Gatecode Technologies Pvt. Ltd., we provide reliable, secure, and cost-effective back-office outsourcing solutions designed to liberate your core leadership from repetitive administrative burdens. High-volume clerical operations—including invoice verification, billing reconciliations, document indexing, order fulfillment tracking, claims assessment, and database maintenance—require meticulous attention to detail and rigorous quality controls. Managing these workflows in-house often leads to staffing overheads, process bottlenecks, and operational distractions. Our dedicated back-office processing units operate as a natural operational extension of your enterprise, combining trained domain specialists with automated workflow tools and strict multi-tier quality audits to ensure complete accuracy, total data confidentiality, and rapid turnaround times.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Invoice & Accounts Payable Processing', 
    desc: 'Matching vendor invoices with purchase orders, verifying tax calculations, capturing line items, and entering data into accounting ledgers.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Order Processing & Fulfillment Tracking', 
    desc: 'Managing online store orders, validating customer shipping addresses, coordinating with logistics partners, and tracking delivery statuses.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Document Indexing & Records Archiving', 
    desc: 'Categorizing, tagging, and indexing scanned corporate paperwork, employee files, legal deeds, and regulatory documentation for instant retrieval.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Insurance Claims & Form Verification', 
    desc: 'Auditing medical and insurance claim submissions, verifying supporting paperwork, flagging discrepancies, and updating policy systems.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Database Hygiene & CRM Data Entry', 
    desc: 'Regularly updating customer records, removing duplicate contacts, validating company phone numbers, and maintaining pristine database hygiene.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Reconciliation & Transaction Auditing', 
    desc: 'Performing multi-account bank reconciliations, matching credit card merchant statements, and identifying unrecorded balance adjustments.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Content Moderation & Catalog Curation', 
    desc: 'Reviewing user-submitted product reviews, verifying marketplace seller listings, and moderating public community comments under brand policies.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'HR & Payroll Administrative Support', 
    desc: 'Compiling timesheets, verifying employee attendance records, managing paid leave tracking, and processing basic onboarding documentation.', 
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
  'Elimination of clerical backlogs and accelerated transaction throughput',
  'Strict 99.9% accuracy benchmark enforced by multi-tier quality reviews',
  'Substantial reduction in internal staffing overhead and physical office costs',
  'Scalable processing teams ready to expand during seasonal transaction surges',
  'Guaranteed data security with non-disclosure compliance and encrypted storage',
  'Customized workflows tailored directly to your ERP and operational software',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Back Office Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine experienced operational professionals with standardized process methodologies to eliminate administrative friction. Our dedicated back-office specialists ensure your transactions are verified, filed, and processed accurately, allowing your internal leadership to focus on core strategic growth.
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
              alt="Back Office Outsourcing and Workflow Architecture - Gatecode Technologies"
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
  { title: 'Workflow Scoping & SOP Documentation', desc: 'Map existing administrative procedures, define input/output formats, and document detailed standard operating procedures.' },
  { title: 'Security Setup & System Access', desc: 'Establish secure VPN connections, role-based application credentials, and encrypted file transfer folders under strict NDA.' },
  { title: 'Team Allocation & Skill Calibration', desc: 'Assign dedicated processing teams and train specialists on specific client ERP software and validation criteria.' },
  { title: 'Supervised Pilot & Accuracy Benchmarking', desc: 'Process initial test batches under senior quality supervisor oversight to calibrate accuracy to 99.9% standards.' },
  { title: 'Full Production & Daily Throughput', desc: 'Execute daily transaction batches with continuous quality auditing, turnaround tracking, and exception handling.' },
  { title: 'Continuous Review & Process Optimization', desc: 'Deliver weekly throughput metrics and identify opportunities to automate routine tasks and enhance efficiency.' },
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
  'E-Commerce & Retail',
  'Healthcare & Medical',
  'Logistics & Supply Chain',
  'Education & E-Learning',
  'Real Estate & Property',
  'Banking & Financial Services',
  'SaaS & Technology Startups',
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
            <Image src="/images/1.webp" alt="Logistics Shipment Document Processing - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Claims Back Office Auditing - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="E-Commerce Order Fulfillment Processing - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Financial Accounts Payable Entry - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Administrative Records Archiving - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Comprehensive Back-Office Support and Administrative Process Outsourcing
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            In-house back-office management frequently consumes excessive managerial bandwidth, inflates payroll costs, and slows operational turnaround times. At Gatecode Technologies, our managed back-office outsourcing services handle routine data entry, document indexing, accounting reconciliation, and order fulfillment with exceptional accuracy and speed.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Accounts Payable & Invoicing</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Three-way matching of vendor invoices with purchase orders, receipt verification, payment tracking, and ledger postings in QuickBooks or SAP.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Order Processing & Logistics Support</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                High-speed order entry, customer address verification, courier dispatch monitoring, and return tracking across e-commerce marketplaces.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Claims Processing & Form Audits</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Systematic review of insurance submissions, warranty documents, and application forms against strict regulatory policy rules.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Document Archival & Database Updates</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Electronic records classification, metadata indexing, and ongoing database maintenance to preserve institutional corporate memory.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Outsourcing Back-Office Operations Delivers Strategic Advantage
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Transitioning routine administrative operations to a specialized BPO provider frees key staff to focus on customer acquisition, product development, and core revenue drivers. Choosing Gatecode Technologies delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero Processing Backlogs:</strong> Guaranteed daily turnaround times keeping invoices, claims, and orders moving smoothly.</li>
            <li style={{ marginBottom: '10px' }}><strong>Dual-Operator Quality Assurance:</strong> Stringent verification protocols ensuring 99.9% error-free data entry and ledger records.</li>
            <li style={{ marginBottom: '10px' }}><strong>Operational Resilience:</strong> Continuous processing continuity backed by multi-site redundancy and disaster recovery systems.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BackOfficeServicesPage = () => {
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

export default BackOfficeServicesPage;

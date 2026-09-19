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
        style={{ backgroundImage: `url('/images/accounting.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            AUDIT & COMPLIANCE<br />SUPPORT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Ensure complete operational transparency, mitigate financial vulnerabilities, and maintain flawless regulatory adherence with expert audit support.
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
          At Gatecode Technologies Pvt. Ltd., we provide comprehensive audit readiness and compliance support services designed to protect corporate integrity and mitigate regulatory liabilities. Complex fiscal environments demand systematic internal audits, stringent transaction verification, transparent documentation standards, and continuous alignment with statutory guidelines. Our experienced financial audit professionals review internal workflows, examine general ledgers, evaluate standard operating procedures (SOPs), and test internal control frameworks to identify vulnerabilities before external statutory scrutiny occurs. By establishing structured compliance protocols and maintaining audit-ready documentation, we help businesses safeguard operational reputation, avoid severe non-compliance penalties, and instill total stakeholder confidence.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Internal Operational Audits', 
    desc: 'Systematic evaluations of internal financial workflows, authorization hierarchies, and accounting procedures to eliminate inefficiencies.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Statutory Compliance Management', 
    desc: 'Ensuring strict adherence to regional company law, taxation deadlines, labor regulations, and corporate reporting mandates.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Financial Ledger Verification', 
    desc: 'Rigorous reconciliation and validation of balance sheet schedules, bank accounts, vendor balances, and asset registers.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Audit Documentation & Workpapers', 
    desc: 'Preparation of structured audit files, supporting schedules, transaction trails, and reconciliations for external auditors.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Risk Assessment & Internal Controls', 
    desc: 'Identification of operational and financial risks with implementation of robust fraud prevention and internal control checks.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Regulatory Filing & Submissions', 
    desc: 'Timely preparation and filing of statutory compliance returns, corporate registry forms, and government reporting schedules.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'SOP & Workflow Standardization', 
    desc: 'Formulating structured standard operating procedures for billing, expense approvals, procurement, and asset management.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Continuous Compliance Monitoring', 
    desc: 'Ongoing tracking of regulatory changes, periodic compliance checkups, and proactive advisory to prevent compliance gaps.', 
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
  'Proactive identification and elimination of financial discrepancies',
  '100% adherence to evolving statutory regulations and corporate laws',
  'Seamless preparation and accelerated external statutory audits',
  'Reinforced internal controls and minimized fraud exposure',
  'Transparent, audit-ready documentation and standardized ledgers',
  'Protection against costly non-compliance fines and legal notices',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Audit & Compliance Support Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine experienced audit methodologies with objective analytical rigor to ensure your business operates with complete financial integrity. Our proactive compliance management eliminates unexpected audit roadblocks, clarifies corporate reporting standards, and builds trust with investors, lenders, and regulatory authorities.
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
              alt="Audit and Compliance Support Lifecycle - Gatecode Technologies"
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
  { title: 'Scope Definition & Diagnostic Review', desc: 'Define audit scope, compliance obligations, regulatory requirements, and key operational risk zones.' },
  { title: 'Control Testing & Sample Selection', desc: 'Examine ledger entries, vendor invoices, payroll records, and authorization hierarchies across transactions.' },
  { title: 'Gap Identification & Risk Mapping', desc: 'Identify internal control weaknesses, missing supporting documents, or potential statutory compliance shortfalls.' },
  { title: 'Remediation & Workpaper Preparation', desc: 'Reconcile ledger anomalies, assemble supporting workpapers, and implement corrective accounting entries.' },
  { title: 'Audit Dossier & Executive Presentation', desc: 'Compile complete audit-ready binders with detailed executive findings and remediation recommendations.' },
  { title: 'Continuous Oversight & Advisory', desc: 'Provide ongoing compliance reviews and proactive updates as regional and corporate regulations evolve.' },
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
  'Healthcare & Wellness',
  'Education & Training',
  'SaaS & Technology Platforms',
  'Corporate Businesses',
  'Finance & Accounting',
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
            <Image src="/images/1.webp" alt="Corporate Financial Audit Compliance - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="E-Commerce Regulatory Compliance Standards - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Wellness Policy Auditing - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Business Regulatory Inspections - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Educational Institution Financial Compliance - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional Audit Readiness and Regulatory Compliance Support
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Navigating statutory audits without thorough internal preparation often results in delayed filings, qualified auditor remarks, and unexpected tax penalties. At Gatecode Technologies, our audit and compliance specialists work alongside corporate finance teams to structure verifiable transaction trails, test internal controls, and resolve compliance vulnerabilities before external auditors review your ledgers.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Internal Control Reviews</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Rigorous testing of purchase authorisations, expense approvals, segregation of duties, and transaction verification systems.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Statutory Audit Preparation</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Complete workpaper preparation, balance confirmations, asset registers, and audit schedules that expedite auditor sign-offs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Statutory Filing Compliance</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                End-to-end management of corporate registry filings, annual tax returns, and statutory reporting obligations under corporate law.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Risk Mitigation & SOP Design</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Design of standardized accounting operating procedures, fiscal policy handbooks, and fraud prevention checkpoints.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Proactive Audit Preparation Protects Business Value
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Maintaining organized books and continuous compliance ensures seamless interactions with financial institutions, investors, and regulatory bodies. Choosing Gatecode Technologies gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero Statutory Surprises:</strong> Early detection and resolution of reconciliation errors before year-end audits.</li>
            <li style={{ marginBottom: '10px' }}><strong>Faster Auditor Turnarounds:</strong> Well-structured schedules that reduce external auditor billable hours and delays.</li>
            <li style={{ marginBottom: '10px' }}><strong>Executive Confidence:</strong> Documented governance and verifiable internal controls ready for board review.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const AuditComplianceSupportServicesPage = () => {
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

export default AuditComplianceSupportServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Accounting Services) ====================
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
            ACCOUNTING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Reliable, accurate, and compliant corporate accounting solutions that streamline bookkeeping, optimize tax compliance, and protect long-term financial health.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Accounting Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide end-to-end accounting and financial compliance services tailored for startups, SMEs, and growing enterprises. Navigating modern fiscal regulations requires meticulous ledger maintenance, timely statutory filings, structured internal controls, and strategic cash flow planning. Our team of certified accountants and tax professionals manages your daily double-entry bookkeeping, accounts payable and receivable, payroll disbursement, GST reconciliation, and annual corporate taxation with uncompromising accuracy. By integrating modern cloud accounting platforms like Tally Prime, QuickBooks, and Zoho Books with stringent audit standards, we eliminate fiscal discrepancies, prevent non-compliance penalties, and provide executive leadership with real-time financial transparency for strategic decision-making.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Accounting Services) ====================
const services = [
  { 
    title: 'Bookkeeping & Ledger Maintenance', 
    desc: 'Accurate daily double-entry transaction entry, bank reconciliations, and trial balance management for organized ledgers.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'GST & Corporate Taxation', 
    desc: 'End-to-end GST returns, input tax credit reconciliation, corporate advance tax calculations, and statutory compliance filings.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Financial Statements & Reporting', 
    desc: 'Preparation of balance sheets, profit and loss statements, cash flow analyses, and customized management information systems (MIS).', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Payroll Processing & Compliance', 
    desc: 'Automated salary disbursements, TDS deductions, provident fund (PF) compliance, ESIC filings, and digital payslip delivery.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Accounts Payable & Receivable', 
    desc: 'Systematic vendor invoice verification, debtor ageing analysis, dispute resolution, and healthy working capital optimization.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Cloud Accounting Software Setup', 
    desc: 'Setup, migration, and management of Tally Prime, Zoho Books, QuickBooks, and ERP software with automated data synchronization.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Budgeting & Financial Planning', 
    desc: 'Annual operating budgets, variance analysis, revenue forecasting, and fiscal discipline frameworks for sustainable expansion.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Statutory Audit & Compliance Support', 
    desc: 'Comprehensive audit readiness reviews, ledger verification, internal control audits, and liaison support for regulatory compliance.', 
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
        <h2 className="dm-section-title">Our Accounting Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Accounting Services) ====================
const benefits = [
  'Flawless ledger reconciliation and error-free books',
  '100% on-time statutory GST and corporate tax compliance',
  'Streamlined payroll processing and accurate tax deductions',
  'Real-time cash flow visibility and management reports',
  'Bank-grade confidentiality backed by non-disclosure agreements',
  'Scalable accounting infrastructure that grows with your business',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Accounting Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine qualified financial expertise with cutting-edge cloud accounting tools to keep your business fully compliant, financially organized, and audit-ready. Our proactive oversight minimizes tax liabilities, eliminates bookkeeping backlogs, and gives you clear insights to guide profitable commercial operations.
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
              alt="Professional Business Accounting Services Lifecycle - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Accounting Services - 6 Steps) ====================
const processSteps = [
  { title: 'Financial Assessment & Onboarding', desc: 'Review existing corporate ledgers, charts of accounts, tax positions, and software setups.' },
  { title: 'System Setup & Ledger Organization', desc: 'Structure standardized double-entry workflows and integrate banking feeds with cloud platforms.' },
  { title: 'Daily Bookkeeping & Reconciliation', desc: 'Process invoices, receipts, vendor payments, and monthly multi-account bank reconciliations.' },
  { title: 'Statutory Tax & Compliance Filings', desc: 'Calculate and file monthly GST, TDS, advance tax, and employee statutory contributions accurately.' },
  { title: 'Financial Review & MIS Reporting', desc: 'Generate monthly P&L statements, balance sheets, and executive MIS dashboards for leadership.' },
  { title: 'Year-End Audit & Strategic Planning', desc: 'Consolidate annual books, support external statutory audits, and assist with financial planning.' },
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
        <h2 className="dm-section-title">Our Accounting Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Accounting Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Startups & SMEs',
  'Service-Based Businesses',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Bookkeeping - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare and Wellness Financial Auditing - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Real Estate Property Taxation Support - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics and Supply Chain Accounts Handling - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education and E-Learning Payroll Administration - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component (Optimized Existing Section - In Place) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Trusted Accounting and Financial Compliance Services Company
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Managing business finances requires rigorous attention to detail, strict adherence to statutory deadlines, and organized record-keeping. At <strong>Gatecode Technologies</strong>, our seasoned accountants and financial consultants deliver dependable corporate accounting, bookkeeping, and regulatory tax compliance solutions designed to free business leaders from administrative burdens while ensuring total transparency.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Daily Bookkeeping & General Ledger</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Systematic transaction recording, multi-currency ledger reconciliation, and strict adherence to double-entry accounting principles.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>GST & Corporate Tax Preparation</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                End-to-end GST return filings, input tax credit verification, and advance corporate tax estimation to eliminate compliance notices.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Payroll & Statutory Deductions</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Structured salary calculations, employee tax deductions (TDS), provident fund filings, and comprehensive wage register compliance.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Management Reporting & MIS</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Comprehensive financial statements, cash flow monitoring, and monthly MIS reports that give leadership strategic fiscal visibility.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Corporate Accounting?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with an experienced accounting service provider guarantees peace of mind and audit-readiness throughout every fiscal cycle. Choosing Gatecode Technologies delivers tangible benefits:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>100% Tax & Legal Compliance:</strong> Timely GST returns, income tax filings, and strict regulatory adherence without late penalties.</li>
            <li style={{ marginBottom: '10px' }}><strong>Cloud Software Integration:</strong> Seamless operation on Tally Prime, QuickBooks, Zoho Books, and modern ERP environments.</li>
            <li style={{ marginBottom: '10px' }}><strong>Bank-Grade Data Confidentiality:</strong> Strict non-disclosure agreements and secure cloud protocols protecting sensitive financial data.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const AccountingServicesPage = () => {
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

export default AccountingServicesPage;

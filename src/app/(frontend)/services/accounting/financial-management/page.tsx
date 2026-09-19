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
            ACCURATE FINANCIAL<br />MANAGEMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Strengthen cash flow stability, optimize working capital, and gain real-time fiscal control with accurate corporate financial management solutions.
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
          At Gatecode Technologies Pvt. Ltd., we deliver comprehensive financial management and advisory services designed to give businesses total mastery over their fiscal operations. Sustainable profitability requires more than retrospective bookkeeping; it demands disciplined cash flow forecasting, active working capital management, variance tracking, and strategic cost rationalization. Our financial controllers and management accountants partner with business leaders to structure rigorous budgeting processes, monitor operational expenditures, manage vendor credit terms, and build comprehensive management information systems (MIS). By translating complex financial figures into actionable strategic directives, we help enterprises protect liquid reserves, improve operating margins, and confidently execute expansion initiatives.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Bookkeeping & General Ledger Control', 
    desc: 'Maintaining rigorous, day-to-day transaction records, bank feeds, and ledger reconciliations utilizing modern cloud accounting software.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Financial Statements & P&L Analysis', 
    desc: 'Preparing timely balance sheets, income statements, and cash flow reports with variance analysis to evaluate department performance.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Accounts Payable & Working Capital', 
    desc: 'Managing vendor payment terms, cash outflows, invoice approvals, and supplier relationships to optimize corporate working capital.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Accounts Receivable & Credit Control', 
    desc: 'Structuring systematic debtor invoicing, payment reminders, ageing analysis, and dispute resolution to accelerate cash inflows.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Budgeting & Rolling Forecasts', 
    desc: 'Formulating quarterly and annual operational budgets, scenario forecasts, and expenditure caps aligned with commercial targets.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Expense Tracking & Cost Rationalization', 
    desc: 'Granular tracking of operational expenditures, software subscriptions, and overhead costs to identify sustainable savings.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Payroll Management & Disbursements', 
    desc: 'Handling employee compensation, benefits administration, tax deductions, and compliance records with total accuracy.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Strategic Financial Insights & MIS', 
    desc: 'Delivering executive dashboards, unit economics evaluations, and actionable financial counsel for leadership decisions.', 
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
  'Optimized working capital and predictable cash flow runways',
  'Error-free monthly financial closes and balance reconciliations',
  'Granular visibility into department-level operating expenses',
  'Reduced days sales outstanding (DSO) via structured receivable systems',
  'Data-driven budgeting that prevents uncontrolled budget overruns',
  'Actionable MIS reports formatted for founders and executive boards',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Financial Management Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine disciplined corporate finance principles with modern accounting automation to ensure your enterprise maintains exceptional liquidity and fiscal control. Our team acts as an integrated financial management unit, helping you eliminate cash flow surprises, reduce unbudgeted expenses, and make confident investments for long-term growth.
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
              alt="Financial Management Lifecycle and Working Capital - Gatecode Technologies"
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
  { title: 'Fiscal Diagnostic & Cash Flow Audit', desc: 'Examine current ledgers, billing cycles, vendor obligations, and recurring expenditure patterns.' },
  { title: 'System Standardization & Chart of Accounts', desc: 'Structure clear accounting categories, approval thresholds, and automated transaction feeds.' },
  { title: 'Working Capital & Liquidity Management', desc: 'Implement structured receivable reminders and optimized vendor payment scheduling.' },
  { title: 'Monthly Ledger Close & Reconciliations', desc: 'Perform multi-bank balance reconciliations, payroll validations, and accrual adjustments.' },
  { title: 'Management Reporting & Variance Analysis', desc: 'Produce executive MIS packs comparing actual performance against budgetary forecasts.' },
  { title: 'Quarterly Strategic Advisory & Review', desc: 'Conduct strategic sessions with management to review unit economics and refine fiscal plans.' },
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
            <Image src="/images/1.webp" alt="Corporate Financial Management - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Financial Planning - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="E-Commerce Cash Flow Optimization - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Working Capital Management - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Agency Financial Accounting - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Accurate Financial Management & Corporate Controller Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Without structured financial management, growing companies frequently experience cash flow bottlenecks, delayed collections, and unforeseen operational costs. At Gatecode Technologies, our financial management solutions provide businesses with clear operational visibility, structured expense controls, and robust working capital planning to support long-term stability.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Cash Flow & Liquidity Management</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                13-week rolling cash forecasts and liquidity models that ensure your business maintains optimal operational runway and avoids liquidity crunches.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Working Capital Optimization</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Systematic alignment between payable cycles and receivables collection to preserve cash reserves and reduce external financing costs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Budgetary Control & Variance</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Monthly performance assessments comparing actual revenues and expenditures against budgeted projections to highlight cost overruns early.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Executive Financial Dashboards</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Clear MIS reports showing gross margins, EBITDA, customer acquisition costs, and unit economics designed for founder decision-making.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Structured Financial Management Drives Enterprise Value
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Empowering your organization with reliable financial data transforms accounting from a reactive administrative task into a strategic growth asset. Partnering with Gatecode Technologies ensures:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Predictable Liquidity:</strong> Confident forecasting that eliminates surprises during payroll and vendor disbursement cycles.</li>
            <li style={{ marginBottom: '10px' }}><strong>Tighter Cost Controls:</strong> Clear expenditure approval hierarchies and elimination of unnecessary operational overhead.</li>
            <li style={{ marginBottom: '10px' }}><strong>Investor & Lender Readiness:</strong> Accurate, professionally formatted financial statements ready for financing and diligence.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const AccurateFinancialManagementServicesPage = () => {
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

export default AccurateFinancialManagementServicesPage;

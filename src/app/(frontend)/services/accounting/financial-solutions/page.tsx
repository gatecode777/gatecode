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
            STRATEGIC<br />FINANCIAL<br />SOLUTIONS
          </h1>
          <p className="dm-hero-subtitle">
            Scale your business with confidence through data-backed financial modeling, capital allocation strategies, and sustainable profitability advisory.
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
          At Gatecode Technologies Pvt. Ltd., we provide advanced strategic financial advisory and CFO-level consulting designed to help businesses scale sustainably. High-growth enterprises require sophisticated financial frameworks that go far beyond transactional bookkeeping. Our senior financial consultants collaborate directly with founders, corporate executives, and board directors to design robust financial models, optimize unit economics, evaluate capital allocation options, and develop scenario-based revenue forecasts. Whether you are navigating venture fundraising, debt structuring, pricing model restructuring, or cost rationalization across regional divisions, our strategic financial solutions provide the quantitative clarity and commercial insight required to unlock enterprise valuation.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Financial Modeling & Projections', 
    desc: 'Dynamic 3-statement financial models, multi-scenario sensitivity analyses, and headcount forecasts designed for investor presentations.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Unit Economics & Margin Optimization', 
    desc: 'Granular evaluation of customer acquisition costs (CAC), customer lifetime value (LTV), contribution margins, and payback periods.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Capital Allocation & Fundraising Advisory', 
    desc: 'Structuring capital requirements, debt vs. equity evaluation, pitch-deck financial slides, and institutional due-diligence data rooms.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Pricing Strategy & Revenue Architecture', 
    desc: 'Analyzing pricing tiers, discounting models, recurring subscription metrics, and gross margin elasticity to maximize profitability.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Cash Runway & Burn Rate Management', 
    desc: 'Monitoring gross and net cash burn, liquidity runways, and rolling cash flow projections to protect corporate solvency during growth.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Corporate Restructuring & M&A Support', 
    desc: 'Financial due diligence, post-merger integration accounting, asset valuation reviews, and commercial feasibility assessments.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Cost Optimization & Spend Governance', 
    desc: 'Auditing indirect expenditures, vendor contracts, software stacks, and operational overheads to eliminate wasteful capital spend.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Executive Board Reporting & MIS', 
    desc: 'Delivering board-level quarterly financial decks, strategic KPI dashboards, and actionable recommendations for executive leadership.', 
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
  'Institutional-grade financial models and scenario planning',
  'Deep clarity on unit economics, gross margins, and customer LTV',
  'Strategic capital allocation that extends operating cash runway',
  'Robust preparation for investor due diligence and funding rounds',
  'Continuous cost rationalization without sacrificing product quality',
  'CFO-level advisory tailored for ambitious founders and executives',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Strategic Financial Solutions
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine quantitative modeling precision with practical entrepreneurial understanding. Our strategic finance specialists don't just calculate numbers; we interpret financial mechanics to help you make bold, data-backed operational decisions that maximize enterprise valuation.
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
              alt="Strategic Financial Solutions and Growth Advisory - Gatecode Technologies"
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
  { title: 'Strategic Business Diagnostic', desc: 'Assess historical performance, unit economics, revenue composition, and near-term capital requirements.' },
  { title: 'Financial Architecture & Modeling', desc: 'Build dynamic multi-statement models incorporating operational drivers, hiring plans, and growth vectors.' },
  { title: 'Margin & Unit Economics Optimization', desc: 'Evaluate customer acquisition costs, gross margin bottlenecks, and pricing sensitivity across product lines.' },
  { title: 'Capital Strategy & Budget Formulation', desc: 'Formulate growth budgets, capital raising roadmaps, and disciplined expenditure governance rules.' },
  { title: 'Implementation & Operationalization', desc: 'Embed KPI tracking dashboards and automate variance reporting across operational departments.' },
  { title: 'Executive Reviews & Governance', desc: 'Provide monthly leadership briefings, investor updates, and rolling scenario recalculations.' },
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
            <Image src="/images/1.webp" alt="Corporate Financial Modeling - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Financial Solutions - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="E-Commerce Capital Advisory - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Unit Economics Advisory - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Strategic Finance - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Strategic Financial Solutions & Advisory for Growth Enterprises
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Scaling a business requires data-driven financial architecture that aligns commercial aspirations with fiscal reality. At Gatecode Technologies, our strategic finance advisors help executive teams navigate capital allocation, model multi-scenario growth forecasts, and optimize core unit economics to build enduring enterprise value.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Financial Modeling & Projections</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Institutional 3-statement models, headcount planning frameworks, and sensitivity analyses built for executive planning and investor review.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Unit Economics & Margin Analysis</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Detailed evaluation of CAC, payback schedules, gross margins, and churn dynamics to identify highest-leverage revenue drivers.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Fundraising & Capital Strategy</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Financial deck preparation, investor data room structuring, and strategic counsel on equity dilution vs. non-dilutive financing.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Spend Governance & Restructuring</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Systematic evaluation of fixed overheads, vendor contracts, and departmental budgets to eliminate structural waste.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Strategic Financial Leadership Transforms Business Trajectory
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Transforming corporate accounting into forward-looking strategic intelligence provides the clarity needed to make high-conviction decisions. Partnering with Gatecode Technologies ensures:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Clear Financial Vision:</strong> Granular multi-year projections and cash runway clarity under diverse market scenarios.</li>
            <li style={{ marginBottom: '10px' }}><strong>Optimized Profitability:</strong> Direct alignment of marketing, hiring, and capital expenditure with unit profitability.</li>
            <li style={{ marginBottom: '10px' }}><strong>Investor Credibility:</strong> Institutional-grade financial reporting that builds unwavering confidence with capital partners.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const StrategicFinancialSolutionsServicesPage = () => {
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

export default StrategicFinancialSolutionsServicesPage;

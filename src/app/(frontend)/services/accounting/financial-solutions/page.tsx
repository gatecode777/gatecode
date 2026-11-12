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
      <ServiceFAQ slug="accounting/financial-solutions" serviceName="financial solutions" />
      <ContactSection />
    </div>
  );
};

export default StrategicFinancialSolutionsServicesPage;

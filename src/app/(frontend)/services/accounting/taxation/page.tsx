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
            TAXATION & COMPLIANCE<br />SUPPORT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Maintain complete tax compliance, optimize corporate liabilities legally, and eliminate penalty exposure with dedicated direct and indirect tax management.
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
          At Gatecode Technologies Pvt. Ltd., we deliver comprehensive corporate taxation and statutory compliance support services designed to keep businesses legally sound and financially efficient. Managing corporate taxes requires proactive planning, precision filing, and continuous alignment with rapidly changing fiscal regulations. Our experienced tax advisors and chartered accountants manage every aspect of direct and indirect taxation, including monthly GST return filings, input tax credit (ITC) reconciliation, tax deducted at source (TDS) calculations, quarterly advance tax estimations, and annual corporate income tax returns. By applying legal deductions, maintaining verifiable documentation trails, and conducting proactive compliance checkups, we protect your organization against costly notices, late fees, and regulatory audits while optimizing legitimate tax benefits.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Strategic Corporate Tax Planning', 
    desc: 'Structuring tax-efficient operational models, allowable deduction frameworks, and capital expenditure planning to minimize corporate liabilities.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Annual Income Tax Returns (ITR)', 
    desc: 'Accurate computation of taxable corporate income, balance sheet preparation, tax audit support, and on-time filing of annual ITRs.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'GST Filing & ITC Reconciliation', 
    desc: 'Managing monthly GSTR-1, GSTR-3B, and annual GSTR-9 filings with rigorous 2B vendor reconciliation to maximize input tax credit.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'TDS & TCS Compliance Support', 
    desc: 'Accurate calculation of tax deducted at source across vendor payments, salary deductions, quarterly TDS filings, and Form 16 issuance.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Advance Tax Calculation & Filing', 
    desc: 'Quarterly financial estimation of projected profits and advance tax liability to avoid statutory interest penalties.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Tax Assessment & Notice Advisory', 
    desc: 'Professional drafting of responses, documentation preparation, and liaison support for tax authority inquiries and assessment notices.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Transfer Pricing & International Tax', 
    desc: 'Advisory on cross-border transactions, arm’s length pricing documentation, and withholding tax compliance for global commerce.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Continuous Statutory Compliance Tracking', 
    desc: 'Ongoing monitoring of fiscal regulatory changes, statutory calendars, and proactive advisory to ensure perpetual compliance.', 
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
  'Zero late fees and full adherence to statutory tax deadlines',
  'Maximization of legitimate input tax credits (ITC) through vendor matching',
  'Strategic corporate tax planning that legally lowers effective tax rates',
  'Accurate calculation of quarterly advance tax and monthly TDS deductions',
  'Professional representation and advisory for tax notices and scrutiny',
  'Secure, confidential handling of all corporate financial records',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Taxation & Compliance Support Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine exhaustive statutory knowledge with proactive fiscal scheduling to protect your enterprise from compliance pitfalls. Our tax professionals ensure every return is thoroughly verified, reconciled against banking records, and submitted well before statutory deadlines.
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
              alt="Taxation and Statutory Compliance Lifecycle - Gatecode Technologies"
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
  { title: 'Tax Profile & Compliance Diagnostic', desc: 'Review existing tax structures, registration certificates, past filings, and pending obligations.' },
  { title: 'Document Collection & Verification', desc: 'Consolidate sales ledgers, purchase invoices, bank statements, and TDS deduction registers.' },
  { title: 'Reconciliation & Tax Calculation', desc: 'Perform multi-tier vendor ITC matching, advance tax forecasting, and tax liability computations.' },
  { title: 'Draft Review & Client Approval', desc: 'Present prepared tax computations, reconciliation summaries, and filing drafts for corporate sign-off.' },
  { title: 'Statutory Portal Submission & Challans', desc: 'Execute electronic filing on government portals, generate payment challans, and secure filing acknowledgments.' },
  { title: 'Archive Management & Proactive Advisory', desc: 'Maintain complete digital compliance archives and advise leadership on upcoming fiscal legislative updates.' },
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
            <Image src="/images/1.webp" alt="Corporate Tax Compliance Services - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="E-Commerce GST Filing Compliance - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare TDS and Regulatory Filing - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Cross-Border Tax Advisory - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Retail Advance Tax Planning - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const TaxationComplianceSupportServicesPage = () => {
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
      <ServiceFAQ slug="accounting/taxation" serviceName="taxation" />
      <ContactSection />
    </div>
  );
};

export default TaxationComplianceSupportServicesPage;

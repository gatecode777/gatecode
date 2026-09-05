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
            Manage your finances with accuracy, transparency, and compliance
            through our tailored financial solutions.
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
          At Gatecode Technologies Pvt. Ltd., we provide comprehensive financial management services designed to help businesses maintain accurate records, control expenses, and make informed financial decisions. Our approach focuses on streamlined accounting workflows, detailed reporting, and efficient financial planning to ensure your business remains financially stable and growth-ready. From basic bookkeeping to strategic financial management, we deliver solutions that support long-term success.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { title: 'Bookkeeping & Record Management', desc: 'Maintaining accurate and organized financial records the latest accounting software.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Financial Reporting', desc: 'Preparing detailed reports including profit & loss statements, balance sheets, and cash flow analysis.', color: '#fbff06', text: '#000000' },
  { title: 'Accounts Payable & Receivable', desc: 'Managing payments, invoices, and cash flow to ensure stable internal operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Budgeting & Financial Planning', desc: 'Creating budgets and financial strategies to manage data and optimize profitability.', color: '#fbff06', text: '#000000' },
  { title: 'Tax Preparation Support', desc: 'Assisting with tax documentation and ensuring compliance with financial regulations.', color: '#fbff06', text: '#000000' },
  { title: 'Expense Tracking & Control', desc: 'Monitoring expenses and identifying cost-saving opportunities.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Payroll Management', desc: 'Managing employee salaries, deductions, and financial records efficiently.', color: '#fbff06', text: '#000000' },
  { title: 'Financial Analysis & Insights', desc: 'Providing insights and recommendations for better operational decision-making.', color: '#4e7c7e', text: '#ffffff' },
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
  'Accurate and organized financial records',
  'Better cash flow management',
  'Improved financial decision making',
  'Reduced errors and financial risks',
  'Compliance with financial regulations',
  'Professional advisory and insights for growth',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Financial Management Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, reliable, and transparent financial solutions that help businesses stay organized and financially strong. Our team ensures your financial data is well-managed, compliant, and aligned with your business goals.
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
              alt="Strategic Corporate Financial Management Flow - Gatecode Technologies"
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
  { title: 'Financial Assessment', desc: 'Understanding your current financial workflow and requirements.' },
  { title: 'Setup & Integration', desc: 'Structuring accounts and financial tools accurately.' },
  { title: 'Data Entry & Management', desc: 'Recording daily transactions and accounting activities.' },
  { title: 'Review & Budgeting', desc: 'Assessing patterns and financial budgets.' },
  { title: 'Compliance & Auditing', desc: 'Ensuring regulatory compliance and regular monitoring.' },
  { title: 'Ongoing Support', desc: 'Providing continuous financial management assistance.' },
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
  'Corporate Businesses',
  'Real Estate & Construction',
  'Startups & Enterprises',
  'Logistics & Infrastructure',
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
            <Image src="/images/1.webp" alt="E-Commerce Corporate Financial Audits - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Service Expense Management - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Sector Bookkeeping Services - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Enterprise Budgeting and Forecasting - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Agency Financial Accounting - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DigitalMarketingPage = () => {
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
      <ContactSection />
    </div>
  );
};

export default DigitalMarketingPage;

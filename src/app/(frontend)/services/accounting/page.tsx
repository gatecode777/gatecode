"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Accounting Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/accounting.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            ACCOUNTING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We provide accurate, secure, and efficient accounting solutions that help businesses manage finances,<br />
            maintain compliance, and achieve long-term financial stability.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
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
          At Gatecode Technologies Pvt. Ltd., we offer reliable accounting services designed to simplify financial management and support business growth. 
          Our team focuses on maintaining accurate financial records, ensuring compliance, and delivering organized financial solutions tailored to your 
          business needs. From bookkeeping and taxation to payroll and financial reporting, we help businesses streamline financial operations and make 
          informed decisions with confidence.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Accounting Services) ====================
const services = [
  { title: 'Bookkeeping Services', desc: 'Accurate bookkeeping solutions for organized financial records and smooth transaction management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'GST & Taxation Services', desc: 'Professional GST filing, tax preparation, and compliance solutions to support hassle-free financial operations.', color: '#fbff06', text: '#000000' },
  { title: 'Financial Reporting', desc: 'Detailed financial reports and statements that help businesses track performance and make informed decisions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Payroll Management', desc: 'Efficient payroll processing solutions for salary management, employee records, and compliance.', color: '#fbff06', text: '#000000' },
  { title: 'Accounts Payable & Receivable', desc: 'Streamlined payment management solutions to maintain healthy cash flow and financial accuracy.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Tally & Accounting Software Management', desc: 'Expert management of Tally and accounting software for accurate and efficient financial operations.', color: '#fbff06', text: '#000000' },
  { title: 'Budget Planning & Financial Analysis', desc: 'Strategic budgeting and financial analysis services designed to support business growth and stability.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Audit & Compliance Support', desc: 'Reliable audit assistance and compliance management for financial transparency and operational accuracy.', color: '#fbff06', text: '#000000' },
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
  'Accurate financial record management',
  'Improved compliance and tax management',
  'Organized payroll and transaction handling',
  'Better financial planning and reporting',
  'Secure and confidential financial processes',
  'Reliable support for business growth',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Accounting Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, organized, and secure accounting solutions that help businesses manage finances efficiently and maintain 
          compliance. Our experienced team combines financial expertise with a client-focused approach to simplify accounting processes, reduce errors, 
          and support long-term business success.
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
              src="/images/path.png"
              alt="Accounting Services Illustration"
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

// ==================== DigitalProcess Component (Updated for Accounting Services) ====================
const processSteps = [
  { title: 'Financial Requirement Analysis', desc: 'Understanding your business structure and financial management needs.' },
  { title: 'Data Collection & Record Management', desc: 'Organizing and maintaining financial data accurately.' },
  { title: 'Accounting & Compliance Processing', desc: 'Managing bookkeeping, taxation, payroll, and compliance operations.' },
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
            <Image src="/images/1.jpg" alt="Industry 1" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Industry 2" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Industry 3" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Industry 4" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Industry 5" className="dm-industry-img-5" width={200} height={150} />
          </div>
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
      <ContactSection />
    </div>
  );
};

export default AccountingServicesPage;
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Taxation & Compliance Support Services) ====================
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
            Stay compliant, reduce risks, and manage your taxes efficiently with expert support and<br />
            accurate financial practices.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Taxation & Compliance Support Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide reliable taxation and compliance support services to help businesses meet regulatory 
          requirements with confidence. Our approach focuses on accurate tax calculations, proper documentation, and timely filings to ensure 
          full compliance with applicable laws. Whether you need assistance with tax planning, returns, or regulatory compliance, we help 
          simplify complex processes and keep your business financially secure.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Taxation & Compliance Support Services) ====================
const services = [
  { title: 'Tax Planning & Strategy', desc: 'Developing tax efficient strategies to optimize financial performance and reduce liabilities.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Tax Filing & Returns', desc: 'Accurate preparation and timely submission of tax returns.', color: '#fbff06', text: '#000000' },
  { title: 'GST & Indirect Tax Support', desc: 'Managing GST registration, filing, and compliance with indirect tax regulations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'TDS & Payroll Compliance', desc: 'Handling TDS calculations, deductions, and payroll-related compliance requirements.', color: '#fbff06', text: '#000000' },
  { title: 'Regulatory Compliance Management', desc: 'Ensuring adherence to financial and legal regulations across operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Documentation & Record Keeping', desc: 'Maintaining structured financial records for audit and compliance purposes.', color: '#fbff06', text: '#000000' },
  { title: 'Compliance Audit Support', desc: 'Assisting with audits and ensuring all compliance requirements are met.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Compliance Monitoring', desc: 'Continuous tracking of compliance requirements and updates in regulations.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Taxation & Compliance Support Services) ====================
const benefits = [
  'Accurate and timely tax filings',
  'Reduced compliance risks',
  'Better financial planning',
  'Organized documentation',
  'Improved transparency and accountability',
  'Peace of mind with expert support',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Taxation & Compliance Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, transparent, and reliable taxation and compliance solutions that help businesses avoid risks and 
          maintain financial stability. Our team ensures your processes are aligned with regulatory standards while optimizing tax efficiency.
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
              alt="Tax Preparation and Financial Compliance Checklist - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Taxation & Compliance Support Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business structure and tax obligations.' },
  { title: 'Planning & Strategy', desc: 'Developing tax-efficient plans and compliance strategies.' },
  { title: 'Documentation & Preparation', desc: 'Organizing financial records and preparing filings.' },
  { title: 'Filing & Submission', desc: 'Ensuring timely and accurate submission of returns.' },
  { title: 'Audit & Verification', desc: 'Supporting audits and validating compliance.' },
  { title: 'Continuous Monitoring', desc: 'Keeping track of regulatory updates and maintaining compliance.' },
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

// ==================== DigitalIndustries Component (Updated for Taxation & Compliance Support Services) ====================
const industries = [
  'Finance & Accounting',
  'E-Commerce & Retail',
  'Corporate Businesses',
  'Startups & Enterprises',
  'Real Estate & Construction',
  'Healthcare & Wellness',
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
            <Image src="/images/1.webp" alt="Financial Firm Taxation Auditing - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="E-Commerce Tax Filing Compliance - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Business Annual Income Tax Returns - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Startup Tax Planning Advice - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Property Tax Calculations - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
      <ContactSection />
    </div>
  );
};

export default TaxationComplianceSupportServicesPage;

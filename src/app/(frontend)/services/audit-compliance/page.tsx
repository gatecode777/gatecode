"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Audit & Compliance Support Services) ====================
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
            AUDIT & COMPLIANCE<br />SUPPORT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Ensure accuracy, transparency, and regulatory compliance with reliable audit and compliance solutions.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Audit & Compliance Support Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide comprehensive audit and compliance support services to help businesses maintain financial 
          accuracy, operational transparency, and regulatory adherence. Our approach focuses on identifying risks, improving internal controls, 
          and ensuring your processes align with industry standards and legal requirements. Whether it's internal audits, documentation, or compliance 
          management, we help you stay secure, organized, and audit-ready.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Audit & Compliance Support Services) ====================
const services = [
  { title: 'Internal Audit Support', desc: 'Reviewing business processes and financial records to ensure accuracy and efficiency.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Compliance Management', desc: 'Ensuring adherence to industry regulations, policies, and legal standards.', color: '#fbff06', text: '#000000' },
  { title: 'Financial Data Verification', desc: 'Validating financial records and transactions for accuracy and reliability.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Documentation & Reporting', desc: 'Preparing structured audit reports and compliance documentation.', color: '#fbff06', text: '#000000' },
  { title: 'Risk Assessment & Control', desc: 'Identifying potential risks and strengthening internal control systems.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Regulatory Filing Support', desc: 'Assisting with timely and accurate regulatory filings and submissions.', color: '#fbff06', text: '#000000' },
  { title: 'Process Improvement', desc: 'Enhancing operational workflows to meet compliance standards.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Compliance Monitoring', desc: 'Continuous monitoring to ensure long-term compliance and risk management.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Audit & Compliance Support Services) ====================
const benefits = [
  'Improved financial accuracy and transparency',
  'Reduced compliance risks',
  'Strong internal control systems',
  'Better regulatory adherence',
  'Organized documentation and reporting',
  'Enhanced operational efficiency',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Audit & Compliance Support
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering reliable, accurate, and structured audit and compliance solutions that help businesses reduce risks and maintain 
          transparency. Our team ensures your operations meet required standards while improving efficiency and accountability.
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
              alt="Audit & Compliance Illustration"
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

// ==================== DigitalProcess Component (Updated for Audit & Compliance Support Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understand your business processes and compliance needs.' },
  { title: 'Audit Planning', desc: 'Defining scope, objectives, and audit strategies.' },
  { title: 'Data Review & Verification', desc: 'Analyzing records and identifying discrepancies.' },
  { title: 'Risk Assessment', desc: 'Identifying risks and evaluating control measures.' },
  { title: 'Reporting & Recommendations', desc: 'Providing clear audit findings and actionable insights.' },
  { title: 'Continuous Monitoring', desc: 'Ensuring ongoing compliance and improvements.' },
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

// ==================== DigitalIndustries Component (Updated for Audit & Compliance Support Services) ====================
const industries = [
  'Finance & Accounting',
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Corporate Businesses',
  'Education & Institutions',
  'Real Estate & Construction',
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
      <ContactSection />
    </div>
  );
};

export default AuditComplianceSupportServicesPage;
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Excel & Spreadsheet Management Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/data-management.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            EXCEL & SPREADSHEET<br />MANAGEMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Organize, analyze, and manage your data efficiently with professional spreadsheet solutions.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Excel & Spreadsheet Management Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide expert Excel and spreadsheet management services to help businesses handle data 
          accurately and efficiently. Our solutions focus on organizing complex data, improving data accuracy, and creating structured systems 
          that support better decision-making. Whether it's data entry, advanced formulas, reporting, or automation, we ensure your spreadsheets 
          are optimized for performance and productivity.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Excel & Spreadsheet Management Services) ====================
const services = [
  { title: 'Data Entry & Organization', desc: 'Accurate data entry and structured organization for easy access and management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Formula & Function Implementation', desc: 'Implementation of formulas, functions, and calculations to automate tasks and improve efficiency.', color: '#fbff06', text: '#000000' },
  { title: 'Data Cleaning & Formatting', desc: 'Removing errors, duplicates, and inconsistencies while formatting data professionally.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Dashboard & Report Creation', desc: 'Creating interactive dashboards and reports for better data visualization and insights.', color: '#fbff06', text: '#000000' },
  { title: 'Data Analysis & Insights', desc: 'Analyzing data to identify trends, patterns, and business opportunities.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Spreadsheet Automation', desc: 'Automating repetitive tasks using formulas and tools to save time and reduce errors.', color: '#fbff06', text: '#000000' },
  { title: 'Data Conversion & Migration', desc: 'Converting and transferring data between formats and systems efficiently.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Maintenance & Support', desc: 'Regular updates, improvements, and support for smooth spreadsheet management.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Excel & Spreadsheet Management Services) ====================
const benefits = [
  'Organized and structured data',
  'Improved accuracy and reduced errors',
  'Time-saving automation',
  'Better data analysis and reporting',
  'Easy data access and management',
  'Scalable solutions for growing data needs',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Excel & Spreadsheet Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, efficient, and scalable spreadsheet solutions that simplify data management and improve productivity. 
          Our team ensures your data is well-structured, error-free, and optimized for better performance and decision-making.
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
              alt="Excel & Spreadsheet Management Illustration"
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

// ==================== DigitalProcess Component (Updated for Excel & Spreadsheet Management Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your data structure, goals, and requirements.' },
  { title: 'Data Setup & Organization', desc: 'Structuring and organizing data for efficient use.' },
  { title: 'Implementation & Automation', desc: 'Applying formulas, functions, and automation techniques.' },
  { title: 'Quality Check', desc: 'Ensuring accuracy, consistency, and performance.' },
  { title: 'Delivery & Reporting', desc: 'Providing completed spreadsheets with required formats and reports.' },
  { title: 'Ongoing Support', desc: 'Providing continuous updates and improvements.' },
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

// ==================== DigitalIndustries Component (Updated for Excel & Spreadsheet Management Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Finance & Accounting',
  'Education & Training',
  'Real Estate & Construction',
  'Corporate Businesses',
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
const ExcelSpreadsheetManagementServicesPage = () => {
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

export default ExcelSpreadsheetManagementServicesPage;
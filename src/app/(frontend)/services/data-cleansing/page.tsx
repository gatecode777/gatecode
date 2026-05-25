"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Data Cleansing & Validation Services) ====================
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
            DATA CLEANSING<br />& VALIDATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Ensure accurate, reliable, and high-quality data with professional cleaning and validation solutions.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Data Cleansing & Validation Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide expert data cleansing and validation services to help businesses maintain accurate 
          and reliable data. Poor data quality can lead to errors, inefficiencies, and incorrect decisions. Our solutions focus on identifying 
          inconsistencies, removing duplicates, correcting errors, and validating data to ensure it is clean, structured, and ready for use. 
          We help you improve data integrity and maximize the value of your business information.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Data Cleansing & Validation Services) ====================
const services = [
  { title: 'Data Cleaning & Error Correction', desc: 'Identifying and fixing inaccuracies, missing values, and inconsistencies in your data.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Duplicate Data Removal', desc: 'Eliminating duplicate records to maintain a clean and organized database.', color: '#fbff06', text: '#000000' },
  { title: 'Data Standardization', desc: 'Formatting data into consistent structures for better usability and reporting.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Verification & Quality Management', desc: 'Ensuring data accuracy through validation rules and cross-checking processes.', color: '#fbff06', text: '#000000' },
  { title: 'Data Enrichment', desc: 'Enhancing data quality by adding missing or relevant information where needed.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Database Optimization', desc: 'Improving database structure for better performance and accessibility.', color: '#fbff06', text: '#000000' },
  { title: 'CRM Data Cleansing', desc: 'Cleaning and validating customer data in CRM systems for better relationship management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Data Quality Management', desc: 'Continuous monitoring and maintenance to keep your data accurate and up-to-date.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Data Cleansing & Validation Services) ====================
const benefits = [
  'Improved data accuracy and reliability',
  'Removal of duplicates and inconsistencies',
  'Better decision-making with clean data',
  'Enhanced database performance',
  'Increased operational efficiency',
  'Secure and structured data management',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Cleansing & Validation Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering high-quality, accurate, and reliable data solutions that help businesses operate efficiently and make better 
          decisions. Our team uses structured processes and advanced techniques to ensure your data is consistent, error-free, and ready for analysis.
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
              alt="Data Cleansing & Validation Illustration"
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

// ==================== DigitalProcess Component (Updated for Data Cleansing & Validation Services) ====================
const processSteps = [
  { title: 'Data Assessment', desc: 'Understand the current state and quality of your data.' },
  { title: 'Data Cleaning', desc: 'Removing errors, duplicates, and inconsistencies.' },
  { title: 'Validation & Verification', desc: 'Ensuring data accuracy through structured validation processes.' },
  { title: 'Standardization', desc: 'Organizing data into consistent formats.' },
  { title: 'Quality Check', desc: 'Performing final checks to ensure completeness and reliability.' },
  { title: 'Continuous Maintenance', desc: 'Providing ongoing data quality monitoring and updates.' },
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

// ==================== DigitalIndustries Component (Updated for Data Cleansing & Validation Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'Finance & Accounting',
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
const DataCleansingValidationServicesPage = () => {
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

export default DataCleansingValidationServicesPage;

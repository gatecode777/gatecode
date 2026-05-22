"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Data Processing Services) ====================
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
            DATA<br />PROCESSING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Transform raw data into structured, meaningful insights with accurate and efficient<br />
            data processing solutions.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Data Processing Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide reliable data processing services that help businesses organize, manage, and utilize 
          their data effectively. Our solutions focus on accuracy, efficiency, and structured workflows to convert raw data into actionable 
          information. Whether it's data sorting, validation, analysis, or transformation, we ensure your data is clean, organized, and ready 
          to support better business decisions.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Data Processing Services) ====================
const services = [
  { title: 'Data Collection & Sorting', desc: 'Gathering and organizing data from multiple sources into structured formats.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Cleaning & Validation', desc: 'Removing errors, duplicates, and inconsistencies to ensure data accuracy and reliability.', color: '#fbff06', text: '#000000' },
  { title: 'Data Conversion & Formatting', desc: 'Transforming data into required formats such as Excel, CSV, PDF, and other structured formats.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Analysis & Reporting', desc: 'Processing data to generate meaningful insights and detailed reports.', color: '#fbff06', text: '#000000' },
  { title: 'Database Management', desc: 'Maintaining organized databases for easy access and efficient data handling.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Integration', desc: 'Combining data from different systems into a unified and consistent structure.', color: '#fbff06', text: '#000000' },
  { title: 'Bulk Data Processing', desc: 'Handling large volumes of data efficiently with speed and accuracy.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Automated Data Processing', desc: 'Using automation tools to improve speed, reduce manual effort, and enhance accuracy.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Data Processing Services) ====================
const benefits = [
  'Accurate and reliable data processing',
  'Improved data quality and consistency',
  'Faster processing and turnaround time',
  'Reduced manual effort and errors',
  'Better decision-making with structured data',
  'Scalable solutions for growing data needs',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Entry Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, efficient, and scalable data processing solutions that help businesses make better decisions. 
          Our team ensures your data is well-organized, error-free, and ready for analysis, enabling improved productivity and operational efficiency.
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
              alt="Data Processing Illustration"
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

// ==================== DigitalProcess Component (Updated for Data Processing Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your data type, volume, and processing needs.' },
  { title: 'Data Collection & Preparation', desc: 'Organizing and preparing data for processing.' },
  { title: 'Processing & Transformation', desc: 'Cleaning, sorting, and converting data into structured formats.' },
  { title: 'Quality Check & Validation', desc: 'Ensuring accuracy, consistency, and completeness.' },
  { title: 'Reporting & Delivery', desc: 'Providing processed data and insights in required formats.' },
  { title: 'Continuous Support', desc: 'Offering ongoing updates and improvements for data processes.' },
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

// ==================== DigitalIndustries Component (Updated for Data Processing Services) ====================
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
const DataProcessingServicesPage = () => {
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

export default DataProcessingServicesPage;
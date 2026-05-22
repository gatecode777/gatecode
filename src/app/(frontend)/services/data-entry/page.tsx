"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Data Entry Services) ====================
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
            DATA ENTRY<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Accurate, efficient, and secure data entry solutions to streamline your business operations<br />
            and save valuable time.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Data Entry Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide reliable data entry services designed to help businesses manage large volumes of data 
          with accuracy and efficiency. Our team ensures error-free data processing, organized data management, and timely delivery. Whether it's 
          simple data entry, data conversion, or database management, we deliver solutions that reduce workload and improve operational productivity.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Data Entry Services) ====================
const services = [
  { title: 'Online & Offline Data Entry', desc: 'Accurate data entry services for both online platforms and offline records.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Processing & Management', desc: 'Efficient handling, organizing, and managing of business data for better accessibility.', color: '#fbff06', text: '#000000' },
  { title: 'Data Conversion Services', desc: 'Converting data into various formats such as PDF, Excel, Word, and other digital formats.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Cleaning & Validation', desc: 'Removing errors, duplicates, and inconsistencies to ensure high-quality data.', color: '#fbff06', text: '#000000' },
  { title: 'Database Management', desc: 'Maintaining structured databases for easy data access and efficient operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'CRM Data Entry', desc: 'Updating and managing customer data within CRM systems for better customer relationship management.', color: '#fbff06', text: '#000000' },
  { title: 'E-Commerce Data Entry', desc: 'Product data entry and catalog management for e-commerce platforms.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Document Digitization', desc: 'Converting physical documents into digital formats for easy storage and access.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Data Entry Services) ====================
const benefits = [
  'High accuracy and attention to detail',
  'Time-saving and cost-effective solutions',
  'Secure and confidential data handling',
  'Organized and structured data management',
  'Quick turnaround time',
  'Scalable services for business growth',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Entry Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering precise, secure, and time-efficient data entry solutions that help businesses reduce manual effort and improve 
          productivity. Our team ensures high accuracy, confidentiality, and consistent performance across all data-related tasks.
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
              alt="Data Entry Illustration"
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

// ==================== DigitalProcess Component (Updated for Data Entry Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your data type, volume, and project needs.' },
  { title: 'Data Collection & Setup', desc: 'Organizing data sources and preparing for processing.' },
  { title: 'Data Entry & Processing', desc: 'Accurate input and management of data.' },
  { title: 'Quality Check & Validation', desc: 'Ensuring error-free and consistent data.' },
  { title: 'Delivery & Reporting', desc: 'Providing completed data with required formats and reports.' },
  { title: 'Ongoing Support', desc: 'Maintaining and updating data as needed.' },
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

// ==================== DigitalIndustries Component (Updated for Data Entry Services) ====================
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
const DataEntryServicesPage = () => {
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

export default DataEntryServicesPage;
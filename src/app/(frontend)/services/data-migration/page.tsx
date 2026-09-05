"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Data Migration Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/data-management.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            DATA<br />MIGRATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Seamlessly transfer your data across systems with accuracy, security, and minimal downtime.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Data Migration Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide reliable data migration services to help businesses move their data safely and efficiently
          between systems, platforms, or databases. Our approach focuses on accuracy, data integrity, and minimal disruption to your operations.
          Whether you're upgrading systems, moving to the cloud, or consolidating data, we ensure a smooth transition with secure and structured
          migration processes.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Data Migration Services) ====================
const services = [
  { title: 'Database Migration', desc: 'Secure transfer of data between databases while maintaining accuracy and structure.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Cloud Data Migration', desc: 'Migrating data to cloud platforms for improved accessibility, scalability, and performance.', color: '#fbff06', text: '#000000' },
  { title: 'Application Data Migration', desc: 'Transferring data between applications without loss or disruption.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'System Upgrades & Migration', desc: 'Seamless migration during system upgrades to ensure continuity and performance.', color: '#fbff06', text: '#000000' },
  { title: 'Data Extraction & Transformation', desc: 'Extracting, cleaning, and transforming data into compatible formats for new systems.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Validation & Testing', desc: 'Ensuring data accuracy, consistency, and completeness after migration.', color: '#fbff06', text: '#000000' },
  { title: 'Legacy System Migration', desc: 'Upgrading and migrating data from outdated systems to modern platforms.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Support & Monitoring', desc: 'Continuous support to ensure smooth operation after migration.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Data Migration Services) ====================
const benefits = [
  'Secure and reliable data transfer',
  'Minimal downtime and disruption',
  'Accurate and error-free migration',
  'Improved system performance',
  'Scalable and future-ready solutions',
  'Seamless integration with new systems',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Migration Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering secure, accurate, and efficient data migration solutions that minimize risks and downtime. Our team ensures
          that your data is transferred seamlessly while maintaining integrity, security, and performance.
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
              alt="Database Schema and Data Migration Mapping - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Data Migration Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your current system, data structure, and migration goals.' },
  { title: 'Planning & Strategy', desc: 'Creating a structured migration plan with risk assessment.' },
  { title: 'Data Extraction & Preparation', desc: 'Collecting and preparing data for migration.' },
  { title: 'Data Transformation & Mapping', desc: 'Converting data into compatible formats for the new system.' },
  { title: 'Validation & Testing', desc: 'Ensuring accuracy, completeness, and system compatibility.' },
  { title: 'Deployment & Support', desc: 'Finalizing migration and providing ongoing support.' },
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

// ==================== DigitalIndustries Component (Updated for Data Migration Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Finance & Accounting',
  'Education & E-Learning',
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
            <Image src="/images/1.webp" alt="E-Commerce Platform Database Migration - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Records Cloud Migration - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Finance Ledger Data Migration - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Institutional Database Migration - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Property Listing Data Transfer - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DataMigrationServicesPage = () => {
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

export default DataMigrationServicesPage;

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
        style={{ backgroundImage: `url('/images/data-management.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            DATA<br />PROCESSING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Convert fragmented raw datasets into structured, validated, and analytics-ready assets with automated high-speed data processing workflows.
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
          At Gatecode Technologies Pvt. Ltd., we deliver comprehensive data processing and transformation solutions that turn chaotic raw datasets into structured, consistent, and actionable corporate information. Modern enterprises ingest disparate streams of information from survey platforms, web forms, transaction logs, third-party APIs, and legacy spreadsheets. Without systematic extraction, transformation, and loading (ETL), this data becomes fragmented, inconsistent, and unusable for analytics. Our data specialists apply automated validation scripts, schema standardization, format conversion, and data deduplication to ensure your databases remain pristine. By structuring your datasets for seamless integration into modern analytics engines, business intelligence tools, and enterprise databases, we empower decision-makers with dependable operational visibility.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Automated ETL Pipeline Processing', 
    desc: 'Extracting data from multi-channel sources, executing structured transformations, and loading clean datasets into destination databases.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Data Validation & Quality Audits', 
    desc: 'Applying algorithmic checks to verify syntax, check numerical ranges, identify incomplete records, and rectify data anomalies.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Format Conversion & Normalization', 
    desc: 'Converting legacy data formats across XML, JSON, CSV, Excel, SQL, and proprietary schemas into uniform standardized models.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Batch Transaction Processing', 
    desc: 'High-speed automated processing of recurring transaction logs, banking feeds, billing records, and inventory balance updates.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Multi-Source Data Integration', 
    desc: 'Harmonizing and merging datasets from disparate platforms, sales channels, and subsidiaries into a single unified record repository.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Form & Survey Data Aggregation', 
    desc: 'Aggregating, organizing, and structuring qualitative and quantitative survey inputs, feedback forms, and customer registration metrics.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Data Cleansing & Deduplication', 
    desc: 'Eliminating duplicate entries, correcting syntax discrepancies, and standardizing address and naming fields across all records.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Analytics-Ready Dataset Preparation', 
    desc: 'Structuring tabular schemas, calculating derived operational metrics, and generating ready-to-ingest datasets for BI dashboards.', 
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
  'End-to-end automated pipelines that eliminate manual processing delays',
  'Rigorous data standardization that ensures flawless system interoperability',
  'Elimination of duplicate records and corrupt values before analytics ingestion',
  'High-throughput capability capable of processing millions of rows seamlessly',
  'Total data privacy with bank-grade encryption and strict confidentiality agreements',
  'Customized output structures formatted specifically for your BI platforms',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Processing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine advanced automated transformation scripts with experienced data quality analysts to ensure zero data corruption. Our structured processing pipelines standardize inconsistent inputs, resolve validation conflicts, and provide analytics teams with pristine information they can rely on.
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
              alt="Automated Data Processing Architecture - Gatecode Technologies"
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
  { title: 'Source Ingestion & Schema Audit', desc: 'Audit incoming data feeds, evaluate field structures, and identify inconsistent data types.' },
  { title: 'Transformation Logic Configuration', desc: 'Configure normalization rules, filtering logic, and format translation algorithms.' },
  { title: 'Automated Cleaning & Cleansing', desc: 'Execute automated scripts to eliminate duplicate rows, standardize dates, and trim whitespace.' },
  { title: 'Algorithmic Validation & QA Check', desc: 'Perform multi-tier validation checks to ensure zero data loss and 100% relational integrity.' },
  { title: 'Target Destination Loading', desc: 'Load transformed records into target databases, cloud warehouses, or analytics environments.' },
  { title: 'Continuous Pipeline Monitoring', desc: 'Provide ongoing monitoring, exception logging, and regular maintenance for recurring batch jobs.' },
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
  'Healthcare & Medical',
  'E-Commerce & Retail',
  'Banking & Finance',
  'Education & Training',
  'Corporate Businesses',
  'Logistics & Operations',
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
            <Image src="/images/1.webp" alt="Banking Transaction Data Processing - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Claims Data Processing - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Retail Multi-Channel Sales Data Processing - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Supply Chain Inventory Data Pipeline - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="E-Learning Student Assessment Processing - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
      <ServiceFAQ slug="data-management/data-processing" serviceName="data processing" />
      <ContactSection />
    </div>
  );
};

export default DataProcessingServicesPage;

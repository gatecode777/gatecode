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

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Enterprise Data Processing & ETL Transformation Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Unprocessed raw data is full of formatting inconsistencies, syntax errors, and duplicate entries that break analytical tools and mislead business strategies. At Gatecode Technologies, our data processing solutions systematically organize, clean, and convert massive enterprise datasets into standardized formats that seamlessly power operational databases and executive dashboards.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Automated ETL Pipelines</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                End-to-end extraction, transformation, and loading pipelines that automatically cleanse and format incoming records for target databases.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Format Normalization & Mapping</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Translating disparate file types including XML, JSON, CSV, and legacy flat files into consistent relational structures.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>High-Volume Batch Processing</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Processing large transaction logs, credit reports, customer records, and inventory catalogs with rapid turnaround SLAs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Integrity Audits & Quality Control</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Automated regex checks, schema verification, and statistical sampling to guarantee zero data loss during transformation.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why High-Quality Data Processing Powers Strategic Growth
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Transforming raw data into validated records allows organizations to eliminate manual spreadsheet management and make confident decisions. Choosing Gatecode Technologies ensures:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Accelerated Business Intelligence:</strong> Analytics teams spend zero time cleaning datasets and immediately extract value.</li>
            <li style={{ marginBottom: '10px' }}><strong>Universal System Compatibility:</strong> Seamless data flows between external partners, internal legacy systems, and modern cloud ERPs.</li>
            <li style={{ marginBottom: '10px' }}><strong>Enterprise Reliability:</strong> Rigorous validation protocols ensuring 99.9% data accuracy across every operational row.</li>
          </ul>

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
      <SeoContentSection />
      <ContactSection />
    </div>
  );
};

export default DataProcessingServicesPage;

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
            EXCEL & SPREADSHEET<br />MANAGEMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Automate manual workbook tasks, build robust formula architectures, and design executive dashboards with advanced spreadsheet management solutions.
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
          At Gatecode Technologies Pvt. Ltd., we deliver advanced Microsoft Excel and Google Sheets data management services engineered to streamline business operations and eliminate manual calculation errors. While spreadsheets remain the operational backbone of modern commerce, unorganized workbooks filled with broken formula references, slow-loading macros, and inconsistent data formatting create serious operational vulnerabilities. Our spreadsheet specialists construct automated Power Query pipelines, dynamic formula models (utilizing modern XLOOKUP, INDEX/MATCH, and dynamic array logic), custom VBA macros, and interactive executive reporting dashboards. We transform cluttered, error-prone workbooks into stable, automated, and secure operational tools that save hundreds of staff hours and deliver accurate business visibility.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Advanced Formula Architecture', 
    desc: 'Constructing robust, error-free formula structures using dynamic arrays, XLOOKUP, INDEX/MATCH, and nested conditional logic.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'VBA Macro & Process Automation', 
    desc: 'Developing customized VBA scripts to automate repetitive copying, formatting, file splitting, and automated report generation.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Power Query & Automated ETL', 
    desc: 'Connecting disparate data files, web feeds, and SQL tables into self-refreshing Power Query workflows that transform data instantly.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Interactive Executive Dashboards', 
    desc: 'Designing professional, C-suite visual dashboards with dynamic pivot tables, timeline slicers, and formatted performance charts.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Data Cleansing & Format Standardizing', 
    desc: 'Purging duplicate rows, trimming whitespace, standardizing date/currency formats, and restructuring inconsistent column layouts.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Data Validation & Error Proofing', 
    desc: 'Implementing strict input validation rules, dropdown selectors, cell protection constraints, and audit trails to prevent user error.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Financial & Budget Modeling', 
    desc: 'Building multi-year revenue projections, cash flow models, operational variance schedules, and unit economics spreadsheets.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Google Sheets & Cloud Collaboration', 
    desc: 'Configuring multi-user Google Sheets with Google Apps Script automations, permission locking, and real-time team collaboration.', 
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
  'Elimination of broken formulas, calculation errors, and slow performance',
  'Automated one-click data consolidation via modern Power Query pipelines',
  'Hundreds of manual operational hours saved through customized VBA macros',
  'Executive-ready visual dashboards displaying real-time operational KPIs',
  'Protected spreadsheet models with locked formulas and structured inputs',
  'Full compatibility across Excel Desktop, Office 365, and Google Sheets',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Excel & Spreadsheet Management Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine advanced quantitative modeling expertise with modern spreadsheet automation techniques. Our solutions transform sluggish, complex workbooks into fast, automated, and visually engaging tools that provide accurate decision metrics at the click of a button.
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
              alt="Advanced Excel Spreadsheet Management and Automation - Gatecode Technologies"
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
  { title: 'Workbook Audit & Logic Scoping', desc: 'Examine current spreadsheets, identify broken circular references, evaluate macros, and scope objectives.' },
  { title: 'Data Restructuring & Cleaning', desc: 'Normalize raw data tabs, purge redundant rows, and establish standardized tabular database schemas.' },
  { title: 'Formula Optimization & Architecture', desc: 'Replace fragile formulas with dynamic array logic, structured table references, and error-handling wrappers.' },
  { title: 'Automation & Pipeline Engineering', desc: 'Develop Power Query workflows or VBA macros to automate multi-file consolidation and repetitive tasks.' },
  { title: 'Dashboard & UI/UX Design', desc: 'Build clean, visually engaging presentation tabs with dynamic slicers, pivot tables, and KPI cards.' },
  { title: 'User Testing, Protection & Training', desc: 'Lock sensitive cells, validate input restrictions, and deliver detailed documentation and user walkthroughs.' },
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
            <Image src="/images/1.webp" alt="Corporate Financial Modeling Spreadsheets - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Inventory Spreadsheet Management - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Retail Multi-Store Sales Tracking Sheets - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Supply Chain Logistics Planning Workbooks - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education Student Grade & Evaluation Spreadsheets - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional Excel Spreadsheet Modeling and Process Automation Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Poorly structured spreadsheets cost businesses thousands of wasted hours through manual data re-entry, broken formulas, and calculation mistakes. At Gatecode Technologies, our spreadsheet consultants design automated, durable, and visually polished Excel and Google Sheets solutions that transform routine workbook management into an efficient operational asset.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Automated Power Query Pipelines</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Automating multi-file consolidation, database extraction, and data reshaping into one-click refreshes without writing code.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom VBA & Macro Development</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Developing custom Visual Basic macros that automate repetitive formatting, invoice generation, email dispatching, and file exporting.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Interactive Spreadsheet Dashboards</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Creating presentation-ready visual dashboards with dynamic slicers, interactive charts, and executive KPI summary cards.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Financial & Operational Modeling</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Structuring robust, audited financial forecast models, inventory tracking systems, and unit economics templates built for scale.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Professional Spreadsheet Engineering Protects Bottom-Line Accuracy
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Eliminating fragile formulas and manual data manipulation prevents costly fiscal errors and frees your team for high-value strategic work. Choosing Gatecode Technologies delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero Calculation Errors:</strong> Audit-tested formulas that prevent circular references and incorrect financial totals.</li>
            <li style={{ marginBottom: '10px' }}><strong>Rapid Data Processing:</strong> Optimized workbook calculations that eliminate lag and crashing on large data tables.</li>
            <li style={{ marginBottom: '10px' }}><strong>User-Friendly Design:</strong> Clean, intuitive user interfaces with locked formulas and dropdown validation menus.</li>
          </ul>

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
      <SeoContentSection />
      <ContactSection />
    </div>
  );
};

export default ExcelSpreadsheetManagementServicesPage;

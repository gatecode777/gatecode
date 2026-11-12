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
            DATA ANALYSIS<br />& REPORTING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Transform complex operational datasets into clear visual dashboards, predictive trend analyses, and executive business intelligence reports.
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
          At Gatecode Technologies Pvt. Ltd., we deliver advanced data analysis, visual dashboarding, and business intelligence (BI) reporting services that empower leaders to make confident, data-backed decisions. Most organizations capture vast quantities of transactional data but struggle to extract actionable insights buried beneath disconnected spreadsheets and isolated software tools. Our data analysts and business intelligence specialists connect directly to your database feeds, clean and aggregate operational metrics, model historical trends, and construct intuitive visual dashboards using Power BI, Tableau, and custom analytics portals. By identifying hidden operational inefficiencies, forecasting revenue patterns, and tracking core performance indicators (KPIs) in real time, we turn dormant data into a high-leverage commercial advantage.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Exploratory Data Analysis (EDA)', 
    desc: 'Uncovering underlying patterns, correlations, statistical distributions, and anomalies within complex multi-source enterprise datasets.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Interactive BI Dashboards', 
    desc: 'Designing custom Power BI, Tableau, and Looker Studio dashboards featuring real-time data refreshes and interactive drill-down filters.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Executive KPI Reporting', 
    desc: 'Synthesizing complex department metrics into concise, C-suite executive briefing packs, monthly performance reviews, and board presentations.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Sales & Revenue Trend Analysis', 
    desc: 'Tracking customer acquisition dynamics, churn rates, seasonality fluctuations, and cohort lifetime value across revenue channels.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Customer Behavior & Funnel Telemetry', 
    desc: 'Analyzing user journeys, shopping cart abandonment drop-offs, product affinity clusters, and conversion touchpoints.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Operational & Supply Chain Analytics', 
    desc: 'Evaluating inventory turnover cycles, order fulfillment lead times, and supplier performance metrics to eliminate bottlenecks.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Automated Scheduled Reporting', 
    desc: 'Configuring automated email triggers and Slack notifications delivering daily, weekly, and monthly operational summaries to managers.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Predictive Modeling & Forecasting', 
    desc: 'Applying statistical regression models and trend forecasting algorithms to anticipate market demand and inventory requirements.', 
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
  'Total operational visibility through real-time interactive dashboards',
  'Identification of high-margin revenue drivers and growth opportunities',
  'Automated reporting workflows that eliminate manual spreadsheet compilation',
  'Objective, data-backed insights replacing subjective guesswork in leadership',
  'Custom visualizations tailored to the exact KPIs of your business model',
  'Bank-grade confidentiality backed by comprehensive non-disclosure protocols',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Analysis & Reporting Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine quantitative statistical rigor with commercial intuition. Our visual analytics turn complicated data tables into intuitive visual stories that highlight immediate operational risks, reveal emerging customer preferences, and accelerate decisive leadership execution.
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
              alt="Data Analysis and Business Intelligence Reporting Flow - Gatecode Technologies"
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
  { title: 'Business Objective & KPI Definition', desc: 'Identify core operational metrics, target decision outcomes, and primary data sources.' },
  { title: 'Data Ingestion & Pipeline Modeling', desc: 'Connect APIs, transactional databases, and flat files into structured relational data models.' },
  { title: 'Exploratory Analysis & Verification', desc: 'Conduct statistical testing, verify data distribution, and cleanse outliers or recording errors.' },
  { title: 'Dashboard Architecture & Design', desc: 'Construct intuitive interactive visual dashboards featuring cross-filtering and drill-downs.' },
  { title: 'Stakeholder Review & Iteration', desc: 'Validate dashboard accuracy against operational benchmarks with department leaders.' },
  { title: 'Automated Deployment & Maintenance', desc: 'Deploy scheduled data refreshes, automated alerts, and provide ongoing analytical support.' },
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
            <Image src="/images/1.webp" alt="E-Commerce Sales Conversion Analysis - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Outcome BI Reporting - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Banking Risk and Portfolio Analysis - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics Fleet Performance Dashboards - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Financial KPI Reporting - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DataAnalysisReportingServicesPage = () => {
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
      <ServiceFAQ slug="data-management/data-analysis" serviceName="data analysis and reporting" />
      <ContactSection />
    </div>
  );
};

export default DataAnalysisReportingServicesPage;

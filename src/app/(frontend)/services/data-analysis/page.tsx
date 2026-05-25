"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Data Analysis & Reporting Services) ====================
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
            DATA ANALYSIS<br />& REPORTING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Turn your data into actionable insights with accurate analysis and clear, meaningful reports.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Data Analysis & Reporting Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide professional data analysis and reporting services that help businesses make informed 
          decisions. Our approach focuses on transforming raw data into structured insights through advanced analysis techniques and easy-to-understand 
          reports. We help you identify trends, measure performance, and uncover opportunities that drive growth and efficiency.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Data Analysis & Reporting Services) ====================
const services = [
  { title: 'Data Analysis & Insights', desc: 'In-depth analysis of your data to identify patterns, trends, and key business insights.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Custom Reporting Solutions', desc: 'Tailored reports designed according to your business requirements and objectives.', color: '#fbff06', text: '#000000' },
  { title: 'Data Visualization', desc: 'Clear and engaging charts, graphs, and visual representations of complex data.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Dashboard Development', desc: 'Interactive dashboards for real-time data visualization and performance tracking.', color: '#fbff06', text: '#000000' },
  { title: 'Business Intelligence Reporting', desc: 'Structured reporting solutions that support strategic planning and decision-making.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'KPI Tracking & Monitoring', desc: 'Monitoring key performance indicators to evaluate business performance.', color: '#fbff06', text: '#000000' },
  { title: 'Automated Reporting', desc: 'Setting up automated reports for regular tracking and updates.', color: '#4e7c7e', text: '#ffffff' },
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

// ==================== DigitalWhyChoose Component (Updated for Data Analysis & Reporting Services) ====================
const benefits = [
  'Better decision-making with data insights',
  'Clear and structured reporting',
  'Identification of trends and opportunities',
  'Improved business performance tracking',
  'Data-driven strategies',
  'Time-saving automated reporting solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Analysis & Reporting Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, insightful, and easy-to-understand data analysis solutions that help businesses make smarter decisions. 
          Our team combines analytical expertise with modern tools to provide meaningful insights and clear reporting for better business performance.
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
              alt="Data Analysis & Reporting Illustration"
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

// ==================== DigitalProcess Component (Updated for Data Analysis & Reporting Services) ====================
const processSteps = [
  { title: 'Data Collection & Understanding', desc: 'Gathering and understanding your data sources and business objectives.' },
  { title: 'Data Cleaning & Preparation', desc: 'Ensuring data accuracy and consistency before analysis.' },
  { title: 'Data Analysis', desc: 'Applying analytical techniques to extract meaningful insights.' },
  { title: 'Data Visualization & Reporting', desc: 'Creating clear visualizations and structured reports.' },
  { title: 'Recommendations & Strategy', desc: 'Providing actionable suggestions for improvement.' },
  { title: 'Continuous Monitoring', desc: 'Updating reports and tracking performance regularly.' },
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

// ==================== DigitalIndustries Component (Updated for Data Analysis & Reporting Services) ====================
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
      <ContactSection />
    </div>
  );
};

export default DataAnalysisReportingServicesPage;

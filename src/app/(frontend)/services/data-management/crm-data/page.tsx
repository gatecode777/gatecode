"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for CRM Data Management Services) ====================
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
            CRM DATA<br />MANAGEMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Organize, manage, and optimize your customer data for better relationships, smarter decisions,<br />
            and business growth.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for CRM Data Management Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide professional CRM data management services designed to help businesses effectively 
          manage customer information and improve relationship management. Our solutions focus on maintaining accurate, structured, and 
          up-to-date data within your CRM system, enabling better communication, targeted marketing, and improved customer experiences. 
          From data entry and cleansing to integration and reporting, we ensure your CRM works efficiently and delivers real value to your business.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for CRM Data Management Services) ====================
const services = [
  { title: 'CRM Data Entry & Management', desc: 'Accurate entry and organization of customer data within your CRM system.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Cleansing & Deduplication', desc: 'Removing duplicates, correcting errors, and ensuring data accuracy and consistency.', color: '#fbff06', text: '#000000' },
  { title: 'Customer Data Segmentation', desc: 'Organizing customers into targeted groups for personalized marketing and communication.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'CRM Data Integration', desc: 'Seamless integration of CRM with other systems, tools, and platforms.', color: '#fbff06', text: '#000000' },
  { title: 'Lead Management', desc: 'Efficient tracking and management of leads from acquisition to conversion.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Migration & Setup', desc: 'Smooth transfer of data from existing systems into your CRM platform.', color: '#fbff06', text: '#000000' },
  { title: 'Reporting & Analytics', desc: 'Generating reports and insights to understand customer behavior and business performance.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing CRM Maintenance', desc: 'Regular updates, monitoring, and optimization for consistent CRM performance.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for CRM Data Management Services) ====================
const benefits = [
  'Improved customer data accuracy',
  'Better customer relationship management',
  'Enhanced lead tracking and conversion',
  'Personalized marketing strategies',
  'Organized and structured data',
  'Increased operational efficiency',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our CRM Data Management Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering structured, accurate, and secure CRM data solutions that help businesses build stronger customer relationships 
          and improve operational efficiency. Our team ensures your CRM system is optimized, reliable, and aligned with your business goals.
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
              alt="Sales and Customer Relationship Management CRM Data System - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for CRM Data Management Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your CRM system and business needs.' },
  { title: 'Data Collection & Setup', desc: 'Organizing and preparing data for CRM integration.' },
  { title: 'Data Entry & Cleansing', desc: 'Ensuring accurate and error-free customer data.' },
  { title: 'Integration & Optimization', desc: 'Connecting CRM with other tools and improving performance.' },
  { title: 'Reporting & Insights', desc: 'Providing actionable data insights and reports.' },
  { title: 'Ongoing Support', desc: 'Maintaining and updating CRM data regularly.' },
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

// ==================== DigitalIndustries Component (Updated for CRM Data Management Services) ====================
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
            <Image src="/images/1.webp" alt="E-Commerce Customer CRM Lead Tracking - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient CRM Record Entry - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Center Student CRM Pipeline - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Finance and Accounting Client Account Entry - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Brokerage CRM Lead Pipeline - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CRMDataManagementServicesPage = () => {
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

export default CRMDataManagementServicesPage;

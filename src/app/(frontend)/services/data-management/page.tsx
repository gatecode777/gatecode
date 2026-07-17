"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Data Management Services) ====================
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
            DATA<br />MANAGEMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We provide accurate, secure, and efficient data management solutions that help businesses organize<br />
            information, improve productivity, and streamline operations.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Data Management Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we understand that data is one of the most valuable assets for any business. Our data management 
          services are designed to help organizations handle large volumes of information with accuracy, security, and efficiency. From data entry 
          and processing to database management and reporting, we deliver reliable solutions that improve operational workflows, reduce errors, 
          and support better decision-making.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Data Management Services) ====================
const services = [
  { title: 'Data Entry Services', desc: 'Structured data processing services designed to improve workflow efficiency and information management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Processing Services', desc: 'Reliable data collection and organization solutions for easy accessibility and structured management.', color: '#fbff06', text: '#000000' },
  { title: 'Data Cataloging & Organization', desc: 'Identify and remove inaccurate, incomplete, or duplicate data to maintain high-quality databases.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Database Management', desc: 'Secure and organized database solutions that ensure smooth data handling and storage.', color: '#fbff06', text: '#000000' },
  { title: 'Document Digitization', desc: 'Convert physical documents into secure digital formats for better accessibility and management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Analysis & Reporting', desc: 'Transform raw data into meaningful insights through structured reporting and analysis.', color: '#fbff06', text: '#000000' },
  { title: 'Data Security & Confidentiality', desc: 'Ensure secure handling and protection of sensitive business information with reliable security practices.', color: '#4e7c7e', text: '#ffffff' },
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
        <h2 className="dm-section-title">Our Data Management Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Data Management Services) ====================
const benefits = [
  'Accurate and organized data handling',
  'Improved business productivity',
  'Reduced manual errors',
  'Secure and confidential data management',
  'Faster access to information',
  'Scalable data solutions for business growth',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Data Management Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, secure, and organized data management solutions tailored to your business requirements. Our team ensures 
          efficient handling of business information while maintaining confidentiality, minimizing errors, and improving operational efficiency. 
          With a structured and technology-driven approach, we help businesses manage data more effectively and make informed decisions.
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
              alt="Custom Data Management Solutions Workflow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Data Management Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your data handling and operational requirements.' },
  { title: 'Data Collection & Organization', desc: 'Gathering, structuring, and organizing business information efficiently.' },
  { title: 'Data Processing & Validation', desc: 'Processing and verifying data for accuracy and consistency.' },
  { title: 'Database Management', desc: 'Maintaining secure and organized databases for easy accessibility.' },
  { title: 'Reporting & Analysis', desc: 'Generating reports and insights for better decision-making.' },
  { title: 'Ongoing Support & Maintenance', desc: 'Providing continuous support, updates, and data optimization solutions.' },
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

// ==================== DigitalIndustries Component (Updated for Data Management Services) ====================
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail Data Entry - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare and Medical Records Digitization - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Real Estate Property Database Structuring - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Logistics and Supply Chain Data Processing - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Education and E-Learning Cataloging - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DataManagementServicesPage = () => {
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

export default DataManagementServicesPage;

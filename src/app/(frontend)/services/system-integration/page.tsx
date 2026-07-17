"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Custom Development & System Integration) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (6).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CUSTOM DEVELOPMENT<br />& SYSTEM<br />INTEGRATION
          </h1>
          <p className="dm-hero-subtitle">
            We build tailored software solutions and seamlessly integrate systems to improve efficiency,<br />
            connectivity, and business performance.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Custom Development & System Integration) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we specialize in custom development and system integration services designed to align with 
          your unique business processes. Our solutions focus on creating scalable, secure, and high-performance applications while ensuring 
          seamless integration between different platforms, tools, and technologies. Whether it's building custom software from scratch or 
          connecting existing systems, we help businesses streamline operations, reduce complexity, and enhance productivity.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Custom Development & System Integration) ====================
const services = [
  { title: 'Custom Software Development', desc: 'Tailor-made software solutions designed to meet specific business requirements and operational needs.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Cloud Integration', desc: 'Connecting cloud-based applications for improved accessibility, scalability, and performance.', color: '#fbff06', text: '#000000' },
  { title: 'Data Integration & Migration', desc: 'Seamless data transfer and integration across multiple systems with minimal downtime.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'API Development & Integration', desc: 'Secure API development and seamless integration with third-party tools, platforms, and services.', color: '#fbff06', text: '#000000' },
  { title: 'CRM & ERP Integration', desc: 'Efficient integration of CRM and ERP systems to streamline business operations and data flow.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Legacy System Modernization', desc: 'Upgrading outdated systems with modern technologies to improve performance and usability.', color: '#fbff06', text: '#000000' },
  { title: 'ERP Implementation & Integration', desc: 'Comprehensive ERP implementation and integration for streamlined business processes.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Maintenance & Support', desc: 'Continuous monitoring, updates, and technical support to ensure smooth system performance.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Custom Development & System Integration) ====================
const benefits = [
  'Tailored solutions for specific business needs',
  'Seamless connectivity between systems',
  'Improved operational efficiency',
  'Reduced manual processes and errors',
  'Scalable and future-ready architecture',
  'Secure and reliable integrations',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Custom Development & Integration
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Every business has unique processes and system requirements. Our custom development and integration services ensure that your 
          software ecosystem works seamlessly together, improving efficiency, reducing manual effort, and enhancing overall productivity.
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
              alt="Custom Development and System Integration Flowchart - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Custom Development & System Integration) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your systems, workflows, and integration needs.' },
  { title: 'Planning & Architecture Design', desc: 'Creating a structured integration and development strategy.' },
  { title: 'Development & Integration', desc: 'Building custom solutions and connecting systems seamlessly.' },
  { title: 'Testing & Quality Assurance', desc: 'Ensuring system compatibility, security, and performance.' },
  { title: 'Deployment & Implementation', desc: 'Launching solutions and integrating them into your workflow.' },
  { title: 'Continuous Support & Optimization', desc: 'Providing ongoing improvements and maintenance support.' },
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

// ==================== DigitalIndustries Component (Updated for Custom Development & System Integration) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Finance & Accounting',
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail API Integrations - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare Systems Interface Integration - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Education Portal and LMS Integrations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Corporate Enterprise Database Connections - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Finance and Accounting Platform Integration - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CustomDevelopmentSystemIntegrationPage = () => {
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

export default CustomDevelopmentSystemIntegrationPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Smart & Scalable Software Solutions) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (5).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SMART & SCALABLE<br />SOFTWARE<br />SOLUTIONS
          </h1>
          <p className="dm-hero-subtitle">
            We build intelligent, future-ready software solutions designed to streamline operations,<br />
            enhance efficiency, and support long-term business growth.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Smart & Scalable Software Solutions) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we develop smart and scalable software solutions tailored to evolving business needs. 
          Our approach focuses on combining advanced technology, automation, and user-centric design to create systems that simplify 
          complex processes and improve productivity. Whether you need custom business software, enterprise solutions, or cloud-based 
          applications, we ensure every solution is built to scale, adapt, and perform efficiently as your business grows.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Smart & Scalable Software Solutions) ====================
const services = [
  { title: 'Custom & Enterprise Software', desc: 'Tailor-made software solutions designed to meet specific business requirements and enterprise-level operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Scalable Architecture', desc: 'Robust and flexible software architecture built to handle growth, high traffic, and future expansion.', color: '#fbff06', text: '#000000' },
  { title: 'Automation & Workflow Optimization', desc: 'Smart automation solutions that reduce manual tasks and improve operational efficiency.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Cloud-Based Solutions', desc: 'Secure and scalable cloud applications that enable remote access and business flexibility.', color: '#fbff06', text: '#000000' },
  { title: 'System Integration', desc: 'Seamless integration of multiple systems, APIs, and tools for better connectivity and performance.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'High Performance & Security', desc: 'Optimized software designed for speed, reliability, and advanced security standards.', color: '#fbff06', text: '#000000' },
  { title: 'Data Management & Analytics', desc: 'Structured data handling and analytics solutions for better decision-making and insights.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Continuous Support & Upgrades', desc: 'Ongoing maintenance, updates, and improvements to keep your software future-ready.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Smart & Scalable Software Solutions) ====================
const benefits = [
  'Scalable solutions for business growth',
  'Improved efficiency and productivity',
  'Automation-driven operations',
  'Secure and reliable performance',
  'Seamless integration with existing systems',
  'Future-ready technology solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Smart & Scalable Solutions
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Modern businesses require flexible and intelligent systems that can adapt to changing demands. Our smart and scalable software 
          solutions are designed to improve efficiency, reduce operational complexity, and support sustainable business growth through 
          advanced technologies and strategic development approaches.
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
              alt="Smart and Scalable Software Architecture Flow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Smart & Scalable Software Solutions) ====================
const processSteps = [
  { title: 'Requirement & Business Analysis', desc: 'Understanding your workflows, challenges, and growth goals.' },
  { title: 'Strategic Planning', desc: 'Designing scalable architecture and selecting suitable technologies.' },
  { title: 'Design & Development', desc: 'Building intelligent, user-friendly, and high-performance software.' },
  { title: 'Testing & Optimization', desc: 'Ensuring reliability, speed, and security of the solution.' },
  { title: 'Deployment & Integration', desc: 'Launching the software and integrating with existing systems.' },
  { title: 'Continuous Support', desc: 'Providing updates, maintenance, and performance enhancements.' },
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
        <h2 className="dm-section-title">Our Development Approach</h2>
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

// ==================== DigitalIndustries Component (Updated for Smart & Scalable Software Solutions) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Logistics & Operations',
  'Finance & Accounting',
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail Scalable Architecture - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare Patient Management System Solutions - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Education and E-Learning Platform Operations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Corporate Enterprise Automation Software - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Logistics and Operations Workflow Systems - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SmartScalableSoftwareSolutionsPage = () => {
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

export default SmartScalableSoftwareSolutionsPage;

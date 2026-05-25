"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Back Office Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (17).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            BACK OFFICE<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Streamline your operations with efficient, reliable, and cost-effective back office<br />
            support solutions.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Back Office Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide comprehensive back office services that help businesses manage their day-to-day operations efficiently. 
          Our solutions are designed to reduce workload, improve accuracy, and enhance productivity by handling time-consuming administrative tasks. 
          From data management to process support, we ensure your back office runs smoothly so you can focus on growing your business.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Back Office Services) ====================
const services = [
  { title: 'Data Entry & Processing', desc: 'Accurate handling and processing of business data for better organization and accessibility.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Document Management', desc: 'Organizing, storing, and managing documents for easy retrieval and workflow efficiency.', color: '#fbff06', text: '#000000' },
  { title: 'Administrative Support', desc: 'Managing routine administrative tasks to improve operational efficiency.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'CRM & Database Management', desc: 'Maintaining customer data and databases for better business operations.', color: '#fbff06', text: '#000000' },
  { title: 'Order Processing Support', desc: 'Handling order management, tracking, and customer-related processes.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Accounting & Financial Support', desc: 'Assisting with bookkeeping, invoicing, and financial data management.', color: '#fbff06', text: '#000000' },
  { title: 'Email & Chat Support', desc: 'Managing communication channels for smooth customer interaction.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Process Optimization', desc: 'Improving workflows and systems for better efficiency and productivity.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Back Office Services) ====================
const benefits = [
  'Reduced operational workload',
  'Improved accuracy and efficiency',
  'Cost-effective solutions',
  'Better data organization and management',
  'Increased productivity',
  'Scalable support for growing businesses',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Back Office Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering efficient, accurate, and scalable back office solutions that help businesses reduce operational burden 
          and improve overall performance. Our team ensures that all processes are managed smoothly with high attention to detail and consistency.
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
              alt="Back Office Services Illustration"
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

// ==================== DigitalProcess Component (Updated for Back Office Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business operations and support needs.' },
  { title: 'Process Setup', desc: 'Designing workflows and assigning dedicated resources.' },
  { title: 'Execution & Management', desc: 'Handling tasks with accuracy and efficiency.' },
  { title: 'Quality Control', desc: 'Ensuring consistent performance and error-free output.' },
  { title: 'Reporting & Updates', desc: 'Providing regular updates and performance insights.' },
  { title: 'Continuous Improvement', desc: 'Optimizing processes for better results.' },
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

// ==================== DigitalIndustries Component (Updated for Back Office Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Finance & Accounting',
  'Education & Training',
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
const BackOfficeServicesPage = () => {
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

export default BackOfficeServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Document Digitization Services) ====================
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
            DOCUMENT<br />DIGITIZATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Convert your physical documents into secure, organized, and easily accessible digital formats.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Document Digitization Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide professional document digitization services that help businesses move from paper-based 
          systems to efficient digital workflows. Our solutions focus on accuracy, security, and structured data organization, enabling easy 
          access, storage, and management of documents. Whether it's records, forms, invoices, or archives, we transform your documents into 
          searchable and manageable digital assets.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Document Digitization Services) ====================
const services = [
  { title: 'Document Scanning & Conversion', desc: 'High-quality scanning and conversion of physical documents into digital formats like PDF, Word, and Excel.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Optical Character Recognition (OCR)', desc: 'Advanced OCR technology to convert scanned documents into editable and searchable text.', color: '#fbff06', text: '#000000' },
  { title: 'Data Extraction & Indexing', desc: 'Extracting key information and organizing documents for quick search and retrieval.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Secure Digital Storage', desc: 'Structured and secure storage systems for easy access and document management.', color: '#fbff06', text: '#000000' },
  { title: 'File Organization & Categorization', desc: 'Systematic organization of digital documents for better usability and workflow efficiency.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Bulk Document Digitization', desc: 'Handling large volumes of documents efficiently with accuracy and speed.', color: '#fbff06', text: '#000000' },
  { title: 'Archive Digitization', desc: 'Digitizing old records and archives for long-term preservation and easy access.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Document Management', desc: 'Continuous support for updating, maintaining, and managing digital documents.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Document Digitization Services) ====================
const benefits = [
  'Easy access to digital documents',
  'Reduced physical storage space',
  'Improved data security and backup',
  'Faster document retrieval',
  'Organized and searchable records',
  'Enhanced workflow efficiency',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Document Digitization Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering secure, accurate, and efficient digitization solutions that help businesses reduce paper dependency and improve 
          document accessibility. Our team ensures high-quality digital conversion while maintaining data confidentiality and integrity.
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
              alt="Document Scanning and File Digitization Process - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Document Digitization Services) ====================
const processSteps = [
  { title: 'Document Collection & Assessment', desc: 'Understanding document types, volume, and digitization requirements.' },
  { title: 'Scanning & Conversion', desc: 'Digitizing documents using high-quality scanning technology.' },
  { title: 'Data Extraction & Indexing', desc: 'Organizing and tagging documents for easy access.' },
  { title: 'Quality Check & Validation', desc: 'Ensuring accuracy, consistency, and completeness of digitized documents.' },
  { title: 'Secure Storage & Delivery', desc: 'Providing organized digital files with secure storage options.' },
  { title: 'Ongoing Support', desc: 'Maintaining and updating digital document systems.' },
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

// ==================== DigitalIndustries Component (Updated for Document Digitization Services) ====================
const industries = [
  'Healthcare & Medical Records',
  'Finance & Accounting',
  'Education & Institutions',
  'Legal & Documentation Services',
  'Real Estate & Construction',
  'Corporate Businesses',
  'Government & Public Sector',
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
            <Image src="/images/1.jpg" alt="Healthcare Medical Records Scanning - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Finance and Accounting Invoice Digitization - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Educational Institutional Archive Scanning - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Legal Firm Case File Digitization - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Real Estate Land Records Scanning - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DocumentDigitizationServicesPage = () => {
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

export default DocumentDigitizationServicesPage;

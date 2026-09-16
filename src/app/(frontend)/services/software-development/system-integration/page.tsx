"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { systemIntegrationFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Custom Development & System Integration) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (6).webp')` }}
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
          At Gatecode Technologies Pvt. Ltd., we build custom software and system integration solutions around the way your business actually works. We first understand your processes, challenges, and goals before choosing the right technology or development approach.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Our team focuses on creating secure, scalable, and reliable software that can work smoothly with your existing tools and platforms. Whether you need a custom application, API integration, or help connecting different business systems, we aim to make your operations simpler, more efficient, and easier to manage.
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
  'Solutions built around your requirements',
  'Better connectivity between systems',
  'Less manual work and fewer errors',
  'Improved performance and efficiency',
  'Scalable and maintainable architecture',
  'Secure and reliable integrations',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Custom Development & Integration Services?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Every project has different requirements, existing tools, and technical challenges. Our custom development and integration services are designed to work with your specific setup—whether you’re building something new, improving an existing application, or connecting multiple systems.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          We focus on practical solutions that make technology easier to manage and use. From planning and development to API integration and system connectivity, we work closely with you to understand the requirements, choose the right approach, and build solutions that are reliable, secure, scalable, and easy to maintain.
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail API Integrations - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Systems Interface Integration - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Portal and LMS Integrations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Enterprise Database Connections - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Finance and Accounting Platform Integration - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/software-development/system-integration' },
      { '@type': 'ListItem', position: 3, name: 'System Integration', item: 'https://gatecode.in/services/software-development/system-integration' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is system integration, and why does my business need it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'System integration is the process of connecting different software applications, third-party tools, and IT systems so they can communicate and function as a single, unified platform. If your business uses multiple isolated tools (like a separate CRM, accounting software, and e-commerce platform), integration eliminates data silos, automates workflows, and drastically improves operational efficiency.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of systems and third-party software can you integrate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our engineering team can seamlessly integrate a wide variety of platforms. We specialize in connecting modern web applications with ERPs, CRMs, payment gateways, marketing automation tools, external business APIs, and custom SaaS solutions to create a synchronized digital ecosystem for your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate new web applications with our existing legacy systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. We understand that replacing an entire legacy system can be expensive and disruptive. We build custom API bridges and middleware that allow your older, existing infrastructure to securely communicate and share data with modern web and mobile applications without requiring a complete system overhaul.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does API integration improve our daily business operations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom API integration enables real-time data syncing across all your software tools. This means your team no longer has to manually enter data into multiple systems, which reduces human error, saves countless administrative hours, and provides you with accurate, up-to-date analytics for better decision-making.',
        },
      },
      {
        '@type': 'Question',
        name: "Is our company's data secure during and after the integration process?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Data security is our top priority. We implement robust security protocols, including end-to-end data encryption, secure authentication (like OAuth), and strict compliance checks. We ensure that data flows securely between systems without exposing your architecture to common web vulnerabilities or unauthorized access.',
        },
      },
    ],
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ContactSection />
      <FAQSection
        eyebrow="FAQS"
        titleLine1="FREQUENTLY ASKED"
        titleHighlight="QUESTIONS"
        subtitle="Explore answers to essential questions regarding system integration, API bridges, legacy synchronization, and enterprise security."
        items={systemIntegrationFaqs}
      />
    </div>
  );
};

export default CustomDevelopmentSystemIntegrationPage;

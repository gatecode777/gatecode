"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { ongoingSupportFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (7).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            ONGOING SUPPORT<br />& FUTURE-READY<br />TECHNOLOGY
          </h1>
          <p className="dm-hero-subtitle">
            We ensure your systems stay secure, updated, and scalable with continuous support and<br />
            future-ready technology solutions.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          Our work doesn’t stop after project delivery. Gatecode Technologies Pvt. Ltd. provides ongoing support to help keep your applications and integrations secure, stable, and up to date.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Whether you need troubleshooting, performance optimization, system updates, new features, or integration support, our team helps you maintain and improve your technology as your requirements evolve.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          We’re here to help your technology keep working—and keep improving.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const services = [
  { title: 'Continuous Maintenance & Support', desc: 'Regular monitoring updates, bug fixes, and technical assistance to ensure smooth system performance.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Performance Optimization', desc: 'Enhancing system speed, efficiency, and reliability through regular optimization strategies.', color: '#fbff06', text: '#000000' },
  { title: 'Security Updates & Monitoring', desc: 'Advanced security measures and real-time monitoring to protect your systems from potential threats.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Scalability & System Upgrades', desc: 'Upgrading systems and infrastructure to support business growth and increasing user demands.', color: '#fbff06', text: '#000000' },
  { title: 'Technology Modernization', desc: 'Implementing modern tools and technologies to keep your systems future-ready and competitive.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Backup & Disaster Recovery', desc: 'Reliable backup solutions and recovery strategies to protect business data and ensure continuity.', color: '#fbff06', text: '#000000' },
  { title: 'Cloud Support & Management', desc: 'Managing cloud infrastructure for better accessibility, performance, and scalability.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Technical Consultation & Improvements', desc: 'Expert guidance and continuous improvements to enhance system performance and business efficiency.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const benefits = [
  'Ongoing technical support',
  'Reduced downtime',
  'Better system performance',
  'Flexible and scalable solutions',
  'Security and reliability',
  'Continuous improvements',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Support & Technology Services?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Reliable software needs more than a one-time delivery. Our support and technology services help keep your applications, integrations, and systems running smoothly as your requirements change. We focus on practical improvements—from troubleshooting and performance optimization to security updates and ongoing enhancements.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          Our approach is based on understanding how your systems are actually being used, identifying areas that need attention, and making improvements that support long-term reliability and maintainability.
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
              alt="Ongoing Systems Support and Maintenance Flow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const processSteps = [
  { title: 'System Analysis & Monitoring', desc: 'Understanding current system performance and identifying improvement areas.' },
  { title: 'Maintenance & Optimization', desc: 'Regular updates, bug fixing, and performance enhancements.' },
  { title: 'Security & Backup Management', desc: 'Implementing strong security measures and data protection strategies.' },
  { title: 'Technology Upgrades', desc: 'Adopting modern tools and upgrading systems for better efficiency.' },
  { title: 'Continuous Improvement', desc: 'Monitoring performance and optimizing systems for long-term growth.' },
  { title: 'Dedicated Support', desc: 'Providing ongoing technical support and consultation whenever needed.' },
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
        <h2 className="dm-section-title">Our Approach</h2>
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

// ==================== DigitalIndustries Component (Updated for Ongoing Support & Future-Ready Technology) ====================
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
            <Image src="/images/1.webp" alt="E-Commerce Platforms Maintenance and Support - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Systems Ongoing Support and Updates - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Portal and LMS Maintenance - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Enterprise Software Support - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Finance and Accounting Software Maintenance - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const OngoingSupportFutureReadyTechnologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/software-development/ongoing-support' },
      { '@type': 'ListItem', position: 3, name: 'Ongoing Support & Future-Ready Technology', item: 'https://gatecode.in/services/software-development/ongoing-support' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in your ongoing support and maintenance services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our ongoing support services include 24/7 uptime monitoring, regular security patches, framework and plugin updates, bug fixes, and continuous performance tuning. We ensure that your website, web application, or software remains secure, fast, and fully functional at all times.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need ongoing maintenance after my website or software is launched?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Technology constantly evolves, and so do web security threats. Without regular updates, your digital platform can become vulnerable to hacking, experience slow loading speeds, or face compatibility issues with new browsers and devices. Ongoing maintenance future-proofs your platform and guarantees a seamless user experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly does your team respond to critical technical issues or downtime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We prioritize the stability of your business. We provide active monitoring to detect issues before they affect your users. In the event of a critical error or downtime, our dedicated technical support team responds immediately to troubleshoot and resolve the issue with minimal disruption to your operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide maintenance for websites or software developed by other companies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we do! If you have an existing application built by another agency, our full-stack engineers will conduct a comprehensive technical audit, review the existing codebase, and seamlessly take over the continuous support, optimization, and security management of your platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer flexible support packages tailored to our specific business needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We understand that every business has different operational requirements and budgets. We offer flexible engagement models, including monthly retainers and dedicated support SLAs (Service Level Agreements), ensuring you only pay for the level of technical support your business actually needs.',
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
        subtitle="Find answers to key questions regarding our 24/7 uptime monitoring, security patches, legacy audits, and flexible maintenance SLAs."
        items={ongoingSupportFaqs}
      />
    </div>
  );
};

export default OngoingSupportFutureReadyTechnologyPage;

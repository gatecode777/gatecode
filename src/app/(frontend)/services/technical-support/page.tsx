"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Technical Support Services) ====================
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
            TECHNICAL<br />SUPPORT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Reliable, fast, and efficient technical support to keep your systems running smoothly<br />
            and your business uninterrupted.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Technical Support Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide comprehensive technical support services to help businesses resolve issues quickly 
          and maintain optimal system performance. Our team ensures that your software, applications, and IT infrastructure run efficiently 
          with minimal downtime. From troubleshooting and maintenance to system monitoring and user support, we deliver dependable solutions 
          tailored to your business needs.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Technical Support Services) ====================
const services = [
  { title: 'IT Support & Troubleshooting', desc: 'Quick resolution of technical issues related to software, systems, and applications.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Software Support', desc: 'Ongoing assistance for installed software, updates, and performance optimization.', color: '#fbff06', text: '#000000' },
  { title: 'System Monitoring & Maintenance', desc: 'Continuous monitoring to ensure systems operate smoothly and efficiently.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Remote Technical Support', desc: 'Providing support remotely for quick issue resolution and minimal disruption.', color: '#fbff06', text: '#000000' },
  { title: 'Network Support', desc: 'Managing and troubleshooting network-related issues for seamless connectivity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Helpdesk Support', desc: 'Dedicated helpdesk services for handling user queries and technical assistance.', color: '#fbff06', text: '#000000' },
  { title: 'System Updates & Upgrades', desc: 'Regular updates and upgrades to keep systems secure and up-to-date.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Security & Backup Support', desc: 'Ensuring data protection, backups, and system security against potential threats.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Technical Support Services) ====================
const benefits = [
  'Quick issue resolution',
  'Reduced downtime and disruptions',
  'Improved system performance',
  'Reliable and secure IT operations',
  'Scalable support solutions',
  'Dedicated technical expertise',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Technical Support Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering fast, reliable, and efficient technical support that minimizes downtime and enhances system performance. 
          Our team ensures smooth operations through proactive monitoring, quick issue resolution, and continuous system optimization.
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
              alt="IT Infrastructure and Technical Support Flow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Technical Support Services) ====================
const processSteps = [
  { title: 'Issue Identification', desc: 'Understanding and diagnosing technical problems.' },
  { title: 'Troubleshooting & Resolution', desc: 'Applying effective solutions to resolve issues quickly.' },
  { title: 'Monitoring & Maintenance', desc: 'Ensuring systems remain stable and optimized.' },
  { title: 'Updates & Security Checks', desc: 'Keeping systems secure and up-to-date.' },
  { title: 'Reporting & Feedback', desc: 'Providing insights and updates on technical performance.' },
  { title: 'Ongoing Support', desc: 'Delivering continuous assistance and improvements.' },
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

// ==================== DigitalIndustries Component (Updated for Technical Support Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Finance & Accounting',
  'Technology & SaaS',
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
            <Image src="/images/1.jpg" alt="E-Commerce Platform Technical Support - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare Patient Systems Tech Support - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Education and E-Learning Tech Assistance - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Corporate Business IT Troubleshooting - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Finance and Accounting Software Troubleshooting - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const TechnicalSupportServicesPage = () => {
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

export default TechnicalSupportServicesPage;

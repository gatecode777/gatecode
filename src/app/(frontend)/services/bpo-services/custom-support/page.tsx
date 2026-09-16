"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Custom Support Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (17).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CUSTOM<br />SUPPORT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Flexible, tailored support solutions designed to match your unique business needs<br />
            and customer expectations.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Custom Support Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we understand that every business has different support requirements. Our custom support services 
          are designed to provide personalized solutions that align with your operations, industry, and customer expectations. Whether you need 
          dedicated support teams, process-specific assistance, or scalable support models, we deliver solutions that improve efficiency, enhance 
          customer satisfaction, and support business growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Custom Support Services) ====================
const services = [
  { title: 'Dedicated Support Teams', desc: 'Skilled professionals assigned exclusively to manage your business support operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Process-Based Support', desc: 'Customized support solutions tailored to your specific workflows and operational needs.', color: '#fbff06', text: '#000000' },
  { title: 'Multichannel Customer Support', desc: 'Support across calls, emails, chat, and social platforms for seamless communication.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Technical & Operational Support', desc: 'Assistance for technical queries, system handling, and day-to-day business operations.', color: '#fbff06', text: '#000000' },
  { title: 'Back-Office Support', desc: 'Efficient management of administrative tasks, data handling, and documentation.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'E-Commerce Support', desc: 'Handling product queries, order management, returns, and customer assistance.', color: '#fbff06', text: '#000000' },
  { title: 'CRM & Data Support', desc: 'Managing customer data, updates, and support within CRM systems.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Scalable Support Solutions', desc: 'Flexible support models that grow with your business needs and demand.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Custom Support Services) ====================
const benefits = [
  'Customized support solutions',
  'Improved customer satisfaction',
  'Flexible and scalable services',
  'Efficient process management',
  'Cost-effective operations',
  'Dedicated and trained support teams',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Custom Support Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering personalized, efficient, and scalable support solutions that align with your business processes. 
          Our team ensures smooth operations, improved customer experiences, and reliable support tailored to your specific requirements.
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
              alt="Dedicated Support and Business Assistance Lifecycle - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Custom Support Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business processes and support needs.' },
  { title: 'Solution Design', desc: 'Creating customized support strategies and workflows.' },
  { title: 'Team Setup & Training', desc: 'Preparing dedicated teams aligned with your requirements.' },
  { title: 'Implementation', desc: 'Launching support services with structured processes.' },
  { title: 'Monitoring & Optimization', desc: 'Ensuring quality performance and continuous improvement.' },
  { title: 'Ongoing Support', desc: 'Providing long-term assistance and scalability.' },
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

// ==================== DigitalIndustries Component (Updated for Custom Support Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Finance & Accounting',
  'Education & Training',
  'Corporate Businesses',
  'Real Estate & Services',
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
            <Image src="/images/1.webp" alt="E-Commerce Customer Support Helpdesk - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Support Patient Helpdesk - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Finance and Accounting Customer Support - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Education Center Student Helpdesk - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Business Helpdesk Operations - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CustomSupportServicesPage = () => {
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

export default CustomSupportServicesPage;

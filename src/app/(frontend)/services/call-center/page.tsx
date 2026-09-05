"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Call Center Services) ====================
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
            CALL<br />CENTER<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We provide reliable and efficient call center solutions that help businesses improve customer support,<br />
            streamline communication, and enhance overall productivity.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Call Center Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we deliver professional call center services designed to help businesses manage customer interactions 
          more efficiently and improve communication experiences. Our solutions focus on professional handling, quick response times, and operational 
          support to reduce workload and enhance business performance. From inbound and outbound call support to lead generation and technical assistance, 
          we provide scalable call center solutions tailored to your business requirements.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Call Center Services) ====================
const services = [
  { title: 'Inbound Call Support', desc: 'Handling customer inquiries, support requests, and service assistance with professionalism.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Outbound Call Services', desc: 'Managing calls, follow-ups, lead generation, and customer outreach campaigns.', color: '#fbff06', text: '#000000' },
  { title: 'Customer Support Services', desc: 'Providing reliable assistance to resolve customer issues and improve satisfaction.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Technical Support', desc: 'Offering basic technical assistance and troubleshooting support to customers.', color: '#fbff06', text: '#000000' },
  { title: 'Telemarketing Services', desc: 'Promoting products and services through targeted calling campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Lead Generation & Qualification', desc: 'Identifying potential customers and qualifying leads for better conversion.', color: '#fbff06', text: '#000000' },
  { title: 'Order Processing & Support', desc: 'Handling order placement, tracking, and customer queries efficiently.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Multichannel Support', desc: 'Supporting customers through calls, emails, and chat for better communication.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Call Center Services) ====================
const benefits = [
  'Improved customer satisfaction',
  'Professional and timely communication',
  'Increased customer retention',
  'Efficient handling of customer queries',
  'Scalable support solutions',
  'Cost-effective communication management',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Call Center Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering high-quality, customer-focused call center solutions that improve communication and strengthen relationships. 
          Our team ensures quick response times, clear communication, and professional handling of every interaction.
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
              alt="Call Center Operations and Communication Flowchart - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Call Center Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your customer support needs and business goals.' },
  { title: 'Team Setup & Training', desc: 'Preparing trained agents aligned with your services and communication standards.' },
  { title: 'Service Implementation', desc: 'Launching call center operations with structured workflows.' },
  { title: 'Monitoring & Quality Control', desc: 'Ensuring high-quality service through regular monitoring.' },
  { title: 'Performance Reporting', desc: 'Providing insights and reports on customer interactions.' },
  { title: 'Continuous Improvement', desc: 'Optimizing processes for better efficiency and customer experience.' },
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

// ==================== DigitalIndustries Component (Updated for Call Center Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Telecommunications',
  'Finance & Banking',
  'Travel & Hospitality',
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
            <Image src="/images/1.webp" alt="E-Commerce Call Center Support Services - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Inquiries Call Desk - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Telecom Customer Care Hotline Support - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Finance and Banking Assistance Helpline - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Travel and Hospitality Booking Support - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CallCenterServicesPage = () => {
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

export default CallCenterServicesPage;

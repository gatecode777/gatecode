"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for BPO Services) ====================
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
            BPO<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We provide reliable and efficient BPO solutions that help businesses improve customer support,<br />
            streamline operations, and enhance overall productivity.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for BPO Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we deliver professional BPO services designed to help businesses manage operations more efficiently 
          and improve customer experiences. Our solutions focus on communication, process optimization, and operational support to reduce workload 
          and enhance business performance. From customer support and back-office management to lead generation and technical assistance, we provide 
          scalable BPO solutions tailored to your business requirements.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for BPO Services) ====================
const services = [
  { title: 'Customer Support Services', desc: 'Professional customer support solutions focused on improving customer satisfaction and engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Email & Chat Support', desc: 'Responsive email and live chat support services for seamless customer interaction.', color: '#fbff06', text: '#000000' },
  { title: 'Call Center Services', desc: 'Inbound and outbound call handling services designed for smooth and effective communication.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Processing Services', desc: 'Accurate data processing and management solutions to support daily business operations.', color: '#fbff06', text: '#000000' },
  { title: 'Technical Support Services', desc: 'Reliable technical assistance and troubleshooting support for customers and business operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Lead Generation Services', desc: 'Targeted lead generation strategies designed to increase business opportunities and sales growth.', color: '#fbff06', text: '#000000' },
  { title: 'Back Office Support', desc: 'Efficient back-office management solutions that improve workflow and operational productivity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Appointment Scheduling & Customer Coordination', desc: 'Organized appointment handling and customer coordination services for efficient communication management.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our BPO Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for BPO Services) ====================
const benefits = [
  'Improved customer support and engagement',
  'Reduced operational workload',
  'Cost-effective business solutions',
  'Faster response and communication management',
  'Scalable and flexible support services',
  'Enhanced productivity and workflow efficiency',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our BPO Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering reliable, scalable, and customer-focused BPO solutions that improve operational efficiency and business productivity. 
          Our experienced team combines professional communication, process management, and strategic support to help businesses reduce operational 
          burden, improve customer relationships, and achieve long-term growth.
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
              alt="Business Process Outsourcing Services Workflow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for BPO Services) ====================
const processSteps = [
  { title: 'Business Requirement Analysis', desc: 'Understanding operational needs and customer support requirements.' },
  { title: 'Process Planning & Strategy', desc: 'Creating customized workflows and support strategies.' },
  { title: 'Team Allocation & Setup', desc: 'Assigning trained professionals and setting up operational processes.' },
  { title: 'Service Execution', desc: 'Managing customer interactions, support tasks, and back-office operations.' },
  { title: 'Monitoring & Quality Assurance', desc: 'Tracking performance and ensuring service quality standards.' },
  { title: 'Continuous Support & Optimization', desc: 'Improving processes and providing ongoing operational support.' },
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
        <h2 className="dm-section-title">Our Design Process</h2>
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

// ==================== DigitalIndustries Component (Updated for BPO Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Real Estate & Service Industries',
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail Customer Support - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare Patient Coordination - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Logistics Back Office Operations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Education Center Student Support - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Real Estate Lead Generation Campaigns - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BPOServicesPage = () => {
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

export default BPOServicesPage;

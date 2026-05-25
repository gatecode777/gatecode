"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Software Development Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (4).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SOFTWARE<br />DEVELOPMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We build secure, scalable, and performance-driven software solutions that help businesses streamline<br />
            operations, improve efficiency, and accelerate growth.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Software Development Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we develop innovative software solutions tailored to modern business requirements. 
          Our team focuses on creating reliable, scalable, and user-friendly software that simplifies complex operations and improves 
          productivity. From custom business applications to enterprise software and automation systems, we combine advanced technology 
          with strategic development approaches to deliver high-quality digital solutions that support long-term business success.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Software Development Services) ====================
const services = [
  { title: 'Custom Software Development', desc: 'Tailor-made software solutions designed according to your business goals and operational requirements.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Cloud-Based Software Solutions', desc: 'Secure and scalable cloud applications that support flexibility and remote accessibility.', color: '#fbff06', text: '#000000' },
  { title: 'Enterprise Software Solutions', desc: 'Scalable enterprise applications that improve workflow management and organizational productivity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'CRM & ERP Development', desc: 'Integrated CRM and ERP systems designed to streamline customer management and business operations.', color: '#fbff06', text: '#000000' },
  { title: 'Business Automation Software', desc: 'Smart automation solutions that reduce manual work and improve operational efficiency.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Web & Desktop Application Development', desc: 'High-performance web and desktop applications built for smooth and efficient business operations.', color: '#fbff06', text: '#000000' },
  { title: 'API & System Integration', desc: 'Seamless integration of third-party tools, APIs, and business systems for better connectivity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Software Maintenance & Support', desc: 'Continuous updates, security improvements, bug fixing, and technical support for reliable software performance.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Software Development Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Software Development Services) ====================
const benefits = [
  'Custom and scalable software solutions',
  'Secure and high-performance applications',
  'Automation-driven workflow optimization',
  'User-friendly and modern interfaces',
  'Continuous support and maintenance',
  'Future-ready technology solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Software Development Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine modern technologies, strategic planning, and user-focused development approaches to deliver software solutions that are 
          secure, scalable, and future-ready. Our team works closely with clients to understand business challenges and create customized 
          solutions that improve productivity, optimize operations, and support digital transformation.
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
              alt="Software Development Illustration"
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

// ==================== DigitalProcess Component (Updated for Software Development Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business goals, workflows, and software requirements.' },
  { title: 'Planning & Strategy', desc: 'Creating a structured development roadmap and selecting the right technologies.' },
  { title: 'UI/UX Design', desc: 'Designing intuitive and user-friendly interfaces for better user experience.' },
  { title: 'Development & Integration', desc: 'Building secure and scalable software solutions with seamless integrations.' },
  { title: 'Testing & Quality Assurance', desc: 'Ensuring performance, functionality, security, and reliability.' },
  { title: 'Deployment & Support', desc: 'Launching the software and providing ongoing maintenance and support.' },
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
        <h2 className="dm-section-title">Our Development Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Software Development Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurant & Hospitality',
  'Corporate Businesses',
  'Environmental Services',
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
const SoftwareDevelopmentServicesPage = () => {
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

export default SoftwareDevelopmentServicesPage;

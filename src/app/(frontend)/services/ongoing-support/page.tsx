"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (7).png')` }}
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
          At Gatecode Technologies Pvt. Ltd., our commitment doesn't end with project delivery. We provide ongoing support and future-ready 
          technology solutions to ensure your systems remain efficient, secure, and up-to-date. Our approach focuses on continuous improvement, 
          performance optimization, and adopting modern technologies that help your business stay ahead in a rapidly evolving digital landscape.
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
  'Continuous system monitoring and support',
  'Improved performance and efficiency',
  'Enhanced security and data protection',
  'Scalable solutions for business growth',
  'Reduced downtime and operational risks',
  'Future-ready technology adoption',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Support & Technology Solutions
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering proactive support and advanced technology solutions that help businesses maintain stability, improve performance, 
          and stay competitive. Our team ensures your systems are always optimized, secure, and ready to adapt to future business needs.
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
              alt="Ongoing Support & Technology Illustration"
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
const OngoingSupportFutureReadyTechnologyPage = () => {
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

export default OngoingSupportFutureReadyTechnologyPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for UI Design Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            UI (USER INTERFACE)<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Designing visually engaging and intuitive interfaces that enhance user experience<br />
            and strengthen your brand identity.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for UI Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we create modern and user-centric UI designs that focus on clarity, aesthetics, and usability. 
          Our goal is to design interfaces that not only look visually appealing but also provide smooth and engaging user interactions. 
          Whether it's a website, mobile app, or software platform, we design interfaces that reflect your brand and deliver a seamless digital experience.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UI Design Services) ====================
const services = [
  { title: 'Website UI Design', desc: 'Creative and responsive websites with an emphasis on user engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Mobile App UI Design', desc: 'Intuitive and modern app interfaces optimized for Android and iOS devices.', color: '#fbff06', text: '#000000' },
  { title: 'Dashboard & Admin Panel Design', desc: 'Clean and structured dashboards for easy data visualization and management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Custom UI Design', desc: 'Tailor-made interfaces designed aligned with your business goals and user needs.', color: '#fbff06', text: '#000000' },
  { title: 'Wireframing & Prototyping', desc: 'Creating wireframes and interactive prototypes to visualize design concepts.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Design System Creation', desc: 'Consistent UI elements and style guides for scalable and uniform design.', color: '#fbff06', text: '#000000' },
  { title: 'Responsive Design', desc: 'Designs optimized for all screen sizes including desktops, tablets, and mobile devices.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UI Redesign & Enhancement', desc: 'Improving existing interfaces for better usability and modern aesthetics.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for UI Design Services) ====================
const benefits = [
  'Visually appealing and modern design',
  'Improved user engagement',
  'Consistent and scalable design systems',
  'Better usability and navigation',
  'Responsive and device-friendly interfaces',
  'Customized design solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our UI Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating visually appealing and user-friendly interfaces that enhance user interaction and satisfaction. 
          Our team combines creativity, usability principles, and modern design trends to deliver UI designs that improve engagement 
          and support business growth.
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
              alt="User Interface UI Design Workflow Layout - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for UI Design Services) ====================
const processSteps = [
  { title: 'Requirement & User Research', desc: 'Understanding user needs, business goals, and design requirements.' },
  { title: 'Wireframing & Planning', desc: 'Creating layout structures and design concepts.' },
  { title: 'UI Design Creation', desc: 'Designing visually engaging and functional interfaces.' },
  { title: 'Review & Refinement', desc: 'Improving designs based on feedback.' },
  { title: 'Final Delivery', desc: 'Providing high-quality UI assets and designing guidelines.' },
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

// ==================== DigitalIndustries Component (Updated for UI Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Finance & Accounting',
  'Startups & Enterprises',
  'SaaS & Technology Platforms',
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail Web UI Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare Patient Management System UI Design - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Education and LMS Portal UI Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Corporate Enterprise Software User Interface - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Finance and Accounting Application UI Design - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const UIDesignServicesPage = () => {
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

export default UIDesignServicesPage;

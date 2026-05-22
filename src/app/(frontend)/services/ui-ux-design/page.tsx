"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for UI/UX Design Services) ====================
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
            UI/UX<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We create intuitive, visually engaging, and user-focused designs that enhance digital experiences<br />
            and strengthen brand engagement.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for UI/UX Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we design modern and user-centric digital experiences that combine creativity, functionality, and usability. 
          Our UI/UX design services focus on creating intuitive interfaces and seamless user journeys that improve customer engagement and satisfaction. 
          From websites and mobile applications to dashboards and digital platforms, we craft visually appealing and highly functional designs tailored 
          to your business goals and audience needs.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UI/UX Design Services) ====================
const services = [
  { title: 'User Interface (UI) Design', desc: 'Modern and visually engaging interfaces designed to create smooth and interactive digital experiences.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'User Experience (UX) Design', desc: 'User-focused designs that improve usability, accessibility, and customer satisfaction.', color: '#fbff06', text: '#000000' },
  { title: 'Wireframing & Prototyping', desc: 'Interactive wireframes and prototypes to visualize workflows and product functionality before development.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Website UI/UX Design', desc: 'Responsive and user-friendly website designs tailored to improve engagement and conversions.', color: '#fbff06', text: '#000000' },
  { title: 'Mobile App UI/UX Design', desc: 'Intuitive mobile app interfaces designed for seamless navigation and enhanced user interaction.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Dashboard & Admin Panel Design', desc: 'Clean and organized dashboard interfaces for efficient workflow and data management.', color: '#fbff06', text: '#000000' },
  { title: 'Design System & Branding', desc: 'Consistent design systems and visual branding that strengthen identity and user experience.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Responsive & Interactive Design', desc: 'Adaptive and interactive designs optimized for all screen sizes and devices.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our UI/UX Design Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for UI/UX Design Services) ====================
const benefits = [
  'User-focused and intuitive designs',
  'Modern and visually appealing interfaces',
  'Improved customer engagement and usability',
  'Responsive designs for all devices',
  'Consistent branding and user experience',
  'Optimized user journeys and interactions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our UI/UX Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating designs that are not only visually appealing but also functional, user-friendly, and business-focused. 
          Our design approach combines creativity, research, and usability to deliver engaging digital experiences that improve customer 
          interaction, increase user retention, and strengthen brand identity.
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
              alt="UI/UX Design Illustration"
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

// ==================== DigitalProcess Component (Updated for UI/UX Design Services) ====================
const processSteps = [
  { title: 'Research & Requirement Analysis', desc: 'Understand user behavior, business goals, and project requirements.' },
  { title: 'Wireframing & Planning', desc: 'Create structured layouts and user flow strategies.' },
  { title: 'UI Design Creation', desc: 'Designing visually engaging and interactive interfaces.' },
  { title: 'Prototyping & User Testing', desc: 'Testing user interactions and improving usability.' },
  { title: 'Design Refinement', desc: 'Optimizing designs based on feedback and performance analysis.' },
  { title: 'Final Delivery & Support', desc: 'Delivering finalized design assets and ongoing design support.' },
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

// ==================== DigitalIndustries Component (Updated for UI/UX Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurant & Hospitality',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
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
const UIUXDesignServicesPage = () => {
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

export default UIUXDesignServicesPage;
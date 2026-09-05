"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Wireframing & Prototyping Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            WIREFRAMING &<br />PROTOTYPING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Visualize, test, and refine your ideas with structured wireframes and interactive prototypes<br />
            before development. 
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Wireframing & Prototyping Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we help you transform ideas into clear, testable designs through professional wireframing 
          and prototyping services. Our approach focuses on planning user journeys, defining structure, and creating interactive experiences 
          that bring your concept to life. By validating ideas early, we reduce development risks, improve usability, and ensure your final 
          product meets user expectations and business goals.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Wireframing & Prototyping Services) ====================
const services = [
  { title: 'Low-Fidelity Wireframes', desc: 'Basic layout structures that define content placement and user flow.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'High-Fidelity Wireframes', desc: 'Detailed wireframes with design elements that closely represent the final product.', color: '#fbff06', text: '#000000' },
  { title: 'Interactive Prototypes', desc: 'Clickable prototypes that simulate real user interactions and workflows.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'User Flow Design', desc: 'Mapping user journeys to ensure smooth navigation and seamless experience.', color: '#fbff06', text: '#000000' },
  { title: 'App & Website Prototyping', desc: 'Prototyping for mobile apps, websites, and software interfaces.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Usability Testing Prototypes', desc: 'Creating prototypes for testing user behavior and gathering feedback.', color: '#fbff06', text: '#000000' },
  { title: 'Design Validation', desc: 'Ensuring design concepts align with user needs and business goals.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Iteration & Improvements', desc: 'Refining wireframes and prototypes based on feedback and testing insights.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Wireframing & Prototyping Services) ====================
const benefits = [
  'Clear visualization of ideas',
  'Early detection of design issues',
  'Improved user experience',
  'Faster development process',
  'Cost-effective design validation',
  'Better communication between teams',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Wireframing & Prototyping Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating clear, user-focused design structures that help you visualize your product before development begins. 
          Our team ensures that every concept is tested, validated, and optimized, reducing risks and improving the overall user experience.
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
              alt="Wireframing and Interactive Prototyping Process - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Wireframing & Prototyping Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your product goals, audience, and requirements.' },
  { title: 'Structure & Planning', desc: 'Defining layout, navigation, and user flow.' },
  { title: 'Wireframe Creation', desc: 'Designing low and high-fidelity wireframes.' },
  { title: 'Prototype Development', desc: 'Building interactive and clickable prototypes.' },
  { title: 'Testing & Feedback', desc: 'Gathering user feedback and refining designs.' },
  { title: 'Final Delivery', desc: 'Providing ready-to-use wireframes and prototypes.' },
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
        <h2 className="dm-section-title">Our UX Design Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Wireframing & Prototyping Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & e-Learning',
  'SaaS & Technology Platforms',
  'Corporate Businesses',
  'Finance & Accounting',
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
            <Image src="/images/1.webp" alt="E-Commerce Shopping App Wireframes - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Portal Mockups - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Platform Course Dashboard Layout - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Software Product Interface Prototypes - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Business Dashboard Wireframes - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const WireframingPrototypingServicesPage = () => {
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

export default WireframingPrototypingServicesPage;

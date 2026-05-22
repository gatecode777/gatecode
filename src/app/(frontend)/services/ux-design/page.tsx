"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for UX Design Services) ====================
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
            UX (USER EXPERIENCE)<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Creating seamless, intuitive and meaningful user experiences that drive<br />
            engagement and satisfaction.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for UX Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we focus on designing user experiences that are simple, efficient, and enjoyable. 
          Our UX design approach is centered around understanding user behavior, needs, and expectations to create products that 
          are easy to use and highly engaging. From research and strategy to usability testing and optimization, we ensure every 
          interaction adds value to your users and supports your business goals.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UX Design Services) ====================
const services = [
  { title: 'User Research & Analysis', desc: 'Understanding user behavior, needs, and pain points through detailed research and insights.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Information Architecture', desc: 'Structuring content and navigation for easy access and better usability.', color: '#fbff06', text: '#000000' },
  { title: 'Wireframing & User Flows', desc: 'Designing wireframes and user journeys to map out smooth user interactions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Prototyping & Interaction Design', desc: 'Creating interactive prototypes to visualize and test user experiences.', color: '#fbff06', text: '#000000' },
  { title: 'Usability Testing', desc: 'Evaluating designs with real users to improve usability and performance.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UX Audit & Optimization', desc: 'Analyzing existing products and improving user experience for better engagement.', color: '#fbff06', text: '#000000' },
  { title: 'Conversion Optimization', desc: 'Enhancing user journeys to improve conversions and achieve business objectives.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Accessibility & User-Friendly Design', desc: 'Ensuring designs are inclusive, accessible, and easy to use for all users.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for UX Design Services) ====================
const benefits = [
  'Improved user satisfaction and engagement',
  'Better usability and navigation',
  'Increased conversion rates',
  'Data-driven design decisions',
  'Reduced user friction and errors',
  'Enhanced product performance',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our UX Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating user-centered experiences that improve satisfaction, engagement, and usability. 
          Our team combines research, strategy, and design thinking to deliver UX solutions that align with both 
          user needs and business goals.
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
              alt="UX Design Illustration"
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

// ==================== DigitalProcess Component (Updated for UX Design Services) ====================
const processSteps = [
  { title: 'Research & Discovery', desc: 'Understanding users, business goals, and market trends.' },
  { title: 'Strategy & Planning', desc: 'Defining user journeys, workflows, and experience strategy.' },
  { title: 'Wireframing & Prototyping', desc: 'Creating layouts and interactive prototypes.' },
  { title: 'Testing & Validation', desc: 'Conducting usability testing and gathering feedback.' },
  { title: 'Optimization & Improvement', desc: 'Refining experiences for better performance and engagement.' },
  { title: 'Final Delivery', desc: 'Providing UX documentation and implementation support.' },
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

// ==================== DigitalIndustries Component (Updated for UX Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
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
const UXDesignServicesPage = () => {
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

export default UXDesignServicesPage;
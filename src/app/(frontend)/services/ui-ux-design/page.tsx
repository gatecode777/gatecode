"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for UI/UX Design Services) ====================
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
            Best UI/UX<br />Design Company<br />In Jaipur
          </h1>
          <p className="dm-hero-subtitle">
            We craft intuitive, conversion-focused user interfaces and research-driven digital experiences that reduce friction, captivate users, and elevate brand loyalty.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
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
          At Gatecode Technologies Pvt. Ltd., we understand that superior digital product design is a balance of human behavioral psychology, visual elegance, and commercial strategy. A visually striking interface fails if users struggle to complete their tasks, while a functional system with poor aesthetics fails to inspire confidence. We bridge this gap by designing user-centric interfaces rooted in empirical research.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          From enterprise dashboards, fintech portals, and mobile applications to high-converting consumer platforms, our multidisciplinary design team transforms complex operational workflows into natural, effortless interactions. We construct modular design systems, adhere to WCAG accessibility guidelines, and provide pixel-perfect Figma documentation, ensuring a seamless bridge between design and full-stack development.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UI/UX Design Services) ====================
const services = [
  { 
    title: 'User Interface (UI) Design', 
    desc: 'Visually refined, pixel-perfect interfaces designed with balanced typography, harmonious palettes, and modern layout aesthetics.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'User Experience (UX) Architecture', 
    desc: 'Research-backed user journey mapping, information architecture, and behavioral flows engineered to eliminate user friction.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Interactive Wireframing & Prototyping', 
    desc: 'Rapid clickable prototypes in Figma that visualize complex application logic, screen transitions, and micro-interactions.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Web Application & SaaS UI/UX', 
    desc: 'Intuitive product interfaces designed for dense data handling, modular dashboards, and effortless multi-step workflows.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Mobile App UI/UX Design', 
    desc: 'Touch-optimized mobile journeys engineered for natural thumb navigation, fluid swipe gestures, and device responsiveness.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Enterprise Design Systems', 
    desc: 'Scalable Figma component libraries with unified tokens, typography rules, and interactive states for rapid engineering handoff.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Usability Auditing & Heuristic Reviews', 
    desc: 'Data-driven usability evaluations, heat map reviews, and user feedback analysis to uncover drop-off points.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Design System Maintenance & Evolution', 
    desc: 'Continuous component updates, accessibility compliance checks (WCAG 2.1), and design-to-code alignment.', 
    color: '#fbff06', 
    text: '#000000' 
  },
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
  'Intuitive user journeys designed to maximize conversion rates.',
  'Comprehensive Figma design systems for rapid developer handoff.',
  'Strict adherence to WCAG 2.1 accessibility standards.',
  'Data-driven user research eliminating guesswork and friction.',
  'Flawless responsiveness across mobile, tablet, and desktop screens.',
  'Transparent iterative sprints with interactive clickable prototypes.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for UI/UX Design?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          A poorly structured interface silently drives potential customers away. When navigation is cluttered, calls-to-action are obscured, or page layouts are disorienting, bounce rates surge and customer acquisition costs rise unnecessarily.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, our design approach solves real usability challenges. By conducting in-depth user persona research, crafting detailed wireframes, and validating interactive prototypes with real user testing, we ensure every screen guides visitors effortlessly toward conversion, strengthening brand perception and accelerating adoption.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits We Deliver
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
              alt="User Centric UI/UX Design Workflow - Gatecode Technologies"
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
  { 
    title: 'Discovery & User Persona Modeling', 
    desc: 'We uncover stakeholder requirements, conduct demographic research, and define core user personas and success metrics.' 
  },
  { 
    title: 'Information Architecture & User Flows', 
    desc: 'We structure logical navigation trees, task workflows, and content hierarchies to ensure effortless exploration.' 
  },
  { 
    title: 'Low-Fidelity Wireframing', 
    desc: 'We create functional wireframe layouts to validate content placement, information grouping, and core user actions early.' 
  },
  { 
    title: 'High-Fidelity UI & Design Systems', 
    desc: 'We craft polished visual designs, establishing custom color tokens, typography scales, and component libraries in Figma.' 
  },
  { 
    title: 'Prototyping & Usability Testing', 
    desc: 'We link clickable prototypes to conduct user testing sessions, gather feedback, and refine interaction states.' 
  },
  { 
    title: 'Design Handoff & Developer Collaboration', 
    desc: 'We provide clean design specifications, exportable CSS tokens, and ongoing collaboration during the build phase.' 
  },
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail UI/UX Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare and Medical Systems UI/UX Design - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Real Estate Platforms UI/UX Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics and Shipping Systems User Interface - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education and E-Learning User Experience Design - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/ui-ux-design' },
      { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: 'https://www.gatecode.in/services/ui-ux-design' },
    ],
  };

  const uiUxSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'UI/UX Design Services',
    name: 'UI/UX Design Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Leading UI/UX design company in India providing user research & analysis, wireframing and prototyping, mobile app UI/UX design, and design system development services.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(uiUxSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="ui-ux-design" serviceName="UI/UX design" />
      <ContactSection />
    </div>
  );
};

export default UIUXDesignServicesPage;

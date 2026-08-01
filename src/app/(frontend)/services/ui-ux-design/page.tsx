"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
              alt="User Centric UI UX Design Workflow - Gatecode Technologies"
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail UI UX Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare and Medical Systems UI UX Design - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Real Estate Platforms UI UX Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Logistics and Shipping Systems User Interface - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Education and E-Learning User Experience Design - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Premier UI UX Design Agency in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a premier <strong>ui ux design agency in india</strong> and trusted <strong>ui ux design company</strong>. As a leading <strong>ui ux agency</strong>, our dedicated team of senior <strong>ui ux designer</strong> specialists crafts user-centric digital products, delivering high-performance <strong>ui ux design services</strong> and intuitive <strong>ui and ux design</strong> architectures that boost engagement and streamline customer journeys.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Wireframing, Prototyping & Design System Development Services
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Transforming product ideas into market-ready applications requires seamless visual hierarchy and user research. Recognizing <strong>what is ui ux design</strong> excellence, we specialize in <strong>wireframing and prototyping</strong> alongside enterprise-grade <strong>design system development services</strong> to ensure consistent typography, component libraries, and visual guidelines across all user touchpoints.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Mobile App & Web UI UX Design</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Partner with an experienced <strong>mobile app ui ux design company</strong>. We build responsive web platforms and iOS/Android app interfaces centered around <strong>ui and ux design</strong> best practices.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Wireframing & Prototyping</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Visualize user flows and validate product UX early with high-fidelity <strong>wireframing and prototyping</strong>, interactive Figma models, and clickable user testing skeletons.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Design System Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Scale product development with custom <strong>design system development services</strong> from a <strong>best ui ux agency</strong>, creating reusable UI tokens, UI kits, and design specs.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode as Your Preferred UI UX Design Company?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with an established <strong>ui ux design agency</strong> guarantees frictionless product adoption and higher conversion rates. Choosing Gatecode Technologies gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Human-Centric Research:</strong> Deep user persona mapping, heat map analysis, and usability audit reviews.</li>
            <li style={{ marginBottom: '10px' }}><strong>Pixel-Perfect Visual UI:</strong> Modern, accessible, and clean user interface components tailored to your brand.</li>
            <li style={{ marginBottom: '10px' }}><strong>Developer-Handshake Ready:</strong> Clean Figma design tokens, CSS specs, and component documentation for engineering teams.</li>
          </ul>

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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/ui-ux-design' },
      { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: 'https://gatecode.in/services/ui-ux-design' },
    ],
  };

  const uiUxSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'UI UX Design Services',
    name: 'UI UX Design Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Leading UI UX design company in India providing user research & analysis, wireframing and prototyping, mobile app UI UX design, and design system development services.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose Gatecode Technologies as your UI UX design company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a premier UI UX design company in India delivering user-centric ui and ux design, wireframing and prototyping, and custom design system development services.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is wireframing and prototyping in UI UX design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wireframing and prototyping involve creating blueprint layouts and interactive clickable prototypes to validate user experience and product functionality before software development.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer mobile app UI UX design services and design systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! As a specialized mobile app ui ux design company, we craft intuitive iOS and Android mobile interfaces along with centralized design system development services.',
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <SeoContentSection />
      <ContactSection />
    </div>
  );
};

export default UIUXDesignServicesPage;

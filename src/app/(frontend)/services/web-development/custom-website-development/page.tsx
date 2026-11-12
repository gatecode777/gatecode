"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Custom Website Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (20).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            Best Custom<br />Website Development<br />Services In Jaipur
          </h1>
          <p className="dm-hero-subtitle">
            We architect bespoke, high-performance websites engineered around your exact business logic, delivering lightning-fast load speeds, intuitive user experiences, and scalable digital foundations.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Custom Website Development) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our custom website development services focus on building digital solutions that mirror your exact operational requirements and brand identity. Rather than forcing your business into rigid off-the-shelf templates or generic page builders, we engineer tailored architectures from the ground up, ensuring every feature serves a distinct commercial purpose.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Our engineering approach unites intuitive UI/UX design with robust full-stack development, delivering fast load times, seamless responsiveness across devices, and airtight security. Whether you are creating a modern corporate platform, a customer portal, or an intricate web application, we build scalable digital assets designed to perform reliably and adapt to your future growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Custom Website Development) ====================
const services = [
  { 
    title: 'Bespoke UI/UX Design & Prototyping', 
    desc: 'Unique digital layouts and interactive prototypes crafted to reflect your brand identity, engage visitors, and guide them smoothly toward conversion.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Mobile-First Responsive Engineering', 
    desc: 'Fluid responsive layouts optimized for all viewport dimensions, ensuring intuitive navigation and seamless usability across all modern mobile and desktop devices.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Modern Frontend Architecture', 
    desc: 'Fast, accessible interfaces built with cutting-edge frameworks like React and Next.js, ensuring instantaneous page loads and flawless interactions.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Robust Backend & Database Systems', 
    desc: 'Secure server-side architectures, optimized SQL/NoSQL databases, and efficient business logic built to handle complex enterprise workflows.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Technical SEO & Core Web Vitals', 
    desc: 'Clean semantic code, structured schema markup, and asset optimization engineered to achieve peak scores on Google Core Web Vitals.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Enterprise Security & Data Protection', 
    desc: 'Robust security configurations including automated SSL, cross-site scripting prevention, secure authentication, and active vulnerability safeguards.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Custom API & System Integration', 
    desc: 'Seamless data connectivity linking your custom web platform with CRMs, ERP solutions, payment gateways, and third-party SaaS tools.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Lifecycle Maintenance & Support', 
    desc: 'Dedicated post-launch monitoring, security patches, regular version updates, and continuous performance optimization.', 
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

// ==================== DigitalWhyChoose Component (Updated for Custom Website Development) ====================
const benefits = [
  '100% custom codebase free from redundant plugins and template bloat.',
  'Tailored UI/UX journeys designed to maximize user conversion rates.',
  'Sub-second page load times optimized for Google Core Web Vitals.',
  'Granular security controls with encrypted data transmissions.',
  'Flexible modular architecture ready to scale with business growth.',
  'Seamless integration with existing CRM, ERP, and payment platforms.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Custom Website Development?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Generic templates and commercial theme packages often introduce unnecessary scripts, restrictive layouts, and severe performance bottlenecks that impede search visibility and frustrate visitors. When your business needs unique functionality or distinctive brand presentation, pre-packaged solutions quickly become a liability.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we deliver custom web development that offers total technical freedom. Every module, interface component, and database interaction is engineered specifically for your operational ecosystem, delivering optimal efficiency, superior security, and seamless scalability as your traffic and customer base expand.
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
              alt="Custom Website Development Roadmap - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Custom Website Development) ====================
const processSteps = [
  { 
    title: 'Strategic Discovery & Scoping', 
    desc: 'We evaluate your brand objectives, user personas, operational workflows, and functional specifications to outline a detailed technical roadmap.' 
  },
  { 
    title: 'Information Architecture & Wireframing', 
    desc: 'We map site hierarchies, user interaction flows, and structural wireframes to ensure logical navigation and effortless content discovery.' 
  },
  { 
    title: 'Interactive UI Prototyping', 
    desc: 'We design high-fidelity visual interfaces reflecting your brand aesthetics, typography, and responsive design guidelines.' 
  },
  { 
    title: 'Agile Full-Stack Development', 
    desc: 'Our engineering team builds modular, clean frontend and backend code, implementing robust database structures and secure API connections.' 
  },
  { 
    title: 'Comprehensive Quality Assurance', 
    desc: 'We perform cross-browser compatibility testing, accessibility validation, security auditing, and speed benchmarks across all device viewports.' 
  },
  { 
    title: 'Zero-Downtime Deployment & Handover', 
    desc: 'We launch your custom website smoothly, configure caching, analytics, and server monitoring, and provide complete documentation.' 
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
        <h2 className="dm-section-title">Our Development Process</h2>
        <div className="dm-process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="dm-process-item">
              <h3 className="dm-process-label">{item.title}</h3>
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

// ==================== DigitalIndustries Component (Updated for Custom Website Development) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Food Delivery',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Travel & Hospitality',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Custom Web Solutions - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant and Food Delivery Custom Web Development - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare and Wellness Portal Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Education and E-Learning Web Development - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Business Custom Web Solutions - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
// ==================== Main Page Component ====================
const CustomWebsiteDevelopmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/web-development' },
      { '@type': 'ListItem', position: 3, name: 'Custom Website Development', item: 'https://www.gatecode.in/services/web-development/custom-website-development' },
    ],
  };

  const customWebDevServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Website Development Services',
    name: 'Custom Website Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Custom website development company delivering tailored, high-performance, and responsive web solutions engineered for business growth.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customWebDevServiceSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="web-development/custom-website-development" serviceName="custom website development" />
      <ContactSection />
    </div>
  );
};

export default CustomWebsiteDevelopmentPage;

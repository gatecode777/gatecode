"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Packaging Design Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/graphic.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            PACKAGING<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Creative and strategic packaging designs that attract customers, enhance product appeal,<br />
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

// ==================== DigitalAbout Component (Updated for Packaging Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we create innovative packaging designs that not only protect your product but also communicate 
          your brand story effectively. Our approach combines creativity, functionality, and market understanding to design packaging that 
          stands out on shelves and connects with customers. Whether you need product packaging, labels, or complete packaging solutions, 
          we deliver designs that enhance visual appeal and drive buying decisions.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Packaging Design Services) ====================
const services = [
  { title: 'Product Packaging Design', desc: 'Creative packaging designs tailored to highlight your product and brand identity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Label Design', desc: 'Professional label designs that clearly communicate product information and branding.', color: '#fbff06', text: '#000000' },
  { title: 'Box & Container Design', desc: 'Custom box and packaging solutions designed for functionality and visual appeal.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Eco-Friendly Packaging Design', desc: 'Sustainable packaging solutions that reduce environmental impact and enhance brand value.', color: '#fbff06', text: '#000000' },
  { title: 'Branding Integration', desc: 'Consistent branding across packaging with colors, typography, and visual elements.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Print-Ready Packaging Files', desc: 'High-quality, print-ready designs with accurate dimensions and specifications.', color: '#fbff06', text: '#000000' },
  { title: 'Packaging Mockups & Prototypes', desc: 'Realistic mockups and prototypes to visualize final packaging before production.', color: '#4e7c7e', text: '#ffffff' },
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

// ==================== DigitalWhyChoose Component (Updated for Packaging Design Services) ====================
const benefits = [
  'Attractive and eye-catching packaging',
  'Strong brand identity and consistency',
  'Improved product presentation',
  'Enhanced customer experience',
  'Print-ready and production-friendly designs',
  'Customized solutions for different products',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Packaging Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating packaging that not only looks attractive but also enhances product value and customer experience. 
          Our team combines creativity, branding expertise, and market insights to deliver packaging designs that improve shelf presence, 
          brand recognition, and customer engagement.
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
              alt="Packaging Design Illustration"
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

// ==================== DigitalProcess Component (Updated for Packaging Design Services) ====================
const processSteps = [
  { title: 'Requirement & Product Analysis', desc: 'Understanding your product, audience, and packaging needs.' },
  { title: 'Concept Development', desc: 'Creating creative design concepts and packaging ideas.' },
  { title: 'Design Creation', desc: 'Developing visually appealing and functional packaging designs.' },
  { title: 'Review & Refinement', desc: 'Improving designs based on feedback and requirements.' },
  { title: 'Final Delivery', desc: 'Providing print-ready files and packaging specifications.' },
  { title: 'Ongoing Support', desc: 'Assisting with updates and additional packaging variations.' },
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

// ==================== DigitalIndustries Component (Updated for Packaging Design Services) ====================
const industries = [
  'Food & Beverage',
  'Cosmetics & Personal Care',
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'FMCG Products',
  'Startups & Brands',
  'Luxury & Premium Products',
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
const PackagingDesignServicesPage = () => {
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

export default PackagingDesignServicesPage;

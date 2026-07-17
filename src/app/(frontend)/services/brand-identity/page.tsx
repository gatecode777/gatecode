"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Brand Identity Design Services) ====================
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
            BRAND IDENTITY<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Create a strong, memorable, and consistent brand identity that connects with your audience<br />
            and sets you apart.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Brand Identity Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we craft powerful brand identities that reflect your business values, vision, and personality. 
          Our design approach focuses on creating visually appealing and strategically aligned brand elements that ensure consistency across 
          all platforms. From logo design to complete brand systems, we help businesses build a unique identity that enhances recognition, 
          trust, and long-term growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Brand Identity Design Services) ====================
const services = [
  { title: 'Logo Design', desc: 'Creative and unique logo designs that represent your brand\'s core identity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Style Guide', desc: 'Comprehensive brand guidelines including colors, typography, and visual elements for consistent branding.', color: '#fbff06', text: '#000000' },
  { title: 'Color Palette & Typography', desc: 'Carefully selected colors and fonts that align with your brand personality and messaging.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Business Collateral Design', desc: 'Professional designs for business cards, letterheads, brochures, and other branded materials.', color: '#fbff06', text: '#000000' },
  { title: 'Social Media Branding', desc: 'Consistent branding elements designed for social media platforms to enhance visibility.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Packaging & Label Design', desc: 'Creative packaging designs that improve product appeal and brand recognition.', color: '#fbff06', text: '#000000' },
  { title: 'Visual Identity System', desc: 'A complete set of visual elements that define your brand across digital and offline platforms.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Rebranding Services', desc: 'Refreshing and modernizing existing brand identities to stay relevant and competitive.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Brand Identity Design Services) ====================
const benefits = [
  'Strong and memorable brand identity',
  'Consistent branding across all platforms',
  'Improved brand recognition',
  'Professional and modern visual presence',
  'Better audience connection and trust',
  'Long-term brand growth and positioning',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Brand Identity Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating visually impactful and strategically designed brand identities that communicate your business message effectively. 
          Our team combines creativity, market understanding, and design expertise to deliver consistent branding solutions that strengthen 
          recognition and build customer trust.
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
              alt="Visual Corporate Branding and Identity Creation - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Brand Identity Design Services) ====================
const processSteps = [
  { title: 'Brand Discovery & Research', desc: 'Understanding your business, audience, and market positioning.' },
  { title: 'Concept Development', desc: 'Creating creative concepts and design directions.' },
  { title: 'Visual Design Creation', desc: 'Designing logos, color systems, and branding elements.' },
  { title: 'Review & Refinement', desc: 'Improving designs based on feedback and requirements.' },
  { title: 'Final Delivery', desc: 'Providing complete brand identity assets and guidelines.' },
  { title: 'Ongoing Brand Support', desc: 'Ensuring consistency and updates across all branding materials.' },
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

// ==================== DigitalIndustries Component (Updated for Brand Identity Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Healthcare & Wellness',
  'Education & Training',
  'Corporate Businesses',
  'Startups & Agencies',
  'Real Estate & Service Industries',
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
            <Image src="/images/1.jpg" alt="E-Commerce Store Branding Identity - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Restaurant and Food Outlet Logo Design - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Healthcare Center Branding Visual Assets - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Educational Institute Stationery and Brand Kit - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Corporate Enterprise Brand Style Guidelines - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BrandIdentityDesignServicesPage = () => {
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

export default BrandIdentityDesignServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Logo Design & Branding Services) ====================
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
            LOGO DESIGN<br />& BRANDING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Create a powerful first impression with a unique logo and a strong brand identity that sets you apart.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Logo Design & Branding Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we design impactful logos and complete branding solutions that define your business identity. 
          Our approach blends creativity, strategy, and market understanding to craft visuals that not only look great but also communicate 
          your brand message effectively. From logo creation to full brand development, we help businesses build a consistent and memorable 
          presence across all platforms.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Logo Design & Branding Services) ====================
const services = [
  { title: 'Custom Logo Design', desc: 'Unique and creative logo designs tailored to represent your brand\'s vision and values.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Identity Development', desc: 'Complete branding solutions including logo, color palette, typography, and visual elements.', color: '#fbff06', text: '#000000' },
  { title: 'Brand Style Guide', desc: 'Detailed guidelines for maintaining consistency in design, colors, fonts, and brand usage.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Business Stationery Design', desc: 'Professional designs for business cards, letterheads, envelopes, and other corporate materials.', color: '#fbff06', text: '#000000' },
  { title: 'Social Media Branding', desc: 'Consistent and visually appealing branding for social media platforms.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Rebranding Solutions', desc: 'Refreshing and modernizing your existing brand identity for better market relevance.', color: '#fbff06', text: '#000000' },
  { title: 'Packaging & Label Design', desc: 'Creative packaging designs that enhance product appeal and brand recognition.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Visual Branding Assets', desc: 'A complete set of design elements to ensure brand consistency across all platforms.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Logo Design & Branding Services) ====================
const benefits = [
  'Unique and memorable brand identity',
  'Strong visual consistency across platforms',
  'Professional and modern design approach',
  'Improved brand recognition and trust',
  'Customized branding solutions',
  'Long-term brand growth and positioning',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Logo Design & Branding Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating meaningful and visually compelling branding that reflects your business identity and connects with your audience. 
          Our team combines creativity with strategic thinking to deliver branding solutions that improve recognition, build trust, and support 
          long-term business growth.
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
              alt="Logo Concept and Branding Guidelines Showcase - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Logo Design & Branding Services) ====================
const processSteps = [
  { title: 'Brand Research & Discovery', desc: 'Understanding your business, audience, and brand vision.' },
  { title: 'Concept Development', desc: 'Creating initial logo concepts and branding directions.' },
  { title: 'Design Creation', desc: 'Developing logos and visual identity elements.' },
  { title: 'Review & Refinement', desc: 'Improving designs based on feedback and requirements.' },
  { title: 'Final Delivery', desc: 'Providing complete branding assets and guidelines.' },
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

// ==================== DigitalIndustries Component (Updated for Logo Design & Branding Services) ====================
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
            <Image src="/images/1.jpg" alt="E-Commerce Store Corporate Logo Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Restaurant and Cafe Custom Logo Branding - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Healthcare and Medical Logo Mark Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Educational School and Academy Emblem Design - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Corporate Business Branding Logo Redesign - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const LogoDesignBrandingServicesPage = () => {
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

export default LogoDesignBrandingServicesPage;

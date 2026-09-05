"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Brand Strategy & Promotion Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (16).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            BRAND STRATEGY<br />& PROMOTION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Create powerful brand identities and effective promotional strategies that stand out in<br />
            today's competitive market.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Brand Strategy & Promotion Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we help businesses create powerful brand identities and effective promotional strategies that stand out 
          in today's competitive market. Our approach focuses on understanding your business vision, target audience, and market positioning to develop 
          branding solutions that are consistent, impactful, and growth-driven. From brand identity creation to digital promotions and campaign strategies, 
          we ensure your brand communicates the right message and creates lasting impressions.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Brand Strategy & Promotion Services) ====================
const services = [
  { title: 'Brand Identity Development', desc: 'Creating unique brand identities including logo, color palette, typography, and visual elements.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Positioning Strategy', desc: 'Defining your brand\'s unique value and positioning it effectively in the target market.', color: '#fbff06', text: '#000000' },
  { title: 'Marketing & Promotion Strategy', desc: 'Strategic planning of promotional campaigns to increase brand visibility and reach.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Digital Branding', desc: 'Building a strong online presence through consistent branding across digital platforms.', color: '#fbff06', text: '#000000' },
  { title: 'Social Media Branding', desc: 'Creating and maintaining a consistent brand voice and identity across social media channels.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Campaign Planning & Execution', desc: 'Designing and executing marketing campaigns that improve brand awareness and engagement.', color: '#fbff06', text: '#000000' },
  { title: 'Content & Creative Strategy', desc: 'Developing engaging content and creative visuals aligned with brand messaging.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Performance Analysis', desc: 'Tracking brand performance, audience engagement, and campaign effectiveness.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Brand Strategy & Promotion Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Brand Strategy & Promotion Services) ====================
const benefits = [
  'Strong and consistent brand identity',
  'Improved brand recognition and visibility',
  'Targeted promotional strategies',
  'Better audience engagement',
  'Increased market competitiveness',
  'Long-term brand growth and positioning',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Brand Strategy & Promotion Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on building strong, consistent, and growth-oriented brands that connect with audiences and create long-term value. 
          Our team combines creativity, market insights, and strategic planning to deliver branding and promotional solutions that improve 
          visibility, strengthen identity, and drive business growth.
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
              alt="Corporate Branding Blueprint and Visual Guidelines - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Brand Strategy & Promotion Services) ====================
const processSteps = [
  { title: 'Brand & Market Analysis', desc: 'Understanding your business, audience, and competitive landscape.' },
  { title: 'Strategy Development', desc: 'Creating customized branding and promotional strategies.' },
  { title: 'Creative Design & Messaging', desc: 'Developing visual identity and brand communication.' },
  { title: 'Campaign Execution', desc: 'Launching branding and promotional campaigns.' },
  { title: 'Performance Monitoring', desc: 'Tracking brand performance and audience engagement.' },
  { title: 'Optimization & Growth', desc: 'Improving strategies for long-term brand success.' },
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
        <h2 className="dm-section-title">Our Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Brand Strategy & Promotion Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Real Estate & Construction',
  'Corporate Businesses',
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
            <Image src="/images/1.webp" alt="E-Commerce Store Corporate Brand Strategy - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant Franchise Visual Branding Identity - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare and Medical Branding Guidelines - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational School and University Promotion - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Brokerage Marketing and Promotion - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BrandStrategyPromotionServicesPage = () => {
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

export default BrandStrategyPromotionServicesPage;

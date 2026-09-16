"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Content Writing Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (15).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CONTENT<br />WRITING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Professional, engaging, and SEO-friendly content writing solutions designed to strengthen your<br />
            brand's communication and digital presence.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Content Writing Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide high-quality content writing services tailored to your business goals and audience needs. 
          Our content focuses on clarity, creativity, and strategic communication to help businesses connect with customers and improve online visibility. 
          From website content and blogs to marketing copy and social media captions, we create impactful content that informs, engages, and drives results.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Content Writing Services) ====================
const services = [
  { title: 'Website Content Writing', desc: 'Professional website content designed to communicate your brand message clearly and effectively.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Blog & Article Writing', desc: 'Informative and engaging blogs crafted to improve audience engagement and SEO performance.', color: '#fbff06', text: '#000000' },
  { title: 'SEO Content Writing', desc: 'Search engine optimized content designed to improve visibility, rankings, and organic traffic.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Social Media Content Writing', desc: 'Creative captions and content tailored for better audience interaction and brand engagement.', color: '#fbff06', text: '#000000' },
  { title: 'Marketing & Promotional Content', desc: 'Persuasive marketing content designed to attract customers and improve conversions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Email & Newsletter Writing', desc: 'Professional email content created to strengthen customer communication and engagement.', color: '#fbff06', text: '#000000' },
  { title: 'Product & Service Descriptions', desc: 'Clear and compelling product or service descriptions designed to improve customer understanding and sales.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Storytelling', desc: 'Engaging storytelling content that builds emotional connection and strengthens brand identity.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Content Writing Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Content Writing Services) ====================
const benefits = [
  'Professional and engaging content',
  'SEO-friendly writing strategies',
  'Improved brand communication',
  'Better audience engagement',
  'Increased online visibility',
  'Customized content tailored to business goals',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Content Writing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating meaningful, audience-focused, and result-driven content that helps businesses improve communication and digital presence. 
          Our writing approach combines creativity, SEO strategies, and brand understanding to deliver content that engages readers, builds trust, and 
          supports business growth.
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
              alt="Content Writing Planning and Document Outline - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Content Writing Services) ====================
const processSteps = [
  { title: 'Requirement & Audience Analysis', desc: 'Understanding your business, audience, and content objectives.' },
  { title: 'Content Planning & Strategy', desc: 'Creating structured content ideas and writing strategies.' },
  { title: 'Research & Writing', desc: 'Developing informative, engaging, and optimized content.' },
  { title: 'Editing & Quality Review', desc: 'Refining content for clarity, accuracy, and readability.' },
  { title: 'SEO & Optimization', desc: 'Optimizing content for better search visibility and performance.' },
  { title: 'Final Delivery & Support', desc: 'Delivering polished content with ongoing improvement support.' },
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
        <h2 className="dm-section-title">Our Content Writing Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Content Writing Services) ====================
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
            <Image src="/images/1.webp" alt="E-Commerce Store Product Description Copywriting - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant and Hospitality Blog Post Copywriting - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare and Medical Content Copywriting - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational School E-Learning Material Writing - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Brokerage Listings Copywriting - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const ContentWritingServicesPage = () => {
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

export default ContentWritingServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/digitalbg1.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            DIGITAL<br />MARKETING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We help businesses increase online visibility, attract targeted
            audiences, and drive measurable growth through result-driven
            digital marketing strategies.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide strategic digital marketing solutions designed to strengthen your online presence and accelerate business growth. Our team combines creativity, data-driven strategies, and modern marketing techniques to help brands connect with the right audience, improve engagement, and generate quality leads. From SEO and social media marketing to performance campaigns and branding, we create customized marketing solutions that deliver real business results.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { title: 'Search Engine Optimization (SEO)', desc: 'Improve website visibility and rank higher on search engines with optimized SEO strategies.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Social Media Marketing (SMM)', desc: 'Build brand awareness and engage audiences through impactful social media campaigns.', color: '#fbff06', text: '#000000' },
  { title: 'Pay-Per-Click Advertising (PPC)', desc: 'Generate targeted traffic and quality leads with performance-focused paid advertising campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Content Marketing', desc: 'Create valuable and engaging content that attracts, informs, and converts audiences.', color: '#fbff06', text: '#000000' },
  { title: 'Brand Strategy & Promotion', desc: 'Strengthen brand identity and improve online presence with strategic branding solutions.', color: '#fbff06', text: '#000000' },
  { title: 'Email Marketing', desc: 'Connect with customers through personalized email campaigns designed to increase engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Performance Marketing', desc: 'Data-driven marketing campaigns focused on measurable growth, ROI, and customer acquisition.', color: '#fbff06', text: '#000000' },
  { title: 'Analytics & Reporting', desc: 'Track campaign performance and customer behavior with detailed analytics and reporting.', color: '#4e7c7e', text: '#ffffff' },
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
        <h2 className="dm-section-title">Our Digital Marketing Services</h2>
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

// ==================== DigitalWhyChoose Component ====================
const benefits = [
  'Increased online visibility',
  'Improved customer engagement',
  'Targeted audience reach',
  'Lead generation and conversions',
  'Data-driven marketing strategies',
  'Performance tracking and optimization',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Digital Marketing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating innovative and result-oriented marketing strategies tailored to your business goals. Our approach combines creativity,
          audience targeting, and performance analysis to improve brand visibility, generate leads, and maximize digital growth.
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
              alt="Digital Marketing Illustration"
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

// ==================== DigitalProcess Component ====================
const processSteps = [
  { title: 'Business & Market Analysis', desc: 'Understanding your business, target audience, and market trends.' },
  { title: 'Strategy Planning', desc: 'Creating customized marketing strategies based on your goals.' },
  { title: 'Campaign Creation', desc: 'Designing and launching optimized marketing campaigns.' },
  { title: 'Content & Creative Development', desc: 'Developing engaging visuals and marketing content.' },
  { title: 'Performance Monitoring', desc: 'Tracking campaign performance and audience engagement.' },
  { title: 'Optimization & Growth', desc: 'Continuously improving campaigns for better results and ROI.' },
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
        <h2 className="dm-section-title">Our Marketing Process</h2>
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

// ==================== DigitalIndustries Component ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Education & Training',
  'Healthcare & Wellness',
  'Real Estate & Construction',
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
const DigitalMarketingPage = () => {
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

export default DigitalMarketingPage;

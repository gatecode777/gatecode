"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (13).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SEARCH ENGINE<br />MARKETING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Drive targeted traffic, generate quality leads, and grow your
            business with strategic search engine marketing solutions.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
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
          At Gatecode Technologies Pvt. Ltd., we provide performance-driven Search Engine Marketing (SEM) solutions designed to improve online visibility and accelerate business growth. Our SEM services focus on targeted advertising, keyword optimization, audience analysis, and conversion-focused campaigns to help businesses reach the right audience at the right time. From Google Ads management to performance campaigns and conversion optimization, we create customized marketing solutions that deliver measurable results and maximize return on investment.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { title: 'Google Ads Management', desc: 'Manage Google Ads campaigns to increase website traffic, leads, and conversions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Pay-Per-Click (PPC) Advertising', desc: 'Run performance-driven PPC campaigns on search engines for targeted reach and maximum ROI.', color: '#fbff06', text: '#000000' },
  { title: 'Keyword Research & Targeting', desc: 'Identifying high-performing keywords to improve search visibility and audience targeting.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Search Ad Campaigns', desc: 'Creating and managing search campaigns designed to attract high-quality traffic and potential customers.', color: '#fbff06', text: '#000000' },
  { title: 'Display Advertising', desc: 'Creating visually attractive display ads designed to boost brand awareness and engagement across digital platforms.', color: '#fbff06', text: '#000000' },
  { title: 'Remarketing Campaigns', desc: 'Reconnect with previous website visitors and boost conversions through strategic remarketing ads.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Landing Page Optimization', desc: 'Optimization of landing page design and content to improve user engagement and campaign performance.', color: '#fbff06', text: '#000000' },
  { title: 'Analytics & Performance Reporting', desc: 'Detailed tracking and reporting on campaign metrics, traffic, conversion rates, and campaign updates.', color: '#4e7c7e', text: '#ffffff' },
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
        <h2 className="dm-section-title">Our SEM Services</h2>
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
  'High-quality lead generation',
  'Higher conversion opportunities',
  'Better return on advertising investment',
  'Data-driven campaign optimization',
  'Performance tracking and analytics reports',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our SEM Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating data-driven and performance-oriented SEM strategies that help businesses achieve better visibility, targeted traffic, and higher conversions. Our team combines strategic planning, audience analysis, and campaign optimization to deliver measurable growth and maximize advertising performance.
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
              alt="SEM Illustration"
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
  { title: 'Business & Market Analysis', desc: 'Understanding your business goals, competitors, and target audience.' },
  { title: 'Keyword Research & Strategy Planning', desc: 'Identifying targeted keywords and campaign design blueprint.' },
  { title: 'Campaign Setup & Ad Creation', desc: 'Creating optimized ads and structure setup for campaigns.' },
  { title: 'Landing Page Optimization', desc: 'Improving landing page performance for better conversions.' },
  { title: 'Campaign Monitoring & Analysis', desc: 'Tracking clicks, conversions, and advertising performance metrics.' },
  { title: 'Optimization & Scaling', desc: 'Continuously improving campaigns for better ROI and growth.' },
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
        <h2 className="dm-section-title">Our SEM Process</h2>
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
  'Healthcare & Wellness',
  'Education & Training',
  'Real Estate & Construction',
  'Startups & Enterprises',
  'Corporate Businesses',
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
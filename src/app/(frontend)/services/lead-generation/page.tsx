"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Lead Generation Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (9).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            LEAD<br />GENERATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We help businesses attract high-quality leads, connect with the right audience, and increase<br />
            conversion opportunities through strategic lead generation solutions.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Lead Generation Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide result-driven lead generation services designed to help businesses grow their customer base 
          and increase sales opportunities. Our strategies focus on attracting targeted audiences, improving engagement, and converting potential 
          customers into valuable business leads. By combining digital marketing, audience research, and performance-driven campaigns, we help 
          businesses generate consistent and high-quality leads that support long-term growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Lead Generation Services) ====================
const services = [
  { title: 'Target Audience Research', desc: 'Identifying the right audience based on demographics, interests, and business goals for better lead targeting.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Social Media Lead Generation', desc: 'Generating quality leads through strategic social media campaigns and audience engagement.', color: '#fbff06', text: '#000000' },
  { title: 'PPC & Paid Advertising Campaigns', desc: 'Performance-focused advertising campaigns designed to drive targeted traffic and lead conversions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Landing Page Optimization', desc: 'Creating high-converting landing pages that encourage visitors to take action.', color: '#fbff06', text: '#000000' },
  { title: 'Email Marketing Campaigns', desc: 'Personalized email marketing strategies to nurture leads and improve customer engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'CRM & Lead Management', desc: 'Efficient lead tracking and management solutions to improve conversion and follow-up processes.', color: '#fbff06', text: '#000000' },
  { title: 'Sales Funnel Optimization', desc: 'Optimizing customer journeys and sales funnels to improve lead conversion rates.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Analytics & Performance Tracking', desc: 'Monitoring campaign performance and lead behavior through detailed reporting and analytics.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Lead Generation Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Lead Generation Services) ====================
const benefits = [
  'High-quality and targeted lead generation',
  'Increased customer engagement',
  'Improved conversion opportunities',
  'Performance-driven marketing strategies',
  'Better sales funnel optimization',
  'Measurable growth and ROI tracking',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Lead Generation Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering targeted and performance-driven lead generation strategies that help businesses attract the right customers 
          and maximize growth opportunities. Our approach combines audience research, marketing expertise, and conversion optimization to 
          generate quality leads and improve business results.
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
              alt="Lead Generation Services Illustration"
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

// ==================== DigitalProcess Component (Updated for Lead Generation Services) ====================
const processSteps = [
  { title: 'Business & Audience Analysis', desc: 'Understanding your business goals and target audience.' },
  { title: 'Strategy Development', desc: 'Creating customized lead generation strategies based on market research.' },
  { title: 'Campaign Execution', desc: 'Launching optimized campaigns across digital platforms.' },
  { title: 'Lead Capture & Management', desc: 'Collecting, organizing, and managing business leads efficiently.' },
  { title: 'Performance Monitoring', desc: 'Tracking campaign performance and lead engagement.' },
  { title: 'Optimization & Growth', desc: 'Continuously improving campaigns for better lead quality and conversions.' },
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

// ==================== DigitalIndustries Component (Updated for Lead Generation Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Real Estate',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
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
const LeadGenerationServicesPage = () => {
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

export default LeadGenerationServicesPage;
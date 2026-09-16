"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for User Research & Analysis Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            USER RESEARCH<br />& ANALYSIS<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Understand your users deeply and build experiences that truly meet their needs.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for User Research & Analysis Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide in-depth user research and analysis services to help businesses create user-focused 
          products and experiences. Our approach is centered on understanding user behavior, preferences, challenges, and expectations. 
          By gathering real insights and analyzing data, we help you make informed design and business decisions that improve usability, 
          engagement, and overall customer satisfaction.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for User Research & Analysis Services) ====================
const services = [
  { title: 'User Behavior Analysis', desc: 'Study how users interact with your product to identify patterns and improvement areas.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Market & Audience Research', desc: 'Understand your target audience, industry trends, and competitive landscape.', color: '#fbff06', text: '#000000' },
  { title: 'User Persona Development', desc: 'Create detailed user personas to represent your target audience segments.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'User Journey Mapping', desc: 'Map the journey of a user through your product.', color: '#fbff06', text: '#000000' },
  { title: 'Surveys & Feedback Collection', desc: 'Gather insights directly from users through surveys and feedback tools.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Usability Analysis', desc: 'Evaluate product usability to improve user satisfaction and performance.', color: '#fbff06', text: '#000000' },
  { title: 'Data-Driven Insights', desc: 'Analyze data to uncover actionable insights and opportunities for growth.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UX Research Reporting', desc: 'Provide structured reports with findings, recommendations, and strategies.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for User Research & Analysis Services) ====================
const benefits = [
  'Better understanding of user needs',
  'Improved product usability and design',
  'Data-driven decision making',
  'Identification of user pain points',
  'Enhanced customer satisfaction',
  'Stronger product-market fit',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our User Research & Analysis Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering accurate, data-driven insights that help businesses understand their users better and create meaningful experiences. 
          Our research-driven approach ensures that your product decisions are aligned with real user needs and market demands.
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
              alt="User Persona and UX Research Flow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for User Research & Analysis Services) ====================
const processSteps = [
  { title: 'Research Planning', desc: 'Define research goals, methods, and target audience.' },
  { title: 'Data Collection', desc: 'Gather user data through surveys, interviews, and analytics.' },
  { title: 'Analysis & Insights', desc: 'Identify key themes and insights, develop actionable recommendations.' },
  { title: 'Industry Insights', desc: 'Analyze market trends and competition, identify emerging technologies.' },
  { title: 'Reporting', desc: 'Present findings and recommendations to stakeholders.' },
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

// ==================== DigitalIndustries Component (Updated for User Research & Analysis Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'SaaS & Technology Platforms',
  'Corporate Businesses',
  'Finance & Accounting',
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
            <Image src="/images/1.webp" alt="E-Commerce Buyer Persona Development - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Experience Usability Analysis - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Platform Course Participant Analytics - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Software Product User Testing - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Enterprise Customer Feedback Collection - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const UserResearchAnalysisServicesPage = () => {
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

export default UserResearchAnalysisServicesPage;

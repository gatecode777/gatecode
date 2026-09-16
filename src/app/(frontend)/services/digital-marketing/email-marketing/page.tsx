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
        style={{ backgroundImage: `url('/images/Rectangle 228 (12).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            EMAIL<br />MARKETING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Connect with your audience, increase engagement, and drive
            conversions through strategic and personalized email marketing
            campaigns.
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
          At Gatecode Technologies Pvt. Ltd., we provide result-driven email marketing solutions designed to help businesses build stronger customer relationships and improve communication. Our email marketing strategies focus on delivering personalized, engaging, and targeted campaigns that support brand awareness, customer retention, and conversions. From automated campaigns and newsletters to audience segmentation and performance tracking, we create email marketing solutions tailored to your business goals and audience needs.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { title: 'Email Campaign Strategy', desc: 'Customized email marketing strategies aligned with business goals and customer segments.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Newsletter Design & Management', desc: 'Professional newsletters created and managed to keep customers informed and engaged.', color: '#fbff06', text: '#000000' },
  { title: 'Promotional Email Campaigns', desc: 'Creative promotional emails designed to increase sales, engagement, and customer interaction.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Automated Email Workflows', desc: 'Smart email automation setups for customer onboarding, follow-ups, and engagement campaigns.', color: '#fbff06', text: '#000000' },
  { title: 'Audience Segmentation & Targeting', desc: 'Targeted email campaigns based on customer behavior, demographics, and preferences.', color: '#fbff06', text: '#000000' },
  { title: 'Email Template Design', desc: 'Responsive and visually appealing email templates optimized for higher engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Performance Tracking & Analytics', desc: 'Detailed monitoring of open rates, click-through rates, and campaign performance data.', color: '#fbff06', text: '#000000' },
  { title: 'Lead Nurturing Campaigns', desc: 'Strategic email sequences designed to nurture leads and convert them into loyal customers.', color: '#4e7c7e', text: '#ffffff' },
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
        <h2 className="dm-section-title">Our Email Marketing Services</h2>
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
  'Improved customer engagement',
  'Increased brand awareness',
  'Higher lead generation and conversions',
  'Personalized communication strategies',
  'Automated and time-efficient campaigns',
  'Performance tracking and optimization',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Email Marketing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating personalized and performance-driven email marketing campaigns that help businesses strengthen customer relationships and improve conversions. Our team combines creative content, strategic targeting, and data-driven optimization to deliver impactful campaigns that drive measurable business growth.
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
              alt="Email Newsletter Campaign Performance Report - Gatecode Technologies"
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
  { title: 'Audience & Business Analysis', desc: 'Understanding your audience, goals, and communication requirements.' },
  { title: 'Campaign Planning', desc: 'Creating targeted email marketing strategies and workflows.' },
  { title: 'Creative Design & Content Development', desc: 'Designing engaging email templates and compelling content.' },
  { title: 'Campaign Execution', desc: 'Launching and managing email campaigns effectively.' },
  { title: 'Performance Monitoring', desc: 'Tracking campaign metrics and customer interactions.' },
  { title: 'Optimization & Growth', desc: 'Improving campaigns continuously for better engagement and results.' },
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
        <h2 className="dm-section-title">Our Email Marketing Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Store Promotional Newsletter Campaigns - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Brokerage Customer Email List - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare and Medical Clinic Email Newsletters - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Course Student Onboarding Emails - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Restaurant catering and Event Email Marketing - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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

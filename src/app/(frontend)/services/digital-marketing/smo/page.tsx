"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for SMO Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (11).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SOCIAL MEDIA<br />OPTIMIZATION<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Enhance your social media presence, improve audience engagement, and strengthen brand visibility<br />
            with strategic SMO solutions.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for SMO Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide result-driven Social Media Optimization (SMO) services designed to improve your brand's 
          visibility and engagement across social platforms. Our approach focuses on optimizing social media profiles, creating engaging content, 
          and building meaningful audience interactions to increase reach and strengthen digital presence. Through strategic optimization techniques 
          and consistent branding, we help businesses create impactful social media experiences that support long-term growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for SMO Services) ====================
const services = [
  { title: 'Social Media Profile Optimization', desc: 'Professional optimization of social media profiles to improve brand consistency and visibility.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Content Strategy & Planning', desc: 'Strategic content planning designed to increase audience engagement and brand interaction.', color: '#fbff06', text: '#000000' },
  { title: 'Creative Post & Visual Optimization', desc: 'Engaging social media creatives and optimized visual content tailored for audience attention.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Hashtag & Trend Optimization', desc: 'Targeted hashtag strategies and trend analysis to improve content reach and discoverability.', color: '#fbff06', text: '#000000' },
  { title: 'Audience Engagement Management', desc: 'Building meaningful interactions with audiences through consistent communication and engagement strategies.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Platform Performance Optimization', desc: 'Improving social media performance through profile enhancements, content optimization, and audience analysis.', color: '#fbff06', text: '#000000' },
  { title: 'Social Media Analytics & Reporting', desc: 'Detailed performance tracking and reporting to monitor growth, reach, and engagement metrics.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Visibility Enhancement', desc: 'Strengthening brand awareness and online reputation through optimized social media presence.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our SMO Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for SMO Services) ====================
const benefits = [
  'Improved social media visibility',
  'Increased audience engagement',
  'Consistent brand presence',
  'Better content reach and interaction',
  'Enhanced online reputation',
  'Long-term social media growth strategies',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our SMO Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating optimized and audience-focused social media strategies that help businesses improve online visibility and engagement. 
          Our team combines creativity, branding expertise, and performance analysis to deliver consistent social media growth and stronger digital 
          presence across multiple platforms.
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
              alt="Social Media Optimization SMO Account Growth Metrics - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for SMO Services) ====================
const processSteps = [
  { title: 'Social Media Analysis', desc: 'Understanding your brand presence, audience behavior, and platform performance.' },
  { title: 'Strategy Development', desc: 'Creating customized SMO strategies aligned with your business goals.' },
  { title: 'Profile & Content Optimization', desc: 'Optimizing profiles, visuals, captions, and content strategies.' },
  { title: 'Audience Engagement', desc: 'Managing interactions and improving community engagement.' },
  { title: 'Performance Monitoring', desc: 'Tracking reach, engagement, and social media performance metrics.' },
  { title: 'Continuous Optimization', desc: 'Regular improvements and strategy updates for long-term growth.' },
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
        <h2 className="dm-section-title">Our SMO Process</h2>
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

// ==================== DigitalIndustries Component (Updated for SMO Services) ====================
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
            <Image src="/images/1.webp" alt="E-Commerce Brand Social Profile Optimization - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Brokerage Social Profile Optimizations - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare and Medical SMO Outreach - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Institute SMO Social Pages - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Restaurant Social Media Review and Tag Management - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SocialMediaOptimizationPage = () => {
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

export default SocialMediaOptimizationPage;

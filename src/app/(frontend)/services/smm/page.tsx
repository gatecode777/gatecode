"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for SMM Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (10).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SOCIAL MEDIA<br />MARKETING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We help brands grow online through creative content, targeted campaigns, and<br />
            result-driven social media strategies.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for SMM Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide professional social media marketing solutions designed to strengthen your brand presence, 
          connect with your audience, and drive business growth. Our team combines creativity, strategy, and data-driven marketing techniques 
          to create impactful social media campaigns that improve engagement, increase visibility, and generate quality leads. From content 
          creation and brand management to paid advertising and audience targeting, we help businesses build meaningful digital connections 
          across multiple platforms.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for SMM Services) ====================
const services = [
  { title: 'Social Media Strategy & Planning', desc: 'Customized social media strategies designed to align with your business goals and target audience.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Content Creation & Creative Design', desc: 'Engaging social media posts, graphics, reels, and creative content designed to improve audience interaction.', color: '#fbff06', text: '#000000' },
  { title: 'Social Media Management', desc: 'Professional management of social media platforms to maintain consistent brand presence and engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Paid Advertising Campaigns', desc: 'Performance-driven social media advertising campaigns focused on reach, leads, and conversions.', color: '#fbff06', text: '#000000' },
  { title: 'Audience Targeting & Engagement', desc: 'Strategic audience targeting and engagement techniques to build stronger customer relationships.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Awareness Campaigns', desc: 'Creative campaigns that strengthen brand visibility and improve digital recognition.', color: '#fbff06', text: '#000000' },
  { title: 'Analytics & Performance Tracking', desc: 'Detailed monitoring and reporting of campaign performance, engagement, and audience insights.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Influencer & Promotional Campaigns', desc: 'Collaborative promotional strategies designed to expand audience reach and improve brand impact.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Social Media Marketing Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for SMM Services) ====================
const benefits = [
  'Improved brand visibility and awareness',
  'Increased audience engagement',
  'Targeted marketing strategies',
  'Better lead generation and conversions',
  'Consistent social media presence',
  'Performance-focused campaign optimization',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Social Media Marketing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating innovative and audience-focused social media strategies that help businesses build stronger digital presence 
          and meaningful customer engagement. Our approach combines creativity, market analysis, and performance tracking to deliver campaigns 
          that improve visibility, generate leads, and support long-term brand growth.
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
              alt="Social Media Marketing SMM Campaign Metrics - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for SMM Services) ====================
const processSteps = [
  { title: 'Business & Audience Analysis', desc: 'Understanding your business goals, audience behavior, and market trends.' },
  { title: 'Strategy Planning', desc: 'Creating customized social media strategies and content plans.' },
  { title: 'Creative Content Development', desc: 'Designing engaging visuals, posts, reels, and promotional content.' },
  { title: 'Campaign Execution', desc: 'Launching optimized campaigns across social media platforms.' },
  { title: 'Performance Monitoring', desc: 'Tracking engagement, audience reach, and campaign performance.' },
  { title: 'Optimization & Growth', desc: 'Continuously improving strategies for better engagement and results.' },
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

// ==================== DigitalIndustries Component (Updated for SMM Services) ====================
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
            <Image src="/images/1.jpg" alt="E-Commerce Brand Social Media Campaigns - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Real Estate Agency Social Media Advertising - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Healthcare and Medical Social Awareness Posts - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Educational Institute SMM Course Promotions - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Restaurant Social Media Branding and Offers - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SocialMediaMarketingPage = () => {
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

export default SocialMediaMarketingPage;

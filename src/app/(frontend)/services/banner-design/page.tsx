"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Banner & Poster Design Services) ====================
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
            BANNER & POSTER<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Eye-catching and impactful banner and poster designs that grab attention and effectively<br />
            communicate your message.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Banner & Poster Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we create visually striking banner and poster designs that help businesses promote their 
          products, services, and events with maximum impact. Our designs combine creativity, clear messaging, and modern design trends 
          to ensure your brand stands out across both digital and print platforms. Whether for marketing campaigns, events, or promotions, 
          we deliver designs that capture attention and drive engagement.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Banner & Poster Design Services) ====================
const services = [
  { title: 'Digital Banner Design', desc: 'Creative banners for websites, social media, and online advertising campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Event Poster Design', desc: 'Attractive posters designed for events, promotions, and announcements.', color: '#fbff06', text: '#000000' },
  { title: 'Marketing & Promotional Posters', desc: 'High-impact designs created to promote products, services, and special offers.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Social Media Banners', desc: 'Optimized banners tailored for platforms like Instagram, Facebook, and LinkedIn.', color: '#fbff06', text: '#000000' },
  { title: 'Print Ready Designs', desc: 'High-resolution designs suitable for printing with professional quality standards.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Custom Size & Format Designs', desc: 'Designs created according to specific dimensions and platform requirements.', color: '#fbff06', text: '#000000' },
  { title: 'Creative Campaign Visuals', desc: 'Visually engaging designs aligned with your marketing campaigns and brand identity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Consistent Designs', desc: 'Ensuring all banners and posters follow a consistent brand style and messaging.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Banner & Poster Design Services) ====================
const benefits = [
  'Eye-catching and creative designs',
  'Clear and impactful communication',
  'Brand-consistent visuals',
  'High-quality digital and print designs',
  'Increased audience engagement',
  'Customized designs for different platforms',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Banner & Poster Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating visually appealing and strategically designed banners and posters that communicate your message clearly and effectively. 
          Our creative team combines design expertise, marketing understanding, and brand consistency to deliver high-quality visuals that enhance 
          promotions and audience engagement.
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
              alt="Banner & Poster Design Illustration"
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

// ==================== DigitalProcess Component (Updated for Banner & Poster Design Services) ====================
const processSteps = [
  { title: 'Requirement & Concept Understanding', desc: 'Understanding your message, audience, and design goals.' },
  { title: 'Creative Planning', desc: 'Developing design concepts and layout ideas.' },
  { title: 'Design Creation', desc: 'Crafting visually engaging banners and posters.' },
  { title: 'Review & Feedback', desc: 'Refining designs based on client feedback.' },
  { title: 'Final Delivery', desc: 'Providing high-quality, ready-to-use design files.' },
  { title: 'Ongoing Creative Support', desc: 'Offering additional design updates and variations as needed.' },
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

// ==================== DigitalIndustries Component (Updated for Banner & Poster Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Events & Entertainment',
  'Restaurants & Hospitality',
  'Healthcare & Wellness',
  'Education & Training',
  'Corporate Businesses',
  'Real Estate & Services',
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
const BannerPosterDesignServicesPage = () => {
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

export default BannerPosterDesignServicesPage;
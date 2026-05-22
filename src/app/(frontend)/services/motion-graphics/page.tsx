"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Motion Graphics & Creative Visuals) ====================
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
            MOTION GRAPHICS<br />& CREATIVE<br />VISUALS
          </h1>
          <p className="dm-hero-subtitle">
            Bring your ideas to life with dynamic motion graphics and visually engaging creatives that capture<br />
            attention and elevate your brand.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Motion Graphics & Creative Visuals) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we create high-impact motion graphics and creative visuals designed to communicate your message 
          in a powerful and engaging way. Our approach combines creativity, storytelling, and modern design techniques to produce visually 
          compelling content that enhances brand identity and audience engagement. From social media animations to promotional videos and 
          visual storytelling, we deliver creative solutions that make your brand stand out.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Motion Graphics & Creative Visuals) ====================
const services = [
  { title: 'Social Media Motion Graphics', desc: 'Eye-catching animated posts, reels, and short videos designed to boost engagement on social platforms.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Promotional & Marketing Videos', desc: 'Creative promotional videos that effectively showcase your products, services, and brand messages.', color: '#fbff06', text: '#000000' },
  { title: 'Logo Animation', desc: 'Professional logo animations that add life and uniqueness to your brand identity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Explainer Videos', desc: 'Clear and engaging animated videos that simplify complex ideas and communicate your message effectively.', color: '#fbff06', text: '#000000' },
  { title: 'UI Motion & Micro-Interactions', desc: 'Interactive motion elements that enhance user experience in websites and mobile applications.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Video Editing & Post-Production', desc: 'High-quality video editing services including transitions, effects, and visual enhancements.', color: '#fbff06', text: '#000000' },
  { title: 'Creative Ad Visuals', desc: 'Dynamic visual content designed for digital advertising and marketing campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Storyboarding & Concept Development', desc: 'Structured planning and creative storytelling for impactful visual content.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Motion Graphics & Creative Visuals) ====================
const benefits = [
  'Increased audience engagement',
  'Strong visual storytelling',
  'Improved brand visibility',
  'High-quality creative content',
  'Modern and trend-focused designs',
  'Effective communication through visuals',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Motion Graphics Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating visually engaging and strategically designed motion graphics that capture attention and deliver impactful brand 
          communication. Our creative team combines innovation, storytelling, and modern tools to produce high-quality visuals that improve 
          engagement, enhance brand identity, and drive results.
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
              alt="Motion Graphics & Creative Visuals Illustration"
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

// ==================== DigitalProcess Component (Updated for Motion Graphics & Creative Visuals) ====================
const processSteps = [
  { title: 'Requirement & Concept Analysis', desc: 'Understanding your goals, audience, and creative vision.' },
  { title: 'Storyboarding & Planning', desc: 'Developing visual concepts and animation flow.' },
  { title: 'Design & Animation', desc: 'Creating engaging graphics and motion elements.' },
  { title: 'Review & Feedback', desc: 'Refining visuals based on client input and improvements.' },
  { title: 'Final Production', desc: 'Delivering high-quality motion graphics and videos.' },
  { title: 'Ongoing Creative Support', desc: 'Providing updates and additional creative assets as needed.' },
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
        <h2 className="dm-section-title">Our Creative Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Motion Graphics & Creative Visuals) ====================
const industries = [
  'E-Commerce & Retail',
  'Digital Marketing & Advertising',
  'Media & Entertainment',
  'Education & E-Learning',
  'Corporate Businesses',
  'Startups & Agencies',
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
const MotionGraphicsCreativeVisualsPage = () => {
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

export default MotionGraphicsCreativeVisualsPage;
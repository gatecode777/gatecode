"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Social Media Post Design Services) ====================
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
            SOCIAL MEDIA<br />POST DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Engaging and creative social media designs that capture attention, boost engagement,<br />
            and strengthen your brand presence.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Social Media Post Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we create visually compelling social media post designs that help brands stand out in crowded 
          digital spaces. Our designs combine creativity, branding, and marketing strategy to deliver content that connects with your audience 
          and drives engagement. From promotional creatives to daily posts and campaign visuals, we design content that enhances your brand 
          identity and improves social media performance.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Social Media Post Design Services) ====================
const services = [
  { title: 'Creative Post Designs', desc: 'Visually appealing and engaging designs tailored for different social media platforms.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Social Media Templates', desc: 'Custom templates that maintain a consistent look and feel across all social media content.', color: '#fbff06', text: '#000000' },
  { title: 'Promotional & Offer Creatives', desc: 'Eye-catching designs created for discounts, offers, and marketing campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Story & Reel Designs', desc: 'Designs optimized for reels, stories, and short-form content formats.', color: '#fbff06', text: '#000000' },
  { title: 'Carousel & Multi-Post Designs', desc: 'Interactive and informative carousel posts designed to increase engagement and storytelling.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ad Creative Designs', desc: 'High-converting designs tailored for social media advertising campaigns.', color: '#fbff06', text: '#000000' },
  { title: 'Festival & Event Posts', desc: 'Creative posts designed for festivals, special occasions, and brand celebrations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Custom Campaign Creatives', desc: 'Unique and tailored creatives designed according to your brand and campaign goals.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Social Media Post Design Services) ====================
const benefits = [
  'Creative and eye-catching designs',
  'Consistent brand identity',
  'Increased audience engagement',
  'Optimized for all social platforms',
  'High-quality marketing visuals',
  'Customized design solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Social Media Post Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating designs that not only look great but also perform effectively. Our team combines creativity with marketing 
          strategy to deliver social media visuals that increase engagement, strengthen brand identity, and support business growth.
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
              alt="Social Media Post Design Illustration"
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

// ==================== DigitalProcess Component (Updated for Social Media Post Design Services) ====================
const processSteps = [
  { title: 'Requirement & Content Understanding', desc: 'Understanding your brand, audience, and content goals.' },
  { title: 'Creative Planning', desc: 'Developing design concepts and content ideas.' },
  { title: 'Design Creation', desc: 'Crafting visually engaging social media posts.' },
  { title: 'Review & Feedback', desc: 'Refining designs based on your inputs.' },
  { title: 'Final Delivery', desc: 'Providing ready-to-use designs in required formats.' },
  { title: 'Ongoing Creative Support', desc: 'Offering continuous design support for regular posting needs.' },
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

// ==================== DigitalIndustries Component (Updated for Social Media Post Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Healthcare & Wellness',
  'Education & Training',
  'Real Estate & Construction',
  'Corporate Businesses',
  'Startups & Agencies',
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
const SocialMediaPostDesignServicesPage = () => {
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

export default SocialMediaPostDesignServicesPage;

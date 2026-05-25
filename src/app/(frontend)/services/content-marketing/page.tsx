"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Content Marketing Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (14).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CONTENT<br />MARKETING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Create meaningful connections with your audience through engaging, strategic, and<br />
            result-driven content marketing solutions.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Content Marketing Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide professional content marketing services designed to strengthen brand presence, 
          improve audience engagement, and drive long-term business growth. Our content strategies focus on creating valuable, relevant, 
          and high-quality content that attracts the right audience and builds customer trust. From blogs and website content to social 
          media creatives and marketing campaigns, we develop content solutions tailored to your business goals and digital growth strategy.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Content Marketing Services) ====================
const services = [
  { title: 'Website Content Creation', desc: 'Professional and SEO-friendly website content designed to improve communication and user engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Blog Writing & Article Marketing', desc: 'Informative and engaging blog content created to attract audiences and improve search visibility.', color: '#fbff06', text: '#000000' },
  { title: 'Social Media Content', desc: 'Creative social media captions, posts, and marketing content designed for better audience interaction.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'SEO Content Optimization', desc: 'Optimized content strategies that improve search engine rankings and organic traffic.', color: '#fbff06', text: '#000000' },
  { title: 'Email Marketing Content', desc: 'Personalized and impactful email content designed to improve customer engagement and conversions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brand Storytelling', desc: 'Creative storytelling strategies that strengthen brand identity and customer connection.', color: '#fbff06', text: '#000000' },
  { title: 'Content Strategy & Planning', desc: 'Structured content planning aligned with business goals, audience behavior, and marketing objectives.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Performance Analysis & Optimization', desc: 'Monitoring content performance and improving strategies for better reach and engagement.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Content Marketing Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Content Marketing Services) ====================
const benefits = [
  'Improved brand awareness and credibility',
  'Better audience engagement and trust',
  'Increased website traffic and visibility',
  'SEO-friendly content strategies',
  'Stronger customer communication',
  'Long-term digital growth and conversions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Content Marketing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating high-quality and audience-focused content that helps businesses improve visibility, strengthen brand authority, 
          and generate meaningful engagement. Our content marketing approach combines creativity, SEO strategies, and audience insights to 
          deliver impactful communication and long-term digital growth.
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
              alt="Content Marketing Illustration"
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

// ==================== DigitalProcess Component (Updated for Content Marketing Services) ====================
const processSteps = [
  { title: 'Business & Audience Research', desc: 'Understanding your business goals, audience interests, and market trends.' },
  { title: 'Content Strategy Planning', desc: 'Creating structured content plans and marketing objectives.' },
  { title: 'Content Creation & Design', desc: 'Developing engaging written and visual content for multiple platforms.' },
  { title: 'SEO & Optimization', desc: 'Optimizing content for better visibility and audience reach.' },
  { title: 'Publishing & Promotion', desc: 'Distributing content strategically across digital platforms.' },
  { title: 'Performance Monitoring & Improvement', desc: 'Tracking engagement and continuously optimizing content strategies.' },
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
        <h2 className="dm-section-title">Our Content Marketing Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Content Marketing Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Real Estate & Construction',
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
const ContentMarketingServicesPage = () => {
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

export default ContentMarketingServicesPage;

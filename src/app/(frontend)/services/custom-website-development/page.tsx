"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Custom Website Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (20).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CUSTOM<br />WEBSITE<br />DEVELOPMENT
          </h1>
          <p className="dm-hero-subtitle">
            We design and develop tailored websites that align perfectly with your business goals, 
            deliver seamless user experiences, and drive real results.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Custom Website Development) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we build custom websites based on how your business actually works. We first understand your goals, audience, and required features, then plan the website around those needs instead of forcing your business into a ready-made template.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Our focus goes beyond visual design. We work on responsive performance, usability, scalability, and a clean website structure so your site is easy for customers to use and practical for your team to manage. Whether you need a business website, e-commerce platform, or custom web application, we aim to build a solution that can support your business as it grows.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Custom Website Development) ====================
const services = [
  { title: 'Fully Customized Website Solutions', desc: 'We create websites tailored to your unique business requirements, ensuring a personalized digital presence.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Responsive & Mobile-Friendly Design', desc: 'Our websites are optimized for all devices, providing seamless experiences across desktops, tablets, and mobiles.', color: '#fbff06', text: '#000000' },
  { title: 'UI/UX Focused Development', desc: 'User-centric design approach that enhances usability, engagement, and customer satisfaction.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Scalable & High-Performance Development', desc: 'Websites built with modern technologies to ensure speed, scalability, and long-term reliability.', color: '#fbff06', text: '#000000' },
  { title: 'SEO-Friendly Structure', desc: 'Optimized website architecture that improves search engine visibility and rankings.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Secure Development Practices', desc: 'Advanced security measures to protect your website and user data from potential threats.', color: '#fbff06', text: '#000000' },
  { title: 'API & Third-Party Integration', desc: 'Seamless integration with payment gateways, CRM systems, and other business tools.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Ongoing Maintenance & Support', desc: 'Continuous updates, performance monitoring, and technical support for smooth website operation.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Custom Website Development) ====================
const benefits = [
  'Design That Represents Your Brand',
  'Better Speed & Performance',
  'Flexible & Ready to Grow',
  'Security & Reliable Functionality',
  'SEO-Friendly Structure',
  'Better User Experience',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Custom Website Development?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          A custom website gives you more control over how your business is presented and how customers interact with it. Instead of adjusting your business to fit a pre-built template, you can build the website around your actual goals, features, and customer needs.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we focus on creating websites that are practical, easy to use, and prepared for future changes. From the website structure and user experience to performance and integrations, each part can be planned according to your business requirements.
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
              alt="Custom Website Development Roadmap - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Custom Website Development) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business goals, target audience, and project requirements.' },
  { title: 'Planning & Strategy', desc: 'Creating a structured roadmap and selecting the right technologies.' },
  { title: 'UI/UX Design', desc: 'Designing visually engaging and user-friendly interfaces.' },
  { title: 'Development', desc: 'Building custom features and functionalities with high performance.' },
  { title: 'Testing & Quality Assurance', desc: 'Ensuring website functionality, speed, and security.' },
  { title: 'Deployment & Support', desc: 'Launching the website and providing ongoing maintenance.' },
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
        <h2 className="dm-section-title">Our Development Process</h2>
        <div className="dm-process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="dm-process-item">
              <h3 className="dm-process-label">{item.title}</h3>
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

// ==================== DigitalIndustries Component (Updated for Custom Website Development) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Food Delivery',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Travel & Hospitality',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Custom Web Solutions - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant and Food Delivery Custom Web Development - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare and Wellness Portal Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Education and E-Learning Web Development - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Business Custom Web Solutions - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CustomWebsiteDevelopmentPage = () => {
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

export default CustomWebsiteDevelopmentPage;

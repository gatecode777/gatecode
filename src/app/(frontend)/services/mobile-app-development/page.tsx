"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Mobile App Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (18).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            MOBILE<br />APP<br />DEVELOPMENT
          </h1>
          <p className="dm-hero-subtitle">
            We develop modern mobile applications designed to enhance user engagement, improve accessibility,<br />
            and support digital transformation.
          </p>
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Mobile App Development) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we develop modern mobile applications designed to enhance user engagement, improve accessibility, 
          and support digital transformation. Our team focuses on creating secure, high-performance, and intuitive mobile apps tailored to your 
          business goals. From Android and iOS applications to cross-platform solutions, we combine advanced technologies with user-centric design 
          to build mobile experiences that drive customer satisfaction and business success.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Mobile App Development) ====================
const services = [
  { title: 'Android App Development', desc: 'Custom Android applications designed for performance, scalability, and seamless user experience.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'iOS App Development', desc: 'High-quality iOS applications built for functionality and premium user engagement.', color: '#fbff06', text: '#000000' },
  { title: 'Cross-Platform App Development', desc: 'Cross-platform mobile apps that work efficiently across both Android and iOS platforms.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'E-Commerce App Development', desc: 'Feature-rich e-commerce applications with secure payment systems and smooth shopping experiences.', color: '#fbff06', text: '#000000' },
  { title: 'Custom Mobile App Solutions', desc: 'Tailor-made mobile applications developed according to unique business requirements.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UI/UX Design for Mobile Apps', desc: 'Modern and intuitive mobile app interfaces designed to improve usability and engagement.', color: '#fbff06', text: '#000000' },
  { title: 'API & Third-Party Integration', desc: 'Seamless integration of payment gateways, maps, chat systems, and external services.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Maintenance & Support', desc: 'Continuous updates, performance optimization, bug fixing, and technical support for long-term app reliability.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Mobile App Development Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Mobile App Development) ====================
const benefits = [
  'User-friendly and intuitive mobile experiences',
  'High-performance and scalable applications',
  'Cross-platform compatibility',
  'Secure and reliable app development',
  'Modern UI/UX design approach',
  'Ongoing maintenance and support',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Mobile App Development Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on building secure, scalable, and user-friendly mobile applications that combine innovative technology with seamless user experiences. 
          Our development approach prioritizes performance, functionality, and design to help businesses improve customer engagement, strengthen digital 
          presence, and achieve long-term growth.
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
              alt="Mobile App Development Illustration"
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

// ==================== DigitalProcess Component (Updated for Mobile App Development) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business goals, audience, and app requirements.' },
  { title: 'Planning & Strategy', desc: 'Creating a structured roadmap and selecting the right technologies.' },
  { title: 'UI/UX Design', desc: 'Designing engaging and user-friendly mobile interfaces.' },
  { title: 'App Development', desc: 'Building secure, scalable, and high-performance applications.' },
  { title: 'Testing & Quality Assurance', desc: 'Ensuring smooth functionality, performance, and security.' },
  { title: 'Deployment & Support', desc: 'Launching the application and providing continuous support and updates.' },
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

// ==================== DigitalIndustries Component (Updated for Mobile App Development) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Restaurant & Food Delivery',
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
const MobileAppDevelopmentPage = () => {
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

export default MobileAppDevelopmentPage;
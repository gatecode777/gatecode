"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Web Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/digitalbg1.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            WEB<br />DEVELOPMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We create custom web solutions tailored to your business goals and user requirements, 
            delivering responsive, secure, and user-friendly websites across all devices.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Web Development) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we create custom web solutions tailored to your business goals and user requirements. 
          Our focus is on developing responsive, secure, and user-friendly websites that deliver seamless digital experiences across all devices. 
          Whether you need a business website, e-commerce platform, or custom web application, our team combines creativity and technology 
          to build solutions that drive engagement, improve performance, and support business growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Web Development) ====================
const services = [
  { title: 'Custom Website Development', desc: 'Tailor-made websites designed to meet your unique business needs and objectives.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Responsive Web Design', desc: 'Multi-briefly and responsive websites that provide smooth experiences across all devices.', color: '#fbff06', text: '#000000' },
  { title: 'E-Commerce Development', desc: 'Scalable e-commerce solutions with secure payment integration and seamless shopping experiences.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'CMS Development', desc: 'Easy-to-manage content management systems for efficient website updates and control.', color: '#fbff06', text: '#000000' },
  { title: 'Web Application Development', desc: 'Dynamic and scalable web applications designed to streamline business operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UI/UX Focused Development', desc: 'User-centric interfaces that enhance engagement, usability, and customer experience.', color: '#fbff06', text: '#000000' },
  { title: 'API & Third-Party Integration', desc: 'Seamless integration of payment gateways, APIs, and external business tools.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Website Maintenance & Support', desc: 'Continuous monitoring, updates, security improvements, and technical support.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Web Development Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Web Development) ====================
const benefits = [
  'Responsive and mobile-friendly designs',
  'SEO-friendly website structure',
  'Fast loading and optimized performance',
  'Secure and scalable development',
  'User-focused experience and navigation',
  'Ongoing support and maintenance',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Web Development Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine innovative design, advanced technologies, and strategic development approaches to deliver websites that are 
          visually appealing, highly functional, and performant across all devices. Our team focuses on creating scalable digital 
          solutions that improve user engagement, strengthen brand presence, and support long-term business success.
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
              alt="Custom Web Development Services Flow Illustration - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Web Development) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business goals and project requirements.' },
  { title: 'Planning & Strategy', desc: 'Creating a structured roadmap and selecting the right technologies.' },
  { title: 'UI/UX Design', desc: 'Designing intuitive and visually engaging user interfaces.' },
  { title: 'Development', desc: 'Building responsive and high-performance web solutions.' },
  { title: 'Testing & Quality Assurance', desc: 'Ensuring functionality, responsiveness, and security.' },
  { title: 'Deployment & Support', desc: 'Launching the website and providing ongoing support.' },
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

// ==================== DigitalIndustries Component (Updated for Web Development) ====================
const industries = [
  'Restaurant & Food Industry',
  'E-Commerce & Retail',
  'Corporate Businesses',
  'Environmental & Cleaning Services',
  'Healthcare & Wellness',
  'Education & Training',
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail Web Development - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Restaurant and Food Ordering Platforms - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Corporate Business Digital Solutions - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Healthcare and Wellness Applications - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Education and Training E-Learning Portals - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const WebDevelopmentServicesPage = () => {
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

export default WebDevelopmentServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
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
              alt="Custom Mobile App Development Lifecycle - Gatecode Technologies"
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
            <Image src="/images/1.jpg" alt="E-Commerce and Retail Mobile Apps - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Healthcare and Medical Care Mobile Applications - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Real Estate Property Search Mobile Apps - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Logistics and Delivery Tracker Mobile Apps - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Education and E-Learning Student Mobile Apps - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Leading Mobile App Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a premier <strong>mobile app development company in india</strong> providing end-to-end <strong>mobile app development services</strong> for startups, SMEs, and global enterprises. Standing out among premier <strong>app development companies</strong>, our dedicated team of <strong>app developers</strong> designs and builds secure, high-performance, and intuitive mobile applications tailored to drive user engagement and accelerate business growth.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Custom Android & iOS App Development Services
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            As a full-service <strong>custom mobile app development company</strong>, we specialize in building native and cross-platform applications across both Google Play and Apple App Store. Whether you require scalable <strong>android app development services</strong> or high-security <strong>ios app development services</strong>, our engineering team ensures seamless responsiveness, fast load speeds, and robust API connectivity.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Android App Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Recognized as a <strong>best android app development company in india</strong>, we build custom Kotlin and Java applications optimized for millions of Android devices.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>iOS App Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                As an experienced <strong>ios app development company</strong>, we craft elegant Swift and Objective-C applications engineered specifically for iPhone, iPad, and Apple ecosystem devices.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>iOS and Android App Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Save time and development budget with unified <strong>ios and android app development services</strong> powered by Flutter and React Native cross-platform frameworks.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Mobile App Development?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with a reliable <strong>android app development company</strong> and iOS engineering house ensures your mobile product succeeds in competitive app store markets. When you hire our expert <strong>app developers</strong>, you get:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>User-Centric Architecture:</strong> Intuitive UI/UX design paired with responsive navigation and smooth micro-animations.</li>
            <li style={{ marginBottom: '10px' }}><strong>High Performance & Security:</strong> Built-in end-to-end encryption, OAuth authentication, and zero latency API integrations.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete App Store Support:</strong> Seamless submission to Google Play Store and Apple App Store alongside continuous maintenance.</li>
          </ul>

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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/mobile-app-development' },
      { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: 'https://gatecode.in/services/mobile-app-development' },
    ],
  };

  const mobileAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Mobile App Development Services',
    name: 'Mobile App Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Leading mobile app development company in India offering android app development services, ios app development services, and cross-platform app solutions.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose Gatecode Technologies as your mobile app development company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a premier mobile app development company in India providing native Android app development services, iOS app development services, and cross-platform mobile solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide both iOS and Android app development services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We deliver complete ios and android app development services using native technologies (Swift, Kotlin) as well as cross-platform frameworks (Flutter, React Native).',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I hire app developers for my mobile project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can hire expert app developers from Gatecode Technologies on dedicated full-time, part-time, or project-based engagement models.',
        },
      },
    ],
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <SeoContentSection />
      <ContactSection />
    </div>
  );
};

export default MobileAppDevelopmentPage;

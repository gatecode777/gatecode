"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Mobile App Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (18).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            Mobile App<br />Development Services<br />In Jaipur
          </h1>
          <p className="dm-hero-subtitle">
            We architect and engineer high-performance mobile applications across Android and iOS platforms, delivering intuitive user journeys, rock-solid security, and scalable cloud-connected backends.
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
          At Gatecode Technologies Pvt. Ltd., our mobile application engineering focuses on creating intuitive, resilient digital experiences tailored to real-world user behaviors. We thoroughly examine your business objectives, target audience demographics, device ecosystems, and operational workflows before determining whether a native (Kotlin/Swift) or cross-platform (Flutter/React Native) architecture best fits your long-term roadmap.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Our engineering standards emphasize battery efficiency, fluid 60fps animations, offline-first data caching, and enterprise-grade data encryption. From customer-facing e-commerce applications and SaaS mobile extensions to internal workflow tools and IoT interfaces, we build mobile applications designed to capture user engagement, earn five-star app store ratings, and scale seamlessly with your customer base.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Mobile App Development) ====================
const services = [
  { 
    title: 'Native Android App Development', 
    desc: 'Custom Kotlin and Java applications engineered specifically for Android OS, utilizing Jetpack components and Material Design principles.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Native iOS App Development', 
    desc: 'High-fidelity Swift and SwiftUI applications built for iPhones and iPads, offering fluid animations and seamless Apple ecosystem integration.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Cross-Platform App Engineering', 
    desc: 'Cost-effective Flutter and React Native solutions that share a unified codebase while delivering near-native speed on iOS and Android.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Mobile Commerce & FinTech Apps', 
    desc: 'High-converting shopping and payment applications featuring PCI-compliant checkouts, one-tap mobile wallets, and instant push notifications.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Enterprise Mobility Solutions', 
    desc: 'Secure, field-ready mobile apps equipped with biometric authentication, offline synchronization, and integration with ERP/CRM databases.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Mobile UI/UX Design & Prototyping', 
    desc: 'Human-centric mobile interfaces designed for natural thumb zones, tactile haptics, intuitive swipe gestures, and clear accessibility.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'API Integration & Cloud Synchronization', 
    desc: 'Real-time synchronization connecting mobile frontends with REST/GraphQL backends, geospatial mapping, and cloud notification hubs.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'App Lifecycle Maintenance & Support', 
    desc: 'Proactive OS version compatibility updates, crash analytics triage, performance profiling, and continuous security patching.', 
    color: '#fbff06', 
    text: '#000000' 
  },
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
  'Native-level performance with smooth 60fps animations.',
  'End-to-end data encryption with secure keychain storage.',
  'Offline-first architecture with automatic background data sync.',
  'Fast time-to-market using streamlined CI/CD mobile pipelines.',
  '100% compliance with Google Play and Apple App Store guidelines.',
  'Ongoing crash monitoring and proactive operating system updates.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Mobile App Development Services?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          A mobile application is a direct extension of your brand into your customers' hands. Sluggish touch responses, confusing navigation, excessive battery drain, or unexpected crashes will quickly lead to uninstalls and damage your company's reputation.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we take a disciplined engineering approach to mobile software. By combining user-centric interface design, strict memory profiling, comprehensive device lab testing, and secure cloud connectivity, we build mobile applications that delight users, protect sensitive data, and support long-term business retention.
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
  { 
    title: 'Discovery & Mobile Strategy', 
    desc: 'We evaluate your product vision, target demographics, mobile feature set, and target OS ecosystems to create an execution roadmap.' 
  },
  { 
    title: 'UI/UX Wireframing & Prototyping', 
    desc: 'We design intuitive user journeys, gesture-driven wireframes, and interactive prototypes tailored to touch devices.' 
  },
  { 
    title: 'Native & Cross-Platform Development', 
    desc: 'Our developers write clean, modular client code while configuring secure APIs, database models, and cloud services.' 
  },
  { 
    title: 'Real-Device QA & Performance Testing', 
    desc: 'We conduct extensive tests across physical Android and iOS devices, verifying memory footprints, battery drain, and screen adaptability.' 
  },
  { 
    title: 'App Store Submission & Launch', 
    desc: 'We handle complete submission assets, privacy policies, and review cycles for both the Google Play Store and Apple App Store.' 
  },
  { 
    title: 'Post-Launch Telemetry & Support', 
    desc: 'We track real-time crash logs, monitor user feedback, push performance updates, and ensure compatibility with future OS releases.' 
  },
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Mobile Apps - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare and Medical Care Mobile Applications - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Real Estate Property Search Mobile Apps - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics and Delivery Tracker Mobile Apps - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education and E-Learning Student Mobile Apps - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/mobile-app-development' },
      { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: 'https://www.gatecode.in/services/mobile-app-development' },
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
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Leading mobile app development company in India offering android app development services, ios app development services, and cross-platform app solutions.',
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
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="mobile-app-development" serviceName="mobile app development" />
      <ContactSection />
    </div>
  );
};

export default MobileAppDevelopmentPage;

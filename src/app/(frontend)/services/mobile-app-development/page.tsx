"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { mobileAppDevFaqs } from '@/components/frontend/FAQSection/FAQSection';
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
            MOBILE<br />APP<br />DEVELOPMENT
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
            As a full-service <strong>custom mobile app development company</strong>, we specialize in building native and cross-platform applications across both Google Play and Apple App Store. Whether you require scalable <Link href="/services/mobile-app-development/android-development" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>android app development services</Link> or high-security <strong>ios app development services</strong>, our engineering team ensures seamless responsiveness, fast load speeds, and robust API connectivity.
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
        name: 'What platforms do you build mobile applications for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide end-to-end mobile app development services for both iOS and Android platforms. Whether you need a native application built specifically for Apple or Google ecosystems, or a highly efficient cross-platform app, we deliver solutions that ensure maximum reach and seamless performance across all mobile devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I choose native or cross-platform app development for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on your business goals and budget. Cross-platform apps are highly cost-effective and offer a faster time-to-market since they use a single codebase for both iOS and Android. However, if your application requires heavy device-specific hardware integration or complex graphics, we recommend custom native app development for maximum performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can your team integrate a new mobile app with our existing website or internal software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. As full-stack engineering experts, we specialize in seamless custom API integrations. We can connect your new mobile application directly to your existing website, CMS, CRM, ERP, and secure payment gateways, ensuring real-time data synchronization across your entire digital ecosystem.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it typically take to develop a custom mobile app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The development timeline depends entirely on the app's complexity, required features, and integrations. A standard application may take a few months to develop, while a complex, enterprise-level app will take longer. We always begin with a thorough requirement analysis and provide a clear, structured roadmap and timeline before development begins.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you assist with App Store deployment and post-launch app maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our services cover the entire app development lifecycle. We manage the strict submission and approval processes for both the Apple App Store and Google Play Store. After your app is live, we provide ongoing maintenance, security patches, bug fixes, and continuous performance tuning to keep it running flawlessly.',
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
      <FAQSection
        eyebrow="FAQS"
        titleLine1="FREQUENTLY ASKED"
        titleHighlight="QUESTIONS"
        subtitle="Find answers to key questions regarding mobile app platforms, native vs. cross-platform frameworks, API connectivity, and app store publishing."
        items={mobileAppDevFaqs}
      />
    </div>
  );
};

export default MobileAppDevelopmentPage;

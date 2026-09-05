"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Android App Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (19).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            ANDROID<br />APP<br />DEVELOPMENT
          </h1>
          <p className="dm-hero-subtitle">
            We build powerful, scalable, and user-friendly Android applications that deliver seamless<br />
            performance and drive business growth.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Android App Development) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies, we don't just write code; we partner with you to build high-performance Android applications that drive real business results. Our experienced team focuses on what matters most to your users: seamless performance, rock-solid security, and an intuitive experience. From your first idea to the final app store launch, we apply proven development practices to ensure your app isn't just ready for today, but scalable for tomorrow's growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Android App Development) ====================
const services = [
  { title: 'Custom Android App Development', desc: 'Tailor-made Android applications designed according to your unique business requirements.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UI/UX Design for Android', desc: 'Modern and user-friendly app interfaces that enhance usability and engagement.', color: '#fbff06', text: '#000000' },
  { title: 'E-Commerce Android Apps', desc: 'Feature-rich e-commerce applications with secure payment integration and smooth user experience.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'API & Third-Party Integration', desc: 'Seamless integration of APIs, payment gateways, and external services for enhanced functionality.', color: '#fbff06', text: '#000000' },
  { title: 'App Performance Optimization', desc: 'Optimized apps for speed, responsiveness, and smooth performance across devices.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'App Testing & Quality Assurance', desc: 'Comprehensive testing to ensure app reliability, security, and bug-free performance.', color: '#fbff06', text: '#000000' },
  { title: 'Play Store Deployment', desc: 'End-to-end support for publishing your app on the Google Play Store.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Maintenance & Support', desc: 'Continuous updates, performance monitoring, and technical support for long-term success.', color: '#fbff06', text: '#000000' },
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

// ==================== DigitalWhyChoose Component (Updated for Android App Development) ====================
const benefits = [
  'Built to Scale',
  'Ironclad Security',
  'Long-Term Partnership',
  'Engaging User Experience',
  'Flawless Everywhere',
  'Future-Proof Tech',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for Android App Development?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We don't just build apps; we engineer strategic mobile solutions. By blending innovative design with rock-solid engineering, we create Android applications that solve real business challenges. Our proven development approach ensures your app isn't just launched—it's built to scale, stay secure, and consistently deliver value to your users.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits We Deliver
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
              alt="Android App Development Architecture Roadmap - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Android App Development) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business goals, audience, and app requirements.' },
  { title: 'Planning & Strategy', desc: 'Creating a structured roadmap and selecting suitable technologies.' },
  { title: 'UI/UX Design', desc: 'Designing engaging and user-friendly app interfaces.' },
  { title: 'Development', desc: 'Building scalable and high-performance Android applications.' },
  { title: 'Testing & Quality Assurance', desc: 'Ensuring functionality, security, and performance.' },
  { title: 'Deployment & Support', desc: 'Launching the app and providing ongoing maintenance.' },
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

// ==================== DigitalIndustries Component (Updated for Android App Development) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Food & Restaurant Services',
  'Travel & Hospitality',
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
            <Image src="/images/1.webp" alt="E-Commerce Android Mobile App Development - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare and Medical Android Apps - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education and E-Learning Android Applications - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Food and Restaurant Android Delivery Apps - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Travel and Hospitality Android App Solutions - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const AndroidAppDevelopmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/mobile-app-development' },
      { '@type': 'ListItem', position: 3, name: 'Android App Development', item: 'https://gatecode.in/services/android-development' },
    ],
  };

  const androidServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Android App Development Services',
    name: 'Android App Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Premier Android app development company in India offering custom native Android development, Kotlin apps, Google Play Store publishing, and enterprise mobile solutions.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose Gatecode Technologies for Android App Development Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies builds high-performance, secure native Android applications using Kotlin and Java, featuring Google Play Store optimization and smooth UI performance across all devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle Google Play Console submission and app store deployment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We handle the complete Google Play Store publication process including app listing optimization, privacy compliance, and build approval.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(androidServiceSchema) }}
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
      <ContactSection />
    </div>
  );
};

export default AndroidAppDevelopmentPage;

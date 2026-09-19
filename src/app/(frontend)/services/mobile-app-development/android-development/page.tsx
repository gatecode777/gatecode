"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { androidAppDevFaqs } from '@/components/frontend/FAQSection/FAQSection';
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
            We engineer custom, high-concurrency Android applications built on modern Kotlin architecture, ensuring smooth responsiveness across thousands of device models and maximum Google Play engagement.
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
          At Gatecode Technologies Pvt. Ltd., our Android app development services combine native engineering precision with user-centric interface design. Android powers the majority of global mobile users across an immense spectrum of hardware configurations, screen sizes, and chipsets. We engineer native solutions using Kotlin, Jetpack Compose, and modular MVVM architecture to ensure your application performs reliably under all network conditions.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Our engineering practices focus on offline-first Room database caching, minimal battery consumption, and rock-solid Android Keystore security. From high-transaction retail platforms and healthcare tools to on-demand service portals and enterprise mobility solutions, we build Android applications that earn outstanding reviews on the Google Play Store and scale effortlessly with your business.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Android App Development) ====================
const services = [
  { 
    title: 'Custom Kotlin & Jetpack Development', 
    desc: 'Modern, reactive Android applications built with Kotlin coroutines and Jetpack Compose for lightning-fast performance.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Material Design UI/UX Engineering', 
    desc: 'Visually captivating interfaces following Google Material You standards, tactile animations, and intuitive gesture navigation.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Secure Android E-Commerce Apps', 
    desc: 'Mobile storefronts featuring native payment gateways (Google Pay, UPI, Stripe), encrypted customer wallets, and instant push notifications.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Device Hardware & Sensor Integration', 
    desc: 'Flawless integration with camera APIs, GPS geolocation, Bluetooth BLE beacons, biometric fingerprint sensors, and NFC hardware.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Enterprise Android Portals', 
    desc: 'Secure field-agent tools, barcode scanners, and inventory management apps with offline data syncing and role-based permissions.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Real-Device Fragmentation QA', 
    desc: 'Rigorous automated and manual testing across popular Android device models, OS versions (Android 10 through 15), and screen resolutions.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Google Play Store Deployment & ASO', 
    desc: 'Complete store listing optimization, bundle compilation, privacy policy verification, and Google Play Store submission management.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Continuous Maintenance & OS Updates', 
    desc: 'Proactive updates ensuring day-one compatibility with new Android versions, dependency patches, and crash telemetry tracking.', 
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
  'Native Kotlin execution ensuring fluid 60fps responsiveness.',
  'Comprehensive compatibility across 10,000+ Android device models.',
  'Offline-first data caching with background sync capabilities.',
  'End-to-end encryption with Android Keystore security.',
  'Streamlined Google Play Store approval with zero compliance rejection.',
  'Proactive crash monitoring and regular OS compatibility updates.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for Android App Development?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Android's open ecosystem offers unmatched market reach, but it poses significant technical challenges around device fragmentation, OS version differences, and differing hardware specifications. A poorly engineered app will stutter on entry-level hardware or fail during network handoffs.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, our Android developers solve fragmentation from the ground up. By utilizing Google-recommended architectural patterns, responsive constraint layouts, asynchronous coroutines, and thorough real-device lab testing, we deliver Android applications that maintain consistent speed, visual beauty, and battery efficiency across every handset.
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
  { 
    title: 'Technical Scoping & Device Mapping', 
    desc: 'We analyze your business requirements, target demographic devices, hardware dependencies, and Android OS support tiers.' 
  },
  { 
    title: 'UI/UX Prototyping & Material Design', 
    desc: 'We craft wireframes and interactive touch prototypes following Google Material Design guidelines and intuitive gesture patterns.' 
  },
  { 
    title: 'Native Kotlin & Jetpack Architecture', 
    desc: 'Our engineers write clean MVVM/MVI code utilizing coroutines, Room databases, and RESTful API connectors.' 
  },
  { 
    title: 'Multi-Device Lab Testing & Security QA', 
    desc: 'We run rigorous stress tests on physical device matrices to verify memory footprint, battery usage, and network throttling resilience.' 
  },
  { 
    title: 'Google Play Submission & Compliance', 
    desc: 'We generate optimized Android App Bundles (.aab), configure store metadata, and manage the full Google Play Console review.' 
  },
  { 
    title: 'Post-Launch Telemetry & Version Upgrades', 
    desc: 'We monitor real-time Firebase crashlytics, user feedback, and release periodic performance updates.' 
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
            <Image src="/images/5.webp" alt="Logistics and Freight Fleet Tracking Apps - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Top Android App Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, your trusted engineering partner delivering premier <strong>custom Android app development services</strong>. We engineer native, high-performance Android applications that combine fluid touch interfaces with robust backend infrastructure, serving millions of users across the global Google ecosystem.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Building Scalable Android Applications Engineered for Device Diversity
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Developing for Android requires mastering extreme ecosystem diversity—hundreds of manufacturers, thousands of screen resolutions, and multiple active OS versions. Our Android engineering team crafts resilient software utilizing Kotlin, Jetpack Compose, and clean MVVM architecture, ensuring your application runs flawlessly on entry-level smartphones and flagship devices alike.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Native Kotlin &amp; Jetpack Architecture</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                High-speed reactive code built on Google-recommended modern Android architecture, delivering rock-solid stability and low memory usage.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Device Fragmentation Mastery</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Tested extensively across varied OEM chipsets, screen aspect ratios, and Android versions to guarantee a universal 5-star experience.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hardware &amp; Sensor Connectivity</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Seamless native integration with device sensors, Bluetooth BLE, GPS tracking, camera modules, and NFC communication.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Google Play Store Support</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Guaranteed compliance with Google Play Developer Policies, target SDK requirements, and privacy transparency standards.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Android Development?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            When partnering with Gatecode Technologies, your Android product benefits from senior engineering oversight:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Dedicated Android Engineers:</strong> Proficient in modern Kotlin, Jetpack Compose, and reactive flow architectures.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete Code Ownership:</strong> 100% intellectual property handover, clean Git repositories, and transparent sprint reporting.</li>
            <li style={{ marginBottom: '10px' }}><strong>SLA-Backed Maintenance:</strong> Continuous crash monitoring, rapid bug triage, and annual Android OS updates.</li>
          </ul>

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
      { '@type': 'ListItem', position: 3, name: 'Android App Development', item: 'https://gatecode.in/services/mobile-app-development/android-development' },
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
    description: 'Premier Android app development company in India delivering custom Kotlin and Java mobile apps for startups and enterprises.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of Android applications do you develop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer custom Android app development services tailored to your specific business needs. Whether you require a high-performance enterprise solution, an engaging e-commerce application, or a dynamic SaaS mobile platform, our team engineers scalable, secure, and user-friendly Android apps that drive business growth.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies do you use for Android app development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We utilize modern, robust technologies to build industry-leading Android applications. Depending on your project's performance requirements, we develop using native programming languages like Kotlin and Java, or leverage advanced cross-platform frameworks to ensure efficient development and highly responsive user interfaces.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can your team integrate the Android app with our existing website or software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely! We specialize in custom API development and system integration. We can securely connect your new Android application with your existing web platforms, CRMs, ERPs, legacy systems, and third-party payment gateways to ensure seamless, real-time data synchronization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle the process of publishing the app on the Google Play Store?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, our end-to-end development services include complete Google Play Store deployment. We ensure your application complies with all of Google's strict technical, performance, and security guidelines, managing the entire submission and approval process on your behalf.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide support and updates after the Android app goes live?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our partnership continues long after your app is launched. We provide ongoing support and maintenance services, which include active performance monitoring, security patches, bug fixes, and upgrading your app to ensure full compatibility with the latest Android OS releases.',
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
      <SeoContentSection />
      <ContactSection />
      <FAQSection
        eyebrow="FAQS"
        titleLine1="FREQUENTLY ASKED"
        titleHighlight="QUESTIONS"
        subtitle="Explore answers to essential questions regarding custom Android development, technology stack, API integration, and Google Play Store deployment."
        items={androidAppDevFaqs}
      />
    </div>
  );
};

export default AndroidAppDevelopmentPage;

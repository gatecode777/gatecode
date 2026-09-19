"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { customWebDevFaqs } from '@/components/frontend/FAQSection/FAQSection';
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
            We architect bespoke, high-performance websites engineered around your exact business logic, delivering lightning-fast load speeds, intuitive user experiences, and scalable digital foundations.
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
          At Gatecode Technologies Pvt. Ltd., our custom website development services focus on building digital solutions that mirror your exact operational requirements and brand identity. Rather than forcing your business into rigid off-the-shelf templates or generic page builders, we engineer tailored architectures from the ground up, ensuring every feature serves a distinct commercial purpose.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Our engineering approach unites intuitive UI/UX design with robust full-stack development, delivering fast load times, seamless responsiveness across devices, and airtight security. Whether you are creating a modern corporate platform, a customer portal, or an intricate web application, we build scalable digital assets designed to perform reliably and adapt to your future growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Custom Website Development) ====================
const services = [
  { 
    title: 'Bespoke UI/UX Design & Prototyping', 
    desc: 'Unique digital layouts and interactive prototypes crafted to reflect your brand identity, engage visitors, and guide them smoothly toward conversion.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Mobile-First Responsive Engineering', 
    desc: 'Fluid responsive layouts optimized for all viewport dimensions, ensuring intuitive navigation and seamless usability across all modern mobile and desktop devices.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Modern Frontend Architecture', 
    desc: 'Fast, accessible interfaces built with cutting-edge frameworks like React and Next.js, ensuring instantaneous page loads and flawless interactions.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Robust Backend & Database Systems', 
    desc: 'Secure server-side architectures, optimized SQL/NoSQL databases, and efficient business logic built to handle complex enterprise workflows.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Technical SEO & Core Web Vitals', 
    desc: 'Clean semantic code, structured schema markup, and asset optimization engineered to achieve peak scores on Google Core Web Vitals.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Enterprise Security & Data Protection', 
    desc: 'Robust security configurations including automated SSL, cross-site scripting prevention, secure authentication, and active vulnerability safeguards.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Custom API & System Integration', 
    desc: 'Seamless data connectivity linking your custom web platform with CRMs, ERP solutions, payment gateways, and third-party SaaS tools.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Lifecycle Maintenance & Support', 
    desc: 'Dedicated post-launch monitoring, security patches, regular version updates, and continuous performance optimization.', 
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

// ==================== DigitalWhyChoose Component (Updated for Custom Website Development) ====================
const benefits = [
  '100% custom codebase free from redundant plugins and template bloat.',
  'Tailored UI/UX journeys designed to maximize user conversion rates.',
  'Sub-second page load times optimized for Google Core Web Vitals.',
  'Granular security controls with encrypted data transmissions.',
  'Flexible modular architecture ready to scale with business growth.',
  'Seamless integration with existing CRM, ERP, and payment platforms.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Custom Website Development?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Generic templates and commercial theme packages often introduce unnecessary scripts, restrictive layouts, and severe performance bottlenecks that impede search visibility and frustrate visitors. When your business needs unique functionality or distinctive brand presentation, pre-packaged solutions quickly become a liability.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we deliver custom web development that offers total technical freedom. Every module, interface component, and database interaction is engineered specifically for your operational ecosystem, delivering optimal efficiency, superior security, and seamless scalability as your traffic and customer base expand.
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
  { 
    title: 'Strategic Discovery & Scoping', 
    desc: 'We evaluate your brand objectives, user personas, operational workflows, and functional specifications to outline a detailed technical roadmap.' 
  },
  { 
    title: 'Information Architecture & Wireframing', 
    desc: 'We map site hierarchies, user interaction flows, and structural wireframes to ensure logical navigation and effortless content discovery.' 
  },
  { 
    title: 'Interactive UI Prototyping', 
    desc: 'We design high-fidelity visual interfaces reflecting your brand aesthetics, typography, and responsive design guidelines.' 
  },
  { 
    title: 'Agile Full-Stack Development', 
    desc: 'Our engineering team builds modular, clean frontend and backend code, implementing robust database structures and secure API connections.' 
  },
  { 
    title: 'Comprehensive Quality Assurance', 
    desc: 'We perform cross-browser compatibility testing, accessibility validation, security auditing, and speed benchmarks across all device viewports.' 
  },
  { 
    title: 'Zero-Downtime Deployment & Handover', 
    desc: 'We launch your custom website smoothly, configure caching, analytics, and server monitoring, and provide complete documentation.' 
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

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Top Custom Website Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, your strategic engineering partner providing end-to-end <strong>custom website development services</strong>. We empower emerging startups, established brands, and enterprise organizations to transcend template constraints by building bespoke web platforms tailored to their unique commercial logic, operational workflows, and growth targets.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Engineering High-Performance Digital Platforms Tailored to Your Business Logic
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Every business possesses distinct customer touchpoints, product catalogs, and service pathways. Our full-stack engineering team builds custom websites utilizing modular frontend frameworks and robust cloud architectures, ensuring complete flexibility, sub-second page delivery, and seamless third-party software integration.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Zero-Bloat Custom Architecture</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                We write clean, purposeful code without cumbersome theme dependencies, resulting in maintainable and efficient web properties.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Peak Performance & Speed</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Optimized for Core Web Vitals, our websites ensure rapid page rendering, reducing bounce rates and maximizing conversions.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Seamless System Integration</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Connect proprietary databases, CRM systems, ERP platforms, and payment gateways into a unified, secure digital workflow.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Enterprise Security & Protection</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Built-in security protocols including SSL encryption, data sanitization, and defense against common web vulnerabilities.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Custom Web Engineering?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with Gatecode Technologies means collaborating with dedicated software engineers and UI/UX designers focused on creating tangible business value:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Tailored Engineering Standards:</strong> Clean, modular code tailored to your exact specifications without generic templates.</li>
            <li style={{ marginBottom: '10px' }}><strong>Transparent Agile Collaboration:</strong> Direct communication, sprint milestones, and comprehensive source code ownership.</li>
            <li style={{ marginBottom: '10px' }}><strong>Long-Term Partnership:</strong> Proactive post-launch support, security monitoring, and continuous technical enhancements.</li>
          </ul>

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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/web-development' },
      { '@type': 'ListItem', position: 3, name: 'Custom Website Development', item: 'https://gatecode.in/services/web-development/custom-website-development' },
    ],
  };

  const customWebDevServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Website Development Services',
    name: 'Custom Website Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Custom website development company delivering tailored, high-performance, and responsive web solutions engineered for business growth.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between custom website development and template-based websites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom website development involves building your platform from the ground up, tailored specifically to your business goals, target audience, and operational workflows. Unlike generic templates, custom solutions offer a unique UI/UX design, highly scalable architecture, superior security, and optimized performance without any unnecessary code bloat.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies do you use for building custom websites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our full-stack engineering team builds robust and scalable custom web solutions using modern frameworks such as React, Next.js, Node.js, and Python. We focus on writing clean, modular, and maintainable code that can easily integrate with custom APIs, enterprise ERPs, and third-party payment gateways.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure my custom website is fast and SEO-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We engineer all custom websites with performance and search engine visibility at their core. By utilizing advanced frameworks like Next.js for efficient rendering, optimizing core web vitals, and implementing clean HTML structures, we ensure your website loads lightning-fast and ranks higher on search engines like Google.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my custom website be scalable as my business grows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. One of the biggest advantages of custom web development is scalability. We design your database and backend architecture to handle increased traffic and complex data workflows, ensuring that your website or web application can seamlessly expand alongside your business without needing a complete rebuild.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your process for developing a custom website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow a structured, end-to-end development process. It begins with in-depth requirement analysis and strategic planning, followed by custom UI/UX design. Once the design is approved, our developers build and rigorously test the site for functionality and security. Post-launch, we provide continuous monitoring and dedicated maintenance support.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customWebDevServiceSchema) }}
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
        subtitle="Explore answers to key questions regarding custom website architecture, tech stack, SEO performance, scalability, and development process."
        items={customWebDevFaqs}
      />
    </div>
  );
};

export default CustomWebsiteDevelopmentPage;

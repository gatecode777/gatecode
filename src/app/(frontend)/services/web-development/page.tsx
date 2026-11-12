"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Web Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div className="dm-hero-bg">
        <Image
          src="/images/digitalbg1.webp"
          alt="Website design firm providing bespoke, dynamic website services"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            WEB<br />DEVELOPMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We engineer high-performance, secure, and responsive web solutions tailored to your business goals, delivering intuitive digital experiences that engage audiences, making us the best website development company in Jaipur.
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
          Recognized as the best website development company in Jaipur, Gatecode Technologies Pvt. Ltd. engineers custom web solutions rooted in modern architectural standards, reliable performance, and conversion-focused user experiences. We take time to analyze your operational workflows, target audience expectations, and technical needs before writing a single line of code, ensuring every digital product aligns precisely with your strategic goals.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          From custom corporate websites and high-converting e-commerce platforms to complex web applications and portal architectures, our development methodology emphasizes clean code, lightning-fast load times, mobile responsiveness, and airtight security. We build digital assets that not only look remarkable but also scale effortlessly as your enterprise grows.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Web Development) ====================
const services = [
  { 
    title: 'Custom Website Development', 
    desc: 'Tailored web architectures built from scratch with clean, maintainable code matching your exact operational workflows and brand identity.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Responsive Web Design', 
    desc: 'Mobile-first layouts engineered with fluid grids and responsive typography that render flawlessly across smartphones, tablets, and desktops.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'E-Commerce Development', 
    desc: 'High-converting online storefronts with streamlined checkout flows, multi-gateway payment integrations, and robust inventory management.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'CMS Development', 
    desc: 'Flexible content management solutions enabling non-technical teams to publish, edit, and organize media and content effortlessly.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Web Application Development', 
    desc: 'Complex, interactive web applications featuring modular APIs, high-speed data processing, and enterprise-grade reliability.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'UI/UX Focused Development', 
    desc: 'Intuitive user journeys, accessible navigation, and optimized micro-interactions designed to maximize visitor engagement and retention.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'API & System Integration', 
    desc: 'Seamless connections between your web platform and third-party tools, ERPs, CRM software, and payment infrastructure.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Website Maintenance & Support', 
    desc: 'Proactive monitoring, routine security patches, performance tuning, and technical updates to keep your web properties peak-performing.', 
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
        <h2 className="dm-section-title">Our Web Development Services</h2>
        <p className="dm-services-subtitle">
          Every organization has distinct requirements. We build scalable, resilient web solutions designed around your objectives,
          <br className="dm-services-desktop-br" />
          combining technical elegance, intuitive usability, advanced security, and measurable performance.
        </p>
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
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h3 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(20px, 2.2vw, 26px)',
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: '20px',
            lineHeight: 1.4,
            maxWidth: '850px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Partner with the best website development company in Jaipur to transform your digital presence.
          </h3>
          <Link
            href="/contact"
            className="dm-cta-button"
            style={{
              borderColor: '#041230',
              color: '#041230',
              backgroundColor: '#fbff06',
              fontWeight: 600,
            }}
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalWhyChoose Component (Updated for Web Development) ====================
const benefits = [
  'Bespoke, clean-code architecture tailored to your business model.',
  'Lightning-fast loading speeds optimized for Core Web Vitals.',
  'Search-engine-friendly structure with semantic HTML and schema markup.',
  'Responsive, mobile-first design ensuring smooth usability on every screen.',
  'Robust security protocols with SSL, data encryption, and vulnerability defense.',
  'Scalable cloud infrastructure built to handle sustained traffic growth.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose the Best Website Development Company in Jaipur?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Off-the-shelf templates and rigid site builders often fall short when your business reaches scale. They introduce unnecessary code bloat, restrictive plugin dependencies, performance bottlenecks, and security vulnerabilities that hinder user experience and conversion rates.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, our position as the best website development company in Jaipur means our engineering methodology centers on precision, scalability, and business outcomes. Having engineered bespoke web solutions for enterprises across diverse sectors—including e-commerce, fintech, manufacturing, healthcare, and education—we construct custom architectures engineered for speed, search visibility, and seamless third-party integrations.
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
  {
    title: 'Discovery & Architecture Planning',
    desc: 'We analyze your strategic goals, user personas, technical dependencies, and functional requirements to establish a rock-solid technical blueprint.',
  },
  {
    title: 'Information Architecture & UX Wireframing',
    desc: 'We structure page hierarchies, content workflows, and interactive wireframes to ensure intuitive navigation and effortless user journeys.',
  },
  {
    title: 'UI Design & Interactive Prototyping',
    desc: 'We craft high-fidelity visual interfaces adhering to your brand identity, modern typography standards, and interactive micro-animations.',
  },
  {
    title: 'Full-Stack Engineering & Integration',
    desc: 'Our developers write clean, modular frontend and backend code, seamlessly integrating APIs, databases, payment systems, and CMS controls.',
  },
  {
    title: 'Rigorous QA & Performance Testing',
    desc: 'We conduct extensive cross-browser verification, mobile responsiveness testing, Core Web Vitals optimization, and vulnerability assessments.',
  },
  {
    title: 'Deployment & Continuous Optimization',
    desc: 'We deploy your platform with zero downtime, configure caching and analytics, and provide ongoing technical maintenance and support.',
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
        <p className="dm-process-subtitle">
          We follow a clear development process to understand your needs, build the right solution,
          <br className="dm-process-desktop-br" />
          and deliver a website that works smoothly for your business.
        </p>
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
        <div className="dm-process-closing">
          <p>
            From planning to launch, we focus on building a reliable website that is easy to use and ready to grow with your business.
          </p>
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Web Development - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant and Food Ordering Platforms - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Business Digital Solutions - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Healthcare and Wellness Applications - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education and Training E-Learning Portals - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/web-development' },
      { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://www.gatecode.in/services/web-development' },
    ],
  };

  const webDevServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development Services',
    name: 'Website Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Premier website development company in India offering web design & development services, custom web app development services, react web development, and website maintenance services.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevServiceSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="web-development" serviceName="web development" />
      <ContactSection />
    </div>
  );
};

export default WebDevelopmentServicesPage;

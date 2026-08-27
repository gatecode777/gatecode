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

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Top-Rated Website Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a premier <strong>website development company in India</strong> providing end-to-end <strong>web design & development services</strong> to clients worldwide. As a trusted <strong>website development company</strong>, whether you are a startup looking to launch your first online platform or an established enterprise seeking high-performance digital solutions, our team of expert developers and designers builds secure, responsive, and search-engine-optimized websites tailored to your specific business requirements with transparent and <strong>affordable web development services</strong>.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Custom Web App Development Services & Full Stack Solutions
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            As an industry-leading <strong>custom web app development services</strong> provider, we specialize in building scalable digital portals, SaaS platforms, and enterprise workflows. Recognizing that every organization has distinct goals, our <strong>full stack development services</strong> combine robust backend architectures with intuitive frontend interfaces. Recognized as a high-performance <strong>react web development company</strong>, we engineer web solutions using modern frameworks like React, Next.js, Node.js, and Python.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Web App Development & Custom Portals</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                From interactive dashboards to complex SaaS web systems, our <strong>web app development</strong> team builds fast, secure, and intuitive web applications tailored to your business operations.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>API Integration Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Streamline data flows with custom <strong>api integration services</strong>. We seamlessly connect payment gateways, CRMs, ERPs, third-party software, and legacy systems into a unified architecture.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Website Maintenance Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Ensure peak performance with 24/7 <strong>website maintenance services</strong>. We provide active monitoring, security patches, performance tuning, and continuous technical updates.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Hire Dedicated Web Developers in India for Your Next Project
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Looking to expand your technical capabilities or scale your engineering bandwidth efficiently? When you partner with Gatecode Technologies to <strong>hire a web developer in India</strong> or <strong>hire dedicated web developers</strong>, you gain access to skilled full-stack engineers who seamlessly integrate into your team. We offer flexible engagement models that reduce development overhead while guaranteeing high code quality and on-time project delivery.
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Custom Engineered Architecture:</strong> No generic templates. We write clean, maintainable, and modular full-stack code.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete Security & Compliance:</strong> Built-in SSL, data encryption, and defense against common web vulnerabilities.</li>
            <li style={{ marginBottom: '10px' }}><strong>End-to-End Support:</strong> Dedicated project managers, active API integrations, and ongoing <strong>website maintenance services</strong>.</li>
          </ul>

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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/web-development' },
      { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://gatecode.in/services/web-development' },
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
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Premier website development company in India offering web design & development services, custom web app development services, react web development, and website maintenance services.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose Gatecode Technologies as my website development company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a top website development company in India offering end-to-end web design & development services, custom web app development services, and affordable web development solutions with React, Next.js, and Node.js.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I hire dedicated web developers in India for custom web app development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can hire a web developer in India or hire dedicated web developers from Gatecode Technologies on flexible monthly or project-based engagement models.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer API integration services and website maintenance services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absoluely. We provide comprehensive API integration services to connect third-party platforms alongside ongoing website maintenance services for security and speed optimization.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevServiceSchema) }}
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

export default WebDevelopmentServicesPage;

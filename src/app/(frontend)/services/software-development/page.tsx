"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Software Development Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (4).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SOFTWARE<br />DEVELOPMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We build secure, scalable, and performance-driven software solutions that help businesses streamline<br />
            operations, improve efficiency, and accelerate growth.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Software Development Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we develop innovative software solutions tailored to modern business requirements. 
          Our team focuses on creating reliable, scalable, and user-friendly software that simplifies complex operations and improves 
          productivity. From custom business applications to enterprise software and automation systems, we combine advanced technology 
          with strategic development approaches to deliver high-quality digital solutions that support long-term business success.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Software Development Services) ====================
const services = [
  { title: 'Custom Software Development', desc: 'Tailor-made software solutions designed according to your business goals and operational requirements.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Cloud-Based Software Solutions', desc: 'Secure and scalable cloud applications that support flexibility and remote accessibility.', color: '#fbff06', text: '#000000' },
  { title: 'Enterprise Software Solutions', desc: 'Scalable enterprise applications that improve workflow management and organizational productivity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'CRM & ERP Development', desc: 'Integrated CRM and ERP systems designed to streamline customer management and business operations.', color: '#fbff06', text: '#000000' },
  { title: 'Business Automation Software', desc: 'Smart automation solutions that reduce manual work and improve operational efficiency.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Web & Desktop Application Development', desc: 'High-performance web and desktop applications built for smooth and efficient business operations.', color: '#fbff06', text: '#000000' },
  { title: 'API & System Integration', desc: 'Seamless integration of third-party tools, APIs, and business systems for better connectivity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Software Maintenance & Support', desc: 'Continuous updates, security improvements, bug fixing, and technical support for reliable software performance.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Software Development Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Software Development Services) ====================
const benefits = [
  'Custom and scalable software solutions',
  'Secure and high-performance applications',
  'Automation-driven workflow optimization',
  'User-friendly and modern interfaces',
  'Continuous support and maintenance',
  'Future-ready technology solutions',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Software Development Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine modern technologies, strategic planning, and user-focused development approaches to deliver software solutions that are 
          secure, scalable, and future-ready. Our team works closely with clients to understand business challenges and create customized 
          solutions that improve productivity, optimize operations, and support digital transformation.
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
              alt="Custom Software Development Services Roadmap - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Software Development Services) ====================
const processSteps = [
  { title: 'Requirement Analysis', desc: 'Understanding your business goals, workflows, and software requirements.' },
  { title: 'Planning & Strategy', desc: 'Creating a structured development roadmap and selecting the right technologies.' },
  { title: 'UI/UX Design', desc: 'Designing intuitive and user-friendly interfaces for better user experience.' },
  { title: 'Development & Integration', desc: 'Building secure and scalable software solutions with seamless integrations.' },
  { title: 'Testing & Quality Assurance', desc: 'Ensuring performance, functionality, security, and reliability.' },
  { title: 'Deployment & Support', desc: 'Launching the software and providing ongoing maintenance and support.' },
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

// ==================== DigitalIndustries Component (Updated for Software Development Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurant & Hospitality',
  'Corporate Businesses',
  'Environmental Services',
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
            <Image src="/images/1.jpg" alt="Finance and Banking Software Solutions - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="E-Commerce and Retail Platform Management - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Corporate Enterprise ERP and Workflow Systems - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Logistics and Supply Chain Software - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Healthcare and Medical Care Applications - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Premier Custom Software Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a leading <strong>custom software development company in India</strong> providing end-to-end <strong>software development services</strong> for global enterprises, mid-sized firms, and fast-growing tech startups. As a trusted <strong>software development company</strong>, our expert team of <strong>software developer</strong> specialists builds secure, robust, and scalable <strong>b2b software</strong> architectures tailored to streamline your operations and drive sustainable business growth.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Enterprise Application Software & Custom Software Development Services
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Delivering high-performance <strong>custom software development services</strong> requires deep industry knowledge and technical precision. We excel in <strong>enterprise software development</strong> and <strong>software application development services</strong>, engineering mission-critical <strong>enterprise application software</strong> that automates internal workflows, enhances data security, and scales effortlessly alongside organizational expansion.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom CRM Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Manage customer relationships, automated lead funnels, and sales pipelines efficiently with our custom tailored <strong>custom crm development services</strong>.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>ERP Software Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Unify organizational databases, inventory tracking, financial ledgers, and human resources with robust <strong>erp software development services</strong>.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Embedded Software Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Build high-reliability firmware, IoT solutions, and system-level applications with our <strong>embedded software development services</strong>.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Choose Gatecode as Your Custom Software Development Company in India?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            When selecting a <strong>software development company in india</strong>, you need a partner with proven engineering standards. Choosing Gatecode Technologies as your preferred <strong>custom software development company</strong> guarantees:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Tailored Architecture:</strong> Complete custom software development without reliance on restrictive third-party templates.</li>
            <li style={{ marginBottom: '10px' }}><strong>Enterprise Security:</strong> Strict adherence to cloud data encryption, ISO standards, and zero-vulnerability testing.</li>
            <li style={{ marginBottom: '10px' }}><strong>Full Lifecycle Support:</strong> Ongoing maintenance, database optimization, and active system integrations.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SoftwareDevelopmentServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/software-development' },
      { '@type': 'ListItem', position: 3, name: 'Software Development', item: 'https://gatecode.in/services/software-development' },
    ],
  };

  const softwareDevSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development Services',
    name: 'Custom Software Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Top custom software development company in India offering custom software development services, enterprise software development, SaaS product development, CRM & ERP software development.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose Gatecode Technologies as your custom software development company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a premier custom software development company in India specializing in enterprise application software, custom software development services, and b2b software solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide custom CRM and ERP software development services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we design custom CRM development services and ERP software development services engineered to streamline business operations and centralize data workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of software application development services do your developers offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our expert software developers build cloud SaaS applications, desktop software, embedded software development services, and custom enterprise portals.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareDevSchema) }}
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

export default SoftwareDevelopmentServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for BPO Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (17).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            BPO<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We provide reliable and efficient BPO solutions that help businesses improve customer support,<br />
            streamline operations, and enhance overall productivity.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for BPO Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we deliver professional BPO services designed to help businesses manage operations more efficiently 
          and improve customer experiences. Our solutions focus on communication, process optimization, and operational support to reduce workload 
          and enhance business performance. From customer support and back-office management to lead generation and technical assistance, we provide 
          scalable BPO solutions tailored to your business requirements.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for BPO Services) ====================
const services = [
  { title: 'Customer Support Services', desc: 'Professional customer support solutions focused on improving customer satisfaction and engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Email & Chat Support', desc: 'Responsive email and live chat support services for seamless customer interaction.', color: '#fbff06', text: '#000000' },
  { title: 'Call Center Services', desc: 'Inbound and outbound call handling services designed for smooth and effective communication.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Data Processing Services', desc: 'Accurate data processing and management solutions to support daily business operations.', color: '#fbff06', text: '#000000' },
  { title: 'Technical Support Services', desc: 'Reliable technical assistance and troubleshooting support for customers and business operations.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Lead Generation Services', desc: 'Targeted lead generation strategies designed to increase business opportunities and sales growth.', color: '#fbff06', text: '#000000' },
  { title: 'Back Office Support', desc: 'Efficient back-office management solutions that improve workflow and operational productivity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Appointment Scheduling & Customer Coordination', desc: 'Organized appointment handling and customer coordination services for efficient communication management.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our BPO Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for BPO Services) ====================
const benefits = [
  'Improved customer support and engagement',
  'Reduced operational workload',
  'Cost-effective business solutions',
  'Faster response and communication management',
  'Scalable and flexible support services',
  'Enhanced productivity and workflow efficiency',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our BPO Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering reliable, scalable, and customer-focused BPO solutions that improve operational efficiency and business productivity. 
          Our experienced team combines professional communication, process management, and strategic support to help businesses reduce operational 
          burden, improve customer relationships, and achieve long-term growth.
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
              alt="Business Process Outsourcing Services Workflow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for BPO Services) ====================
const processSteps = [
  { title: 'Business Requirement Analysis', desc: 'Understanding operational needs and customer support requirements.' },
  { title: 'Process Planning & Strategy', desc: 'Creating customized workflows and support strategies.' },
  { title: 'Team Allocation & Setup', desc: 'Assigning trained professionals and setting up operational processes.' },
  { title: 'Service Execution', desc: 'Managing customer interactions, support tasks, and back-office operations.' },
  { title: 'Monitoring & Quality Assurance', desc: 'Tracking performance and ensuring service quality standards.' },
  { title: 'Continuous Support & Optimization', desc: 'Improving processes and providing ongoing operational support.' },
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
        <h2 className="dm-section-title">Our Design Process</h2>
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

// ==================== DigitalIndustries Component (Updated for BPO Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Real Estate & Service Industries',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Customer Support - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Coordination - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Logistics Back Office Operations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Education Center Student Support - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Real Estate Lead Generation Campaigns - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Top BPO Companies in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, standing out among the <strong>top bpo companies in india</strong> and premier <strong>bpo outsourcing companies</strong>. As a leading <strong>call center service provider in india</strong> among established <strong>bpo companies</strong>, we deliver round-the-clock <strong>bpo services</strong>, enterprise-grade <strong>business process outsourcing services</strong>, and multi-channel back-office solutions for global organizations.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Customer Support Outsourcing Services & Call Center Operations
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Understanding <strong>what is customer service in bpo</strong> success requires responsive communication and rapid query resolution. Operating as a dedicated <strong>call center service provider</strong>, our agents manage high-volume <strong>customer support outsourcing services</strong>, tailored <strong>bpo customer service</strong>, and specialized <strong>outbound call center services</strong> designed to maximize client retention and conversion.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Customer Support Outsourcing</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Deliver 24/7 helpdesk assistance with <strong>customer support outsourcing services</strong>. We handle live chat, email ticketing, and <strong>customer service and customer support</strong> operations.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Call Center Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Scale telesales and support via <strong>inbound and outbound call center services</strong>. We operate as an accredited <strong>call center service provider in india</strong> for global teams.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Business Process Outsourcing</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Optimize non-core workflows with premier <strong>business process outsourcing companies</strong>. We handle data processing, lead verification, and back-office management.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for BPO Services in India?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with top <strong>bpo companies in india</strong> ensures cost savings, zero downtime, and high customer satisfaction scores (CSAT). Partnering with Gatecode Technologies gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>24/7 Omnichannel Coverage:</strong> Voice, live chat, email, and social media customer query resolution.</li>
            <li style={{ marginBottom: '10px' }}><strong>Trained Agent Workforce:</strong> Rigorous product training and English fluency for international standards.</li>
            <li style={{ marginBottom: '10px' }}><strong>Scalable Capacity:</strong> Rapidly scale seat capacity during peak seasonal demand without infrastructure overhead.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BPOServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/bpo-services' },
      { '@type': 'ListItem', position: 3, name: 'BPO Services', item: 'https://gatecode.in/services/bpo-services' },
    ],
  };

  const bpoSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'BPO Services',
    name: 'BPO Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Top BPO company in India providing customer support outsourcing, call center services, technical support helpdesk, and back-office management.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose Gatecode Technologies as your BPO company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a leading BPO company in India offering 24/7 customer support outsourcing services, inbound and outbound call center services, and back-office management.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is customer service in BPO and what support channels do you manage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Customer service in BPO involves handling customer queries, technical helpdesk, order tracking, and account assistance across phone calls, live chat, email, and social messaging.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer inbound and outbound call center services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! As an established call center service provider in India, we deliver full-suite inbound customer care and outbound tele-marketing/lead generation call center services.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bpoSchema) }}
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

export default BPOServicesPage;

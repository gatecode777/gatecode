"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Smart & Scalable Software Solutions) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (5).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            Best Business<br />Software Solutions<br />Service In Jaipur
          </h1>
          <p className="dm-hero-subtitle">
            We architect intelligent, high-availability software platforms built to handle expanding user loads, automate complex business workflows, and scale seamlessly with your enterprise.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Smart & Scalable Software Solutions) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our scalable software engineering focuses on building high-performance architectures that effortlessly adapt as your business expands. Rather than building rigid, monolithic applications that choke under heavy user loads, we design intelligent distributed systems capable of horizontal scaling, zero-downtime deployments, and elastic cloud provisioning.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          From enterprise workflow engines and multi-tenant SaaS platforms to automated cloud data pipelines, our team ensures every component operates with sub-second latency. We combine asynchronous task queues, resilient caching layers, and fault-tolerant microservices, ensuring your software remains lightning-fast, secure, and cost-effective as transaction volumes grow.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Smart & Scalable Software Solutions) ====================
const services = [
  { 
    title: 'Cloud-Native Microservices Architecture', 
    desc: 'Resilient, decoupled service architectures that scale independently under heavy traffic loads without system bottlenecks.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'High-Concurrency Backend Systems', 
    desc: 'High-throughput server-side processing built to handle thousands of simultaneous requests with minimal latency.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Intelligent Workflow Automation', 
    desc: 'Custom algorithmic engines and event-driven triggers that streamline operations and eradicate repetitive manual labor.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Elastic Cloud Data Pipelines', 
    desc: 'Real-time data processing, ingestion pipelines, and event streaming capable of scaling dynamically with data volume.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Multi-Tenant SaaS Architecture', 
    desc: 'Secure, segregated multi-tenant database environments enabling software companies to scale user tiers efficiently.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Advanced Caching & Database Sharding', 
    desc: 'Distributed caching layers and query optimization that keep application response times under 100 milliseconds.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Fault-Tolerant System Redundancy', 
    desc: 'Automated failover configurations, multi-zone replication, and disaster recovery architectures ensuring uninterrupted uptime.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Continuous Monitoring & Auto-Scaling', 
    desc: 'Automated health checks, APM tracing, and elastic infrastructure scaling that adjusts compute power to real-time demand.', 
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

// ==================== DigitalWhyChoose Component (Updated for Smart & Scalable Software Solutions) ====================
const benefits = [
  'Modular cloud architecture engineered for elastic horizontal scaling.',
  'High-concurrency data processing delivering sub-second response times.',
  'Zero downtime during version releases and database migrations.',
  'Automated cloud resource provisioning to reduce infrastructure overhead.',
  'Robust multi-tenant security layers protecting confidential user data.',
  'Comprehensive API bridges connecting with legacy business systems.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Smart & Scalable Software Solutions?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Building software without scalability in mind leads to catastrophic performance bottlenecks, system crashes during traffic peaks, and costly architectural rewrites down the line. As transaction volumes surge, monolithic architectures quickly strain resources and disrupt daily business continuity.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we plan for high concurrency and elastic scaling from day one. Our solutions combine decoupled microservices, automated load balancing, and intelligent caching, ensuring your software platform reliably absorbs exponential user growth while keeping cloud infrastructure costs strictly optimized.
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
              alt="Smart and Scalable Software Architecture Flow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Smart & Scalable Software Solutions) ====================
const processSteps = [
  { 
    title: 'Scalability Assessment & Load Modeling', 
    desc: 'We analyze current traffic patterns, operational bottlenecks, data flows, and peak demand projections to model architectural requirements.' 
  },
  { 
    title: 'Distributed Architecture Design', 
    desc: 'We engineer modular microservices blueprints, asynchronous messaging queues, and distributed database topologies.' 
  },
  { 
    title: 'Prototype Validation & Stress Testing', 
    desc: 'We build foundational proof-of-concept services and execute rigorous simulated load tests to validate throughput and memory limits.' 
  },
  { 
    title: 'Agile Cloud Engineering', 
    desc: 'Our team writes clean, modular service code utilizing modern frameworks, containerized environments, and cloud infrastructure.' 
  },
  { 
    title: 'End-to-End Resilience & Security QA', 
    desc: 'We perform chaotic failure simulation, data recovery testing, penetration auditing, and latency benchmarking.' 
  },
  { 
    title: 'Automated Deployment & Auto-Scaling', 
    desc: 'We deploy containerized solutions using automated CI/CD pipelines, configure cloud auto-scaling, and initiate 24/7 APM monitoring.' 
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
        <h2 className="dm-section-title">Our Development Approach</h2>
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

// ==================== DigitalIndustries Component (Updated for Smart & Scalable Software Solutions) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Logistics & Operations',
  'Finance & Accounting',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Scalable Architecture - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Management System Solutions - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education and E-Learning Platform Operations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Enterprise Automation Software - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Logistics and Operations Workflow Systems - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
// ==================== Main Page Component ====================
const SmartScalableSoftwareSolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/software-development' },
      { '@type': 'ListItem', position: 3, name: 'Smart & Scalable Software Solutions', item: 'https://www.gatecode.in/services/software-development/scalable-solutions' },
    ],
  };

  const scalableServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Smart & Scalable Software Solutions',
    name: 'Smart & Scalable Software Solutions Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Smart and scalable software development company delivering high-concurrency microservices, cloud automation, and distributed enterprise platforms.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scalableServiceSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="software-development/scalable-solutions" serviceName="scalable software" />
      <ContactSection />
    </div>
  );
};

export default SmartScalableSoftwareSolutionsPage;

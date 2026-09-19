"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { scalableSolutionsFaqs } from '@/components/frontend/FAQSection/FAQSection';
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
            SMART & SCALABLE<br />SOFTWARE<br />SOLUTIONS
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
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Expert Smart &amp; Scalable Software Solutions in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, your premier engineering partner for <strong>smart and scalable software solutions</strong>. We specialize in designing distributed software systems that maintain uncompromising speed, reliability, and security as user concurrency and database sizes grow exponentially.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Building High-Throughput Architectures Engineered for Continuous Growth
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Software scalability is not merely about adding cloud servers; it requires sophisticated database partitioning, asynchronous task processing, modular service decoupling, and intelligent caching. Our software architects construct resilient cloud-native ecosystems that eliminate single points of failure and keep your operational overhead lean.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Decoupled Microservices</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Eliminate system-wide dependencies by isolating critical business functions into independently deployable, autoscaling microservices.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Real-Time Event Processing</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Process millions of transactions and user events concurrently utilizing high-speed messaging brokers and queue architectures.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Distributed Data Management</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Optimize database performance through smart indexing, read/write replicas, distributed caches, and horizontal sharding.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Cost-Optimized Cloud Scaling</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Auto-scale cloud resources dynamically based on real-time traffic spikes, paying only for the compute power your application needs.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Scalable Engineering?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Engineering scalable applications requires deep algorithmic understanding and cloud proficiency. When partnering with Gatecode Technologies, you receive:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Cloud-Native Expertise:</strong> Proven mastery across AWS, Google Cloud, Docker, Kubernetes, and serverless compute paradigms.</li>
            <li style={{ marginBottom: '10px' }}><strong>Zero Technical Debt:</strong> Clean, thoroughly documented codebases designed for effortless team onboarding and maintenance.</li>
            <li style={{ marginBottom: '10px' }}><strong>24/7 APM Monitoring:</strong> Proactive telemetry, automated alerting, and dedicated SLAs ensuring uninterrupted application availability.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SmartScalableSoftwareSolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/software-development' },
      { '@type': 'ListItem', position: 3, name: 'Smart & Scalable Software Solutions', item: 'https://gatecode.in/services/software-development/scalable-solutions' },
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
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Smart and scalable software development company delivering high-concurrency microservices, cloud automation, and distributed enterprise platforms.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does "scalable software" mean, and why is it crucial for growing businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scalable software is architected to handle growing volumes of users, transactions, and data seamlessly without experiencing slowdowns, crashes, or requiring a complete rebuild. As your business grows, a scalable system ensures consistent performance and reliability while keeping infrastructure costs predictable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you engineer software to handle sudden traffic spikes and heavy concurrent users?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We employ modern cloud-native architectures including decoupled microservices, containerization with Docker and Kubernetes, automated horizontal load balancing, distributed caching layers (such as Redis), and asynchronous message queues to handle peak concurrency effortlessly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you migrate or re-architect our existing legacy software to make it scalable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our team can conduct a comprehensive technical audit of your current system to identify performance bottlenecks. We can then restructure, optimize, or entirely migrate your legacy application to a more robust framework, improving database queries and integrating modern cloud hosting solutions for superior resource management.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are scalable digital solutions cost-effective in the long run?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. While engineering a scalable architecture requires strategic initial planning, it is highly cost-effective long term. It prevents the need for expensive, complete system rebuilds every few years. Furthermore, modern scalable cloud infrastructure allows you to optimize costs by only paying for the computing resources you actually use during traffic peaks.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scalableServiceSchema) }}
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
        subtitle="Find answers to key questions about building, optimizing, and future-proofing scalable web and software architecture."
        items={scalableSolutionsFaqs}
      />
    </div>
  );
};

export default SmartScalableSoftwareSolutionsPage;

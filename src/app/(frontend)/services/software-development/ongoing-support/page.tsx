"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (7).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            ONGOING SUPPORT<br />& FUTURE-READY<br />TECHNOLOGY
          </h1>
          <p className="dm-hero-subtitle">
            We provide SLA-backed software maintenance, proactive security monitoring, and continuous technical evolution to keep your digital assets peak-performing, secure, and future-proof.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our responsibility to your enterprise extends far beyond initial project launch. Modern software applications exist in an environment of continuous change—operating systems update, third-party APIs evolve, and traffic patterns shift. Without disciplined technical maintenance, applications quickly accumulate technical debt and security risks.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          We provide dedicated software stewardship, combining 24/7 uptime monitoring, rapid incident hotfixing, and routine performance tuning. Whether your application was engineered by our team or transferred from a previous agency, our full-stack engineers ensure your codebase remains clean, your database stays optimized, and your digital platform is primed for future technology integration.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const services = [
  { 
    title: 'SLA-Backed Technical Maintenance', 
    desc: 'Dedicated support response windows, rapid incident resolution, and round-the-clock uptime monitoring.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Proactive Security Auditing & Patching', 
    desc: 'Automated vulnerability scanning, zero-day threat patches, dependency updates, and regulatory compliance checks.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Continuous Performance Tuning', 
    desc: 'Database query optimization, memory leak eradication, and caching adjustments to keep load times razor sharp.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Infrastructure Scaling & Cloud Tuning', 
    desc: 'Elastic resource adjustments on AWS and Google Cloud to maintain peak speed during high-traffic enterprise operations.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Modern Technology Upgrades', 
    desc: 'Seamless refactoring of outdated frameworks and deprecation migrations to keep codebases modern and future-ready.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Automated Backup & Disaster Recovery', 
    desc: 'Multi-zone redundant data backups with automated recovery testing ensuring total business continuity.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Third-Party API Version Management', 
    desc: 'Proactive monitoring of integrated APIs and external webhooks to prevent downtime when providers release updates.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Strategic Technical Advisory', 
    desc: 'Quarterly architecture reviews, roadmap planning, and technology consulting to guide your future software investments.', 
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

// ==================== DigitalWhyChoose Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const benefits = [
  'Guaranteed response times under strict SLA agreements.',
  'Proactive vulnerability patching before security risks emerge.',
  'Consistent sub-second application response times and zero downtime.',
  'Automated offsite database backups with verified recovery protocols.',
  'Elimination of technical debt through continuous code refactoring.',
  'Predictable maintenance costs with flexible retainer models.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Support & Technology Services?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Treating enterprise software as a one-time investment leads to slow degradation. Outdated libraries invite security breaches, unindexed database tables cause system latency, and unmonitored server resources lead to costly outages during critical business moments.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we take a proactive rather than reactive stance on software maintenance. Our engineers monitor performance metrics in real time, identify potential bottlenecks before they impact your users, and systematically modernize your codebase to ensure maximum uptime, compliance, and sustained operational velocity.
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
              alt="Ongoing Systems Support and Maintenance Flow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const processSteps = [
  { 
    title: 'Health Audit & Baseline Telemetry', 
    desc: 'We audit your existing codebase, dependencies, server configurations, and error logs to establish baseline benchmarks.' 
  },
  { 
    title: 'Monitoring & Alert Infrastructure Setup', 
    desc: 'We deploy real-time APM agents, log aggregators, and automated incident alerting channels.' 
  },
  { 
    title: 'Scheduled Maintenance & Security Updates', 
    desc: 'We execute routine framework updates, patch libraries, and perform off-peak database optimization cycles.' 
  },
  { 
    title: 'Rapid Incident Response & Hotfixing', 
    desc: 'Our on-call engineers triage and resolve bugs within contractual SLA windows, providing transparent post-mortems.' 
  },
  { 
    title: 'Continuous Performance & Capacity Tuning', 
    desc: 'We continuously review latency metrics and resource usage, fine-tuning server configurations as traffic expands.' 
  },
  { 
    title: 'Quarterly Roadmap Reviews & Advisory', 
    desc: 'We deliver transparent performance reports and collaborate with your team on upcoming feature upgrades and tech stack evolutions.' 
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
        <h2 className="dm-section-title">Our Approach</h2>
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

// ==================== DigitalIndustries Component (Updated for Ongoing Support & Future-Ready Technology) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Finance & Accounting',
  'Logistics & Operations',
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
            <Image src="/images/1.webp" alt="E-Commerce Platforms Maintenance and Support - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Systems Ongoing Support and Updates - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Portal and LMS Maintenance - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Enterprise Software Support - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Finance and Accounting Software Maintenance - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
// ==================== Main Page Component ====================
const OngoingSupportFutureReadyTechnologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/software-development' },
      { '@type': 'ListItem', position: 3, name: 'Ongoing Support & Future-Ready Technology', item: 'https://www.gatecode.in/services/software-development/ongoing-support' },
    ],
  };

  const supportServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Maintenance and Ongoing Support Services',
    name: 'Software Support & Ongoing Maintenance Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Ongoing software maintenance and technical support agency delivering 24/7 uptime monitoring, security patching, and legacy refactoring.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supportServiceSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="software-development/ongoing-support" serviceName="software support and maintenance" />
      <ContactSection />
    </div>
  );
};

export default OngoingSupportFutureReadyTechnologyPage;

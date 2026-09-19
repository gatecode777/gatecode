"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component ====================
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
            TECHNICAL<br />SUPPORT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Reliable, 24/7 multi-tier technical support and IT helpdesk solutions that resolve issues rapidly, eliminate downtime, and keep systems running smoothly.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we deliver multi-tier technical support and IT helpdesk outsourcing services designed to maintain maximum uptime and keep your users productive. When software bugs, network outages, hardware failures, or configuration errors occur, delays in technical resolution lead to lost revenue and customer frustration. Our certified technical support engineers provide round-the-clock Tier 1, Tier 2, and Tier 3 technical assistance across software applications, SaaS platforms, cloud infrastructure, and enterprise hardware. Through remote screen-sharing diagnostics, automated ticketing pipelines, structured escalation trees, and proactive system health monitoring, we diagnose root causes rapidly and deliver permanent resolutions under strict service-level agreements.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Tier 1 & Tier 2 Helpdesk Support', 
    desc: 'Frontline technical inquiry triage, user access resets, basic application troubleshooting, and ticket categorization.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Tier 3 Advanced Technical Escalation', 
    desc: 'Deep-dive diagnostic analysis of database anomalies, code exceptions, API communication failures, and complex backend errors.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Remote Desktop Troubleshooting', 
    desc: 'Secure remote-access diagnostics to resolve workstation software glitches, driver incompatibilities, and operating system conflicts.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'SaaS Application & Cloud Support', 
    desc: 'Guiding enterprise users through software features, integration setups, permission configurations, and performance optimization.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Network & Connectivity Monitoring', 
    desc: 'Monitoring VPN connections, server availability, DNS routing, and firewall status to preempt infrastructure outages.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'System Patching & Update Maintenance', 
    desc: 'Scheduling regular software version updates, security patches, and database health maintenance during designated maintenance windows.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Incident Logging & Bug Reporting', 
    desc: 'Detailed documentation of reproducible software bugs, log file captures, and structured ticket handoffs to core engineering teams.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Proactive Uptime & Infrastructure Monitoring', 
    desc: '24/7 telemetry monitoring of server load, CPU thresholds, memory leaks, and API endpoint latency with instant incident alerts.', 
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

// ==================== DigitalWhyChoose Component ====================
const benefits = [
  'Guaranteed SLA response times under 15 minutes for critical incidents',
  'Certified technical engineers across Windows, Linux, cloud, and SaaS environments',
  '24/7/365 continuous monitoring that catches system faults before users do',
  'Seamless ticket escalation bridging support agents with engineering teams',
  'Significant cost savings compared to maintaining full in-house IT staff',
  'Strict security protocols with encrypted remote access and credential protection',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Technical Support Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine experienced software engineers with rigorous ITIL-aligned service delivery frameworks. Our technical support specialists don’t just read scripts; we understand systems architecture, inspect logs, and solve difficult problems accurately to minimize downtime.
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
              alt="Multi-Tier Technical Support Lifecycle - Gatecode Technologies"
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

// ==================== DigitalProcess Component ====================
const processSteps = [
  { title: 'Infrastructure Audit & Runbook Setup', desc: 'Audit system architectures, document known error databases (KEDB), and establish escalation runbooks.' },
  { title: 'Helpdesk Platform & Telemetry Sync', desc: 'Integrate Jira Service Desk, Zendesk, PagerDuty, and telemetry monitoring dashboards with our desks.' },
  { title: 'Engineer Certification & Shadowing', desc: 'Certify support engineers on your specific application codebase, API documentation, and server setups.' },
  { title: '24/7 Incident Triage & Resolution', desc: 'Provide continuous 24/7 coverage, rapidly diagnosing reported issues and resolving user requests.' },
  { title: 'Escalation & Engineering Hand-off', desc: 'Package edge-case code bugs with reproduction steps and stack traces for swift developer fixes.' },
  { title: 'Post-Mortem Review & Optimization', desc: 'Conduct weekly root-cause analysis (RCA) to eliminate recurring defects and update support runbooks.' },
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
        <h2 className="dm-section-title">Our Process</h2>
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

// ==================== DigitalIndustries Component ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Medical',
  'Logistics & Supply Chain',
  'Education & E-Learning',
  'Real Estate & Property',
  'Banking & Financial Services',
  'SaaS & Technology Startups',
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
            <Image src="/images/1.webp" alt="SaaS Product Technical Support - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Medical Software Technical Assistance - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Financial Portal System Maintenance - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics Tracking Telemetry Support - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Cloud Infrastructure Monitoring - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Multi-Tier Technical Support and IT Helpdesk Outsourcing Solutions
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Software disruptions and infrastructure downtime immediately impair customer productivity and lead to churn. At Gatecode Technologies, our managed technical support teams deliver dependable 24/7 IT helpdesk solutions that diagnose and resolve technical incidents with speed, competence, and structured escalation protocols.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>24/7 Tier 1 & 2 Helpdesk</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Rapid response handling for user credential resets, application installation issues, software permission configurations, and common error alerts.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Tier 3 Engineering Escalations</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Senior engineering diagnostics analyzing server exceptions, database deadlocks, and API payload errors with structured Jira bug hand-offs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Remote Screen Diagnostics</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Secure remote-access troubleshooting to observe, replicate, and resolve workstation glitches and configuration errors live with users.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Proactive Uptime Monitoring</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Continuous telemetry monitoring evaluating server latency, API response times, and database memory to mitigate outages proactively.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Professional Technical Support Safeguards User Retention
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Providing prompt, technically competent assistance transforms frustrating software moments into trust-building experiences. Choosing Gatecode Technologies ensures:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Strict SLA Compliance:</strong> Defined first-response and resolution time guarantees aligned with enterprise contracts.</li>
            <li style={{ marginBottom: '10px' }}><strong>Reduced Developer Distraction:</strong> Engineering teams stay focused on building new features while our desk handles support tickets.</li>
            <li style={{ marginBottom: '10px' }}><strong>Continuous Documentation:</strong> Every resolved incident generates structured knowledge-base entries to expedite future resolutions.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const TechnicalSupportServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="digital-marketing-page">
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

export default TechnicalSupportServicesPage;

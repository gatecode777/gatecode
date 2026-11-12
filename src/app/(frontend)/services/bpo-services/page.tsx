"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
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
            BPO<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Scalable, efficient, and round-the-clock business process outsourcing solutions designed to elevate customer satisfaction and optimize operational overhead.
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
          At Gatecode Technologies Pvt. Ltd., we deliver comprehensive business process outsourcing (BPO) solutions that empower growing organizations to scale operations without taking on heavy internal payroll overhead. Managing non-core administrative workflows, multi-channel customer inquiries, technical troubleshooting, and data-intensive back-office tasks in-house often strains company leadership and distracts teams from core product innovation. Our offshore and nearshore BPO services provide dedicated, bilingual support agents, multi-tier technical helpdesks, structured outbound sales outreach, and meticulous transaction processing teams. Operating under strict service-level agreements (SLAs), ISO-aligned quality standards, and robust data security protocols, we ensure high first-contact resolution (FCR), elevated customer satisfaction scores (CSAT), and sustainable operating margins.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Omnichannel Customer Support', 
    desc: '24/7 customer care delivered across voice, email ticketing, live website chat, and social messaging with high first-contact resolution.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Inbound & Outbound Call Center', 
    desc: 'Professional handling of inbound customer inquiries, order assistance, outbound telemarketing, and customer satisfaction survey calls.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Multi-Tier Technical Helpdesk', 
    desc: 'L1/L2 technical support diagnosing software errors, user account configurations, connectivity issues, and remote desktop troubleshooting.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Back-Office Transaction Processing', 
    desc: 'Meticulous processing of invoices, billing reconciliations, claims verification, document archiving, and routine database management.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Lead Generation & Sales Qualification', 
    desc: 'Targeted outbound B2B and B2C calling campaigns qualifying inbound marketing leads and scheduling discovery meetings for account executives.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'E-Commerce Store & Order Support', 
    desc: 'Managing order tracking, refund requests, inventory queries, vendor coordination, and dispute resolution across digital marketplaces.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Content & Community Moderation', 
    desc: 'Real-time review and moderation of user-generated content, customer reviews, forum discussions, and social media comments.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Appointment Scheduling & Coordination', 
    desc: 'Managing calendar bookings, client reminder notifications, schedule adjustments, and outbound follow-up calls for service providers.', 
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

// ==================== DigitalWhyChoose Component ====================
const benefits = [
  '24/7/365 coverage across global time zones via multi-shift teams',
  'Significant operational cost reduction compared to domestic in-house hiring',
  'Rapid team scaling capable of handling seasonal volume spikes seamlessly',
  'Rigorous quality assurance and continuous CSAT and NPS tracking',
  'State-of-the-art telecom infrastructure with zero dropped-call redundancy',
  'Strict data confidentiality backed by non-disclosure agreements and ISO standards',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our BPO Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine rigorously trained communication professionals with modern omnichannel helpdesk technology. Our dedicated support units act as a seamless extension of your brand, upholding your quality standards and resolving customer inquiries with speed, empathy, and technical competence.
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
              alt="Business Process Outsourcing Lifecycle and Quality Framework - Gatecode Technologies"
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
  { title: 'Operational Scoping & SLA Definition', desc: 'Define ticket volumes, support channels, resolution KPIs, and brand communication guidelines.' },
  { title: 'Curriculum Design & Agent Training', desc: 'Design intensive training programs covering product mechanics, FAQs, and brand tonality.' },
  { title: 'Tech Stack & Helpdesk Integration', desc: 'Configure cloud PBX telephony, CRM ticketing tools (Zendesk, Freshdesk), and secure workstations.' },
  { title: 'Pilot Launch & Supervised Operation', desc: 'Commence operations under direct team lead supervision with 100% call and ticket quality auditing.' },
  { title: 'Full Production & Ongoing QA', desc: 'Scale to 24/7 production with continuous CSAT monitoring, speech analytics, and performance coaching.' },
  { title: 'Monthly SLA Reviews & Optimization', desc: 'Deliver comprehensive executive reports reviewing first-response times, resolution rates, and efficiency.' },
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
        <h2 className="dm-section-title">Our BPO Process</h2>
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

// ==================== Main Page Component ====================
const BPOServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/bpo-services' },
      { '@type': 'ListItem', position: 3, name: 'BPO Services', item: 'https://www.gatecode.in/services/bpo-services' },
    ],
  };

  const bpoSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'BPO Services',
    name: 'BPO Companies in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Premier BPO company in India offering customer support outsourcing, call center services, technical support, and back-office management.',
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
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="bpo-services" serviceName="BPO" />
      <ContactSection />
    </div>
  );
};

export default BPOServicesPage;

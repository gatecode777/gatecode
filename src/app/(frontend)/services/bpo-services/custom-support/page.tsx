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
            CUSTOM<br />SUPPORT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Tailored, dedicated, and brand-aligned customer service teams engineered to handle unique business workflows and exceed customer expectations.
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
          At Gatecode Technologies Pvt. Ltd., we understand that off-the-shelf customer service models fail to address specialized operational requirements, niche industry compliance, and unique customer expectations. Our custom support services are designed from the ground up to match your exact business processes, customer journey touchpoints, and brand personality. Whether you require dedicated full-time support specialists embedded into your Slack channels, multi-tiered escalation desks handling complex SaaS user queries, or round-the-clock weekend coverage across voice, live chat, and email ticketing platforms (Zendesk, Freshdesk, Intercom, Gorgias), we tailor every workflow to your needs. With customized training regimens, bespoke SLA guarantees, and direct platform integration, we deliver a white-glove customer experience that scales seamlessly with your business.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Dedicated Brand-Embedded Teams', 
    desc: 'Full-time support specialists trained exclusively on your products, company policies, internal software, and brand voice.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Omnichannel Ticketing Management', 
    desc: 'Unified customer care across Zendesk, Freshdesk, Intercom, and email, ensuring fast first-response and full conversation context.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Live Website & In-App Chat Support', 
    desc: 'High-speed, empathetic real-time chat assistance that resolves customer roadblocks, guides purchasing decisions, and lowers cart abandonment.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Specialized E-Commerce Operations', 
    desc: 'End-to-end management of order modifications, tracking updates, warranty replacements, exchange processing, and vendor communications.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'VIP & High-Value Account Care', 
    desc: 'Dedicated white-glove support tiers delivering prioritized response times and bespoke relationship management for enterprise clients.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Custom Workflow & Ticket Routing', 
    desc: 'Designing automated tagging rules, priority queues, escalation trees, and macros to route tickets to the appropriate specialists.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Knowledge Base & Macro Curation', 
    desc: 'Writing, organizing, and maintaining comprehensive self-service help center articles, internal SOP manuals, and canned response templates.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'After-Hours & Weekend Coverage', 
    desc: 'Flexible staffing solutions providing overnight, weekend, and holiday coverage to ensure zero unanswered inquiries across global markets.', 
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
  'Customized support architecture designed around your specific tech stack',
  'Dedicated agent models that function as genuine brand ambassadors',
  'Dramatically faster first-response times (FRT) and higher CSAT scores',
  'Transparent performance dashboards with weekly ticket quality audits',
  'Flexible staffing arrangements from single dedicated agents to full teams',
  'Seamless integration into your internal Slack, Teams, and CRM channels',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Custom Support Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We reject one-size-fits-all customer service outsourcing. Our custom support framework adapts to your company's workflows, terminology, and software ecosystems, ensuring your customers receive knowledgeable, articulate, and empathetic support on every interaction.
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
              alt="Custom Support Tailored Architecture - Gatecode Technologies"
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
  { title: 'Workflow Scoping & Discovery', desc: 'Audit ticket history, identify repetitive questions, map escalation criteria, and document brand voice.' },
  { title: 'Custom Playbook & Macro Creation', desc: 'Develop customized support guides, standard operating procedures, canned macros, and troubleshooting trees.' },
  { title: 'Dedicated Team Selection & Training', desc: 'Hand-select agents matching required technical fluencies and conduct thorough product certification.' },
  { title: 'Helpdesk & Integration Setup', desc: 'Configure helpdesk ticketing permissions, internal communication channels, and secure workstation logins.' },
  { title: 'Supervised Pilot & Calibration', desc: 'Execute live customer interactions with senior QA leads reviewing 100% of outgoing communications.' },
  { title: 'Continuous Service Optimization', desc: 'Conduct weekly CSAT analysis, review sentiment trends, and update knowledge bases to eliminate recurring tickets.' },
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
            <Image src="/images/1.webp" alt="SaaS Custom Support Helpdesk - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Dedicated Patient Service - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="E-Commerce Custom Ticketing Support - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics Customer Coordination Team - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="EdTech Student Learning Assistance - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Tailored Customer Support and Dedicated Helpdesk Outsourcing
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Standard call centers often treat customer support as a generic transactional activity, leaving customers dissatisfied and damaging brand perception. At Gatecode Technologies, our custom customer support services deploy dedicated brand specialists trained to act as an authentic extension of your internal company culture, ensuring personalized and memorable support.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Dedicated Agent Pods</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Agents allocated exclusively to your business who master your product specifications, internal software tools, and customer nuances.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Multi-Channel Helpdesk Management</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Managing live chat, incoming emails, social direct messages, and in-app feedback from a unified customer inbox with custom SLAs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Bespoke Escalation Protocols</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Configuring clear tiers for technical bugs, critical accounts, and urgent billing disputes that ensure rapid internal handoffs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Continuous Knowledge Base Curation</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Continuously updating customer-facing FAQs and internal training docs to accelerate first-contact resolution and enable self-service.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Custom Support Directs Stronger Customer Retention
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Providing thoughtful, technically competent customer assistance converts frustrated users into vocal brand champions. Choosing Gatecode Technologies delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Brand-Aligned Communication:</strong> Seamless alignment with your exact brand tone, whether friendly, professional, or technical.</li>
            <li style={{ marginBottom: '10px' }}><strong>Elevated Customer Lifetime Value:</strong> Rapid resolution of customer complaints preventing churn and protecting monthly recurring revenue.</li>
            <li style={{ marginBottom: '10px' }}><strong>Operational Flexibility:</strong> Easily adjust agent headcounts and coverage hours as your business scales across new territories.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CustomSupportServicesPage = () => {
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

export default CustomSupportServicesPage;

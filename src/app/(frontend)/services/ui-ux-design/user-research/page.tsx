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
        style={{ backgroundImage: `url('/images/Rectangle 228.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            USER RESEARCH<br />& ANALYSIS<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Uncover genuine customer motivations, identify behavioral friction points, and build validated digital experiences backed by empirical user data.
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
          At Gatecode Technologies Pvt. Ltd., we deliver comprehensive user research and behavioral analysis services that replace assumptions with validated human insight. Successful digital products are built on a thorough understanding of who your users are, the tasks they need to accomplish, and the roadblocks they encounter along the way. Our research team combines generative discovery methods—including structured 1-on-1 user interviews, field observation, and contextual inquiry—with evaluative testing, quantitative product analytics, heuristic assessments, and conversion funnel analysis. By translating raw behavioral data into actionable design priorities, customer journey maps, and evidence-backed product roadmaps, we empower engineering, design, and product teams to make confident decisions that measurably increase user adoption, customer satisfaction, and long-term retention.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'User Behavior & Funnel Analysis', 
    desc: 'Evaluate clickstreams, session replays, and interaction drop-offs to pinpoint exactly where users encounter friction or abandon workflows.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Market & Competitive Benchmarking', 
    desc: 'Audit competitive products, market paradigms, and usability standards to uncover strategic opportunities for product differentiation.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Data-Driven User Personas', 
    desc: 'Synthesize empirical customer research into detailed persona profiles outlining goals, frustrations, tech fluency, and jobs-to-be-done.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Customer Journey Mapping', 
    desc: 'Map end-to-end user touchpoints, emotional highs and lows, and operational handoffs across complex multi-platform product lifecycles.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'User Surveys & Feedback Loops', 
    desc: 'Deploy targeted qualitative surveys, CSAT/NPS feedback mechanisms, and contextual in-app polls to measure sentiment at critical moments.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Usability Testing & Heuristic Audits', 
    desc: 'Conduct moderated and unmoderated usability evaluation against Nielsen Norman heuristics to uncover usability flaws before code release.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Information Architecture & Card Sorting', 
    desc: 'Perform open and closed card sorting exercises and tree testing to structure menus, taxonomies, and navigation intuitively for users.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Actionable UX Research Reporting', 
    desc: 'Deliver stakeholder-ready executive summaries, video highlight reels, and prioritized issue matrices mapped directly to product backlog items.', 
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
  'Elimination of costly product redesigns and guesswork',
  'Deep clarity on core user problems and mental models',
  'Evidence-backed feature prioritization for development roadmaps',
  'Quantifiable gains in workflow task completion rates',
  'Reduced onboarding friction and measurable churn reduction',
  'Direct alignment between user expectations and business goals',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our User Research & Analysis Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine rigorous behavioral psychology with agile digital product development methodologies. Our research practitioners avoid vanity metrics, delivering verifiable insights that directly inform interface architecture, feature prioritization, and sustainable commercial growth.
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
              alt="User Persona and UX Research Flow - Gatecode Technologies"
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
  { title: 'Research Planning & Objectives', desc: 'Define primary research questions, target participant recruitment profiles, and evaluation criteria.' },
  { title: 'Qualitative & Quantitative Discovery', desc: 'Conduct in-depth user interviews, contextual inquiries, interactive card sorting, and broad surveys.' },
  { title: 'Behavioral & Telemetry Analysis', desc: 'Synthesize quantitative session telemetry, drop-off heatmaps, and funnel analytics against user feedback.' },
  { title: 'Persona & Journey Synthesis', desc: 'Construct actionable archetypes, empathy maps, and journey flows identifying critical friction areas.' },
  { title: 'Usability Testing & Validation', desc: 'Run moderated test sessions with prototypes or live systems to measure time-on-task and satisfaction.' },
  { title: 'Strategic Recommendations & Roadmapping', desc: 'Deliver actionable insight reports with prioritized design recommendations and engineering tasks.' },
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
  'Healthcare & Wellness',
  'Education & Training',
  'SaaS & Technology Platforms',
  'Corporate Businesses',
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
            <Image src="/images/1.webp" alt="E-Commerce Buyer Persona Development - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Experience Usability Analysis - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Platform Course Participant Analytics - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Software Product User Testing - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Enterprise Customer Feedback Collection - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional User Research & UX Behavioral Analysis
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Building digital products without systematic user research introduces substantial risk, often resulting in complex interfaces that confuse target customers and yield low retention. At Gatecode Technologies, our user research consultants employ structured behavioral methodologies that uncover authentic user motivations, evaluate interface workflows, and validate product concepts before significant development capital is spent.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Qualitative User Interviews</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                1-on-1 contextual interviews and task demonstrations that uncover unspoken customer frustrations, mental models, and real-world workarounds.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Empirical Usability Testing</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Moderated testing with target demographics measuring task completion times, error rates, and system usability scores across key user journeys.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Behavioral Analytics & Heatmaps</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Quantitative event tracking, scroll patterns, and session analysis that reveal exact moments where prospective buyers hesitate or churn.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Heuristic & Accessibility Audits</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Expert usability reviews evaluating interface consistency, error prevention, feedback mechanisms, and WCAG accessibility standards.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Data-Backed User Research Accelerates Product Success
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            By grounding product decisions in verified user behaviors rather than internal organizational opinions, businesses dramatically reduce engineering rework, improve product-market fit, and create products customers recommend. Partnering with Gatecode Technologies ensures your team receives:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Objective Evidence:</strong> Unbiased evaluation of user workflows and prototypes directly from real users.</li>
            <li style={{ marginBottom: '10px' }}><strong>Prioritized Product Roadmaps:</strong> Clear distinction between high-impact user problems and cosmetic suggestions.</li>
            <li style={{ marginBottom: '10px' }}><strong>Cross-Functional Alignment:</strong> Clear video insights and data reports that build shared empathy across leadership, design, and engineering.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const UserResearchAnalysisServicesPage = () => {
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

export default UserResearchAnalysisServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Wireframing & Prototyping Services) ====================
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
            WIREFRAMING &<br />PROTOTYPING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We transform complex product concepts into interactive, testable wireframes and clickable Figma prototypes to de-risk engineering and align stakeholder vision.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Wireframing & Prototyping Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our professional wireframing and prototyping services help modern organizations validate digital concepts before investing in full-scale software engineering. Jumping directly from idea to code without an architectural blueprint frequently results in bloated development cycles, mismatched stakeholder expectations, and costly rework.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          We bridge this critical gap by creating structured low-fidelity wireframes and high-fidelity interactive prototypes in Figma. By mapping out screen hierarchies, defining user journeys, and testing interactive states, we enable your team to identify usability bottlenecks early, gather authentic user feedback, and enter the engineering phase with absolute confidence.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Wireframing & Prototyping Services) ====================
const services = [
  { 
    title: 'Low-Fidelity Conceptual Wireframes', 
    desc: 'Rapid grayscale structural blueprints that define content layout, visual hierarchy, and core interface navigation.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'High-Fidelity UI Wireframes', 
    desc: 'Detailed screen layouts incorporating realistic typography, field validations, and exact UI component positioning.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Clickable Interactive Prototypes', 
    desc: 'Fully interactive Figma prototypes that simulate live product experiences, page transitions, and responsive gestures.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Micro-Interaction & State Modeling', 
    desc: 'Prototyping dynamic UI states including button hover feedback, accordion toggles, modal dialogs, and progress bars.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Multi-Device Responsive Mockups', 
    desc: 'Screen flows mapped across mobile smartphones, tablets, and widescreen desktop displays to test responsive layouts.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Stakeholder Alignment Prototypes', 
    desc: 'High-impact visual walkthroughs designed for investor presentations, executive sign-offs, and design sprint validation.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Usability Testing Prototypes', 
    desc: 'Interactive models created for moderated user testing to observe natural click behavior and task success rates.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Developer Handoff Specifications', 
    desc: 'Screen blueprints with explicit component dimensions, interaction notes, and user flow documentation for engineering squads.', 
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

// ==================== DigitalWhyChoose Component (Updated for Wireframing & Prototyping Services) ====================
const benefits = [
  '100% clarity on product features and workflows prior to coding.',
  'Significant reduction in costly development rework and scope creep.',
  'Interactive clickable models for investor and stakeholder alignment.',
  'Early identification of usability bottlenecks through rapid prototyping.',
  'Responsive screen wireframes tailored for mobile, tablet, and desktop.',
  'Clean Figma specifications accelerating frontend engineering velocity.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Wireframing &amp; Prototyping Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Building digital products without prototyping is like constructing a complex building without architectural blueprints. Inevitably, miscommunications arise, functional gaps appear midway through development, and fixing mistakes in live code costs up to ten times more than iterating on designs.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, our interactive prototypes put a clickable product simulation directly into the hands of your leadership, investors, and target users. This collaborative validation process ensures all stakeholders agree on interaction logic and feature sets before developers write a single line of backend code.
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
              alt="Wireframing and Interactive Prototyping Process - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Wireframing & Prototyping Services) ====================
const processSteps = [
  { 
    title: 'Feature Scoping & Journey Mapping', 
    desc: 'We outline user goals, core business requirements, and essential features to chart the overall screen flow.' 
  },
  { 
    title: 'Information Grouping & Low-Fi Wireframes', 
    desc: 'We construct initial structural sketches to organize content priority, button placement, and navigational trees.' 
  },
  { 
    title: 'High-Fidelity Screen Wireframing', 
    desc: 'We build detailed grayscale layouts in Figma with precise component spacing, form fields, and typography scales.' 
  },
  { 
    title: 'Interactive Prototype Assembly', 
    desc: 'We connect screens with interactive transitions, modal overlays, dynamic states, and scrollable containers.' 
  },
  { 
    title: 'Usability Evaluation & Stakeholder Review', 
    desc: 'We walk internal stakeholders and target users through the prototype, collecting actionable feedback.' 
  },
  { 
    title: 'Specification & Engineering Delivery', 
    desc: 'We annotate interaction rules, export assets, and deliver organized design files for frontend development.' 
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
        <h2 className="dm-section-title">Our UX Design Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Wireframing & Prototyping Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & e-Learning',
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
            <Image src="/images/1.webp" alt="E-Commerce Shopping App Wireframes - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Portal Mockups - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education Platform Course Dashboard Layout - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Software Product Interface Prototypes - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Business Dashboard Wireframes - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Premier Wireframing &amp; Prototyping Services Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, your strategic design partner for professional <strong>wireframing and prototyping services</strong>. We empower tech startups, product teams, and enterprise innovators to validate concepts, iterate workflows, and eliminate engineering risks before committing code.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Bringing Product Visions to Life with Testable Interactive Prototypes
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Building digital products without prototyping is like constructing a building without blueprints—it leads to structural failure and expensive reconstruction. Our wireframing specialists create interactive digital models in Figma that simulate real application behavior, allowing you to test usability, align stakeholders, and refine workflows with minimal turnaround time.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Rapid Conceptual Validation</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Test product logic and explore multiple layout variations quickly without investing weeks in full visual design.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Interactive Clickable Models</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Experience the feel of a live application with realistic gestures, screen routing, and dynamic micro-animations.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Substantial Cost Reduction</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Identify and fix critical usability flaws during the wireframing phase, avoiding expensive code refactoring down the line.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Developer-Ready Annotations</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Comprehensive interaction notes and screen specs that provide developers with an exact blueprint to build from.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Prototyping?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Transforming product concepts into interactive blueprints requires technical design rigor:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Figma &amp; Protopie Mastery:</strong> Advanced component variables, component states, and realistic touch gesture triggers.</li>
            <li style={{ marginBottom: '10px' }}><strong>Agile Turnaround:</strong> Iterative sprint delivery enabling fast design sprints and immediate user testing cycles.</li>
            <li style={{ marginBottom: '10px' }}><strong>End-to-End Design Continuity:</strong> Seamless progression from wireframe blueprints into high-fidelity UI and code.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const WireframingPrototypingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/ui-ux-design' },
      { '@type': 'ListItem', position: 3, name: 'Wireframing & Prototyping', item: 'https://gatecode.in/services/ui-ux-design/wireframing' },
    ],
  };

  const wireframingServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Wireframing & Prototyping Design Services',
    name: 'Wireframing & Prototyping Design Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Specialized wireframing and prototyping agency in India delivering low-fi blueprints, clickable prototypes, and usability validation.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wireframingServiceSchema) }}
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

export default WireframingPrototypingServicesPage;

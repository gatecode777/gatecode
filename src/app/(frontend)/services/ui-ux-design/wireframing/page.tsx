"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
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
// ==================== Main Page Component ====================
const WireframingPrototypingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/ui-ux-design' },
      { '@type': 'ListItem', position: 3, name: 'Wireframing & Prototyping', item: 'https://www.gatecode.in/services/ui-ux-design/wireframing' },
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
      url: 'https://www.gatecode.in',
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
      <ServiceFAQ slug="ui-ux-design/wireframing" serviceName="wireframing and prototyping" />
      <ContactSection />
    </div>
  );
};

export default WireframingPrototypingServicesPage;

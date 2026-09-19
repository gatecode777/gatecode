"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { uiDesignFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for UI Design Services) ====================
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
            UI (USER INTERFACE)<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We design modern, pixel-perfect user interfaces that blend visual elegance with purposeful functionality, transforming digital products into engaging, intuitive experiences.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for UI Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our user interface (UI) design services turn complex digital concepts into clean, visually captivating reality. A great user interface does far more than look appealing—it communicates brand values, establishes immediate user confidence, and guides visitors effortlessly through tasks with clear visual hierarchy.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          Whether you are launching a SaaS web platform, a mobile application, or a consumer-facing website, our UI designers craft comprehensive design systems in Figma. We focus on mathematical grid alignment, WCAG-compliant color contrasts, accessible typography scales, and responsive layouts that look exceptional across smartphones, tablets, and desktop displays.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UI Design Services) ====================
const services = [
  { 
    title: 'Responsive Web UI Design', 
    desc: 'Modern, mobile-first web layouts engineered with fluid grids, consistent whitespace, and dynamic visual hierarchies.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Mobile App UI (iOS & Android)', 
    desc: 'Native interface design following Apple Human Interface Guidelines and Google Material Design specifications.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'SaaS & Enterprise Dashboard UI', 
    desc: 'Clean, structured dashboard interfaces designed for data-heavy workflows, analytics reporting, and rapid user decision-making.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Figma Design Systems & Tokens', 
    desc: 'Comprehensive, scalable design token systems establishing unified typography, color libraries, and reusable interactive components.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Interactive Micro-Animations & States', 
    desc: 'Subtle visual micro-interactions, hover effects, and loading transitions that provide responsive feedback to users.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'E-Commerce Interface Design', 
    desc: 'High-converting digital store layouts with clear visual pricing, simplified product cards, and frictionless checkout UI.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Dark & Light Mode Theme Systems', 
    desc: 'Carefully calibrated dual-theme color schemes engineered for optimal visual contrast and reduced eye strain.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Design System Governance & Audits', 
    desc: 'Ongoing UI pattern auditing, component library maintenance, and developer handoff documentation.', 
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

// ==================== DigitalWhyChoose Component (Updated for UI Design Services) ====================
const benefits = [
  'Visually compelling interfaces aligned with brand identity.',
  'Pixel-perfect Figma design systems for rapid development.',
  'Strict compliance with WCAG color contrast standards.',
  'Responsive layouts optimized for all viewport dimensions.',
  'Seamless collaboration between designers and frontend developers.',
  'Clear visual hierarchy guiding users effortlessly to conversions.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for UI Design?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          First impressions in digital spaces form in milliseconds. If an interface feels dated, visually disjointed, or difficult to scan, users immediately doubt the legitimacy of the product and leave for a competitor.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, our visual designers combine artistic mastery with ergonomic design principles. We create interfaces that captivate user attention while simplifying task completion, delivering polished visual assets and comprehensive component systems that make your developers' lives easier.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              The Value We Bring to Your Project
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
              alt="User Interface UI Design Workflow Layout - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for UI Design Services) ====================
const processSteps = [
  { 
    title: 'Brand & Aesthetic Discovery', 
    desc: 'We analyze brand guidelines, competitor aesthetics, typography choices, and target user expectations.' 
  },
  { 
    title: 'Moodboarding & Style Definition', 
    desc: 'We curate visual references, establish primary color palettes, define typography pairings, and align on visual tone.' 
  },
  { 
    title: 'Component Architecture', 
    desc: 'We construct core UI building blocks—buttons, input fields, cards, and modal dialogs—within structured auto-layout frames.' 
  },
  { 
    title: 'High-Fidelity Screen Design', 
    desc: 'We assemble complete screen templates, dashboards, and responsive variants across desktop, tablet, and mobile formats.' 
  },
  { 
    title: 'Interactive State Modeling', 
    desc: 'We define hover, active, disabled, focused, and loading states, integrating subtle micro-animations for feedback.' 
  },
  { 
    title: 'Design Token Export & Handoff', 
    desc: 'We organize complete Figma files with inspectable tokens, asset exports, and developer style guides.' 
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

// ==================== DigitalIndustries Component (Updated for UI Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
  'Finance & Accounting',
  'Startups & Enterprises',
  'SaaS & Technology Platforms',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Web UI Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Management System UI Design - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education and LMS Portal UI Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Corporate Enterprise Software User Interface - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Finance and Accounting Application UI Design - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Top User Interface (UI) Design Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, your dedicated <strong>user interface design company</strong> delivering bespoke, conversion-oriented UI design services. We craft visually stunning and technically sound interfaces that empower web, mobile, and software applications to captivate audiences and inspire user trust.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Engineering Aesthetic Clarity and Intuitive Visual Interaction
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            User interface design is not merely decoration; it is the visual language through which your users interact with your business. Our UI designers combine artistic creativity with mathematical layout grids, clear visual hierarchy, and WCAG accessibility compliance, ensuring every button, card, and dashboard widget serves a distinct user goal.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Pixel-Perfect Visual Hierarchy</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Guide user attention naturally toward high-value actions with strategic contrast, balanced spacing, and purposeful typography.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Scalable Figma Design Systems</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Unified component libraries that keep your branding consistent across products while dramatically reducing engineering build time.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Multi-Platform Responsiveness</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Interfaces specifically tailored to touch navigation on smartphones, tablet aspect ratios, and ultra-wide desktop monitors.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Accessibility &amp; WCAG Compliance</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Calibrated color palettes and legible font sizing ensuring all users, regardless of visual ability, navigate comfortably.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for UI Design?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Collaborating with Gatecode Technologies pairs your project with seasoned interface specialists:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Figma Auto-Layout Prowess:</strong> Clean design files structured with auto-layouts, variants, and design tokens for swift engineering.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete Asset Deliverables:</strong> Scalable vector graphics, iconography, typography guides, and interactive prototypes.</li>
            <li style={{ marginBottom: '10px' }}><strong>Continuous Design Governance:</strong> Post-delivery design oversight ensuring frontend developers match design specs exactly.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const UIDesignServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/ui-ux-design' },
      { '@type': 'ListItem', position: 3, name: 'UI Design', item: 'https://gatecode.in/services/ui-ux-design/ui-design' },
    ],
  };

  const uiServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'User Interface (UI) Design Services',
    name: 'UI Design Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Specialized UI design agency in India crafting responsive web UI, mobile app interfaces, SaaS dashboards, and design systems.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a User Interface (UI) designer do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A UI designer focuses on the visual presentation and interactive elements of a digital product. This includes creating typography systems, color schemes, buttons, icons, responsive grids, and design systems that ensure your application is visually compelling and effortless to navigate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you create responsive UI designs for both web and mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Every interface we design is created with responsiveness in mind. We provide complete layout variants for mobile, tablet, laptop, and large desktop screens, ensuring visual harmony and usability across every viewport.',
        },
      },
      {
        '@type': 'Question',
        name: 'What deliverables will we receive at the end of the UI design phase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will receive fully organized Figma files with auto-layouts, custom component variants, design tokens (colors, typography, spacing), exportable SVG/PNG assets, and interactive clickable prototypes ready for developer inspection.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you redesign our existing application interface to make it modern?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We frequently redesign legacy software, web portals, and mobile apps. We analyze your current usability issues, modernize your visual branding, and engineer a contemporary interface that improves engagement and conversion metrics.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(uiServiceSchema) }}
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
        subtitle="Explore answers to essential questions regarding custom UI design, responsive interfaces, visual revamps, and design systems."
        items={uiDesignFaqs}
      />
    </div>
  );
};

export default UIDesignServicesPage;

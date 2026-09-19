"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { uiUxDesignFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for UI/UX Design Services) ====================
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
            UI/UX<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We craft intuitive, conversion-focused user interfaces and research-driven digital experiences that reduce friction, captivate users, and elevate brand loyalty.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for UI/UX Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we understand that superior digital product design is a balance of human behavioral psychology, visual elegance, and commercial strategy. A visually striking interface fails if users struggle to complete their tasks, while a functional system with poor aesthetics fails to inspire confidence. We bridge this gap by designing user-centric interfaces rooted in empirical research.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          From enterprise dashboards, fintech portals, and mobile applications to high-converting consumer platforms, our multidisciplinary design team transforms complex operational workflows into natural, effortless interactions. We construct modular design systems, adhere to WCAG accessibility guidelines, and provide pixel-perfect Figma documentation, ensuring a seamless bridge between design and full-stack development.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UI/UX Design Services) ====================
const services = [
  { 
    title: 'User Interface (UI) Design', 
    desc: 'Visually refined, pixel-perfect interfaces designed with balanced typography, harmonious palettes, and modern layout aesthetics.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'User Experience (UX) Architecture', 
    desc: 'Research-backed user journey mapping, information architecture, and behavioral flows engineered to eliminate user friction.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Interactive Wireframing & Prototyping', 
    desc: 'Rapid clickable prototypes in Figma that visualize complex application logic, screen transitions, and micro-interactions.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Web Application & SaaS UI/UX', 
    desc: 'Intuitive product interfaces designed for dense data handling, modular dashboards, and effortless multi-step workflows.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Mobile App UI/UX Design', 
    desc: 'Touch-optimized mobile journeys engineered for natural thumb navigation, fluid swipe gestures, and device responsiveness.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Enterprise Design Systems', 
    desc: 'Scalable Figma component libraries with unified tokens, typography rules, and interactive states for rapid engineering handoff.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Usability Auditing & Heuristic Reviews', 
    desc: 'Data-driven usability evaluations, heat map reviews, and user feedback analysis to uncover drop-off points.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Design System Maintenance & Evolution', 
    desc: 'Continuous component updates, accessibility compliance checks (WCAG 2.1), and design-to-code alignment.', 
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
        <h2 className="dm-section-title">Our UI/UX Design Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for UI/UX Design Services) ====================
const benefits = [
  'Intuitive user journeys designed to maximize conversion rates.',
  'Comprehensive Figma design systems for rapid developer handoff.',
  'Strict adherence to WCAG 2.1 accessibility standards.',
  'Data-driven user research eliminating guesswork and friction.',
  'Flawless responsiveness across mobile, tablet, and desktop screens.',
  'Transparent iterative sprints with interactive clickable prototypes.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for UI/UX Design?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          A poorly structured interface silently drives potential customers away. When navigation is cluttered, calls-to-action are obscured, or page layouts are disorienting, bounce rates surge and customer acquisition costs rise unnecessarily.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, our design approach solves real usability challenges. By conducting in-depth user persona research, crafting detailed wireframes, and validating interactive prototypes with real user testing, we ensure every screen guides visitors effortlessly toward conversion, strengthening brand perception and accelerating adoption.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits We Deliver
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
              alt="User Centric UI UX Design Workflow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for UI/UX Design Services) ====================
const processSteps = [
  { 
    title: 'Discovery & User Persona Modeling', 
    desc: 'We uncover stakeholder requirements, conduct demographic research, and define core user personas and success metrics.' 
  },
  { 
    title: 'Information Architecture & User Flows', 
    desc: 'We structure logical navigation trees, task workflows, and content hierarchies to ensure effortless exploration.' 
  },
  { 
    title: 'Low-Fidelity Wireframing', 
    desc: 'We create functional wireframe layouts to validate content placement, information grouping, and core user actions early.' 
  },
  { 
    title: 'High-Fidelity UI & Design Systems', 
    desc: 'We craft polished visual designs, establishing custom color tokens, typography scales, and component libraries in Figma.' 
  },
  { 
    title: 'Prototyping & Usability Testing', 
    desc: 'We link clickable prototypes to conduct user testing sessions, gather feedback, and refine interaction states.' 
  },
  { 
    title: 'Design Handoff & Developer Collaboration', 
    desc: 'We provide clean design specifications, exportable CSS tokens, and ongoing collaboration during the build phase.' 
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

// ==================== DigitalIndustries Component (Updated for UI/UX Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurant & Hospitality',
  'Healthcare & Wellness',
  'Education & E-Learning',
  'Corporate Businesses',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail UI UX Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare and Medical Systems UI UX Design - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Real Estate Platforms UI UX Design - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics and Shipping Systems User Interface - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education and E-Learning User Experience Design - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Premier UI UX Design Agency in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a premier <strong>ui ux design agency in india</strong> and trusted <strong>ui ux design company</strong>. As a leading <strong>ui ux agency</strong>, our dedicated team of senior <strong>ui ux designer</strong> specialists crafts user-centric digital products, delivering high-performance <strong>ui ux design services</strong> and intuitive <strong>ui and ux design</strong> architectures that boost engagement and streamline customer journeys.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Wireframing, Prototyping & Design System Development Services
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Transforming product ideas into market-ready applications requires seamless visual hierarchy and user research. Recognizing <strong>what is ui ux design</strong> excellence, we specialize in <strong>wireframing and prototyping</strong> alongside enterprise-grade <strong>design system development services</strong> to ensure consistent typography, component libraries, and visual guidelines across all user touchpoints.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Mobile App & Web UI UX Design</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Partner with an experienced <strong>mobile app ui ux design company</strong>. We build responsive web platforms and iOS/Android app interfaces centered around <strong>ui and ux design</strong> best practices.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Wireframing & Prototyping</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Visualize user flows and validate product UX early with high-fidelity <strong>wireframing and prototyping</strong>, interactive Figma models, and clickable user testing skeletons.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Design System Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Scale product development with custom <strong>design system development services</strong> from a <strong>best ui ux agency</strong>, creating reusable UI tokens, UI kits, and design specs.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode as Your Preferred UI UX Design Company?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with an established <strong>ui ux design agency</strong> guarantees frictionless product adoption and higher conversion rates. Choosing Gatecode Technologies gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Human-Centric Research:</strong> Deep user persona mapping, heat map analysis, and usability audit reviews.</li>
            <li style={{ marginBottom: '10px' }}><strong>Pixel-Perfect Visual UI:</strong> Modern, accessible, and clean user interface components tailored to your brand.</li>
            <li style={{ marginBottom: '10px' }}><strong>Developer-Handshake Ready:</strong> Clean Figma design tokens, CSS specs, and component documentation for engineering teams.</li>
          </ul>

          {/* UI Design Section */}
          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '36px', marginBottom: '14px' }}>
            User Interface (UI) Design Services
          </h3>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Creating an effective{' '}
            <Link href="/services/ui-ux-design/ui-design" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>
              user interface design
            </Link>{' '}
            requires more than an attractive visual appearance. At Gatecode Technologies, we design interfaces that combine visual clarity, usability, accessibility, and brand consistency to create digital products that are easy to understand and interact with. Our UI design process considers the specific requirements of your website, mobile application, web application, or enterprise product before defining the visual direction.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Our UI designers work on essential interface elements such as typography, color usage, spacing, layouts, navigation, buttons, forms, icons, cards, dashboards, and reusable components. We create responsive interface designs that maintain consistency across different screen sizes and devices while following established design principles and platform-specific considerations.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '16px' }}>
            We also focus on developing consistent UI design systems that help businesses maintain a unified visual experience as their digital products grow. By combining structured components, clear visual hierarchy, responsive layouts, and accessibility-conscious design practices, we help create interfaces that are visually consistent, functional, and easier for users to navigate.
          </p>

          <p style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Our UI Design Approach Includes:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '28px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '8px' }}>Responsive website and web application interface design</li>
            <li style={{ marginBottom: '8px' }}>Mobile app UI design for iOS and Android</li>
            <li style={{ marginBottom: '8px' }}>Dashboard and enterprise application UI</li>
            <li style={{ marginBottom: '8px' }}>Typography, spacing, colors, and visual hierarchy</li>
            <li style={{ marginBottom: '8px' }}>Reusable UI components and design systems</li>
            <li style={{ marginBottom: '8px' }}>Accessibility-conscious and user-friendly interface design</li>
          </ul>

          {/* UX Design Section */}
          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '8px', marginBottom: '14px' }}>
            User Experience (UX) Design Services
          </h3>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A strong{' '}
            <Link href="/services/ui-ux-design/ux-design" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>
              user experience design
            </Link>{' '}
            focuses on how people interact with a digital product and how easily they can accomplish their goals. At Gatecode Technologies, our UX design process is centered on understanding user needs, business objectives, content structure, and interaction patterns before defining the experience of the product.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Our UX designers work through user flows, information architecture, navigation structures, wireframes, prototypes, and interaction patterns to identify potential usability issues early in the design process. We use these design methods to help teams understand how users may move through a website or application and where the experience can be simplified or improved.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Depending on the project requirements, UX planning can include user research, user personas, journey mapping, information architecture, task flows, wireframing, interactive prototyping, and usability evaluation. This structured approach helps reduce unnecessary complexity and provides a clearer foundation for developers before implementation begins.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '16px' }}>
            We design UX experiences with both user expectations and business requirements in mind, helping create digital products that are intuitive, accessible, efficient, and easier to use across different devices and user scenarios.
          </p>

          <p style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>Our UX Design Approach Includes:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '8px' }}>User research and requirement analysis</li>
            <li style={{ marginBottom: '8px' }}>User flows and customer journey mapping</li>
            <li style={{ marginBottom: '8px' }}>Information architecture and content structure</li>
            <li style={{ marginBottom: '8px' }}>Wireframing and interactive prototyping</li>
            <li style={{ marginBottom: '8px' }}>Usability-focused interaction design</li>
            <li style={{ marginBottom: '8px' }}>UX evaluation and design improvements</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const UIUXDesignServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/ui-ux-design' },
      { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: 'https://gatecode.in/services/ui-ux-design' },
    ],
  };

  const uiUxSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'UI UX Design Services',
    name: 'UI UX Design Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Leading UI UX design company in India providing user research & analysis, wireframing and prototyping, mobile app UI UX design, and design system development services.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between UI and UX design, and why do I need both?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UX (User Experience) focuses on the logical flow, usability, and how a user navigates through your platform to solve their problems efficiently. UI (User Interface) focuses on the visual elements, such as colors, typography, and interactive components. At Gatecode, we combine both to create digital products that are not only visually stunning but also highly intuitive and easy to use.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does good UI/UX design impact my business and conversion rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A well-researched UI/UX design directly impacts your bottom line. By providing a seamless, frustration-free journey, you reduce website bounce rates and keep users engaged longer. An intuitive design builds immediate trust with your audience, which ultimately leads to higher conversion rates and increased sales for your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer UI/UX redesign services for existing websites or applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely! If your current website or mobile app looks outdated, has a high drop-off rate, or is difficult to navigate, our team can help. We conduct a comprehensive UX audit of your existing platform to identify friction points, and then completely revamp the interface to modernize the look and significantly improve usability.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your process for designing a custom UI/UX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow a highly structured, user-centric design process. It begins with requirement analysis and user research. We then create wireframes and interactive prototypes to map out the user journey. Once the core structure is approved, we design high-fidelity visual interfaces and conduct rigorous usability testing before handing the assets over to the development team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can your design team collaborate with our internal developers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we frequently work alongside internal engineering teams. We deliver clean, highly organized design files, comprehensive design systems, and clickable prototypes. Our UI/UX designers ensure clear communication with developers so that the final coded product is a pixel-perfect match to the original design.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(uiUxSchema) }}
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
        subtitle="Explore answers to essential questions regarding our human-centric UI/UX design, wireframing, design systems, and usability audits."
        items={uiUxDesignFaqs}
      />
    </div>
  );
};

export default UIUXDesignServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { uxDesignFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for UX Design Services) ====================
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
            UX (USER EXPERIENCE)<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We architect frictionless, intuitive user experiences through behavioral research, cognitive journey mapping, and usability testing to turn casual visitors into loyal brand advocates.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for UX Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our user experience (UX) design methodology is rooted in cognitive ergonomics, behavioral research, and commercial strategy. A truly successful digital product doesn't just look appealing—it feels completely effortless to navigate, guiding users to their goals with zero cognitive fatigue.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          We dive deep into target user mental models, operational pain points, and task complexities. From structured user interviews and card sorting to comprehensive user journey mapping and iterative usability testing, we systematically eradicate friction points. The result is an intuitive digital architecture that drives higher task completion, builds customer trust, and elevates overall product retention.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UX Design Services) ====================
const services = [
  { 
    title: 'User Persona & Behavioral Research', 
    desc: 'Deep qualitative and quantitative user interviews, empathy mapping, and behavioral analysis to understand motivations.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Information Architecture & Navigation', 
    desc: 'Structuring content categories, taxonomies, and clear hierarchical pathways that make complex data immediately findable.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'User Journey & Task Flow Mapping', 
    desc: 'Defining end-to-end user paths, minimizing friction points, and optimizing conversion funnels across multi-step flows.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Low-Fidelity Wireframe Prototyping', 
    desc: 'Rapid structural wireframes that validate screen hierarchy, content priorities, and functional interactions before visual design.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Usability Testing & Feedback Analysis', 
    desc: 'Moderated user testing, think-aloud protocols, and heat map analysis to validate prototypes with real target users.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Comprehensive UX Auditing', 
    desc: 'Evaluating existing digital products against Nielsen Norman heuristics to identify cognitive hurdles and usability defects.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Conversion Rate Optimization (CRO) UX', 
    desc: 'Strategic layout refinements and checkout flow simplifications engineered to decrease bounce rates and increase sales.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Inclusive & Accessible UX Engineering', 
    desc: 'Designing accessible digital journeys compliant with WCAG 2.1 guidelines, screen reader navigation, and keyboard controls.', 
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

// ==================== DigitalWhyChoose Component (Updated for UX Design Services) ====================
const benefits = [
  'Measurable increase in user task completion rates.',
  'Eradication of confusing friction points across conversion funnels.',
  'Data-backed design decisions rooted in actual user testing.',
  'Intuitive information architecture that reduces customer support tickets.',
  'Universal accessibility adhering to international WCAG standards.',
  'Comprehensive UX specifications ready for development execution.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for UX Design?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          The most effective user experience is invisible—it empowers users to complete their objectives effortlessly without second-guessing where to click. When digital products rely on assumptions instead of research, users experience friction, abandon shopping carts, and leave negative feedback.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we replace guesswork with empirical research. By combining behavioral psychology, ergonomic heuristics, and continuous usability testing, we design streamlined digital pathways that turn complex user requirements into delightful, intuitive experiences that drive sustained business growth.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              The Real Value We Bring to Your Product
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
              alt="User Experience UX Design Journey Workflow - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for UX Design Services) ====================
const processSteps = [
  { 
    title: 'Empathize & Problem Scoping', 
    desc: 'We conduct stakeholder interviews, survey target users, and analyze operational hurdles to define core problem statements.' 
  },
  { 
    title: 'Research Synthesis & Persona Building', 
    desc: 'We transform user data into actionable empathy maps, user journey charts, and prioritized feature backlogs.' 
  },
  { 
    title: 'IA & Card Sorting', 
    desc: 'We run open and closed card sorting exercises to construct intuitive navigation structures and taxonomy trees.' 
  },
  { 
    title: 'Wireframing & Interaction Design', 
    desc: 'We design low-fidelity structural blueprints and interactive wireframes mapping every decision fork in the user journey.' 
  },
  { 
    title: 'Empirical Usability Testing', 
    desc: 'We test interactive prototypes with real users, tracking task success rates, time-on-task metrics, and subjective feedback.' 
  },
  { 
    title: 'Iteration & Technical Specification', 
    desc: 'We refine workflows based on usability findings and provide comprehensive UX design documentation to engineering teams.' 
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

// ==================== DigitalIndustries Component (Updated for UX Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & E-Learning',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail UX Architecture Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Interface Usability Mapping - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Education and E-Learning Platform UX - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS and Technology Products UX Strategy - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Finance and Accounting System User Flows - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Leading User Experience (UX) Design Agency in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, an established <strong>user experience design agency</strong> delivering comprehensive, data-driven UX design services. We partner with product managers, tech founders, and enterprise organizations to transform complex digital workflows into seamless, intuitive journeys.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Engineering Intuitive Experiences Through Scientific User Empathy
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            The greatest user experience is one where the interface fades into the background, allowing users to achieve their goals with zero cognitive friction. Our UX strategists and researchers dive into cognitive psychology, interaction design, and usability metrics to ensure your software, mobile application, or web platform delivers maximum utility and effortless delight.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Behavioral Persona Research</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Ground every screen in authentic user needs, behavioral drivers, and pain points uncovered through empirical research.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Streamlined Information Architecture</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Structure dense data, navigation menus, and content trees so users find critical information in three clicks or less.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Rigorous Usability Testing</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Validate product concepts with real target users before engineering begins, eliminating expensive post-launch code rewrites.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Conversion-Focused Journeys</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Systematically remove friction, reduce input fatigue, and guide users smoothly toward conversion milestones.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Choose Gatecode Technologies for UX Architecture?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with Gatecode Technologies ensures your digital product is built upon rigorous human-centered methodologies:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>HCI-Trained Designers:</strong> Specialized expertise in human-computer interaction, cognitive load reduction, and usability principles.</li>
            <li style={{ marginBottom: '10px' }}><strong>Transparent Usability Reports:</strong> Concrete metrics on task completion rates, session recordings, and empirical recommendations.</li>
            <li style={{ marginBottom: '10px' }}><strong>Seamless Developer Handoff:</strong> Comprehensive user flow maps, wireframe blueprints, and interactive prototypes for engineering squads.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const UXDesignServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/ui-ux-design' },
      { '@type': 'ListItem', position: 3, name: 'UX Design', item: 'https://gatecode.in/services/ui-ux-design/ux-design' },
    ],
  };

  const uxServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'User Experience (UX) Design Services',
    name: 'UX Design Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Expert UX design agency in India delivering user research, journey mapping, wireframing, heuristic evaluation, and usability testing.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the role of a UX designer in product development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A UX designer focuses on the entire journey a user takes when interacting with a digital product. Their goal is to make the experience intuitive, efficient, and enjoyable by researching user needs, structuring information architecture, designing user flows, and conducting usability testing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does investing in UX design increase business revenue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Strategic UX design directly drives ROI by eliminating friction points in conversion funnels. By making navigation intuitive and checkout processes simple, businesses reduce drop-offs, lower customer support overhead, and dramatically increase user retention and lifetime value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a UX audit and full UX redesign?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A UX audit analyzes an existing product against industry heuristics, analytics data, and user feedback to identify specific usability bottlenecks and quick wins. A full UX redesign reimagines the entire user journey, information architecture, and core workflows from the ground up.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you conduct usability testing for our product?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We test clickable prototypes or live applications with real users matching your target audience demographic. We give them realistic tasks to complete, record their interactions and think-aloud thoughts, and analyze completion rates to identify areas for refinement.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(uxServiceSchema) }}
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
        subtitle="Explore answers to essential questions regarding user experience strategy, usability audits, information architecture, and user journey optimization."
        items={uxDesignFaqs}
      />
    </div>
  );
};

export default UXDesignServicesPage;

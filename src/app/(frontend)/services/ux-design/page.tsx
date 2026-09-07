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
            Creating seamless, intuitive and meaningful user experiences that drive<br />
            engagement and satisfaction.
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
          At Gatecode Technologies Pvt. Ltd., we know that a truly successful digital product doesn&apos;t just function well—it feels completely effortless to the people using it. Our UX design philosophy goes far beyond basic wireframes; we dive deep into user behavior, cognitive psychology, and your specific market needs. From initial research and strategic user-journey mapping to rigorous usability testing and optimization, we partner with you to eliminate friction. We transform complex workflows into simple, highly engaging digital experiences that not only delight your customers but directly drive your business goals forward.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UX Design Services) ====================
const services = [
  { title: 'User Research & Analysis', desc: 'Understanding user behavior, needs, and pain points through detailed research and insights.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Information Architecture', desc: 'Structuring content and navigation for easy access and better usability.', color: '#fbff06', text: '#000000' },
  { title: 'Wireframing & User Flows', desc: 'Designing wireframes and user journeys to map out smooth user interactions.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Prototyping & Interaction Design', desc: 'Creating interactive prototypes to visualize and test user experiences.', color: '#fbff06', text: '#000000' },
  { title: 'Usability Testing', desc: 'Evaluating designs with real users to improve usability and performance.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UX Audit & Optimization', desc: 'Analyzing existing products and improving user experience for better engagement.', color: '#fbff06', text: '#000000' },
  { title: 'Conversion Optimization', desc: 'Enhancing user journeys to improve conversions and achieve business objectives.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Accessibility & User-Friendly Design', desc: 'Ensuring designs are inclusive, accessible, and easy to use for all users.', color: '#fbff06', text: '#000000' },
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
  'Higher Conversions & ROI',
  'Data-Backed Strategy',
  'Zero-Friction Interactions',
  'Intuitive Navigation',
  'Delightful User Journeys',
  'Peak Product Efficiency',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for UX Design?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We believe that the best User Experience (UX) is invisible—it simply feels natural. Your users deserve a digital journey that is effortless, and your business deserves a product that consistently drives results. We don&apos;t rely on guesswork; our UX process is deeply rooted in behavioral research, strategic design thinking, and real empathy for your audience. We partner with you to bridge the gap between what your users need and what your business wants to achieve. The result? Seamless, intuitive solutions that turn user frustration into lasting loyalty.
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
  { title: 'Research & Discovery', desc: 'Understanding users, business goals, and market trends.' },
  { title: 'Strategy & Planning', desc: 'Defining user journeys, workflows, and experience strategy.' },
  { title: 'Wireframing & Prototyping', desc: 'Creating layouts and interactive prototypes.' },
  { title: 'Testing & Validation', desc: 'Conducting usability testing and gathering feedback.' },
  { title: 'Optimization & Improvement', desc: 'Refining experiences for better performance and engagement.' },
  { title: 'Final Delivery', desc: 'Providing UX documentation and implementation support.' },
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
            <Image src="/images/5.webp" alt="Corporate Business Applications UX Layout - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
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
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/ux-design' },
      { '@type': 'ListItem', position: 3, name: 'UX Design', item: 'https://gatecode.in/services/ux-design' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is UX (User Experience) design, and why is it critical for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "UX design focuses on the overall experience and satisfaction a user has while interacting with your digital product. It ensures your website or application is logical, easy to navigate, and efficiently solves the user's problem. Good UX is critical because it reduces friction, minimizes bounce rates, and directly boosts customer retention and conversions.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is your process for creating a custom UX design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our UX design process is deeply analytical and user-centric. We start with comprehensive user research and requirement analysis, followed by creating user personas and journey maps. We then develop wireframes and interactive prototypes, allowing us to map out the perfect structural flow before any visual UI design or coding begins.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does UX design differ from UI design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While UI (User Interface) focuses on the visual aesthetics like colors, buttons, and typography, UX (User Experience) is entirely about the underlying structural logic and functionality. UX ensures the platform is intuitive and easy to navigate, while UI ensures it looks premium. We expertly integrate both to deliver a flawless digital product.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you improve the user experience (UX) of our existing website or app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. If your current platform suffers from high drop-off rates, low sales, or poor user feedback, we can perform an in-depth UX audit. We identify navigation bottlenecks and usability issues, and then restructure the user journey and wireframes to drastically improve overall performance and user engagement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you conduct usability testing during the UX design phase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, usability testing is a core component of our UX strategy. Before finalizing any structure, we test interactive prototypes to gather real data on how users naturally navigate the platform. This allows us to identify and eliminate friction points early on, ensuring the final product is highly intuitive from day one.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ContactSection />
      <FAQSection
        eyebrow="FAQS"
        titleLine1="FREQUENTLY ASKED"
        titleHighlight="QUESTIONS"
        subtitle="Explore answers to essential questions regarding our analytical UX research, wireframing, usability audits, and interactive prototyping."
        items={uxDesignFaqs}
      />
    </div>
  );
};

export default UXDesignServicesPage;

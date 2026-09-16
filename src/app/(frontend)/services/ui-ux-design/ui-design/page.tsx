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
            Designing visually engaging and intuitive interfaces that enhance user experience<br />
            and strengthen your brand identity.
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
          At Gatecode Technologies Pvt. Ltd., we believe your digital presence should be as intuitive as it is beautiful. We go beyond basic aesthetics to craft user-centric UI designs where absolute clarity meets flawless functionality. Whether we are shaping a dynamic website, an engaging mobile app, or a complex software platform, our expert team focuses on eliminating user friction and designing smooth, meaningful interactions. By perfectly aligning our creative precision with your unique brand identity, we deliver seamless digital experiences that not only captivate your audience but build immediate trust and drive real business results.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for UI Design Services) ====================
const services = [
  { title: 'Website UI Design', desc: 'Creative and responsive websites with an emphasis on user engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Mobile App UI Design', desc: 'Intuitive and modern app interfaces optimized for Android and iOS devices.', color: '#fbff06', text: '#000000' },
  { title: 'Dashboard & Admin Panel Design', desc: 'Clean and structured dashboards for easy data visualization and management.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Custom UI Design', desc: 'Tailor-made interfaces designed aligned with your business goals and user needs.', color: '#fbff06', text: '#000000' },
  { title: 'Wireframing & Prototyping', desc: 'Creating wireframes and interactive prototypes to visualize design concepts.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Design System Creation', desc: 'Consistent UI elements and style guides for scalable and uniform design.', color: '#fbff06', text: '#000000' },
  { title: 'Responsive Design', desc: 'Designs optimized for all screen sizes including desktops, tablets, and mobile devices.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'UI Redesign & Enhancement', desc: 'Improving existing interfaces for better usability and modern aesthetics.', color: '#fbff06', text: '#000000' },
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
  'Aesthetics with Purpose',
  'Frictionless Navigation',
  'Built for Growth',
  'Flawless on Every Screen',
  'Tailored to Your Goals',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Partner With Us for UI Design?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We understand that your website or app is often the first impression your business makes. That’s why we don't just focus on making things look &quot;pretty&quot;—we design intuitive, human-centered interfaces that actually drive business results. By blending bold creativity with proven usability principles, our team crafts digital spaces where your customers feel instantly comfortable. When you work with us, you aren’t just getting a design file; you’re investing in a strategic digital experience built to capture attention, keep users engaged, and support your long-term growth.
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
  { title: 'Requirement & User Research', desc: 'Understanding user needs, business goals, and design requirements.' },
  { title: 'Wireframing & Planning', desc: 'Creating layout structures and design concepts.' },
  { title: 'UI Design Creation', desc: 'Designing visually engaging and functional interfaces.' },
  { title: 'Review & Refinement', desc: 'Improving designs based on feedback.' },
  { title: 'Final Delivery', desc: 'Providing high-quality UI assets and designing guidelines.' },
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
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/ui-ux-design/ui-design' },
      { '@type': 'ListItem', position: 3, name: 'UI Design', item: 'https://gatecode.in/services/ui-ux-design/ui-design' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is UI (User Interface) design, and why does my business need it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UI design focuses on the visual and interactive elements of your digital product, including layouts, color schemes, typography, and buttons. A strong, modern UI is crucial because it creates a powerful first impression, builds brand credibility, and keeps users visually engaged with your website or mobile application.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you use pre-made templates for your UI designs, or is it fully custom?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deliver 100% custom UI designs and never rely on generic templates. Our expert design team crafts bespoke, highly aesthetic interfaces that perfectly align with your unique brand identity, ensuring your digital platform stands out from the competition.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure the UI design looks perfect on all devices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We strictly follow a responsive and mobile-first design approach. Our UI designers create adaptable layouts that scale seamlessly across desktop monitors, tablets, and smartphones, guaranteeing a pixel-perfect and engaging visual experience on any screen size.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you revamp the user interface of an existing website or legacy application?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, we specialize in UI modernization. If your current software looks outdated or fails to capture your audience's attention, we can conduct a complete visual overhaul. We will redesign the interface to give it a fresh, modern, and premium look without disrupting your backend architecture.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do your UI designers ensure a smooth handoff to the development team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We bridge the gap between design and development by creating comprehensive design systems and clear developer handoffs. We deliver highly organized design files, interactive prototypes, and detailed style guides so that engineers can translate our visual designs into pixel-perfect code without any guesswork.',
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
        subtitle="Explore answers to essential questions regarding custom UI design, responsive interfaces, visual revamps, and design systems."
        items={uiDesignFaqs}
      />
    </div>
  );
};

export default UIDesignServicesPage;

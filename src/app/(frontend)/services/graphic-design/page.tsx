"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== Section 1: Hero Section ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/graphic.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Creative Graphic Design Services That Communicate Value &amp; Strengthen Brand Identity
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we craft visually compelling design assets that define your brand and captivate your audience. Our graphic design services span custom logos, brand identity systems, social media creatives, marketing collateral, packaging, and digital visuals tailored for both print and online applications.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 2: Introduction Section ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          Visual communication is often the very first touchpoint a prospective customer has with your business. Before reading your copy or evaluating your pricing, audiences form an immediate impression based on the quality, coherence, and professional polish of your visual design.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., our creative design team blends artistic creativity with practical brand strategy. We focus on solving communication challenges through thoughtful typography, balanced color theory, and structured layout design, ensuring your marketing collateral stands out in crowded digital feeds and physical environments.
        </p>
        <p className="dm-about-text">
          Whether you are launching a new startup, updating established corporate branding, or needing ongoing design support for multi-channel marketing campaigns, we provide versatile graphic design solutions. Every asset is delivered in high-resolution vector and print-ready formats, tailored to resonate with your target market and foster lasting customer trust.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Graphic Design Services ====================
const services = [
  {
    title: 'Social Media Creative Design',
    desc: 'We design eye-catching posts, multi-slide carousels, and promotional ad creatives optimized for high engagement across all social platforms.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Logo Design & Brand Identity',
    desc: 'We craft unique vector logos, typography palettes, and comprehensive brand style guides that establish a memorable business presence.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Banner & Poster Design',
    desc: 'We design high-impact digital web banners, event posters, and roll-up displays that command immediate audience attention.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Corporate Brochures & Flyers',
    desc: 'We create informative, professionally structured brochures, sales decks, and promotional flyers that articulate your services clearly.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Business Cards & Stationery',
    desc: 'We produce refined business cards, letterheads, invoice templates, and corporate stationery that leave a polished impression.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Digital Advertising Creatives',
    desc: 'We design high-converting display banners and paid ad graphics formatted for Google Display, Meta Ads, and LinkedIn campaigns.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Product Packaging & Label Design',
    desc: 'We build shelf-ready packaging boxes, bottle labels, and pouch graphics that enhance product presentation and consumer trust.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Motion Graphics & Visual Content',
    desc: 'We produce dynamic 2D animations, logo stings, and kinetic typography that boost viewer engagement in digital video feeds.',
    color: '#fbff06',
    text: '#000000',
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
        <h2 className="dm-section-title">Our Graphic Design Services</h2>
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

// ==================== Section 4: Why Choose Us / Key Benefits ====================
const benefits = [
  'Original, custom-crafted visual assets tailored specifically to your brand identity',
  'Complete cross-channel design consistency spanning digital, social, and print media',
  'High-resolution vector source files, CMYK print packages, and web-ready exports',
  'Strategic layout hierarchy designed for fast comprehension and higher conversion',
  'Versatile creative expertise across branding, marketing collateral, and packaging',
  'Structured collaborative feedback workflows with reliable project turnaround times',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Graphic Design Services?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Great graphic design requires more than aesthetic software skills. It demands an understanding of your target customers, brand positioning, and the functional requirements of different display environments — from compact smartphone screens to large-format exhibition banners.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our visual designers combine thoughtful conceptualization with meticulous production standards, ensuring your brand presents a cohesive, professional image that inspires customer confidence.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits:
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
              alt="Professional Graphic Design and Visual Communication Workflow - Gatecode Technologies"
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

// ==================== Section 5: Marketing Process ====================
const processSteps = [
  {
    title: '1. Creative Brief & Discovery',
    desc: 'We review your business goals, target demographics, brand guidelines, and visual preferences to define the project scope.',
  },
  {
    title: '2. Concept Exploration & Moodboards',
    desc: 'We explore creative directions, color harmonies, and typography pairings, establishing a clear visual aesthetic upfront.',
  },
  {
    title: '3. Drafting & Design Execution',
    desc: 'Our graphic designers develop initial design drafts focusing on visual hierarchy, balance, and message clarity.',
  },
  {
    title: '4. Collaborative Review & Refinements',
    desc: 'We review draft designs with your team, implementing revisions and fine-tuning details to match your exact vision.',
  },
  {
    title: '5. Pre-Press & Technical Verification',
    desc: 'We ensure all files meet technical standards including color profiles (CMYK/RGB), bleeds, and appropriate export resolutions.',
  },
  {
    title: '6. Final Asset Delivery & Archiving',
    desc: 'We deliver organized asset packages with full vector source files (AI, EPS, SVG, PDF) and web formats ready for deployment.',
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
        <h2 className="dm-section-title">Our Graphic Design Process</h2>
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

// ==================== Industries Section ====================
const industries = [
  'E-Commerce & Retail',
  'Real Estate',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
  'Corporate Businesses',
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
            <Image src="/images/1.webp" alt="E-Commerce Visual Branding - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant Print and Digital Menus - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Business Stationery - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Course Brochure Design - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Healthcare Informative Posters - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Existing SeoContentSection (Optimized In-Place) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Creative Graphic Design Agency for Cohesive Brand Storytelling
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your trusted creative partner for bespoke graphic design, brand identity systems, and high-impact marketing visuals. We help growing businesses and established enterprises translate core ideas into visually captivating assets that command attention and foster customer trust.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Transforming Business Communication Through Thoughtful Visual Design
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Effective graphic design is more than decorative artwork; it is a strategic tool that structures information, clarifies value, and drives user action. Our experienced design team develops unified visual assets across digital platforms, advertising networks, packaging, and physical print mediums.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Logo Design &amp; Brand Systems</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Establish an enduring corporate identity with custom vector logos, balanced color palettes, typography standards, and usage manuals.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Social Media &amp; Ad Creatives</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Capture viewer attention in fast-scrolling feeds with high-contrast social graphics, carousel templates, and digital display banners.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Packaging &amp; Product Labels</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Elevate shelf presence with structural packaging graphics, die-cut box layouts, and retail product labels compliant with print standards.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Marketing Collateral &amp; Print</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Communicate complex offerings clearly through corporate brochures, presentation pitch decks, roll-up banners, and sales collateral.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Graphic Design?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Professional graphic design delivers compounding brand recognition and credibility. Working with our creative studio provides:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Strategic Brand Cohesion:</strong> Harmonious visual assets that ensure your brand looks consistent across web, mobile, and print.</li>
            <li style={{ marginBottom: '10px' }}><strong>Production-Grade Deliverables:</strong> Full access to layered source files, vectors, web-optimized formats, and print-ready proofs.</li>
            <li style={{ marginBottom: '10px' }}><strong>Dedicated Creative Collaboration:</strong> Direct communication with professional visual artists focused on your business objectives.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const GraphicDesignServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/graphic-design' },
      { '@type': 'ListItem', position: 3, name: 'Graphic Design', item: 'https://gatecode.in/services/graphic-design' },
    ],
  };

  const graphicDesignSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Graphic Design Services',
    name: 'Graphic Design Services Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional graphic design agency providing custom logo design, brand identity systems, social media graphics, corporate marketing collateral, and packaging design.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of graphic design services does Gatecode Technologies offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide end-to-end design solutions including logo and brand identity, social media creatives, print collateral, packaging design, banners, brochures, and digital ad graphics.',
        },
      },
      {
        '@type': 'Question',
        name: 'What file formats will I receive upon project completion?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will receive complete vector source files (AI, EPS, SVG, PDF) alongside high-resolution web formats (PNG, JPEG, WebP) and pre-press CMYK print files.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you create designs for both digital and print mediums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our team creates assets optimized for both digital displays (RGB, responsive dimensions) and commercial offset/digital printing (CMYK, bleeds, proper DPI).',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphicDesignSchema) }}
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
    </div>
  );
};

export default GraphicDesignServicesPage;

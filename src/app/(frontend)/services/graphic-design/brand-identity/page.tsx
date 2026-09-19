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
            Comprehensive Brand Identity Design Services That Build Instant Recognition
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we develop cohesive, enduring brand identity systems that set your business apart. Our brand identity services include custom logos, typography standards, color palettes, graphic motifs, stationery design, and comprehensive style guides that ensure complete consistency across every medium.
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
          Brand identity is the visual foundation of how the world experiences your company. It goes beyond an isolated logo mark to encompass the entire visual language — the specific fonts, color relationships, spacing rules, and imagery styles that make your brand immediately recognizable, even without a logo present.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we approach identity design with strategic rigor. We analyze your commercial positioning, audience expectations, and competitive landscape to build visual systems that project authority and authenticity. Every design decision is rooted in purpose, giving your business a coherent identity that builds trust over time.
        </p>
        <p className="dm-about-text">
          Whether you are launching a new enterprise or harmonizing fragmented visuals into a unified corporate brand, we provide complete brand guidelines. We equip your team with practical rules and ready-to-use digital assets, ensuring that every website, presentation, business card, and marketing campaign speaks with unified professionalism.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Brand Identity Services ====================
const services = [
  {
    title: 'Complete Visual Identity Systems',
    desc: 'We architect comprehensive brand design systems that establish visual harmony across all digital, print, and physical touchpoints.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Brand Color Palette & Harmony',
    desc: 'We curate tailored primary, secondary, and accent color palettes tested for web contrast, accessibility, and CMYK print fidelity.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Typography Selection & Hierarchy',
    desc: 'We select paired header and body typefaces that reinforce your brand tone while providing clear reading hierarchy across screens.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Brand Iconography & Graphic Motifs',
    desc: 'We design custom icon sets, background patterns, and graphic devices that add proprietary character to your brand collateral.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Corporate Stationery & Business Kits',
    desc: 'We design premium business cards, letterheads, presentation folders, envelopes, and email signatures ready for corporate use.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Brand Style Guide & Standards Book',
    desc: 'We compile comprehensive brand guidelines detailing logo usage, clear space, color values, and misuse examples for your team.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Digital Presentation & Pitch Decks',
    desc: 'We build reusable slide deck templates in PowerPoint and Google Slides aligned with your corporate visual standards.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Packaging & Merchandise Styling',
    desc: 'We apply your brand language to product packaging, apparel, and promotional merchandise for a cohesive customer experience.',
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
        <h2 className="dm-section-title">Our Brand Identity Design Services</h2>
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
  'Distinctive visual systems tailored to your market positioning and audience values',
  'Unified typography, color formulas, and graphic assets for consistent cross-channel use',
  'Clear brand manuals that eliminate guesswork for internal marketing and design teams',
  'Tested color standards ensuring exact color matching across web and physical print',
  'Production-ready vector files and organized digital asset folders ready for deployment',
  'Timeless design execution focused on enduring brand value rather than short-lived trends',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Brand Identity Design?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          A disjointed visual presence creates hesitation in prospective buyers. Establishing an organized, cohesive brand identity gives your company instant authority and ensures every interaction leaves a memorable, professional impression.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our identity designers build practical, scalable brand toolkits. We don’t just create artwork — we establish clear rules and assets that empower your business to look polished across every customer touchpoint.
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
              alt="Brand Identity Design and Visual System Architecture - Gatecode Technologies"
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
    title: '1. Brand Discovery & Strategy',
    desc: 'We explore your business mission, customer personas, industry positioning, and core values to set clear design goals.',
  },
  {
    title: '2. Visual Moodboards & Themes',
    desc: 'We assemble visual reference boards exploring color directions, typography pairings, and textural aesthetics for approval.',
  },
  {
    title: '3. Core Identity Exploration',
    desc: 'Our designers develop primary logo marks, color palettes, and typographic hierarchies tested across various mockups.',
  },
  {
    title: '4. System Expansion & Collateral',
    desc: 'We extend the approved visual language across stationery, digital decks, social templates, and marketing materials.',
  },
  {
    title: '5. Style Guide Documentation',
    desc: 'We write a comprehensive brand standards book covering clear space, size minimums, color codes (RGB/CMYK/HEX/Pantone), and rules.',
  },
  {
    title: '6. Master Asset Handover',
    desc: 'We deliver structured digital folders with all vector source files, ready-to-use fonts, templates, and export formats.',
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
        <h2 className="dm-section-title">Our Brand Identity Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Brand Identity Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Corporate Identity - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Clinic Brand Visuals - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Institution Brand Guidelines - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Hospitality Brand Collateral - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Premier Brand Identity Design Agency for Cohesive Business Authority
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your creative partner for strategic brand identity design, visual architecture, and corporate rebranding. We help ambitious companies establish distinct, memorable identities that command respect, foster loyalty, and communicate lasting quality.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Designing Enduring Visual Systems Built for Multi-Platform Consistency
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Modern brands must perform consistently across smartphones, websites, physical packaging, corporate documents, and large-format signage. Our brand identity methodology ensures every graphic component is engineered for visual clarity, versatility, and emotional resonance.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Logo &amp; Symbol Systems</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Develop versatile vector logo marks with primary, secondary, and responsive badge variations suited for any application.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Color &amp; Typography Rules</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Establish balanced color systems and font hierarchies that guarantee readable, accessible, and on-brand typography everywhere.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Stationery &amp; Collateral Kits</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Project corporate polish with designed business cards, presentation templates, invoice designs, and official stationery.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Comprehensive Brand Manuals</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Provide internal teams and external partners with practical style guides detailing color codes, clear space, and asset usage.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Brand Identity?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A unified identity sets the standard for all future marketing. Collaborating with our identity studio gives your brand:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Strategic Grounding:</strong> Visuals created to support your actual commercial positioning and customer psychology.</li>
            <li style={{ marginBottom: '10px' }}><strong>Comprehensive Deliverables:</strong> Complete vector source assets, Pantone/CMYK/RGB codes, and ready-to-use template files.</li>
            <li style={{ marginBottom: '10px' }}><strong>Long-Term Scalability:</strong> Flexible design systems built to grow as your business expands into new markets and product categories.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BrandIdentityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/graphic-design' },
      { '@type': 'ListItem', position: 3, name: 'Brand Identity', item: 'https://gatecode.in/services/graphic-design/brand-identity' },
    ],
  };

  const identityServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Brand Identity Design Services',
    name: 'Brand Identity Design Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional brand identity design agency offering comprehensive corporate visual identity systems, logo guidelines, typography standards, color palettes, and stationery kits.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in a complete brand identity design package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A complete package includes primary and secondary logos, brand color systems (Pantone/CMYK/RGB/HEX), font pairings, iconography, stationery templates, and a brand style manual.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical brand identity project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most comprehensive brand identity design projects take between 2 to 4 weeks, including research, concept exploration, client feedback cycles, and final asset packaging.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(identityServiceSchema) }}
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

export default BrandIdentityPage;

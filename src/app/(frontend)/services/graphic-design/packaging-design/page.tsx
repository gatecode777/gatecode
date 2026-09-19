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
            Strategic Packaging Design Services That Captivate Buyers on Retail Shelves
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we design eye-catching, commercially viable product packaging and custom labels that elevate shelf appeal. Our packaging design services blend structural dieline planning, consumer psychology, regulatory compliance, and print-ready production files to turn products into top sellers.
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
          Packaging design is your product’s final salesperson on the retail shelf and the tactile introduction during an e-commerce unboxing moment. When consumers face competing products in retail aisles or online marketplaces, distinctive packaging communicates quality, establishes credibility, and triggers the decision to purchase.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we balance creative aesthetics with practical manufacturing requirements. We work closely with manufacturers and printers to ensure every dieline, fold, barcode placement, ingredient panel, and print finish (such as spot UV, foil stamping, or embossing) aligns with technical standards.
        </p>
        <p className="dm-about-text">
          Whether you produce consumer packaged goods (CPG), cosmetics, food and beverage items, electronics, or luxury retail products, our packaging team creates custom solutions. We deliver complete print-ready mechanical vector files, helping your products stand out on shelves and create lasting brand loyalty.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Packaging Design Services ====================
const services = [
  {
    title: 'Retail Box & Carton Packaging',
    desc: 'We design structural box packaging, tuck-end cartons, and sleeves that protect products while creating an enticing shelf presentation.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Custom Product Labels & Stickers',
    desc: 'We create durable, high-impact bottle, jar, and container labels with clear typography and accurate compliance details.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Flexible Pouch & Bag Packaging',
    desc: 'We design stand-up pouches, zipper bags, and sachets for food, beauty, and wellness brands optimized for flexible substrate printing.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Bottle, Can & Jar Labeling',
    desc: 'We engineer wraparound, front-and-back, and shrink-sleeve labels for beverage, pharmaceutical, and cosmetic containers.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Dieline Creation & Mechanical Setup',
    desc: 'We build precise structural vector dielines including bleed zones, fold lines, glue flaps, and cutout windows for printers.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Regulatory & Barcode Integration',
    desc: 'We structure nutritional facts, ingredient panels, legal disclaimers, and scannable barcodes in compliance with standards.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'E-Commerce Unboxing Design',
    desc: 'We design custom shipping mailers, tissue wrapping, thank-you cards, and unboxing inserts that delight online customers.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: '3D Packaging Mockups & Renders',
    desc: 'We produce realistic 3D digital product renders for marketing decks, e-commerce stores, and retail investor presentations.',
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
        <h2 className="dm-section-title">Our Packaging Design Services</h2>
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
  'Shelf-tested visual hierarchy that commands immediate attention in retail aisles',
  'Exact vector dieline engineering matching your manufacturer’s production specs',
  'Compliance-ready typography for ingredient panels, nutritional tables, and barcodes',
  'Realistic 3D digital mockups providing 360-degree visualization before mass printing',
  'Expert prepress file setups including spot colors, foils, and embossing layers',
  'Complete commercial ownership and production-ready master vector file delivery',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Product Packaging Design?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Packaging design requires technical manufacturing precision as much as creative vision. A mistake in dieline dimensions or bleed margins can ruin an entire production run. We eliminate risks by coordinating directly with your packaging manufacturer's technical specifications.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our packaging artists combine retail consumer psychology with pre-press expertise, delivering eye-catching product packaging that protects your bottom line and accelerates retail sales.
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
              alt="Custom Product Packaging Design and Shelf Appeal Process - Gatecode Technologies"
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
    title: '1. Product & Substrate Analysis',
    desc: 'We review product dimensions, container shapes, packaging materials (cardboard, glass, pouch), and shelf positioning.',
  },
  {
    title: '2. Dieline Architecture & Specs',
    desc: 'We obtain or engineer exact CAD dielines, verifying fold lines, cutouts, glue flaps, and safe margin boundaries.',
  },
  {
    title: '3. Creative Concept & Visual Layout',
    desc: 'Our artists design compelling visual concepts, exploring color systems, typography hierarchy, and key selling messages.',
  },
  {
    title: '4. Compliance & Label Integration',
    desc: 'We integrate nutritional information, ingredients, regulatory icons, batch codes, and scannable barcodes accurately.',
  },
  {
    title: '5. 3D Digital Mockup & Verification',
    desc: 'We render high-resolution 3D models showing realistic lighting, texture, and finishes for full visual approval.',
  },
  {
    title: '6. Pre-Press & Print-Ready Handoff',
    desc: 'We prepare color-separated CMYK/Pantone vector files with proper bleeds, ready for seamless commercial factory production.',
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
        <h2 className="dm-section-title">Our Packaging Design Process</h2>
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
            <Image src="/images/1.webp" alt="Retail Box Packaging Design - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Cosmetics Bottle and Jar Labels - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Pharmaceutical Packaging - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Food and Beverage Pouch Design - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Hospitality Takeaway Packaging - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional Product Packaging &amp; Label Design Agency
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your specialized creative partner for custom product packaging, retail box dielines, and product label design. We help consumer brands turn everyday products into sought-after retail selections through compelling shelf presence and technical manufacturing precision.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Engineered for Retail Shelves &amp; Premium Unboxing Experiences
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A superior package design must capture consumer attention from three feet away, convey primary product benefits, and comply with all regulatory labeling standards. Our packaging team bridges creative visual branding with factory-floor technical production.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom Box &amp; Carton Dielines</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Build structurally sound packaging boxes with custom cutouts, fold lines, and closures verified for print manufacturing.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Product Labels &amp; Pouches</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Design eye-catching front and back labels, wrap-around stickers, and stand-up pouches that command retail shelf appeal.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Compliance &amp; Nutrition Layouts</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Ensure regulatory compliance with organized typography for nutritional tables, ingredients, legal notices, and barcodes.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>3D Realistic Visualizations</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Review high-resolution 3D renders showing lighting, paper textures, spot varnishes, and embossed finishes before mass printing.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Packaging Design?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Investing in custom packaging design directly impacts consumer purchase decisions. Working with our packaging studio provides:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero Manufacturing Friction:</strong> Production-ready mechanical vector files calibrated to your manufacturer's specific printing press.</li>
            <li style={{ marginBottom: '10px' }}><strong>Tactile Finish Specifications:</strong> Detailed callouts for foil stamping, embossing, spot UV, and matte/gloss lamination.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete Production Ownership:</strong> Full rights and master design files delivered upon project completion.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const PackagingDesignServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/graphic-design' },
      { '@type': 'ListItem', position: 3, name: 'Packaging Design', item: 'https://gatecode.in/services/graphic-design/packaging-design' },
    ],
  };

  const packagingServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Packaging Design Services',
    name: 'Packaging & Label Design Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional packaging design agency providing custom retail box design, product labels, pouch packaging, dieline preparation, and 3D packaging mockups.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you create custom dielines for unique packaging box shapes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we can either work from dielines supplied by your packaging manufacturer or engineer custom structural vector dielines tailored to your product dimensions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you help with regulatory labeling and barcodes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we format nutritional tables, ingredient lists, compliance symbols, batch codes, and generate scannable high-resolution UPC/EAN barcodes directly on the artwork.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagingServiceSchema) }}
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

export default PackagingDesignServicesPage;

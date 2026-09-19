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
            Custom Logo Design &amp; Branding Services That Make an Enduring Impression
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we craft unique, timeless vector logos and foundational branding assets that define your company's identity. Our custom logo design services combine brand research, typographic artistry, versatile mark creation, and comprehensive style guidelines to help you build instant brand recognition.
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
          Your logo is the visual cornerstone of your brand identity. It appears on your website header, email signatures, mobile apps, packaging, and commercial signage. A great logo is simple, memorable, and enduring — communicating what your company stands for without unnecessary visual clutter.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we do not rely on generic clip art or automated logo generators. Every mark we design is custom-built from the ground up, tailored to your commercial positioning, target audience expectations, and functional scaling requirements across physical and digital mediums.
        </p>
        <p className="dm-about-text">
          Whether you need an elegant wordmark, a modern abstract emblem, or a complete corporate branding kit, our identity designers deliver full vector source files (AI, EPS, SVG, PDF) and clear brand guidelines. We ensure your logo looks sharp and balanced whether rendered as a tiny 16px browser favicon or a 10-foot outdoor office sign.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Logo Design Services ====================
const services = [
  {
    title: 'Custom Vector Logo Design',
    desc: 'We craft original, scalable vector logos tailored to your brand values, market positioning, and target demographics.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Wordmark & Monogram Design',
    desc: 'We design custom typographic logos and distinctive lettermarks that establish sophisticated, clean brand authority.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Emblem & Iconic Mark Creation',
    desc: 'We build proprietary visual symbols, geometric badges, and brand icons that function as standalone visual trademarks.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Color Palette & Contrast Testing',
    desc: 'We develop primary and secondary brand color systems rigorously tested for digital screen contrast and CMYK print fidelity.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Responsive Logo Variations',
    desc: 'We deliver primary horizontal, stacked vertical, simplified icon, and monochrome variations for versatile multi-screen use.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Corporate Stationery Application',
    desc: 'We showcase your logo across business cards, corporate letterheads, presentation covers, and digital email signatures.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Logo Usage & Clearspace Guidelines',
    desc: 'We document clear space rules, minimum size limits, approved backgrounds, and common misuses to protect brand integrity.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Complete Vector Asset Delivery',
    desc: 'We hand over complete vector source files (AI, EPS, SVG, PDF) alongside high-res web exports (PNG, JPEG, WebP) with full ownership.',
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
        <h2 className="dm-section-title">Our Logo Design &amp; Branding Services</h2>
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
  '100% original, custom vector artwork designed from scratch with full copyright ownership',
  'Versatile responsive logo marks engineered to scale perfectly from favicons to billboards',
  'Tested color formulas (Pantone, CMYK, RGB, HEX) ensuring accurate real-world reproduction',
  'Comprehensive logo usage manuals preventing distortion or incorrect implementation',
  'Structured concept exploration with multiple creative directions and collaborative revisions',
  'Complete master vector source files delivered upon final project sign-off',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Custom Logo Design?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Your logo is an investment that will represent your business for years to come. Choosing a custom-crafted mark ensures your company stands out from competitors using generic templates, establishing an authentic identity that commands customer respect.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our brand identity artists balance aesthetic creativity with functional geometry. We test every design concept across light and dark backgrounds, micro-dimensions, and diverse physical mediums before finalizing your mark.
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
              alt="Custom Logo Design and Vector Branding Process - Gatecode Technologies"
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
    title: '1. Brand Discovery & Briefing',
    desc: 'We study your business goals, target customer personas, competitive landscape, and desired brand personality.',
  },
  {
    title: '2. Concept Sketching & Ideation',
    desc: 'Our artists brainstorm diverse visual metaphors, sketching multiple original logo directions exploring different styles.',
  },
  {
    title: '3. Vector Digitalization & Geometry',
    desc: 'We bring top concepts into vector software, refining proportions, curve geometry, balance, and typographic kerning.',
  },
  {
    title: '4. Color Harmony & Mockup Testing',
    desc: 'We apply curated color systems and test marks across realistic mockups including business cards, websites, and signage.',
  },
  {
    title: '5. Client Presentation & Revisions',
    desc: 'We present polished concepts, gather your direct feedback, and fine-tune the chosen design until it matches your vision.',
  },
  {
    title: '6. Master Asset Handover',
    desc: 'We package all vector formats (AI, EPS, SVG, PDF), web files (PNG, JPG), color codes, and usage guidelines for download.',
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
        <h2 className="dm-section-title">Our Logo Design Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Logo and Brand Identity - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Corporate Logo Design - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Practice Brand Emblem - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Institute Crest and Logo - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Hospitality Brand Wordmark and Identity - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Premier Custom Logo Design &amp; Corporate Branding Agency
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your creative agency for custom vector logo design and foundational corporate branding. We help emerging startups, growing businesses, and established enterprises forge distinctive visual identities that stand out in crowded markets and build enduring brand equity.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Crafting Distinctive, Scalable Logos Built for Timeless Market Impact
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A superior corporate logo must withstand the test of time and function seamlessly across every physical and digital environment. Our brand designers focus on clean geometry, balanced proportions, and meaningful symbolism, ensuring your mark communicates trust and distinction across all customer touchpoints.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom Vector Craftsmanship</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Receive 100% original vector logos crafted from scratch without generic clip-art or template shortcuts.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Multi-Screen Scalability</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Ensure your mark remains razor-sharp whether scaled down to a mobile favicon or enlarged across massive outdoor signage.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Complete Brand Guidelines</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Protect your visual consistency with clear usage standards detailing clear space, approved backgrounds, and color codes.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Full Ownership &amp; Vector Files</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Gain complete legal copyright ownership along with all master vector source files (AI, EPS, SVG, PDF) upon project completion.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Custom Logo Design?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A professionally designed logo elevates your brand authority immediately. Collaborating with our identity specialists provides:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Strategic Creative Direction:</strong> Concepts grounded in your real commercial positioning, customer psychology, and industry research.</li>
            <li style={{ marginBottom: '10px' }}><strong>Comprehensive File Packaging:</strong> Organized source files ready for web developers, commercial printers, and internal teams.</li>
            <li style={{ marginBottom: '10px' }}><strong>Collaborative Revisions:</strong> Structured feedback rounds ensuring the final logo mark aligns with your business goals.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const LogoDesignBrandingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/graphic-design' },
      { '@type': 'ListItem', position: 3, name: 'Logo Design & Branding', item: 'https://gatecode.in/services/graphic-design/logo-design' },
    ],
  };

  const logoDesignServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Logo Design & Branding Services',
    name: 'Logo Design & Branding Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Custom logo design and branding agency offering vector logo creation, corporate brand identity, brand style guides, stationery design, and master source file packages.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose Gatecode Technologies for custom logo design & branding services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies delivers 100% original, high-resolution vector logo designs, complete corporate brand guidelines, business cards, stationery templates, and full copyright ownership.',
        },
      },
      {
        '@type': 'Question',
        name: 'What file formats will I receive for my custom logo design?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will receive complete vector source files (AI, EPS, SVG, PDF) alongside high-resolution print and web formats (PNG, JPG, WebP) with full copyright ownership.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logoDesignServiceSchema) }}
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

export default LogoDesignBrandingServicesPage;

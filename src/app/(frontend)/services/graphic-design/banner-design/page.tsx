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
            High-Impact Banner &amp; Poster Design Services for Print &amp; Digital Media
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we create visually striking banners and posters designed to command attention from the first glance. Our design services cover event posters, digital web ads, trade show backdrops, retail roll-up standees, and outdoor promotional graphics crafted for maximum visual impact.
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
          Banners and posters face a unique design challenge: they must capture attention, communicate a key message, and prompt audience action within just a few seconds. Whether viewed by passing pedestrians on a busy street or scrolling users browsing a digital website, visual clarity and strong focal hierarchy are essential.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., our visual design team approaches every banner and poster project with strategic balance. We pair high-contrast typography with powerful focal imagery and uncluttered layouts, ensuring that your core headline and call to action register instantly with viewers from any viewing distance.
        </p>
        <p className="dm-about-text">
          From multi-size digital display banner suites and website hero sliders to commercial offset posters and exhibition display stands, we engineer assets for their exact real-world display environment. We ensure precise color calibration, high-resolution vector scaling, and verified pre-press setup for flawless execution.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Banner & Poster Services ====================
const services = [
  {
    title: 'Digital Web Banners & Display Ads',
    desc: 'We design high-converting web banners across standard Google Display dimensions that drive click-throughs and conversions.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Event, Concert & Conference Posters',
    desc: 'We create bold, memorable event posters with compelling typography and structured schedules that boost attendance.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Retail Roll-Up & Standee Banners',
    desc: 'We produce vertical pull-up standees and promotional banners engineered for instant legibility at trade shows and stores.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Trade Show & Exhibition Backdrops',
    desc: 'We design large-format conference booths, pop-up backdrops, and media walls that establish a commanding booth presence.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Promotional Sales & Discount Banners',
    desc: 'We craft urgent, high-visibility sale graphics and seasonal promotional posters that motivate immediate customer purchasing.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Outdoor Billboards & Hoardings',
    desc: 'We design large-scale outdoor hoardings and highway billboards optimized for fast readability and high visual contrast.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Website Hero & Header Sliders',
    desc: 'We build responsive website banners and hero graphics that align with your digital branding and showcase featured offers.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Print-Ready Vector Pre-Press Setup',
    desc: 'We prepare files with accurate bleed margins, crop marks, CMYK profiles, and high DPI resolution for sharp commercial printing.',
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
        <h2 className="dm-section-title">Our Banner &amp; Poster Design Services</h2>
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
  'Clear visual hierarchy ensuring your core headline is instantly legible from a distance',
  'Custom dimensional layouts optimized for both large-format print and digital screens',
  'Strict pre-press standards including proper bleed margins, crop marks, and CMYK color',
  'Compelling calls-to-action that guide viewer attention directly toward your offer',
  'Fast-turnaround design iterations supported by dedicated visual communication specialists',
  'Full delivery of high-resolution print PDFs, vector source files, and web-ready exports',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Banner &amp; Poster Design?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          An overcrowded poster with conflicting fonts dilutes your promotional impact. Our design team focuses on clean visual storytelling, ensuring every element — from headline size and supporting details to contact links — works cohesively to deliver your message.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, we combine technical pre-press expertise with creative design, ensuring your graphics print crisply at 10 feet wide or display sharply on a mobile device without blurriness or distortion.
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
              alt="Banner and Poster Design and Visual Hierarchy Process - Gatecode Technologies"
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
    title: '1. Dimension & Context Audit',
    desc: 'We review viewing distance, physical display specifications, print mediums, or digital ad platform guidelines.',
  },
  {
    title: '2. Message Hierarchy Planning',
    desc: 'We structure the primary headline, supporting key points, and call-to-action to establish an effortless visual scan path.',
  },
  {
    title: '3. Creative Visual Drafting',
    desc: 'Our artists craft balanced design drafts combining high-contrast typography, custom graphics, and brand color palettes.',
  },
  {
    title: '4. Contrast & Legibility Checks',
    desc: 'We test font scale and color contrast at realistic viewing distances and on various display screens to ensure clarity.',
  },
  {
    title: '5. Pre-Press & Technical Verification',
    desc: 'We calibrate color profiles (CMYK/RGB), configure safe print zones and bleeds, and embed all fonts and linked vectors.',
  },
  {
    title: '6. Master Asset Handover',
    desc: 'We deliver print-ready PDF/X files ready for the commercial printer, along with web-optimized PNG, WebP, and vector files.',
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
        <h2 className="dm-section-title">Our Banner &amp; Poster Design Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Sale Promotional Banners - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Property Standee Banners - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Clinic Informative Posters - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Seminar Conference Posters - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Restaurant Promotional Window Posters - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional Banner &amp; Poster Design Agency for Maximum Visual Reach
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your creative studio for high-impact promotional banners, event posters, and digital advertising graphics. We help businesses communicate their key offers with bold visual clarity, driving foot traffic and online clicks through purposeful design.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Commanding Attention in Print and Digital Advertising Spaces
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Whether designing a physical pull-up standee for an industry trade show or a dynamic digital banner ad suite for Google Display, effective posters require strong focal balance. Our designers blend compelling headlines with strategic white space to ensure your message is understood at first glance.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Trade Show &amp; Roll-Up Banners</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Stand out at exhibitions and conferences with professionally structured vertical pull-up standees and pop-up backdrops.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Event &amp; Promotional Posters</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Promote upcoming product launches, festivals, and conferences with high-contrast, visually engaging poster designs.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Digital Display Web Ads</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Maximize ad campaign click-through rates with custom banner ad sets designed across all standard Google Display Network dimensions.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Pre-Press Technical Precision</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Eliminate printing errors with verified CMYK color conversion, exact bleed margins, crop marks, and 300+ DPI vector assets.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Banners &amp; Posters?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Delivering memorable promotional collateral demands creative discipline. Collaborating with our design studio guarantees:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Audience-Centric Layouts:</strong> Visual paths tailored to guide viewer focus directly toward your primary commercial message.</li>
            <li style={{ marginBottom: '10px' }}><strong>Printer-Ready Verification:</strong> Exact alignment with your commercial printer’s technical specifications to ensure vibrant, sharp results.</li>
            <li style={{ marginBottom: '10px' }}><strong>Multi-Size Adaptability:</strong> Cohesive design systems that scale seamlessly across web sliders, retail signs, and large billboards.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const BannerPosterDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/graphic-design' },
      { '@type': 'ListItem', position: 3, name: 'Banner & Poster Design', item: 'https://gatecode.in/services/graphic-design/banner-design' },
    ],
  };

  const bannerServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Banner & Poster Design Services',
    name: 'Banner & Poster Design Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional banner and poster design agency providing high-impact digital web banners, event posters, retail standees, exhibition backdrops, and print-ready collateral.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What sizes and formats do you design for banners and posters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We design for all custom and standard dimensions including A-series posters (A1, A2, A3), roll-up standees (3x6 ft, etc.), billboards, and digital web banner suites (300x250, 728x90, 160x600, etc.).',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the files ready to be sent directly to our commercial printer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide print-ready PDF/X files with proper bleeds, crop marks, vector assets, and CMYK color profiles, prepped for immediate production without prepress errors.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bannerServiceSchema) }}
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

export default BannerPosterDesignPage;

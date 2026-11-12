"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for SEO Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (8).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SEO<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Turn search results into revenue. Drive high-intent organic traffic, build brand authority, and achieve sustainable growth with our data-driven SEO strategies.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for SEO Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we don&apos;t just chase vanity rankings; we focus on connecting your business with the right audience. True SEO requires a perfect blend of technical performance, seamless user experience, and high-quality content. By strictly following modern search engine guidelines, our customized strategies are designed to build lasting digital authority, survive algorithm updates, and deliver measurable business growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for SEO Services) ====================
const services = [
  { 
    title: 'Keyword Research & Strategy', 
    desc: 'Pinpoint high-intent keywords that your ideal customers are actually searching for, forming the foundation of a high-ROI campaign.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'On-Page SEO Optimization', 
    desc: 'Structure your content, meta tags, and internal architecture to perfectly align with search engine algorithms and user intent.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Technical SEO', 
    desc: 'Enhance Core Web Vitals, mobile responsiveness, and site architecture. We ensure your website is fast, error-free, and easily crawlable.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Content Optimization', 
    desc: 'Craft authoritative, engaging content that answers user queries, builds industry trust, and naturally attracts organic reach.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Local SEO Services', 
    desc: 'Dominate your local market. We optimize your Google Business Profile and local citations to capture nearby customers ready to convert.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Link Building Strategies', 
    desc: 'Earn high-quality, relevant backlinks that signal trust and authority to search engines, boosting your overall domain power.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'SEO Audit & Analysis', 
    desc: 'Run deep-dive technical audits to uncover hidden structural issues and identify fresh opportunities for performance gains.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Performance Tracking & Reporting', 
    desc: 'Get complete transparency. We monitor ranking shifts, traffic quality, and conversions with clear, actionable analytics.', 
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
        <h2 className="dm-section-title">Our SEO Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for SEO Services) ====================
const benefits = [
  'Sustainable search engine rankings',
  'High-quality, intent-driven traffic',
  'Enhanced Core Web Vitals & UX',
  'Maximized lead generation & conversions',
  'Stronger brand authority & trust',
  'Transparent, data-backed reporting',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our SEO Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We strictly follow ethical, &quot;white-hat&quot; SEO practices focused on long-term sustainability rather than quick, risky shortcuts. By combining deep technical expertise with user-first content strategies, we help you build a resilient online presence that adapts to market changes and consistently attracts targeted audiences.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits
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
              alt="Search Engine Optimization Keyword Ranking Metrics - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for SEO Services) ====================
const processSteps = [
  { 
    title: 'Website & Market Analysis', 
    desc: 'Auditing your current architecture, understanding your target demographic, and analyzing competitor gaps.' 
  },
  { 
    title: 'Keyword Research & Planning', 
    desc: 'Mapping out a precise content and targeting strategy based on search volume, competition, and user intent.' 
  },
  { 
    title: 'On-Page & Technical Optimization', 
    desc: 'Deploying structural fixes, improving load speeds, and aligning page elements with search best practices.' 
  },
  { 
    title: 'Content & Link Building', 
    desc: 'Publishing authoritative content and executing ethical outreach to build a strong, trustworthy backlink profile.' 
  },
  { 
    title: 'Performance Monitoring', 
    desc: 'Setting up advanced tracking to measure organic growth, user behavior, and conversion metrics in real-time.' 
  },
  { 
    title: 'Continuous Optimization', 
    desc: 'Adapting to algorithm shifts and continuously refining strategies to ensure your rankings improve over time.' 
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
        <h2 className="dm-section-title">Our SEO Process</h2>
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

// ==================== DigitalIndustries Component (Updated for SEO Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Education & Training',
  'Healthcare & Wellness',
  'Real Estate & Construction',
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
            <Image src="/images/1.webp" alt="E-Commerce Store On-Page SEO Optimization - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant and Cafe Local SEO Marketing - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Enterprise Search Engine Ranking - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational School Academy Link Building - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Healthcare Clinic Google Maps SEO - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SEOServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'SEO Services', item: 'https://www.gatecode.in/services/digital-marketing/seo' },
    ],
  };

  const seoServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Search Engine Optimization (SEO)',
    name: 'Top-Rated SEO Agency in India for Organic Growth',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional SEO services company in India offering keyword research, on-page SEO, technical SEO, local SEO, link building, and organic traffic growth.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="digital-marketing/seo" serviceName="SEO" />
      <ContactSection />
    </div>
  );
};

export default SEOServicesPage;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
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
            Improve your online visibility, attract targeted traffic, and grow your business with<br />
            result-driven SEO strategies.
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
          At Gatecode Technologies Pvt. Ltd., we provide professional SEO services designed to improve your website's search engine rankings, 
          increase organic traffic, and strengthen your online presence. Our SEO strategies focus on optimizing website performance, improving 
          user experience, and targeting the right audience to generate long-term business growth. From keyword research and on-page optimization 
          to technical SEO and content strategies, we deliver customized solutions tailored to your business goals.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for SEO Services) ====================
const services = [
  { title: 'Keyword Research & Strategy', desc: 'Identifying high-performing keywords and creating strategic SEO plans to improve search visibility.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'On-Page SEO Optimization', desc: 'Optimizing website content, meta tags, headings, and structure for better search engine rankings.', color: '#fbff06', text: '#000000' },
  { title: 'Technical SEO', desc: 'Improving website speed, mobile responsiveness, indexing, and technical performance for search engines.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Content Optimization', desc: 'Creating and optimizing SEO-friendly content that improves engagement and organic reach.', color: '#fbff06', text: '#000000' },
  { title: 'Local SEO Services', desc: 'Enhancing local search visibility to help businesses attract nearby customers and improve local presence.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Link Building Strategies', desc: 'Building quality backlinks to improve domain authority and search engine credibility.', color: '#fbff06', text: '#000000' },
  { title: 'SEO Audit & Analysis', desc: 'Comprehensive website audits to identify SEO issues and performance improvement opportunities.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Performance Tracking & Reporting', desc: 'Monitoring keyword rankings, traffic, and SEO performance through detailed reports and analytics.', color: '#fbff06', text: '#000000' },
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
  'Improved search engine rankings',
  'Increased organic website traffic',
  'Better online visibility and brand awareness',
  'Higher lead generation and conversions',
  'Enhanced user experience and website performance',
  'Long-term digital growth strategies',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our SEO Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering ethical, data-driven, and performance-oriented SEO strategies that improve search rankings and generate long-term results. 
          Our team combines technical expertise, market analysis, and content optimization to help businesses increase visibility, attract targeted audiences, 
          and achieve sustainable digital growth.
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
  { title: 'Website & Market Analysis', desc: 'Understanding your business, target audience, and market trends.' },
  { title: 'Keyword Research & Planning', desc: 'Creating customized marketing strategies based on your goals.' },
  { title: 'On-Page & Technical Optimization', desc: 'Improving website structure, speed, and content optimization.' },
  { title: 'Content & Link Building', desc: 'Creating optimized content and strengthening website authority.' },
  { title: 'Performance Monitoring', desc: 'Tracking rankings, traffic, and SEO performance metrics.' },
  { title: 'Continuous Optimization', desc: 'Regular improvements and updates for long-term SEO success.' },
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'SEO Services', item: 'https://gatecode.in/services/seo' },
    ],
  };

  const seoServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Search Engine Optimization (SEO)',
    name: 'SEO Services Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional SEO services company in India offering keyword research, on-page SEO, technical SEO, local SEO, link building, and organic traffic growth.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose Gatecode Technologies for professional SEO services in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a data-driven SEO company in India delivering white-hat SEO strategies, on-page & technical optimization, local SEO, and measurable organic traffic growth.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see rankings with your SEO services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most websites see noticeable ranking improvements and increased organic impressions within 3 to 6 months depending on domain authority, competition, and search volume.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }}
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
    </div>
  );
};

export default SEOServicesPage;

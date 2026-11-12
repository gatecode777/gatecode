"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== Section 1: Hero Section ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (13).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Targeted Search Engine Marketing Services That Capture High-Intent Demand
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we help businesses capture ready-to-buy customers through strategic paid search advertising. Our search engine marketing services combine granular keyword targeting, disciplined bidding strategies, persuasive ad copy, and landing page alignment to maximize your return on ad spend.
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
          Search Engine Marketing (SEM) connects your business directly with prospects at the exact moment they actively search for your solutions. When executed with precision, paid search advertising delivers immediate search visibility, predictable lead flow, and scalable customer acquisition that directly supports your bottom line.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., our certified paid media strategists focus on financial efficiency. We avoid broad, wasteful keyword spending by conducting rigorous search intent analysis, implementing strict negative keyword filters, and structuring campaigns to achieve high Quality Scores on Google Ads.
        </p>
        <p className="dm-about-text">
          Whether you are launching new products, targeting local service territories, or running national B2B acquisition funnels, we optimize every element of your ad campaigns. We balance search text ads with strategic display remarketing, continuously refining cost-per-click (CPC) and conversion rates to ensure every ad dollar contributes to business growth.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our SEM Services ====================
const services = [
  {
    title: 'Google Ads Search Campaigns',
    desc: 'We build and manage high-performing search ad campaigns that place your brand at the top of Google search results.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'High-Intent Keyword Architecture',
    desc: 'We identify commercial and transactional keywords that attract qualified buyers while actively filtering out irrelevant traffic.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Conversion-Driven Ad Copywriting',
    desc: 'We craft compelling ad headlines, descriptions, and extensions that achieve superior click-through rates and high Quality Scores.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Google Display & Discovery Ads',
    desc: 'We design visually impactful banner and discovery ads to build broad brand awareness across Google’s partner networks.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Strategic Retargeting & Remarketing',
    desc: 'We re-engage previous site visitors and past prospects with customized messaging that encourages them to return and convert.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Landing Page Experience Alignment',
    desc: 'We ensure ad messaging matches landing page design and calls-to-action, boosting Quality Scores and overall conversion rates.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Smart Bidding & Budget Management',
    desc: 'We apply disciplined bid adjustments and smart automated bidding rules to lower cost-per-acquisition across all campaigns.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'ROAS & Conversion Analytics',
    desc: 'We configure precise conversion tracking and clear dashboard reporting to monitor cost-per-lead, conversion volume, and ROAS.',
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
        <h2 className="dm-section-title">Our Search Engine Marketing Services</h2>
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
  'Laser-focused keyword targeting capturing users with immediate commercial intent',
  'Disciplined budget allocation to minimize wasted ad spend and lower acquisition costs',
  'Compelling ad copy and extension setups that maximize click-through and quality scores',
  'Continuous negative keyword filtering to eliminate irrelevant and low-intent clicks',
  'Strategic remarketing campaigns that re-engage high-potential previous website visitors',
  'Transparent dashboard reporting tracking cost-per-lead, conversion rates, and ROAS',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Search Engine Marketing?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Running profitable paid search campaigns requires deep analytical discipline and continuous testing. We do not set up campaigns and leave them unattended — we manage bids, test ad creatives, and optimize search terms daily to keep your acquisition costs competitive.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our certified Google Ads team aligns paid traffic directly with dedicated conversion funnels, ensuring your advertising spend generates verified business leads and measurable return on investment.
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
              alt="Search Engine Marketing SEM Performance Campaigns - Gatecode Technologies"
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
    title: '1. Goals & Competitor Discovery',
    desc: 'We analyze your commercial goals, target audience, competitive landscape, and budget parameters to formulate a strategy.',
  },
  {
    title: '2. Search Intent Keyword Research',
    desc: 'We identify high-converting commercial keywords and build exhaustive negative keyword lists to prevent wasted ad spend.',
  },
  {
    title: '3. Campaign Architecture & Copywriting',
    desc: 'We structure tightly-themed ad groups, write compelling responsive text ads, and configure relevant callout and sitelink extensions.',
  },
  {
    title: '4. Conversion Tracking & Landing Audit',
    desc: 'We implement Google Tag Manager tracking, verify goal attribution, and ensure landing page copy aligns with ad messaging.',
  },
  {
    title: '5. Campaign Launch & Bid Management',
    desc: 'We deploy the campaigns and actively manage initial bidding to build Quality Score data and establish stable cost baselines.',
  },
  {
    title: '6. Daily Optimization & Scaling',
    desc: 'We review search query reports, weed out non-converting terms, and allocate budget toward top-performing ad assets.',
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
        <h2 className="dm-section-title">Our Search Engine Marketing Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce PPC Ad Campaigns - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Search Engine Marketing - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Google Ads Search Campaign - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Training PPC Marketing - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Hospitality Google Search Advertising - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
// ==================== Main Page Component ====================
const SearchEngineMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'SEM Services', item: 'https://www.gatecode.in/services/digital-marketing/sem' },
    ],
  };

  const semServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Search Engine Marketing (SEM)',
    name: 'Search Engine Marketing (SEM) Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional search engine marketing agency offering Google Ads PPC management, search advertising campaigns, retargeting, keyword optimization, and conversion tracking.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(semServiceSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="digital-marketing/sem" serviceName="search engine marketing" />
      <ContactSection />
    </div>
  );
};

export default SearchEngineMarketingPage;

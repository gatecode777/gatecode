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
        style={{ backgroundImage: `url('/images/Rectangle 228 (11).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Strategic Social Media Optimization Services to Amplify Reach &amp; Profile Authority
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we optimize your social channels for discoverability, profile credibility, and organic algorithmic reach. Our social media optimization services align your bios, keywords, media formats, and linking structures to turn everyday visitors into engaged brand followers.
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
          Social Media Optimization (SMO) is the art and science of fine-tuning your social profiles and content architecture to maximize organic visibility across native search engines and platform feeds. While social ads require continuous spend, a properly optimized social presence works continuously in the background to build organic credibility and audience discovery.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we treat social profiles as dynamic landing pages. From strategic keyword placement in profile bios to platform-native content formatting and structured hashtag architecture, our approach ensures that prospective customers easily find your brand when searching for relevant topics, services, or products.
        </p>
        <p className="dm-about-text">
          Whether you are managing profiles on Instagram, LinkedIn, Facebook, YouTube, or X, our team audits and refines every touchpoint. We balance visual consistency with technical profile optimization, establishing an authoritative brand presence that drives natural algorithmic distribution and qualified referral traffic.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our SMO Services ====================
const services = [
  {
    title: 'Social Profile & Bio Architecture',
    desc: 'We optimize profile handles, bios, contact details, and category tags to build immediate credibility and discoverability.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Native Content & Asset Formatting',
    desc: 'We format visuals, carousels, and videos to meet exact platform specifications for optimal display and user engagement.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Hashtag & Keyword Tagging Strategy',
    desc: 'We research niche-relevant hashtags and search keywords to help your posts surface in native feed recommendations.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Cross-Channel Brand Synchronization',
    desc: 'We align banners, profile photos, colors, and tone across all networks so your brand remains instantly recognizable.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Social Search (In-App SEO) Optimization',
    desc: 'We optimize post captions and video titles to capture search queries performed directly inside social media search bars.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Audience Interaction & Community Loops',
    desc: 'We establish engagement protocols that encourage saves, shares, and comments, signaling quality to platform algorithms.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Profile Conversion & Link Funneling',
    desc: 'We structure custom link trees and clear calls-to-action to channel social traffic toward high-converting landing pages.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Organic Reach Auditing & Reporting',
    desc: 'We review profile impressions, discovery sources, and follower trends to refine your organic optimization strategy continuously.',
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
        <h2 className="dm-section-title">Our Social Media Optimization Services</h2>
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
  'Full profile optimization aligning bios, visuals, and links across every active channel',
  'Enhanced discoverability across in-app search bars through native keyword integration',
  'Consistent aesthetic and tone of voice that builds immediate brand recognition',
  'Improved organic post reach through platform-specific formatting and hashtag frameworks',
  'Seamless user pathways connecting social followers directly to your website landing pages',
  'Regular performance audits to adapt to platform algorithm updates and user trends',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Social Media Optimization?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Effective SMO bridges the gap between passive profiles and high-performing digital touchpoints. By optimizing how your brand presents itself across social algorithms, we ensure every piece of content works harder to expand your organic footprint.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our specialists focus on practical, technical optimization that improves profile visibility, user trust, and long-term audience retention without relying solely on ad spend.
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
              alt="Social Media Optimization Strategy and Profile Performance - Gatecode Technologies"
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
    title: '1. Profile & Asset Audit',
    desc: 'We thoroughly review your existing profiles, bios, visuals, links, and posting history to identify optimization opportunities.',
  },
  {
    title: '2. Search & Tag Research',
    desc: 'We analyze trending platform queries and relevant category tags to determine what keywords your audience searches for.',
  },
  {
    title: '3. Profile Architecture Overhaul',
    desc: 'We rewrite bios, update category tags, organize highlights, and integrate frictionless conversion links across all channels.',
  },
  {
    title: '4. Asset & Post Standardization',
    desc: 'We establish visual templates, aspect ratio rules, and caption guidelines tailored to each platform’s recommendation engine.',
  },
  {
    title: '5. Community Interaction Setup',
    desc: 'We implement workflow practices to nurture initial post traction, answer inquiries, and encourage meaningful user discussions.',
  },
  {
    title: '6. Algorithmic Review & Adaptation',
    desc: 'We track organic impressions, profile visits, and referral clicks, making data-informed adjustments as platform algorithms evolve.',
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
        <h2 className="dm-section-title">Our Social Media Optimization Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Brand Profile Optimization - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Social Profile Branding - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Social Profile Optimization - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Institute Social Media Profile - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Hospitality Brand Social Optimization - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional Social Media Optimization Agency for Organic Growth
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your trusted partner for organic social profile optimization and digital brand alignment. We help businesses transform standard social media handles into high-performing touchpoints that rank in native search results, captivate profile visitors, and consistently generate organic interest.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Maximizing Profile Authority, In-App Search &amp; Brand Trust
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Modern consumers increasingly use social platforms like Instagram, TikTok, and LinkedIn as search engines to evaluate companies before engaging. Our SMO methodology focuses on structured keyword integration, clean visual aesthetics, and seamless conversion links to make sure your profiles make a positive, authoritative impression.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>In-App Social Search Optimization</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Ensure your profiles and posts appear when prospective buyers search for industry topics and services directly within platform search engines.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Unified Cross-Platform Branding</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Maintain complete visual and messaging harmony across every active social channel, reinforcing professionalism and brand recall.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Profile Conversion &amp; Link Architecture</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Guide profile visitors through tailored navigation pathways and dedicated link hubs that guide interest toward inquiries and conversions.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Algorithmic Reach &amp; Tag Strategy</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Leverage targeted hashtags, audio trends, and optimal posting formats designed to earn higher visibility within organic platform feeds.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for SMO?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A disciplined social media optimization strategy protects your brand reputation and maximizes organic discovery. When you partner with our optimization specialists, you benefit from:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Technical Profile Standards:</strong> Rigorous optimization of bio keywords, account categories, highlights, and contact touchpoints.</li>
            <li style={{ marginBottom: '10px' }}><strong>Platform-Native Experience:</strong> Content formatting and tagging tailored to the unique behavioral algorithms of each network.</li>
            <li style={{ marginBottom: '10px' }}><strong>Clear Organic Insights:</strong> Measurable tracking of profile visits, in-app search impressions, and website referral traffic.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SocialMediaOptimizationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'SMO Services', item: 'https://gatecode.in/services/digital-marketing/smo' },
    ],
  };

  const smoServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Social Media Optimization (SMO)',
    name: 'Social Media Optimization (SMO) Services Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional social media optimization services providing social profile audits, bio keyword optimization, in-app search visibility, and cross-channel brand synchronization.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between SMO and SMM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SMO (Social Media Optimization) focuses on optimizing your profiles, bios, searchability, and organic post structure for discoverability, while SMM (Social Media Marketing) emphasizes active campaign execution, paid advertisements, and daily community management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does SMO improve my brand visibility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By integrating high-intent keywords into your profile bios, structuring relevant hashtags, and creating platform-native content formats, your profiles rank higher in internal platform searches and explore feeds.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smoServiceSchema) }}
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

export default SocialMediaOptimizationPage;

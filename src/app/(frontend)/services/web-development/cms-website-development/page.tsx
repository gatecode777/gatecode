"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { cmsWebsiteDevFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for CMS Website Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div className="dm-hero-bg">
        <Image
          src="/images/Rectangle 228 (21).webp"
          alt="Tailored website design agency offering custom CMS services"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CMS<br />WEBSITE<br />DEVELOPMENT
          </h1>
          <p className="dm-hero-subtitle">
            We build flexible, scalable, and intuitive CMS websites that empower marketing teams to publish dynamic content effortlessly while maintaining top-tier security and performance.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for CMS Website Development) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., our CMS website development services are engineered to give businesses complete control over their digital content without compromising site speed or architectural stability. Whether you require a high-speed headless CMS, an enterprise-grade WordPress setup, or a custom administrative portal, we build platforms tailored to your editorial workflows.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          We eliminate reliance on bloated commercial page builders by engineering clean, modular themes and customized admin dashboards. Every CMS platform we deliver focuses on mobile responsiveness, swift database queries, structured metadata for search visibility, and granular role-based permissions, allowing marketing teams to create, edit, and publish content with total confidence.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for CMS Website Development) ====================
const services = [
  { 
    title: 'Custom Headless CMS Architecture', 
    desc: 'Modern headless implementations (Strapi, Sanity, Contentful) decoupled from React/Next.js frontends for lightning-fast speeds.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Enterprise WordPress Engineering', 
    desc: 'Custom-coded themes, secure core configurations, and bespoke post types without clunky third-party page builders.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Tailored Admin Dashboard UX', 
    desc: 'Intuitive backend interfaces configured specifically for your editorial team to publish pages, media, and articles without friction.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Dynamic E-Commerce CMS Integrations', 
    desc: 'Seamless CMS store configurations with WooCommerce, Shopify, or custom platforms for streamlined catalog and order management.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Custom Plugin & API Development', 
    desc: 'Purpose-built extensions and API bridges connecting your CMS to CRM platforms, email marketing tools, and analytics dashboards.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Technical SEO & Schema Automation', 
    desc: 'Automated sitemaps, structured schema data, optimized meta controls, and clean URL routing to maximize search engine rankings.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Secure Migration & Platform Upgrades', 
    desc: 'Flawless content and database migrations from legacy systems to modern CMS platforms with zero data loss or downtime.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Continuous Maintenance & Security Patching', 
    desc: 'Proactive core updates, automated daily backups, database optimization, and vulnerability scans to safeguard your web assets.', 
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

// ==================== DigitalWhyChoose Component (Updated for CMS Website Development) ====================
const benefits = [
  'Intuitive visual dashboards for non-technical team publishing.',
  'Zero dependencies on bloated third-party page builders or themes.',
  'Granular role-based user permissions and editorial approval workflows.',
  'High-speed page performance optimized for Core Web Vitals.',
  'Automated SEO metadata, structured data, and clean canonical URLs.',
  'Robust security protocols with regular automated database backups.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose CMS Website Development?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Waiting days for developers to update a blog post, publish a new service page, or adjust promotional banners slows down your marketing velocity. A well-engineered CMS removes this operational bottleneck, putting intuitive editorial control directly into your marketing team's hands while safeguarding system architecture.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we combine intuitive publishing experiences with clean code and rigorous security. Our custom CMS architectures allow you to add new sections, launch campaign pages, and update media without fear of breaking site layouts or introducing performance regressions.
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
              alt="CMS Website Development Lifecycle Diagram - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for CMS Website Development) ====================
const processSteps = [
  { 
    title: 'Content Strategy & Architecture Mapping', 
    desc: 'We analyze your editorial requirements, content taxonomies, media assets, and team roles to design an efficient data model.' 
  },
  { 
    title: 'Platform Selection & Architecture Design', 
    desc: 'We determine the ideal CMS platform (Headless, WordPress, or Custom) and establish the technical infrastructure.' 
  },
  { 
    title: 'Custom UI/UX Design & Wireframing', 
    desc: 'We create responsive layouts, flexible reusable blocks, and intuitive editorial preview mechanisms.' 
  },
  { 
    title: 'Backend Development & Custom Fields', 
    desc: 'Our team engineers custom post types, flexible layout builders, and secure API endpoints matching your content structure.' 
  },
  { 
    title: 'Security Hardening & Performance QA', 
    desc: 'We implement SSL certificates, sanitize input queries, optimize image delivery, and test administrative permissions.' 
  },
  { 
    title: 'Deployment, Training & Ongoing Support', 
    desc: 'We launch your CMS with zero downtime, conduct hands-on training for your editorial team, and provide ongoing technical maintenance.' 
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
        <h2 className="dm-section-title">Our Development Process</h2>
        <div className="dm-process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="dm-process-item">
              <h3 className="dm-process-label">{item.title}</h3>
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

// ==================== DigitalIndustries Component (Updated for CMS Website Development) ====================
const industries = [
  'E-Commerce & Retail',
  'Education & E-Learning',
  'Corporate Businesses',
  'Media & Blogging',
  'Healthcare & Wellness',
  'Startups & Enterprises',
  'Service-Based Businesses',
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
            <Image src="/images/1.webp" alt="E-Commerce CMS Platforms - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Education and E-Learning Portal CMS - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Business CMS Solutions - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Media and Blogging Website CMS - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Healthcare and Medical Info CMS - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Leading CMS Website Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies Pvt. Ltd.</strong>, an established <strong>CMS website development company</strong> delivering tailored, secure, and easily manageable content management solutions. We empower corporate enterprises, content publishers, and e-commerce stores to manage digital content effortlessly without sacrificing web speed, search engine performance, or backend security.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Empowering Marketing Teams with Intuitive, Secure, and Scalable CMS Architecture
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Updating business content, launching campaigns, or publishing industry insights should never require constant developer assistance. Our custom CMS solutions combine intuitive editorial dashboards with clean, decoupled frontend codebases, ensuring your website renders instantaneously, ranks higher on search engines, and evolves smoothly alongside your organizational growth.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Headless & Traditional CMS Options</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                From headless CMS setups using React and Next.js to enterprise WordPress implementations, we build solutions matched to your operational scale.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Streamlined Editorial Workflows</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Custom content blocks, live previews, and intuitive media libraries empower non-technical teams to publish polished pages in minutes.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Advanced Security & Backup Controls</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Comprehensive threat protection with automated security patches, two-factor authentication, and encrypted daily cloud backups.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Enterprise Scalability & Localization</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                High-capacity databases engineered to support heavy traffic spikes, multi-language localization, and complex taxonomic hierarchies.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Choose Gatecode Technologies for CMS Engineering?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            When you partner with Gatecode Technologies, you receive a dedicated team of CMS architects committed to code quality and long-term usability:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>100% Bespoke Codebase:</strong> Custom themes and administrative structures without dependency on heavy commercial page builders.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete Editorial Training:</strong> Comprehensive documentation and hands-on walkthroughs for your marketing and content staff.</li>
            <li style={{ marginBottom: '10px' }}><strong>Ongoing Technical Maintenance:</strong> Regular core updates, proactive database optimization, and continuous security patching.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CMSWebsiteDevelopmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/web-development' },
      { '@type': 'ListItem', position: 3, name: 'CMS Website Development', item: 'https://gatecode.in/services/web-development/cms-website-development' },
    ],
  };

  const cmsServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'CMS Website Development',
    name: 'CMS Website Development Services in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'CMS website development company in India specializing in WordPress, Shopify, Headless CMS, Drupal, Strapi, and custom Content Management System development.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a CMS website, and why does my business need one?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A Content Management System (CMS) is a platform that allows you to easily create, manage, and update your website's content without needing to write any code. If your business requires frequent updates—such as publishing blogs, adding new products, or updating company news—a CMS gives you complete control over your website quickly and efficiently.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need technical knowledge or coding skills to manage my CMS website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all! The primary benefit of our CMS development services is providing you with a highly intuitive and user-friendly admin dashboard. You and your team can easily edit text, upload images, manage pages, and publish content with just a few clicks, requiring zero technical expertise.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you build custom CMS platforms or use headless CMS architectures?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We do both based on your specific business requirements. We specialize in building custom-engineered CMS portals tailored to your exact workflows. Additionally, as a high-performance web development company, we integrate modern Headless CMS solutions using frameworks like React and Next.js, which separate the backend content management from the frontend to deliver lightning-fast loading speeds.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my CMS website be secure against hacking and vulnerabilities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, security is a top priority for us. Unlike poorly maintained template sites that are prone to attacks, we build secure CMS architectures with built-in SSL, data encryption, and advanced defenses against common web vulnerabilities. We also offer ongoing maintenance services to ensure your CMS is always updated with the latest security patches.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the CMS websites developed by Gatecode SEO-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We engineer our CMS solutions with search engine optimization (SEO) at their core. We ensure clean code structure, fast page load times, mobile responsiveness, and easy-to-use SEO modules so you can effortlessly optimize your meta tags, URLs, and content to rank higher on Google.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cmsServiceSchema) }}
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
      <FAQSection
        eyebrow="FAQS"
        titleLine1="FREQUENTLY ASKED"
        titleHighlight="QUESTIONS"
        subtitle="Explore answers to essential questions regarding CMS architecture, admin controls, Headless CMS integrations, security, and SEO optimization."
        items={cmsWebsiteDevFaqs}
      />
    </div>
  );
};

export default CMSWebsiteDevelopmentPage;

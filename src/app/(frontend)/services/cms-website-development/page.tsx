"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for CMS Website Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (20).png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CMS<br />WEBSITE<br />DEVELOPMENT
          </h1>
          <p className="dm-hero-subtitle">
            Build flexible, easy-to-manage websites with powerful content management systems<br />
            designed for growth and efficiency.
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
          At Gatecode Technologies Pvt. Ltd., we provide CMS (Content Management System) website development services that give you full control 
          over your website content without technical complexity. Our solutions are designed to be user-friendly, scalable, and secure—allowing 
          you to update, manage, and expand your website effortlessly. Whether it's a business website, blog, or e-commerce platform, we build 
          CMS-driven websites tailored to your needs and future growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for CMS Website Development) ====================
const services = [
  { title: 'Custom CMS Development', desc: 'Tailor-made CMS solutions designed according to your business requirements and content management needs.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Responsive CMS Design', desc: 'Mobile-friendly CMS websites optimized for seamless performance across all devices.', color: '#fbff06', text: '#000000' },
  { title: 'WordPress Development', desc: 'Professional WordPress websites with flexible design, easy management, and scalable features.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'E-Commerce CMS Solutions', desc: 'CMS based ecommerce platforms with easy product management and secure transaction systems.', color: '#fbff06', text: '#000000' },
  { title: 'Plugin & Module Integration', desc: 'Integration of powerful plugins and modules to extend website functionality and performance.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'SEO-Friendly CMS Structure', desc: 'Optimized CMS architecture to improve search engine rankings and online visibility.', color: '#fbff06', text: '#000000' },
  { title: 'Migration & Upgrades', desc: 'Smooth migration from existing platforms and upgrades to the latest CMS technologies.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Maintenance & Support', desc: 'Ongoing CMS support, updates, and performance optimization for long-term efficiency.', color: '#fbff06', text: '#000000' },
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
  'Easy content management without technical skills',
  'Cost-effective and scalable solutions',
  'Quick updates and content publishing',
  'SEO-friendly website structure',
  'Secure and reliable platform',
  'Customizable features and functionalities',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose CMS Website Development
        </h2>
        <p className="dm-about-text dm-about-text-left">
          CMS websites provide flexibility, ease of use, and scalability, making them ideal for businesses that want control over their digital content. 
          Our CMS solutions are designed to simplify content management while ensuring high performance, security, and user experience.
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
              src="/images/path.png"
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
  { title: 'Requirement Analysis', desc: 'Understanding your content structure and business needs.' },
  { title: 'CMS Selection & Planning', desc: 'Choosing the right CMS platform and planning architecture.' },
  { title: 'UI/UX Design', desc: 'Designing intuitive and user-friendly interfaces.' },
  { title: 'Development & Integration', desc: 'Building CMS website with required features and integrations.' },
  { title: 'Testing & Optimization', desc: 'Ensuring performance, responsiveness, and security.' },
  { title: 'Deployment & Support', desc: 'Launching the website with ongoing support and updates.' },
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
            <Image src="/images/1.jpg" alt="E-Commerce CMS Platforms - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Education and E-Learning Portal CMS - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Corporate Business CMS Solutions - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Media and Blogging Website CMS - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Healthcare and Medical Info CMS - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
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
      { '@type': 'ListItem', position: 3, name: 'CMS Website Development', item: 'https://gatecode.in/services/cms-website-development' },
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
        name: 'Which Content Management Systems (CMS) do you develop websites for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build CMS websites on WordPress, Shopify, WooCommerce, Magento, Strapi, Sanity, and custom headless CMS architectures tailored to your workflow.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I be able to update my website content easily without coding skills?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All our CMS platforms feature intuitive admin dashboards enabling non-technical users to publish blogs, edit pages, manage products, and update imagery effortlessly.',
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
      <ContactSection />
    </div>
  );
};

export default CMSWebsiteDevelopmentPage;

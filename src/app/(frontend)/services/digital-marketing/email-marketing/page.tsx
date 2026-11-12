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
        style={{ backgroundImage: `url('/images/Rectangle 228 (12).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Data-Driven Email Marketing Services That Nurture Leads &amp; Accelerate Retention
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we help businesses build direct, high-value relationships with their audience through strategic email campaigns. Our email marketing services combine lifecycle automation, audience segmentation, responsive design, and conversion-focused copywriting to turn subscribers into repeat customers.
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
          Email marketing remains one of the most cost-effective, high-return communication channels available today. Unlike third-party social algorithms where reach is rented and unpredictable, your email list is an owned asset that enables direct, personalized engagement with prospects and existing customers.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we move beyond generic email blasts. We build intelligent, behavior-triggered automated workflows that deliver relevant messages at the right stage of the buyer journey — from warm welcome series and educational drip sequences to abandoned cart reminders and re-engagement campaigns.
        </p>
        <p className="dm-about-text">
          Whether you manage an e-commerce platform, a B2B enterprise, or a growing service business, our team designs mobile-responsive templates, monitors deliverability protocols, and conducts continuous A/B testing. We focus on inbox placement, meaningful open rates, and measurable revenue generation that supports long-term customer lifetime value.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Email Marketing Services ====================
const services = [
  {
    title: 'Strategic Email Campaign Planning',
    desc: 'We develop targeted email calendars aligned with promotional cycles, product releases, and customer journey milestones.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Automated Drip & Lifecycle Workflows',
    desc: 'We architect automated email sequences for onboarding, lead nurturing, transactional confirmations, and cart recovery.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Responsive Template Design & Coding',
    desc: 'We design custom, visually polished email templates tested across major email clients for flawless mobile rendering.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Advanced Audience Segmentation',
    desc: 'We segment subscriber databases by purchase history, engagement frequency, and demographics for highly personalized messaging.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Persuasive Copywriting & Subject Lines',
    desc: 'We write compelling subject lines, preview text, and body copy that capture attention and drive clear call-to-action clicks.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Promotional Campaigns & Product Launches',
    desc: 'We execute high-impact broadcast emails for seasonal sales, announcements, and exclusive offers that generate immediate sales.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Deliverability & List Hygiene Management',
    desc: 'We monitor sender reputation, authenticate domain protocols (DKIM, SPF, DMARC), and clean inactive contacts.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'A/B Testing & Revenue Analytics',
    desc: 'We test send times, layouts, and headlines, providing comprehensive reporting on open rates, click rates, and conversions.',
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
        <h2 className="dm-section-title">Our Email Marketing Services</h2>
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
  'Tailored email strategies focused on subscriber lifetime value and repeat sales',
  'Automated onboarding, nurture, and abandoned-cart sequences that work 24/7',
  'Clean responsive email templates optimized for both desktop and mobile email clients',
  'Advanced list segmentation based on subscriber activity, interests, and purchase history',
  'Proactive deliverability monitoring to ensure messages land safely in the primary inbox',
  'Transparent reporting on open rates, click-throughs, and campaign-driven revenue',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Email Marketing?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Successful email marketing is about delivering value to the inbox, not overloading subscribers with noise. By combining thoughtful segmentation, reliable automation, and compelling design, we help you nurture prospects into loyal buyers.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our specialists focus on sustainable list health, rigorous deliverability standards, and measurable revenue generation that strengthens customer retention over time.
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
              alt="Email Marketing Automation and Conversion Workflows - Gatecode Technologies"
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
    title: '1. Subscriber & Audience Audit',
    desc: 'We analyze your current list health, engagement levels, platform settings, and domain authentication protocols.',
  },
  {
    title: '2. Customer Journey Architecture',
    desc: 'We map out key subscriber touchpoints and design targeted automated sequences tailored to customer behaviors.',
  },
  {
    title: '3. Template Design & Copywriting',
    desc: 'We write persuasive copy, subject lines, and preview headers, designing responsive email templates aligned with your brand.',
  },
  {
    title: '4. Segmentation & Tech Integration',
    desc: 'We configure subscriber groups, connect CRM and e-commerce triggers, and test rendering across various email clients.',
  },
  {
    title: '5. Campaign Launch & Workflow Activation',
    desc: 'We activate automated email funnels and schedule broadcast campaigns for optimal day and time open windows.',
  },
  {
    title: '6. Deliverability & Performance Optimization',
    desc: 'We track open rates, click-throughs, and revenue metrics, conducting ongoing A/B tests to improve conversions.',
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
        <h2 className="dm-section-title">Our Email Marketing Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Email Campaigns - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Newsletter Campaigns - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Patient Communication Emails - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Course Email Sequences - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Hospitality Email Promotions - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
// ==================== Main Page Component ====================
const EmailMarketingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Email Marketing Services', item: 'https://www.gatecode.in/services/digital-marketing/email-marketing' },
    ],
  };

  const emailServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Email Marketing Services',
    name: 'Email Marketing Services Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://www.gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional email marketing agency offering email automation, newsletter management, audience segmentation, responsive email templates, and deliverability optimization.',
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emailServiceSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <ServiceFAQ slug="digital-marketing/email-marketing" serviceName="email marketing" />
      <ContactSection />
    </div>
  );
};

export default EmailMarketingServicesPage;

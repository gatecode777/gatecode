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
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Performance-Focused Email Marketing Agency for Sustainable ROI
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your strategic partner for high-impact email marketing and automated customer communication. We help forward-thinking businesses build valuable subscriber relationships, reduce churn, and turn email subscribers into long-term brand advocates through data-backed execution.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Building Automated Customer Journeys &amp; High-Retention Inboxes
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            The secret to high-performing email marketing is relevance. Our email specialists combine deep behavioral segmentation with clean responsive design and deliverability best practices, ensuring your brand stays top-of-mind without fatiguing your audience.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Automated Lifecycle Sequences</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Deploy smart automated triggers including welcome series, browse abandonment, post-purchase follow-ups, and win-back campaigns.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Segmentation &amp; Personalization</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Deliver custom messages based on browsing history, past purchases, engagement frequency, and expressed subscriber interests.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Deliverability &amp; Reputation Management</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Protect domain health through SPF, DKIM, and DMARC configurations, list hygiene protocols, and anti-spam compliance standards.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Conversion-Focused Design &amp; Copy</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Engage readers with clean visual layouts, compelling subject lines, and clear calls-to-action optimized for all screen sizes.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Email Marketing?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A disciplined email marketing system unlocks steady, predictable revenue. Partnering with our specialized email marketing team delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>End-to-End Workflow Execution:</strong> From ESP integration and template coding to copy creation and automated trigger scheduling.</li>
            <li style={{ marginBottom: '10px' }}><strong>Subscriber-First Strategy:</strong> High-value content calendars that respect the subscriber’s inbox while maximizing engagement and conversions.</li>
            <li style={{ marginBottom: '10px' }}><strong>Data-Driven Accountability:</strong> Transparent reporting on open rates, click-through rates, unsubscribe rates, and revenue per recipient.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const EmailMarketingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Email Marketing Services', item: 'https://gatecode.in/services/digital-marketing/email-marketing' },
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
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional email marketing agency offering email automation, newsletter management, audience segmentation, responsive email templates, and deliverability optimization.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What email marketing platforms do you support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support all major Email Service Providers (ESPs) including Klaviyo, Mailchimp, HubSpot, ActiveCampaign, Brevo, Omnisend, and custom SMTP setups.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure emails do not end up in the spam folder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We configure proper domain authentication records (DKIM, SPF, DMARC), enforce list hygiene, write spam-compliant copy, and monitor sender reputation metrics continuously.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emailServiceSchema) }}
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

export default EmailMarketingServicesPage;

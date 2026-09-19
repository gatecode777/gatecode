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
            Engaging Social Media Post Design Services That Stop Feeds &amp; Build Loyalty
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we craft scroll-stopping social media creatives tailored to your brand identity. Our social media post design services cover high-engagement Instagram carousels, promotional story templates, click-worthy YouTube thumbnails, and LinkedIn graphics designed to maximize social interaction.
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
          In fast-scrolling social media feeds, your audience decides whether to pause or keep scrolling within a fraction of a second. High-quality graphic design is the decisive factor that elevates your brand above generic competitor posts, establishing visual authority and encouraging users to read your caption and engage.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we treat every post creative as a strategic asset. Our social designers blend bold typography with custom illustrations, clean white space, and brand colors to ensure immediate readability on mobile screens. We format content specifically for platform algorithms — creating save-worthy carousels, shareable infographics, and high-CTR ad creatives.
        </p>
        <p className="dm-about-text">
          Whether you manage daily organic community posts on Instagram and LinkedIn or invest in paid advertising campaigns across Meta, we deliver scalable creative design packages. We ensure pixel-perfect asset delivery across all platform aspect ratios, helping your business build a vibrant, cohesive social media presence that converts followers into clients.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Social Media Post Design Services ====================
const services = [
  {
    title: 'Instagram Feed & Single Post Creatives',
    desc: 'We design high-contrast static posts and graphic layouts that reinforce brand aesthetics and encourage viewer engagement.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Multi-Slide Educational Carousels',
    desc: 'We structure step-by-step swipeable carousel decks that educate prospects, boost dwell time, and maximize post saves and shares.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Story & Highlight Cover Graphics',
    desc: 'We create dynamic vertical 9:16 story layouts and cohesive profile highlight covers that maintain a polished brand profile aesthetic.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'High-CTR YouTube Thumbnails',
    desc: 'We design expressive, high-contrast video thumbnails engineered to increase impressions and click-through rates on YouTube.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'LinkedIn Corporate Carousels & Posts',
    desc: 'We produce clean, authoritative PDF document carousels and infographics tailored to capture B2B decision-makers on LinkedIn.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Promotional Ad Visuals & Meta Creatives',
    desc: 'We craft conversion-focused ad banners and story ads designed to lower customer acquisition costs on Facebook and Instagram.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Custom Brand Template Systems',
    desc: 'We build editable, reusable brand templates in Figma and Canva that empower your team to post consistently and quickly.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Seasonal & Event Campaign Graphics',
    desc: 'We create festive holiday banners, flash-sale graphics, and event announcements that capture seasonal purchasing momentum.',
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
        <h2 className="dm-section-title">Our Social Media Post Design Services</h2>
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
  'Scroll-stopping visual compositions tailored for mobile screen contrast and legibility',
  'Consistent typography and color palettes that make your posts instantly recognizable',
  'Platform-specific dimension optimization for Instagram, LinkedIn, Facebook, and X',
  'Content designed around algorithm retention triggers such as carousel swipes and saves',
  'Fast turnaround times supporting monthly content calendars and urgent ad rollouts',
  'Full export packages delivered in high-resolution PNG, WebP, and layered source files',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Social Media Post Design?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Posting generic stock photos dilutes audience trust. High-performing social accounts rely on consistent, bespoke visual branding that delivers real value and reflects genuine craftsmanship in every piece of content.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our social design artists balance aesthetic flair with engagement psychology, ensuring every graphic not only looks beautiful but actively supports your social reach and audience growth.
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
              alt="Social Media Creative Post Design and Visual Engagement - Gatecode Technologies"
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
    title: '1. Brand Voice & Audience Review',
    desc: 'We review your brand guidelines, primary color palettes, typography preferences, and target audience aesthetics.',
  },
  {
    title: '2. Content Calendar Alignment',
    desc: 'We map post designs to your monthly schedule, grouping creatives by theme, promotion, educational topic, or announcement.',
  },
  {
    title: '3. Visual Composition & Layout',
    desc: 'Our designers build high-contrast graphics, balancing primary headlines, supporting illustrations, and brand badges.',
  },
  {
    title: '4. Mobile Legibility Verification',
    desc: 'We test every design at real smartphone dimensions to ensure typography and core focal points are effortlessly readable.',
  },
  {
    title: '5. Collaborative Batch Review',
    desc: 'We present creative batches for your review, incorporating feedback and fine-tuning details for complete alignment.',
  },
  {
    title: '6. Optimized Multi-Platform Delivery',
    desc: 'We export ready-to-publish assets formatted for Instagram (1:1, 4:5), Stories (9:16), LinkedIn (PDF carousels), and web feeds.',
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
        <h2 className="dm-section-title">Our Social Media Design Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Instagram Product Post - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Property Social Creative - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Informative Medical Social Post - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Course Announcement Graphic - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Restaurant Menu and Offer Post - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional Social Media Post Design Agency for High-Engagement Feeds
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your creative agency for custom social media post design, swipeable carousel infographics, and high-converting ad graphics. We help brands capture attention in crowded feeds, foster community discussions, and turn followers into paying clients.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Designed for Mobile Screens &amp; High-Retention Social Algorithms
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Modern social platforms prioritize content that commands viewer dwell time, saves, and shares. Our social creative specialists design purposeful visual sequences that balance aesthetic beauty with clear information hierarchy, ensuring every post reinforces your brand authority.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Educational Carousel Decks</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Increase viewer dwell time and saves with structured, multi-slide swipeable carousels packed with digestible insights.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Conversion-Focused Ad Creatives</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Drive lower cost-per-click and higher conversion rates on Meta Ads with eye-catching, high-contrast promotional creatives.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>High-CTR Video Thumbnails</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Maximize clicks on YouTube and social video platforms with bold typography, expressive imagery, and clear focal cues.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Brand Template Systems</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Empower rapid internal posting with custom Figma and Canva templates aligned with your corporate visual standards.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Social Media Design?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            High-caliber social media design builds compounded audience trust. Collaborating with our design studio delivers:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Mobile-First Formatting:</strong> Pixel-perfect aspect ratios (1:1, 4:5, 9:16, 16:9) tested for clarity across all device screens.</li>
            <li style={{ marginBottom: '10px' }}><strong>Brand-Aligned Consistency:</strong> Custom design systems that prevent your feed from looking disjointed or template-driven.</li>
            <li style={{ marginBottom: '10px' }}><strong>Predictable Workflow Schedules:</strong> Efficient batch production that keeps your content calendar filled weeks in advance.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SocialMediaPostDesignServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/graphic-design' },
      { '@type': 'ListItem', position: 3, name: 'Social Media Post Design', item: 'https://gatecode.in/services/graphic-design/social-media-design' },
    ],
  };

  const socialDesignServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Social Media Post Design Services',
    name: 'Social Media Post Design Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional social media post design agency creating Instagram carousels, feed graphics, story templates, YouTube thumbnails, and LinkedIn post visuals.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What platforms do you design social media posts for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We create tailored designs for Instagram (posts, carousels, stories), LinkedIn, Facebook, YouTube (thumbnails, banners), and X (Twitter).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you provide editable templates in Figma or Canva?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we can build custom, reusable brand templates in Canva or Figma so your internal marketing team can produce on-brand graphics quickly.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialDesignServiceSchema) }}
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

export default SocialMediaPostDesignServicesPage;

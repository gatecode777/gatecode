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
        style={{ backgroundImage: `url('/images/Rectangle 228 (14).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Strategic Content Marketing Services That Build Authority, Traffic &amp; Lasting Trust
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we help businesses turn expertise into valuable digital assets. Our content marketing services combine audience research, keyword mapping, informative long-form articles, lead magnets, and multi-channel distribution to establish your brand as an authoritative industry leader.
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
          Effective content marketing is about answering the real questions your prospective buyers ask before they make a purchasing decision. By publishing thoughtful, solution-oriented content that educates and empowers your audience, your business builds trust long before a sales conversation begins.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., we treat content as an appreciating business asset. We do not produce generic, superficial articles; instead, our team develops comprehensive topic clusters, actionable guides, case studies, and industry resources that earn organic backlinks and rank consistently on search engines.
        </p>
        <p className="dm-about-text">
          Whether you need to explain complex technical solutions, capture top-of-funnel search queries, or provide downloadable resources that capture qualified leads, our specialists manage the entire content lifecycle. From keyword research and content mapping to editorial production and syndication, we ensure your content delivers measurable commercial value.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Content Marketing Services ====================
const services = [
  {
    title: 'Content Strategy & Editorial Roadmaps',
    desc: 'We map out structured publishing calendars based on customer pain points, competitor gaps, and search intent.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'SEO-Driven Blog & Article Hubs',
    desc: 'We produce comprehensive, high-value articles organized into topic clusters that build topical domain authority.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Lead Magnets & Downloadable Guides',
    desc: 'We design actionable eBooks, whitepapers, checklists, and templates that convert casual website readers into qualified leads.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Customer Case Studies & Success Stories',
    desc: 'We craft compelling narrative case studies that showcase your real client outcomes and build persuasive social proof.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Multi-Channel Content Distribution',
    desc: 'We amplify your content across newsletters, social channels, and industry syndication platforms to maximize reach.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Visual Assets & Infographics',
    desc: 'We transform complex data and workflows into clean, shareable infographics and visual guides that attract backlinks.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Content Refresh & Historical Optimization',
    desc: 'We update existing blog posts with fresh data, improved headers, and expanded sections to regain declining search rankings.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Content ROI & Pipeline Analytics',
    desc: 'We track reader engagement, assisted conversions, organic keyword growth, and pipeline impact with clear reporting.',
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
        <h2 className="dm-section-title">Our Content Marketing Services</h2>
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
  'Comprehensive content roadmaps based on audience pain points and commercial intent',
  'High-authority articles and resources that build lasting credibility and trust',
  'Integrated distribution strategies amplifying your reach across search and social',
  'High-value lead magnets designed to capture and nurture qualified prospects',
  'Regular content updates keeping existing assets fresh, relevant, and authoritative',
  'Transparent tracking connecting content performance directly to pipeline growth',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Content Marketing?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Publishing content without a deliberate distribution and search strategy rarely produces results. We ensure every article, guide, and case study serves a distinct purpose — whether answering common customer objections or ranking for high-value search queries.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, we combine deep subject matter research with natural storytelling, ensuring your content stands out against generic AI summaries and genuinely resonates with your target buyers.
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
              alt="Content Marketing Strategy and Organic Growth Funnel - Gatecode Technologies"
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
    title: '1. Audience & Content Gap Audit',
    desc: 'We analyze your target audience persona, customer questions, and competitive content gaps to uncover fresh opportunities.',
  },
  {
    title: '2. Editorial Mapping & Topic Clusters',
    desc: 'We organize topics into structured content pillars, identifying target search intents and priority publication timelines.',
  },
  {
    title: '3. Research & High-Standard Production',
    desc: 'Our writers and editors craft thorough, informative content backed by real industry examples and clear actionable insights.',
  },
  {
    title: '4. On-Page SEO & Visual Integration',
    desc: 'We format articles with readable typography, relevant headings, custom graphics, and clear conversion paths.',
  },
  {
    title: '5. Multi-Channel Syndication & Outreach',
    desc: 'We distribute assets across email lists, social networks, and industry forums to generate immediate traffic and visibility.',
  },
  {
    title: '6. Tracking & Content Refresh Cycles',
    desc: 'We review traffic patterns and keyword rankings, updating existing articles regularly to maintain top search visibility.',
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
        <h2 className="dm-section-title">Our Content Marketing Process</h2>
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
            <Image src="/images/1.webp" alt="E-Commerce Blog and Content Strategy - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Buyer Guide Content - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Informative Content Marketing - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Training Educational Hubs - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Thought Leadership Articles - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Authority-Building Content Marketing Agency for Sustainable Organic Growth
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your strategic content marketing partner dedicated to turning informative writing into business growth. We help brands build authority, earn high-intent search visibility, and nurture prospective clients through comprehensive, high-value content solutions.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Connecting Buyer Intent with Thoughtful, High-Value Educational Content
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            In an era overflowing with generic information, depth and authenticity stand out. Our content marketing strategists craft well-researched, readable assets that answer complex questions, demonstrate real subject-matter expertise, and establish your brand as a trusted industry advisor.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Educational Content Hubs</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Build comprehensive resource centers and topic clusters that solve audience challenges while earning sustainable search engine authority.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>High-Converting Gated Assets</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Develop informative guides, industry checklists, and whitepapers that attract decision-makers and generate qualified leads.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Multi-Channel Syndication</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Distribute and repurpose long-form assets into engaging newsletters, social threads, and visual slides to amplify content reach.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Long-Term Search Authority</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Earn valuable organic rankings and natural backlinks with evergreen, helpful content structured for both human readers and search engines.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Content Marketing?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Producing high-caliber content requires a strategic editorial engine. Collaborating with our content marketing team provides:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Audience-Aligned Editorial Direction:</strong> Topic discovery centered around what your prospects search for, read, and share.</li>
            <li style={{ marginBottom: '10px' }}><strong>High Editorial Standards:</strong> Meticulous research, original perspectives, and readable formatting without filler.</li>
            <li style={{ marginBottom: '10px' }}><strong>Measurable Lead Impact:</strong> Clear conversion funnels linking educational reading directly to service inquiries and demo requests.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const ContentMarketingServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/digital-marketing' },
      { '@type': 'ListItem', position: 3, name: 'Content Marketing Services', item: 'https://gatecode.in/services/digital-marketing/content-marketing' },
    ],
  };

  const contentServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Content Marketing Services',
    name: 'Content Marketing Services Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional content marketing agency offering strategic content planning, SEO blog writing, lead magnets, case studies, and multi-channel content distribution.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does content marketing generate business leads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By answering key customer questions and offering downloadable resources like guides and templates, content marketing attracts prospects during their research phase and provides natural pathways to get in touch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you help with content distribution as well as writing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we develop multi-channel distribution strategies including email newsletters, social media snippets, and community syndication to ensure your content reaches active readers.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentServiceSchema) }}
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

export default ContentMarketingServicesPage;

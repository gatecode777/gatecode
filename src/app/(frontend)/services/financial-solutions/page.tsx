"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/accounting.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            STRATEGIC<br />FINANCIAL<br />SOLUTIONS
          </h1>
          <p className="dm-hero-subtitle">
            Improving performance and driving growth through strategies for
            sustainable and long-term financial success.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we provide strategic financial solutions that go beyond basic accounting. Our focus is on helping businesses plan, manage, and optimize their financial resources effectively. By combining financial expertise with market insights, we support better decision-making, improve profitability, and ensure long-term financial stability. Whether you are a startup or an established business, our solutions are tailored to align with your growth objectives.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { title: 'Financial Planning & Strategy', desc: 'Developing structured financial strategies aligned with short-term and long-term business goals.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Budgeting & Forecasting', desc: 'Creating accurate budgets and financial forecasts to support future planning.', color: '#fbff06', text: '#000000' },
  { title: 'Cash Flow Management', desc: 'Monitoring and optimizing cash flow to ensure operational liquidity.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Profitability Analysis', desc: 'Analyzing revenue and expenses to identify opportunities for improving profitability.', color: '#fbff06', text: '#000000' },
  { title: 'Investment & Growth Advisory', desc: 'Providing guidance on investments and expansion strategies for business growth.', color: '#fbff06', text: '#000000' },
  { title: 'Risk Assessment & Management', desc: 'Identifying financial risks and implementing strategies to mitigate them.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Cost Optimization', desc: 'Analyzing expenses and implementing cost-saving strategies without compromising quality.', color: '#fbff06', text: '#000000' },
  { title: 'Financial Reporting & Insights', desc: 'Delivering detailed reports and actionable insights for better management planning.', color: '#4e7c7e', text: '#ffffff' },
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

// ==================== DigitalWhyChoose Component ====================
const benefits = [
  'Improved financial planning and analysis',
  'Performance-focused profitability and cost management',
  'Data-driven decision-making',
  'Reduced financial risks',
  'Optimized resource allocation',
  'Long-term growth and stability',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Strategic Financial Solutions
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on delivering forward-thinking financial strategies that help businesses grow sustainably. Our team combines expertise, analysis, and strategic planning to ensure your financial decisions are well-informed and aligned with your long-term goals.
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
              alt="Strategic Corporate Financial Advisory Process - Gatecode Technologies"
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

// ==================== DigitalProcess Component ====================
const processSteps = [
  { title: 'Financial Assessment', desc: 'Understanding your current financial position and business objectives.' },
  { title: 'Strategy Development', desc: 'Creating customized financial plans and growth strategies.' },
  { title: 'Implementation Support', desc: 'Assisting in executing financial strategies effectively.' },
  { title: 'Monitoring & Analysis', desc: 'Tracking financial performance and identifying requirements.' },
  { title: 'Optimization & Alignment', desc: 'Refining strategies based on performance and market changes.' },
  { title: 'Ongoing Advisory', desc: 'Providing continuous financial guidance and support.' },
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
        <h2 className="dm-section-title">Our Process</h2>
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

// ==================== DigitalIndustries Component ====================
const industries = [
  'Finance & Accounting',
  'E-Commerce & Retail',
  'Corporate Businesses',
  'Startups & Enterprises',
  'Real Estate & Construction',
  'Healthcare & Wellness',
  'Professional Industry Services',
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
            <Image src="/images/1.jpg" alt="Investment and Financial Planning Audits - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="E-Commerce Financial Liquidity Audits - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Corporate Business Finance Strategies - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Startup Seed Investment Advisory - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Real Estate Property Development Budgeting - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const DigitalMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="digital-marketing-page">
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

export default DigitalMarketingPage;

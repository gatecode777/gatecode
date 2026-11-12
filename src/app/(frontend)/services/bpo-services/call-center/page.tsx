"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (17).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CALL CENTER<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Scale customer engagement, improve first-call resolution, and accelerate sales pipeline growth with 24/7 inbound and outbound contact center solutions.
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
          At Gatecode Technologies Pvt. Ltd., we provide dedicated inbound and outbound call center solutions engineered to deliver exceptional customer experiences and drive measurable commercial results. High call abandonment rates, lengthy queue wait times, and poorly trained phone agents damage brand perception and cause immediate customer attrition. Our modern contact center operations utilize cloud PBX telephony, intelligent interactive voice response (IVR) routing, real-time call recording, and rigorous speech analytics. Our agents receive thorough brand-immersion training to handle complex inquiries with empathy, professional articulation, and technical clarity. From resolving high-volume customer service requests and processing orders to conducting outbound telemarketing, market research surveys, and lead qualification campaigns, we ensure every voice interaction strengthens customer loyalty and boosts revenue.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'Inbound Customer Service & Support', 
    desc: 'Managing inbound inquiries, product questions, billing assistance, and account modifications with fast response and high first-contact resolution.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Outbound Sales & Telemarketing', 
    desc: 'Executing structured cold calling and follow-up outreach campaigns to promote products, pitch services, and generate qualified sales leads.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Lead Qualification & Appointment Setting', 
    desc: 'Contacting prospective B2B/B2C leads, validating buying intent, qualifying budgets, and scheduling sales demos directly on sales reps’ calendars.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Order Processing & Tracking Support', 
    desc: 'Handling phone-based orders, payment processing, shipment status inquiries, and return merchandise authorizations (RMA) with complete accuracy.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Customer Satisfaction & NPS Surveys', 
    desc: 'Conducting post-purchase customer feedback calls to collect Net Promoter Scores (NPS), assess service quality, and identify churn risks.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Welcome Calls & Account Onboarding', 
    desc: 'Welcoming newly registered users, guiding them through product setups, and ensuring seamless adoption during initial customer onboarding.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Subscription Renewal & Retention', 
    desc: 'Proactively contacting expiring accounts to negotiate renewals, provide plan recommendations, and mitigate customer churn.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Intelligent IVR & Call Routing', 
    desc: 'Designing intuitive interactive voice response menus and skills-based routing rules that connect callers with the right specialist immediately.', 
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

// ==================== DigitalWhyChoose Component ====================
const benefits = [
  'Reduced average handle time (AHT) without compromising call quality',
  'High first-contact resolution (FCR) rates minimizing repetitive callback loops',
  '24/7 global time zone support covering North America, Europe, and APAC',
  'Significant reduction in telecom infrastructure and agent facility costs',
  '100% call recording, speech analytics, and weekly QA performance reports',
  'Rapid agent scalability to absorb seasonal retail and promotion surges',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Call Center Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine empathetic, highly articulate voice talent with cutting-edge cloud telephony. Our continuous quality assurance, call scoring benchmarks, and deep CRM integration ensure that every customer conversation is handled with professionalism and brand authenticity.
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
              alt="Call Center Operations and Quality Framework - Gatecode Technologies"
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
  { title: 'Call Flow & Script Architecture', desc: 'Design comprehensive conversation flows, call escalation paths, FAQ rebuttals, and objection scripts.' },
  { title: 'Agent Onboarding & Product Training', desc: 'Immerse selected agents in company culture, product features, software systems, and tone of voice.' },
  { title: 'Telephony & CRM Integration', desc: 'Configure cloud PBX lines, local DID numbers, automated dialers, and real-time CRM screen-pops.' },
  { title: 'Supervised Pilot & Calibration', desc: 'Launch test call campaigns under direct supervisor monitoring with 100% call evaluation and feedback.' },
  { title: 'Live 24/7 Campaign Execution', desc: 'Scale to scheduled operational shifts with real-time queue monitoring and dynamic workforce management.' },
  { title: 'Speech Analytics & Quality Auditing', desc: 'Conduct daily call grading, sentiment analysis, and continuous performance optimization sessions.' },
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
  'E-Commerce & Retail',
  'Healthcare & Medical',
  'Logistics & Supply Chain',
  'Education & E-Learning',
  'Real Estate & Property',
  'Banking & Financial Services',
  'SaaS & Technology Startups',
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
            <Image src="/images/1.webp" alt="Inbound Customer Support Operations - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient Helpline Coordination - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Financial Inquiry Call Handling - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics Shipment Tracking Helpdesk - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Outbound Lead Generation Calling - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CallCenterServicesPage = () => {
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
      <ServiceFAQ slug="bpo-services/call-center" serviceName="call center" />
      <ContactSection />
    </div>
  );
};

export default CallCenterServicesPage;

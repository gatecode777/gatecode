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

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Inbound and Outbound Call Center Outsourcing Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Managing a full-scale corporate call center internally requires significant capital investments in telephony hardware, recurring recruitment, and floor supervision. At Gatecode Technologies, our managed call center services give businesses access to highly trained voice professionals, enterprise cloud PBX technology, and round-the-clock coverage that drives customer satisfaction.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>24/7 Inbound Customer Service</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Delivering responsive assistance for billing questions, account troubleshooting, product orders, and complaint escalations.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Outbound Sales & Telemarketing</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Targeted outreach campaigns designed to qualify warm marketing leads, re-engage dormant customers, and schedule executive sales meetings.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Order Processing & Returns (RMA)</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Managing telephone order placements, payment verifications, logistics updates, and dispute resolutions directly inside your CRM.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Intelligent Cloud Telephony</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Advanced IVR menus, predictive dialers, automatic call distribution (ACD), and real-time CRM screen-pops that streamline caller routing.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Outsource Your Call Center to Gatecode Technologies?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Partnering with an accredited contact center provider elevates customer loyalty while dramatically reducing operational overhead. Choosing Gatecode Technologies gives you:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Low Call Abandonment:</strong> Dynamic workforce scheduling ensuring minimal hold times during peak inquiry windows.</li>
            <li style={{ marginBottom: '10px' }}><strong>Strict Quality Benchmarks:</strong> Every agent is scored weekly on tonality, script compliance, empathy, and product knowledge.</li>
            <li style={{ marginBottom: '10px' }}><strong>Transparent Telemetry:</strong> Real-time access to call logs, recording archives, CSAT metrics, and executive reporting dashboards.</li>
          </ul>

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
      <SeoContentSection />
      <ContactSection />
    </div>
  );
};

export default CallCenterServicesPage;

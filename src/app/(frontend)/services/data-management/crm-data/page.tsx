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
        style={{ backgroundImage: `url('/images/data-management.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            CRM DATA<br />MANAGEMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            Optimize pipeline hygiene, eliminate duplicate accounts, and enrich customer records across Salesforce, HubSpot, and Zoho environments.
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
          At Gatecode Technologies Pvt. Ltd., we deliver comprehensive CRM data management and database optimization services designed to keep your sales and marketing engines running at peak efficiency. Customer Relationship Management platforms like Salesforce, HubSpot, Zoho, and Microsoft Dynamics are only as effective as the accuracy of the underlying contact and deal data. Over time, incomplete web forms, manual sales rep entries, and disparate imports result in duplicate contacts, missing phone numbers, outdated job titles, and unassigned leads that stall revenue generation. Our CRM data specialists execute rigorous database audits, deduplication merges, custom field standardization, firmographic data enrichment, and automated workflow validation. By establishing pristine CRM hygiene, we empower sales teams to close deals faster and enable marketers to run hyper-targeted campaigns.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component ====================
const services = [
  { 
    title: 'CRM Data Entry & Activity Logging', 
    desc: 'Accurately capturing prospect contact information, conversation notes, deal values, and meeting logs directly into CRM accounts.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Lead Deduplication & Merging', 
    desc: 'Isolating duplicate leads, accounts, and contacts using fuzzy logic, merging records without losing historical interaction threads.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Firmographic & Contact Enrichment', 
    desc: 'Appending verified company sizes, industry classifications, LinkedIn profiles, corporate email addresses, and direct phone numbers.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Audience Segmentation & Tagging', 
    desc: 'Structuring custom tags, buying persona groups, lifecycle stages, and industry filters for personalized marketing automations.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Pipeline & Deal Hygiene Audits', 
    desc: 'Standardizing deal stages, auditing probability scores, resolving stale opportunities, and maintaining accurate sales forecasting.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Cross-Platform CRM Integration', 
    desc: 'Synchronizing CRM databases with marketing automation tools, ERPs, live chats, customer support desks, and billing software.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Platform Migration & Data Onboarding', 
    desc: 'Seamlessly transferring historical contact histories, notes, and deal pipelines between Salesforce, HubSpot, Zoho, and Dynamics.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Ongoing CRM Quality Governance', 
    desc: 'Establishing automated validation rules, mandatory field constraints, and periodic health checkups to prevent data decay.', 
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
  'Elimination of duplicate contacts and territory routing conflicts',
  'Accelerated sales cycles with enriched and verified decision-maker info',
  'Higher marketing campaign conversion via targeted customer segmentation',
  'Accurate revenue forecasting based on clean, realistic deal stages',
  'Flawless data migration between Salesforce, HubSpot, and Zoho',
  'Strict data confidentiality guaranteed by non-disclosure agreements',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our CRM Data Management Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We combine platform-certified CRM expertise with systematic data auditing protocols. Our team ensures that your CRM functions as a dependable single source of customer truth, eliminating rep confusion, reducing administrative overhead, and maximizing your software investment.
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
              alt="CRM Data Hygiene and Pipeline Management Workflow - Gatecode Technologies"
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
  { title: 'CRM Database Audit & Health Assessment', desc: 'Inspect record volume, duplicate ratios, unassigned leads, and obsolete contact fields.' },
  { title: 'Field Mapping & Schema Standardization', desc: 'Standardize custom dropdown values, mandatory field rules, and lead-scoring criteria.' },
  { title: 'Deduplication & Intelligent Merge', desc: 'Identify identical accounts and merge contact histories without losing valuable activity logs.' },
  { title: 'Data Verification & Attribute Enrichment', desc: 'Cross-reference corporate emails, phone numbers, and company firmographics against verified databases.' },
  { title: 'Workflow Automation & System Sync', desc: 'Configure automated lead assignment, email tracking sync, and marketing automation triggers.' },
  { title: 'Ongoing Hygiene Governance & Monitoring', desc: 'Implement automated validation rules and conduct scheduled monthly quality maintenance checks.' },
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
  'Healthcare & Medical',
  'E-Commerce & Retail',
  'Banking & Finance',
  'Education & Training',
  'Corporate Businesses',
  'Logistics & Operations',
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
            <Image src="/images/1.webp" alt="Corporate CRM Pipeline Management - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Healthcare Patient CRM Optimization - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Retail Customer CRM Loyalty Data - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="SaaS Sales Pipeline Hygiene - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Financial Client Portfolio CRM Structuring - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Professional CRM Data Hygiene and Pipeline Management Services
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Poor CRM data quality creates friction across sales organizations, resulting in duplicate outreach, uncontacted leads, and unreliable pipeline forecasts. At Gatecode Technologies, our CRM data management specialists clean, enrich, and organize your databases across Salesforce, HubSpot, and Zoho, ensuring your commercial teams operate with accurate customer intelligence.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Account & Contact Deduplication</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Merging duplicate records while consolidating historical communication logs, opportunities, and email correspondence.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Lead Enrichment & Validation</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Appending missing corporate parameters, verified decision-maker job titles, and direct dials to boost sales conversion rates.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Audience Segmentation Architecture</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Structuring behavioral tags, industry verticals, and buying intent stages to enable high-performing nurture campaigns.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Platform Migration & Setup</h3>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Transferring databases smoothly during CRM platform upgrades with full relational mapping and zero data truncation.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Clean CRM Data Directly Accelerates Closed Deals
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            A dependable CRM infrastructure empowers sales development reps and account executives to spend time selling rather than fixing broken records. Partnering with Gatecode Technologies ensures:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Zero Territory Conflicts:</strong> Clear account ownership rules and elimination of duplicate leads assigned to multiple reps.</li>
            <li style={{ marginBottom: '10px' }}><strong>Dependable Pipeline Forecasting:</strong> Clean opportunity stages that give executive leadership real visibility into expected revenues.</li>
            <li style={{ marginBottom: '10px' }}><strong>Maximum Software ROI:</strong> Ensure your investment in enterprise CRM tools delivers genuine commercial productivity.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const CRMDataManagementServicesPage = () => {
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

export default CRMDataManagementServicesPage;

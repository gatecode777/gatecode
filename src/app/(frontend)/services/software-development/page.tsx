"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection, { softwareDevFaqs } from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Software Development Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/Rectangle 228 (4).webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            SOFTWARE<br />DEVELOPMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We architect secure, scalable, and custom software systems designed to automate complex workflows, connect business applications, and fuel sustainable operational growth.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Software Development Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we engineer software solutions around the way your organization actually functions. Before writing code or selecting frameworks, our technical consultants thoroughly analyze your operational bottlenecks, user roles, data flows, and commercial goals. This disciplined discovery process eliminates unnecessary feature bloat, delivering purposeful software that empowers your workforce and satisfies your users.
        </p>
        <p className="dm-about-text" style={{ marginTop: '16px' }}>
          From custom enterprise software, workflow automation portals, and cloud-native systems to integrated CRM and ERP architectures, we build secure, maintainable software engineered for real-world resilience. Our development practices prioritize modular microservices, clean APIs, role-based security, and future-proof flexibility, ensuring your digital infrastructure scales seamlessly alongside your business expansion.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Software Development Services) ====================
const services = [
  { 
    title: 'Custom Software Development', 
    desc: 'Bespoke software applications engineered from the ground up to match your exact business logic and operational processes.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Cloud-Based Software Solutions', 
    desc: 'Scalable, multi-tenant cloud applications built with high availability, elastic hosting, and secure global accessibility.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Enterprise Software Solutions', 
    desc: 'Robust software platforms designed to orchestrate departmental workflows, automate reporting, and boost enterprise productivity.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'CRM & ERP Development', 
    desc: 'Custom CRM and ERP systems engineered to unify customer relationships, finance, inventory, and supply chain tracking.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Business Automation Software', 
    desc: 'Intelligent automation tools that eliminate manual repetitive tasks, minimize operational errors, and accelerate throughput.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Web & Desktop Application Development', 
    desc: 'Cross-platform web portals and native desktop solutions delivering responsive interfaces and high-performance computing.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'API & System Integration', 
    desc: 'Secure middleware and API connectors that seamlessly bridge legacy software, external SaaS tools, and payment platforms.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Software Maintenance & Support', 
    desc: 'Proactive version updates, code refactoring, database optimization, and round-the-clock technical support to ensure peak uptime.', 
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
        <h2 className="dm-section-title">Our Software Development Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Software Development Services) ====================
const benefits = [
  'Custom-engineered software built around your exact operational workflows.',
  'Seamless enterprise integration with existing CRMs, ERPs, and APIs.',
  'Scalable cloud architectures engineered to handle expanding user volumes.',
  'Intuitive UI/UX design ensuring effortless team adoption and productivity.',
  'Enterprise-grade security with data encryption and vulnerability audits.',
  'Proactive post-launch support and lifecycle maintenance SLAs.',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Software Development Services?
        </h2>
        <p className="dm-about-text dm-about-text-left">
          Off-the-shelf software rarely fits your operational reality. It frequently imposes rigid workflows, exposes your business to recurring per-seat subscription costs, and struggles to integrate with legacy tools. When your operations require distinct logic or data segregation, commercial packages quickly create costly friction.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we take an engineering-first approach. We build software assets that your organization owns entirely. By focusing on scalable database design, clean documentation, robust security protocols, and human-centric interfaces, we ensure your software simplifies daily tasks, delivers actionable visibility, and supports your long-term growth trajectory.
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
              alt="Custom Software Development Services Roadmap - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Software Development Services) ====================
const processSteps = [
  { 
    title: 'Discovery & Workflow Analysis', 
    desc: 'We analyze your business operations, data dependencies, compliance standards, and user personas to construct a clear system roadmap.' 
  },
  { 
    title: 'Architecture & Database Design', 
    desc: 'We establish modular software blueprints, database entity relationships, API specifications, and cloud hosting infrastructure.' 
  },
  { 
    title: 'UI/UX Prototyping & Usability Review', 
    desc: 'We create intuitive wireframes and interactive prototypes to ensure your team can complete tasks quickly and without confusion.' 
  },
  { 
    title: 'Agile Engineering & Integration', 
    desc: 'Our engineers develop modular frontend and backend code across bi-weekly sprints, continuously integrating databases and third-party APIs.' 
  },
  { 
    title: 'Rigorous Testing & Security Audits', 
    desc: 'We conduct functional testing, load balancing evaluations, automated unit testing, and vulnerability assessments to guarantee stability.' 
  },
  { 
    title: 'Deployment & SLA-Backed Support', 
    desc: 'We deploy the software into production, conduct comprehensive team onboarding, and deliver ongoing maintenance under SLA agreements.' 
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

// ==================== DigitalIndustries Component (Updated for Software Development Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurant & Hospitality',
  'Corporate Businesses',
  'Environmental Services',
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
            <Image src="/images/1.webp" alt="Finance and Banking Software Solutions - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="E-Commerce and Retail Platform Management - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Enterprise ERP and Workflow Systems - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Logistics and Supply Chain Software - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Healthcare and Medical Care Applications - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Premier Custom Software Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a leading <strong>custom software development company in India</strong> providing end-to-end <strong>software development services</strong> for global enterprises, mid-sized firms, and fast-growing tech startups. As a trusted <strong>software development company</strong>, our expert team of <strong>software developer</strong> specialists builds secure, robust, and scalable <strong>b2b software</strong> architectures tailored to streamline your operations and drive sustainable business growth.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Enterprise Application Software & Custom Software Development Services
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Delivering high-performance <strong>custom software development services</strong> requires deep industry knowledge and technical precision. We excel in <strong>enterprise software development</strong> and <strong>software application development services</strong>, engineering mission-critical <strong>enterprise application software</strong> that automates internal workflows, enhances data security, and scales effortlessly alongside organizational expansion.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom CRM Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Manage customer relationships, automated lead funnels, and sales pipelines efficiently with our custom tailored <strong>custom crm development services</strong>.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>ERP Software Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Unify organizational databases, inventory tracking, financial ledgers, and human resources with robust <strong>erp software development services</strong>.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Embedded Software Development Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Build high-reliability firmware, IoT solutions, and system-level applications with our <strong>embedded software development services</strong>.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Choose Gatecode as Your Custom Software Development Company in India?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            When selecting a <strong>software development company in india</strong>, you need a partner with proven engineering standards. Choosing Gatecode Technologies as your preferred <strong>custom software development company</strong> guarantees:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Tailored Architecture:</strong> Complete custom software development without reliance on restrictive third-party templates.</li>
            <li style={{ marginBottom: '10px' }}><strong>Enterprise Security:</strong> Strict adherence to cloud data encryption, ISO standards, and zero-vulnerability testing.</li>
            <li style={{ marginBottom: '10px' }}><strong>Full Lifecycle Support:</strong> Ongoing maintenance, database optimization, and active system integrations.</li>
          </ul>

          {/* Smart & Scalable Software Solutions */}
          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '36px', marginBottom: '14px' }}>
            Smart &amp; Scalable Software Solutions
          </h3>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Our approach to{' '}
            <Link href="/services/software-development/scalable-solutions" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>
              smart and scalable software solutions
            </Link>{' '}
            focuses on solving real business challenges through reliable technology and well-planned software architecture. We develop solutions that are aligned with your operational requirements, user needs, data workflows, and long-term business objectives rather than relying on a one-size-fits-all approach.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            From business automation and enterprise applications to industry-specific software platforms, our development team works across modern technologies to build applications that can adapt as your organization grows. We emphasize performance, security, usability, maintainability, and scalability throughout the development lifecycle, helping businesses manage increasing users, data, integrations, and operational complexity.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '28px' }}>
            Our software solutions are designed with future requirements in mind, making it easier to introduce new features, connect additional systems, and improve functionality as your business evolves.
          </p>

          {/* Custom Development & System Integration */}
          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '8px', marginBottom: '14px' }}>
            Custom Development &amp; System Integration
          </h3>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Every business has different processes, workflows, and technology requirements. Our{' '}
            <Link href="/services/software-development/system-integration" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>
              custom software development and system integration services
            </Link>{' '}
            help organizations create software around their specific operational needs instead of adjusting their processes to fit generic applications.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            We design and develop custom applications with appropriate technologies, databases, APIs, and system architecture based on the project's functional and technical requirements. Our team can integrate existing business systems such as CRM, ERP, payment platforms, third-party APIs, databases, and other enterprise applications to establish a more connected technology environment.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '28px' }}>
            By combining custom development with reliable system integration, we help reduce disconnected workflows, improve data accessibility, and create smoother communication between different business applications. Our focus remains on building maintainable solutions that can be managed, enhanced, and integrated as technical requirements change.
          </p>

          {/* Ongoing Support & Future-Ready Technology */}
          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '8px', marginBottom: '14px' }}>
            Ongoing Support &amp; Future-Ready Technology
          </h3>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Software development does not end when an application goes live.{' '}
            <Link href="/services/software-development/ongoing-support" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>
              Ongoing maintenance and technical support
            </Link>{' '}
            are important for keeping business-critical software secure, stable, compatible, and performant as technology and business requirements evolve.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Our ongoing software support services include application maintenance, bug resolution, performance optimization, security updates, compatibility improvements, technical enhancements, and integration support. We can also help businesses evaluate existing applications and identify areas where improvements can increase reliability, usability, or operational efficiency.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            With a focus on maintainable architecture and modern technology practices, we help organizations prepare their software for future changes. Whether you need to enhance an existing application, introduce new functionality, integrate another platform, or scale your software infrastructure, our team works to ensure your technology can evolve alongside your business.
          </p>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const SoftwareDevelopmentServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/software-development' },
      { '@type': 'ListItem', position: 3, name: 'Software Development', item: 'https://gatecode.in/services/software-development' },
    ],
  };

  const softwareDevSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development Services',
    name: 'Custom Software Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Top custom software development company in India offering custom software development services, enterprise software development, SaaS product development, CRM & ERP software development.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of Software Development services does Gatecode Technologies provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer custom software development, enterprise solutions, SaaS platforms, and business workflow automation services. Our team designs scalable and secure software tailored specifically to your business needs, helping to enhance your operational efficiency.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between custom software and ready-made (off-the-shelf) software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ready-made software is generic and often comes with limited or rigid features. In contrast, we build 100% custom-engineered software that aligns perfectly with your unique business workflows. Custom software provides better security, high scalability, and complete control over your requirements without any unnecessary recurring licensing fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can your custom software integrate with our existing systems like CRM or ERP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely! We provide seamless API integration services. We can effectively connect your new software with your existing CRMs, ERPs, payment gateways, third-party tools, and legacy systems to ensure a smooth data flow within a unified architecture.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies do you use for software development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As a leading full-stack development company, we utilize a modern and robust tech stack. This includes advanced frameworks like React, Next.js, Node.js, and Python for both backend architectures and intuitive frontend interfaces, ensuring high performance, speed, and strict data security.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide post-development support and maintenance after deployment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Our commitment doesn't end with software delivery. We provide end-to-end support and 24/7 maintenance services. This includes active monitoring, security patches, performance tuning, and future technical updates to ensure your software always operates at peak performance.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareDevSchema) }}
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
        subtitle="Everything you need to know about our custom software engineering, tech stack, API integrations, and maintenance services."
        items={softwareDevFaqs}
      />
    </div>
  );
};

export default SoftwareDevelopmentServicesPage;

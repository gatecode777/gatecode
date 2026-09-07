"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import FAQSection from '@/components/frontend/FAQSection/FAQSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Web Development) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div className="dm-hero-bg">
        <Image
          src="/images/digitalbg1.webp"
          alt="Website design firm providing bespoke, dynamic website services"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            WEB<br />DEVELOPMENT<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We create custom web solutions tailored to your business goals and user requirements, 
            delivering responsive, secure, and user-friendly websites across all devices.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Web Development) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we create custom web solutions tailored to your business goals and user requirements. 
          Our focus is on developing responsive, secure, and user-friendly websites that deliver seamless digital experiences across all devices. 
          Whether you need a business website, e-commerce platform, or custom web application, our team combines creativity and technology 
          to build solutions that drive engagement, improve performance, and support business growth.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Web Development) ====================
const services = [
  { 
    title: 'Custom Website Development', 
    desc: 'Websites built around your business goals, with the right features, structure, and flexibility to support your growth.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Responsive Web Design', 
    desc: 'Mobile-friendly websites that look great and work smoothly across phones, tablets, and desktop devices.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'E-Commerce Development', 
    desc: 'Scalable online stores with product management, secure payments, and a simple shopping experience for your customers.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'CMS Development', 
    desc: 'Easy-to-manage websites that let you update pages, content, and important information without technical help.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'Web Application Development', 
    desc: 'Custom web applications designed to simplify business processes, improve workflows, and handle your specific requirements.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'UI/UX Focused Development', 
    desc: 'Clean, user-friendly interfaces with simple navigation that help visitors find information and take action easily.', 
    color: '#fbff06', 
    text: '#000000' 
  },
  { 
    title: 'API & Third-Party Integration', 
    desc: 'Connect your website with APIs, payment gateways, CRM systems, and other tools for smoother business operations.', 
    color: '#4e7c7e', 
    text: '#ffffff' 
  },
  { 
    title: 'Website Maintenance & Support', 
    desc: 'Ongoing updates, bug fixes, performance checks, and technical support to keep your website secure and running smoothly.', 
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
        <h2 className="dm-section-title">Our Web Development Services</h2>
        <p className="dm-services-subtitle">
          Every business has different needs. We build websites around your goals, customers, and requirements,
          <br className="dm-services-desktop-br" />
          with a focus on performance, usability, security, and future growth.
        </p>
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

// ==================== DigitalWhyChoose Component (Updated for Web Development) ====================
const benefits = [
  'Unique, Brand-Focused Design',
  'Built to Grow With Your Business',
  'SEO-Friendly Structure',
  'Fast and Reliable Performance',
  'Secure and Dependable',
  'Designed to Engage and Convert',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Web Development Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          A template website may look good at first, but it often comes with limitations as your business grows. You may find it difficult to add new features, improve performance, or create an experience that truly represents your brand.
        </p>
        <p className="dm-about-text dm-about-text-left" style={{ marginTop: '16px' }}>
          At Gatecode Technologies, we take a different approach. We have developed custom websites for <strong>100+ businesses</strong> across different industries, including schools, fintech, e-commerce, manufacturing, and more. Instead of starting with a ready-made theme, we first understand your business, goals, and customers. This helps us build a website that fits your needs today and can grow with your business in the future.
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
              alt="Custom Web Development Services Flow Illustration - Gatecode Technologies"
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

// ==================== DigitalProcess Component (Updated for Web Development) ====================
const processSteps = [
  {
    title: 'Requirement Analysis',
    desc: 'We discuss your goals, audience, features, and project requirements to understand exactly what your website needs.',
  },
  {
    title: 'Planning & Strategy',
    desc: 'We plan the website structure, features, and technology to keep development focused and avoid unnecessary changes.',
  },
  {
    title: 'UI/UX Design',
    desc: 'We create clean layouts and simple navigation with your users, content, and mobile experience in mind.',
  },
  {
    title: 'Development',
    desc: 'Our developers build the website using suitable technologies, focusing on performance, functionality, and responsive design.',
  },
  {
    title: 'Testing & Quality Assurance',
    desc: 'We test features, forms, links, responsiveness, and performance to identify and fix issues before launch.',
  },
  {
    title: 'Deployment & Support',
    desc: 'After final checks, we launch the website and provide support for updates, fixes, performance, and future requirements.',
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
        <p className="dm-process-subtitle">
          We follow a clear development process to understand your needs, build the right solution,
          <br className="dm-process-desktop-br" />
          and deliver a website that works smoothly for your business.
        </p>
        <div className="dm-process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="dm-process-item">
              <h3 className="dm-process-label">{item.title}</h3>
              <div className="dm-process-content">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dm-process-closing">
          <p>
            From planning to launch, we focus on building a reliable website that is easy to use and ready to grow with your business.
          </p>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalIndustries Component (Updated for Web Development) ====================
const industries = [
  'Restaurant & Food Industry',
  'E-Commerce & Retail',
  'Corporate Businesses',
  'Environmental & Cleaning Services',
  'Healthcare & Wellness',
  'Education & Training',
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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Web Development - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Restaurant and Food Ordering Platforms - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Corporate Business Digital Solutions - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Healthcare and Wellness Applications - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Education and Training E-Learning Portals - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
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
            Top-Rated Website Development Company in India
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to <strong>Gatecode Technologies</strong>, a premier <strong>website development company in India</strong> providing end-to-end <strong>web design & development services</strong> to clients worldwide. As a trusted <strong>website development company</strong>, whether you are a startup looking to launch your first online platform or an established enterprise seeking high-performance digital solutions, our team of expert developers and designers builds secure, responsive, and search-engine-optimized websites tailored to your specific business requirements with transparent and <strong>affordable web development services</strong>.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Custom Web App Development Services & Full Stack Solutions
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            As an industry-leading <Link href="/services/custom-website-development" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>custom web app development services</Link> provider, we specialize in building scalable digital portals, SaaS platforms, and enterprise workflows. Recognizing that every organization has distinct goals, our <strong>full stack development services</strong> combine robust backend architectures with intuitive frontend interfaces. Recognized as a high-performance <strong>react web development company</strong>, we engineer web solutions using modern frameworks like React, Next.js, Node.js, and Python.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Web App Development & Custom Portals</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                From interactive dashboards to complex SaaS web systems, our <strong>web app development</strong> team builds fast, secure, and intuitive web applications tailored to your business operations.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>API Integration Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Streamline data flows with custom <strong>api integration services</strong>. We seamlessly connect payment gateways, CRMs, ERPs, third-party software, and legacy systems into a unified architecture.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Website Maintenance Services</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Ensure peak performance with 24/7 <strong>website maintenance services</strong>. We provide active monitoring, security patches, performance tuning, and continuous technical updates.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Hire Dedicated Web Developers in India for Your Next Project
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Looking to expand your technical capabilities or scale your engineering bandwidth efficiently? When you partner with Gatecode Technologies to <strong>hire a web developer in India</strong> or <strong>hire dedicated web developers</strong>, you gain access to skilled full-stack engineers who seamlessly integrate into your team. We offer flexible engagement models that reduce development overhead while guaranteeing high code quality and on-time project delivery.
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Custom Engineered Architecture:</strong> No generic templates. We write clean, maintainable, and modular full-stack code.</li>
            <li style={{ marginBottom: '10px' }}><strong>Complete Security & Compliance:</strong> Built-in SSL, data encryption, and defense against common web vulnerabilities.</li>
            <li style={{ marginBottom: '10px' }}><strong>End-to-End Support:</strong> Dedicated project managers, active API integrations, and ongoing <strong>website maintenance services</strong>.</li>
          </ul>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '36px', marginBottom: '14px' }}>
            CMS Website Development Services for Scalable &amp; Easy-to-Manage Websites
          </h3>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            At Gatecode Technologies, we provide{' '}
            <Link href="/services/cms-website-development" style={{ color: '#4e7c7e', fontWeight: '600', textDecoration: 'underline' }}>
              CMS website development services
            </Link>{' '}
            for businesses that need a flexible, secure, and easy-to-manage online presence. Our CMS solutions enable business owners and content teams to create, edit, organize, and publish website content without depending on developers for every update.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Our developers build CMS websites around your business goals, content structure, design requirements, and long-term growth plans. From business websites and corporate portals to blogs, service websites, and content-driven platforms, we create responsive CMS solutions with clean architecture, intuitive content management, SEO-friendly structures, and performance-focused development.
          </p>

          <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginTop: '28px', marginBottom: '12px' }}>
            Custom CMS Development &amp; Integration
          </h4>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            We develop and customize CMS websites according to your specific requirements rather than relying only on pre-built templates. Our team can customize website functionality, content structures, themes, plugins/modules, third-party integrations, forms, user roles, and APIs to create a CMS environment that is practical for your team to manage.
          </p>

          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            We also focus on essential technical aspects such as mobile responsiveness, website security, page performance, structured content, SEO-friendly URLs, and scalable architecture to support long-term website management.
          </p>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const WebDevelopmentServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/web-development' },
      { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://gatecode.in/services/web-development' },
    ],
  };

  const webDevServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development Services',
    name: 'Website Development Company in India',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Premier website development company in India offering web design & development services, custom web app development services, react web development, and website maintenance services.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of Web Development Services does Gatecode Technologies provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer custom website development, e-commerce solutions, CMS development, and dynamic web applications. Our team focuses on building responsive, secure, and SEO-friendly websites that deliver a seamless user experience (UI/UX) across all devices to support your business growth.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer custom web development or use pre-built templates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We deliver 100% custom-engineered architecture. We do not use generic templates; instead, we write clean, maintainable, and modular full-stack code to ensure your SaaS platforms, enterprise workflows, and web apps can scale efficiently.',
        },
      },
      {
        '@type': 'Question',
        name: 'What modern technologies do you use to build websites and web apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As a high-performance web development company, we utilize modern frameworks including React, Next.js, Node.js, and Python. We also provide seamless API integration services to connect payment gateways, CRMs, ERPs, and external business tools into a unified system.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I hire dedicated web developers from Gatecode for my project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely! If you are looking to expand your technical capabilities or scale your engineering bandwidth, you can hire our skilled full-stack engineers in India. We offer flexible engagement models that reduce development overhead while guaranteeing high code quality and on-time delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide post-launch support and maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, our partnership doesn't end at launch. We provide 24/7 website maintenance and end-to-end technical support. This includes active monitoring, security patches, performance tuning, and continuous updates to ensure your website operates at peak performance.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevServiceSchema) }}
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
      <FAQSection />
    </div>
  );
};

export default WebDevelopmentServicesPage;

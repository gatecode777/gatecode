"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== DigitalHero Component (Updated for Graphic Design Services) ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/graphic.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            GRAPHIC<br />DESIGN<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We create visually compelling and creative designs that strengthen brand identity, improve communication,<br />
            and leave a lasting impression.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== DigitalAbout Component (Updated for Graphic Design Services) ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text">
          At Gatecode Technologies Pvt. Ltd., we deliver creative graphic design solutions that help businesses communicate their message effectively 
          and build a strong visual identity. Our design approach combines creativity, branding, and modern design trends to create impactful visuals 
          that attract attention and enhance audience engagement. From social media creatives and branding materials to marketing visuals and promotional 
          designs, we craft designs that reflect your brand's personality and business goals.
        </p>
      </div>
    </section>
  );
};

// ==================== DigitalServices Component (Updated for Graphic Design Services) ====================
const services = [
  { title: 'Social Media Post Design', desc: 'Creative and engaging social media designs crafted to increase brand visibility and audience engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Logo Design & Branding', desc: 'Unique logo and branding solutions that create a strong and memorable business identity.', color: '#fbff06', text: '#000000' },
  { title: 'Banner & Poster Design', desc: 'Visually impactful banners and posters designed for promotions, events, and marketing campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Brochure & Flyer Design', desc: 'Professional brochures and flyers that communicate your brand message effectively.', color: '#fbff06', text: '#000000' },
  { title: 'Business Card Design', desc: 'Modern and professional business card designs that leave a lasting impression.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Advertising Creatives', desc: 'High-quality ad creatives designed for digital campaigns and brand promotions.', color: '#fbff06', text: '#000000' },
  { title: 'Packaging Design', desc: 'Creative packaging solutions that enhance product presentation and customer appeal.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Motion Graphics & Creative Visuals', desc: 'Dynamic motion graphics and visual content designed to improve audience interaction and engagement.', color: '#fbff06', text: '#000000' },
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
        <h2 className="dm-section-title">Our Graphic Design Services</h2>
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

// ==================== DigitalWhyChoose Component (Updated for Graphic Design Services) ====================
const benefits = [
  'Creative and visually appealing designs',
  'Strong and consistent brand identity',
  'Modern and trend-focused design approach',
  'Improved audience engagement',
  'High-quality marketing and promotional visuals',
  'Customized designs tailored to business goals',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Graphic Design Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating visually engaging and strategically designed graphics that align with your brand identity and marketing goals. 
          Our creative team combines innovation, branding expertise, and modern design techniques to deliver impactful visuals that improve 
          communication, strengthen brand recognition, and enhance customer engagement.
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
              alt="Graphic Design Illustration"
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

// ==================== DigitalProcess Component (Updated for Graphic Design Services) ====================
const processSteps = [
  { title: 'Requirement & Brand Analysis', desc: 'Understanding your business, audience, and branding goals.' },
  { title: 'Creative Planning', desc: 'Developing design concepts and visual strategies.' },
  { title: 'Design Creation', desc: 'Crafting engaging and high-quality graphic designs.' },
  { title: 'Review & Feedback', desc: 'Refining designs based on client feedback and requirements.' },
  { title: 'Finalization & Delivery', desc: 'Delivering optimized and ready-to-use design assets.' },
  { title: 'Ongoing Creative Support', desc: 'Providing updates and additional creative solutions when needed.' },
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
        <h2 className="dm-section-title">Our Design Process</h2>
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

// ==================== DigitalIndustries Component (Updated for Graphic Design Services) ====================
const industries = [
  'E-Commerce & Retail',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Startups & SMEs',
  'Service-Based Businesses',
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
            <Image src="/images/1.jpg" alt="Industry 1" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.jpg" alt="Industry 2" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.jpg" alt="Industry 3" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.jpg" alt="Industry 4" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.jpg" alt="Industry 5" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const GraphicDesignServicesPage = () => {
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

export default GraphicDesignServicesPage;

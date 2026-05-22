// @ts-nocheck
'use client';

import {  useEffect, useRef  } from 'react';

const services = [
  { title: 'Search Engine Optimization (SEO)', desc: 'Improve website visibility and rank higher on search engines with optimized SEO strategies.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Social Media Marketing (SMM)', desc: 'Build brand awareness and engage audiences through impactful social media campaigns.', color: '#fbff06', text: '#000000' },
  { title: 'Pay-Per-Click Advertising (PPC)', desc: 'Generate targeted traffic and quality leads with performance-focused paid advertising campaigns.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Content Marketing', desc: 'Create valuable and engaging content that attracts, informs, and converts audiences.', color: '#fbff06', text: '#000000' },
  { title: 'Brand Strategy & Promotion', desc: 'Strengthen brand identity and improve online presence with strategic branding solutions.', color: '#fbff06', text: '#000000' },
  { title: 'Email Marketing', desc: 'Connect with customers through personalized email campaigns designed to increase engagement.', color: '#4e7c7e', text: '#ffffff' },
  { title: 'Performance Marketing', desc: 'Data-driven marketing campaigns focused on measurable growth, ROI, and customer acquisition.', color: '#fbff06', text: '#000000' },
  { title: 'Analytics & Reporting', desc: 'Track campaign performance and customer behavior with detailed analytics and reporting.', color: '#4e7c7e', text: '#ffffff' },
];

const DigitalServices = () => {
  const sectionRef = useRef(null);

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

    const cards = sectionRef.current.querySelectorAll('.dm-service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dm-services-section" ref={sectionRef}>
      <div className="dm-container">
        <h2 className="dm-section-title">Our Digital Marketing Services</h2>
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

export default DigitalServices;

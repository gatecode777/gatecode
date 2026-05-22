'use client';

import './WhatWeDo.css';

const services = [
  {
    title: 'IT Services',
    description: 'Custom software, cloud infrastructure, web & app development tailored to your business.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="14" y2="10" />
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <polyline points="8 17 8 21" />
        <polyline points="16 17 16 21" />
        <line x1="5" y1="21" x2="19" y2="21" />
      </svg>
    ),
  },
  {
    title: 'BPO Services',
    description: 'Customer support, back-office and call center operations that scale with you.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: 'Back Office Handling',
    description: 'Accurate, secure and high-volume data processing with rapid turnaround.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="7" y1="8" x2="11" y2="8" />
        <line x1="7" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Accounting',
    description: 'Bookkeeping, payroll and financial reporting handled by certified professionals.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Consultancy',
    description: 'Strategic business consultancy to optimise operations and accelerate growth.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, social media, paid ads and content strategies that drive measurable growth.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="wwd-section fe-root">
      <div className="wwd-header">
        <h2 className="wwd-title">WHAT WE DO</h2>
        <div className="wwd-underline" />
        <p className="wwd-heading">Services built to scale your business</p>
        <p className="wwd-subtitle">
          From IT to back-office operations — one trusted partner for everything that drives growth.
        </p>
      </div>

      <div className="wwd-grid">
        {services.map((service, index) => (
          <div key={index} className="wwd-card">
            <div className="wwd-icon">{service.icon}</div>
            <h4 className="wwd-card-title">{service.title}</h4>
            <p className="wwd-card-desc">{service.description}</p>
            <a href="#" className="wwd-learn-more">Learn more <span>↗</span></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;

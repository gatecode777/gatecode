'use client';

import Link from 'next/link';
import './Services.css';

const servicesData = [
  {
    title: 'WEB DEVELOPMENT',
    image: '/images/Gatecode images/pexels-mizunokozuki-12899156.webp',
    className: 'card-1',
    link: '/services/web-development'
  },
  {
    title: 'BPO SERVICES',
    image: '/images/Gatecode images/pexels-yankrukov-8867427.webp',
    className: 'card-2',
    link: '/services/bpo-services'
  },
  {
    title: 'ACCOUNTING',
    image: '/images/Gatecode images/pexels-leeloothefirst-7247404.webp',
    className: 'card-3',
    link: '/services/accounting'
  },
  {
    title: 'DATA MANAGEMENT',
    image: '/images/Gatecode images/Data management.webp',
    className: 'card-4',
    link: '/services/data-management'
  },
  {
    title: 'DIGITAL MARKETING',
    image: '/images/Gatecode images/Digital marketing .webp',
    className: 'card-5',
    link: '/services/digital-marketing'
  }
];

const Services = () => {
  return (
    <section className="services-section fe-root">
      <div className="services-header">
        <h2 className="services-title">OUR SERVICES</h2>
        <p className="services-subtitle">
          Five powerful service lines, one trusted partner. Choose what you need<br />
          — or let us run it all.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <Link key={index} href={service.link} className={`service-card ${service.className}`}>
            <div className="service-card-img">
              <img src={service.image} alt={`${service.title} Solutions - Gatecode Technologies`} />
              <div className="service-card-overlay"></div>
            </div>
            <h3 className="service-card-title">{service.title}</h3>
          </Link>
        ))}
      </div>

      <div className="services-view-all-wrapper">
        <Link href="/services" className="services-view-all-btn">
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default Services;

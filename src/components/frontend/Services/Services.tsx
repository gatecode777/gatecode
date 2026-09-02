'use client';

import Link from 'next/link';
import './Services.css';

const servicesData = [
  {
    title: 'IT SERVICES',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    className: 'card-1',
    link: '/services/web-development'
  },
  {
    title: 'BPO SERVICES',
    image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=800&auto=format&fit=crop',
    className: 'card-2',
    link: '/services/bpo-services'
  },
  {
    title: 'ACCOUNTING',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    className: 'card-3',
    link: '/services/accounting'
  },
  {
    title: 'DATA MANAGEMENT',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    className: 'card-4',
    link: '/services/data-management'
  },
  {
    title: 'DIGITAL MARKETING',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
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
    </section>
  );
};

export default Services;

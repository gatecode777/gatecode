'use client';

import './Services.css';

const servicesData = [
  {
    title: 'IT SERVICES',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    className: 'card-1'
  },
  {
    title: 'BPO SERVICES',
    image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=800&auto=format&fit=crop',
    className: 'card-2'
  },
  {
    title: 'ACCOUNTING',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    className: 'card-3'
  },
  {
    title: 'BACK OFFICE HANDLING',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    className: 'card-4'
  },
  {
    title: 'BUSINESS MANAGEMENT',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    className: 'card-5'
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
          <div key={index} className={`service-card ${service.className}`}>
            <div className="service-card-img">
              <img src={service.image} alt={service.title} />
              <div className="service-card-overlay"></div>
            </div>
            <h4 className="service-card-title">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

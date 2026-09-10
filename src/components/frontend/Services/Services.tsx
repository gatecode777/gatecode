import Link from 'next/link';
import Image from 'next/image';

const servicesData = [
  {
    title: 'WEB DEVELOPMENT',
    image: '/images/pexels-mizunokozuki-12899156.webp',
    className: 'card-1',
    link: '/services/web-development',
    alt: 'Professional website development services and coding'
  },
  {
    title: 'BPO SERVICES',
    image: '/images/pexels-yankrukov-8867427.webp',
    className: 'card-2',
    link: '/services/bpo-services',
    alt: 'Professional BPO and customer support services'
  },
  {
    title: 'ACCOUNTING',
    image: '/images/pexels-leeloothefirst-7247404.webp',
    className: 'card-3',
    link: '/services/accounting',
    alt: 'Business accounting and financial management services'
  },
  {
    title: 'DATA MANAGEMENT',
    image: '/images/Data management.webp',
    className: 'card-4',
    link: '/services/data-management',
    alt: 'Professional data management and business analytics services'
  },
  {
    title: 'DIGITAL MARKETING',
    image: '/images/Digital marketing .webp',
    className: 'card-5',
    link: '/services/digital-marketing',
    alt: 'Digital marketing services for business growth'
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
              <Image 
                src={service.image} 
                alt={service.alt} 
                fill 
                sizes="(max-width: 480px) 95vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 260px" 
                style={{ objectFit: 'cover' }} 
              />
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

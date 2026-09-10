import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero-section fe-root">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            EMPOWERING {' '}<br />
            BUSINESSES WITH {' '}<br />
            SMART
          </h1>
          <h2 className="hero-subtitle">
            IT Services, BPO Services, Data Management, {' '}<br />
            Business Solutions, Accounting, Digital Marketing
          </h2>
          <p className="hero-description">
            Reduce operational costs and scale faster with our expert IT, BPO, {' '}<br />
            and data management services.
          </p>

          <div className="hero-buttons">
            <Link href="/get-started" className="hero-btn hero-btn-solid" aria-label="Get Free Consultations with Gatecode Technologies">
              Get Free Consultations <span> &rarr;</span>
            </Link>
            <Link href="/services" className="hero-btn hero-btn-outline" aria-label="Our Services - Explore Our IT and Software Services">
              Our Services <span>&rarr;</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Clients Served</p>
            </div>
            <div className="stat-item">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Coverage</p>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-img-circle circle-1">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/hero-showcase-1-mobile.webp" />
              <img 
                src="/images/hero-showcase-1.webp" 
                alt="Modern Business Growth and IT Infrastructure - Gatecode Technologies" 
                fetchPriority="high"
                decoding="async"
                width={287}
                height={280}
              />
            </picture>
          </div>
          <div className="hero-img-circle circle-2">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/hero-showcase-2-mobile.webp" />
              <img 
                src="/images/hero-showcase-2.webp" 
                alt="Professional IT and Business Support Specialist at Work - Gatecode Technologies" 
                loading="lazy"
                decoding="async"
                width={287}
                height={280}
              />
            </picture>
          </div>
          <div className="hero-img-circle circle-3">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/hero-showcase-3-mobile.webp" />
              <img 
                src="/images/hero-showcase-3.webp" 
                alt="Future Ready Technology Solutions and Innovation - Gatecode Technologies" 
                loading="lazy"
                decoding="async"
                width={287}
                height={280}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

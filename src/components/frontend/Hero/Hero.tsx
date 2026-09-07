import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

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
            <Link href="/services" className="hero-btn hero-btn-outline" aria-label="Explore Our IT and Software Services">
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
            <Image 
              src="/images/hero-showcase-1.webp" 
              alt="Modern Business Growth and IT Infrastructure - Gatecode Technologies" 
              priority
              fetchPriority="high"
              decoding="async"
              width={287}
              height={280}
              sizes="(max-width: 768px) 200px, 287px"
            />
          </div>
          <div className="hero-img-circle circle-2">
            <Image 
              src="/images/hero-showcase-2.webp" 
              alt="Professional IT and Business Support Specialist at Work - Gatecode Technologies" 
              priority
              fetchPriority="high"
              decoding="async"
              width={287}
              height={280}
              sizes="(max-width: 768px) 170px, 287px"
            />
          </div>
          <div className="hero-img-circle circle-3">
            <Image 
              src="/images/hero-showcase-3.webp" 
              alt="Future Ready Technology Solutions and Innovation - Gatecode Technologies" 
              decoding="async"
              width={287}
              height={280}
              sizes="(max-width: 768px) 150px, 287px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

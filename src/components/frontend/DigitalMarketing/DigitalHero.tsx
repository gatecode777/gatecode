'use client';
import Link from 'next/link';

const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/digitalbg1.png')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper">
          <h1 className="dm-hero-title">
            DIGITAL<br />MARKETING<br />SERVICES
          </h1>
          <p className="dm-hero-subtitle">
            We help businesses increase online visibility, attract targeted
            audiences, and drive measurable growth through result-driven
            digital marketing strategies.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalHero;

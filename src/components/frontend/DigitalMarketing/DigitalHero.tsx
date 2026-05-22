'use client';

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
          <button className="dm-cta-button">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalHero;

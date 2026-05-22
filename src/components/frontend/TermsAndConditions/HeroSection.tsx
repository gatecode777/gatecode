'use client';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="terms-hero">
      <div className="terms-hero__container">
        <div className="terms-hero__content">
          <p className="terms-hero__eyebrow">LEGAL</p>
          <h1 className="terms-hero__title">
            <span className="title-highlight">TERMS &</span>
            <span className="title-main">CONDITIONS</span>
          </h1>
          <p className="terms-hero__subtitle">
            Establishing the agreement and rules for using the services <br />
            provided by Gatecode Technologies Pvt. Ltd.
          </p>
        </div>
      </div>
      <div className="terms-hero__bottom-bar" />
    </section>
  );
};

export default HeroSection;

'use client';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="privacy-hero">
      <div className="privacy-hero__container">
        <div className="privacy-hero__content">
          <p className="privacy-hero__eyebrow">LEGAL</p>
          <h1 className="privacy-hero__title">
            <span className="title-highlight">PRIVACY</span>
            <span className="title-main">POLICY</span>
          </h1>
          <p className="privacy-hero__subtitle">
            At Gatecode, we are committed to protecting your personal information <br />
            and ensuring your privacy is maintained with the highest standards.
          </p>
        </div>
      </div>
      <div className="privacy-hero__bottom-bar" />
    </section>
  );
};

export default HeroSection;

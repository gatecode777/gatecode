'use client';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="cookie-hero">
      <div className="cookie-hero__container">
        <div className="cookie-hero__content">
          <p className="cookie-hero__eyebrow">LEGAL</p>
          <h1 className="cookie-hero__title">
            <span className="title-highlight">COOKIE</span>
            <span className="title-main">POLICY</span>
          </h1>
          <p className="cookie-hero__subtitle">
            Explaining how we use cookies and similar technologies to <br />
            enhance your browsing experience on our platform.
          </p>
        </div>
      </div>
      <div className="cookie-hero__bottom-bar" />
    </section>
  );
};

export default HeroSection;

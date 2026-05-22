'use client';

import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__container">
        <div className="about-hero__globe">
          <img src="/images/globe.png" alt="Globe" />
        </div>
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">ABOUT</p>
          <h1 className="about-hero__title">
            <span className="title-highlight">GATECODE TECHNOLOGIES</span>
            <span className="title-main">PRIVATE LIMITED</span>
          </h1>
          <p className="about-hero__subtitle">
            Empowering businesses with innovative, reliable, and scalable<br />
            solutions across technology, operations, and finance.
          </p>
        </div>
      </div>
      <div className="about-hero__bottom-bar" />
    </section>
  );
};

export default AboutHero;

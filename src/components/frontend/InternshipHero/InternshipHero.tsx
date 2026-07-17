'use client';

import Link from 'next/link';
import './InternshipHero.css';

const InternshipHero = () => {
  return (
    <section className="internship-hero">
      <div className="container internship-hero__inner">
        <div className="internship-hero__image-wrapper">
          <img
            src="/images/hero_img.png"
            alt="Professional Internship Program at Gatecode Technologies"
            className="internship-hero__image"
          />
        </div>

        <div className="internship-hero__content">
          <h1 className="internship-hero__title">
            Start Your Career<br />
            With Us
          </h1>
          <p className="internship-hero__text">
            Join Gatecode Technologies Pvt. Ltd. as an intern and gain real-world experience, practical skills, and the opportunity to grow in a professional environment.
          </p>
          <Link
            href="#apply-form"
            className="btn btn--accent"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('apply-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Scroll for Apply
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternshipHero;

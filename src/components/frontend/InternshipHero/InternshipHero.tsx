'use client';

import Link from 'next/link';
import Image from 'next/image';
import './InternshipHero.css';

const InternshipHero = () => {
  return (
    <section className="internship-hero">
      <div className="container internship-hero__inner">
        <div className="internship-hero__image-wrapper">
          <Image
            src="/images/hero_img.webp"
            alt="Professional Internship Program at Gatecode Technologies"
            className="internship-hero__image"
            width={420}
            height={500}
            priority
            sizes="(max-width: 768px) 100vw, 420px"
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

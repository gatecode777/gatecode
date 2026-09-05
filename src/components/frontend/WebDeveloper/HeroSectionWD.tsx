'use client';

import Link from 'next/link';
import "./HeroSectionWD.css";

const HeroSectionWD = () => {
  const heroImage = "/images/Rectangle 305.webp";

  return (
    <section
      className="wd-hero-section"
      style={{ backgroundImage: 'url("/images/Rectangle 305.webp")' }}
    >
      <div className="wd-hero-overlay"></div>

      <div className="wd-hero-content">
        <div className="wd-hero-left">
          <h1>
            BUILD POWERFUL, SCALABLE
            & HIGH-PERFORMING
            WEBSITES
          </h1>

          <p>
            We create modern, fast, and conversion-focused websites<br></br>
            that help your business grow, attract customers, and stand out
            online.
          </p>

          <Link href="/contact" className="wd-hero-btn">
            Get Free Consultation
          </Link>
        </div>

        <div className="wd-hero-right">
          <img
            src={heroImage}
            alt="Website Development"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionWD;
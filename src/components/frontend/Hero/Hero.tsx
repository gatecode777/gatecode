'use client';

import { useRouter } from 'next/navigation';
import './Hero.css';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="hero-section fe-root">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            EMPOWERING {' '}<br />
            BUSINESSES WITH {' '}<br />
            SMART
          </h1>
          <h3 className="hero-subtitle">
            IT Services, BPO Services, Data Management, {' '}<br />
            Business Solutions, Accounting, Digital Marketing
          </h3>
          <p className="hero-description">
            Reduce operational costs and scale faster with our expert IT, BPO, {' '}<br />
            and data management services.
          </p>

          <div className="hero-buttons">
            <button className="hero-btn hero-btn-solid" onClick={() => router.push('/get-started')}>
              Get Free Consultations <span> &rarr;</span>
            </button>
            <button className="hero-btn hero-btn-outline" onClick={() => router.push('/services')}>
              Our Services <span>&rarr;</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h4>100+</h4>
              <p>Clients Served</p>
            </div>
            <div className="stat-item">
              <h4>2+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h4>98%</h4>
              <p>Client Retention</p>
            </div>
            <div className="stat-item">
              <h4>24/7</h4>
              <p>Support Coverage</p>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-img-circle circle-1">
            <img src="https://ik.imagekit.io/zp0tch54w/GATECODE%20IMAGES/Ellipse%208.png" alt="Skyscrapers" />
          </div>
          <div className="hero-img-circle circle-2">
            <img src="https://ik.imagekit.io/zp0tch54w/GATECODE%20IMAGES/Ellipse%207.png" alt="Office worker" />
          </div>
          <div className="hero-img-circle circle-3">
            <img src="https://ik.imagekit.io/zp0tch54w/GATECODE%20IMAGES/Ellipse%206.png" alt="Looking up at skyscraper" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

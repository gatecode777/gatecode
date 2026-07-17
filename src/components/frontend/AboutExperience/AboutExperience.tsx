'use client';

import { useEffect, useRef, useState } from 'react';
import './AboutExperience.css';

const AboutExperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-experience" ref={sectionRef}>
      <div className={`about-experience__container ${isVisible ? 'is-visible' : ''}`}>
        <div className="about-experience__grid">
          <div className="about-experience__text">
            <h1 className="about-experience__heading">
              OUR EXPERIENCE &<br />
              GLOBAL COLLABORATIONS
            </h1>

            <p className="about-experience__description">
              At Gatecode Technologies Pvt. Ltd., we bring 2+ years of hands-on experience delivering high-performance digital solutions to businesses across the globe. From startups to established enterprises, we have partnered with companies across diverse industries — understanding their unique challenges and turning them into powerful, scalable products.
            </p>

            <p className="about-experience__description">
              Our work spans multiple sectors including Travel & Tourism, Jewellery & Luxury Goods, Environmental Services, and more — giving us a deep understanding of industry-specific workflows, international business standards, and the quality expectations that modern businesses demand.
            </p>


          </div>

          <div className="about-experience__images">
            <div className="about-experience__image-col-left">
              <div className="about-experience__img-wrapper">
                <img src="/images/exp_1.png" alt="Gatecode Technologies Professional Office Workspace" className="about-experience__img about-experience__img--tall" />
              </div>
            </div>
            <div className="about-experience__image-col-right">
              <div className="about-experience__img-wrapper">
                <img src="/images/exp_2.png" alt="Gatecode Software Engineering Team Collaboration" className="about-experience__img about-experience__img--small" />
              </div>
              <div className="about-experience__img-wrapper">
                <img src="/images/exp_3.png" alt="Gatecode Technologies Dedicated Web Developers" className="about-experience__img about-experience__img--small" />
              </div>
            </div>
          </div>
        </div>
        <p className="about-experience__description">
          We have successfully collaborated with numerous eCommerce businesses, helping them build, optimize, and scale their online stores. From product catalog management and payment integration to user experience enhancement and performance optimization, we support eCommerce brands in creating seamless digital shopping experiences that drive growth and customer satisfaction.
        </p>
      </div>
    </section>
  );
};

export default AboutExperience;

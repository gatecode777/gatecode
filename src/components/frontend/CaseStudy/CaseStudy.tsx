// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import './CaseStudy.css';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';

const heroBg     = "/images/case_study_hero_final_bg.jpg";
const heroMan    = "/images/new_hero_man.png";
const bottomBanner = "/images/case_study_bottom.jpg";

// Fallback studies shown while loading or if DB empty
const FALLBACK = [
  { _id:'1', slug:'damru-by-namo', title:'DAMRU BY NAMO',   shortDesc:'Transforming a restaurant business with a seamless online ordering platform', thumbnail:'/images/damru_rect.jpg' },
  { _id:'2', slug:'eco-bin',       title:'ECO-BIN',          shortDesc:'Environmental & Cleaning Services Website', thumbnail:'/images/ecobin_mockup.jpg' },
  { _id:'3', slug:'cocofina-sugar',title:'COCOFINA SUGAR',   shortDesc:'Coconut Sugar E-Commerce Website', thumbnail:'/images/cocofina_mockup.jpg' },
];

function CaseStudy() {
  const router     = useRouter();
  const sectionRef = useRef(null);
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/api/case-studies')
      .then(r => r.json())
      .then(d => { if (d.success && d.data?.length) setStudies(d.data); else setStudies(FALLBACK); })
      .catch(() => setStudies(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading || !sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.1 }
    );
    // Immediately animate cards already in viewport
    const cards = sectionRef.current.querySelectorAll('.cs-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) card.classList.add('animate-in');
      else observer.observe(card);
    });
    return () => observer.disconnect();
  }, [loading, studies]);

  return (
    <div className="cs">
      <div className="cs-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <img src={heroMan} alt="Professional thinking" className="cs-hero__man-img" />
        <div className="cs-hero__container">
          <div className="cs-hero__content">
            <h1 className="cs-hero__title">CASE STUDIES</h1>
            <p className="cs-hero__description--final">
              Explore how Gatecode Technologies Pvt. Ltd. helps businesses overcome challenges<br/>
              and achieve measurable results through innovative solutions.
            </p>
            <button className="cs-hero__button" onClick={() => router.push('/portfolio')}>Visit Our Portfolio</button>
          </div>
        </div>
      </div>

      <div className="cs-main-container" ref={sectionRef}>
        <div className="cs-container">
          <div className="cs-card-stack">
            {(loading ? FALLBACK : studies).map((study, index) => (
              <div
                key={study._id || index}
                className="cs-card"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="cs-card__content">
                  <h2 className="cs-card__title">{study.title}</h2>
                  <h3 className="cs-card__subtitle">{study.shortDesc}</h3>
                  <p className="cs-card__description">{study.shortDesc}</p>
                  <div className="cs-card__buttons">
                    <button
                      className="cs-card__btn cs-card__btn--yellow"
                      onClick={() => router.push(`/case-study/${study.slug}`)}
                    >
                      View Case Studies
                    </button>
                    <button className="cs-card__btn cs-card__btn--blue" onClick={() => router.push('/contact')}>
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="cs-card__image-wrapper">
                  <img src={study.thumbnail} alt={study.title} className="cs-card__image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

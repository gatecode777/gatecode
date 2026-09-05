// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './CaseStudy.css';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';

const heroBg     = "/images/case_study_hero_final_bg.webp";
const heroMan    = "/images/new_hero_man.webp";
const bottomBanner = "/images/case_study_bottom.webp";

// Fallback studies shown while loading or if DB empty
const FALLBACK = [
  { _id:'1', slug:'damru-by-namo', title:'DAMRU BY NAMO',   shortDesc:'Transforming a restaurant business with a seamless online ordering platform', description:'Damru By Namo is a modern restaurant aiming to build a strong digital presence and provide customers with a seamless online food ordering experience.', thumbnail:'/images/damru_rect.webp' },
  { _id:'2', slug:'eco-bin',       title:'ECO-BIN',          shortDesc:'Environmental & Cleaning Services Website', description:'Developed a professional and responsive corporate website for ECOBIN, focused on improving online presence, service visibility, and lead generation.', thumbnail:'/images/ecobin_mockup.webp' },
  { _id:'3', slug:'cocofina-sugar',title:'COCOFINA SUGAR',   shortDesc:'Coconut Sugar E-Commerce Website', description:'Created an e-commerce experience that presents Cocofina Sugar products clearly and helps customers browse and purchase with confidence.', thumbnail:'/images/cocofina_mockup.webp' },
];

function CaseStudy({ studies: initialStudies }) {
  const router     = useRouter();
  const sectionRef = useRef(null);
  const studies = initialStudies && initialStudies.length > 0 ? initialStudies : FALLBACK;
  const loading = false;

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

  const renderSkeletonCards = () => (
    Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className="cs-card cs-card--skeleton animate-in">
        <div className="cs-card__content">
          <div className="cs-skeleton cs-skeleton--title" />
          <div className="cs-skeleton cs-skeleton--subtitle" />
          <div className="cs-skeleton cs-skeleton--line" />
          <div className="cs-skeleton cs-skeleton--line cs-skeleton--line-short" />
          <div className="cs-card__buttons">
            <div className="cs-skeleton cs-skeleton--button" />
            <div className="cs-skeleton cs-skeleton--button" />
          </div>
        </div>
        <div className="cs-card__image-wrapper">
          <div className="cs-skeleton cs-skeleton--image" />
        </div>
      </div>
    ))
  );

  return (
    <div className="cs">
      <div className="cs-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <Image 
          src={heroMan} 
          alt="Professional IT Consultant Analyzing Case Studies - Gatecode Technologies" 
          width={600} 
          height={700} 
          priority 
          className="cs-hero__man-img" 
        />
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
            {loading ? renderSkeletonCards() : studies.map((study, index) => (
              <div
                key={study._id || index}
                className="cs-card"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="cs-card__content">
                  <h2 className="cs-card__title">{study.title}</h2>
                  <h3 className="cs-card__subtitle">{study.shortDesc}</h3>
                  <p className="cs-card__description">{study.description || study.shortDesc}</p>
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
                  <Image 
                    src={study.thumbnail} 
                    alt={`${study.title} - Gatecode Technologies Case Study Success`} 
                    width={600} 
                    height={400} 
                    className="cs-card__image" 
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
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

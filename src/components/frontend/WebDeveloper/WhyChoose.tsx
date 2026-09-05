// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import "./WhyChoose.css";

const chooseData = [
  {
    image: "/images/img1.webp",
    title: "Technical Expertise & Innovation",
  },
  {
    image: "/images/img2.webp",
    title: "Client-Centric Solutions",
  },
  {
    image: "/images/img3.webp",
    title: "Agile Development Process",
  },
  {
    image: "/images/img4.webp",
    title: "Quality Assurance & Testing",
  },
  {
    image: "/images/img5.webp",
    title: "On-Time Delivery",
  },
  {
    image: "/images/img6.webp",
    title: "Support & Maintenance",
  },
];

const WhyChoose = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.why-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-section" ref={sectionRef}>
      <div className="why-choose-heading">
        <h2>
          WHY <span>CHOOSE US</span>
        </h2>
        <div className="why-choose-divider" />
        <p>Your business goals, our innovative web solutions.</p>
      </div>

      <div className="why-choose-wrapper">
        <div className="why-choose-grid">
          {chooseData.map((item, index) => (
            <div 
              className="why-card" 
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="why-card-image">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="why-card-overlay" />
              </div>
              <div className="why-card-content">
                <div className="why-card-num">{String(index + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
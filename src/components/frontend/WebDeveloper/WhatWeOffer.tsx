// @ts-nocheck
'use client';

import {  useEffect, useRef  } from 'react';
import "./WhatWeOffer.css";

const services = [
  {
    icon: "/images/icon1.png",
    title: "Custom Website Development",
    description:
      "Fully customized websites designed according to your brand and business needs.",
  },
  {
    icon: "/images/icon2.png",
    title: "Responsive Web Design",
    description:
      "Mobile-friendly and device-optimized websites for better user experience.",
  },
  {
    icon: "/images/icon3.png",
    title: "E-Commerce Development",
    description:
      "Complete online store solutions with secure payments and smooth user journey.",
  },
  {
    icon: "/images/icon4.png",
    title: "CMS Development",
    description:
      "Easy-to-manage websites using platforms like WordPress.",
  },
  {
    icon: "/images/icon5.png",
    title: "Website Redesign",
    description:
      "Upgrade your existing website with a modern and professional look.",
  },
  {
    icon: "/images/icon6.png",
    title: "Web Application Development",
    description:
      "Custom web apps built for performance, scalability, and efficiency.",
  },
  {
    icon: "/images/icon7.png",
    title: "SEO Friendly Development",
    description:
      "Optimized website structure to rank better on search engines.",
  },
  {
    icon: "/images/icon8.png",
    title: "Speed Optimization",
    description:
      "Fast-loading websites to reduce bounce rate and improve user experience.",
  },
];

const WhatWeOffer = () => {
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

    const cards = sectionRef.current.querySelectorAll('.offer-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="offer-section" ref={sectionRef}>
      <div className="offer-heading">
        <h2>
          WHAT <span>WE OFFER</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <div className="offer-wrapper">
        <div className="offer-grid">
          {services.map((service, index) => (
            <div 
              className="offer-card" 
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="offer-icon">
                <img src={service.icon} alt={service.title} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
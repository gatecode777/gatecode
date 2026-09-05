'use client';

import Image from 'next/image';
import './AboutExpertise.css';

const cards = [
  {
    title: 'International Standards',
    desc: 'We understand how global businesses operate and what they expect from a technology partner.',
    img: '/images/expertise-intl.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Industry Versatility',
    desc: 'Experience across multiple sectors means we adapt quickly to your specific business domain.',
    img: '/images/expertise-versatility.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    title: 'Long-Term Partnerships',
    desc: 'We believe in building lasting relationships with our clients—not just completing one-off projects.',
    img: '/images/expertise-partnerships.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Result-Driven Approach',
    desc: 'Every solution we deliver is focused on performance, scalability, and real measurable business impact.',
    img: '/images/expertise-results.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

const AboutExpertise = () => {
  return (
    <section className="about-expertise">
      <div className="about-expertise__container">
        <span className="about-expertise__label">WHAT WE DO</span>
        <h2 className="about-expertise__heading">Why Our Global Experience Matters</h2>
        <div className="about-expertise__grid">
          {cards.map((card, i) => (
            <div className="expertise-card" key={i}>
              <div className="expertise-card__img">
                <Image 
                  src={card.img} 
                  alt={`${card.title} - Gatecode Technologies`} 
                  width={400} 
                  height={180} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="expertise-card__body">
                <div className="expertise-card__header">
                  <span className="expertise-card__icon">{card.icon}</span>
                  <h4>{card.title}</h4>
                </div>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;

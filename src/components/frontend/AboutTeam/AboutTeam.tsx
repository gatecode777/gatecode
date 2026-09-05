'use client';

import Image from 'next/image';
import './AboutTeam.css';

const teamMembers = [
  { name: 'Rahul Sharma', role: 'CEO & Founder', img: '/images/about-team-rahul.webp' },
  { name: 'Priya Mehta', role: 'Chief Technology Officer', img: '/images/about-team-priya.webp' },
  { name: 'Amit Kumar', role: 'Lead Developer', img: '/images/about-team-amit.webp' },
  { name: 'Sneha Patel', role: 'UI/UX Designer', img: '/images/about-team-sneha.webp' },
];

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="about-team__container">
        <span className="about-team__label">THE PEOPLE BEHIND IT</span>
        <h2 className="about-team__heading">Meet Our Team</h2>
        <p className="about-team__subtitle">
          Our diverse team of experts brings passion and precision to every project we take on.
        </p>
        <div className="about-team__grid">
          {teamMembers.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-card__img">
                <Image 
                  src={m.img} 
                  alt={m.name} 
                  width={400} 
                  height={400} 
                  sizes="(max-width: 768px) 100vw, 300px" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="team-card__info">
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

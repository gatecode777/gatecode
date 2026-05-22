'use client';

import './AboutTeam.css';

const teamMembers = [
  { name: 'Rahul Sharma', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face' },
  { name: 'Priya Mehta', role: 'Chief Technology Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face' },
  { name: 'Amit Kumar', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
  { name: 'Sneha Patel', role: 'UI/UX Designer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' },
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
                <img src={m.img} alt={m.name} />
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

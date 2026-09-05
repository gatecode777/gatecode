'use client';

import './AboutCapabilities.css';

const capabilities = [
  {
    label: 'OUR APPROACH',
    heading: 'Project Planning & Strategy',
    body: 'We work closely with our clients to define clear objectives and develop comprehensive roadmaps for success. Our strategic approach ensures every project is aligned with your business goals and delivered on time.',
    list: ['Requirements Analysis & Discovery', 'Feasibility Studies & ROI Assessment', 'Resource Planning & Allocation', 'Risk Management & Mitigation'],
    img: '/images/cap-planning.webp',
    reverse: false,
  },
  {
    label: 'OUR EXECUTION',
    heading: 'Development & Delivery',
    body: 'Our agile delivery model ensures continuous progress, transparency, and adaptability throughout every phase — from initial design to final deployment and beyond.',
    list: ['Agile & Scrum Methodology', 'Continuous Integration & Deployment', 'Quality Assurance & Testing', 'Post-launch Support & Maintenance'],
    img: '/images/cap-delivery.webp',
    reverse: true,
  },
];

const AboutCapabilities = () => {
  return (
    <section className="about-cap">
      <div className="about-cap__container">
        {capabilities.map((cap, i) => (
          <div className={`about-cap__item ${cap.reverse ? 'about-cap__item--reverse' : ''}`} key={i}>
            <div className="about-cap__text">
              <span className="about-cap__label">{cap.label}</span>
              <h3 className="about-cap__heading">{cap.heading}</h3>
              <p>{cap.body}</p>
              <ul className="about-cap__list">
                {cap.list.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            </div>
            <div className="about-cap__image">
              <img src={cap.img} alt={cap.heading} width={640} height={460} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCapabilities;

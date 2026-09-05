'use client';

import './EngagementHero.css';

const EngagementHero = () => {
  return (
    <section className="engagement-hero">
      <div className="engagement-hero__container">
        <div className="engagement-hero__content">
          <h1 className="engagement-hero__title">Our Engagement Process</h1>
          <p className="engagement-hero__subtitle">
            A streamlined and transparent approach designed to deliver efficient solutions, 
            smooth collaboration, and successful project outcomes.
          </p>
        </div>

        <div className="engagement-hero__image-wrapper">
          <div className="hero-image-container">
            <div className="hero-img hero-img--back">
              <img 
                className="anim-img-1"
                src="/images/engage-hero-meeting.webp" 
                alt="Gatecode Technologies Business Team Collaboration Background" 
              />
              <img 
                className="anim-img-2"
                src="/images/engage-hero-team.webp" 
                alt="Gatecode Technologies Software Development Planning Background" 
              />
            </div>
            <div className="hero-img hero-img--front">
              <img 
                className="anim-img-1"
                src="/images/engage-hero-team.webp" 
                alt="Gatecode Technologies Professional IT Consultation Foreground" 
              />
              <img 
                className="anim-img-2"
                src="/images/engage-hero-meeting.webp" 
                alt="Gatecode Technologies Executive Meeting Foreground" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementHero;

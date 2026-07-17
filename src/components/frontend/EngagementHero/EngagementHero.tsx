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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" 
                alt="Gatecode Technologies Business Team Collaboration Background" 
              />
              <img 
                className="anim-img-2"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Gatecode Technologies Software Development Planning Background" 
              />
            </div>
            <div className="hero-img hero-img--front">
              <img 
                className="anim-img-1"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Gatecode Technologies Professional IT Consultation Foreground" 
              />
              <img 
                className="anim-img-2"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" 
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

'use client';

import './EngagementSteps.css';

const steps = [
  {
    id: 1,
    title: 'Requirement Analysis',
    subtitle: 'Understanding Your Business Needs',
    desc: 'We begin by understanding your business objectives, challenges, and project requirements. Our team conducts detailed discussions to gather insights and define the best strategy for your goals.',
    image: '/images/engage-requirement.webp'
  },
  {
    id: 2,
    title: 'Planning & Strategy',
    subtitle: 'Creating a Strategic Roadmap',
    desc: 'After analyzing the requirements, we create a clear project roadmap, define timelines, allocate resources, and choose the right technologies to ensure smooth execution.',
    image: '/images/engage-planning.webp'
  },
  {
    id: 3,
    title: 'Design & Development',
    subtitle: 'Building User-Focused Solutions',
    desc: 'Our designers and developers work together to create modern, scalable, and high-performing solutions tailored to your business needs while maintaining excellent user experience.',
    image: '/images/engage-requirement.webp'
  },
  {
    id: 4,
    title: 'Testing & Quality Assurance',
    subtitle: 'Ensuring Flawless Performance',
    desc: 'We believe in rigorous testing. Our QA team performs end-to-end testing, covering functionality, performance, and security to ensure a bug-free, high-quality product launch.',
    image: '/images/engage-requirement.webp'
  },
  {
    id: 5,
    title: 'Deployment & Launch',
    subtitle: 'Smooth Transition to the Live Environment',
    desc: 'Always ready for the big day! We handle the entire deployment process, ensuring a smooth transition to live servers with continuous monitoring of performance and security.',
    image: '/images/engage-deployment.webp'
  },
  {
    id: 6,
    title: 'Support & Maintenance',
    subtitle: 'Continuous Support For Your Growth',
    desc: 'Our relationship doesn\'t end at launch. We provide ongoing maintenance and support to keep your systems updated, secure, and optimized as your business grows and evolves.',
    image: '/images/engage-support.webp'
  }
];

const EngagementSteps = () => {
  return (
    <section className="engagement-steps">
      <div className="engagement-steps__container">
        <div className="engagement-steps__header">
          <h2 className="engagement-steps__title">Our Engagement Process</h2>
        </div>
        <div className="engagement-steps__grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-card__header">
                <h3 className="step-card__title">{step.title}</h3>
              </div>
              <div className="step-card__image">
                <img src={step.image} alt={`${step.title} Process Step - Gatecode Technologies`} width={400} height={200} loading="lazy" />
              </div>
              <div className="step-card__content">
                <h4 className="step-card__subtitle">{step.subtitle}</h4>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementSteps;

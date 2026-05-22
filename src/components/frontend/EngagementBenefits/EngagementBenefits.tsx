'use client';

import { FiUsers, FiCpu, FiMessageCircle, FiCheckCircle, FiTrendingUp, FiShield, FiLayout, FiActivity } from 'react-icons/fi';
import './EngagementBenefits.css';

const benefits = [
  {
    id: 1,
    icon: <FiMessageCircle />,
    title: 'Transparent Communication',
    desc: 'We keep you informed at every stage of the project with regular updates, meetings, and transparent reporting.'
  },
  {
    id: 2,
    icon: <FiUsers />,
    title: 'Client-centric approach',
    desc: 'Every solution we build is customized to meet your unique business goals and deliver high-impact outcomes.'
  },
  {
    id: 3,
    icon: <FiActivity />,
    title: 'Strategic planning & Execution',
    desc: 'Our structured workflow ensures efficient project management, timely delivery, and results that exceed expectations.'
  },
  {
    id: 4,
    icon: <FiCheckCircle />,
    title: 'Quality-driven Development',
    desc: 'We focus on performance, scalability, security, and user experience to deliver world-class digital solutions.'
  },
  {
    id: 5,
    icon: <FiLayout />,
    title: 'Experienced & Dedicated Team',
    desc: 'Our skilled professionals work collaboratively to provide innovative and modern solutions tailored to your industry.'
  },
  {
    id: 6,
    icon: <FiShield />,
    title: 'Ongoing Support & Maintenance',
    desc: 'We provide constant support and maintenance after launch to ensure your systems stay updated and perform at their best.'
  },
  {
    id: 7,
    icon: <FiCpu />,
    title: 'Scalable & Cost-effective Solutions',
    desc: 'Our solutions are built to grow with your business, providing long-term value and flexible expansion plans.'
  },
  {
    id: 8,
    icon: <FiTrendingUp />,
    title: 'Focus on Long-term Partnerships',
    desc: 'We believe in building strong relationships through quality service, and continuous collaboration.'
  }
];

const EngagementBenefits = () => {
  return (
    <section className="engagement-benefits">
      <div className="engagement-benefits__container">
        <div className="benefits-header">
          <h2 className="benefits-title">Why Choose Our Process</h2>
          <p className="benefits-subtitle">
            At Gatecode Technologies Pvt. Ltd., our engagement process is designed to ensure transparency, efficiency, and successful project delivery. 
            With years of experience and a client-focused approach, we specialize in understanding your unique needs and delivering outcomes that drive 
            sustainable growth. Our team works as a collaborative partner, providing expert guidance, scalable solutions, and continuous support throughout 
            the project lifecycle. From initial consultation to final launch, we prioritize quality, innovation, and long-term value to help businesses 
            thrive in today's competitive digital world.
          </p>
        </div>

        <div className="benefits-list">
          <h3 className="key-benefits-label">Key Benefits</h3>
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-item">
              <div className="benefit-header">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4 className="benefit-title">{benefit.title}</h4>
              </div>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementBenefits;

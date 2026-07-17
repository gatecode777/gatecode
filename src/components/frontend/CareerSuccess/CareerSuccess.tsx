'use client';

import './CareerSuccess.css';
import { 
  FiLayers, 
  FiUsers, 
  FiCpu, 
  FiBriefcase, 
  FiSunrise, 
  FiAward, 
  FiShare2, 
  FiTrendingUp 
} from 'react-icons/fi';

const CareerSuccess = () => {
  const cards = [
    { title: "Hands-On Project Experience", subtitle: "Real Projects, Real Experience", icon: <FiLayers /> },
    { title: "Expert Mentorship & Support", subtitle: "Mentorship That Matters", icon: <FiUsers /> },
    { title: "Practical Skill Building", subtitle: "Advanced Skill Development", icon: <FiCpu /> },
    { title: "Job-Ready Preparation", subtitle: "Career-Ready Expertise", icon: <FiBriefcase /> },
    { title: "Flexible & Friendly Work Environment", subtitle: "Dynamic Learning Atmosphere", icon: <FiSunrise /> },
    { title: "Recognized Certification", subtitle: "Verified Certificate of Completion", icon: <FiAward /> },
    { title: "Collaborative Team Experience", subtitle: "Team-Based Problem Solving", icon: <FiShare2 /> },
    { title: "Opportunity for Full-Time Role", subtitle: "Promising Future Job Opportunities", icon: <FiTrendingUp /> },
  ];

  return (
    <section className="career-success">
      <div className="container career-success__container">
        <div className="career-success__left">
          <div className="tech-image">
            <img src="/images/moto_img.png" alt="Next Generation Career Success and Tech Solutions - Gatecode Technologies" />
          </div>
          <h2 className="career-success__title">From Learning to Career Success</h2>
          <p className="career-success__subtitle">
            Turn your knowledge into real-world skills with hands-on experience, expert guidance, and career-focused learning.
          </p>
          <hr className="career-success__divider" />
          <p className="career-success__text">
            Our internship program at Gatecode Technologies Pvt. Ltd. is thoughtfully designed to bridge the gap between academic learning and real-world industry experience. We provide interns with the opportunity to work on live projects, collaborate with experienced professionals, and gain practical exposure to real business challenges. Through continuous guidance and hands-on learning, you will develop both technical and professional skills that are essential in today's competitive job market. Our supportive and growth-focused environment encourages you to build confidence, improve your problem-solving abilities, and understand how real organizations operate. By the end of the program, you will not only enhance your knowledge but also be better prepared to step into a professional role with clarity and confidence.
          </p>
        </div>
        <div className="career-success__right">
          <div className="success-grid">
            {cards.map((card, index) => (
              <div key={index} className="success-card">
                <div className="success-card__icon">{card.icon}</div>
                <h3 className="success-card__title">{card.title}</h3>
                <p className="success-card__subtitle">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSuccess;

// @ts-nocheck
'use client';

import {  useState, useCallback  } from 'react';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import ApplicationForm from '@/components/frontend/ApplicationForm/ApplicationForm';
import './Careers.css';


const jobsData = [
  {
    title: 'Web Developer',
    skills: [
      'Strong expertise in HTML, CSS, JavaScript (ES6+)',
      'Experience with modern frameworks (React / Angular / Vue)',
      'Backend development (Node.js / PHP / Python)',
      'RESTful API development & integration',
      'Database management (MySQL, MongoDB)',
      'Version control (Git / GitHub)',
      'Performance optimization & debugging',
      'Understanding of security best practices',
    ],
  },
  {
    title: 'UI/UX Designer',
    skills: [
      'Expert in Figma / Adobe XD / design systems',
      'User research & usability testing',
      'Wireframing, prototyping, and interaction design',
      'Strong understanding of UX principles & user psychology',
      'Responsive & mobile-first design approach',
      'Design consistency & branding',
      'Collaboration with developers (handoff process)',
    ],
  },
  {
    title: 'Digital Marketing Executive',
    skills: [
      'Advanced SEO (on-page, off-page, technical SEO)',
      'Paid ads management (Google Ads, Meta Ads)',
      'Google Analytics & performance tracking',
      'Content marketing & strategy planning',
      'Conversion rate optimization (CRO)',
      'Email marketing & automation tools',
      'Social media growth strategies',
    ],
  },
  {
    title: 'Data Entry Operator',
    skills: [
      'High-speed typing with 99%+ accuracy',
      'Advanced Excel (formulas, pivot tables, data validation)',
      'Data cleaning & data management',
      'Handling large datasets efficiently',
      'Knowledge of data security & confidentiality',
      'Automation tools (basic macros preferred)',
    ],
  },
  {
    title: 'BPO Executive',
    skills: [
      'Advanced communication & negotiation skills',
      'Customer relationship management (CRM tools)',
      'Conflict resolution & problem-solving',
      'Multitasking and time management',
      'Process understanding & quality assurance',
    ],
  },
  {
    title: 'Accounting Executive',
    skills: [
      'Expertise in accounting software (Tally, QuickBooks)',
      'GST, taxation, and compliance knowledge',
      'Financial reporting & analysis',
      'Budgeting and forecasting',
      'Advanced Excel for financial data',
      'Audit support and documentation',
    ],
  },
  {
    title: 'Graphic Designer',
    skills: [
      'Proficiency in Adobe Photoshop, Illustrator, and Canva',
      'Strong understanding of design principles (color, typography, layout)',
      'Ability to create social media creatives, banners, and marketing materials',
      'Creativity with attention to detail',
      'Knowledge of branding and visual identity',
      'Basic understanding of UI design is a plus',
      'Time management and ability to meet deadlines',
    ],
  },
];

const Careers = () => {
  const [activeJob, setActiveJob] = useState(null);

  const handleJobToggle = useCallback((index) => {
    setActiveJob((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>

      <div
        className="careers-hero"
        style={{ backgroundImage: `url('/images/Herocareer.jpeg')` }}
      >
        <div className="careers-hero-overlay">
          <h1>BUILD YOUR CAREER <br /> WITH US</h1>
          <p>
            Join Gatecode Technologies Pvt. Ltd. and be part of a team that values
            innovation, growth, and excellence.
          </p>
        </div>
      </div>

      <section className="career-section">
        <div className="careers-info-box">
          <p>
            At Gatecode Technologies Pvt. Ltd., we believe our people are our greatest strength.
            We offer a collaborative and growth-driven environment where individuals can learn,
            innovate, and build meaningful careers. Whether you're a fresher or an experienced
            professional, we provide opportunities to grow and make an impact.
          </p>
        </div>

        <ApplicationForm />
      </section>

      <section className="careers-jobs">
        <h2>JOIN OUR TEAM – WHERE YOUR SKILLS<br />MAKE AN IMPACT</h2>
        <p>
          We're looking for passionate individuals ready to learn, grow, and make a real impact with us.
        </p>

        <div className="careers-job-list">
          {jobsData.map((job, index) => (
            <div
              key={index}
              className={`careers-job ${activeJob === index ? 'active' : ''}`}
            >
              <div
                className="careers-job-header"
                onClick={() => handleJobToggle(index)}
              >
                <span>{job.title}</span>
                <span className="careers-toggle-icon">
                  {activeJob === index ? '−' : '+'}
                </span>
              </div>
              <div className="careers-job-desc">
                <ul>
                  {job.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectBanner />
    </>
  );
};

export default Careers;
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

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        Careers & IT Job Openings in India — Gatecode Technologies
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Build a rewarding <strong>career at Gatecode Technologies</strong>. Recognized among the <strong>best IT companies to work for in India</strong>, <strong>Gatecode Technologies Pvt Ltd</strong> offers high-growth <strong>software developer jobs in India</strong> and local <strong>IT job openings Jaipur</strong> for ambitious engineers, designers, and marketing professionals.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Join a Fast-Growing IT & Software Engineering Team
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        We foster a culture of technical innovation, mentorship, and work-life balance. Whether you are looking for <strong>web developer jobs</strong>, <strong>UI UX designer jobs</strong>, or <strong>digital marketing jobs</strong>, our open roles empower you to solve real-world problems for global clients.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Software & Web Engineering</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Explore <strong>web developer jobs</strong> and full-stack software development roles working with React, Next.js, Node.js, and Python.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>UI/UX & Product Design</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Apply for <strong>UI UX designer jobs</strong> and visual graphic design openings creating modern, scalable design systems.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Digital Marketing & Operations</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Join as a digital marketer, SEO executive, data specialist, or BPO professional scaling client growth worldwide.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Careers = () => {
  const [activeJob, setActiveJob] = useState(null);

  const handleJobToggle = useCallback((index) => {
    setActiveJob((prev) => (prev === index ? null : index));
  }, []);

  const jobPostingsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gatecode Technologies Job Openings',
    itemListElement: jobsData.map((job, index) => ({
      '@type': 'JobPosting',
      position: index + 1,
      title: job.title,
      description: `Careers opportunity for ${job.title} at Gatecode Technologies. Skills: ${job.skills.join(', ')}`,
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Gatecode Technologies Pvt. Ltd.',
        sameAs: 'https://gatecode.in',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jaipur',
          addressCountry: 'IN',
        },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I join Gatecode Technologies Pvt Ltd?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is recognized among the best IT companies to work for in India, offering competitive salaries, fast-track promotions, hands-on exposure to modern tech stacks, and a collaborative work environment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are Gatecode Technologies job openings located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our primary office is located in Jaipur, India, with remote and hybrid work opportunities for select software developer and designer roles.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      <SeoContentSection />
    </>
  );
};

export default Careers;
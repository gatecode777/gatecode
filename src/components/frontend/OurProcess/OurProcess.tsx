'use client';

import Image from 'next/image';
import './OurProcess.css';
import { FiBarChart2, FiCpu, FiClipboard, FiTrendingUp } from 'react-icons/fi';

const OurProcess = () => {
  return (
    <section className="our-process-section">
      <div className="core-values__bg">
        <Image
          src="/images/our-process-bg.webp"
          alt="Gatecode Technologies Core Values and Business Processing Timeline Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="core-values__overlay" />
      </div>
      <div className="our-process-container">
        <h2 className="our-process-mobile-heading">Our Process</h2>
        <div className="timeline-horizontal-line">
          <div className="process-marquee-container">
            <span className="process-label">OUR PROCESS</span>
          </div>
        </div>
        <div className="timeline-grid">       
          <div className="timeline-col">
            <div className="timeline-card top">
              <div className="timeline-card-header">
                <FiBarChart2 className="timeline-icon" />
                <h4>Business Analysis</h4>
              </div>
              <p>We start by understanding your business model, challenges, and growth goals to identify key bottlenecks and opportunities.</p>
            </div>
            <div className="connector top-connector"></div>
          </div>
          <div className="timeline-col">
            <div className="connector bottom-connector"></div>
            <div className="timeline-card bottom">
              <div className="timeline-card-header">
                <FiCpu className="timeline-icon" />
                <h4>Solution Development</h4>
              </div>
              <p>We build custom IT solutions, software systems, and automation processes tailored to your specific business needs.</p>
            </div>
          </div>

          <div className="timeline-col">
            <div className="timeline-card top">
              <div className="timeline-card-header">
                <FiClipboard className="timeline-icon" />
                <h4>System Audit</h4>
              </div>
              <p>We evaluate your existing systems, workflows, and tools to uncover inefficiencies and areas for improvement.</p>
            </div>
            <div className="connector top-connector"></div>
          </div>

          <div className="timeline-col">
            <div className="connector bottom-connector"></div>
            <div className="timeline-card bottom">
              <div className="timeline-card-header">
                <FiTrendingUp className="timeline-icon" />
                <h4>Optimization & Scaling</h4>
              </div>
              <p>We continuously refine and optimize systems to ensure they are scalable, cost-efficient, and aligned with your growth strategy.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurProcess;

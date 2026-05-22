// @ts-nocheck
'use client';

import {  useEffect, useRef  } from 'react';

const processSteps = [
  { title: 'Business & Market Analysis', desc: 'Understanding your business, target audience, and market trends.' },
  { title: 'Strategy Planning', desc: 'Creating customized marketing strategies based on your goals.' },
  { title: 'Campaign Creation', desc: 'Designing and launching optimized marketing campaigns.' },
  { title: 'Content & Creative Development', desc: 'Developing engaging visuals and marketing content.' },
  { title: 'Performance Monitoring', desc: 'Tracking campaign performance and audience engagement.' },
  { title: 'Optimization & Growth', desc: 'Continuously improving campaigns for better results and ROI.' },
];

const DigitalProcess = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current.querySelectorAll('.dm-process-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dm-process-section" ref={sectionRef}>
      <div className="dm-container">
        <h2 className="dm-section-title">Our Marketing Process</h2>
        <div className="dm-process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="dm-process-item">
              <div className="dm-process-label">{item.title}</div>
              <div className="dm-process-content">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProcess;

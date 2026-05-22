'use client';

import {  useEffect, useRef, useState  } from 'react';
import './VisionMission.css';

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="vm-section fe-root" ref={sectionRef}>
      <div className={`vm-container ${isVisible ? 'is-visible' : ''}`}>
        <div className="vm-card">
          <h2 className="vm-title">VISION</h2>
          <div className="vm-image-container">
            <img src="/images/vision.png" alt="Vision" className="vm-image" />
          </div>
          <p className="vm-text">
            We envision a future where businesses seamlessly scale and succeed through smart technology, 
            streamlined operations, and data-driven decisions. Gatecode Technologies Pvt. Ltd. aims to 
            lead this transformation by providing end-to-end business solutions that enhance productivity, 
            reduce costs, and create long-term value for our clients worldwide.
          </p>
        </div>

        <div className="vm-card">
          <h2 className="vm-title">MISSION</h2>
          <div className="vm-image-container">
            <img src="/images/mission.png" alt="Mission" className="vm-image" />
          </div>
          <p className="vm-text">
            At Gatecode Technologies Pvt. Ltd., our mission is to empower businesses with innovative, 
            reliable, and cost-effective solutions by combining technology, expertise, and strategic insight. 
            We are committed to delivering excellence across IT services, BPO operations, Back Office Services, 
            consultancy, digital marketing, and accounting—ensuring accuracy, efficiency, scalability, 
            and measurable results for every client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './VisionMission.css';

interface VisionMissionBoxProps {
  title: string;
  imageSrc: string;
  description: string;
}

const VisionMissionBox = ({ title, imageSrc, description }: VisionMissionBoxProps) => (
  <div className="vm-card">
    <h2 className="vm-title">{title}</h2>
    <div className="vm-image-container">
      <Image 
        src={imageSrc} 
        alt={`${title} Statement - Gatecode Technologies`} 
        className="vm-image" 
        width={600} 
        height={300} 
        sizes="(max-width: 768px) 100vw, 600px"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
      />
    </div>
    <p className="vm-text">{description}</p>
  </div>
);

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const boxesData = [
    {
      title: 'VISION',
      imageSrc: '/images/rectangle-71.webp',
      description: 'We envision a future where businesses seamlessly scale and succeed through smart technology, streamlined operations, and data-driven decisions. Gatecode Technologies Pvt. Ltd. aims to lead this transformation by providing end-to-end business solutions that enhance productivity, reduce costs, and create long-term value for our clients worldwide.',
    },
    {
      title: 'MISSION',
      imageSrc: '/images/rectangle-72.webp',
      description: 'At Gatecode Technologies Pvt. Ltd., our mission is to empower businesses with innovative, reliable, and cost-effective solutions by combining technology, expertise, and strategic insight. We are committed to delivering excellence across IT services, BPO operations, Back Office Services, consultancy, digital marketing, and accounting—ensuring accuracy, efficiency, scalability, and measurable results for every client.',
    },
  ];

  return (
    <section className="vm-section fe-root" ref={sectionRef}>
      <div className={`vm-container ${isVisible ? 'is-visible' : ''}`}>
        {boxesData.map((box) => (
          <VisionMissionBox
            key={box.title}
            title={box.title}
            imageSrc={box.imageSrc}
            description={box.description}
          />
        ))}
      </div>
    </section>
  );
};

export default VisionMission;

// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import './ProjectBanner.css';


const ProjectBanner = ({ title, subtitle, bgImage }) => {
  const router = useRouter();

  return (
    <section 
      className="project-banner" 
      style={{ backgroundImage: `url(${bgImage || '/images/banner.jpg'})` }}
    >
      <div className="project-banner__overlay"></div>
      <div className="project-banner__content">
        <h3 className="project-banner__title">{title || "Have A Project In Mind?"}</h3>
        <h2 className="project-banner__subtitle">{subtitle || "Let's Build Something Great Together."}</h2>
        <button className="project-banner__btn" onClick={() => router.push('/get-started#start-form')}>
          GET STARTED <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectBanner;

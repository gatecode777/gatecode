// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import './ProjectBanner.css';


const ProjectBanner = ({ title, subtitle, bgImage }) => {
  const router = useRouter();

  return (
    <section
      className="project-banner"
      style={{ backgroundImage: "url('https://ik.imagekit.io/zp0tch54w/GATECODE%20IMAGES/Rectangle%2080%20(1).png')" }}
    >
      <div className="project-banner__overlay"></div>
      <div className="project-banner__content">
        <h2 className="project-banner__title">{title || "Have A Project In Mind?"}</h2>
        <h3 className="project-banner__subtitle">{subtitle || "Let's Build Something Great Together."}</h3>
        <button className="project-banner__btn" onClick={() => router.push('/get-started#start-form')}>
          GET STARTED <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectBanner;

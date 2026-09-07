// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import './ProjectBanner.css';


interface ProjectBannerProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
}

const ProjectBanner = ({ title, subtitle, bgImage }: ProjectBannerProps = {}) => {
  const router = useRouter();

  return (
    <section
      className="project-banner"
      style={{ backgroundImage: "url('/images/rectangle-80.webp')" }}
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

import Link from 'next/link';
import './ProjectBanner.css';

interface ProjectBannerProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
}

const ProjectBanner = ({ title, subtitle, bgImage }: ProjectBannerProps = {}) => {
  return (
    <section
      className="project-banner"
      style={{ backgroundImage: "url('/images/rectangle-80.webp')" }}
    >
      <div className="project-banner__overlay"></div>
      <div className="project-banner__content">
        <h2 className="project-banner__title">{title || "Have A Project In Mind?"}</h2>
        <h3 className="project-banner__subtitle">{subtitle || "Let's Build Something Great Together."}</h3>
        <Link href="/get-started#start-form" className="project-banner__btn">
          GET STARTED <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectBanner;

import type { Metadata } from 'next';
import AboutHero from '@/components/frontend/AboutHero/AboutHero';
import AboutIntro from '@/components/frontend/AboutIntro/AboutIntro';
import VisionMission from '@/components/frontend/VisionMission/VisionMission';
import AboutExperience from '@/components/frontend/AboutExperience/AboutExperience';
import AboutExpertise from '@/components/frontend/AboutExpertise/AboutExpertise';
import WhatMakesDifferent from '@/components/frontend/WhatMakesDifferent/WhatMakesDifferent';
import AboutCapabilities from '@/components/frontend/AboutCapabilities/AboutCapabilities';
import OurProcess from '@/components/frontend/OurProcess/OurProcess';
import AboutTeam from '@/components/frontend/AboutTeam/AboutTeam';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import ServicesSlider from '@/components/frontend/ServicesSlider/ServicesSlider';

export const metadata: Metadata = {
  title: 'About Us | Gatecode Technologies — Empowering Business Innovation',
  description: 'Meet the minds behind Gatecode Technologies. Discover how our custom software engineering, digital transformation strategies, and technology-driven solutions empower businesses to scale and innovate.',
  keywords: [
    'Gatecode Technologies',
    'software engineering team',
    'digital transformation',
    'custom software development',
    'IT consulting services',
    'business solutions',
    'website development',
    'BPO services',
    'process automation',
    'accounting support',
    'digital marketing'
  ]
};

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <AboutExperience />
      <AboutExpertise />
      <ServicesSlider />
      <WhatMakesDifferent />

      <OurProcess />

      <ContactSection />

    </>
  );
};

export default About;

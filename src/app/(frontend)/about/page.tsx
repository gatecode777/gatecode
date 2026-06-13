'use client';

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

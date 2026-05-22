// @ts-nocheck
import type { Metadata } from 'next';
import Hero from '@/components/frontend/Hero/Hero';
import Services from '@/components/frontend/Services/Services';
import BrandHeader from '@/components/frontend/BrandHeader/BrandHeader';
import ImageSlider from '@/components/frontend/ImageSlider/ImageSlider';
import Expertise from '@/components/frontend/Expertise/Expertise';
import WhatWeDo from '@/components/frontend/WhatWeDo/WhatWeDo';
import ProcessStack from '@/components/frontend/ProcessStack/ProcessStack';
import VisionMission from '@/components/frontend/VisionMission/VisionMission';
import CollaborationClients from '@/components/frontend/CollaborationClients/CollaborationClients';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import TSlider from '@/components/frontend/TSlider/TSlider';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';

export const metadata: Metadata = { title: 'Home' };

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <div className="home-integration-wrapper">
        <BrandHeader />
        <ImageSlider />
        <Expertise />
      </div>
      <WhatWeDo />
      <ProcessStack />
      <VisionMission />
      <CollaborationClients />
      <ProjectBanner />
      <TSlider />
      <ContactSection />
    </>
  );
}

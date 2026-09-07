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
import ContactSection from '@/components/frontend/ContactSection/ContactSection';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Best It Services Company In Jaipur | Gatecode Technologies',
  description: 'Gatecode Technologies, a trusted IT service company in Jaipur, delivers web, software & cloud solutions to 100+ businesses. Get a free quote now!',
  keywords: [
    'it solution company',
    'best it company',
    'it service company',
    'managed cloud services provider',
    'it solutions services',
    'managed it services for businesses',
    'technology solutions companies',
    'it infrastructure solutions provider'
  ],
  alternates: {
    canonical: '/',
  },
};

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
      <ContactSection />
    </>
  );
}

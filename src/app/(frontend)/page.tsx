import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/frontend/Hero/Hero';
import Services from '@/components/frontend/Services/Services';

// Below-the-fold components dynamically imported to minimize main-thread work & eliminate unused initial JS
const BrandHeader = dynamic(() => import('@/components/frontend/BrandHeader/BrandHeader'));
const ImageSlider = dynamic(() => import('@/components/frontend/ImageSlider/ImageSlider'));
const Expertise = dynamic(() => import('@/components/frontend/Expertise/Expertise'));
const WhatWeDo = dynamic(() => import('@/components/frontend/WhatWeDo/WhatWeDo'));
const ProcessStack = dynamic(() => import('@/components/frontend/ProcessStack/ProcessStack'));
const VisionMission = dynamic(() => import('@/components/frontend/VisionMission/VisionMission'));
const CollaborationClients = dynamic(() => import('@/components/frontend/CollaborationClients/CollaborationClients'));
const ProjectBanner = dynamic(() => import('@/components/frontend/ProjectBanner/ProjectBanner'));
const ContactSection = dynamic(() => import('@/components/frontend/ContactSection/ContactSection'));

export const revalidate = 3600;

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

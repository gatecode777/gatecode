// @ts-nocheck
import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import Hero from '@/components/frontend/Hero/Hero';

const Services = nextDynamic(() => import('@/components/frontend/Services/Services'));
const BrandHeader = nextDynamic(() => import('@/components/frontend/BrandHeader/BrandHeader'));
const ImageSlider = nextDynamic(() => import('@/components/frontend/ImageSlider/ImageSlider'));
const Expertise = nextDynamic(() => import('@/components/frontend/Expertise/Expertise'));
const WhatWeDo = nextDynamic(() => import('@/components/frontend/WhatWeDo/WhatWeDo'));
const ProcessStack = nextDynamic(() => import('@/components/frontend/ProcessStack/ProcessStack'));
const VisionMission = nextDynamic(() => import('@/components/frontend/VisionMission/VisionMission'));
const CollaborationClients = nextDynamic(() => import('@/components/frontend/CollaborationClients/CollaborationClients'));
const ProjectBanner = nextDynamic(() => import('@/components/frontend/ProjectBanner/ProjectBanner'));
const ContactSection = nextDynamic(() => import('@/components/frontend/ContactSection/ContactSection'));

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

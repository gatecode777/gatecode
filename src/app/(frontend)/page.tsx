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
import connectDB from '@/lib/db';
import TeamMember from '@/models/TeamMember';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Gatecode Technologies — Empowering Business Innovation',
  description: 'Gatecode Technologies is a leading software development and digital transformation company. We empower businesses with custom websites, mobile apps, UI/UX designs, accounting, and BPO solutions.',
  keywords: [
    'Gatecode Technologies',
    'software development company',
    'digital transformation',
    'custom website development',
    'mobile app development',
    'UI/UX design services',
    'BPO services',
    'accounting support',
    'graphic design',
    'business tech solutions'
  ]
};

function plain(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default async function Home() {
  await connectDB();

  const teamMembers = await TeamMember.find({ isActive: true })
    .sort({ order: 1 })
    .lean();

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
      <TSlider members={plain(teamMembers)} />
      <ContactSection />
    </>
  );
}

// @ts-nocheck
import type { Metadata } from 'next';
import EngagementHero from '@/components/frontend/EngagementHero/EngagementHero';
import EngagementSteps from '@/components/frontend/EngagementSteps/EngagementSteps';
import EngagementBenefits from '@/components/frontend/EngagementBenefits/EngagementBenefits';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';

export const metadata: Metadata = { title: 'EngagementProcess' };

export default function EngagementProcessPage() {
  return (
    <>
      <EngagementHero />
      <EngagementSteps />
      <EngagementBenefits />
      <ProjectBanner />
      <ContactSection />
    </>
  );
}

// @ts-nocheck
import type { Metadata } from 'next';
import EngagementHero from '@/components/frontend/EngagementHero/EngagementHero';
import EngagementSteps from '@/components/frontend/EngagementSteps/EngagementSteps';
import EngagementBenefits from '@/components/frontend/EngagementBenefits/EngagementBenefits';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';

export const metadata: Metadata = {
  title: 'Our Engagement Process | Gatecode Technologies',
  description: 'Learn about the streamlined engagement process of Gatecode Technologies. We guide you through requirement analysis, strategic roadmap planning, user-focused UI/UX design, development, rigorous testing, and deployment.',
  keywords: [
    'Gatecode Technologies',
    'Engagement Process',
    'Requirement Analysis',
    'Planning and Strategy',
    'Design and Development',
    'Testing and Quality Assurance',
    'Deployment and Launch',
    'Support and Maintenance',
    'collaborative IT workflow'
  ]
};

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

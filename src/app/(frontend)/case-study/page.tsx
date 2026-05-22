// @ts-nocheck
import type { Metadata } from 'next';
import CaseStudyComponent from '@/components/frontend/CaseStudy/CaseStudy';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';

export const metadata: Metadata = { title: 'CaseStudy' };

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudyComponent />
      <ProjectBanner />
    </>
  );
}

// @ts-nocheck
import type { Metadata } from 'next';
import CaseStudyComponent from '@/components/frontend/CaseStudy/CaseStudy';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import connectDB from '@/lib/db';
import CaseStudyModel from '@/models/CaseStudy';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'CaseStudy' };

function plain(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default async function CaseStudyPage() {
  await connectDB();

  const studies = await CaseStudyModel.find({ isActive: true })
    .sort({ order: 1 })
    .lean();

  return (
    <>
      <CaseStudyComponent studies={plain(studies)} />
      <ProjectBanner />
    </>
  );
}

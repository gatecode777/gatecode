// @ts-nocheck
import type { Metadata } from 'next';
import CaseStudyComponent from '@/components/frontend/CaseStudy/CaseStudy';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import connectDB from '@/lib/db';
import CaseStudyModel from '@/models/CaseStudy';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Case Studies & Client Success Stories | Gatecode Technologies',
  description: 'Read our case studies to see how Gatecode Technologies helps businesses overcome complex challenges and drive growth through digital transformation and custom software engineering.',
  keywords: [
    'Gatecode Technologies',
    'CASE STUDIES',
    'measurable results',
    'innovative solutions',
    'DAMRU BY NAMO',
    'ECO-BIN',
    'COCOFINA SUGAR',
    'online ordering platform',
    'E-Commerce Website',
    'environmental cleaning services'
  ],
  alternates: {
    canonical: '/case-study',
  },
};

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

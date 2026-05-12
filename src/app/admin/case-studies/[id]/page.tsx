import type { Metadata } from 'next';
import CaseStudyEditor from '@/components/admin/case-studies/CaseStudyEditor';

export const metadata: Metadata = { title: 'Edit Case Study | Admin' };

type Props = { params: Promise<{ id: string }> };

export default async function EditCaseStudyPage({ params }: Props) {
  const { id } = await params;
  return <CaseStudyEditor studyId={id} />;
}

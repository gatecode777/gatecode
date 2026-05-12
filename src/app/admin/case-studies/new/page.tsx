import type { Metadata } from 'next';
import CaseStudyEditor from '@/components/admin/case-studies/CaseStudyEditor';

export const metadata: Metadata = { title: 'New Case Study | Admin' };

export default function NewCaseStudyPage() {
  return <CaseStudyEditor />;
}

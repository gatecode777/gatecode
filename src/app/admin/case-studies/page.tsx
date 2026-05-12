import type { Metadata } from 'next';
import CaseStudiesList from '@/components/admin/case-studies/CaseStudiesList';

export const metadata: Metadata = { title: 'Case Studies | Admin' };

export default function CaseStudiesPage() {
  return <CaseStudiesList />;
}

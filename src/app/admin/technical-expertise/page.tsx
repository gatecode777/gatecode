import type { Metadata } from 'next';
import TechnicalExpertiseCMS from '@/components/admin/technical-expertise/TechnicalExpertiseCMS';
export const metadata: Metadata = { title: 'Technical Expertise' };
export default function TEPage() { return <TechnicalExpertiseCMS />; }

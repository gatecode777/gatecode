import type { Metadata } from 'next';
import SubServicesCMS from '@/components/admin/services/SubServicesCMS';
export const metadata: Metadata = { title: 'Sub-Services' };
export default function SubServicesPage() { return <SubServicesCMS/>; }

import type { Metadata } from 'next';
import ServiceCategoriesCMS from '@/components/admin/services/ServiceCategoriesCMS';
export const metadata: Metadata = { title: 'Service Categories' };
export default function CategoriesPage() { return <ServiceCategoriesCMS/>; }

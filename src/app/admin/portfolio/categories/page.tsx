import type { Metadata } from 'next';
import CategoryCMS from '@/components/admin/portfolio/CategoryCMS';

export const metadata: Metadata = { title: 'Categories' };

export default function CategoriesPage() {
  return <CategoryCMS />;
}

import type { Metadata } from 'next';
import ProjectCMS from '@/components/admin/portfolio/ProjectCMS';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return <ProjectCMS />;
}

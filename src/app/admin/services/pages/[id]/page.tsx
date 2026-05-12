import type { Metadata } from 'next';
import ServicePageEditor from '@/components/admin/services/ServicePageEditor';
export const metadata: Metadata = { title: 'Edit Service Page' };
type Props = { params: Promise<{ id: string }> };
export default async function EditServicePage({ params }: Props) {
  const { id } = await params;
  return <ServicePageEditor pageId={id}/>;
}

import type { Metadata } from 'next';
import TEPageEditor from '@/components/admin/technical-expertise/TEPageEditor';
export const metadata: Metadata = { title: 'Edit TE Page' };
type Props = { params: Promise<{ id: string }> };
export default async function EditTEPage({ params }: Props) {
  const { id } = await params;
  return <TEPageEditor pageId={id} />;
}

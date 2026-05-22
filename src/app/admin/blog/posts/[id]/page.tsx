'use client';
import { use } from 'react';
import BlogPostEditor from '@/components/admin/blog/BlogPostEditor';
export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <BlogPostEditor postId={id} />;
}

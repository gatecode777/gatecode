// @ts-nocheck
import { notFound, permanentRedirect } from 'next/navigation';
import BlogListing, { getBlogListingMetadata } from '@/components/frontend/Blog/BlogListing';

export const dynamic = 'force-dynamic';

function normalizeSlug(slug) {
  if (slug === 'all') permanentRedirect('/blog'); // "all" is not a real category page
  return slug;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return getBlogListingMetadata({ categorySlug: normalizeSlug(slug), page: 1 });
}

export default async function BlogCategoryPage({ params }) {
  const { slug } = await params;
  return <BlogListing categorySlug={normalizeSlug(slug)} currentPage={1} />;
}

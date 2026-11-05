// @ts-nocheck
import { notFound, permanentRedirect } from 'next/navigation';
import BlogListing, { getBlogListingMetadata } from '@/components/frontend/Blog/BlogListing';

export const dynamic = 'force-dynamic';

function parsePage(slug, raw) {
  if (slug === 'all') permanentRedirect('/blog');
  if (!/^\d+$/.test(raw)) notFound();
  const n = Number(raw);
  if (n < 1) notFound();
  if (n === 1) permanentRedirect(`/blog/category/${slug}`); // duplicate of the category root
  return n;
}

export async function generateMetadata({ params }) {
  const { slug, page } = await params;
  return getBlogListingMetadata({ categorySlug: slug, page: parsePage(slug, page) });
}

export default async function BlogCategoryPagedPage({ params }) {
  const { slug, page } = await params;
  return <BlogListing categorySlug={slug} currentPage={parsePage(slug, page)} />;
}

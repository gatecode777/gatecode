// @ts-nocheck
import { notFound, permanentRedirect } from 'next/navigation';
import BlogListing, { getBlogListingMetadata } from '@/components/frontend/Blog/BlogListing';

export const dynamic = 'force-dynamic';

function parsePage(raw) {
  if (!/^\d+$/.test(raw)) notFound();
  const n = Number(raw);
  if (n < 1) notFound();
  if (n === 1) permanentRedirect('/blog'); // /blog/page/1 duplicates /blog
  return n;
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  return getBlogListingMetadata({ categorySlug: 'all', page: parsePage(page) });
}

export default async function BlogPage({ params }) {
  const { page } = await params;
  return <BlogListing categorySlug="all" currentPage={parsePage(page)} />;
}

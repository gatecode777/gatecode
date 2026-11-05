// @ts-nocheck
import { permanentRedirect } from 'next/navigation';
import BlogListing, { blogHref, getBlogListingMetadata } from '@/components/frontend/Blog/BlogListing';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getBlogListingMetadata({ categorySlug: 'all', page: 1 });
}

export default async function Blog({ searchParams }) {
  // Legacy URLs (/blog?category=x&page=2) -> clean paths, so old links and
  // already-indexed URLs keep working and pass their ranking to the new URL.
  const params = await searchParams;
  const legacyCategory = String(params?.category || params?.cat || '').trim().toLowerCase();
  const legacyPage = Math.max(1, Number(params?.page || 1) || 1);
  if (legacyCategory || legacyPage > 1) {
    permanentRedirect(blogHref(legacyPage, legacyCategory || 'all'));
  }

  return <BlogListing categorySlug="all" currentPage={1} />;
}

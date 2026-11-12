// @ts-nocheck
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import './Blog.css';
import BlogCard from './BlogCard';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import BlogCategory from '@/models/BlogCategory';

export const SITE_URL = 'https://www.gatecode.in';
export const postsPerPage = 6;

const DEFAULT_TITLE = 'IT, Software & Web Development Blog | Gatecode Technologies';
const DEFAULT_DESC =
  'Explore the latest insights, trends, and expert articles on software development, web engineering, digital marketing, UI/UX design, and IT outsourcing.';

function plain(data) {
  return JSON.parse(JSON.stringify(data));
}

/** Clean, crawlable URL for a category + page. "all" / undefined => /blog */
export function blogHref(page, categorySlug) {
  const base = categorySlug && categorySlug !== 'all' ? `/blog/category/${categorySlug}` : '/blog';
  return page > 1 ? `${base}/page/${page}` : base;
}

async function getBlogCategories() {
  const [categories, totalCount, categoryCounts] = await Promise.all([
    BlogCategory.find({ isActive: true }).sort({ order: 1, name: 1 }).select('_id name slug description').lean(),
    BlogPost.countDocuments({ status: 'published', isActive: true }),
    BlogPost.aggregate([
      { $match: { status: 'published', isActive: true, categoryId: { $ne: null } } },
      { $group: { _id: '$categoryId', count: { $sum: 1 } } },
    ]),
  ]);

  const countMap = new Map(categoryCounts.map(item => [String(item._id), item.count]));

  return [
    { _id: 'all', name: 'All', slug: 'all', count: totalCount },
    ...categories.map(category => ({
      ...category,
      _id: String(category._id),
      count: countMap.get(String(category._id)) || 0,
    })),
  ];
}

function getPageNumbers(currentPage, totalPages) {
  const maxVisible = 5;
  const pages = [];

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }

  let start = Math.max(2, currentPage - 1);
  let end = Math.min(totalPages - 1, currentPage + 1);

  if (currentPage <= 3) {
    start = 2;
    end = 4;
  } else if (currentPage >= totalPages - 2) {
    start = totalPages - 3;
    end = totalPages - 1;
  }

  pages.push(1);
  if (start > 2) pages.push('...');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages - 1) pages.push('...');
  pages.push(totalPages);

  return pages;
}

function CategorySidebar({ categories, activeCategory }) {
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-card">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Categories</h2>
        </div>
        <ul className="category-list">
          {categories.map(cat => (
            <li key={cat._id}>
              <Link
                href={blogHref(1, cat.slug)}
                className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{cat.count ?? 0}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

/**
 * Metadata for /blog and /blog/category/<slug> (with optional /page/<n>).
 * Every variant gets a unique title and a self-referencing canonical.
 */
export async function getBlogListingMetadata({ categorySlug = 'all', page = 1 }): Promise<Metadata> {
  await connectDB();

  let title = DEFAULT_TITLE;
  let description = DEFAULT_DESC;

  if (categorySlug !== 'all') {
    const category = await BlogCategory.findOne({ slug: categorySlug, isActive: true })
      .select('name description')
      .lean();
    if (!category) return { title: 'Category not found', robots: { index: false, follow: false } };

    title = `${category.name} Articles & Insights | Gatecode Technologies Blog`;
    description =
      category.description?.trim() ||
      `Read the latest ${category.name} articles, insights and guides from the Gatecode Technologies team.`;
  }

  if (page > 1) title = title.replace(' | ', ` - Page ${page} | `);

  const path = blogHref(page, categorySlug);
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Gatecode Technologies',
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.webp'] },
  };
}

export default async function BlogListing({ categorySlug = 'all', currentPage = 1 }) {
  await connectDB();

  const categories = await getBlogCategories();
  const activeCat = categories.find(cat => cat.slug === categorySlug);
  if (!activeCat) notFound();

  const filter = { status: 'published', isActive: true };
  if (activeCat._id !== 'all') filter.categoryId = activeCat._id;

  const [posts, totalPosts] = await Promise.all([
    BlogPost.find(filter)
      .populate('categoryId', 'name slug')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip((currentPage - 1) * postsPerPage)
      .limit(postsPerPage)
      .select('-contentBlocks')
      .lean(),
    BlogPost.countDocuments(filter),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));
  // Out-of-range pages are real 404s, not soft-404 empty lists
  if (currentPage > totalPages) notFound();

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const visiblePosts = plain(posts);
  const sidebarCats = plain(categories);
  const isCategory = activeCat.slug !== 'all';

  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Company', item: `${SITE_URL}/about` },
    { '@type': 'ListItem', position: 3, name: 'Blog', item: `${SITE_URL}/blog` },
  ];
  if (isCategory) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 4,
      name: activeCat.name,
      item: `${SITE_URL}${blogHref(1, activeCat.slug)}`,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: isCategory ? `${activeCat.name} - Gatecode Technologies Blog` : 'Gatecode Technologies Tech Blog',
    description: 'Latest insights on software engineering, web development, UI/UX design, digital marketing, and cloud tech.',
    publisher: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: SITE_URL,
    },
  };

  return (
    <div className="blog-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <header className="blog-hero">
        <h1 className="blog-hero-title">{isCategory ? activeCat.name.toUpperCase() : 'OUR BLOGS & INSIGHTS'}</h1>
        <p className="blog-hero-subtitle">
          {isCategory && activeCat.description
            ? activeCat.description
            : 'Explore expert articles, tech insights, and industry trends on software engineering, web development, UI/UX, and IT outsourcing.'}
        </p>
      </header>

      <div className="blog-container">
        <CategorySidebar categories={sidebarCats} activeCategory={activeCat.name} />

        <main className="blog-content">
          <div className="blog-section-header">
            <h2 className="blog-section-title">{isCategory ? `${activeCat.name} Articles` : 'Latest Articles'}</h2>
          </div>

          {visiblePosts.length === 0 ? (
            <div style={{ padding: '60px 20px', textAlign: 'center', color: '#888' }}>
              <p style={{ fontSize: 18, marginBottom: 8 }}>No posts found</p>
              <p style={{ fontSize: 14 }}>Check back soon for new content in this category.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {visiblePosts.map(post => <BlogCard key={post._id} post={post} />)}
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">
              <div className="pagination-wrapper">
                {currentPage === 1 ? (
                  <span className="page-item arrow disabled">&#8592;</span>
                ) : (
                  <Link className="page-item arrow" href={blogHref(currentPage - 1, activeCat.slug)}>&#8592;</Link>
                )}

                {pageNumbers.map((page, idx) =>
                  page === '...' ? (
                    <span key={`e-${idx}`} className="page-item ellipsis">&hellip;</span>
                  ) : (
                    <Link
                      key={page}
                      className={`page-item ${currentPage === page ? 'active' : ''}`}
                      href={blogHref(page, activeCat.slug)}
                    >
                      {page}
                    </Link>
                  )
                )}

                {currentPage === totalPages ? (
                  <span className="page-item arrow disabled">&#8594;</span>
                ) : (
                  <Link className="page-item arrow" href={blogHref(currentPage + 1, activeCat.slug)}>&#8594;</Link>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

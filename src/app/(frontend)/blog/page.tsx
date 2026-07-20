// @ts-nocheck
import type { Metadata } from 'next';
import Link from 'next/link';
import '@/components/frontend/Blog/Blog.css';
import BlogCard from '@/components/frontend/Blog/BlogCard';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import BlogCategory from '@/models/BlogCategory';

export const metadata: Metadata = {
  title: 'Blog & Technology Insights | Gatecode Technologies',
  description: 'Explore the latest insights, trends, and expert articles on software development, digital marketing, BPO, UI/UX design, and business accounting.',
  keywords: [
    'Gatecode Technologies blog',
    'software development trends',
    'digital marketing insights',
    'UI/UX design tips',
    'business accounting guide',
    'outsourcing strategies',
    'IT consulting articles'
  ],
  alternates: {
    canonical: '/blog',
  },
};

export const dynamic = 'force-dynamic';

const postsPerPage = 6;

function plain(data) {
  return JSON.parse(JSON.stringify(data));
}

async function getBlogCategories() {
  const [categories, totalCount, categoryCounts] = await Promise.all([
    BlogCategory.find({ isActive: true }).sort({ order: 1, name: 1 }).select('_id name slug').lean(),
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

function blogHref(page, categorySlug) {
  const params = new URLSearchParams();
  if (page > 1) params.set('page', String(page));
  if (categorySlug && categorySlug !== 'all') params.set('category', categorySlug);
  const query = params.toString();
  return query ? `/blog?${query}` : '/blog';
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
                href={cat.slug === 'all' ? '/blog' : `/blog?category=${cat.slug}`}
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

export default async function Blog({ searchParams }) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params?.page || 1) || 1);
  const categorySlug = String(params?.category || params?.cat || 'all');

  await connectDB();

  const categories = await getBlogCategories();
  const activeCat = categories.find(cat => cat.slug === categorySlug) || categories[0];
  const filter = { status: 'published', isActive: true };

  if (activeCat?._id && activeCat._id !== 'all') {
    filter.categoryId = activeCat._id;
  }

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
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const visiblePosts = plain(posts);
  const sidebarCats = plain(categories);

  return (
    <div className="blog-page">
      <div className="blog-container">
        <CategorySidebar categories={sidebarCats} activeCategory={activeCat?.name || 'All'} />

        <main className="blog-content">
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
                  <Link className="page-item arrow" href={blogHref(currentPage - 1, activeCat?.slug)}>&#8592;</Link>
                )}

                {pageNumbers.map((page, idx) =>
                  page === '...' ? (
                    <span key={`e-${idx}`} className="page-item ellipsis">&hellip;</span>
                  ) : (
                    <Link
                      key={page}
                      className={`page-item ${currentPage === page ? 'active' : ''}`}
                      href={blogHref(page, activeCat?.slug)}
                    >
                      {page}
                    </Link>
                  )
                )}

                {currentPage === totalPages ? (
                  <span className="page-item arrow disabled">&#8594;</span>
                ) : (
                  <Link className="page-item arrow" href={blogHref(currentPage + 1, activeCat?.slug)}>&#8594;</Link>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

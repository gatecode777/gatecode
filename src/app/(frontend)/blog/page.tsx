// @ts-nocheck
'use client';

import { useState, useEffect, useRef } from 'react';
import '@/components/frontend/Blog/Blog.css';
import BlogCard from '@/components/frontend/Blog/BlogCard';
import BlogSidebar from '@/components/frontend/Blog/BlogSidebar';

const Blog = () => {
  const [categories, setCategories]       = useState([]);
  const [posts, setPosts]                 = useState([]);
  const [activeCat, setActiveCat]         = useState({ _id: 'all', name: 'All', slug: 'all', count: 0 });
  const [currentPage, setCurrentPage]     = useState(1);
  const [totalPages, setTotalPages]       = useState(1);
  const [loadingCats, setLoadingCats]     = useState(true);
  const [loadingPosts, setLoadingPosts]   = useState(true);
  const postsPerPage = 6;
  const isMount = useRef(true);

  // Fetch categories once
  useEffect(() => {
    fetch('/api/blog/categories')
      .then(r => r.json())
      .then(d => {
        if (d.success && d.data?.length) {
          setCategories(d.data);
          setActiveCat(d.data[0]); // "All" is first
        }
      })
      .catch(() => {})
      .finally(() => setLoadingCats(false));
  }, []);

  // Fetch posts when category or page changes
  useEffect(() => {
    setLoadingPosts(true);
    const catParam = activeCat._id === 'all' ? '' : `&categoryId=${activeCat._id}`;
    fetch(`/api/blog/posts?page=${currentPage}&limit=${postsPerPage}${catParam}`)
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          setPosts(d.data);
          setTotalPages(d.totalPages || 1);
        } else {
          setPosts([]);
        }
      })
      .catch(() => setPosts([]))
      .finally(() => setLoadingPosts(false));
  }, [activeCat._id, currentPage]);

  const handleCategoryChange = (cat) => {
    setActiveCat(cat);
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const getPageNumbers = () => {
    const maxVisible = 5;
    const pages = [];
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(2, currentPage - 1);
      let end   = Math.min(totalPages - 1, currentPage + 1);
      if (currentPage <= 3)              { start = 2; end = 4; }
      else if (currentPage >= totalPages - 2) { start = totalPages - 3; end = totalPages - 1; }
      pages.push(1);
      if (start > 2) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  // Map categories for sidebar: { name, count }
  const sidebarCats = categories.map(c => ({ ...c, name: c.name, count: c.count ?? 0 }));

  return (
    <div className="blog-page">
      <div className="blog-container">
        <BlogSidebar
          categories={sidebarCats}
          activeCategory={activeCat.name}
          setActiveCategory={(name) => {
            const found = categories.find(c => c.name === name);
            if (found) handleCategoryChange(found);
          }}
        />

        <main className="blog-content">
          {loadingPosts ? (
            <div className="blog-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="blog-card" style={{ minHeight: 380, background: '#f5f7fa', borderRadius: 12, animation: 'pulse 1.5s infinite' }} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div style={{ padding: '60px 20px', textAlign: 'center', color: '#888' }}>
              <p style={{ fontSize: 18, marginBottom: 8 }}>No posts found</p>
              <p style={{ fontSize: 14 }}>Check back soon for new content in this category.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map(post => <BlogCard key={post._id} post={post} />)}
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">
              <div className="pagination-wrapper">
                <div
                  className={`page-item arrow ${currentPage === 1 ? 'disabled' : ''}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >&#8592;</div>

                {getPageNumbers().map((page, idx) =>
                  page === '...' ? (
                    <div key={`e-${idx}`} className="page-item ellipsis">&hellip;</div>
                  ) : (
                    <div
                      key={page}
                      className={`page-item ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >{page}</div>
                  )
                )}

                <div
                  className={`page-item arrow ${currentPage === totalPages ? 'disabled' : ''}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >&#8594;</div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Blog;

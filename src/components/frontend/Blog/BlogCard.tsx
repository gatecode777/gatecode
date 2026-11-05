// @ts-nocheck
'use client';

import Link from 'next/link';
import './Blog.css';

function fmtDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

const BlogCard = ({ post }) => {
  const catName      = post.categoryId?.name  || post.category  || '';
  const authorName   = post.authorName        || post.author    || 'Admin';
  const authorImg    = post.authorImage       || post.authorImg || '/images/user-pro.webp';
  const coverImg     = post.coverImage        || post.image     || '/images/blog-default.webp';
  const dateStr      = post.publishedAt ? fmtDate(post.publishedAt) : (post.date || '');
  const commentCount = post.commentCount !== undefined ? post.commentCount : (post.comments || '0');
  const slug         = post.slug              || '';
  // Same URL the old "Explore Blog" button used
  const href         = slug ? `/blog/${slug}` : '/blog';

  return (
    <div className="blog-card">
      <div className="card-image-wrapper">
        {/* Image link: anchor text for crawlers is the alt. Removed from tab order / a11y tree
            because the title link below already names the same destination. */}
        <Link href={href} tabIndex={-1} aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%' }}>
          <img src={coverImg} alt={post.coverImageAlt || post.title} className="card-image" width={400} height={250} loading="lazy" />
        </Link>
        <div className="card-category">{catName}</div>
      </div>

      <div className="card-body">
        <div className="card-author">
          <img src={authorImg} alt={authorName} className="author-img" width={40} height={40} loading="lazy" />
          <div className="author-infoo">
            <span className="author-namee">{authorName}</span>
            <div className="card-meta">
              <span>{dateStr}</span>
              <span className="card-meta-dot">·</span>
              <span>{commentCount} Comments</span>
            </div>
          </div>
        </div>

        <h3 className="card-title">
          <Link href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{post.title}</Link>
        </h3>
        <p className="card-description">{post.metaDescription || post.subtitle || ''}</p>

        {/* A single link styled as the button (a <button> inside an <a> is invalid HTML) */}
        <Link
          href={href}
          className="explore-btn"
          aria-label={`Explore Blog: ${post.title}`}
          style={{ display: 'block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box', lineHeight: 'normal' }}
        >
          Explore Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

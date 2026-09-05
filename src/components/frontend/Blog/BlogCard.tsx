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

  return (
    <div className="blog-card">
      <div className="card-image-wrapper">
        <img src={coverImg} alt={post.title} className="card-image" width={400} height={250} loading="lazy" />
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

        <h3 className="card-title">{post.title}</h3>
        <p className="card-description">{post.metaDescription || post.subtitle || ''}</p>

        <Link href={slug ? `/blog/${slug}` : '/blog'} style={{ textDecoration: 'none' }}>
          <button className="explore-btn">Explore Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

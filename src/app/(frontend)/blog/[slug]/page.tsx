// @ts-nocheck

import Link from 'next/link';
import '@/components/frontend/Blog/BlogDetail.css';
import '@/components/frontend/Blog/Blog.css';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import BlogCategory from '@/models/BlogCategory';
import BlogDetailSidebarClient from '@/components/frontend/Blog/BlogDetailSidebarClient';

export const dynamic = 'force-dynamic';

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

function BlockParagraph({ data }) {
  if (!data?.text) return null;
  return <p>{data.text}</p>;
}

function BlockHeading({ data }) {
  if (!data?.text) return null;
  const Tag = data.level || 'h3';
  return <Tag className={data.style === 'yellow' ? 'yellow-text' : ''}>{data.text}</Tag>;
}

function BlockBulletList({ data }) {
  const items = data?.items || [];
  if (!items.length) return null;
  return (
    <>
      {data?.title && <h3>{data.title}</h3>}
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  );
}

function BlockNumberedList({ data }) {
  const items = data?.items || [];
  if (!items.length) return null;
  return (
    <>
      {data?.title && <h3>{data.title}</h3>}
      <ol>
        {items.map((item, i) => (
          <li key={i}><strong>{i + 1}. <span></span>{item}</strong></li>
        ))}
      </ol>
    </>
  );
}

function BlockNumberedSection({ data }) {
  const subItems = data?.subItems || [];
  return (
    <li>
      <strong>{data?.number}. <span></span>{data?.title}</strong>
      {data?.body && <p>{data.body}</p>}
      {subItems.length > 0 && (
        <ul>
          {subItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </li>
  );
}

function BlockImageGrid({ data }) {
  const images = data?.images || [];
  if (!images.length) return null;
  const imgClasses = ['img-handshake', 'img-tablet', 'img-vr', 'img-tall'];
  return (
    <div className="article-images">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.url || img}
          alt={img.alt || `Image ${i + 1}`}
          className={imgClasses[i] || imgClasses[imgClasses.length - 1]}
        />
      ))}
    </div>
  );
}

function BlockSingleImage({ data }) {
  if (!data?.url) return null;
  return (
    <div className="article-banner" style={{ margin: '24px 0' }}>
      <img src={data.url} alt={data.alt || ''} />
      {data.caption && <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginTop: 6 }}>{data.caption}</p>}
    </div>
  );
}

function BlockQuote({ data }) {
  if (!data?.text) return null;
  return (
    <blockquote style={{ borderLeft: '4px solid #f0c300', paddingLeft: 16, margin: '20px 0', fontStyle: 'italic', color: '#555' }}>
      <p>{data.text}</p>
      {data.author && <footer style={{ fontSize: 13, color: '#888', marginTop: 4 }}>- {data.author}</footer>}
    </blockquote>
  );
}

function BlockCallout({ data }) {
  if (!data?.text) return null;
  const styles = {
    info: { background: '#e8f4fd', borderLeft: '4px solid #2196f3', color: '#0d47a1' },
    tip: { background: '#f0fdf4', borderLeft: '4px solid #4caf50', color: '#1b5e20' },
    warning: { background: '#fff8e1', borderLeft: '4px solid #ff9800', color: '#e65100' },
  };
  const st = styles[data.style] || styles.info;
  return (
    <div style={{ ...st, padding: '12px 16px', borderRadius: 6, margin: '16px 0', fontSize: 14 }}>
      {data.text}
    </div>
  );
}

function renderBlock(block, i) {
  if (!block.isVisible) return null;
  const data = block.data;
  switch (block.type) {
    case 'paragraph': return <BlockParagraph key={i} data={data} />;
    case 'heading': return <BlockHeading key={i} data={data} />;
    case 'bulletList': return <BlockBulletList key={i} data={data} />;
    case 'numberedList': return <BlockNumberedList key={i} data={data} />;
    case 'numberedSection': return <BlockNumberedSection key={i} data={data} />;
    case 'imageGrid': return <BlockImageGrid key={i} data={data} />;
    case 'singleImage': return <BlockSingleImage key={i} data={data} />;
    case 'quote': return <BlockQuote key={i} data={data} />;
    case 'callout': return <BlockCallout key={i} data={data} />;
    case 'divider': return <hr key={i} style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #eee' }} />;
    default: return null;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  await connectDB();

  const post = await BlogPost.findOneAndUpdate(
    { slug, status: 'published', isActive: true },
    { $inc: { viewCount: 1 } },
    { returnDocument: 'after' }
  ).populate('categoryId', 'name slug').lean();

  const categories = await getBlogCategories();

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="blog-detail-container">
          <BlogDetailSidebarClient categories={plain(categories)} activeCategory="" slug={slug} initialComments={[]} />
          <main className="blog-detail-content">
            <div style={{ padding: '60px 20px', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 12 }}>Post Not Found</h2>
              <p style={{ color: '#888', marginBottom: 20 }}>This blog post doesn&apos;t exist or has been removed.</p>
              <Link href="/blog" style={{ background: '#0fb9b1', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 6, cursor: 'pointer', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                Back to Blog
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const blogPost = plain(post);
  const sidebarCats = plain(categories);
  const blocks = [...(blogPost.contentBlocks || [])].sort((a, b) => a.order - b.order);
  const catName = blogPost.categoryId?.name || '';
  const authorName = blogPost.authorName || 'Admin';
  const authorImg = blogPost.authorImage || '/images/user-pro.png';
  const authorRole = blogPost.authorRole || 'Content Writer';
  const coverImg = blogPost.coverImage || '';

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <BlogDetailSidebarClient
          categories={sidebarCats}
          activeCategory={catName}
          slug={slug}
        />

        <main className="blog-detail-content">
          <header className="article-header">
            <h1 className="article-title">{blogPost.title}</h1>
            {blogPost.subtitle && <h2 className="article-subtitle">{blogPost.subtitle}</h2>}
          </header>

          {coverImg && (
            <div className="article-banner">
              <img src={coverImg} alt={blogPost.coverImageAlt || blogPost.title} />
            </div>
          )}

          <div className="article-body">
            {blocks.map((block, i) => renderBlock(block, i))}

            {authorName && (
              <div className="author-card">
                <img src={authorImg} alt={authorName} className="author-avatar" />
                <div className="author-details">
                  <span className="author-name">{authorName}</span>
                  <span className="author-role">{authorRole}</span>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

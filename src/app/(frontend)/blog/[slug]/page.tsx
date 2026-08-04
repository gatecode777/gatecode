// @ts-nocheck
import type { Metadata } from 'next';
import Link from 'next/link';
import '@/components/frontend/Blog/BlogDetail.css';
import '@/components/frontend/Blog/Blog.css';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import BlogCategory from '@/models/BlogCategory';
import BlogDetailSidebarClient from '@/components/frontend/Blog/BlogDetailSidebarClient';
import BlogBlockFaq from '@/components/frontend/Blog/BlogBlockFaq';

export const dynamic = 'force-dynamic';

function plain(data) {
  return JSON.parse(JSON.stringify(data));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();
  const post = await BlogPost.findOne({ slug, status: 'published', isActive: true }).lean();

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Gatecode Technologies Blog`,
    description: post.shortDesc || post.subtitle || 'Read our latest blog post.',
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
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

function parseFormattedText(text: string) {
  if (!text) return null;
  let html = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');

  if (/<[a-z][\s\S]*>/i.test(html)) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return text;
}

function BlockParagraph({ data }) {
  if (!data?.text) return null;
  return <p>{parseFormattedText(data.text)}</p>;
}

function BlockHeading({ data }) {
  if (!data?.text) return null;
  const Tag = data.level || 'h3';
  return <Tag className={data.style === 'yellow' ? 'yellow-text' : ''}>{parseFormattedText(data.text)}</Tag>;
}

function BlockBulletList({ data }) {
  const items = data?.items || [];
  if (!items.length) return null;
  return (
    <>
      {data?.title && <p className="list-section-title">{parseFormattedText(data.title)}</p>}
      <ul>
        {items.map((item, i) => <li key={i}>{parseFormattedText(item)}</li>)}
      </ul>
    </>
  );
}

function BlockNumberedList({ data }) {
  const items = data?.items || [];
  if (!items.length) return null;
  return (
    <>
      {data?.title && <p className="list-section-title">{parseFormattedText(data.title)}</p>}
      <ol>
        {items.map((item, i) => (
          <li key={i}>{parseFormattedText(item)}</li>
        ))}
      </ol>
    </>
  );
}

function BlockNumberedSection({ data }) {
  const subItems = data?.subItems || [];
  const numStr = data?.number ? (String(data.number).endsWith('.') ? `${data.number} ` : `${data.number}. `) : '';

  return (
    <div className="numbered-section-block">
      <div className="numbered-section-header">
        <strong>{numStr}{parseFormattedText(data?.title)}</strong>
      </div>
      {data?.body && <p>{parseFormattedText(data.body)}</p>}
      {subItems.length > 0 && (
        <ul>
          {subItems.map((item, i) => <li key={i}>{parseFormattedText(item)}</li>)}
        </ul>
      )}
    </div>
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
      {data.caption && <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginTop: 6 }}>{parseFormattedText(data.caption)}</p>}
    </div>
  );
}

function BlockQuote({ data }) {
  if (!data?.text) return null;
  return (
    <blockquote style={{ borderLeft: '4px solid #f0c300', paddingLeft: 16, margin: '20px 0', fontStyle: 'italic', color: '#555' }}>
      <p>{parseFormattedText(data.text)}</p>
      {data.author && <footer style={{ fontSize: 13, color: '#888', marginTop: 4 }}>- {parseFormattedText(data.author)}</footer>}
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
      {parseFormattedText(data.text)}
    </div>
  );
}

function BlockTable({ data }) {
  const headers = data?.headers || [];
  const rows = data?.rows || [];
  if (!headers.length && !rows.length) return null;

  return (
    <div className="table-responsive-wrapper">
      <table className="article-table">
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h: string, i: number) => (
                <th key={i}>{parseFormattedText(h)}</th>
              ))}
            </tr>
          </thead>
        )}
        {rows.length > 0 && (
          <tbody>
            {rows.map((row: string[], rIdx: number) => (
              <tr key={rIdx}>
                {row.map((cell: string, cIdx: number) => (
                  <td key={cIdx}>{parseFormattedText(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
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
    case 'table': return <BlockTable key={i} data={data} />;
    case 'faq': return <BlogBlockFaq key={i} data={data} />;
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

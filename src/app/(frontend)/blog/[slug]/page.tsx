// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import '@/components/frontend/Blog/BlogDetail.css';
import '@/components/frontend/Blog/Blog.css';
import BlogSidebar from '@/components/frontend/Blog/BlogSidebar';

// ── Helpers ────────────────────────────────────────────────────────────────
function fmtDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// ── Block renderers — use ONLY existing BlogDetail.css classes ─────────────

function BlockParagraph({ data }) {
  if (!data?.text) return null;
  return <p>{data.text}</p>;
}

function BlockHeading({ data }) {
  if (!data?.text) return null;
  const cls = data.style === 'yellow' ? 'yellow-text' : '';
  const Tag = data.level || 'h3';
  return <Tag className={cls}>{data.text}</Tag>;
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
    <>
      <li>
        <strong>{data?.number}. <span></span>{data?.title}</strong>
        {data?.body && <p>{data.body}</p>}
        {subItems.length > 0 && (
          <ul>
            {subItems.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        )}
      </li>
    </>
  );
}

function BlockImageGrid({ data }) {
  const images = data?.images || [];
  if (!images.length) return null;
  // Map up to 4 images to the existing CSS positional classes
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
      {data.author && <footer style={{ fontSize: 13, color: '#888', marginTop: 4 }}>— {data.author}</footer>}
    </blockquote>
  );
}

function BlockCallout({ data }) {
  if (!data?.text) return null;
  const styles = {
    info:    { background: '#e8f4fd', borderLeft: '4px solid #2196f3', color: '#0d47a1' },
    tip:     { background: '#f0fdf4', borderLeft: '4px solid #4caf50', color: '#1b5e20' },
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
  const d = block.data;
  switch (block.type) {
    case 'paragraph':        return <BlockParagraph       key={i} data={d} />;
    case 'heading':          return <BlockHeading         key={i} data={d} />;
    case 'bulletList':       return <BlockBulletList      key={i} data={d} />;
    case 'numberedList':     return <BlockNumberedList    key={i} data={d} />;
    case 'numberedSection':  return <BlockNumberedSection key={i} data={d} />;
    case 'imageGrid':        return <BlockImageGrid       key={i} data={d} />;
    case 'singleImage':      return <BlockSingleImage     key={i} data={d} />;
    case 'quote':            return <BlockQuote           key={i} data={d} />;
    case 'callout':          return <BlockCallout         key={i} data={d} />;
    case 'divider':          return <hr key={i} style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #eee' }} />;
    default:                 return null;
  }
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = String(params?.slug ?? '');

  const [post, setPost]           = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [notFound, setNotFound]   = useState(false);

  const [comments, setComments]       = useState([]);
  const [commentForm, setCommentForm] = useState({ name:'', email:'', website:'', content:'' });
  const [commentErrors, setCommentErrors] = useState({});
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);

  const [quoteForm, setQuoteForm]     = useState({ fullName:'', companyName:'', mobileNumber:'', email:'', additionalDetail:'' });
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteError, setQuoteError]   = useState('');

  useEffect(() => {
    // Fetch categories for sidebar
    fetch('/api/blog/categories')
      .then(r => r.json())
      .then(d => { if (d.success) setCategories(d.data); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blog/posts/${slug}`)
      .then(r => r.json())
      .then(d => {
        if (d.success && d.data) setPost(d.data);
        else setNotFound(true);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blog/posts/${slug}/comments`)
      .then(r => r.json())
      .then(d => { if (d.success) setComments(d.data); })
      .catch(() => {});
  }, [slug]);

  const handleCommentChange = (e) => {
    setCommentForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (commentErrors[e.target.name]) {
      setCommentErrors(prev => { const n={...prev}; delete n[e.target.name]; return n; });
    }
  };

  const validateComment = () => {
    const e = {};
    if (!commentForm.name.trim()) e.name = 'Name is required';
    if (!commentForm.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(commentForm.email)) e.email = 'Invalid email';
    if (!commentForm.content.trim()) e.content = 'Comment is required';
    setCommentErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!validateComment()) return;
    setCommentSubmitting(true);
    setCommentErrors({});
    try {
      const res = await fetch(`/api/blog/posts/${slug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentForm),
      });
      const data = await res.json();
      if (data.success) {
        setCommentSuccess(true);
        setCommentForm({ name:'', email:'', website:'', content:'' });
        setComments(prev => [data.data, ...prev]);
      } else {
        setCommentErrors({ submit: data.message || 'Submission failed' });
      }
    } catch {
      setCommentErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setCommentSubmitting(false);
    }
  };

  const handleQuoteChange = (e) => {
    setQuoteForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteSubmitting(true);
    setQuoteError('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteForm),
      });
      const data = await res.json();
      if (data.success) {
        setQuoteSuccess(true);
        setQuoteForm({ fullName:'', companyName:'', mobileNumber:'', email:'', additionalDetail:'' });
      } else {
        setQuoteError(data.message || 'Submission failed');
      }
    } catch {
      setQuoteError('Network error. Please try again.');
    } finally {
      setQuoteSubmitting(false);
    }
  };

  const sidebarCats = categories.map(c => ({ ...c, name: c.name, count: c.count ?? 0 }));

  if (loading) return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <aside className="blog-detail-sidebar">
          <BlogSidebar categories={sidebarCats} activeCategory="" setActiveCategory={() => {}} />
        </aside>
        <main className="blog-detail-content">
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#888' }}>Loading…</div>
        </main>
      </div>
    </div>
  );

  if (notFound) return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <aside className="blog-detail-sidebar">
          <BlogSidebar categories={sidebarCats} activeCategory="" setActiveCategory={(name) => {
            const found = categories.find(c => c.name === name);
            if (found) router.push(`/blog?cat=${found.slug}`);
          }} />
        </aside>
        <main className="blog-detail-content">
          <div style={{ padding: '60px 20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 12 }}>Post Not Found</h2>
            <p style={{ color: '#888', marginBottom: 20 }}>This blog post doesn&apos;t exist or has been removed.</p>
            <button onClick={() => router.push('/blog')} style={{ background: '#0fb9b1', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 6, cursor: 'pointer', fontWeight: 600 }}>
              Back to Blog
            </button>
          </div>
        </main>
      </div>
    </div>
  );

  const blocks = [...(post.contentBlocks || [])].sort((a, b) => a.order - b.order);
  const catName = post.categoryId?.name || '';
  const authorName = post.authorName || 'Admin';
  const authorImg  = post.authorImage || '/images/user-pro.png';
  const authorRole = post.authorRole  || 'Content Writer';
  const coverImg   = post.coverImage  || '';
  const dateStr    = post.publishedAt ? fmtDate(post.publishedAt) : '';

  // Check if any blocks are numberedSection type — group them into an <ol>
  // We'll render blocks normally; numbered sections will be wrapped inline

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">

        {/* Sidebar */}
        <aside className="blog-detail-sidebar">
          <BlogSidebar
            categories={sidebarCats}
            activeCategory={catName}
            setActiveCategory={(name) => {
              const found = categories.find(c => c.name === name);
              if (found) router.push('/blog');
            }}
          />

          <div className="comments-sidebar-card">
            <h2 className="sidebar-section-title">Comments ({comments.length})</h2>
            {comments.length > 0 ? (
              <div className="recent-comments-list">
                {comments.map(c => (
                  <div key={c._id} className="comment-item">
                    <span className="commenter-name">{c.name}</span>
                    <p className="comment-text">{c.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color:'#94a3b8', fontSize:14, marginBottom:10 }}>No comments yet.</p>
            )}
          </div>

          <div className="comments-sidebar-card">
            <h2 className="sidebar-section-title">
              {commentSuccess ? 'Comment Submitted!' : 'Write a Comment'}
            </h2>
            {commentSuccess ? (
              <div style={{ textAlign:'center', padding:'10px 0' }}>
                <p style={{ color:'#0d9488', fontSize:14, fontWeight:600, marginBottom:12 }}>
                  Thank you! Your comment has been submitted and is awaiting approval.
                </p>
                <button className="yellow-btn" onClick={() => setCommentSuccess(false)}>
                  Write Another
                </button>
              </div>
            ) : (
              <form className="comment-form" onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={commentForm.name}
                  onChange={handleCommentChange}
                  style={commentErrors.name ? { border:'1px solid #e53e3e' } : { border:'1px solid #e2e8f0' }}
                />
                {commentErrors.name && <span style={{ color:'#e53e3e', fontSize:12 }}>{commentErrors.name}</span>}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={commentForm.email}
                  onChange={handleCommentChange}
                  style={commentErrors.email ? { border:'1px solid #e53e3e' } : { border:'1px solid #e2e8f0' }}
                />
                {commentErrors.email && <span style={{ color:'#e53e3e', fontSize:12 }}>{commentErrors.email}</span>}
                <input
                  type="text"
                  name="website"
                  placeholder="Website (optional)"
                  value={commentForm.website}
                  onChange={handleCommentChange}
                  style={{ border:'1px solid #e2e8f0' }}
                />
                <textarea
                  name="content"
                  placeholder="Write your comment..."
                  value={commentForm.content}
                  onChange={handleCommentChange}
                  style={commentErrors.content ? { border:'1px solid #e53e3e' } : {}}
                />
                {commentErrors.content && <span style={{ color:'#e53e3e', fontSize:12 }}>{commentErrors.content}</span>}
                {commentErrors.submit && <p style={{ color:'#e53e3e', fontSize:13 }}>{commentErrors.submit}</p>}
                <button type="submit" className="yellow-btn" disabled={commentSubmitting}>
                  {commentSubmitting ? 'Submitting...' : 'Post Comment'}
                </button>
              </form>
            )}
          </div>

          <div className="form-box">
            <h2 className="sidebar-titlee">Request a Quote</h2>
            {quoteSuccess ? (
              <div style={{ textAlign:'center', padding:'10px 0' }}>
                <p style={{ color:'#0d9488', fontSize:14, fontWeight:600, marginBottom:12 }}>
                  Thank you! We'll get back to you soon.
                </p>
                <button className="yellow-btn" onClick={() => setQuoteSuccess(false)}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={quoteForm.fullName}
                  onChange={handleQuoteChange}
                  required
                  style={{ width:'100%', marginBottom:8, padding:'10px 12px', border:'1px solid #e2e8f0', borderRadius:4, fontSize:14, boxSizing:'border-box' }}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={quoteForm.companyName}
                  onChange={handleQuoteChange}
                  required
                  style={{ width:'100%', marginBottom:8, padding:'10px 12px', border:'1px solid #e2e8f0', borderRadius:4, fontSize:14, boxSizing:'border-box' }}
                />
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={quoteForm.mobileNumber}
                  onChange={handleQuoteChange}
                  required
                  style={{ width:'100%', marginBottom:8, padding:'10px 12px', border:'1px solid #e2e8f0', borderRadius:4, fontSize:14, boxSizing:'border-box' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={quoteForm.email}
                  onChange={handleQuoteChange}
                  required
                  style={{ width:'100%', marginBottom:8, padding:'10px 12px', border:'1px solid #e2e8f0', borderRadius:4, fontSize:14, boxSizing:'border-box' }}
                />
                <input
                  type="text"
                  name="additionalDetail"
                  placeholder="Additional Detail"
                  value={quoteForm.additionalDetail}
                  onChange={handleQuoteChange}
                  style={{ width:'100%', marginBottom:8, padding:'10px 12px', border:'1px solid #e2e8f0', borderRadius:4, fontSize:14, boxSizing:'border-box' }}
                />
                {quoteError && <p style={{ color:'#e53e3e', fontSize:13, marginBottom:8 }}>{quoteError}</p>}
                <button type="submit" className="yellow-btn" disabled={quoteSubmitting}>
                  {quoteSubmitting ? 'Sending...' : 'Send request'}
                </button>
              </form>
            )}
          </div>
        </aside>

        {/* Main content */}
        <main className="blog-detail-content">
          <header className="article-header">
            <h1 className="article-title">{post.title}</h1>
            {post.subtitle && <h2 className="article-subtitle">{post.subtitle}</h2>}
          </header>

          {coverImg && (
            <div className="article-banner">
              <img src={coverImg} alt={post.coverImageAlt || post.title} />
            </div>
          )}

          <div className="article-body">
            {/* Render all content blocks */}
            {blocks.map((block, i) => renderBlock(block, i))}

            {/* Author card */}
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

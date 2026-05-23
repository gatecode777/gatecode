// @ts-nocheck
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogSidebar from '@/components/frontend/Blog/BlogSidebar';

export default function BlogDetailSidebarClient({ categories, activeCategory, slug, initialComments }) {
  const router = useRouter();
  const [comments, setComments] = useState(initialComments || []);
  const [commentForm, setCommentForm] = useState({ name:'', email:'', website:'', content:'' });
  const [commentErrors, setCommentErrors] = useState({});
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ fullName:'', companyName:'', mobileNumber:'', email:'', additionalDetail:'' });
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteError, setQuoteError] = useState('');

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

  return (
    <aside className="blog-detail-sidebar">
      <BlogSidebar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={(name) => {
          const found = categories.find(c => c.name === name);
          router.push(found?.slug && found.slug !== 'all' ? `/blog?category=${found.slug}` : '/blog');
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
        <h2 className="sidebar-section-title">{commentSuccess ? 'Comment Submitted!' : 'Write a Comment'}</h2>
        {commentSuccess ? (
          <div style={{ textAlign:'center', padding:'10px 0' }}>
            <p style={{ color:'#0d9488', fontSize:14, fontWeight:600, marginBottom:12 }}>
              Thank you! Your comment has been submitted and is awaiting approval.
            </p>
            <button className="yellow-btn" onClick={() => setCommentSuccess(false)}>Write Another</button>
          </div>
        ) : (
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <input type="text" name="name" placeholder="Your Name *" value={commentForm.name} onChange={handleCommentChange} style={commentErrors.name ? { border:'1px solid #e53e3e' } : { border:'1px solid #e2e8f0' }} />
            {commentErrors.name && <span style={{ color:'#e53e3e', fontSize:12 }}>{commentErrors.name}</span>}
            <input type="email" name="email" placeholder="Your Email *" value={commentForm.email} onChange={handleCommentChange} style={commentErrors.email ? { border:'1px solid #e53e3e' } : { border:'1px solid #e2e8f0' }} />
            {commentErrors.email && <span style={{ color:'#e53e3e', fontSize:12 }}>{commentErrors.email}</span>}
            <input type="text" name="website" placeholder="Website (optional)" value={commentForm.website} onChange={handleCommentChange} style={{ border:'1px solid #e2e8f0' }} />
            <textarea name="content" placeholder="Write your comment..." value={commentForm.content} onChange={handleCommentChange} style={commentErrors.content ? { border:'1px solid #e53e3e' } : {}} />
            {commentErrors.content && <span style={{ color:'#e53e3e', fontSize:12 }}>{commentErrors.content}</span>}
            {commentErrors.submit && <p style={{ color:'#e53e3e', fontSize:13 }}>{commentErrors.submit}</p>}
            <button type="submit" className="yellow-btn" disabled={commentSubmitting}>{commentSubmitting ? 'Submitting...' : 'Post Comment'}</button>
          </form>
        )}
      </div>

      <div className="form-box">
        <h2 className="sidebar-titlee">Request a Quote</h2>
        {quoteSuccess ? (
          <div style={{ textAlign:'center', padding:'10px 0' }}>
            <p style={{ color:'#0d9488', fontSize:14, fontWeight:600, marginBottom:12 }}>Thank you! We'll get back to you soon.</p>
            <button className="yellow-btn" onClick={() => setQuoteSuccess(false)}>Submit Another</button>
          </div>
        ) : (
          <form onSubmit={handleQuoteSubmit}>
            {['fullName','companyName','mobileNumber','email','additionalDetail'].map((field) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={{ fullName:'Full Name', companyName:'Company Name', mobileNumber:'Mobile Number', email:'Email', additionalDetail:'Additional Detail' }[field]}
                value={quoteForm[field]}
                onChange={e => setQuoteForm(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                required={field !== 'additionalDetail'}
                style={{ width:'100%', marginBottom:8, padding:'10px 12px', border:'1px solid #e2e8f0', borderRadius:4, fontSize:14, boxSizing:'border-box' }}
              />
            ))}
            {quoteError && <p style={{ color:'#e53e3e', fontSize:13, marginBottom:8 }}>{quoteError}</p>}
            <button type="submit" className="yellow-btn" disabled={quoteSubmitting}>{quoteSubmitting ? 'Sending...' : 'Send request'}</button>
          </form>
        )}
      </div>
    </aside>
  );
}

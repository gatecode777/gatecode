// @ts-nocheck
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogSidebar from '@/components/frontend/Blog/BlogSidebar';

export default function BlogDetailSidebarClient({ categories, activeCategory, slug }) {
  const router = useRouter();
  const [quoteForm, setQuoteForm] = useState({ fullName: '', companyName: '', mobileNumber: '', email: '', additionalDetail: '' });
  const [errors, setErrors] = useState({});
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteError, setQuoteError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let val = value;
    if (name === 'mobileNumber') {
      val = value.replace(/[^\d\s\-()+]/g, '');
    }
    setQuoteForm(prev => ({ ...prev, [name]: val }));
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
    }
  };

  const handlePhoneBlur = () => {
    if (quoteForm.mobileNumber.trim()) {
      const cleanPhone = quoteForm.mobileNumber.replace(/[-\s()]+/g, '');
      if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
        setErrors(prev => ({ ...prev, mobileNumber: 'Invalid 10-digit phone number' }));
      }
    }
  };

  const validateQuote = () => {
    const e = {};
    if (!quoteForm.fullName.trim()) e.fullName = 'Full name is required';
    if (!quoteForm.companyName.trim()) e.companyName = 'Company name is required';

    if (!quoteForm.mobileNumber.trim()) {
      e.mobileNumber = 'Mobile number is required';
    } else {
      const cleanPhone = quoteForm.mobileNumber.replace(/[-\s()]+/g, '');
      if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
        e.mobileNumber = 'Invalid 10-digit phone number';
      }
    }

    if (!quoteForm.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(quoteForm.email)) {
      e.email = 'Invalid email address';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    if (!validateQuote()) return;
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
        setQuoteForm({ fullName: '', companyName: '', mobileNumber: '', email: '', additionalDetail: '' });
        setErrors({});
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

      <div className="form-box">
        <h2 className="sidebar-titlee">Request a Quote</h2>
        {quoteSuccess ? (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <p style={{ color: '#0d9488', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Thank you! We'll get back to you soon.</p>
            <button className="yellow-btn" onClick={() => setQuoteSuccess(false)}>Submit Another</button>
          </div>
        ) : (
          <form onSubmit={handleQuoteSubmit} noValidate>
            {['fullName', 'companyName', 'mobileNumber', 'email', 'additionalDetail'].map((field) => (
              <div key={field} style={{ marginBottom: 10 }}>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={{ fullName: 'Full Name *', companyName: 'Company Name *', mobileNumber: 'Mobile Number *', email: 'Email *', additionalDetail: 'Additional Detail (optional)' }[field]}
                  value={quoteForm[field]}
                  onChange={handleInputChange}
                  onBlur={field === 'mobileNumber' ? handlePhoneBlur : undefined}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: errors[field] ? '1px solid #e53e3e' : '1px solid #e2e8f0',
                    borderRadius: 4,
                    fontSize: 14,
                    boxSizing: 'border-box',
                    outline: 'none'
                  }}
                />
                {errors[field] && (
                  <span className="field-error-msg" style={{ display: 'block', color: '#e53e3e', fontSize: 12, marginTop: 4, marginLeft: 4, fontWeight: 500, textAlign: 'left' }}>
                    {errors[field]}
                  </span>
                )}
              </div>
            ))}
            {quoteError && <p style={{ color: '#e53e3e', fontSize: 13, marginBottom: 8 }}>{quoteError}</p>}
            <button type="submit" className="yellow-btn" disabled={quoteSubmitting}>{quoteSubmitting ? 'Sending...' : 'Send request'}</button>
          </form>
        )}
      </div>
    </aside>
  );
}

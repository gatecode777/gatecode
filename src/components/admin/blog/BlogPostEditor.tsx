'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import WordPressRichEditor from './WordPressRichEditor';
import styles from './styles/wordpress-editor.module.css';

interface BlogCategory {
  _id: string;
  name: string;
  slug: string;
}

interface BlogPostMeta {
  title: string;
  subtitle: string;
  slug: string;
  categoryId: string;
  coverImage: string;
  coverImageAlt: string;
  authorName: string;
  authorRole: string;
  publishDate: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  canonicalUrl: string;
  ogImage: string;
  isFeatured: boolean;
  status: 'draft' | 'published';
}

// Convert legacy blocks if any exist into continuous HTML
function convertBlocksToContinuousHtml(blocks: any[]): string {
  if (!blocks || !blocks.length) return '';
  return blocks
    .filter((b) => b.isVisible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((b) => {
      const d = b.data || {};
      switch (b.type) {
        case 'paragraph':
          return d.text ? (String(d.text).trim().startsWith('<') ? String(d.text) : `<p>${d.text}</p>`) : '';
        case 'heading': {
          const tag = (d.level as string) || 'h2';
          return `<${tag}>${d.text || ''}</${tag}>`;
        }
        case 'singleImage': {
          if (!d.url) return '';
          return `<figure class="wp-inline-image-wrapper wp-align-center"><img src="${d.url}" alt="${d.alt || ''}" />${d.caption ? `<figcaption class="wp-caption">${d.caption}</figcaption>` : ''}</figure>`;
        }
        case 'bulletList': {
          const items = Array.isArray(d.items) ? d.items : [];
          return `<ul>${items.map((it: any) => `<li>${it}</li>`).join('')}</ul>`;
        }
        case 'numberedList': {
          const items = Array.isArray(d.items) ? d.items : [];
          return `<ol>${items.map((it: any) => `<li>${it}</li>`).join('')}</ol>`;
        }
        case 'quote': {
          return `<blockquote><p>${d.text || ''}</p>${d.author ? `<cite>— ${d.author}</cite>` : ''}</blockquote>`;
        }
        default:
          return d.text ? `<p>${d.text}</p>` : '';
      }
    })
    .filter(Boolean)
    .join('\n\n');
}

export default function BlogPostEditor({ postId }: { postId?: string }) {
  const router = useRouter();
  const isEdit = Boolean(postId);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<BlogCategory[]>([]);

  // Main continuous article content
  const [contentHtml, setContentHtml] = useState<string>('');

  // Post Meta
  const [meta, setMeta] = useState<BlogPostMeta>({
    title: '',
    subtitle: '',
    slug: '',
    categoryId: '',
    coverImage: '',
    coverImageAlt: '',
    authorName: 'Gatecode Admin',
    authorRole: 'Editor',
    publishDate: new Date().toISOString().split('T')[0],
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
    canonicalUrl: '',
    ogImage: '',
    isFeatured: false,
    status: 'draft',
  });

  const [keywordInput, setKeywordInput] = useState('');
  const [slugCustomized, setSlugCustomized] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [showHtmlPreview, setShowHtmlPreview] = useState(false);

  // File input ref for dropzone
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load Categories & Post
  useEffect(() => {
    async function init() {
      setLoading(true);
      try {
        const catRes = await fetch('/api/admin/blog/categories');
        const catData = await catRes.json();
        if (catData.success) {
          setCategories(catData.data || []);
        }

        if (isEdit && postId) {
          const postRes = await fetch(`/api/admin/blog/posts/${postId}`);
          const postData = await postRes.json();
          if (postData.success) {
            const p = postData.data;
            const pubDate = p.publishedAt
              ? new Date(p.publishedAt).toISOString().split('T')[0]
              : p.createdAt
              ? new Date(p.createdAt).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0];

            setMeta({
              title: p.title || '',
              subtitle: p.subtitle || '',
              slug: p.slug || '',
              categoryId: p.categoryId?._id || p.categoryId || '',
              coverImage: p.coverImage || '',
              coverImageAlt: p.coverImageAlt || '',
              authorName: p.authorName || 'Gatecode Admin',
              authorRole: p.authorRole || 'Editor',
              publishDate: pubDate,
              metaTitle: p.metaTitle || '',
              metaDescription: p.metaDescription || '',
              metaKeywords: Array.isArray(p.metaKeywords) ? p.metaKeywords : [],
              canonicalUrl: p.canonicalUrl || '',
              ogImage: p.ogImage || '',
              isFeatured: Boolean(p.isFeatured),
              status: p.status || 'draft',
            });

            if (p.contentBlocks && p.contentBlocks.length > 0) {
              const html = convertBlocksToContinuousHtml(p.contentBlocks);
              setContentHtml(html);
            }
            setSlugCustomized(true);
          }
        }
      } catch (err) {
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [isEdit, postId]);

  // Handle Title input with auto slug generation
  const handleTitleChange = (val: string) => {
    setMeta((prev) => {
      const updated = { ...prev, title: val };
      if (!slugCustomized && !isEdit) {
        updated.slug = val
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
      }
      return updated;
    });
  };

  // Cover Image Upload Handler
  const handleCoverUpload = async (file: File) => {
    if (!file) return;
    setUploadingCover(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const d = await res.json();
      if (d.success) {
        setMeta((m) => ({ ...m, coverImage: d.data.url }));
      } else {
        alert(d.message || 'Cover upload failed');
      }
    } catch {
      alert('Upload error. Please check your network.');
    } finally {
      setUploadingCover(false);
    }
  };

  // Keyword tags handling
  const addKeyword = () => {
    const kw = keywordInput.trim();
    if (!kw) return;
    if (!meta.metaKeywords.includes(kw)) {
      setMeta((m) => ({ ...m, metaKeywords: [...m.metaKeywords, kw] }));
    }
    setKeywordInput('');
  };

  const removeKeyword = (kw: string) => {
    setMeta((m) => ({ ...m, metaKeywords: m.metaKeywords.filter((k) => k !== kw) }));
  };

  // Save handler
  const saveArticle = async (statusOverride?: 'draft' | 'published') => {
    if (!meta.title.trim()) {
      alert('Title is required');
      return;
    }
    if (!meta.slug.trim()) {
      alert('Slug is required');
      return;
    }

    setSaving(true);
    const finalStatus = statusOverride || meta.status;
    const catId = meta.categoryId && meta.categoryId !== '' ? meta.categoryId : null;

    const words = contentHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(words / 200));

    const payload = {
      ...meta,
      status: finalStatus,
      categoryId: catId,
      publishedAt: meta.publishDate ? new Date(meta.publishDate) : new Date(),
      readingTimeMinutes: readingTime,
      contentBlocks: [
        {
          type: 'paragraph',
          order: 0,
          isVisible: true,
          data: { text: contentHtml },
        },
      ],
    };

    const url = isEdit ? `/api/admin/blog/posts/${postId}` : '/api/admin/blog/posts';
    const method = isEdit ? 'PATCH' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setSaving(false);

      if (data.success) {
        if (!isEdit) {
          router.push(`/admin/blog/posts/${data.data._id}`);
        } else {
          setMeta((m) => ({ ...m, status: finalStatus }));
          alert(`Article successfully ${finalStatus === 'published' ? 'published' : 'saved as draft'}!`);
        }
      } else {
        alert(data.message || 'Save failed');
      }
    } catch (err) {
      setSaving(false);
      console.error(err);
      alert('Error while saving article.');
    }
  };

  if (loading) {
    return (
      <div className={styles.manageBlogsPage}>
        <Sidebar />
        <div style={{ marginLeft: 'var(--sidebar-width, 260px)', flex: 1, padding: 40, color: '#64748b' }}>
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.manageBlogsPage}>
      {/* AdminCore Left Sidebar */}
      <Sidebar />

      {/* Main Content Area matching the user's screenshot */}
      <div className={styles.mainContentArea}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            {isEdit ? 'Edit Article' : 'Write New Article'}
          </h1>
          <div className={styles.headerActions}>
            <button
              type="button"
              className={styles.btnBack}
              onClick={() => router.push('/admin/blog/posts')}
            >
              ← Back to Blogs
            </button>
            <button
              type="button"
              className={styles.btnDraft}
              onClick={() => setShowHtmlPreview(true)}
            >
              👁️ Preview
            </button>
            <button
              type="button"
              className={styles.btnDraft}
              disabled={saving}
              onClick={() => saveArticle('draft')}
            >
              Save as Draft
            </button>
            <button
              type="button"
              className={styles.btnPublish}
              disabled={saving}
              onClick={() => saveArticle('published')}
            >
              {saving ? 'Publishing...' : meta.status === 'published' ? 'Update Article' : 'Publish Article'}
            </button>
          </div>
        </div>

        {/* 2-Column Main Card Container */}
        <div className={styles.editorCard}>
          {/* ── Left Column (Title, Excerpt, Main Content) ── */}
          <div className={styles.leftColumn}>
            {/* Title */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Title</label>
              <input
                type="text"
                className={styles.textInput}
                placeholder="Enter article title..."
                value={meta.title}
                onChange={(e) => handleTitleChange(e.target.value)}
              />
              <div className={styles.slugRow}>
                <span className={styles.slugLabel}>Permalink:</span>
                <span>https://gatecode.com/blog/</span>
                <input
                  type="text"
                  className={styles.slugInput}
                  value={meta.slug}
                  onChange={(e) => {
                    setSlugCustomized(true);
                    setMeta((m) => ({
                      ...m,
                      slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''),
                    }));
                  }}
                  placeholder="article-slug"
                />
                <button
                  type="button"
                  className={styles.slugBtn}
                  title="Reset slug from title"
                  onClick={() => {
                    const gen = meta.title
                      .toLowerCase()
                      .replace(/[^a-z0-9\s-]/g, '')
                      .trim()
                      .replace(/\s+/g, '-');
                    setMeta((m) => ({ ...m, slug: gen }));
                    setSlugCustomized(false);
                  }}
                >
                  ↻ Reset
                </button>
              </div>
            </div>

            {/* Excerpt (Short summary) */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Excerpt (Short summary)</label>
              <textarea
                className={styles.textareaInput}
                placeholder="Brief summary displayed on archive cards..."
                value={meta.subtitle}
                onChange={(e) => setMeta((m) => ({ ...m, subtitle: e.target.value }))}
              />
            </div>

            {/* Main Content with Exact Toolbar from screenshot */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Main Content</label>
              <WordPressRichEditor
                value={contentHtml}
                onChange={(html) => setContentHtml(html)}
                placeholder="Start typing your article content here..."
                minHeight={480}
              />
            </div>
          </div>

          {/* ── Right Column (Cover Image, Category, Author, SEO) ── */}
          <div className={styles.rightColumn}>
            {/* Cover Image Dropzone */}
            <div className={styles.sidebarGroup}>
              <label className={styles.sidebarLabel}>Cover Image</label>
              {meta.coverImage ? (
                <div className={styles.coverPreviewContainer}>
                  <img src={meta.coverImage} alt="Cover preview" className={styles.coverPreviewImg} />
                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="button"
                      className={styles.coverRemoveBtn}
                      onClick={() => setMeta((m) => ({ ...m, coverImage: '' }))}
                    >
                      Remove Image
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className={styles.dropzoneBox}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files?.[0];
                    if (file) handleCoverUpload(file);
                  }}
                >
                  <div className={styles.dropzoneCloudIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 16 12 12 8 16" />
                      <line x1="12" y1="12" x2="12" y2="21" />
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                      <polyline points="16 16 12 12 8 16" />
                    </svg>
                  </div>
                  <div className={styles.dropzonePrimaryText}>
                    {uploadingCover ? 'Uploading...' : 'Drag & Drop or Click to Upload'}
                  </div>
                  <div className={styles.dropzoneSubText}>Max: 10.00 MB</div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleCoverUpload(file);
                    }}
                  />
                </div>
              )}
            </div>

            {/* Image Alt Text */}
            <div className={styles.sidebarGroup}>
              <label className={styles.sidebarLabel}>Image Alt Text</label>
              <input
                type="text"
                className={styles.textInput}
                placeholder="Description for accessibility"
                value={meta.coverImageAlt}
                onChange={(e) => setMeta((m) => ({ ...m, coverImageAlt: e.target.value }))}
              />
            </div>

            {/* Category */}
            <div className={styles.sidebarGroup}>
              <label className={styles.sidebarLabel}>Category</label>
              <select
                className={styles.sidebarSelect}
                value={meta.categoryId}
                onChange={(e) => setMeta((m) => ({ ...m, categoryId: e.target.value }))}
              >
                <option value="">— Select Category —</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Author & Date */}
            <div className={styles.sidebarGroup}>
              <label className={styles.sidebarLabel}>Author & Date</label>
              <div className={styles.authorDateInputs}>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="Author name"
                  value={meta.authorName}
                  onChange={(e) => setMeta((m) => ({ ...m, authorName: e.target.value }))}
                />
                <input
                  type="date"
                  className={styles.textInput}
                  value={meta.publishDate}
                  onChange={(e) => setMeta((m) => ({ ...m, publishDate: e.target.value }))}
                />
              </div>
            </div>

            {/* Set as Featured Post */}
            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                className={styles.checkboxInput}
                checked={meta.isFeatured}
                onChange={(e) => setMeta((m) => ({ ...m, isFeatured: e.target.checked }))}
              />
              <span>Set as Featured Post</span>
            </label>

            <div className={styles.sidebarDivider} />

            {/* SEO Settings */}
            <div className={styles.sidebarGroup}>
              <h3 className={styles.seoTitle}>SEO Settings</h3>

              <div className={styles.formGroup} style={{ marginTop: 6 }}>
                <label className={styles.sidebarLabel}>
                  <span>Meta Title</span>
                  <span className={styles.labelHint}>{meta.metaTitle.length}/70</span>
                </label>
                <input
                  type="text"
                  className={styles.textInput}
                  placeholder="SEO title for search engines"
                  value={meta.metaTitle}
                  onChange={(e) => setMeta((m) => ({ ...m, metaTitle: e.target.value }))}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.sidebarLabel}>
                  <span>Meta Description</span>
                  <span className={styles.labelHint}>{meta.metaDescription.length}/160</span>
                </label>
                <textarea
                  className={styles.textareaInput}
                  style={{ minHeight: 70 }}
                  placeholder="Search snippet summary..."
                  value={meta.metaDescription}
                  onChange={(e) => setMeta((m) => ({ ...m, metaDescription: e.target.value }))}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.sidebarLabel}>Focus Keywords</label>
                <div style={{ display: 'flex', gap: 6 }}>
                  <input
                    type="text"
                    className={styles.textInput}
                    placeholder="Add keyword..."
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addKeyword();
                      }
                    }}
                  />
                  <button
                    type="button"
                    className={styles.btnDraft}
                    style={{ padding: '0 12px' }}
                    onClick={addKeyword}
                  >
                    +
                  </button>
                </div>
                {meta.metaKeywords.length > 0 && (
                  <div className={styles.keywordTagsContainer}>
                    {meta.metaKeywords.map((kw, i) => (
                      <span key={i} className={styles.keywordTag}>
                        {kw}
                        <button
                          type="button"
                          className={styles.keywordRemoveBtn}
                          onClick={() => removeKeyword(kw)}
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.sidebarLabel}>Canonical URL</label>
                <input
                  type="url"
                  className={styles.textInput}
                  placeholder="https://gatecode.com/blog/preferred-url"
                  value={meta.canonicalUrl}
                  onChange={(e) => setMeta((m) => ({ ...m, canonicalUrl: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HTML / Article Preview Modal */}
      {showHtmlPreview && (
        <div className={styles.modalOverlay} onClick={() => setShowHtmlPreview(false)}>
          <div className={styles.previewModalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span>Article Preview</span>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setShowHtmlPreview(false)}
              >
                ✕
              </button>
            </div>
            <div className={styles.previewModalBody}>
              <h1 style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
                {meta.title || 'Untitled Article'}
              </h1>
              {meta.subtitle && (
                <p style={{ fontSize: 18, color: '#64748b', marginBottom: 20, fontStyle: 'italic' }}>
                  {meta.subtitle}
                </p>
              )}
              {meta.coverImage && (
                <div style={{ margin: '20px 0' }}>
                  <img
                    src={meta.coverImage}
                    alt={meta.coverImageAlt || meta.title}
                    style={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 8 }}
                  />
                </div>
              )}
              <div
                style={{ lineHeight: 1.85, fontSize: 16, color: '#334155' }}
                dangerouslySetInnerHTML={{ __html: contentHtml || '<p style="color:#94a3b8">No content written yet...</p>' }}
              />
            </div>
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.btnDraft}
                onClick={() => setShowHtmlPreview(false)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

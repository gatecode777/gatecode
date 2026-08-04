'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import s from '@/components/admin/portfolio/styles/shared.module.css';
import e from '@/components/admin/case-studies/styles/editor.module.css';

// ── Icons ──────────────────────────────────────────────────────────────────
const PlusIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const TrashIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const UpIcon     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>;
const DownIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;
const EyeIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const EyeOffIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;

type BlockType = 'paragraph'|'heading'|'bulletList'|'numberedList'|'numberedSection'|'imageGrid'|'singleImage'|'quote'|'divider'|'callout'|'table'|'faq';

interface Block { _id?: string; type: BlockType; order: number; isVisible: boolean; data: Record<string, unknown>; }

const BLOCK_LABELS: Record<BlockType, string> = {
  paragraph:'Paragraph', heading:'Heading', bulletList:'Bullet List',
  numberedList:'Numbered List', numberedSection:'Numbered Section (with sub-bullets)',
  imageGrid:'Image Grid', singleImage:'Single Image', quote:'Quote / Blockquote',
  divider:'Divider', callout:'Callout Box', table:'Table / Comparison Grid', faq:'FAQ Accordion'
};

function makeBlock(type: BlockType): Block {
  const defaults: Record<BlockType, Record<string,unknown>> = {
    paragraph:       { text: '' },
    heading:         { text: '', level: 'h3', style: 'yellow' },
    bulletList:      { title: '', items: [''] },
    numberedList:    { title: '', items: [''] },
    numberedSection: { number: '1', title: '', body: '', subItems: [] },
    imageGrid:       { images: [{ url:'', alt:'' }] },
    singleImage:     { url:'', alt:'', caption:'' },
    quote:           { text:'', author:'' },
    divider:         {},
    callout:         { text:'', style:'info' },
    table:           {
      headers: ['Feature', 'Web Design (UI/UX)', 'Web Development'],
      rows: [
        ['Primary Focus', 'Visual appearance, layout, typography, & user feel.', 'Code logic, databases, server setup, & interactive features.'],
        ['Core Tools', 'Figma, Adobe XD, Photoshop, Illustrator.', 'VS Code, Git, JavaScript, Node.js, React, databases.'],
        ['Objective', 'Create intuitive, aesthetically pleasing interface.', 'Turn visual designs into functional, secure, fast websites.']
      ]
    },
    faq:             {
      title: 'Frequently Asked Questions (FAQ)',
      items: [
        {
          question: 'What is digital marketing and how does it benefit my business?',
          answer: 'Digital marketing uses online channels like Google, social media, email, and websites to connect businesses with targeted customers. It increases online visibility, generates qualified sales leads, and delivers measurable ROI.'
        },
        {
          question: 'What are the primary types of digital marketing?',
          answer: 'The primary types include Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Content Marketing, Social Media Marketing, Email Marketing, and Affiliate Marketing.'
        }
      ]
    }
  };
  return { type, order: 0, isVisible: true, data: defaults[type] };
}

// ── Image upload helper ────────────────────────────────────────────────────
async function uploadImage(file: File): Promise<string> {
  try {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    const d = await res.json();
    if (d.success) return d.data.url;
    alert(d.message || 'Image upload failed');
    return '';
  } catch (err) {
    console.error('Upload error:', err);
    alert('Upload failed. Please check internet connection or file size.');
    return '';
  }
}

function ImageUploadInline({ value, onChange, label = 'Upload Image' }: { value: string; onChange: (url: string) => void; label?: string }) {
  const [uploading, setUploading] = useState(false);
  const handle = async (file: File) => {
    setUploading(true);
    const url = await uploadImage(file);
    setUploading(false);
    if (url) onChange(url);
  };
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
      {value && (
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <img
            key={value}
            src={value}
            alt="preview"
            style={{ maxHeight: 120, maxWidth: '100%', objectFit: 'cover', borderRadius: 6, marginBottom: 4, display: 'block' }}
          />
          <button
            type="button"
            onClick={() => onChange('')}
            title="Remove Image"
            style={{
              position: 'absolute',
              top: 4,
              right: 4,
              background: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: 22,
              height: 22,
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            }}
          >
            ✕
          </button>
        </div>
      )}
      <div style={{ display:'flex', gap:8, alignItems:'center' }}>
        <input
          type="text"
          className={s.formInput}
          style={{ flex:1, fontSize:12 }}
          value={value}
          onChange={ev => onChange(ev.target.value)}
          placeholder="Image URL or upload ↓"
        />
        <label style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'6px 12px', background:'var(--color-surface)', border:'1.5px solid var(--color-border)', borderRadius:'var(--radius-md)', cursor:'pointer', fontSize:12, fontWeight:600, color:'var(--color-text-secondary)', whiteSpace:'nowrap' }}>
          <UploadIcon /> {uploading ? 'Uploading…' : label}
          <input
            type="file"
            accept="image/*"
            disabled={uploading}
            style={{ display:'none' }}
            onChange={ev => {
              const f = ev.target.files?.[0];
              if (f) handle(f);
              ev.target.value = '';
            }}
          />
        </label>
      </div>
    </div>
  );
}

// Helper to extract links from text (both HTML <a> tags and Markdown [text](url))
function extractLinks(text: string) {
  const links: { full: string; text: string; url: string; type: 'html' | 'markdown' }[] = [];
  if (!text) return links;

  // 1. Match HTML <a> tags: <a ...href="URL"...>Text</a>
  const htmlRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi;
  let match: RegExpExecArray | null;
  while ((match = htmlRegex.exec(text)) !== null) {
    links.push({ full: match[0], url: match[1], text: match[2].replace(/<[^>]+>/g, ''), type: 'html' });
  }

  // 2. Match Markdown links: [Text](URL)
  const mdRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  while ((match = mdRegex.exec(text)) !== null) {
    links.push({ full: match[0], text: match[1], url: match[2], type: 'markdown' });
  }

  return links;
}

// ── Rich Textarea with Clean Link Insertion & One-Click Delete ───────────────
function RichTextarea({
  label,
  value,
  onChange,
  rows = 4,
  placeholder,
}: {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [selRange, setSelRange] = useState({ start: 0, end: 0 });

  const activeLinks = extractLinks(value);

  const openLinkModal = () => {
    const el = ref.current;
    if (el) {
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const selected = value.substring(start, end);
      setSelRange({ start, end });
      setLinkText(selected);
      setLinkUrl('');
    } else {
      setSelRange({ start: value.length, end: value.length });
      setLinkText('');
      setLinkUrl('');
    }
    setShowLinkModal(true);
  };

  const applyLink = () => {
    let rawUrl = linkUrl.trim();
    if (!rawUrl) return;

    // Ensure URL has protocol if missing (e.g. gatecode.in -> https://gatecode.in)
    if (!/^https?:\/\//i.test(rawUrl) && !rawUrl.startsWith('/') && !rawUrl.startsWith('#')) {
      rawUrl = 'https://' + rawUrl;
    }

    const textToUse = linkText.trim() || 'Link';
    // Clean markdown link syntax instead of verbose raw HTML inside textarea
    const formattedLink = `[${textToUse}](${rawUrl})`;

    const start = selRange.start;
    const end = selRange.end;
    const before = value.substring(0, start);
    const after = value.substring(end);
    const newValue = before + formattedLink + after;

    onChange(newValue);
    setShowLinkModal(false);
    setLinkUrl('');
    setLinkText('');
  };

  const handleDeleteLink = (fullMatch: string, innerText: string) => {
    // Replaces full link markup (whether <a href="...">...</a> or [text](url)) with plain text
    const newValue = value.replace(fullMatch, innerText);
    onChange(newValue);
  };

  const makeBold = () => {
    const el = ref.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.substring(start, end);
    if (!selected) return;
    const wrapped = `**${selected}**`;
    onChange(value.substring(0, start) + wrapped + value.substring(end));
  };

  const getPreviewHtml = (val: string) => {
    if (!val) return '';
    let html = val.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#0fb9b1;text-decoration:underline;">$1</a>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return html;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {label && <label className={e.fLabel} style={{ margin: 0 }}>{label}</label>}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <button
            type="button"
            onClick={makeBold}
            title="Bold selected text"
            style={{
              padding: '2px 8px',
              fontSize: 12,
              fontWeight: 'bold',
              borderRadius: 4,
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
            }}
          >
            B
          </button>
          <button
            type="button"
            onClick={openLinkModal}
            title="Select text and click to attach hyperlink"
            style={{
              padding: '3px 10px',
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 4,
              border: 'none',
              background: '#0fb9b1',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            🔗 Add Link to Word
          </button>
        </div>
      </div>

      <textarea
        ref={ref}
        className={e.fTextarea}
        rows={rows}
        value={value}
        onChange={ev => onChange(ev.target.value)}
        placeholder={placeholder}
      />

      {/* Active Links Bar - One-click Delete Option */}
      {activeLinks.length > 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          padding: '8px 12px',
          background: 'rgba(239, 68, 68, 0.06)',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          borderRadius: 6,
          marginTop: 2
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🔗 Active Links in this Block (Click ✕ to remove link):
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {activeLinks.map((lnk, i) => (
              <div key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 10px',
                background: 'var(--color-surface, #0f172a)',
                border: '1px solid var(--color-border, #334155)',
                borderRadius: 20,
                fontSize: 12
              }}>
                <span style={{ fontWeight: 600, color: '#38bdf8' }}>&ldquo;{lnk.text}&rdquo;</span>
                <span style={{ color: '#64748b', fontSize: 11 }}>➔ {lnk.url}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteLink(lnk.full, lnk.text)}
                  style={{
                    background: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 18,
                    height: 18,
                    fontSize: 10,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 2
                  }}
                  title="Remove link & keep plain text"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showLinkModal && (
        <div style={{
          padding: 12,
          background: 'var(--color-surface-2, #1e293b)',
          border: '1px solid #0fb9b1',
          borderRadius: 8,
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0fb9b1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>🔗 Add Hyperlink on Word</span>
            <span style={{ fontSize: 11, color: '#94a3b8' }}>Highlight word or type below</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div>
              <label style={{ fontSize: 11, color: '#94a3b8', display: 'block', marginBottom: 2 }}>Word / Text to Link:</label>
              <input
                type="text"
                className={e.fInput}
                style={{ fontSize: 12, width: '100%' }}
                placeholder="e.g. gatecode"
                value={linkText}
                onChange={ev => setLinkText(ev.target.value)}
              />
            </div>
            <div>
              <label style={{ fontSize: 11, color: '#94a3b8', display: 'block', marginBottom: 2 }}>Target Link URL:</label>
              <input
                type="text"
                className={e.fInput}
                style={{ fontSize: 12, width: '100%' }}
                placeholder="e.g. https://gatecode.in/services/web-development"
                value={linkUrl}
                onChange={ev => setLinkUrl(ev.target.value)}
                autoFocus
                onKeyDown={ev => { if (ev.key === 'Enter') { ev.preventDefault(); applyLink(); } }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 4 }}>
            <button
              type="button"
              className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
              onClick={() => setShowLinkModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`}
              style={{ background: '#0fb9b1', borderColor: '#0fb9b1', color: '#fff' }}
              onClick={applyLink}
            >
              Insert Link
            </button>
          </div>
        </div>
      )}

      {value && (value.includes('[') || value.includes('<a') || value.includes('**')) && (
        <div style={{ fontSize: 12, color: 'var(--color-text-muted)', background: 'rgba(15, 185, 177, 0.08)', border: '1px dashed #0fb9b1', padding: '8px 12px', borderRadius: 6, marginTop: 2 }}>
          <span style={{ fontWeight: 600, color: '#0fb9b1', display: 'block', marginBottom: 2 }}>👁 Live Formatted Preview:</span>
          <div style={{ color: 'var(--color-text-primary)' }} dangerouslySetInnerHTML={{ __html: getPreviewHtml(value) }} />
        </div>
      )}
    </div>
  );
}

// ── Rich Input with Link Insertion & Bold ───────────────────────────────
function RichInput({
  label,
  value,
  onChange,
  placeholder,
  style,
}: {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [selRange, setSelRange] = useState({ start: 0, end: 0 });

  const activeLinks = extractLinks(value);

  const openLinkModal = () => {
    const el = ref.current;
    if (el) {
      const start = el.selectionStart || 0;
      const end = el.selectionEnd || 0;
      const selected = value.substring(start, end);
      setSelRange({ start, end });
      setLinkText(selected);
      setLinkUrl('');
    } else {
      setSelRange({ start: value.length, end: value.length });
      setLinkText('');
      setLinkUrl('');
    }
    setShowLinkModal(true);
  };

  const applyLink = () => {
    let rawUrl = linkUrl.trim();
    if (!rawUrl) return;

    if (!/^https?:\/\//i.test(rawUrl) && !rawUrl.startsWith('/') && !rawUrl.startsWith('#')) {
      rawUrl = 'https://' + rawUrl;
    }

    const textToUse = linkText.trim() || 'Link';
    const formattedLink = `[${textToUse}](${rawUrl})`;

    const start = selRange.start;
    const end = selRange.end;
    const before = value.substring(0, start);
    const after = value.substring(end);
    const newValue = before + formattedLink + after;

    onChange(newValue);
    setShowLinkModal(false);
    setLinkUrl('');
    setLinkText('');
  };

  const handleDeleteLink = (fullMatch: string, innerText: string) => {
    const newValue = value.replace(fullMatch, innerText);
    onChange(newValue);
  };

  const makeBold = () => {
    const el = ref.current;
    if (!el) return;
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const selected = value.substring(start, end);
    if (!selected) return;
    const wrapped = `**${selected}**`;
    onChange(value.substring(0, start) + wrapped + value.substring(end));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label className={e.fLabel} style={{ margin: 0 }}>{label}</label>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <button
              type="button"
              onClick={makeBold}
              title="Bold selected text"
              style={{
                padding: '1px 6px',
                fontSize: 11,
                fontWeight: 'bold',
                borderRadius: 3,
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
              }}
            >
              B
            </button>
            <button
              type="button"
              onClick={openLinkModal}
              title="Select word and click to add link"
              style={{
                padding: '2px 8px',
                fontSize: 11,
                fontWeight: 600,
                borderRadius: 3,
                border: 'none',
                background: '#0fb9b1',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              🔗 Add Link
            </button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <input
          ref={ref}
          className={e.fInput}
          style={{ flex: 1, ...style }}
          value={value}
          onChange={ev => onChange(ev.target.value)}
          placeholder={placeholder}
        />
        {!label && (
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <button
              type="button"
              onClick={makeBold}
              title="Bold selected text"
              style={{
                padding: '4px 8px',
                fontSize: 11,
                fontWeight: 'bold',
                borderRadius: 4,
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
              }}
            >
              B
            </button>
            <button
              type="button"
              onClick={openLinkModal}
              title="Select word and click to add link"
              style={{
                padding: '4px 8px',
                fontSize: 11,
                fontWeight: 600,
                borderRadius: 4,
                border: 'none',
                background: '#0fb9b1',
                color: '#ffffff',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              🔗 Link
            </button>
          </div>
        )}
      </div>

      {activeLinks.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 2 }}>
          {activeLinks.map((lnk, i) => (
            <span key={i} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '2px 8px',
              background: 'var(--color-surface-2, #1e293b)',
              border: '1px solid var(--color-border, #334155)',
              borderRadius: 12,
              fontSize: 11,
              color: '#38bdf8'
            }}>
              &ldquo;{lnk.text}&rdquo; ➔ {lnk.url}
              <button
                type="button"
                onClick={() => handleDeleteLink(lnk.full, lnk.text)}
                style={{
                  background: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 14,
                  height: 14,
                  fontSize: 9,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Remove link"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      )}

      {showLinkModal && (
        <div style={{
          padding: 10,
          background: 'var(--color-surface-2, #1e293b)',
          border: '1px solid #0fb9b1',
          borderRadius: 6,
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#0fb9b1' }}>🔗 Add Hyperlink on Word</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <input
              type="text"
              className={e.fInput}
              style={{ fontSize: 12, flex: 1 }}
              placeholder="Word to link"
              value={linkText}
              onChange={ev => setLinkText(ev.target.value)}
            />
            <input
              type="text"
              className={e.fInput}
              style={{ fontSize: 12, flex: 1.5 }}
              placeholder="Target URL (e.g. https://gatecode.in)"
              value={linkUrl}
              onChange={ev => setLinkUrl(ev.target.value)}
              autoFocus
              onKeyDown={ev => { if (ev.key === 'Enter') { ev.preventDefault(); applyLink(); } }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
            <button
              type="button"
              className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
              style={{ padding: '2px 8px', fontSize: 11 }}
              onClick={() => setShowLinkModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`}
              style={{ background: '#0fb9b1', borderColor: '#0fb9b1', color: '#fff', padding: '2px 10px', fontSize: 11 }}
              onClick={applyLink}
            >
              Insert Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function BlockEditor({ block, onChange }: { block: Block; onChange: (data: Record<string,unknown>) => void }) {
  const d = block.data;

  switch (block.type) {
    case 'paragraph':
      return (
        <div className={e.fGroup}>
          <RichTextarea
            label="Paragraph Text"
            rows={5}
            value={String(d.text||'')}
            onChange={text => onChange({...d, text})}
            placeholder="Write paragraph content here. Select any word and click 'Add Link to Selected Word'..."
          />
        </div>
      );

    case 'heading':
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div className={e.fGroup}>
            <RichInput
              label="Heading Text"
              value={String(d.text||'')}
              onChange={text => onChange({...d, text})}
              placeholder="Heading content…"
            />
          </div>
          <div style={{ display:'flex', gap:8 }}>
            <div className={e.fGroup} style={{ flex:1 }}>
              <label className={e.fLabel}>Level</label>
              <select className={e.fSelect} value={String(d.level||'h3')} onChange={ev => onChange({...d, level:ev.target.value})}>
                <option value="h2">H2 — Section</option>
                <option value="h3">H3 — Subsection</option>
                <option value="h4">H4 — Minor</option>
              </select>
            </div>
            <div className={e.fGroup} style={{ flex:1 }}>
              <label className={e.fLabel}>Style</label>
              <select className={e.fSelect} value={String(d.style||'yellow')} onChange={ev => onChange({...d, style:ev.target.value})}>
                <option value="yellow">Yellow (highlighted)</option>
                <option value="normal">Normal (white/dark)</option>
              </select>
            </div>
          </div>
        </div>
      );

    case 'bulletList':
    case 'numberedList': {
      const items = (d.items as string[]) || [''];
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div className={e.fGroup}>
            <RichInput
              label="Section Title (optional)"
              value={String(d.title||'')}
              onChange={title => onChange({...d, title})}
              placeholder="Optional heading above the list…"
            />
          </div>
          <label className={e.fLabel}>Items</label>
          {items.map((item, i) => (
            <div key={i} style={{ display:'flex', gap:6, alignItems:'center' }}>
              <span style={{ minWidth:20, color:'var(--color-text-muted)', fontSize:12 }}>{block.type === 'numberedList' ? `${i+1}.` : '•'}</span>
              <RichInput
                value={item}
                onChange={val => { const n=[...items]; n[i]=val; onChange({...d, items:n}); }}
                placeholder={`Item ${i+1}`}
              />
              <button onClick={() => { const n=items.filter((_,j) => j!==i); onChange({...d, items:n.length?n:['']}) }} style={{ color:'var(--color-danger)', background:'none', border:'none', cursor:'pointer', padding:'0 4px' }}><TrashIcon /></button>
            </div>
          ))}
          <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={() => onChange({...d, items:[...items,'']})} style={{ alignSelf:'flex-start' }}><PlusIcon /> Add Item</button>
        </div>
      );
    }

    case 'numberedSection': {
      const subItems = (d.subItems as string[]) || [];
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div style={{ display:'flex', gap:8 }}>
            <div className={e.fGroup} style={{ width:80 }}>
              <label className={e.fLabel}>No.</label>
              <input className={e.fInput} value={String(d.number||'')} onChange={ev => onChange({...d, number:ev.target.value})} placeholder="1" />
            </div>
            <div className={e.fGroup} style={{ flex:1 }}>
              <RichInput
                label="Section Title"
                value={String(d.title||'')}
                onChange={title => onChange({...d, title})}
                placeholder="e.g. Business Automation"
              />
            </div>
          </div>
          <div className={e.fGroup}>
            <RichTextarea
              label="Body Text"
              rows={3}
              value={String(d.body||'')}
              onChange={body => onChange({...d, body})}
              placeholder="Description for this numbered section…"
            />
          </div>
          <label className={e.fLabel}>Sub-bullet Items (optional)</label>
          {subItems.map((item, i) => (
            <div key={i} style={{ display:'flex', gap:6, alignItems:'center' }}>
              <span style={{ minWidth:16, color:'var(--color-text-muted)', fontSize:12 }}>•</span>
              <RichInput
                value={item}
                onChange={val => { const n=[...subItems]; n[i]=val; onChange({...d, subItems:n}); }}
                placeholder={`Sub item ${i+1}`}
              />
              <button onClick={() => onChange({...d, subItems:subItems.filter((_,j)=>j!==i)})} style={{ color:'var(--color-danger)', background:'none', border:'none', cursor:'pointer', padding:'0 4px' }}><TrashIcon /></button>
            </div>
          ))}
          <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={() => onChange({...d, subItems:[...subItems,'']})} style={{ alignSelf:'flex-start' }}><PlusIcon /> Add Sub-item</button>
        </div>
      );
    }

    case 'imageGrid': {
      const images = (d.images as {url:string;alt:string}[]) || [{url:'',alt:''}];
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <label className={e.fLabel}>Images (add as many as needed — shown as a grid)</label>
          {images.map((img, i) => (
            <div key={i} style={{ padding:12, background:'var(--color-surface-2)', borderRadius:'var(--radius-md)', border:'1px solid var(--color-border)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                <span style={{ fontSize:12, fontWeight:600, color:'var(--color-text-secondary)' }}>Image {i+1}</span>
                <button onClick={() => onChange({...d, images:images.filter((_,j)=>j!==i)})} style={{ color:'var(--color-danger)', background:'none', border:'none', cursor:'pointer', fontSize:11 }}>Remove</button>
              </div>
              <ImageUploadInline value={img.url} onChange={url => { const n=[...images]; n[i]={...n[i],url}; onChange({...d,images:n}); }} />
              <input className={e.fInput} style={{ marginTop:6 }} value={img.alt} onChange={ev => { const n=[...images]; n[i]={...n[i],alt:ev.target.value}; onChange({...d,images:n}); }} placeholder="Alt text (for SEO & accessibility)" />
            </div>
          ))}
          <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={() => onChange({...d, images:[...images,{url:'',alt:''}]})} style={{ alignSelf:'flex-start' }}><PlusIcon /> Add Image</button>
        </div>
      );
    }

    case 'singleImage':
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div className={e.fGroup}>
            <label className={e.fLabel}>Image</label>
            <ImageUploadInline value={String(d.url||'')} onChange={url => onChange({...d, url})} />
          </div>
          <div className={e.fGroup}>
            <label className={e.fLabel}>Alt Text (SEO)</label>
            <input className={e.fInput} value={String(d.alt||'')} onChange={ev => onChange({...d, alt:ev.target.value})} placeholder="Describe the image for screen readers & Google…" />
          </div>
          <div className={e.fGroup}>
            <label className={e.fLabel}>Caption (optional)</label>
            <input className={e.fInput} value={String(d.caption||'')} onChange={ev => onChange({...d, caption:ev.target.value})} placeholder="Optional caption shown below the image" />
          </div>
        </div>
      );

    case 'quote':
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div className={e.fGroup}>
            <RichTextarea
              label="Quote Text"
              rows={3}
              value={String(d.text||'')}
              onChange={text => onChange({...d, text})}
              placeholder="The quote content…"
            />
          </div>
          <div className={e.fGroup}>
            <RichInput
              label="Attribution (optional)"
              value={String(d.author||'')}
              onChange={author => onChange({...d, author})}
              placeholder="e.g. Geeta Bisht, Content Writer"
            />
          </div>
        </div>
      );

    case 'callout':
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div className={e.fGroup}>
            <label className={e.fLabel}>Style</label>
            <select className={e.fSelect} value={String(d.style||'info')} onChange={ev => onChange({...d, style:ev.target.value})}>
              <option value="info">ℹ Info</option>
              <option value="tip">💡 Tip</option>
              <option value="warning">⚠ Warning</option>
            </select>
          </div>
          <div className={e.fGroup}>
            <RichTextarea
              label="Text"
              rows={2}
              value={String(d.text||'')}
              onChange={text => onChange({...d, text})}
              placeholder="Callout message…"
            />
          </div>
        </div>
      );

    case 'table': {
      const headers = (d.headers as string[]) || ['Feature', 'Web Design (UI/UX)', 'Web Development'];
      const rows = (d.rows as string[][]) || [
        ['Primary Focus', 'Visual appearance, layout, typography, & user feel.', 'Code logic, databases, server setup, & interactive features.'],
        ['Core Tools', 'Figma, Adobe XD, Photoshop, Illustrator.', 'VS Code, Git, JavaScript, Node.js, React, databases.'],
        ['Objective', 'Create intuitive, aesthetically pleasing interface.', 'Turn visual designs into functional, secure, fast websites.']
      ];

      const addColumn = () => {
        const newHeaders = [...headers, `Column ${headers.length + 1}`];
        const newRows = rows.map(r => [...r, '']);
        onChange({ ...d, headers: newHeaders, rows: newRows });
      };

      const removeColumn = (colIndex: number) => {
        if (headers.length <= 1) return;
        const newHeaders = headers.filter((_, idx) => idx !== colIndex);
        const newRows = rows.map(r => r.filter((_, idx) => idx !== colIndex));
        onChange({ ...d, headers: newHeaders, rows: newRows });
      };

      const addRow = () => {
        const emptyRow = new Array(headers.length).fill('');
        onChange({ ...d, rows: [...rows, emptyRow] });
      };

      const removeRow = (rowIndex: number) => {
        if (rows.length <= 1) return;
        onChange({ ...d, rows: rows.filter((_, idx) => idx !== rowIndex) });
      };

      const updateCell = (rowIndex: number, colIndex: number, val: string) => {
        const newRows = rows.map((r, rIdx) =>
          rIdx === rowIndex ? r.map((c, cIdx) => (cIdx === colIndex ? val : c)) : r
        );
        onChange({ ...d, rows: newRows });
      };

      const updateHeaderCell = (colIndex: number, val: string) => {
        const newHeaders = headers.map((h, cIdx) => (cIdx === colIndex ? val : h));
        onChange({ ...d, headers: newHeaders });
      };

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className={e.fLabel} style={{ margin: 0, color: '#0fb9b1', fontWeight: 600, fontSize: 13 }}>
              📊 Table / Comparison Grid Editor
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
                style={{ fontSize: 12 }}
                onClick={addColumn}
              >
                <PlusIcon /> Add Column
              </button>
              <button
                type="button"
                className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
                style={{ fontSize: 12 }}
                onClick={addRow}
              >
                <PlusIcon /> Add Row
              </button>
            </div>
          </div>

          {/* Unified Outer Scrollbar Wrapper for Headers + Rows */}
          <div style={{ overflowX: 'auto', width: '100%', paddingBottom: 12 }}>
            <div style={{ minWidth: Math.max(650, headers.length * 300), display: 'flex', flexDirection: 'column', gap: 14 }}>
              
              {/* Table Headers Section */}
              <div style={{ background: 'var(--color-surface-2, #1e293b)', padding: 12, borderRadius: 8, border: '1px solid var(--color-border)', width: '100%' }}>
                <label className={e.fLabel} style={{ fontSize: 12, marginBottom: 8, display: 'block', color: '#38bdf8' }}>
                  Column Headers ({headers.length} Columns)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${headers.length}, 1fr)`, gap: 12 }}>
                  {headers.map((h, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>Header {i + 1}</span>
                        {headers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeColumn(i)}
                            style={{ color: 'var(--color-danger)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 10 }}
                            title="Delete Column"
                          >
                            ✕ Col
                          </button>
                        )}
                      </div>
                      <RichInput
                        value={h}
                        onChange={val => updateHeaderCell(i, val)}
                        placeholder={`Header ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Table Rows Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <label className={e.fLabel} style={{ fontSize: 12, margin: 0 }}>
                  Table Rows ({rows.length} Rows)
                </label>
                {rows.map((row, rIdx) => (
                  <div key={rIdx} style={{ background: 'var(--color-surface-2, #1e293b)', padding: 12, borderRadius: 8, border: '1px solid var(--color-border)', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: '#0fb9b1' }}>Row {rIdx + 1}</span>
                      {rows.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRow(rIdx)}
                          style={{ color: 'var(--color-danger)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                        >
                          <TrashIcon /> Delete Row
                        </button>
                      )}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${headers.length}, 1fr)`, gap: 12 }}>
                      {headers.map((_, cIdx) => (
                        <div key={cIdx} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <span style={{ fontSize: 11, color: '#64748b' }}>{headers[cIdx] || `Col ${cIdx + 1}`}:</span>
                          <RichInput
                            value={row[cIdx] || ''}
                            onChange={val => updateCell(rIdx, cIdx, val)}
                            placeholder={`Cell (${rIdx + 1}, ${cIdx + 1})`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      );
    }

    case 'faq': {
      const items = (d.items as { question: string; answer: string }[]) || [
        { question: 'What is digital marketing and how does it benefit my business?', answer: 'Digital marketing uses online channels...' }
      ];
      const title = String(d.title || 'Frequently Asked Questions (FAQ)');

      const addItem = () => {
        onChange({ ...d, items: [...items, { question: '', answer: '' }] });
      };

      const removeItem = (idx: number) => {
        if (items.length <= 1) return;
        onChange({ ...d, items: items.filter((_, i) => i !== idx) });
      };

      const updateItem = (idx: number, field: 'question' | 'answer', val: string) => {
        const next = items.map((it, i) => (i === idx ? { ...it, [field]: val } : it));
        onChange({ ...d, items: next });
      };

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className={e.fGroup}>
            <RichInput
              label="FAQ Section Header Title"
              value={title}
              onChange={tVal => onChange({ ...d, title: tVal })}
              placeholder="e.g. Frequently Asked Questions (FAQ)"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className={e.fLabel} style={{ margin: 0, color: '#0fb9b1', fontWeight: 600, fontSize: 13 }}>
              ❓ FAQ Accordion Questions ({items.length} Items)
            </label>
            <button
              type="button"
              className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
              style={{ fontSize: 12 }}
              onClick={addItem}
            >
              <PlusIcon /> Add Question
            </button>
          </div>

          {items.map((item, idx) => (
            <div key={idx} style={{ background: 'var(--color-surface-2, #1e293b)', padding: 14, borderRadius: 8, border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#38bdf8' }}>Question {idx + 1}</span>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(idx)}
                    style={{ color: 'var(--color-danger)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                  >
                    <TrashIcon /> Remove Question
                  </button>
                )}
              </div>
              <RichInput
                label="Question"
                value={item.question}
                onChange={val => updateItem(idx, 'question', val)}
                placeholder={`e.g. What is digital marketing?`}
              />
              <RichTextarea
                label="Answer"
                rows={3}
                value={item.answer}
                onChange={val => updateItem(idx, 'answer', val)}
                placeholder={`Type detailed answer here. You can select words and add links or bolding...`}
              />
            </div>
          ))}
        </div>
      );
    }

    case 'divider':
      return <div style={{ padding:'8px 0', color:'var(--color-text-muted)', fontSize:13, textAlign:'center' }}>— Horizontal divider —</div>;

    default:
      return null;
  }
}

// ── Main BlogPostEditor ────────────────────────────────────────────────────
interface Props { postId?: string; }

export default function BlogPostEditor({ postId }: Props) {
  const router = useRouter();
  const isEdit = Boolean(postId);

  const [categories, setCategories] = useState<{_id:string;name:string}[]>([]);
  const [blocks, setBlocks]         = useState<Block[]>([]);
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [saving, setSaving]         = useState(false);
  const [loading, setLoading]       = useState(isEdit);
  const [activeTab, setActiveTab]   = useState<'content'|'seo'|'meta'>('content');

  const [meta, setMeta] = useState({
    title:'', subtitle:'', slug:'', categoryId:'',
    coverImage:'', coverImageAlt:'',
    authorName:'', authorImage:'', authorRole:'',
    status:'draft' as 'draft'|'published', isFeatured:false,
    metaTitle:'', metaDescription:'', metaKeywords:[] as string[],
    canonicalUrl:'', ogImage:'',
  });

  const toSlug = (t: string) => t.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const slugEdited = { current: false };

  // Load categories
  useEffect(() => {
    fetch('/api/admin/blog/categories').then(r => r.json()).then(d => { if (d.success) setCategories(d.data); });
  }, []);

  // Load post if editing
  useEffect(() => {
    if (!postId) return;
    fetch(`/api/admin/blog/posts/${postId}`).then(r => r.json()).then(d => {
      if (d.success) {
        const p = d.data;
        setMeta({ title:p.title||'', subtitle:p.subtitle||'', slug:p.slug||'', categoryId:String(p.categoryId?._id||p.categoryId||''), coverImage:p.coverImage||'', coverImageAlt:p.coverImageAlt||'', authorName:p.authorName||'', authorImage:p.authorImage||'', authorRole:p.authorRole||'', status:p.status||'draft', isFeatured:p.isFeatured||false, metaTitle:p.metaTitle||'', metaDescription:p.metaDescription||'', metaKeywords:p.metaKeywords||[], canonicalUrl:p.canonicalUrl||'', ogImage:p.ogImage||'' });
        setBlocks((p.contentBlocks||[]).sort((a:{order:number},b:{order:number}) => a.order - b.order));
        slugEdited.current = true;
      }
      setLoading(false);
    });
  }, [postId]); // eslint-disable-line

  const handleTitleChange = (val: string) => {
    setMeta(m => ({ ...m, title:val, ...(!slugEdited.current && !isEdit ? { slug:toSlug(val) } : {}) }));
  };

  const addBlock = useCallback((type: BlockType) => {
    const nb = makeBlock(type);
    nb.order = blocks.length;
    setBlocks(prev => [...prev, nb]);
    setAddMenuOpen(false);
  }, [blocks.length]);

  const updateBlock = (idx: number, data: Record<string,unknown>) => {
    setBlocks(prev => prev.map((b,i) => i===idx ? {...b, data} : b));
  };

  const toggleBlockVisible = (idx: number) => {
    setBlocks(prev => prev.map((b,i) => i===idx ? {...b, isVisible:!b.isVisible} : b));
  };

  const removeBlock = (idx: number) => {
    setBlocks(prev => prev.filter((_,i) => i!==idx).map((b,i) => ({...b, order:i})));
  };

  const moveBlock = (idx: number, dir: -1|1) => {
    const nIdx = idx + dir;
    if (nIdx < 0 || nIdx >= blocks.length) return;
    const nb = [...blocks];
    [nb[idx], nb[nIdx]] = [nb[nIdx], nb[idx]];
    setBlocks(nb.map((b,i) => ({...b, order:i})));
  };

  const save = async (status?: 'draft'|'published') => {
    if (!meta.title.trim()) { alert('Title is required'); return; }
    if (!meta.slug.trim())  { alert('Slug is required'); return; }
    setSaving(true);
    const catId = meta.categoryId && meta.categoryId !== '' && meta.categoryId !== 'null' ? meta.categoryId : null;
    const body = { ...meta, categoryId: catId, ...(status ? { status } : {}), contentBlocks: blocks.map((b,i) => ({...b, order:i})) };
    const url    = isEdit ? `/api/admin/blog/posts/${postId}` : '/api/admin/blog/posts';
    const method = isEdit ? 'PATCH' : 'POST';
    const res    = await fetch(url, { method, headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
    const d      = await res.json(); setSaving(false);
    if (d.success) {
      if (!isEdit) router.push(`/admin/blog/posts/${d.data._id}`);
      else { setMeta(m => ({...m, status: d.data.status})); alert('Saved!'); }
    } else { alert(d.message || 'Save failed'); }
  };

  if (loading) return (
    <div className={e.editorLayout}>
      <Sidebar />
      <div className={e.editorMain}>
        <div className={e.editorSkeletonBody}>
          <div className={e.editorSkeletonLeft}>
            <div className={e.editorSkeletonCard}>
              <div className={`${e.editorSkeletonLine} ${e.editorSkeletonTitle}`} />
              <div className={`${e.editorSkeletonLine} ${e.editorSkeletonInput}`} />
              <div className={`${e.editorSkeletonLine} ${e.editorSkeletonInput}`} />
              <div className={`${e.editorSkeletonLine} ${e.editorSkeletonTextarea}`} />
            </div>
            {Array.from({ length: 4 }).map((_, i) => <div key={i} className={`${e.editorSkeletonLine} ${e.editorSkeletonBlock}`} />)}
          </div>
          <div className={e.editorSkeletonRight}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={e.editorSkeletonCard}>
                <div className={`${e.editorSkeletonLine} ${e.editorSkeletonTitle}`} />
                <div className={`${e.editorSkeletonLine} ${e.editorSkeletonInput}`} />
                <div className={`${e.editorSkeletonLine} ${e.editorSkeletonInput} ${e.editorSkeletonSmall}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const kwStr = meta.metaKeywords.join(', ');

  return (
    <div className={e.editorLayout}>
      <Sidebar />
      <div className={e.editorMain}>
      {/* Top bar */}
      <div style={{ padding:'14px 24px', background:'var(--color-surface)', borderBottom:'1px solid var(--color-border)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, position:'sticky', top:0, zIndex:10 }}>
        <div>
          <div style={{ fontSize:16, fontWeight:700, color:'var(--color-text-primary)' }}>{isEdit ? 'Edit Post' : 'New Blog Post'}</div>
          <div style={{ fontSize:12, color:'var(--color-text-muted)' }}>{blocks.length} content block{blocks.length!==1?'s':''} · Status: <b>{meta.status}</b></div>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <button className={`${s.btn} ${s.btnSecondary}`} onClick={() => save('draft')} disabled={saving}>Save Draft</button>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={() => save('published')} disabled={saving}>{saving ? 'Saving…' : 'Publish'}</button>
          <button className={`${s.btn} ${s.btnGhost}`} onClick={() => router.push('/admin/blog/posts')}>← Back</button>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:0, flex:1, minHeight:0 }}>
        {/* Main editor */}
        <div style={{ padding:'24px 28px', borderRight:'1px solid var(--color-border)', overflowY:'auto' }}>
          {/* Post title & subtitle */}
          <div className={s.formGroup} style={{ marginBottom:12 }}>
            <label className={s.formLabel}>Post Title <span className={s.formRequired}>*</span></label>
            <input className={s.formInput} value={meta.title} onChange={e => handleTitleChange(e.target.value)} placeholder="The Future of IT & Technology:" style={{ fontSize:18, fontWeight:600 }} />
          </div>
          <div className={s.formGroup} style={{ marginBottom:12 }}>
            <label className={s.formLabel}>Subtitle / Sub-headline</label>
            <input className={s.formInput} value={meta.subtitle} onChange={e => setMeta(m=>({...m,subtitle:e.target.value}))} placeholder="How Digital Innovation is Transforming Businesses" />
          </div>
          <div className={s.formGroup} style={{ marginBottom:24 }}>
            <label className={s.formLabel}>Slug <span className={s.formRequired}>*</span></label>
            <input className={s.formInput} value={meta.slug} onChange={e => { slugEdited.current=true; setMeta(m=>({...m,slug:toSlug(e.target.value)})); }} placeholder="the-future-of-it-technology" style={{ fontFamily:'monospace', fontSize:13 }} />
            <span style={{ fontSize:11, color:'var(--color-text-muted)', marginTop:2, display:'block' }}>URL: /blog/{meta.slug||'your-slug-here'}</span>
          </div>

          {/* Cover image */}
          <div className={s.formGroup} style={{ marginBottom:24, padding:16, background:'var(--color-surface-2)', borderRadius:'var(--radius-lg)', border:'1px solid var(--color-border)' }}>
            <label className={s.formLabel} style={{ marginBottom:8, display:'block' }}>Cover / Banner Image</label>
            <ImageUploadInline value={meta.coverImage} onChange={url => setMeta(m=>({...m,coverImage:url}))} />
            <input className={s.formInput} style={{ marginTop:8 }} value={meta.coverImageAlt} onChange={e => setMeta(m=>({...m,coverImageAlt:e.target.value}))} placeholder="Alt text for cover image (important for SEO)" />
          </div>

          {/* ── Content Blocks ── */}
          <div style={{ marginBottom:12, fontWeight:700, fontSize:14, color:'var(--color-text-primary)', paddingBottom:8, borderBottom:'1px solid var(--color-border)', display:'flex', alignItems:'center', gap:8 }}>Content Blocks <span style={{ fontSize:11, fontWeight:500, color:'var(--color-text-muted)', background:'var(--color-surface-2)', padding:'2px 8px', borderRadius:'var(--radius-full)' }}>{blocks.length} block{blocks.length!==1?'s':''}</span></div>

          {blocks.length === 0 && (
            <div style={{ padding:40, textAlign:'center', color:'var(--color-text-muted)', border:'2px dashed var(--color-border)', borderRadius:'var(--radius-lg)', marginBottom:16, background:'var(--color-surface)' }}>
              <div style={{ fontSize:28, marginBottom:8 }}>✍️</div>
              <div style={{ fontSize:14, fontWeight:600, color:'var(--color-text-secondary)', marginBottom:4 }}>No content blocks yet</div>
              <div style={{ fontSize:12 }}>Click &ldquo;Add Content Block&rdquo; below to start writing</div>
            </div>
          )}

          {blocks.map((block, idx) => (
            <div key={idx} className={`${e.blockCard} ${block.isVisible ? '' : e.blockCardHidden}`}>
              {/* Block header */}
              <div className={e.blockCardHeader}>
                <span className={`${e.blockTypeBadge} ${e.typeText}`}>{BLOCK_LABELS[block.type]}</span>
                <div className={e.blockHeaderControls}>
                  <button className={e.blockHeaderBtn} onClick={() => toggleBlockVisible(idx)} title={block.isVisible ? 'Hide block' : 'Show block'}>
                    {block.isVisible ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                  <button className={e.blockHeaderBtn} onClick={() => moveBlock(idx, -1)} disabled={idx===0}><UpIcon /></button>
                  <button className={e.blockHeaderBtn} onClick={() => moveBlock(idx, 1)} disabled={idx===blocks.length-1}><DownIcon /></button>
                  <button className={`${e.blockHeaderBtn} danger`} onClick={() => removeBlock(idx)} style={{ color:'var(--color-danger)' }}><TrashIcon /></button>
                </div>
              </div>
              <div className={e.blockCardBody}>
                <BlockEditor block={block} onChange={data => updateBlock(idx, data)} />
              </div>
            </div>
          ))}

          {/* Add block button */}
          <div style={{ position:'relative' }}>
            <button className={`${s.btn} ${s.btnSecondary}`} onClick={() => setAddMenuOpen(p=>!p)} style={{ width:'100%', justifyContent:'center' }}>
              <PlusIcon /> Add Content Block
            </button>
            {addMenuOpen && (
              <div style={{ position:'absolute', top:'calc(100% + 4px)', left:0, right:0, background:'var(--color-surface)', border:'1.5px solid var(--color-border)', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-lg)', zIndex:20, padding:8, display:'grid', gridTemplateColumns:'1fr 1fr', gap:4 }}>
                <div style={{ gridColumn:'1/-1', fontSize:11, fontWeight:700, color:'var(--color-text-muted)', textTransform:'uppercase', letterSpacing:'0.05em', padding:'4px 4px 8px', borderBottom:'1px solid var(--color-border)', marginBottom:4 }}>
                  Choose block type
                </div>
                {(Object.entries(BLOCK_LABELS) as [BlockType, string][]).map(([type, label]) => (
                  <button key={type} onClick={() => addBlock(type)}
                    style={{ padding:'9px 10px', textAlign:'left', background:'none', border:'1px solid var(--color-border)', cursor:'pointer', fontSize:12, color:'var(--color-text-primary)', borderRadius:'var(--radius-md)', transition:'all 0.1s', lineHeight:1.3 }}
                    onMouseEnter={ev => { ev.currentTarget.style.background='var(--color-primary-pale)'; ev.currentTarget.style.borderColor='var(--color-primary)'; ev.currentTarget.style.color='var(--color-primary)'; }}
                    onMouseLeave={ev => { ev.currentTarget.style.background='none'; ev.currentTarget.style.borderColor='var(--color-border)'; ev.currentTarget.style.color='var(--color-text-primary)'; }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar — Meta / SEO / Author */}
        <div style={{ padding:20, overflowY:'auto', display:'flex', flexDirection:'column', gap:16 }}>
          {/* Tabs */}
          <div style={{ display:'flex', border:'1px solid var(--color-border)', borderRadius:'var(--radius-md)', overflow:'hidden' }}>
            {(['content','seo','meta'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ flex:1, padding:'7px 4px', fontSize:11, fontWeight:700, border:'none', cursor:'pointer', textTransform:'uppercase', letterSpacing:'0.04em', background: activeTab===tab ? 'var(--color-primary)' : 'transparent', color: activeTab===tab ? '#fff' : 'var(--color-text-muted)', transition:'all 0.15s' }}>
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'content' && (
            <>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Category</label>
                <select className={s.filterSelect} style={{ width:'100%' }} value={meta.categoryId} onChange={e => setMeta(m=>({...m,categoryId:e.target.value}))}>
                  <option value="">— Uncategorized —</option>
                  {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </select>
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Status</label>
                <select className={s.filterSelect} style={{ width:'100%' }} value={meta.status} onChange={e => setMeta(m=>({...m,status:e.target.value as 'draft'|'published'}))}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <label className={s.toggleWrapper}>
                <span className={s.toggle}><input type="checkbox" checked={meta.isFeatured} onChange={e => setMeta(m=>({...m,isFeatured:e.target.checked}))}/><span className={s.toggleSlider}/></span>
                <span className={s.toggleLabel}>Featured post</span>
              </label>
              {/* Author */}
              <div style={{ paddingTop:8, borderTop:'1px solid var(--color-border)' }}>
                <div style={{ fontSize:12, fontWeight:700, marginBottom:10, color:'var(--color-text-secondary)' }}>AUTHOR</div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Name</label>
                  <input className={s.formInput} value={meta.authorName} onChange={e => setMeta(m=>({...m,authorName:e.target.value}))} placeholder="Geeta Bisht" />
                </div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Role / Title</label>
                  <input className={s.formInput} value={meta.authorRole} onChange={e => setMeta(m=>({...m,authorRole:e.target.value}))} placeholder="Content Writer" />
                </div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Author Photo</label>
                  <ImageUploadInline value={meta.authorImage} onChange={url => setMeta(m=>({...m,authorImage:url}))} label="Upload Photo" />
                </div>
              </div>
            </>
          )}

          {activeTab === 'seo' && (
            <>
              <div style={{ fontSize:11, color:'var(--color-text-muted)', background:'var(--color-surface-2)', padding:'8px 10px', borderRadius:'var(--radius-md)', lineHeight:1.6 }}>
                Fill these for Google ranking. Leave blank to auto-generate from title & content.
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Meta Title <span style={{ fontSize:10, color: meta.metaTitle.length > 70 ? 'var(--color-danger)' : 'var(--color-text-muted)' }}>({meta.metaTitle.length}/70)</span></label>
                <input className={s.formInput} value={meta.metaTitle} onChange={e => setMeta(m=>({...m,metaTitle:e.target.value}))} placeholder="Leave blank to use post title" maxLength={70} />
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Meta Description <span style={{ fontSize:10, color: meta.metaDescription.length > 160 ? 'var(--color-danger)' : 'var(--color-text-muted)' }}>({meta.metaDescription.length}/160)</span></label>
                <textarea className={s.formTextarea} rows={3} value={meta.metaDescription} onChange={e => setMeta(m=>({...m,metaDescription:e.target.value}))} placeholder="Brief summary for Google search results (max 160 chars)" maxLength={160} />
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Keywords <span style={{ fontSize:10, color:'var(--color-text-muted)' }}>(comma separated)</span></label>
                <input className={s.formInput} value={kwStr} onChange={e => setMeta(m=>({...m,metaKeywords:e.target.value.split(',').map(k=>k.trim()).filter(Boolean)}))} placeholder="it technology, digital innovation, business growth" />
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Canonical URL</label>
                <input className={s.formInput} value={meta.canonicalUrl} onChange={e => setMeta(m=>({...m,canonicalUrl:e.target.value}))} placeholder="https://gatecode.in/blog/your-slug" />
              </div>
            </>
          )}

          {activeTab === 'meta' && (
            <>
              <div style={{ fontSize:11, color:'var(--color-text-muted)', background:'var(--color-surface-2)', padding:'8px 10px', borderRadius:'var(--radius-md)', lineHeight:1.6 }}>
                Open Graph — shown when shared on WhatsApp, LinkedIn, Twitter, Facebook.
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>OG / Share Image</label>
                <ImageUploadInline value={meta.ogImage} onChange={url => setMeta(m=>({...m,ogImage:url}))} label="Upload OG Image" />
                <span style={{ fontSize:11, color:'var(--color-text-muted)', marginTop:2, display:'block' }}>Recommended: 1200×630px. Defaults to cover image if empty.</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

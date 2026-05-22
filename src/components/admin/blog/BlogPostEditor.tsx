'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import s from '@/components/admin/portfolio/styles/shared.module.css';
import e from '@/components/admin/services/styles/editor.module.css';

// ── Icons ──────────────────────────────────────────────────────────────────
const PlusIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const TrashIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const UpIcon     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>;
const DownIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;
const EyeIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const EyeOffIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;

type BlockType = 'paragraph'|'heading'|'bulletList'|'numberedList'|'numberedSection'|'imageGrid'|'singleImage'|'quote'|'divider'|'callout';

interface Block { _id?: string; type: BlockType; order: number; isVisible: boolean; data: Record<string, unknown>; }

const BLOCK_LABELS: Record<BlockType, string> = {
  paragraph:'Paragraph', heading:'Heading', bulletList:'Bullet List',
  numberedList:'Numbered List', numberedSection:'Numbered Section (with sub-bullets)',
  imageGrid:'Image Grid', singleImage:'Single Image', quote:'Quote / Blockquote',
  divider:'Divider', callout:'Callout Box',
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
  };
  return { type, order: 0, isVisible: true, data: defaults[type] };
}

// ── Image upload helper ────────────────────────────────────────────────────
async function uploadImage(file: File): Promise<string> {
  const fd = new FormData(); fd.append('file', file);
  const res = await fetch('/api/admin/upload', { method:'POST', body:fd });
  const d = await res.json();
  return d.success ? d.data.url : '';
}

function ImageUploadInline({ value, onChange, label = 'Upload Image' }: { value: string; onChange: (url: string) => void; label?: string }) {
  const [uploading, setUploading] = useState(false);
  const handle = async (file: File) => {
    setUploading(true); const url = await uploadImage(file); setUploading(false);
    if (url) onChange(url);
  };
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
      {value && <img src={value} alt="preview" style={{ maxHeight:120, objectFit:'cover', borderRadius:6, marginBottom:4 }} />}
      <div style={{ display:'flex', gap:8, alignItems:'center' }}>
        <input type="text" className={s.formInput} style={{ flex:1, fontSize:12 }} value={value} onChange={ev => onChange(ev.target.value)} placeholder="Image URL or upload ↓" />
        <label style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'6px 12px', background:'var(--color-surface)', border:'1.5px solid var(--color-border)', borderRadius:'var(--radius-md)', cursor:'pointer', fontSize:12, fontWeight:600, color:'var(--color-text-secondary)', whiteSpace:'nowrap' }}>
          <UploadIcon /> {uploading ? 'Uploading…' : label}
          <input type="file" accept="image/*" disabled={uploading} style={{ display:'none' }} onChange={ev => { const f = ev.target.files?.[0]; if (f) handle(f); ev.target.value=''; }} />
        </label>
      </div>
    </div>
  );
}
function BlockEditor({ block, onChange }: { block: Block; onChange: (data: Record<string,unknown>) => void }) {
  const d = block.data;

  switch (block.type) {
    case 'paragraph':
      return (
        <div className={e.fGroup}>
          <label className={e.fLabel}>Paragraph Text</label>
          <textarea className={e.fTextarea} rows={4} value={String(d.text||'')} onChange={ev => onChange({...d, text:ev.target.value})} placeholder="Write paragraph content here…" />
        </div>
      );

    case 'heading':
      return (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          <div className={e.fGroup}>
            <label className={e.fLabel}>Heading Text</label>
            <input className={e.fInput} value={String(d.text||'')} onChange={ev => onChange({...d, text:ev.target.value})} placeholder="Heading content…" />
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
            <label className={e.fLabel}>Section Title (optional)</label>
            <input className={e.fInput} value={String(d.title||'')} onChange={ev => onChange({...d, title:ev.target.value})} placeholder="Optional heading above the list…" />
          </div>
          <label className={e.fLabel}>Items</label>
          {items.map((item, i) => (
            <div key={i} style={{ display:'flex', gap:6 }}>
              <span style={{ minWidth:20, color:'var(--color-text-muted)', fontSize:12, paddingTop:9 }}>{block.type === 'numberedList' ? `${i+1}.` : '•'}</span>
              <input className={e.fInput} style={{ flex:1 }} value={item} onChange={ev => { const n=[...items]; n[i]=ev.target.value; onChange({...d, items:n}); }} placeholder={`Item ${i+1}`} />
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
              <label className={e.fLabel}>Section Title</label>
              <input className={e.fInput} value={String(d.title||'')} onChange={ev => onChange({...d, title:ev.target.value})} placeholder="e.g. Business Automation" />
            </div>
          </div>
          <div className={e.fGroup}>
            <label className={e.fLabel}>Body Text</label>
            <textarea className={e.fTextarea} rows={3} value={String(d.body||'')} onChange={ev => onChange({...d, body:ev.target.value})} placeholder="Description for this numbered section…" />
          </div>
          <label className={e.fLabel}>Sub-bullet Items (optional)</label>
          {subItems.map((item, i) => (
            <div key={i} style={{ display:'flex', gap:6 }}>
              <span style={{ minWidth:16, color:'var(--color-text-muted)', fontSize:12, paddingTop:9 }}>•</span>
              <input className={e.fInput} style={{ flex:1 }} value={item} onChange={ev => { const n=[...subItems]; n[i]=ev.target.value; onChange({...d, subItems:n}); }} placeholder={`Sub item ${i+1}`} />
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
            <label className={e.fLabel}>Quote Text</label>
            <textarea className={e.fTextarea} rows={3} value={String(d.text||'')} onChange={ev => onChange({...d, text:ev.target.value})} placeholder="The quote content…" />
          </div>
          <div className={e.fGroup}>
            <label className={e.fLabel}>Attribution (optional)</label>
            <input className={e.fInput} value={String(d.author||'')} onChange={ev => onChange({...d, author:ev.target.value})} placeholder="e.g. Geeta Bisht, Content Writer" />
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
            <label className={e.fLabel}>Text</label>
            <textarea className={e.fTextarea} rows={2} value={String(d.text||'')} onChange={ev => onChange({...d, text:ev.target.value})} placeholder="Callout message…" />
          </div>
        </div>
      );

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
    const body = { ...meta, ...(status ? { status } : {}), contentBlocks: blocks.map((b,i) => ({...b, order:i})) };
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
      <div className={e.editorMain} style={{ display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, color:'var(--color-text-muted)' }}>Loading…</div>
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

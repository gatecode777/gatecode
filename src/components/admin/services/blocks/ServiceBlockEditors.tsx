'use client';

/**
 * Service page block editor components.
 * Matches reference UI exactly:
 *   - Hero (banner + title + CTA)
 *   - Intro (rich text)
 *   - Cards (service cards grid)
 *   - TextWithImage (heading + bullets + side image)
 *   - Process (step cards)
 *   - Industries (bullets + image grid)
 *   - Text (generic rich text)
 *   - Bullets (plain list)
 *   - ImageGrid (photo grid)
 *   - CTA (banner)
 *   - TwoColumn
 *   - Divider
 *   - Buttons
 */

import { useState } from 'react';
import e from '../styles/editor.module.css';

// ── Shared icons ───────────────────────────────────────────────────────────
export const XIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
export const PlusIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
export const GripIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;

function uid() { return Math.random().toString(36).slice(2, 10); }

async function uploadImg(file: File): Promise<string | null> {
  const fd = new FormData(); fd.append('file', file);
  const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
  const d = await res.json(); return d.success ? d.data.url : null;
}

// ── Shared image picker ────────────────────────────────────────────────────
export function ImgPicker({ label, value, onChange, height = 160 }: { label?: string; value: string; onChange: (url: string) => void; height?: number }) {
  const [uploading, setUploading] = useState(false);
  const handle = async (file: File) => { setUploading(true); const url = await uploadImg(file); setUploading(false); if (url) onChange(url); };
  return (
    <div className={e.fGroup}>
      {label && <span className={e.fLabel}>{label}</span>}
      {value ? (
        <div className={e.uploadPreview}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="preview" className={e.uploadPreviewImg} style={{ maxHeight: height }} />
          <div className={e.uploadPreviewOverlay}>
            <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={() => onChange('')}>Remove</button>
          </div>
        </div>
      ) : (
        <div className={e.uploadArea}>
          <span className={e.uploadIcon}><UploadIcon /></span>
          <span className={e.uploadText}>{uploading ? 'Uploading…' : 'Click or drag image'}</span>
          <span className={e.uploadHint}>JPEG · PNG · WebP · Max 5 MB</span>
          <input className={e.uploadInput} type="file" accept="image/*" disabled={uploading}
            onChange={ev => { const f = ev.target.files?.[0]; if (f) handle(f); ev.target.value = ''; }} />
        </div>
      )}
    </div>
  );
}

// ── Shared rich editor ─────────────────────────────────────────────────────
export function RichEditor({ value, onChange, placeholder = 'Write here…', minHeight = 90 }: { value: string; onChange: (html: string) => void; placeholder?: string; minHeight?: number }) {
  const exec = (cmd: string, val?: string) => { document.execCommand(cmd, false, val); };
  return (
    <div className={e.richEditor}>
      <div className={e.richToolbar}>
        {[['B','bold'],['I','italic'],['U','underline']].map(([l,c]) => <button key={c} type="button" className={e.rtBtn} onMouseDown={ev=>{ev.preventDefault();exec(c);}}>{l}</button>)}
        <span className={e.rtSep}/>
        {[['H2','formatBlock','h2'],['H3','formatBlock','h3']].map(([l,c,v]) => <button key={l} type="button" className={e.rtBtn} onMouseDown={ev=>{ev.preventDefault();exec(c,v);}}>{l}</button>)}
        <span className={e.rtSep}/>
        {[['UL','insertUnorderedList'],['OL','insertOrderedList']].map(([l,c]) => <button key={l} type="button" className={e.rtBtn} onMouseDown={ev=>{ev.preventDefault();exec(c);}}>{l}</button>)}
        <span className={e.rtSep}/>
        <button type="button" className={e.rtBtn} onMouseDown={ev=>{ev.preventDefault();exec('formatBlock','p');}}>¶</button>
      </div>
      <div className={e.richContent} contentEditable suppressContentEditableWarning style={{ minHeight }}
        data-placeholder={placeholder}
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={ev => onChange(ev.currentTarget.innerHTML)} />
    </div>
  );
}

// ── Shared bullet list ─────────────────────────────────────────────────────
interface Bullet { id: string; text: string; }
export function BulletEditor({ items, onChange, placeholder = 'Add a point…' }: { items: Bullet[]; onChange: (v: Bullet[]) => void; placeholder?: string }) {
  const add = () => onChange([...items, { id: uid(), text: '' }]);
  const rm  = (id: string) => onChange(items.filter(b => b.id !== id));
  const upd = (id: string, text: string) => onChange(items.map(b => b.id === id ? { ...b, text } : b));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div className={e.bulletList}>
        {items.map(b => (
          <div key={b.id} className={e.bulletItem}>
            <span className={e.bulletDrag}><GripIcon /></span>
            <textarea className={e.bulletTA} value={b.text} rows={1} onChange={ev => upd(b.id, ev.target.value)} placeholder={placeholder}
              onInput={ev => { const t = ev.currentTarget; t.style.height = 'auto'; t.style.height = t.scrollHeight + 'px'; }} />
            <button className={e.bulletRemove} type="button" onClick={() => rm(b.id)}><XIcon /></button>
          </div>
        ))}
      </div>
      <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={add} style={{ alignSelf: 'flex-start' }}>
        <PlusIcon /> Add item
      </button>
    </div>
  );
}

// ── Shared card list (cards & process steps) ────────────────────────────────
interface CardItem { id: string; title: string; description: string; }
export function CardListEditor({ items, onChange, titlePlaceholder = 'Card title', descPlaceholder = 'Card description' }: { items: CardItem[]; onChange: (v: CardItem[]) => void; titlePlaceholder?: string; descPlaceholder?: string }) {
  const add = () => onChange([...items, { id: uid(), title: '', description: '' }]);
  const rm  = (id: string) => onChange(items.filter(c => c.id !== id));
  const upd = (id: string, field: 'title' | 'description', val: string) => onChange(items.map(c => c.id === id ? { ...c, [field]: val } : c));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((c, idx) => (
        <div key={c.id} style={{ padding: '12px', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', flex: 1 }}>Card #{idx + 1}</span>
            <button className={`${e.btn} ${e.btnGhost} ${e.btnIcon}`} type="button" style={{ color: 'var(--color-danger)' }} onClick={() => rm(c.id)}><XIcon /></button>
          </div>
          <input className={e.fInput} value={c.title} onChange={ev => upd(c.id, 'title', ev.target.value)} placeholder={titlePlaceholder} />
          <textarea className={e.fTextarea} value={c.description} rows={3} onChange={ev => upd(c.id, 'description', ev.target.value)} placeholder={descPlaceholder} style={{ minHeight: 60 }} />
        </div>
      ))}
      <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={add} style={{ alignSelf: 'flex-start' }}>
        <PlusIcon /> Add Card
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  BLOCK EDITOR COMPONENTS
// ════════════════════════════════════════════════════════════

type D = Record<string, unknown>;

// ── Hero ────────────────────────────────────────────────────
export function HeroBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Title <span className={e.fRequired}>*</span></label>
          <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. WEB DEVELOPMENT SERVICES" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Subtitle / Short Description</label>
          <textarea className={e.fTextarea} value={String(data.subtitle ?? '')} rows={2} onChange={ev => onChange({ ...data, subtitle: ev.target.value })} placeholder="We build modern, scalable websites…" />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>CTA Button Label</label>
          <input className={e.fInput} value={String(data.ctaLabel ?? '')} onChange={ev => onChange({ ...data, ctaLabel: ev.target.value })} placeholder="Get Free Consultation" />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>CTA Button URL</label>
          <input className={e.fInput} value={String(data.ctaUrl ?? '')} onChange={ev => onChange({ ...data, ctaUrl: ev.target.value })} placeholder="https://…" />
        </div>
      </div>
      <ImgPicker label="Banner Image *" value={String(data.bannerImage ?? '')} onChange={url => onChange({ ...data, bannerImage: url })} height={180} />
    </div>
  );
}

// ── Intro ────────────────────────────────────────────────────
export function IntroBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Introduction Paragraph</label>
        <RichEditor value={String(data.body ?? '')} onChange={html => onChange({ ...data, body: html })} placeholder="At Gatecode Technologies…" minHeight={120} />
      </div>
    </div>
  );
}

// ── Cards ────────────────────────────────────────────────────
export function CardsBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const cards = (data.cards as CardItem[]) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. Our Web Development Services" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Cards</label>
        <CardListEditor items={cards} onChange={v => onChange({ ...data, cards: v })} titlePlaceholder="Card title (e.g. Custom Website Development)" descPlaceholder="Card description…" />
      </div>
    </div>
  );
}

// ── TextWithImage ─────────────────────────────────────────────
export function TextWithImageBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const bullets = (data.bullets as Bullet[]) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Section Heading</label>
          <input className={e.fInput} value={String(data.heading ?? '')} onChange={ev => onChange({ ...data, heading: ev.target.value })} placeholder="e.g. Why Choose Our Web Development Services" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Paragraph Text</label>
          <RichEditor value={String(data.body ?? '')} onChange={html => onChange({ ...data, body: html })} placeholder="We combine innovative design…" minHeight={100} />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Sub-heading (optional, e.g. &quot;Key Benefits&quot;)</label>
          <input className={e.fInput} value={String(data.bulletsHeading ?? '')} onChange={ev => onChange({ ...data, bulletsHeading: ev.target.value })} placeholder="Key Benefits" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Bullet Points</label>
          <BulletEditor items={bullets} onChange={v => onChange({ ...data, bullets: v })} placeholder="Responsive and mobile-friendly designs" />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Image Position</label>
          <select className={e.fSelect} value={String(data.imagePosition ?? 'right')} onChange={ev => onChange({ ...data, imagePosition: ev.target.value })}>
            <option value="right">Image on Right</option>
            <option value="left">Image on Left</option>
            <option value="none">No Image</option>
          </select>
        </div>
      </div>
      {(data.imagePosition ?? 'right') !== 'none' && (
        <ImgPicker label="Side Image" value={String(data.image ?? '')} onChange={url => onChange({ ...data, image: url })} />
      )}
    </div>
  );
}

// ── Process ─────────────────────────────────────────────────
export function ProcessBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const steps = (data.steps as CardItem[]) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. Our Development Process" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Process Steps</label>
        <CardListEditor items={steps} onChange={v => onChange({ ...data, steps: v })} titlePlaceholder="Step title (e.g. Requirement Analysis)" descPlaceholder="Step description…" />
      </div>
    </div>
  );
}

// ── Industries ─────────────────────────────────────────────
export function IndustriesBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const [uploading, setUploading] = useState(false);
  const bullets = (data.bullets as Bullet[]) ?? [];
  const images  = (data.images  as string[])  ?? [];

  const addImage = async (file: File) => {
    setUploading(true); const url = await uploadImg(file); setUploading(false);
    if (url) onChange({ ...data, images: [...images, url] });
  };
  const removeImage = (idx: number) => onChange({ ...data, images: images.filter((_, i) => i !== idx) });

  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. Industries We Serve" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Industry List (bullet points)</label>
        <BulletEditor items={bullets} onChange={v => onChange({ ...data, bullets: v })} placeholder="e.g. Restaurant & Food Industry" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Industry Images (photo grid)</label>
        <div className={e.imageGridList}>
          {images.map((url, idx) => (
            <div key={idx} className={e.imageGridItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`Industry ${idx + 1}`} className={e.imageGridImg} />
              <button className={e.imageGridRemove} type="button" onClick={() => removeImage(idx)}><XIcon /></button>
            </div>
          ))}
          {images.length < 6 && (
            <div className={e.imageGridAdd}>
              <UploadIcon />
              <span>{uploading ? 'Uploading…' : 'Add Image'}</span>
              <input className={e.imageGridAddInput} type="file" accept="image/*" disabled={uploading}
                onChange={ev => { const f = ev.target.files?.[0]; if (f) addImage(f); ev.target.value = ''; }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Text (generic) ─────────────────────────────────────────
export function TextBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="Leave blank for plain paragraph" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Content</label>
        <RichEditor value={String(data.body ?? '')} onChange={html => onChange({ ...data, body: html })} placeholder="Write your content…" minHeight={110} />
      </div>
    </div>
  );
}

// ── Bullets (plain list section) ────────────────────────────
export function BulletsBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const items = (data.items as Bullet[]) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="Section heading" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>List Items</label>
        <BulletEditor items={items} onChange={v => onChange({ ...data, items: v })} placeholder="Add a list item…" />
      </div>
    </div>
  );
}

// ── Image Grid ─────────────────────────────────────────────
export function ImageGridBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const [uploading, setUploading] = useState(false);
  const images = (data.images as string[]) ?? [];
  const addImage = async (file: File) => {
    setUploading(true); const url = await uploadImg(file); setUploading(false);
    if (url) onChange({ ...data, images: [...images, url] });
  };
  const removeImage = (idx: number) => onChange({ ...data, images: images.filter((_, i) => i !== idx) });
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Images</label>
        <div className={e.imageGridList}>
          {images.map((url, idx) => (
            <div key={idx} className={e.imageGridItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`Image ${idx + 1}`} className={e.imageGridImg} />
              <button className={e.imageGridRemove} type="button" onClick={() => removeImage(idx)}><XIcon /></button>
            </div>
          ))}
          {images.length < 9 && (
            <div className={e.imageGridAdd}>
              <UploadIcon />
              <span>{uploading ? '…' : 'Add'}</span>
              <input className={e.imageGridAddInput} type="file" accept="image/*" disabled={uploading}
                onChange={ev => { const f = ev.target.files?.[0]; if (f) addImage(f); ev.target.value = ''; }} />
            </div>
          )}
        </div>
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Grid Columns</label>
        <select className={e.fSelect} value={String(data.columns ?? '3')} onChange={ev => onChange({ ...data, columns: ev.target.value })}>
          <option value="2">2 Columns</option>
          <option value="3">3 Columns</option>
          <option value="4">4 Columns</option>
        </select>
      </div>
    </div>
  );
}

// ── CTA Banner ─────────────────────────────────────────────
export function CTABlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Headline</label>
          <input className={e.fInput} value={String(data.headline ?? '')} onChange={ev => onChange({ ...data, headline: ev.target.value })} placeholder="Have a Project In Mind?" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Sub-headline</label>
          <input className={e.fInput} value={String(data.subheadline ?? '')} onChange={ev => onChange({ ...data, subheadline: ev.target.value })} placeholder="Let's Build Something Great Together." />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Button Label</label>
          <input className={e.fInput} value={String(data.btnLabel ?? '')} onChange={ev => onChange({ ...data, btnLabel: ev.target.value })} placeholder="GET STARTED →" />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Button URL</label>
          <input className={e.fInput} value={String(data.btnUrl ?? '')} onChange={ev => onChange({ ...data, btnUrl: ev.target.value })} placeholder="https://…" />
        </div>
      </div>
      <ImgPicker label="Background Image (optional)" value={String(data.bgImage ?? '')} onChange={url => onChange({ ...data, bgImage: url })} />
    </div>
  );
}

// ── Two Column ─────────────────────────────────────────────
export function TwoColumnBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Left Column — Rich Text</label>
          <RichEditor value={String(data.leftBody ?? '')} onChange={html => onChange({ ...data, leftBody: html })} placeholder="Left column content…" minHeight={100} />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Right Column</label>
          <select className={e.fSelect} value={String(data.rightType ?? 'text')} onChange={ev => onChange({ ...data, rightType: ev.target.value })} style={{ marginBottom: 8 }}>
            <option value="text">Rich Text</option>
            <option value="image">Image</option>
          </select>
          {(data.rightType ?? 'text') === 'text'
            ? <RichEditor value={String(data.rightBody ?? '')} onChange={html => onChange({ ...data, rightBody: html })} placeholder="Right column content…" minHeight={100} />
            : <ImgPicker value={String(data.rightImage ?? '')} onChange={url => onChange({ ...data, rightImage: url })} />}
        </div>
      </div>
    </div>
  );
}

// ── Divider ─────────────────────────────────────────────────
export function DividerBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Spacing</label>
        <select className={e.fSelect} value={String(data.spacing ?? 'md')} onChange={ev => onChange({ ...data, spacing: ev.target.value })}>
          <option value="sm">Small (24px)</option>
          <option value="md">Medium (48px)</option>
          <option value="lg">Large (80px)</option>
        </select>
      </div>
    </div>
  );
}

// ── Buttons ─────────────────────────────────────────────────
interface BtnData { id: string; label: string; url: string; openInNewTab: boolean; style: string; }
export function ButtonsBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const buttons = (data.buttons as BtnData[]) ?? [];
  const add    = () => onChange({ ...data, buttons: [...buttons, { id: uid(), label: '', url: '', openInNewTab: true, style: 'primary' }] });
  const rm     = (id: string) => onChange({ ...data, buttons: buttons.filter(b => b.id !== id) });
  const upd    = (id: string, field: string, val: unknown) => onChange({ ...data, buttons: buttons.map(b => b.id === id ? { ...b, [field]: val } : b) });
  return (
    <div className={e.blockCardBody}>
      <div className={e.btnList}>
        {buttons.map(btn => (
          <div key={btn.id} className={e.btnItem}>
            <div className={e.fGroup}><label className={e.fLabel}>Label</label><input className={e.fInput} value={btn.label} onChange={ev => upd(btn.id,'label',ev.target.value)} placeholder="Get Started" /></div>
            <div className={e.fGroup}><label className={e.fLabel}>URL</label><input className={e.fInput} value={btn.url} onChange={ev => upd(btn.id,'url',ev.target.value)} placeholder="https://…" /></div>
            <div className={e.fGroup}><label className={e.fLabel}>Style</label>
              <select className={e.fSelect} value={btn.style} onChange={ev => upd(btn.id,'style',ev.target.value)}>
                <option value="primary">Primary</option><option value="secondary">Secondary</option><option value="outline">Outline</option>
              </select>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', paddingBottom:2 }}>
              <button className={`${e.btn} ${e.btnGhost} ${e.btnIcon}`} type="button" style={{ color:'var(--color-danger)' }} onClick={() => rm(btn.id)}><XIcon /></button>
            </div>
          </div>
        ))}
      </div>
      {buttons.length < 6 && <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={add} style={{ marginTop: 8 }}><PlusIcon /> Add Button</button>}
    </div>
  );
}

'use client';

/**
 * Technical Expertise page block editors.
 * Covers all blocks from reference UI:
 *   hero, intro, offerCards (What We Offer), whyChooseUs,
 *   process (step list), technologies (grouped table),
 *   plus shared: text, bullets, imageGrid, cta, twoColumn, divider, buttons
 */

import { useState } from 'react';
import e from '../styles/editor.module.css';

// ── Icons ──────────────────────────────────────────────────────────────────
export const XIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
export const PlusIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
export const GripIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;

function uid() { return Math.random().toString(36).slice(2, 10); }

async function uploadImg(file: File): Promise<string | null> {
  const fd = new FormData(); fd.append('file', file);
  const r = await fetch('/api/admin/upload', { method: 'POST', body: fd });
  const d = await r.json(); return d.success ? d.data.url : null;
}

// ── Shared image picker ─────────────────────────────────────────────────────
export function ImgPicker({ label, value, onChange, height = 160 }: { label?: string; value: string; onChange: (url: string) => void; height?: number }) {
  const [up, setUp] = useState(false);
  const handle = async (file: File) => { setUp(true); const u = await uploadImg(file); setUp(false); if (u) onChange(u); };
  return (
    <div className={e.fGroup}>
      {label && <span className={e.fLabel}>{label}</span>}
      {value ? (
        <div className={e.uploadPreview}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="preview" className={e.uploadPreviewImg} style={{ maxHeight: height }} />
          <div className={e.uploadPreviewOverlay}><button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={() => onChange('')}>Remove</button></div>
        </div>
      ) : (
        <div className={e.uploadArea}>
          <span className={e.uploadIcon}><UploadIcon /></span>
          <span className={e.uploadText}>{up ? 'Uploading…' : 'Click or drag image'}</span>
          <span className={e.uploadHint}>JPEG · PNG · WebP · Max 5 MB</span>
          <input className={e.uploadInput} type="file" accept="image/*" disabled={up}
            onChange={ev => { const f = ev.target.files?.[0]; if (f) handle(f); ev.target.value = ''; }} />
        </div>
      )}
    </div>
  );
}

// ── Shared rich editor ──────────────────────────────────────────────────────
export function RichEditor({ value, onChange, placeholder = 'Write here…', minHeight = 90 }: { value: string; onChange: (html: string) => void; placeholder?: string; minHeight?: number }) {
  const exec = (cmd: string, val?: string) => { document.execCommand(cmd, false, val); };
  const tools: [string, string, string?][] = [['B','bold'],['I','italic'],['U','underline'],['sep',''],['H2','formatBlock','h2'],['H3','formatBlock','h3'],['sep',''],['UL','insertUnorderedList'],['OL','insertOrderedList'],['sep',''],['¶','formatBlock','p']];
  return (
    <div className={e.richEditor}>
      <div className={e.richToolbar}>
        {tools.map(([l, c, v], i) => l === 'sep' ? <span key={i} className={e.rtSep} /> : <button key={i} type="button" className={e.rtBtn} onMouseDown={ev => { ev.preventDefault(); exec(c, v); }}>{l}</button>)}
      </div>
      <div className={e.richContent} contentEditable suppressContentEditableWarning style={{ minHeight }} data-placeholder={placeholder}
        dangerouslySetInnerHTML={{ __html: value }} onInput={ev => onChange(ev.currentTarget.innerHTML)} />
    </div>
  );
}

// ── Shared bullet list ──────────────────────────────────────────────────────
interface Bullet { id: string; text: string; }
export function BulletEditor({ items, onChange, placeholder = 'Add item…' }: { items: Bullet[]; onChange: (v: Bullet[]) => void; placeholder?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div className={e.bulletList}>
        {items.map(b => (
          <div key={b.id} className={e.bulletItem}>
            <span className={e.bulletDrag}><GripIcon /></span>
            <textarea className={e.bulletTA} value={b.text} rows={1} onChange={ev => onChange(items.map(x => x.id === b.id ? { ...x, text: ev.target.value } : x))} placeholder={placeholder}
              onInput={ev => { const t = ev.currentTarget; t.style.height = 'auto'; t.style.height = t.scrollHeight + 'px'; }} />
            <button className={e.bulletRemove} type="button" onClick={() => onChange(items.filter(x => x.id !== b.id))}><XIcon /></button>
          </div>
        ))}
      </div>
      <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={() => onChange([...items, { id: uid(), text: '' }])} style={{ alignSelf: 'flex-start' }}>
        <PlusIcon /> Add item
      </button>
    </div>
  );
}

type D = Record<string, unknown>;

// ════════════════════════════════════════════════════════════
//  TE-SPECIFIC BLOCK EDITORS
// ════════════════════════════════════════════════════════════

// ── Hero ─────────────────────────────────────────────────────
export function HeroBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Title <span className={e.fRequired}>*</span></label>
          <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. BUILD POWERFUL, SCALABLE WEBSITES" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Subtitle / Description</label>
          <textarea className={e.fTextarea} value={String(data.subtitle ?? '')} rows={2} onChange={ev => onChange({ ...data, subtitle: ev.target.value })} placeholder="We create modern, fast, conversion-focused websites…" />
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

// ── Introduction ──────────────────────────────────────────────
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

// ── What We Offer (icon + title + description cards) ──────────
interface OfferCard { id: string; icon: string; title: string; description: string; }
export function OfferCardsBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const [uploading, setUploading] = useState<string | null>(null);
  const cards = (data.cards as OfferCard[]) ?? [];

  const addCard = () => onChange({ ...data, cards: [...cards, { id: uid(), icon: '', title: '', description: '' }] });
  const rmCard  = (id: string) => onChange({ ...data, cards: cards.filter(c => c.id !== id) });
  const updCard = (id: string, field: keyof OfferCard, val: string) =>
    onChange({ ...data, cards: cards.map(c => c.id === id ? { ...c, [field]: val } : c) });

  const handleIconUpload = async (id: string, file: File) => {
    setUploading(id); const url = await uploadImg(file); setUploading(null);
    if (url) updCard(id, 'icon', url);
  };

  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="WHAT WE OFFER" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Sub-heading <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
        <input className={e.fInput} value={String(data.subtitle ?? '')} onChange={ev => onChange({ ...data, subtitle: ev.target.value })} placeholder="Optional subtitle below the heading" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Cards</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {cards.map((card, idx) => (
            <div key={card.id} style={{ padding: 14, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', flex: 1 }}>Card #{idx + 1}</span>
                <button className={`${e.btn} ${e.btnGhost} ${e.btnIcon}`} type="button" style={{ color: 'var(--color-danger)' }} onClick={() => rmCard(card.id)}><XIcon /></button>
              </div>
              {/* Icon upload */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <label title="Upload icon" style={{ width: 52, height: 52, border: '1.5px dashed var(--color-border)', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: 'var(--color-surface)', flexShrink: 0 }}>
                  {card.icon
                    ? <img src={card.icon} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    : <span style={{ fontSize: uploading === card.id ? 9 : 18, color: 'var(--color-text-muted)', textAlign: 'center' }}>{uploading === card.id ? 'Uploading…' : '🖼️'}</span>}
                  <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                    disabled={uploading === card.id} onChange={ev => { const f = ev.target.files?.[0]; if (f) handleIconUpload(card.id, f); ev.target.value = ''; }} />
                </label>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <input className={e.fInput} value={card.title} onChange={ev => updCard(card.id, 'title', ev.target.value)} placeholder="Card title (e.g. Custom Website Development)" />
                  <textarea className={e.fTextarea} value={card.description} rows={2} onChange={ev => updCard(card.id, 'description', ev.target.value)} placeholder="Card description…" style={{ minHeight: 50 }} />
                </div>
              </div>
            </div>
          ))}
          <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={addCard} style={{ alignSelf: 'flex-start' }}><PlusIcon /> Add Card</button>
        </div>
      </div>
    </div>
  );
}

// ── Why Choose Us (image + title grid) ───────────────────────
interface WhyCard { id: string; image: string; title: string; }
export function WhyChooseUsBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const [uploading, setUploading] = useState<string | null>(null);
  const cards = (data.cards as WhyCard[]) ?? [];
  const addCard  = () => onChange({ ...data, cards: [...cards, { id: uid(), image: '', title: '' }] });
  const rmCard   = (id: string) => onChange({ ...data, cards: cards.filter(c => c.id !== id) });
  const updCard  = (id: string, field: keyof WhyCard, val: string) =>
    onChange({ ...data, cards: cards.map(c => c.id === id ? { ...c, [field]: val } : c) });
  const handleUpload = async (id: string, file: File) => {
    setUploading(id); const url = await uploadImg(file); setUploading(null);
    if (url) updCard(id, 'image', url);
  };

  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Section Title</label>
          <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="WHY CHOOSE OUR WEB DEVELOPMENT SERVICES" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Sub-heading <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
          <input className={e.fInput} value={String(data.subtitle ?? '')} onChange={ev => onChange({ ...data, subtitle: ev.target.value })} placeholder="We don't just build websites…" />
        </div>
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Items (image + title)</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {cards.map((card, idx) => (
            <div key={card.id} style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              {/* Image */}
              <div style={{ position: 'relative' }}>
                {card.image
                  ? <img src={card.image} alt={card.title} style={{ width: '100%', height: 100, objectFit: 'cover', display: 'block' }} />
                  : <div style={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)', fontSize: 12, color: 'var(--color-text-muted)', cursor: 'pointer', position: 'relative' }}>
                      {uploading === card.id ? 'Uploading…' : 'Click to upload image'}
                      <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} onChange={ev => { const f = ev.target.files?.[0]; if (f) handleUpload(card.id, f); ev.target.value = ''; }} />
                    </div>
                }
                {card.image && (
                  <label style={{ position: 'absolute', inset: 0, cursor: 'pointer', opacity: 0 }}>
                    <input type="file" accept="image/*" onChange={ev => { const f = ev.target.files?.[0]; if (f) handleUpload(card.id, f); ev.target.value = ''; }} />
                  </label>
                )}
                <button className={`${e.btn} ${e.btnGhost} ${e.btnIcon}`} type="button" style={{ position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,0.5)', color: 'white', width: 24, height: 24 }} onClick={() => rmCard(card.id)}><XIcon /></button>
              </div>
              <div style={{ padding: '8px 10px' }}>
                <input className={e.fInput} style={{ fontSize: 12 }} value={card.title} onChange={ev => updCard(card.id, 'title', ev.target.value)} placeholder={`Item #${idx + 1} title`} />
              </div>
            </div>
          ))}
          <button className={`${e.btn} ${e.btnSecondary}`} type="button" onClick={addCard}
            style={{ height: 140, border: '2px dashed var(--color-border)', background: 'var(--color-surface-2)', flexDirection: 'column', gap: 6, fontSize: 12, color: 'var(--color-text-muted)' }}>
            <PlusIcon /> Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Process (horizontal step list) ───────────────────────────
interface ProcessStep { id: string; title: string; }
export function ProcessBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const steps = (data.steps as ProcessStep[]) ?? [];
  const add   = () => onChange({ ...data, steps: [...steps, { id: uid(), title: '' }] });
  const rm    = (id: string) => onChange({ ...data, steps: steps.filter(s => s.id !== id) });
  const upd   = (id: string, title: string) => onChange({ ...data, steps: steps.map(s => s.id === id ? { ...s, title } : s) });

  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="OUR DEVELOPMENT PROCESS" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Process Steps</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {steps.map((step, idx) => (
            <div key={step.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{idx + 1}</span>
              <input className={e.fInput} style={{ flex: 1, border: 'none', background: 'transparent' }} value={step.title} onChange={ev => upd(step.id, ev.target.value)} placeholder={`Step ${idx + 1} title (e.g. Requirement & Strategy)`} />
              <button className={e.bulletRemove} type="button" onClick={() => rm(step.id)}><XIcon /></button>
            </div>
          ))}
          <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={add} style={{ alignSelf: 'flex-start' }}><PlusIcon /> Add Step</button>
        </div>
      </div>
    </div>
  );
}

// ── Technologies (grouped table: Frontend, Backend, etc.) ─────
interface TechGroup { id: string; category: string; items: string[]; }
export function TechnologiesBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const groups = (data.groups as TechGroup[]) ?? [];
  const addGroup = () => onChange({ ...data, groups: [...groups, { id: uid(), category: '', items: [] }] });
  const rmGroup  = (id: string) => onChange({ ...data, groups: groups.filter(g => g.id !== id) });
  const updGroup = (id: string, field: keyof TechGroup, val: string | string[]) =>
    onChange({ ...data, groups: groups.map(g => g.id === id ? { ...g, [field]: val } : g) });
  const addItem  = (gid: string) => { const g = groups.find(x => x.id === gid); if (g) updGroup(gid, 'items', [...g.items, '']); };
  const updItem  = (gid: string, idx: number, val: string) => {
    const g = groups.find(x => x.id === gid);
    if (!g) return;
    const items = [...g.items]; items[idx] = val; updGroup(gid, 'items', items);
  };
  const rmItem   = (gid: string, idx: number) => {
    const g = groups.find(x => x.id === gid);
    if (!g) return;
    updGroup(gid, 'items', g.items.filter((_, i) => i !== idx));
  };

  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="TECHNOLOGIES WE USE" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Technology Groups</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {groups.map(g => (
            <div key={g.id} style={{ padding: 14, background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <input className={e.fInput} style={{ flex: 1 }} value={g.category} onChange={ev => updGroup(g.id, 'category', ev.target.value)} placeholder="Group name (e.g. Frontend, Backend, CMS & Platforms)" />
                <button className={`${e.btn} ${e.btnGhost} ${e.btnIcon}`} type="button" style={{ color: 'var(--color-danger)' }} onClick={() => rmGroup(g.id)}><XIcon /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {g.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: 6 }}>
                    <input className={e.fInput} style={{ flex: 1, height: 32, fontSize: 12 }} value={item} onChange={ev => updItem(g.id, idx, ev.target.value)} placeholder={`Technology (e.g. HTML5, Node.js, WordPress)`} />
                    <button className={`${e.btn} ${e.btnGhost} ${e.btnIcon}`} type="button" style={{ color: 'var(--color-danger)', width: 32, height: 32 }} onClick={() => rmItem(g.id, idx)}><XIcon /></button>
                  </div>
                ))}
                <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={() => addItem(g.id)} style={{ alignSelf: 'flex-start', marginTop: 2 }}><PlusIcon /> Add Tech</button>
              </div>
            </div>
          ))}
          <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={addGroup} style={{ alignSelf: 'flex-start' }}><PlusIcon /> Add Group</button>
        </div>
      </div>
    </div>
  );
}

// ── Generic Text ──────────────────────────────────────────────
export function TextBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Title <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="Section heading" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Content</label>
        <RichEditor value={String(data.body ?? '')} onChange={html => onChange({ ...data, body: html })} placeholder="Write content…" minHeight={110} />
      </div>
    </div>
  );
}

// ── Bullets ───────────────────────────────────────────────────
export function BulletsBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const items = (data.items as Array<{ id: string; text: string }>) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}><label className={e.fLabel}>Title</label>
        <input className={e.fInput} value={String(data.title ?? '')} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="Section heading" />
      </div>
      <div className={e.fGroup}><label className={e.fLabel}>List Items</label>
        <BulletEditor items={items} onChange={v => onChange({ ...data, items: v })} placeholder="List item…" />
      </div>
    </div>
  );
}

// ── Image Grid ────────────────────────────────────────────────
export function ImageGridBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const [up, setUp] = useState(false);
  const imgs = (data.images as string[]) ?? [];
  const add = async (file: File) => { setUp(true); const u = await uploadImg(file); setUp(false); if (u) onChange({ ...data, images: [...imgs, u] }); };
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}><label className={e.fLabel}>Images</label>
        <div className={e.imageGridList}>
          {imgs.map((url, idx) => (
            <div key={idx} className={e.imageGridItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className={e.imageGridImg} />
              <button className={e.imageGridRemove} type="button" onClick={() => onChange({ ...data, images: imgs.filter((_, i) => i !== idx) })}><XIcon /></button>
            </div>
          ))}
          {imgs.length < 9 && (
            <div className={e.imageGridAdd}>
              <UploadIcon />
              <span>{up ? '…' : 'Add'}</span>
              <input className={e.imageGridAddInput} type="file" accept="image/*" disabled={up} onChange={ev => { const f = ev.target.files?.[0]; if (f) add(f); ev.target.value = ''; }} />
            </div>
          )}
        </div>
        <div className={e.fGroup} style={{ marginTop: 8 }}><label className={e.fLabel}>Columns</label>
          <select className={e.fSelect} value={String(data.columns ?? '3')} onChange={ev => onChange({ ...data, columns: ev.target.value })}>
            <option value="2">2</option><option value="3">3</option><option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// ── CTA Banner ────────────────────────────────────────────────
export function CTABlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={`${e.fGroup} ${e.fGridFull}`}><label className={e.fLabel}>Headline</label>
          <input className={e.fInput} value={String(data.headline ?? '')} onChange={ev => onChange({ ...data, headline: ev.target.value })} placeholder="Have a Project In Mind?" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}><label className={e.fLabel}>Sub-headline</label>
          <input className={e.fInput} value={String(data.subheadline ?? '')} onChange={ev => onChange({ ...data, subheadline: ev.target.value })} placeholder="Let's Build Something Great Together." />
        </div>
        <div className={e.fGroup}><label className={e.fLabel}>Button Label</label>
          <input className={e.fInput} value={String(data.btnLabel ?? '')} onChange={ev => onChange({ ...data, btnLabel: ev.target.value })} placeholder="GET STARTED →" />
        </div>
        <div className={e.fGroup}><label className={e.fLabel}>Button URL</label>
          <input className={e.fInput} value={String(data.btnUrl ?? '')} onChange={ev => onChange({ ...data, btnUrl: ev.target.value })} placeholder="https://…" />
        </div>
      </div>
      <ImgPicker label="Background Image (optional)" value={String(data.bgImage ?? '')} onChange={url => onChange({ ...data, bgImage: url })} />
    </div>
  );
}

// ── Two Column ────────────────────────────────────────────────
export function TwoColumnBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={e.fGroup}><label className={e.fLabel}>Left — Rich Text</label>
          <RichEditor value={String(data.leftBody ?? '')} onChange={html => onChange({ ...data, leftBody: html })} placeholder="Left column…" minHeight={100} />
        </div>
        <div className={e.fGroup}><label className={e.fLabel}>Right Column</label>
          <select className={e.fSelect} value={String(data.rightType ?? 'text')} onChange={ev => onChange({ ...data, rightType: ev.target.value })} style={{ marginBottom: 8 }}>
            <option value="text">Rich Text</option><option value="image">Image</option>
          </select>
          {(data.rightType ?? 'text') === 'text'
            ? <RichEditor value={String(data.rightBody ?? '')} onChange={html => onChange({ ...data, rightBody: html })} placeholder="Right column…" minHeight={100} />
            : <ImgPicker value={String(data.rightImage ?? '')} onChange={url => onChange({ ...data, rightImage: url })} />}
        </div>
      </div>
    </div>
  );
}

// ── Divider ───────────────────────────────────────────────────
export function DividerBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}><label className={e.fLabel}>Spacing</label>
        <select className={e.fSelect} value={String(data.spacing ?? 'md')} onChange={ev => onChange({ ...data, spacing: ev.target.value })}>
          <option value="sm">Small (24px)</option><option value="md">Medium (48px)</option><option value="lg">Large (80px)</option>
        </select>
      </div>
    </div>
  );
}

// ── Buttons ───────────────────────────────────────────────────
interface BtnItem { id: string; label: string; url: string; openInNewTab: boolean; style: string; }
export function ButtonsBlockEditor({ data, onChange }: { data: D; onChange: (d: D) => void }) {
  const btns = (data.buttons as BtnItem[]) ?? [];
  const add = () => onChange({ ...data, buttons: [...btns, { id: uid(), label: '', url: '', openInNewTab: true, style: 'primary' }] });
  const rm  = (id: string) => onChange({ ...data, buttons: btns.filter(b => b.id !== id) });
  const upd = (id: string, f: string, v: unknown) => onChange({ ...data, buttons: btns.map(b => b.id === id ? { ...b, [f]: v } : b) });
  return (
    <div className={e.blockCardBody}>
      <div className={e.btnList}>
        {btns.map(btn => (
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
      {btns.length < 6 && <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={add} style={{ marginTop: 8 }}><PlusIcon /> Add Button</button>}
    </div>
  );
}

'use client';

/**
 * Block editor sub-components — one file, one export per block type.
 * Each receives a `data` object and an `onChange(data)` callback.
 */

import { useState } from 'react';
import RichEditor from '../RichEditor';
import e from '../styles/editor.module.css';

// ── Icon helpers ───────────────────────────────────────────────────────────
export const XIcon     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
export const PlusIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
export const GripIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="6" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;

// ── Upload helper ──────────────────────────────────────────────────────────
async function uploadImg(file: File): Promise<string | null> {
  const fd = new FormData(); fd.append('file', file);
  const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
  const d = await res.json();
  return d.success ? d.data.url : null;
}

// ── Shared image picker ────────────────────────────────────────────────────
export function ImgPicker({ label, value, onChange }: { label?: string; value: string; onChange: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const handle = async (file: File) => {
    setUploading(true);
    const url = await uploadImg(file);
    setUploading(false);
    if (url) onChange(url);
  };
  return (
    <div className={e.fGroup}>
      {label && <span className={e.fLabel}>{label}</span>}
      {value ? (
        <div className={e.uploadPreview}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="preview" className={e.uploadPreviewImg} />
          <div className={e.uploadPreviewOverlay}>
            <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={() => onChange('')}>Remove</button>
          </div>
        </div>
      ) : (
        <div className={e.uploadArea}>
          <span className={e.uploadIcon}><UploadIcon /></span>
          <span className={e.uploadText}>{uploading ? 'Uploading…' : 'Click or drag to upload'}</span>
          <span className={e.uploadHint}>JPEG · PNG · WebP · GIF · Max 5 MB</span>
          <input className={e.uploadInput} type="file" accept="image/*" disabled={uploading}
            onChange={ev => { const f = ev.target.files?.[0]; if (f) handle(f); ev.target.value = ''; }} />
        </div>
      )}
    </div>
  );
}

// ── Bullet list editor ─────────────────────────────────────────────────────
interface Bullet { id: string; text: string; }
function uid() { return Math.random().toString(36).slice(2); }

export function BulletListEditor({ items, onChange, placeholder }: { items: Bullet[]; onChange: (v: Bullet[]) => void; placeholder: string }) {
  const add    = () => onChange([...items, { id: uid(), text: '' }]);
  const remove = (id: string) => onChange(items.filter(b => b.id !== id));
  const update = (id: string, text: string) => onChange(items.map(b => b.id === id ? { ...b, text } : b));
  return (
    <div>
      <div className={e.bulletList}>
        {items.map(b => (
          <div key={b.id} className={e.bulletItem}>
            <span className={e.bulletDrag}><GripIcon /></span>
            <textarea className={e.bulletTextarea} value={b.text} rows={1}
              onChange={ev => update(b.id, ev.target.value)} placeholder={placeholder}
              onInput={ev => { const t = ev.currentTarget; t.style.height = 'auto'; t.style.height = t.scrollHeight + 'px'; }}
            />
            <button className={e.bulletRemove} type="button" onClick={() => remove(b.id)}><XIcon /></button>
          </div>
        ))}
      </div>
      <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm} ${e.addBulletBtn}`} type="button" onClick={add} style={{ marginTop: 7 }}>
        <PlusIcon /> Add item
      </button>
    </div>
  );
}

// ── Tech chip editor ───────────────────────────────────────────────────────
interface TechItem { id: string; name: string; icon: string; }

export function TechEditor({ items, onChange }: { items: TechItem[]; onChange: (v: TechItem[]) => void }) {
  const [name, setName]         = useState('');
  const [uploadingId, setUpId]  = useState<string | null>(null); // which chip is uploading a new icon
  const [addUploading, setAddUpl] = useState(false);             // uploading icon for the "new" tech being added
  const [addIconUrl, setAddIconUrl] = useState('');              // preview URL before add

  const remove = (id: string) => onChange(items.filter(i => i.id !== id));

  // Upload an icon for an EXISTING chip (replace icon)
  const handleExistingIconUpload = async (id: string, file: File) => {
    setUpId(id);
    const url = await uploadImg(file);
    setUpId(null);
    if (url) onChange(items.map(i => i.id === id ? { ...i, icon: url } : i));
  };

  // Upload icon for the NEW chip being added
  const handleNewIconUpload = async (file: File) => {
    setAddUpl(true);
    const url = await uploadImg(file);
    setAddUpl(false);
    if (url) setAddIconUrl(url);
  };

  const add = () => {
    if (!name.trim()) return;
    onChange([...items, { id: uid(), name: name.trim(), icon: addIconUrl }]);
    setName('');
    setAddIconUrl('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Existing chips */}
      <div className={e.techGrid}>
        {items.map(t => (
          <div key={t.id} className={e.techChip} style={{ alignItems: 'center', gap: 6, flexWrap: 'nowrap' }}>
            {/* Icon: click to re-upload */}
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', position: 'relative', flexShrink: 0 }} title="Click to change icon">
              {t.icon
                ? <img src={t.icon} alt={t.name} className={e.techIcon} onError={ev => { (ev.target as HTMLImageElement).style.display = 'none'; }} />
                : <span style={{ width: 18, height: 18, borderRadius: 3, background: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'var(--color-text-muted)' }}>
                    {uploadingId === t.id ? '…' : '📷'}
                  </span>
              }
              <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                disabled={uploadingId === t.id}
                onChange={ev => { const f = ev.target.files?.[0]; if (f) handleExistingIconUpload(t.id, f); ev.target.value = ''; }} />
            </label>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 90 }}>{t.name}</span>
            <button className={e.techRemove} type="button" onClick={() => remove(t.id)}><XIcon /></button>
          </div>
        ))}
        {items.length === 0 && <span style={{ fontSize: 12, color: 'var(--color-text-muted)', padding: '4px 0' }}>No technologies added yet</span>}
      </div>

      {/* Add new tech row */}
      <div style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)' }}>Add Technology</div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {/* Icon upload preview */}
          <label style={{ width: 48, height: 48, borderRadius: 8, border: '1.5px dashed var(--color-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, position: 'relative', background: 'var(--color-surface)', transition: 'border-color 0.15s', overflow: 'hidden' }} title="Upload icon image">
            {addIconUrl
              ? <img src={addIconUrl} alt="icon preview" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }} />
              : <span style={{ fontSize: addUploading ? 10 : 18, color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1.2 }}>
                  {addUploading ? 'Uploading…' : <><span style={{ fontSize: 18 }}>📷</span><br /><span style={{ fontSize: 9, display: 'block', marginTop: 2 }}>Upload Icon</span></>}
                </span>
            }
            <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
              disabled={addUploading}
              onChange={ev => { const f = ev.target.files?.[0]; if (f) handleNewIconUpload(f); ev.target.value = ''; }} />
          </label>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
            <input className={e.fInput} value={name} onChange={ev => setName(ev.target.value)}
              placeholder="Technology name (e.g. Next.js, HTML, CSS)"
              onKeyDown={ev => ev.key === 'Enter' && (ev.preventDefault(), add())} />
            {addIconUrl && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--color-success)' }}>
                <span>✓</span> Icon uploaded
                <button type="button" onClick={() => setAddIconUrl('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', fontSize: 11, padding: 0 }}>Remove</button>
              </div>
            )}
          </div>
          <button className={`${e.btn} ${e.btnPrimary} ${e.btnSm}`} type="button" onClick={add} disabled={!name.trim() || addUploading}
            style={{ flexShrink: 0, alignSelf: 'flex-end' }}>
            <PlusIcon /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  BLOCK EDITOR COMPONENTS
// ════════════════════════════════════════════════════════════

// ── Hero block ─────────────────────────────────────────────
export function HeroBlockEditor({ data, onChange }: { data: Record<string, string>; onChange: (d: Record<string, string>) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGrid}>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Main Title</label>
          <input className={e.fInput} value={data.title ?? ''} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. CASE STUDIES / DAMRU BY NAMO" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Subtitle</label>
          <input className={e.fInput} value={data.subtitle ?? ''} onChange={ev => onChange({ ...data, subtitle: ev.target.value })} placeholder="e.g. Transforming a restaurant business…" />
        </div>
      </div>
      <ImgPicker label="Banner / Hero Image" value={data.bannerImage ?? ''} onChange={url => onChange({ ...data, bannerImage: url })} />
    </div>
  );
}

// ── Text / Intro block ─────────────────────────────────────
export function TextBlockEditor({ data, onChange }: { data: Record<string, string>; onChange: (d: Record<string, string>) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
        <input className={e.fInput} value={data.title ?? ''} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="Leave blank for a plain paragraph block" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Content <span style={{ color: 'var(--color-danger)' }}>*</span></label>
        <RichEditor value={data.body ?? ''} onChange={html => onChange({ ...data, body: html })} placeholder="Write your paragraph content here…" minHeight={120} />
      </div>
    </div>
  );
}

// ── Challenge block ────────────────────────────────────────
export function ChallengeBlockEditor({ data, onChange }: { data: Record<string, string>; onChange: (d: Record<string, string>) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={data.title ?? 'CHALLENGE'} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. CHALLENGE" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Challenge Description</label>
        <RichEditor value={data.body ?? ''} onChange={html => onChange({ ...data, body: html })} placeholder="Describe the client's problem or challenge…" minHeight={110} />
      </div>
    </div>
  );
}

// ── Solution block ─────────────────────────────────────────
export function SolutionBlockEditor({ data, onChange }: { data: Record<string, string>; onChange: (d: Record<string, string>) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={data.title ?? 'SOLUTION'} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. SOLUTION" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Solution Description</label>
        <RichEditor value={data.body ?? ''} onChange={html => onChange({ ...data, body: html })} placeholder="Describe your approach and solution…" minHeight={110} />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Image Position</label>
        <select className={e.fSelect} value={data.imagePosition ?? 'right'} onChange={ev => onChange({ ...data, imagePosition: ev.target.value })}>
          <option value="right">Image on the Right</option>
          <option value="left">Image on the Left</option>
          <option value="none">No Image</option>
        </select>
      </div>
      {(data.imagePosition ?? 'right') !== 'none' && (
        <ImgPicker label="Solution Image / Illustration" value={data.image ?? ''} onChange={url => onChange({ ...data, image: url })} />
      )}
    </div>
  );
}

// ── Key Features block ─────────────────────────────────────
export function KeyFeaturesBlockEditor({ data, onChange }: { data: Record<string, unknown>; onChange: (d: Record<string, unknown>) => void }) {
  const items = (data.items as Bullet[]) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={(data.title as string) ?? 'KEY FEATURES'} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. KEY FEATURES" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Feature Items</label>
        <BulletListEditor items={items} onChange={v => onChange({ ...data, items: v })} placeholder="Describe a key feature…" />
      </div>
    </div>
  );
}

// ── Results block ──────────────────────────────────────────
export function ResultsBlockEditor({ data, onChange }: { data: Record<string, unknown>; onChange: (d: Record<string, unknown>) => void }) {
  const items = (data.items as Bullet[]) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={(data.title as string) ?? 'RESULTS'} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. RESULTS" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Result Items</label>
        <BulletListEditor items={items} onChange={v => onChange({ ...data, items: v })} placeholder="e.g. 40% increase in conversions…" />
      </div>
    </div>
  );
}

// ── Technologies block ─────────────────────────────────────
export function TechnologiesBlockEditor({ data, onChange }: { data: Record<string, unknown>; onChange: (d: Record<string, unknown>) => void }) {
  const items = (data.items as TechItem[]) ?? [];
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Section Title</label>
        <input className={e.fInput} value={(data.title as string) ?? 'TECHNOLOGIES USED'} onChange={ev => onChange({ ...data, title: ev.target.value })} placeholder="e.g. TECHNOLOGIES USED" />
      </div>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Technologies</label>
        <TechEditor items={items} onChange={v => onChange({ ...data, items: v })} />
      </div>
    </div>
  );
}

// ── Standalone Image block ─────────────────────────────────
export function ImageBlockEditor({ data, onChange }: { data: Record<string, string>; onChange: (d: Record<string, string>) => void }) {
  return (
    <div className={e.blockCardBody}>
      <ImgPicker label="Image" value={data.url ?? ''} onChange={url => onChange({ ...data, url })} />
      <div className={e.fGrid}>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Caption <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
          <input className={e.fInput} value={data.caption ?? ''} onChange={ev => onChange({ ...data, caption: ev.target.value })} placeholder="Image caption…" />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Alt Text</label>
          <input className={e.fInput} value={data.alt ?? ''} onChange={ev => onChange({ ...data, alt: ev.target.value })} placeholder="Describe the image…" />
        </div>
        <div className={`${e.fGroup} ${e.fGridFull}`}>
          <label className={e.fLabel}>Image Width</label>
          <select className={e.fSelect} value={data.width ?? 'full'} onChange={ev => onChange({ ...data, width: ev.target.value })}>
            <option value="full">Full width</option>
            <option value="medium">Medium (75%)</option>
            <option value="small">Small (50%)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// ── Buttons block ──────────────────────────────────────────
interface BtnData { id: string; label: string; url: string; openInNewTab: boolean; style: string; }

export function ButtonsBlockEditor({ data, onChange }: { data: Record<string, unknown>; onChange: (d: Record<string, unknown>) => void }) {
  const buttons = (data.buttons as BtnData[]) ?? [];
  const add = () => onChange({ ...data, buttons: [...buttons, { id: uid(), label: '', url: '', openInNewTab: true, style: 'primary' }] });
  const remove = (id: string) => onChange({ ...data, buttons: buttons.filter(b => b.id !== id) });
  const update = (id: string, field: string, val: unknown) =>
    onChange({ ...data, buttons: buttons.map(b => b.id === id ? { ...b, [field]: val } : b) });

  return (
    <div className={e.blockCardBody}>
      <div className={e.btnList}>
        {buttons.map(btn => (
          <div key={btn.id} className={e.btnItem}>
            <div className={e.fGroup}>
              <label className={e.fLabel}>Label</label>
              <input className={e.fInput} value={btn.label} onChange={ev => update(btn.id, 'label', ev.target.value)} placeholder="Visit Website" />
            </div>
            <div className={e.fGroup}>
              <label className={e.fLabel}>URL</label>
              <input className={e.fInput} value={btn.url} onChange={ev => update(btn.id, 'url', ev.target.value)} placeholder="https://…" />
            </div>
            <div className={e.fGroup}>
              <label className={e.fLabel}>Style</label>
              <select className={e.fSelect} value={btn.style} onChange={ev => update(btn.id, 'style', ev.target.value)}>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="outline">Outline</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'flex-end' }}>
              <label className={e.toggleRow}>
                <span className={e.toggle} style={{ transform: 'scale(0.85)' }}>
                  <input type="checkbox" checked={btn.openInNewTab} onChange={ev => update(btn.id, 'openInNewTab', ev.target.checked)} />
                  <span className={e.toggleSlider} />
                </span>
                <span className={e.toggleLabel} style={{ fontSize: 11 }}>New tab</span>
              </label>
              <button className={`${e.btn} ${e.btnGhost} ${e.btnIcon}`} type="button" style={{ color: 'var(--color-danger)' }} onClick={() => remove(btn.id)}><XIcon /></button>
            </div>
          </div>
        ))}
      </div>
      {buttons.length < 10 && (
        <button className={`${e.btn} ${e.btnSecondary} ${e.btnSm}`} type="button" onClick={add} style={{ marginTop: 8 }}>
          <PlusIcon /> Add Button
        </button>
      )}
    </div>
  );
}

// ── Divider block ──────────────────────────────────────────
export function DividerBlockEditor({ data, onChange }: { data: Record<string, string>; onChange: (d: Record<string, string>) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div className={e.fGroup}>
        <label className={e.fLabel}>Spacing</label>
        <select className={e.fSelect} value={data.spacing ?? 'md'} onChange={ev => onChange({ ...data, spacing: ev.target.value })}>
          <option value="sm">Small (24px)</option>
          <option value="md">Medium (48px)</option>
          <option value="lg">Large (80px)</option>
        </select>
      </div>
    </div>
  );
}

// ── Two-column block ───────────────────────────────────────
export function TwoColumnBlockEditor({ data, onChange }: { data: Record<string, string>; onChange: (d: Record<string, string>) => void }) {
  return (
    <div className={e.blockCardBody}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Left Column — Rich Text</label>
          <RichEditor value={data.leftBody ?? ''} onChange={html => onChange({ ...data, leftBody: html })} placeholder="Left column content…" minHeight={100} />
        </div>
        <div className={e.fGroup}>
          <label className={e.fLabel}>Right Column</label>
          <div style={{ marginBottom: 8 }}>
            <select className={e.fSelect} style={{ width: '100%' }} value={data.rightType ?? 'text'} onChange={ev => onChange({ ...data, rightType: ev.target.value })}>
              <option value="text">Rich Text</option>
              <option value="image">Image</option>
            </select>
          </div>
          {(data.rightType ?? 'text') === 'text'
            ? <RichEditor value={data.rightBody ?? ''} onChange={html => onChange({ ...data, rightBody: html })} placeholder="Right column content…" minHeight={100} />
            : <ImgPicker value={data.rightImage ?? ''} onChange={url => onChange({ ...data, rightImage: url })} />
          }
        </div>
      </div>
    </div>
  );
}

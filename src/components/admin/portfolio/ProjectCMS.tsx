'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import Pagination from '@/components/admin/shared/Pagination';
import s from './styles/shared.module.css';

// ── Icons ──────────────────────────────────────────────────────────────────
const PlusIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const EditIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const ImageIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;
const BriefcaseIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
const StarIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

// ── Types ──────────────────────────────────────────────────────────────────
interface Category { _id: string; name: string; slug: string; }
interface Button { _id?: string; label: string; url: string; openInNewTab: boolean; isActive: boolean; order: number; }
interface Project {
  _id: string; title: string; slug: string; description: string;
  thumbnail: string; technologies: string[];
  categoryId: Category | null; buttons: Button[];
  isFeatured: boolean; isActive: boolean; order: number; createdAt: string;
}
interface FormState {
  title: string; slug: string; description: string; thumbnail: string;
  categoryId: string; technologies: string[]; buttons: Button[];
  isFeatured: boolean; isActive: boolean; order: string;
}
const EMPTY_FORM: FormState = {
  title: '', slug: '', description: '', thumbnail: '',
  categoryId: '', technologies: [], buttons: [],
  isFeatured: false, isActive: true, order: '0',
};
const EMPTY_BUTTON: Button = { label: '', url: '', openInNewTab: true, isActive: true, order: 0 };

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '');
}
async function uploadFile(file: File): Promise<string | null> {
  const fd = new FormData(); fd.append('file', file);
  const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
  const data = await res.json();
  return data.success ? data.data.url : null;
}

// ── Tag input ──────────────────────────────────────────────────────────────
function TagInput({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [inputVal, setInput] = useState('');
  const addTag = () => {
    const t = inputVal.trim();
    if (t && !value.includes(t)) { onChange([...value, t]); setInput(''); }
  };
  const removeTag = (i: number) => onChange(value.filter((_, idx) => idx !== i));
  return (
    <div className={s.tagInput} onClick={() => document.getElementById('tagInput')?.focus()}>
      {value.map((tag, i) => (
        <span key={i} className={s.tag}>
          {tag}
          <button className={s.tagRemove} onClick={() => removeTag(i)} type="button">
            <XIcon />
          </button>
        </span>
      ))}
      <input
        id="tagInput" className={s.tagInputField}
        value={inputVal} onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(); } if (e.key === 'Backspace' && !inputVal && value.length) removeTag(value.length - 1); }}
        placeholder={value.length === 0 ? 'Type and press Enter…' : ''}
      />
    </div>
  );
}

// ── Buttons editor ─────────────────────────────────────────────────────────
function ButtonsEditor({ value, onChange }: { value: Button[]; onChange: (v: Button[]) => void }) {
  const add = () => onChange([...value, { ...EMPTY_BUTTON, order: value.length }]);
  const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i));
  const update = (i: number, field: keyof Button, val: unknown) =>
    onChange(value.map((b, idx) => idx === i ? { ...b, [field]: val } : b));

  return (
    <div>
      <div className={s.buttonList}>
        {value.map((btn, i) => (
          <div key={i} className={s.buttonItem}>
            <div>
              <label className={s.formLabel}>Label</label>
              <input className={s.formInput} value={btn.label} onChange={e => update(i, 'label', e.target.value)} placeholder="Visit Website" />
            </div>
            <div>
              <label className={s.formLabel}>URL</label>
              <input className={s.formInput} value={btn.url} onChange={e => update(i, 'url', e.target.value)} placeholder="https://…" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'flex-end' }}>
              <label className={s.toggleWrapper} style={{ marginTop: 20 }}>
                <span className={s.toggle} style={{ transform: 'scale(0.85)' }}>
                  <input type="checkbox" checked={btn.openInNewTab} onChange={e => update(i, 'openInNewTab', e.target.checked)} />
                  <span className={s.toggleSlider} />
                </span>
                <span className={s.toggleLabel} style={{ fontSize: 11 }}>New tab</span>
              </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 2 }}>
              <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} style={{ color: 'var(--color-danger)' }} onClick={() => remove(i)} title="Remove button" type="button">
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      {value.length < 10 && (
        <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} style={{ marginTop: 10 }} onClick={add} type="button">
          <PlusIcon /> Add Button
        </button>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
function ProjectCMSInner() {
  const { toast } = useToast();
  const [projects, setProjects]     = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [total, setTotal]           = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage]             = useState(1);
  const [search, setSearch]         = useState('');
  const [statusFilter, setStatus]   = useState('all');
  const [catFilter, setCatFilter]   = useState('');
  const [isLoading, setLoading]     = useState(true);
  const [formOpen, setFormOpen]     = useState(false);
  const [editItem, setEditItem]     = useState<Project | null>(null);
  const [deleteItem, setDeleteItem] = useState<Project | null>(null);
  const [deleteLoading, setDelLoad] = useState(false);
  const [form, setForm]             = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors]         = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading]   = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const [activeTab, setActiveTab]   = useState<'basic' | 'media' | 'buttons'>('basic');
  const searchTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const isMount      = useRef(true);
  const LIMIT = 12;

  const fetchProjects = useCallback(async (pg = page, q = search, st = statusFilter, cat = catFilter) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(pg), limit: String(LIMIT), search: q, status: st });
      if (cat) params.set('categoryId', cat);
      const res  = await fetch(`/api/admin/portfolio/projects?${params}`);
      const data = await res.json();
      if (data.success) { setProjects(data.data); setTotal(data.total); setTotalPages(data.totalPages); }
    } finally { setLoading(false); }
  }, [page, search, statusFilter, catFilter]);

  const fetchCategories = async () => {
    const res  = await fetch('/api/admin/portfolio/categories?limit=100&status=active');
    const data = await res.json();
    if (data.success) setCategories(data.data);
  };

  useEffect(() => {
    let ignore = false;
    fetchCategories().then(() => { if (ignore) return; });
    return () => { ignore = true; };
  }, []); // eslint-disable-line

  useEffect(() => {
    let ignore = false;
    fetchProjects(page, search, statusFilter, catFilter).catch(()=>{});
    return () => { ignore = true; };
  }, [page, statusFilter, catFilter]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => { setPage(1); fetchProjects(1, search, statusFilter, catFilter); }, 400);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const openCreate = () => { setEditItem(null); setForm(EMPTY_FORM); setErrors({}); setSlugManual(false); setActiveTab('basic'); setFormOpen(true); };
  const openEdit = (item: Project) => {
    setEditItem(item);
    setForm({
      title: item.title, slug: item.slug, description: item.description,
      thumbnail: item.thumbnail, categoryId: item.categoryId?._id ?? '',
      technologies: item.technologies,
      buttons: item.buttons.map(b => ({ ...b })),
      isFeatured: item.isFeatured, isActive: item.isActive, order: String(item.order),
    });
    setErrors({}); setSlugManual(true); setActiveTab('basic'); setFormOpen(true);
  };

  const handleTitleChange = (title: string) => {
    setForm(f => ({ ...f, title, ...(!slugManual || !editItem ? { slug: slugify(title) } : {}) }));
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const url = await uploadFile(file);
    setUploading(false);
    if (url) setForm(f => ({ ...f, thumbnail: url }));
    else toast('error', 'Upload failed', 'Invalid image or file too large (max 5 MB)');
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.slug.trim()) e.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(form.slug)) e.slug = 'Slug: lowercase, numbers, hyphens only';
    if (!form.thumbnail.trim()) e.thumbnail = 'Thumbnail is required';
    form.buttons.forEach((btn, i) => {
      if (!btn.label.trim()) e[`btn_${i}_label`] = 'Required';
      if (!btn.url.trim()) e[`btn_${i}_url`] = 'Required';
      else {
        try { new URL(btn.url); } catch { e[`btn_${i}_url`] = 'Invalid URL'; }
      }
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const payload = {
      title: form.title, slug: form.slug, description: form.description,
      thumbnail: form.thumbnail, categoryId: form.categoryId || null,
      technologies: form.technologies,
      buttons: form.buttons.map((b, i) => ({ ...b, order: i })),
      isFeatured: form.isFeatured, isActive: form.isActive, order: parseInt(form.order) || 0,
    };
    const url    = editItem ? `/api/admin/portfolio/projects/${editItem._id}` : '/api/admin/portfolio/projects';
    const method = editItem ? 'PATCH' : 'POST';
    const res    = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data   = await res.json();
    setSubmitting(false);
    if (data.success) {
      toast('success', editItem ? 'Project updated' : 'Project created');
      setFormOpen(false); fetchProjects(page, search, statusFilter, catFilter);
    } else {
      if (data.message.includes('Slug')) setErrors(e => ({ ...e, slug: data.message }));
      else toast('error', 'Save failed', data.message);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoad(true);
    const res  = await fetch(`/api/admin/portfolio/projects/${deleteItem._id}`, { method: 'DELETE' });
    const data = await res.json();
    setDelLoad(false); setDeleteItem(null);
    if (data.success) { toast('success', 'Project deleted'); fetchProjects(page, search, statusFilter, catFilter); }
    else toast('error', 'Delete failed', data.message);
  };

  const toggleStatus = async (item: Project, field: 'isActive' | 'isFeatured') => {
    const res  = await fetch(`/api/admin/portfolio/projects/${item._id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ [field]: !item[field] }) });
    const data = await res.json();
    if (data.success) { toast('success', 'Updated'); fetchProjects(page, search, statusFilter, catFilter); }
    else toast('error', 'Update failed');
  };

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Portfolio Projects</span>
            <span className={s.cmsHeaderBreadcrumb}>Portfolio / Projects</span>
          </div>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Project</button>
        </header>

        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input className={s.searchInput} placeholder="Search projects…" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <select className={s.filterSelect} value={statusFilter} onChange={e => { setStatus(e.target.value); setPage(1); }}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <select className={s.filterSelect} value={catFilter} onChange={e => { setCatFilter(e.target.value); setPage(1); }}>
                <option value="">All Categories</option>
                {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            </div>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{total} project{total !== 1 ? 's' : ''}</span>
          </div>

          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th style={{ width: 64 }}>Thumb</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Technologies</th>
                  <th style={{ width: 80 }}>Featured</th>
                  <th style={{ width: 100 }}>Status</th>
                  <th style={{ width: 110 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i} className={s.skeletonRow}>
                    <td><div className={s.skeleton} style={{ width: 56, height: 40 }} /></td>
                    {Array.from({ length: 6 }).map((__, j) => <td key={j}><div className={s.skeleton} style={{ width: '70%' }} /></td>)}
                  </tr>
                )) : projects.length === 0 ? (
                  <tr><td colSpan={7}>
                    <div className={s.emptyState}>
                      <div className={s.emptyIcon}><BriefcaseIcon /></div>
                      <div className={s.emptyTitle}>No projects yet</div>
                      <div className={s.emptyDesc}>Add your first portfolio project to showcase your work.</div>
                      <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Project</button>
                    </div>
                  </td></tr>
                ) : projects.map(item => (
                  <tr key={item._id}>
                    <td>
                      {item.thumbnail
                        ? <img src={item.thumbnail} alt={item.title} className={s.thumbPreview} />
                        : <div className={s.thumbPlaceholder}><ImageIcon /></div>}
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{item.slug}</div>
                    </td>
                    <td style={{ color: item.categoryId ? 'var(--color-text-secondary)' : 'var(--color-text-muted)', fontSize: 12 }}>
                      {item.categoryId?.name ?? <em>Uncategorised</em>}
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {item.technologies.slice(0, 3).map(t => (
                          <span key={t} style={{ fontSize: 11, padding: '1px 6px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 4, color: 'var(--color-text-secondary)' }}>{t}</span>
                        ))}
                        {item.technologies.length > 3 && <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>+{item.technologies.length - 3}</span>}
                      </div>
                    </td>
                    <td>
                      <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} title="Toggle featured" onClick={() => toggleStatus(item, 'isFeatured')}
                        style={{ color: item.isFeatured ? 'var(--color-warning)' : 'var(--color-text-muted)' }}>
                        <StarIcon />
                      </button>
                    </td>
                    <td>
                      <span className={`${s.badge} ${item.isActive ? s.badgeActive : s.badgeInactive}`} style={{ cursor: 'pointer' }} onClick={() => toggleStatus(item, 'isActive')}>
                        {item.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <div className={s.actions}>
                        <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} title="Edit" onClick={() => openEdit(item)}><EditIcon /></button>
                        <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} title="Delete" onClick={() => setDeleteItem(item)} style={{ color: 'var(--color-danger)' }}><TrashIcon /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} total={total} limit={LIMIT} onPageChange={setPage} />
          </div>
        </main>
      </div>

      {/* Full-page form drawer */}
      {formOpen && (
        <div className={s.modalOverlay} onClick={() => setFormOpen(false)}>
          <div className={`${s.modal} ${s.modalLg}`} onClick={e => e.stopPropagation()} style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            <div className={s.modalHeader}>
              <div>
                <div className={s.modalTitle}>{editItem ? 'Edit Project' : 'New Project'}</div>
                <div className={s.modalSubtitle}>Fill in your portfolio project details.</div>
              </div>
              <button className={s.modalClose} onClick={() => setFormOpen(false)}><XIcon /></button>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 0, padding: '0 28px', borderBottom: '1px solid var(--color-border)' }}>
              {(['basic', 'media', 'buttons'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '10px 16px', border: 'none', cursor: 'pointer', background: 'none',
                    fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-sans)',
                    color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    borderBottom: `2px solid ${activeTab === tab ? 'var(--color-primary)' : 'transparent'}`,
                    marginBottom: -1,
                  }}
                >
                  {tab === 'basic' ? 'Details' : tab === 'media' ? 'Media' : `Buttons (${form.buttons.length})`}
                </button>
              ))}
            </div>

            <div className={s.modalBody} style={{ overflowY: 'auto', flex: 1 }}>
              {/* ── Tab: Basic ── */}
              {activeTab === 'basic' && (
                <>
                  <div className={s.formGrid}>
                    <div className={`${s.formGroup} ${s.formGridFull}`}>
                      <label className={s.formLabel}>Project Title <span className={s.formRequired}>*</span></label>
                      <input className={`${s.formInput} ${errors.title ? s.hasError : ''}`} value={form.title} onChange={e => handleTitleChange(e.target.value)} placeholder="e.g. Damru Restaurant Website" />
                      {errors.title && <span className={s.formError}>{errors.title}</span>}
                    </div>
                    <div className={`${s.formGroup} ${s.formGridFull}`}>
                      <label className={s.formLabel}>Slug <span className={s.formRequired}>*</span></label>
                      <input className={`${s.formInput} ${errors.slug ? s.hasError : ''}`} value={form.slug}
                        onChange={e => { setSlugManual(true); setForm(f => ({ ...f, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })); }}
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }} placeholder="auto-generated-from-title"
                      />
                      {errors.slug ? <span className={s.formError}>{errors.slug}</span> : <span className={s.formHint}>Auto-generated. Must be unique.</span>}
                    </div>
                    <div className={s.formGroup}>
                      <label className={s.formLabel}>Category</label>
                      <select className={s.formSelect} value={form.categoryId} onChange={e => setForm(f => ({ ...f, categoryId: e.target.value }))}>
                        <option value="">— No category —</option>
                        {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                      </select>
                    </div>
                    <div className={s.formGroup}>
                      <label className={s.formLabel}>Display Order</label>
                      <input className={s.formInput} type="number" min="0" value={form.order} onChange={e => setForm(f => ({ ...f, order: e.target.value }))} />
                    </div>
                    <div className={`${s.formGroup} ${s.formGridFull}`}>
                      <label className={s.formLabel}>Description</label>
                      <textarea className={s.formTextarea} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Describe the project…" rows={4} />
                    </div>
                    <div className={`${s.formGroup} ${s.formGridFull}`}>
                      <label className={s.formLabel}>Technologies Used</label>
                      <TagInput value={form.technologies} onChange={v => setForm(f => ({ ...f, technologies: v }))} />
                      <span className={s.formHint}>Type a technology name and press Enter or comma to add. Up to 30.</span>
                    </div>
                    <div className={s.formGroup}>
                      <label className={s.toggleWrapper}>
                        <span className={s.toggle}>
                          <input type="checkbox" checked={form.isFeatured} onChange={e => setForm(f => ({ ...f, isFeatured: e.target.checked }))} />
                          <span className={s.toggleSlider} />
                        </span>
                        <span className={s.toggleLabel}>Featured Project</span>
                      </label>
                    </div>
                    <div className={s.formGroup}>
                      <label className={s.toggleWrapper}>
                        <span className={s.toggle}>
                          <input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} />
                          <span className={s.toggleSlider} />
                        </span>
                        <span className={s.toggleLabel}>{form.isActive ? 'Active' : 'Inactive'}</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* ── Tab: Media ── */}
              {activeTab === 'media' && (
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Thumbnail Image <span className={s.formRequired}>*</span></label>
                  {form.thumbnail ? (
                    <div className={s.uploadPreview}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={form.thumbnail} alt="thumbnail" className={s.uploadPreviewImg} style={{ height: 200 }} />
                      <div className={s.uploadPreviewOverlay}>
                        <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={() => setForm(f => ({ ...f, thumbnail: '' }))} type="button">
                          Remove Image
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={`${s.uploadArea} ${errors.thumbnail ? s.hasError : ''}`} style={{ minHeight: 160 }}>
                      <div className={s.uploadAreaIcon}>{uploading ? <span style={{ fontSize: 13, color: 'var(--color-primary)' }}>Uploading…</span> : <UploadIcon />}</div>
                      <div className={s.uploadAreaText}>Click or drag to upload thumbnail</div>
                      <div className={s.uploadAreaHint}>JPEG, PNG, WebP, GIF · Max 5 MB</div>
                      <input className={s.uploadInput} type="file" accept="image/*" disabled={uploading}
                        onChange={e => { const f = e.target.files?.[0]; if (f) handleUpload(f); e.target.value = ''; }}
                      />
                    </div>
                  )}
                  {errors.thumbnail && <span className={s.formError}>{errors.thumbnail}</span>}
                </div>
              )}

              {/* ── Tab: Buttons ── */}
              {activeTab === 'buttons' && (
                <div>
                  <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16, lineHeight: 1.6 }}>
                    Add optional action buttons to this project card. Examples: &quot;Visit Website&quot;, &quot;View Case Study&quot;, &quot;Live Demo&quot;.
                    Projects can have no buttons, one button, or multiple.
                  </p>
                  <ButtonsEditor value={form.buttons} onChange={v => setForm(f => ({ ...f, buttons: v }))} />
                  {Object.entries(errors).filter(([k]) => k.startsWith('btn_')).map(([k, v]) => (
                    <div key={k} className={s.formError} style={{ marginTop: 4 }}>{v}</div>
                  ))}
                </div>
              )}
            </div>

            <div className={s.modalFooter}>
              <button className={`${s.btn} ${s.btnSecondary}`} onClick={() => setFormOpen(false)} disabled={submitting}>Cancel</button>
              <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleSubmit} disabled={submitting || uploading}>
                {submitting ? 'Saving…' : editItem ? 'Save Changes' : 'Create Project'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteItem && (
        <ConfirmDeleteModal
          title="Delete Project?"
          message={`"${deleteItem.title}" will be permanently removed.`}
          isLoading={deleteLoading}
          onConfirm={handleDelete}
          onCancel={() => setDeleteItem(null)}
        />
      )}
    </div>
  );
}

export default function ProjectCMS() {
  return <ToastProvider><ProjectCMSInner /></ToastProvider>;
}

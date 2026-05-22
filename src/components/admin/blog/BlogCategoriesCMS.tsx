'use client';

import { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import s from '@/components/admin/portfolio/styles/shared.module.css';

const PlusIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const EditIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const XIcon      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const TagIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1" fill="currentColor"/></svg>;

interface Category { _id: string; name: string; slug: string; description: string; isActive: boolean; postCount: number; order: number; }
interface Form { name: string; slug: string; description: string; isActive: boolean; }
const EMPTY: Form = { name: '', slug: '', description: '', isActive: true };

function toSlug(s: string) { return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

function BlogCategoriesCMSInner() {
  const { toast } = useToast();
  const [cats, setCats]           = useState<Category[]>([]);
  const [loading, setLoading]     = useState(true);
  const [search, setSearch]       = useState('');
  const [formOpen, setFormOpen]   = useState(false);
  const [editItem, setEditItem]   = useState<Category | null>(null);
  const [deleteItem, setDeleteItem] = useState<Category | null>(null);
  const [delLoading, setDelLoading] = useState(false);
  const [form, setForm]           = useState<Form>(EMPTY);
  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const slugEdited = useRef(false);
  const isMount = useRef(true);

  const fetch_ = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/blog/categories');
    const d = await res.json();
    if (d.success) setCats(d.data);
    setLoading(false);
  };

  useEffect(() => { fetch_(); }, []); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => fetch_(), 350);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const openCreate = () => { setEditItem(null); setForm(EMPTY); setErrors({}); slugEdited.current = false; setFormOpen(true); };
  const openEdit   = (c: Category) => { setEditItem(c); setForm({ name:c.name, slug:c.slug, description:c.description, isActive:c.isActive }); setErrors({}); slugEdited.current = true; setFormOpen(true); };

  const handleNameChange = (val: string) => {
    setForm(f => ({ ...f, name: val, ...(!slugEdited.current ? { slug: toSlug(val) } : {}) }));
  };
  const handleSlugChange = (val: string) => {
    slugEdited.current = true;
    setForm(f => ({ ...f, slug: toSlug(val) }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.slug.trim()) e.slug = 'Slug is required';
    if (!/^[a-z0-9-]+$/.test(form.slug)) e.slug = 'Slug: lowercase, numbers, hyphens only';
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const url    = editItem ? `/api/admin/blog/categories/${editItem._id}` : '/api/admin/blog/categories';
    const method = editItem ? 'PATCH' : 'POST';
    const res    = await fetch(url, { method, headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
    const d      = await res.json(); setSubmitting(false);
    if (d.success) { toast('success', editItem ? 'Category updated' : 'Category created'); setFormOpen(false); fetch_(); }
    else toast('error', d.message || 'Save failed');
  };

  const handleDelete = async () => {
    if (!deleteItem) return; setDelLoading(true);
    const res = await fetch(`/api/admin/blog/categories/${deleteItem._id}`, { method:'DELETE' });
    const d = await res.json(); setDelLoading(false); setDeleteItem(null);
    if (d.success) { toast('success', 'Deleted'); fetch_(); } else toast('error', 'Delete failed');
  };

  const toggleStatus = async (c: Category) => {
    const res = await fetch(`/api/admin/blog/categories/${c._id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ isActive:!c.isActive }) });
    const d = await res.json();
    if (d.success) { toast('success', 'Updated'); fetch_(); } else toast('error', 'Failed');
  };

  const displayed = cats.filter(c => {
    const q = search.toLowerCase();
    return !q || c.name.toLowerCase().includes(q) || c.slug.includes(q);
  });

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Blog Categories</span>
            <span className={s.cmsHeaderBreadcrumb}>Blog / Categories</span>
          </div>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Category</button>
        </header>

        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input className={s.searchInput} placeholder="Search categories…" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
            <span style={{ fontSize:13, color:'var(--color-text-muted)' }}>{displayed.length} categor{displayed.length !== 1 ? 'ies' : 'y'}</span>
          </div>

          <div className={s.tableWrapper}>
            {loading ? (
              <table className={s.table}><tbody>{Array.from({length:4}).map((_,i) => <tr key={i} className={s.skeletonRow}>{Array.from({length:5}).map((__,j) => <td key={j}><div className={s.skeleton} style={{width:'80%'}}/></td>)}</tr>)}</tbody></table>
            ) : displayed.length === 0 ? (
              <div className={s.emptyState}>
                <div className={s.emptyIcon}><TagIcon /></div>
                <div className={s.emptyTitle}>No blog categories yet</div>
                <div className={s.emptyDesc}>Add categories to organise your blog posts.</div>
                <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Category</button>
              </div>
            ) : (
              <table className={s.table}>
                <thead><tr>
                  <th className={s.th}>Name</th>
                  <th className={s.th}>Slug</th>
                  <th className={s.th}>Posts</th>
                  <th className={s.th}>Status</th>
                  <th className={s.th} style={{textAlign:'right'}}>Actions</th>
                </tr></thead>
                <tbody>
                  {displayed.map(cat => (
                    <tr key={cat._id} className={s.tr}>
                      <td className={s.td} style={{fontWeight:600}}>{cat.name}</td>
                      <td className={s.td}><code className={s.slugBadge}>{cat.slug}</code></td>
                      <td className={s.td}>{cat.postCount ?? 0}</td>
                      <td className={s.td}>
                        <span className={`${s.badge} ${cat.isActive ? s.badgeActive : s.badgeInactive}`} style={{cursor:'pointer'}} onClick={() => toggleStatus(cat)}>
                          {cat.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className={s.td} style={{textAlign:'right'}}>
                        <div className={s.actions}>
                          <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={() => openEdit(cat)}><EditIcon /> Edit</button>
                          <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon} ${s.btnSm}`} style={{color:'var(--color-danger)'}} onClick={() => setDeleteItem(cat)}><TrashIcon /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      {formOpen && (
        <div className={s.modalOverlay} onClick={() => setFormOpen(false)}>
          <div className={s.modal} onClick={e => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <div><div className={s.modalTitle}>{editItem ? 'Edit Category' : 'New Blog Category'}</div><div className={s.modalSubtitle}>Used to group blog posts in the sidebar</div></div>
              <button className={s.modalClose} onClick={() => setFormOpen(false)}><XIcon /></button>
            </div>
            <div className={s.modalBody}>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Name <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.name ? s.hasError : ''}`} value={form.name} onChange={e => handleNameChange(e.target.value)} placeholder="e.g. IT & Technology" />
                {errors.name && <span className={s.formError}>{errors.name}</span>}
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Slug <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.slug ? s.hasError : ''}`} value={form.slug} onChange={e => handleSlugChange(e.target.value)} placeholder="it-technology" />
                {errors.slug && <span className={s.formError}>{errors.slug}</span>}
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Description</label>
                <textarea className={s.formTextarea} value={form.description} onChange={e => setForm(f => ({...f, description:e.target.value}))} placeholder="Optional — shown in category meta description" rows={2} />
              </div>
              <div className={s.formGroup}>
                <label className={s.toggleWrapper}>
                  <span className={s.toggle}><input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({...f, isActive:e.target.checked}))}/><span className={s.toggleSlider}/></span>
                  <span className={s.toggleLabel}>{form.isActive ? 'Active — shown in sidebar' : 'Inactive — hidden'}</span>
                </label>
              </div>
            </div>
            <div className={s.modalFooter}>
              <button className={`${s.btn} ${s.btnSecondary}`} onClick={() => setFormOpen(false)} disabled={submitting}>Cancel</button>
              <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleSubmit} disabled={submitting}>{submitting ? 'Saving…' : editItem ? 'Save Changes' : 'Create Category'}</button>
            </div>
          </div>
        </div>
      )}

      {deleteItem && <ConfirmDeleteModal title="Delete Category?" message={`"${deleteItem.name}" will be permanently deleted. Posts in this category will be uncategorized.`} isLoading={delLoading} onConfirm={handleDelete} onCancel={() => setDeleteItem(null)} />}
    </div>
  );
}

export default function BlogCategoriesCMS() { return <ToastProvider><BlogCategoriesCMSInner /></ToastProvider>; }

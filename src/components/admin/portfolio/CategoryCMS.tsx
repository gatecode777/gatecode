'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import Pagination from '@/components/admin/shared/Pagination';
import s from './styles/shared.module.css';

const PlusIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const EditIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const TagIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;

interface Category {
  _id: string; name: string; slug: string; description: string;
  icon: string | null; order: number; isActive: boolean; createdAt: string;
}

interface FormData {
  name: string; slug: string; description: string; icon: string; order: string; isActive: boolean;
}

const EMPTY: FormData = { name: '', slug: '', description: '', icon: '', order: '0', isActive: true };

function generateSlug(name: string) {
  return name.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '');
}

function CategoryCMSInner() {
  const { toast } = useToast();
  const [cats, setCats]             = useState<Category[]>([]);
  const [total, setTotal]           = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage]             = useState(1);
  const [search, setSearch]         = useState('');
  const [statusFilter, setStatus]   = useState('all');
  const [isLoading, setLoading]     = useState(true);
  const [formOpen, setFormOpen]     = useState(false);
  const [editItem, setEditItem]     = useState<Category | null>(null);
  const [deleteItem, setDeleteItem] = useState<Category | null>(null);
  const [deleteLoading, setDelLoad] = useState(false);
  const [form, setForm]             = useState<FormData>(EMPTY);
  const [errors, setErrors]         = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const isMount      = useRef(true);
  const LIMIT = 15;

  const fetchCats = useCallback(async (pg: number = page, q: string = search, st: string = statusFilter) => {
    setLoading(true);
    try {
      const res  = await fetch(`/api/admin/portfolio/categories?page=${pg}&limit=${LIMIT}&search=${encodeURIComponent(q)}&status=${st}`);
      const data = await res.json();
      if (data.success) { setCats(data.data as Category[]); setTotal(data.total as number); setTotalPages(data.totalPages as number); }
    } finally { setLoading(false); }
  }, [page, search, statusFilter]);

  useEffect(() => {
    let ignore = false;
    fetchCats(page, search, statusFilter).catch(()=>{});
    return () => { ignore = true; };
  }, [page, statusFilter]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => { setPage(1); fetchCats(1, search, statusFilter); }, 400);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const openCreate = () => { setEditItem(null); setForm(EMPTY); setErrors({}); setSlugManual(false); setFormOpen(true); };
  const openEdit   = (item: Category) => {
    setEditItem(item);
    setForm({ name: item.name, slug: item.slug, description: item.description, icon: item.icon ?? '', order: String(item.order), isActive: item.isActive });
    setErrors({}); setSlugManual(true); setFormOpen(true);
  };

  const handleNameChange = (name: string) => {
    setForm(f => ({ ...f, name, ...(!slugManual || !editItem ? { slug: generateSlug(name) } : {}) }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.slug.trim()) e.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(form.slug)) e.slug = 'Slug: lowercase, numbers, hyphens only';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const payload = { name: form.name, slug: form.slug, description: form.description, icon: form.icon || null, order: parseInt(form.order) || 0, isActive: form.isActive };
    const url     = editItem ? `/api/admin/portfolio/categories/${editItem._id}` : '/api/admin/portfolio/categories';
    const method  = editItem ? 'PATCH' : 'POST';
    const res     = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data    = await res.json();
    setSubmitting(false);
    if (data.success) { toast('success', editItem ? 'Category updated' : 'Category created'); setFormOpen(false); fetchCats(page, search, statusFilter); }
    else { if (data.message.includes('Slug')) setErrors(e => ({ ...e, slug: data.message })); else toast('error', 'Save failed', data.message); }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoad(true);
    const res  = await fetch(`/api/admin/portfolio/categories/${deleteItem._id}`, { method: 'DELETE' });
    const data = await res.json();
    setDelLoad(false); setDeleteItem(null);
    if (data.success) { toast('success', 'Category deleted'); fetchCats(page, search, statusFilter); }
    else toast('error', 'Delete failed', data.message);
  };

  const toggleStatus = async (item: Category) => {
    const res  = await fetch(`/api/admin/portfolio/categories/${item._id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !item.isActive }) });
    const data = await res.json();
    if (data.success) { toast('success', `Category ${!item.isActive ? 'activated' : 'deactivated'}`); fetchCats(page, search, statusFilter); }
    else toast('error', 'Update failed');
  };

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Portfolio Categories</span>
            <span className={s.cmsHeaderBreadcrumb}>Portfolio / Categories</span>
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
              <select className={s.filterSelect} value={statusFilter} onChange={e => { setStatus(e.target.value); setPage(1); }}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{total} categor{total !== 1 ? 'ies' : 'y'}</span>
          </div>

          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Description</th>
                  <th className={s.tableThNum} style={{ width: 80 }}>Order</th>
                  <th style={{ width: 100 }}>Status</th>
                  <th style={{ width: 110 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i} className={s.skeletonRow}>
                    {Array.from({ length: 6 }).map((__, j) => <td key={j}><div className={s.skeleton} style={{ width: j === 5 ? 80 : '70%' }} /></td>)}
                  </tr>
                )) : cats.length === 0 ? (
                  <tr><td colSpan={6}>
                    <div className={s.emptyState}>
                      <div className={s.emptyIcon}><TagIcon /></div>
                      <div className={s.emptyTitle}>No categories yet</div>
                      <div className={s.emptyDesc}>Create your first portfolio category.</div>
                      <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Category</button>
                    </div>
                  </td></tr>
                ) : cats.map(item => (
                  <tr key={item._id}>
                    <td style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.name}</td>
                    <td><code style={{ fontSize: 12, background: 'var(--color-bg)', padding: '2px 6px', borderRadius: 4, color: 'var(--color-primary)' }}>{item.slug}</code></td>
                    <td style={{ maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--color-text-muted)' }}>{item.description || '—'}</td>
                    <td className={s.tableTdNum}>{item.order}</td>
                    <td>
                      <span className={`${s.badge} ${item.isActive ? s.badgeActive : s.badgeInactive}`} style={{ cursor: 'pointer' }} onClick={() => toggleStatus(item)}>
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

      {/* Form modal */}
      {formOpen && (
        <div className={s.modalOverlay} onClick={() => setFormOpen(false)}>
          <div className={s.modal} onClick={e => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <div>
                <div className={s.modalTitle}>{editItem ? 'Edit Category' : 'New Category'}</div>
                <div className={s.modalSubtitle}>Portfolio categories group your projects.</div>
              </div>
              <button className={s.modalClose} onClick={() => setFormOpen(false)}><XIcon /></button>
            </div>
            <div className={s.modalBody}>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Name <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.name ? s.hasError : ''}`} value={form.name} onChange={e => handleNameChange(e.target.value)} placeholder="e.g. Web Development" />
                {errors.name && <span className={s.formError}>{errors.name}</span>}
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Slug <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.slug ? s.hasError : ''}`} value={form.slug}
                  onChange={e => { setSlugManual(true); setForm(f => ({ ...f, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })); }}
                  placeholder="e.g. web-development" style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
                />
                {errors.slug ? <span className={s.formError}>{errors.slug}</span> : <span className={s.formHint}>Auto-generated from name. Must be unique.</span>}
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Description</label>
                <textarea className={s.formTextarea} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Optional category description…" rows={3} />
              </div>
              <div className={s.formGrid}>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Display Order</label>
                  <input className={s.formInput} type="number" min="0" value={form.order} onChange={e => setForm(f => ({ ...f, order: e.target.value }))} />
                </div>
                <div className={s.formGroup} style={{ justifyContent: 'flex-end' }}>
                  <label className={s.formLabel}>Status</label>
                  <label className={s.toggleWrapper}>
                    <span className={s.toggle}>
                      <input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} />
                      <span className={s.toggleSlider} />
                    </span>
                    <span className={s.toggleLabel}>{form.isActive ? 'Active' : 'Inactive'}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={s.modalFooter}>
              <button className={`${s.btn} ${s.btnSecondary}`} onClick={() => setFormOpen(false)} disabled={submitting}>Cancel</button>
              <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleSubmit} disabled={submitting}>
                {submitting ? 'Saving…' : editItem ? 'Save Changes' : 'Create Category'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteItem && (
        <ConfirmDeleteModal
          title="Delete Category?"
          message={`"${deleteItem.name}" will be permanently deleted. Projects in this category will become uncategorised.`}
          isLoading={deleteLoading}
          onConfirm={handleDelete}
          onCancel={() => setDeleteItem(null)}
        />
      )}
    </div>
  );
}

export default function CategoryCMS() {
  return <ToastProvider><CategoryCMSInner /></ToastProvider>;
}

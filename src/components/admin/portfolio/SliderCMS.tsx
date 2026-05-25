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
const SlidersIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>;

// ── Types ──────────────────────────────────────────────────────────────────
interface Slider {
  _id: string; title: string; subtitle: string; description: string;
  desktopImage: string; mobileImage: string | null; altText: string;
  order: number; isActive: boolean; createdAt: string;
}

interface FormData {
  title: string; subtitle: string; description: string;
  desktopImage: string; mobileImage: string; altText: string;
  order: string; isActive: boolean;
}

const EMPTY_FORM: FormData = {
  title: '', subtitle: '', description: '',
  desktopImage: '', mobileImage: '', altText: '',
  order: '0', isActive: true,
};

// ── Upload helper ──────────────────────────────────────────────────────────
async function uploadFile(file: File): Promise<string | null> {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
  const data = await res.json();
  return data.success ? data.data.url : null;
}

// ── Inner component (needs toast context) ─────────────────────────────────
function SliderCMSInner() {
  const { toast } = useToast();
  const [sliders, setSliders]       = useState<Slider[]>([]);
  const [total, setTotal]           = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage]             = useState(1);
  const [search, setSearch]         = useState('');
  const [statusFilter, setStatus]   = useState('all');
  const [isLoading, setLoading]     = useState(true);
  const [formOpen, setFormOpen]     = useState(false);
  const [editItem, setEditItem]     = useState<Slider | null>(null);
  const [deleteItem, setDeleteItem] = useState<Slider | null>(null);
  const [deleteLoading, setDelLoad] = useState(false);
  const [formData, setFormData]     = useState<FormData>(EMPTY_FORM);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading]   = useState<'desktop' | 'mobile' | null>(null);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const isMount      = useRef(true);
  const LIMIT = 10;

  const fetchSliders = useCallback(async (pg?: number, q?: string, st?: string) => {
    const _pg = pg ?? page; const _q = q ?? search; const _st = st ?? statusFilter;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/portfolio/slider?page=${_pg}&limit=${LIMIT}&search=${encodeURIComponent(_q)}&status=${_st}`);
      const data = await res.json();
      if (data.success) {
        setSliders(data.data as Slider[]); setTotal(data.total as number); setTotalPages(data.totalPages as number);
      }
    } finally { setLoading(false); }
  }, [page, search, statusFilter]);

  useEffect(() => {
    let ignore = false;
    fetchSliders(page, search, statusFilter).catch(()=>{});
    return () => { ignore = true; };
  }, [page, statusFilter]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => { setPage(1); fetchSliders(1, search, statusFilter); }, 400);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const openCreate = () => { setEditItem(null); setFormData(EMPTY_FORM); setFormErrors({}); setFormOpen(true); };
  const openEdit = (item: Slider) => {
    setEditItem(item);
    setFormData({
      title: item.title, subtitle: item.subtitle, description: item.description,
      desktopImage: item.desktopImage, mobileImage: item.mobileImage ?? '',
      altText: item.altText, order: String(item.order), isActive: item.isActive,
    });
    setFormErrors({}); setFormOpen(true);
  };

  const handleUpload = async (field: 'desktop' | 'mobile', file: File) => {
    setUploading(field);
    const url = await uploadFile(file);
    setUploading(null);
    if (url) setFormData(f => ({ ...f, [field === 'desktop' ? 'desktopImage' : 'mobileImage']: url }));
    else toast('error', 'Upload failed', 'Please try again with a valid image (max 5 MB)');
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.title.trim()) errs.title = 'Title is required';
    if (!formData.desktopImage.trim()) errs.desktopImage = 'Desktop image is required';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const payload = {
      title: formData.title, subtitle: formData.subtitle,
      description: formData.description, desktopImage: formData.desktopImage,
      mobileImage: formData.mobileImage || null, altText: formData.altText,
      order: parseInt(formData.order) || 0, isActive: formData.isActive,
    };
    const url    = editItem ? `/api/admin/portfolio/slider/${editItem._id}` : '/api/admin/portfolio/slider';
    const method = editItem ? 'PATCH' : 'POST';
    const res    = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data   = await res.json();
    setSubmitting(false);
    if (data.success) {
      toast('success', editItem ? 'Slider updated' : 'Slider created');
      setFormOpen(false); fetchSliders(page, search, statusFilter);
    } else {
      toast('error', 'Save failed', data.message);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoad(true);
    const res  = await fetch(`/api/admin/portfolio/slider/${deleteItem._id}`, { method: 'DELETE' });
    const data = await res.json();
    setDelLoad(false);
    setDeleteItem(null);
    if (data.success) { toast('success', 'Slider deleted'); fetchSliders(page, search, statusFilter); }
    else toast('error', 'Delete failed', data.message);
  };

  const toggleStatus = async (item: Slider) => {
    const res  = await fetch(`/api/admin/portfolio/slider/${item._id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !item.isActive }) });
    const data = await res.json();
    if (data.success) { toast('success', `Slider ${!item.isActive ? 'activated' : 'deactivated'}`); fetchSliders(page, search, statusFilter); }
    else toast('error', 'Update failed');
  };

  const ImageUploadField = ({ field, label, value }: { field: 'desktop' | 'mobile'; label: string; value: string }) => (
    <div className={s.formGroup}>
      <label className={s.formLabel}>{label} {field === 'desktop' && <span className={s.formRequired}>*</span>}</label>
      {value ? (
        <div className={s.uploadPreview}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="preview" className={s.uploadPreviewImg} />
          <div className={s.uploadPreviewOverlay}>
            <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
              onClick={() => setFormData(f => ({ ...f, [field === 'desktop' ? 'desktopImage' : 'mobileImage']: '' }))}
            >Remove</button>
          </div>
        </div>
      ) : (
        <div className={`${s.uploadArea} ${formErrors[field === 'desktop' ? 'desktopImage' : 'mobileImage'] ? s.hasError : ''}`}>
          <div className={s.uploadAreaIcon}>{uploading === field ? <span style={{ fontSize: 12, color: 'var(--color-primary)' }}>Uploading…</span> : <UploadIcon />}</div>
          <div className={s.uploadAreaText}>Click or drag to upload</div>
          <div className={s.uploadAreaHint}>JPEG, PNG, WebP, GIF · Max 5 MB</div>
          <input className={s.uploadInput} type="file" accept="image/*" disabled={!!uploading}
            onChange={e => { const f = e.target.files?.[0]; if (f) handleUpload(field, f); e.target.value = ''; }}
          />
        </div>
      )}
      {formErrors[field === 'desktop' ? 'desktopImage' : ''] && <span className={s.formError}>{formErrors.desktopImage}</span>}
    </div>
  );

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Portfolio Slider</span>
            <span className={s.cmsHeaderBreadcrumb}>Portfolio / Slider</span>
          </div>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}>
            <PlusIcon /> Add Slide
          </button>
        </header>

        <main className={s.cmsContent}>
          {/* Toolbar */}
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input className={s.searchInput} placeholder="Search slides…" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <select className={s.filterSelect} value={statusFilter} onChange={e => { setStatus(e.target.value); setPage(1); }}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className={s.toolbarRight}>
              <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{total} slide{total !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Table */}
          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th style={{ width: 72 }}>Image</th>
                  <th>Title</th>
                  <th>Subtitle</th>
                  <th className={s.tableThNum} style={{ width: 80 }}>Order</th>
                  <th style={{ width: 100 }}>Status</th>
                  <th style={{ width: 110 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className={s.skeletonRow}>
                      <td><div className={s.skeleton} style={{ width: 56, height: 40 }} /></td>
                      <td><div className={s.skeleton} style={{ width: '80%' }} /></td>
                      <td><div className={s.skeleton} style={{ width: '60%' }} /></td>
                      <td><div className={s.skeleton} style={{ width: 40, marginLeft: 'auto' }} /></td>
                      <td><div className={s.skeleton} style={{ width: 70 }} /></td>
                      <td><div className={s.skeleton} style={{ width: 80 }} /></td>
                    </tr>
                  ))
                ) : sliders.length === 0 ? (
                  <tr><td colSpan={6}>
                    <div className={s.emptyState}>
                      <div className={s.emptyIcon}><SlidersIcon /></div>
                      <div className={s.emptyTitle}>No slides yet</div>
                      <div className={s.emptyDesc}>Add your first hero slider image to get started.</div>
                      <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Slide</button>
                    </div>
                  </td></tr>
                ) : sliders.map(item => (
                  <tr key={item._id}>
                    <td>
                      {item.desktopImage
                        ? <img src={item.desktopImage} alt={item.altText || item.title} className={s.thumbPreview} />
                        : <div className={s.thumbPlaceholder}><ImageIcon /></div>}
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.title}</td>
                    <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.subtitle || '—'}</td>
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

      {/* Form Modal */}
      {formOpen && (
        <div className={s.modalOverlay} onClick={() => setFormOpen(false)}>
          <div className={`${s.modal} ${s.modalLg}`} onClick={e => e.stopPropagation()} style={{height:'650px', overflow:'auto'}}>
            <div className={s.modalHeader}>
              <div>
                <div className={s.modalTitle}>{editItem ? 'Edit Slide' : 'Add New Slide'}</div>
                <div className={s.modalSubtitle}>Fill in the details for this hero slider item.</div>
              </div>
              <button className={s.modalClose} onClick={() => setFormOpen(false)}><XIcon /></button>
            </div>
            <div className={s.modalBody}>
              <div className={s.formGrid}>
                <div className={s.formGridFull}>
                  <div className={s.formGroup}>
                    <label className={s.formLabel}>Title <span className={s.formRequired}>*</span></label>
                    <input className={`${s.formInput} ${formErrors.title ? s.hasError : ''}`} value={formData.title} onChange={e => setFormData(f => ({ ...f, title: e.target.value }))} placeholder="Slide title…" />
                    {formErrors.title && <span className={s.formError}>{formErrors.title}</span>}
                  </div>
                </div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Subtitle</label>
                  <input className={s.formInput} value={formData.subtitle} onChange={e => setFormData(f => ({ ...f, subtitle: e.target.value }))} placeholder="Optional subtitle…" />
                </div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Alt Text</label>
                  <input className={s.formInput} value={formData.altText} onChange={e => setFormData(f => ({ ...f, altText: e.target.value }))} placeholder="Image alt text…" />
                </div>
                <div className={`${s.formGroup} ${s.formGridFull}`}>
                  <label className={s.formLabel}>Description</label>
                  <textarea className={s.formTextarea} value={formData.description} onChange={e => setFormData(f => ({ ...f, description: e.target.value }))} placeholder="Short description…" rows={3} />
                </div>
                <div>
                  <ImageUploadField field="desktop" label="Desktop Image" value={formData.desktopImage} />
                </div>
                <div>
                  <ImageUploadField field="mobile" label="Mobile Image (optional)" value={formData.mobileImage} />
                </div>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Display Order</label>
                  <input className={s.formInput} type="number" min="0" value={formData.order} onChange={e => setFormData(f => ({ ...f, order: e.target.value }))} />
                </div>
                <div className={s.formGroup} style={{ justifyContent: 'flex-end' }}>
                  <label className={s.formLabel}>Status</label>
                  <label className={s.toggleWrapper}>
                    <span className={s.toggle}>
                      <input type="checkbox" checked={formData.isActive} onChange={e => setFormData(f => ({ ...f, isActive: e.target.checked }))} />
                      <span className={s.toggleSlider} />
                    </span>
                    <span className={s.toggleLabel}>{formData.isActive ? 'Active' : 'Inactive'}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={s.modalFooter}>
              <button className={`${s.btn} ${s.btnSecondary}`} onClick={() => setFormOpen(false)} disabled={submitting}>Cancel</button>
              <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleSubmit} disabled={submitting || !!uploading}>
                {submitting ? 'Saving…' : editItem ? 'Save Changes' : 'Add Slide'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteItem && (
        <ConfirmDeleteModal
          title="Delete Slide?"
          message={`"${deleteItem.title}" will be permanently removed and cannot be recovered.`}
          isLoading={deleteLoading}
          onConfirm={handleDelete}
          onCancel={() => setDeleteItem(null)}
        />
      )}
    </div>
  );
}

export default function SliderCMS() {
  return <ToastProvider><SliderCMSInner /></ToastProvider>;
}

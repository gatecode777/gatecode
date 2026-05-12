'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import Pagination from '@/components/admin/shared/Pagination';
import s from '@/components/admin/portfolio/styles/shared.module.css';

const PlusIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const EditIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const XIcon      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const PageIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
const BrainIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>;

function slugify(s: string) { return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-{2,}/g,'-').replace(/^-|-$/g,''); }

interface TEItem { _id:string; name:string; slug:string; order:number; isActive:boolean; }
interface FormData { name:string; slug:string; order:string; isActive:boolean; }
const EMPTY: FormData = { name:'', slug:'', order:'0', isActive:true };

function TEListInner() {
  const router = useRouter();
  const { toast } = useToast();
  const [items, setItems]           = useState<TEItem[]>([]);
  const [total, setTotal]           = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage]             = useState(1);
  const [search, setSearch]         = useState('');
  const [statusF, setStatusF]       = useState('all');
  const [loading, setLoading]       = useState(true);
  const [formOpen, setFormOpen]     = useState(false);
  const [editItem, setEditItem]     = useState<TEItem|null>(null);
  const [deleteItem, setDeleteItem] = useState<TEItem|null>(null);
  const [delLoading, setDelLoading] = useState(false);
  const [form, setForm]             = useState<FormData>(EMPTY);
  const [errors, setErrors]         = useState<Record<string,string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const [pageMap, setPageMap]       = useState<Record<string,string>>({});
  const isMount = useRef(true);
  const LIMIT = 15;

  const fetchItems = async (pg: number, q: string, st: string) => {
    setLoading(true);
    try {
      const p = new URLSearchParams({ page:String(pg), limit:String(LIMIT), search:q, status:st });
      const res = await fetch(`/api/admin/technical-expertise?${p}`);
      const d = await res.json();
      if (d.success) { setItems(d.data as TEItem[]); setTotal(d.total as number); setTotalPages(d.totalPages as number); }
    } finally { setLoading(false); }
  };

  const fetchPageMap = async () => {
    const res = await fetch('/api/admin/technical-expertise/pages?limit=500');
    const d = await res.json();
    if (d.success) {
      const map: Record<string,string> = {};
      for (const p of d.data) {
        const eid = String(p.expertiseId?._id ?? p.expertiseId ?? '');
        if (eid) map[eid] = p._id as string;
      }
      setPageMap(map);
    }
  };

  useEffect(() => {
    let ignore = false;
    fetchItems(page, search, statusF).catch(() => {});
    if (!ignore) fetchPageMap();
    return () => { ignore = true; };
  }, [page, statusF]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => { setPage(1); fetchItems(1, search, statusF); }, 400);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const openCreate = () => { setEditItem(null); setForm(EMPTY); setErrors({}); setSlugManual(false); setFormOpen(true); };
  const openEdit   = (item: TEItem) => { setEditItem(item); setForm({ name:item.name, slug:item.slug, order:String(item.order), isActive:item.isActive }); setErrors({}); setSlugManual(true); setFormOpen(true); };

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.slug.trim()) e.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(form.slug)) e.slug = 'Lowercase, numbers, hyphens only';
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const payload = { name:form.name, slug:form.slug, order:parseInt(form.order)||0, isActive:form.isActive };
    const url = editItem ? `/api/admin/technical-expertise/${editItem._id}` : '/api/admin/technical-expertise';
    const method = editItem ? 'PATCH' : 'POST';
    const res = await fetch(url, { method, headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
    const d = await res.json(); setSubmitting(false);
    if (d.success) {
      toast('success', editItem ? 'Item updated' : 'Item created');
      setFormOpen(false); fetchItems(page, search, statusF);
    } else {
      if (d.message?.includes('Slug')) setErrors(e=>({...e,slug:d.message}));
      else toast('error', 'Save failed', d.message);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoading(true);
    const res = await fetch(`/api/admin/technical-expertise/${deleteItem._id}`, { method:'DELETE' });
    const d = await res.json(); setDelLoading(false); setDeleteItem(null);
    if (d.success) { toast('success', 'Deleted'); fetchItems(page, search, statusF); }
    else toast('error', 'Delete failed');
  };

  const toggleStatus = async (item: TEItem) => {
    const res = await fetch(`/api/admin/technical-expertise/${item._id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({isActive:!item.isActive}) });
    const d = await res.json();
    if (d.success) { toast('success', 'Updated'); fetchItems(page, search, statusF); }
    else toast('error', 'Update failed');
  };

  const handleCreatePage = async (item: TEItem) => {
    const res = await fetch('/api/admin/technical-expertise/pages/find-or-create', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ expertiseId: item._id, slug: item.slug }),
    });
    const d = await res.json();
    if (d.success) { toast('success', 'Page ready'); router.push(`/admin/technical-expertise/pages/${d.data._id}`); }
    else toast('error', 'Failed to create page', d.message);
  };

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Technical Expertise</span>
            <span className={s.cmsHeaderBreadcrumb}>Technical Expertise / Menu Items</span>
          </div>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Item</button>
        </header>

        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input className={s.searchInput} placeholder="Search items…" value={search} onChange={ev => setSearch(ev.target.value)} />
              </div>
              <select className={s.filterSelect} value={statusF} onChange={ev => { setStatusF(ev.target.value); setPage(1); }}>
                <option value="all">All Status</option><option value="active">Active</option><option value="inactive">Inactive</option>
              </select>
            </div>
            <span style={{ fontSize:13, color:'var(--color-text-muted)' }}>{total} item{total!==1?'s':''}</span>
          </div>

          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Slug</th>
                  <th className={s.tableThNum} style={{ width:70 }}>Order</th>
                  <th style={{ width:100 }}>Status</th>
                  <th style={{ width:160 }}>Detail Page</th>
                  <th style={{ width:110 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({length:6}).map((_,i) => (
                    <tr key={i} className={s.skeletonRow}>
                      {Array.from({length:6}).map((__,j) => <td key={j}><div className={s.skeleton} style={{width:'70%'}}/></td>)}
                    </tr>
                  ))
                ) : items.length === 0 ? (
                  <tr><td colSpan={6}>
                    <div className={s.emptyState}>
                      <div className={s.emptyIcon}><BrainIcon /></div>
                      <div className={s.emptyTitle}>No items yet</div>
                      <div className={s.emptyDesc}>Add Technical Expertise menu items (e.g. Web Developers, App Developers).</div>
                      <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon /> Add Item</button>
                    </div>
                  </td></tr>
                ) : items.map(item => {
                  const pageId = pageMap[item._id];
                  return (
                    <tr key={item._id}>
                      <td style={{ fontWeight:600, color:'var(--color-text-primary)' }}>{item.name}</td>
                      <td><code style={{ fontSize:11, background:'var(--color-bg)', padding:'2px 6px', borderRadius:4, color:'var(--color-primary)' }}>{item.slug}</code></td>
                      <td className={s.tableTdNum}>{item.order}</td>
                      <td><span className={`${s.badge} ${item.isActive?s.badgeActive:s.badgeInactive}`} style={{ cursor:'pointer' }} onClick={() => toggleStatus(item)}>{item.isActive?'Active':'Inactive'}</span></td>
                      <td>
                        {pageId
                          ? <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={() => router.push(`/admin/technical-expertise/pages/${pageId}`)}><PageIcon /> Edit Page</button>
                          : <button className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`} onClick={() => handleCreatePage(item)}><PlusIcon /> Create Page</button>
                        }
                      </td>
                      <td>
                        <div className={s.actions}>
                          <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} onClick={() => openEdit(item)}><EditIcon /></button>
                          <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} style={{ color:'var(--color-danger)' }} onClick={() => setDeleteItem(item)}><TrashIcon /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} total={total} limit={LIMIT} onPageChange={setPage} />
          </div>
        </main>
      </div>

      {/* Modal */}
      {formOpen && (
        <div className={s.modalOverlay} onClick={() => setFormOpen(false)}>
          <div className={s.modal} onClick={ev => ev.stopPropagation()}>
            <div className={s.modalHeader}>
              <div>
                <div className={s.modalTitle}>{editItem ? 'Edit Item' : 'New Menu Item'}</div>
                <div className={s.modalSubtitle}>Technical Expertise header dropdown item</div>
              </div>
              <button className={s.modalClose} onClick={() => setFormOpen(false)}><XIcon /></button>
            </div>
            <div className={s.modalBody}>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Name <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.name?s.hasError:''}`} value={form.name}
                  onChange={ev => { const n = ev.target.value; setForm(f => ({ ...f, name:n, ...(!slugManual?{slug:slugify(n)}:{}) })); }}
                  placeholder="e.g. Web Developers" />
                {errors.name && <span className={s.formError}>{errors.name}</span>}
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Slug <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.slug?s.hasError:''}`} value={form.slug}
                  onChange={ev => { setSlugManual(true); setForm(f => ({ ...f, slug:ev.target.value.toLowerCase().replace(/[^a-z0-9-]/g,'') })); }}
                  placeholder="web-developers" style={{ fontFamily:'var(--font-mono)', fontSize:12 }} />
                {errors.slug ? <span className={s.formError}>{errors.slug}</span> : <span className={s.formHint}>Auto-generated. Must be unique.</span>}
              </div>
              <div className={s.formGrid}>
                <div className={s.formGroup}>
                  <label className={s.formLabel}>Sort Order</label>
                  <input className={s.formInput} type="number" min="0" value={form.order} onChange={ev => setForm(f => ({ ...f, order:ev.target.value }))} />
                </div>
                <div className={s.formGroup} style={{ justifyContent:'flex-end' }}>
                  <label className={s.formLabel}>Status</label>
                  <label className={s.toggleWrapper}>
                    <span className={s.toggle}><input type="checkbox" checked={form.isActive} onChange={ev => setForm(f => ({ ...f, isActive:ev.target.checked }))}/><span className={s.toggleSlider}/></span>
                    <span className={s.toggleLabel}>{form.isActive?'Active':'Inactive'}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={s.modalFooter}>
              <button className={`${s.btn} ${s.btnSecondary}`} onClick={() => setFormOpen(false)} disabled={submitting}>Cancel</button>
              <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleSubmit} disabled={submitting}>{submitting?'Saving…':editItem?'Save Changes':'Create'}</button>
            </div>
          </div>
        </div>
      )}

      {deleteItem && (
        <ConfirmDeleteModal title="Delete Item?" message={`"${deleteItem.name}" will be permanently deleted.`} isLoading={delLoading} onConfirm={handleDelete} onCancel={() => setDeleteItem(null)} />
      )}
    </div>
  );
}

export default function TechnicalExpertiseCMS() { return <ToastProvider><TEListInner /></ToastProvider>; }

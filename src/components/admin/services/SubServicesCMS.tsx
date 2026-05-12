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
const FileIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const PageIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;

function slugify(str: string) { return str.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-{2,}/g,'-').replace(/^-|-$/g,''); }

interface Cat { _id:string; name:string; slug:string; }
interface Sub { _id:string; name:string; slug:string; categoryId: Cat|string; order:number; isActive:boolean; createdAt:string; }
interface FormData { name:string; slug:string; categoryId:string; order:string; isActive:boolean; }
const EMPTY: FormData = { name:'', slug:'', categoryId:'', order:'0', isActive:true };

function SubsInner() {
  const router = useRouter();
  const { toast } = useToast();
  const [subs, setSubs]             = useState<Sub[]>([]);
  const [cats, setCats]             = useState<Cat[]>([]);
  const [total, setTotal]           = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage]             = useState(1);
  const [search, setSearch]         = useState('');
  const [statusF, setStatusF]       = useState('all');
  const [catFilter, setCatFilter]   = useState('');
  const [loading, setLoading]       = useState(true);
  const [formOpen, setFormOpen]     = useState(false);
  const [editItem, setEditItem]     = useState<Sub|null>(null);
  const [deleteItem, setDeleteItem] = useState<Sub|null>(null);
  const [delLoading, setDelLoading] = useState(false);
  const [form, setForm]             = useState<FormData>(EMPTY);
  const [errors, setErrors]         = useState<Record<string,string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const [pageMap, setPageMap]       = useState<Record<string,string>>({}); // subId → pageId
  const timer = useRef<ReturnType<typeof setTimeout>|undefined>(undefined);
  const isMount      = useRef(true);
  const LIMIT = 15;


  const fetchSubs = async (pg: number, q: string, st: string, cat: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page:String(pg), limit:String(LIMIT), search:q, status:st });
      if (cat) params.set('categoryId', cat);
      const res = await fetch(`/api/admin/services/sub-services?${params}`);
      const d = await res.json();
      if (d.success) { setSubs(d.data as Sub[]); setTotal(d.total as number); setTotalPages(d.totalPages as number); }
    } finally { setLoading(false); }
  };

  const fetchCats = async () => {
    const res = await fetch('/api/admin/services/categories?limit=100&status=active');
    const d = await res.json(); if (d.success) setCats(d.data as Cat[]);
  };

  const fetchPageMap = async () => {
    // Fetch only sub-service-type pages
    const res = await fetch('/api/admin/services/pages?limit=500&pageType=subservice');
    const d = await res.json();
    if (d.success) {
      const map: Record<string,string> = {};
      for (const p of d.data) {
        const subId = String(p.subServiceId?._id ?? p.subServiceId ?? '');
        if (subId) map[subId] = p._id as string;
      }
      setPageMap(map);
    }
  };

  useEffect(() => {
    let ignore = false;
    fetchCats();
    fetchPageMap();
    return () => { ignore = true; };
  }, []); // eslint-disable-line

  useEffect(() => {
    let ignore = false;
    fetchSubs(page, search, statusF, catFilter).catch(()=>{});
    return () => { ignore = true; };
  }, [page, statusF, catFilter]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => { setPage(1); fetchSubs(1, search, statusF, catFilter); }, 400);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const openCreate = () => { setEditItem(null); setForm(EMPTY); setErrors({}); setSlugManual(false); setFormOpen(true); };
  const openEdit = (sub: Sub) => {
    const catId = typeof sub.categoryId === 'string' ? sub.categoryId : sub.categoryId._id;
    setEditItem(sub); setForm({ name:sub.name, slug:sub.slug, categoryId:catId, order:String(sub.order), isActive:sub.isActive });
    setErrors({}); setSlugManual(true); setFormOpen(true);
  };

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())       e.name       = 'Name is required';
    if (!form.categoryId.trim()) e.categoryId = 'Category is required';
    if (!form.slug.trim())       e.slug       = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(form.slug)) e.slug = 'Lowercase, numbers, hyphens only';
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const payload = { name:form.name, slug:form.slug, categoryId:form.categoryId, order:parseInt(form.order)||0, isActive:form.isActive };
    const url = editItem ? `/api/admin/services/sub-services/${editItem._id}` : '/api/admin/services/sub-services';
    const method = editItem ? 'PATCH' : 'POST';
    const res = await fetch(url, { method, headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
    const d = await res.json(); setSubmitting(false);
    if (d.success) {
      toast('success', editItem?'Sub-service updated':'Sub-service created');
      setFormOpen(false); fetchSubs(page, search, statusF, catFilter); fetchPageMap();
    } else { if (d.message?.includes('Slug')) setErrors(e=>({...e,slug:d.message})); else toast('error','Save failed',d.message); }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoading(true);
    const res = await fetch(`/api/admin/services/sub-services/${deleteItem._id}`, { method:'DELETE' });
    const d = await res.json(); setDelLoading(false); setDeleteItem(null);
    if (d.success) { toast('success','Deleted'); fetchSubs(page, search, statusF, catFilter); } else toast('error','Delete failed');
  };

  const toggleStatus = async (sub: Sub) => {
    const res = await fetch(`/api/admin/services/sub-services/${sub._id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({isActive:!sub.isActive}) });
    const d = await res.json();
    if (d.success) { toast('success','Updated'); fetchSubs(page, search, statusF, catFilter); } else toast('error','Update failed');
  };

  const handleCreatePage = async (sub: Sub) => {
    const catId = typeof sub.categoryId === 'string' ? sub.categoryId : sub.categoryId._id;
    const res = await fetch('/api/admin/services/pages/find-or-create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'subservice', subServiceId: sub._id, categoryId: catId, slug: sub.slug }),
    });
    const d = await res.json();
    if (d.success) {
      router.push(`/admin/services/pages/${d.data._id}`);
    } else {
      toast('error', 'Failed to open page', d.message);
    }
  };

  const getCatName = (c: Cat|string) => typeof c === 'string' ? c : c.name;

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Sub-Services</span>
            <span className={s.cmsHeaderBreadcrumb}>Services / Sub-Services</span>
          </div>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon/> Add Sub-Service</button>
        </header>
        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}><span className={s.searchIcon}><SearchIcon/></span>
                <input className={s.searchInput} placeholder="Search sub-services…" value={search} onChange={ev=>setSearch(ev.target.value)}/>
              </div>
              <select className={s.filterSelect} value={statusF} onChange={ev=>{setStatusF(ev.target.value);setPage(1);}}>
                <option value="all">All Status</option><option value="active">Active</option><option value="inactive">Inactive</option>
              </select>
              <select className={s.filterSelect} value={catFilter} onChange={ev=>{setCatFilter(ev.target.value);setPage(1);}}>
                <option value="">All Categories</option>
                {cats.map(c=><option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            </div>
            <span style={{fontSize:13,color:'var(--color-text-muted)'}}>{total} sub-service{total!==1?'s':''}</span>
          </div>

          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead><tr><th>Name</th><th>Slug</th><th>Category</th><th className={s.tableThNum}>Order</th><th>Status</th><th>Page</th><th>Actions</th></tr></thead>
              <tbody>
                {loading ? Array.from({length:8}).map((_,i)=>(
                  <tr key={i} className={s.skeletonRow}>{Array.from({length:7}).map((__,j)=><td key={j}><div className={s.skeleton} style={{width:'70%'}}/></td>)}</tr>
                )) : subs.length===0 ? (
                  <tr><td colSpan={7}>
                    <div className={s.emptyState}>
                      <div className={s.emptyIcon}><FileIcon/></div>
                      <div className={s.emptyTitle}>No sub-services yet</div>
                      <div className={s.emptyDesc}>Add dropdown items like &quot;Custom Website Development&quot;.</div>
                      <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon/> Add Sub-Service</button>
                    </div>
                  </td></tr>
                ) : subs.map(sub => {
                  const pageId = pageMap[sub._id];
                  return (
                    <tr key={sub._id}>
                      <td style={{fontWeight:600,color:'var(--color-text-primary)'}}>{sub.name}</td>
                      <td><code style={{fontSize:11,background:'var(--color-bg)',padding:'2px 6px',borderRadius:4,color:'var(--color-primary)'}}>{sub.slug}</code></td>
                      <td style={{fontSize:12,color:'var(--color-text-secondary)'}}>{getCatName(sub.categoryId)}</td>
                      <td className={s.tableTdNum}>{sub.order}</td>
                      <td><span className={`${s.badge} ${sub.isActive?s.badgeActive:s.badgeInactive}`} style={{cursor:'pointer'}} onClick={()=>toggleStatus(sub)}>{sub.isActive?'Active':'Inactive'}</span></td>
                      <td>
                        {pageId
                          ? <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={()=>router.push(`/admin/services/pages/${pageId}`)}><PageIcon/> Edit Page</button>
                          : <button className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`} onClick={()=>handleCreatePage(sub)}><PlusIcon/> Create Page</button>
                        }
                      </td>
                      <td><div className={s.actions}>
                        <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} onClick={()=>openEdit(sub)}><EditIcon/></button>
                        <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`} style={{color:'var(--color-danger)'}} onClick={()=>setDeleteItem(sub)}><TrashIcon/></button>
                      </div></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} total={total} limit={LIMIT} onPageChange={setPage}/>
          </div>
        </main>
      </div>

      {formOpen && (
        <div className={s.modalOverlay} onClick={()=>setFormOpen(false)}>
          <div className={s.modal} onClick={ev=>ev.stopPropagation()}>
            <div className={s.modalHeader}>
              <div><div className={s.modalTitle}>{editItem?'Edit Sub-Service':'New Sub-Service'}</div><div className={s.modalSubtitle}>Dropdown item under a service category</div></div>
              <button className={s.modalClose} onClick={()=>setFormOpen(false)}><XIcon/></button>
            </div>
            <div className={s.modalBody}>
              <div className={s.formGroup}><label className={s.formLabel}>Category <span className={s.formRequired}>*</span></label>
                <select className={`${s.formInput} ${errors.categoryId?s.hasError:''}`} value={form.categoryId} onChange={ev=>setForm(f=>({...f,categoryId:ev.target.value}))}>
                  <option value="">— Select category —</option>
                  {cats.map(c=><option key={c._id} value={c._id}>{c.name}</option>)}
                </select>
                {errors.categoryId&&<span className={s.formError}>{errors.categoryId}</span>}
              </div>
              <div className={s.formGroup}><label className={s.formLabel}>Name <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.name?s.hasError:''}`} value={form.name}
                  onChange={ev=>{const n=ev.target.value;setForm(f=>({...f,name:n,...(!slugManual?{slug:slugify(n)}:{})}));}}
                  placeholder="e.g. Custom Website Development"/>
                {errors.name&&<span className={s.formError}>{errors.name}</span>}
              </div>
              <div className={s.formGroup}><label className={s.formLabel}>Slug <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.slug?s.hasError:''}`} value={form.slug} onChange={ev=>{setSlugManual(true);setForm(f=>({...f,slug:ev.target.value.toLowerCase().replace(/[^a-z0-9-]/g,'')}))}}
                  placeholder="custom-website-development" style={{fontFamily:'var(--font-mono)',fontSize:12}}/>
                {errors.slug?<span className={s.formError}>{errors.slug}</span>:<span className={s.formHint}>Auto-generated. Must be unique.</span>}
              </div>
              <div className={s.formGrid}>
                <div className={s.formGroup}><label className={s.formLabel}>Sort Order</label>
                  <input className={s.formInput} type="number" min="0" value={form.order} onChange={ev=>setForm(f=>({...f,order:ev.target.value}))}/>
                </div>
                <div className={s.formGroup} style={{justifyContent:'flex-end'}}><label className={s.formLabel}>Status</label>
                  <label className={s.toggleWrapper}><span className={s.toggle}><input type="checkbox" checked={form.isActive} onChange={ev=>setForm(f=>({...f,isActive:ev.target.checked}))}/><span className={s.toggleSlider}/></span>
                    <span className={s.toggleLabel}>{form.isActive?'Active':'Inactive'}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={s.modalFooter}>
              <button className={`${s.btn} ${s.btnSecondary}`} onClick={()=>setFormOpen(false)} disabled={submitting}>Cancel</button>
              <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleSubmit} disabled={submitting}>{submitting?'Saving…':editItem?'Save Changes':'Create'}</button>
            </div>
          </div>
        </div>
      )}

      {deleteItem && <ConfirmDeleteModal title="Delete Sub-Service?" message={`"${deleteItem.name}" will be permanently removed.`} isLoading={delLoading} onConfirm={handleDelete} onCancel={()=>setDeleteItem(null)}/>}
    </div>
  );
}
export default function SubServicesCMS() { return <ToastProvider><SubsInner/></ToastProvider>; }

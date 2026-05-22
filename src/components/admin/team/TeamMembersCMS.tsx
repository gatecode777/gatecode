'use client';

import { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import s from '@/components/admin/portfolio/styles/shared.module.css';
import t from './TeamMembersCMS.module.css';

const PlusIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const EditIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const XIcon      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;
const UsersIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;

interface Member { _id:string; name:string; designation:string; image:string; stars:number; order:number; isActive:boolean; }
interface FormData { name:string; designation:string; image:string; stars:number; isActive:boolean; }
const EMPTY: FormData = { name:'', designation:'', image:'', stars:5, isActive:true };

function StarPicker({ value, onChange }: { value:number; onChange:(n:number)=>void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className={t.starPickerRow}>
      {[1,2,3,4,5].map(n => (
        <button key={n} type="button" className={t.starPickerBtn}
          style={{ color: n <= (hovered||value) ? '#f0a500' : '#ddd' }}
          onMouseEnter={() => setHovered(n)} onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(n)}>★</button>
      ))}
      <span className={t.starCount}>{value}/5</span>
    </div>
  );
}

function AvatarUpload({ value, onChange }: { value:string; onChange:(url:string)=>void }) {
  const [uploading, setUploading] = useState(false);
  const handleFile = async (file: File) => {
    setUploading(true);
    const fd = new FormData(); fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method:'POST', body:fd });
    const d = await res.json(); setUploading(false);
    if (d.success) onChange(d.data.url);
  };
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0]; if (file) handleFile(file); ev.target.value='';
  };
  return (
    <div className={t.avatarUploadWrap}>
      <div className={t.avatarCircle}>
        {value
          ? <img src={value} alt="preview" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          : <span className={t.avatarPlaceholder}>{uploading ? 'Uploading…' : 'No photo'}</span>}
        <input type="file" accept="image/*" disabled={uploading} className={t.avatarHiddenInput} onChange={handleChange}/>
      </div>
      <label className={t.uploadBtn}>
        <UploadIcon/> {uploading ? 'Uploading…' : value ? 'Change Photo' : 'Upload Photo'}
        <input type="file" accept="image/*" disabled={uploading} style={{display:'none'}} onChange={handleChange}/>
      </label>
      {value && <button type="button" className={t.removePhotoBtn} onClick={() => onChange('')}>Remove photo</button>}
    </div>
  );
}

function StarDisplay({ count }: { count:number }) {
  return (
    <div className={t.starsRow}>
      {[1,2,3,4,5].map(n => (
        <span key={n} className={n<=count ? t.starFilled : t.starEmpty}>★</span>
      ))}
    </div>
  );
}

function TeamMembersCMSInner() {
  const { toast } = useToast();
  const [members, setMembers]       = useState<Member[]>([]);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState('');
  const [statusF, setStatusF]       = useState('all');
  const [formOpen, setFormOpen]     = useState(false);
  const [editItem, setEditItem]     = useState<Member|null>(null);
  const [deleteItem, setDeleteItem] = useState<Member|null>(null);
  const [delLoading, setDelLoading] = useState(false);
  const [form, setForm]             = useState<FormData>(EMPTY);
  const [errors, setErrors]         = useState<Record<string,string>>({});
  const [submitting, setSubmitting] = useState(false);
  const isMount  = useRef(true);

  const fetchMembers = async (q=search, st=statusF) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/team-members?search=${encodeURIComponent(q)}&status=${st}`);
      const d = await res.json();
      if (d.success) setMembers(d.data as Member[]);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchMembers(); }, [statusF]); // eslint-disable-line
  useEffect(() => {
    if (isMount.current) { isMount.current=false; return; }
    const timer = setTimeout(() => fetchMembers(search, statusF), 350);
    return () => clearTimeout(timer);
  }, [search]); // eslint-disable-line

  const openCreate = () => { setEditItem(null); setForm(EMPTY); setErrors({}); setFormOpen(true); };
  const openEdit   = (m: Member) => { setEditItem(m); setForm({name:m.name,designation:m.designation,image:m.image,stars:m.stars,isActive:m.isActive}); setErrors({}); setFormOpen(true); };

  const validate = (): boolean => {
    const e: Record<string,string> = {};
    if (!form.name.trim())        e.name        = 'Name is required';
    if (!form.designation.trim()) e.designation = 'Designation is required';
    if (!form.image.trim())       e.image       = 'Please upload a photo';
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const url    = editItem ? `/api/admin/team-members/${editItem._id}` : '/api/admin/team-members';
    const method = editItem ? 'PATCH' : 'POST';
    const res    = await fetch(url, { method, headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
    const d      = await res.json(); setSubmitting(false);
    if (d.success) { toast('success', editItem?'Member updated':'Member added'); setFormOpen(false); fetchMembers(); }
    else toast('error','Save failed',d.message);
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoading(true);
    const res = await fetch(`/api/admin/team-members/${deleteItem._id}`, { method:'DELETE' });
    const d = await res.json(); setDelLoading(false); setDeleteItem(null);
    if (d.success) { toast('success','Deleted'); fetchMembers(); } else toast('error','Delete failed');
  };

  const toggleStatus = async (m: Member) => {
    const res = await fetch(`/api/admin/team-members/${m._id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({isActive:!m.isActive}) });
    const d = await res.json();
    if (d.success) { toast('success','Updated'); fetchMembers(); } else toast('error','Failed');
  };

  const displayed = members.filter(m => {
    const q=search.toLowerCase();
    if (q && !m.name.toLowerCase().includes(q) && !m.designation.toLowerCase().includes(q)) return false;
    if (statusF==='active' && !m.isActive) return false;
    if (statusF==='inactive' && m.isActive) return false;
    return true;
  });

  return (
    <div className={s.cmsPage}>
      <Sidebar/>
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Team Members</span>
            <span className={s.cmsHeaderBreadcrumb}>Team / Members</span>
          </div>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon/> Add Member</button>
        </header>
        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}><span className={s.searchIcon}><SearchIcon/></span>
                <input className={s.searchInput} placeholder="Search name or designation…" value={search} onChange={ev=>setSearch(ev.target.value)}/>
              </div>
              <select className={s.filterSelect} value={statusF} onChange={ev=>setStatusF(ev.target.value)}>
                <option value="all">All Status</option><option value="active">Active</option><option value="inactive">Inactive</option>
              </select>
            </div>
            <span style={{fontSize:13,color:'var(--color-text-muted)'}}>{displayed.length} member{displayed.length!==1?'s':''}</span>
          </div>

          {loading ? (
            <div className={t.grid}>
              {Array.from({length:6}).map((_,i) => (
                <div key={i} className={t.card} style={{opacity:1}}>
                  <div className={s.skeleton} style={{width:90,height:90,borderRadius:'50%',marginTop:8}}/>
                  <div className={s.skeleton} style={{width:80,height:12,marginTop:8}}/>
                  <div className={s.skeleton} style={{width:110,height:14,marginTop:4}}/>
                  <div className={s.skeleton} style={{width:80,height:12,marginTop:2}}/>
                </div>
              ))}
            </div>
          ) : displayed.length===0 ? (
            <div className={s.tableWrapper}>
              <div className={s.emptyState}>
                <div className={s.emptyIcon}><UsersIcon/></div>
                <div className={s.emptyTitle}>No team members yet</div>
                <div className={s.emptyDesc}>Add team members to display in the homepage slider.</div>
                <button className={`${s.btn} ${s.btnPrimary}`} onClick={openCreate}><PlusIcon/> Add Member</button>
              </div>
            </div>
          ) : (
            <>
              <div className={t.grid}>
                {displayed.map((member) => (
                  <div key={member._id}
                    className={`${t.card} ${member.isActive?'':t.cardInactive}`}
>
                    <div className={t.statusBadge}>
                      <span className={`${s.badge} ${member.isActive?s.badgeActive:s.badgeInactive}`}
                        style={{cursor:'pointer',fontSize:10,padding:'2px 7px'}} onClick={()=>toggleStatus(member)}>
                        {member.isActive?'Active':'Inactive'}
                      </span>
                    </div>
                    <div className={t.avatar}>
                      <img src={member.image} alt={member.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                    </div>
                    <StarDisplay count={member.stars}/>
                    <div>
                      <div className={t.memberName}>{member.name}</div>
                      <div className={t.memberDes}>({member.designation})</div>
                    </div>
                    <div className={t.orderPill}>#{member.order+1}</div>
                    <div className={t.cardActions}>
                      <button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`} onClick={()=>openEdit(member)}><EditIcon/> Edit</button>
                      <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon} ${s.btnSm}`} style={{color:'var(--color-danger)'}} onClick={()=>setDeleteItem(member)}><TrashIcon/></button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>

      {formOpen && (
        <div className={s.modalOverlay} onClick={()=>setFormOpen(false)}>
          <div className={s.modal} onClick={ev=>ev.stopPropagation()}>
            <div className={s.modalHeader}>
              <div>
                <div className={s.modalTitle}>{editItem?'Edit Member':'Add Team Member'}</div>
                <div className={s.modalSubtitle}>Shown in the team slider on the homepage</div>
              </div>
              <button className={s.modalClose} onClick={()=>setFormOpen(false)}><XIcon/></button>
            </div>
            <div className={s.modalBody}>
              <AvatarUpload value={form.image} onChange={url=>setForm(f=>({...f,image:url}))}/>
              {errors.image && <p className={t.imageError}>{errors.image}</p>}
              <div className={s.formGroup}>
                <label className={s.formLabel}>Full Name <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.name?s.hasError:''}`} value={form.name} onChange={ev=>setForm(f=>({...f,name:ev.target.value}))} placeholder="e.g. Kanchan Meena"/>
                {errors.name && <span className={s.formError}>{errors.name}</span>}
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Designation <span className={s.formRequired}>*</span></label>
                <input className={`${s.formInput} ${errors.designation?s.hasError:''}`} value={form.designation} onChange={ev=>setForm(f=>({...f,designation:ev.target.value}))} placeholder="e.g. HR Manager"/>
                {errors.designation && <span className={s.formError}>{errors.designation}</span>}
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Star Rating <span className={s.formRequired}>*</span></label>
                <StarPicker value={form.stars} onChange={n=>setForm(f=>({...f,stars:n}))}/>
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel}>Visibility</label>
                <label className={s.toggleWrapper}>
                  <span className={s.toggle}><input type="checkbox" checked={form.isActive} onChange={ev=>setForm(f=>({...f,isActive:ev.target.checked}))}/><span className={s.toggleSlider}/></span>
                  <span className={s.toggleLabel}>{form.isActive?'Active — visible on site':'Inactive — hidden'}</span>
                </label>
              </div>
            </div>
            <div className={s.modalFooter}>
              <button className={`${s.btn} ${s.btnSecondary}`} onClick={()=>setFormOpen(false)} disabled={submitting}>Cancel</button>
              <button className={`${s.btn} ${s.btnPrimary}`} onClick={handleSubmit} disabled={submitting}>{submitting?'Saving…':editItem?'Save Changes':'Add Member'}</button>
            </div>
          </div>
        </div>
      )}

      {deleteItem && <ConfirmDeleteModal title="Remove Member?" message={`"${deleteItem.name}" will be removed from the team slider.`} isLoading={delLoading} onConfirm={handleDelete} onCancel={()=>setDeleteItem(null)}/>}
    </div>
  );
}

export default function TeamMembersCMS() { return <ToastProvider><TeamMembersCMSInner/></ToastProvider>; }

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import s from '@/components/admin/portfolio/styles/shared.module.css';

const PlusIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const EditIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const PostsIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;

interface Post { _id:string; title:string; slug:string; status:'draft'|'published'; isFeatured:boolean; isActive:boolean; categoryId:{_id:string;name:string}|null; readingTimeMinutes:number; viewCount:number; publishedAt:string|null; createdAt:string; }

function BlogPostsCMSInner() {
  const { toast } = useToast();
  const [posts, setPosts]           = useState<Post[]>([]);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState('');
  const [statusF, setStatusF]       = useState('all');
  const [categories, setCategories] = useState<{_id:string;name:string}[]>([]);
  const [catF, setCatF]             = useState('');
  const [deleteItem, setDeleteItem] = useState<Post|null>(null);
  const [delLoading, setDelLoading] = useState(false);
  const isMount = useRef(true);

  const fetch_ = async (q=search, st=statusF, cat=catF) => {
    setLoading(true);
    const p = new URLSearchParams({ status:st, ...(cat ? {categoryId:cat}:{}), ...(q ? {search:q}:{}) });
    const res = await fetch(`/api/admin/blog/posts?${p}`);
    const d = await res.json();
    if (d.success) setPosts(d.data);
    setLoading(false);
  };

  useEffect(() => {
    fetch_();
    fetch('/api/admin/blog/categories').then(r=>r.json()).then(d => { if (d.success) setCategories(d.data); });
  }, []); // eslint-disable-line

  useEffect(() => { fetch_(search, statusF, catF); }, [statusF, catF]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current=false; return; }
    const t = setTimeout(() => fetch_(search, statusF, catF), 350);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const handleDelete = async () => {
    if (!deleteItem) return; setDelLoading(true);
    const res = await fetch(`/api/admin/blog/posts/${deleteItem._id}`, { method:'DELETE' });
    const d = await res.json(); setDelLoading(false); setDeleteItem(null);
    if (d.success) { toast('success', 'Post deleted'); fetch_(); } else toast('error', 'Delete failed');
  };

  const toggleStatus = async (post: Post) => {
    const newStatus = post.status === 'published' ? 'draft' : 'published';
    const res = await fetch(`/api/admin/blog/posts/${post._id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ status:newStatus }) });
    const d = await res.json();
    if (d.success) { toast('success', `Post ${newStatus}`); fetch_(); } else toast('error', 'Failed');
  };

  const fmtDate = (s: string|null) => s ? new Date(s).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}) : '—';

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Blog Posts</span>
            <span className={s.cmsHeaderBreadcrumb}>Blog / All Posts</span>
          </div>
          <Link href="/admin/blog/posts/new"><button className={`${s.btn} ${s.btnPrimary}`}><PlusIcon /> New Post</button></Link>
        </header>

        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input className={s.searchInput} placeholder="Search posts…" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <select className={s.filterSelect} value={statusF} onChange={e => setStatusF(e.target.value)}>
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
              <select className={s.filterSelect} value={catF} onChange={e => setCatF(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            </div>
            <span style={{ fontSize:13, color:'var(--color-text-muted)' }}>{posts.length} post{posts.length!==1?'s':''}</span>
          </div>

          <div className={s.tableWrapper}>
            {loading ? (
              <table className={s.table}><tbody>{Array.from({length:5}).map((_,i) => <tr key={i} className={s.skeletonRow}>{Array.from({length:6}).map((__,j) => <td key={j}><div className={s.skeleton} style={{width:'80%'}}/></td>)}</tr>)}</tbody></table>
            ) : posts.length === 0 ? (
              <div className={s.emptyState}>
                <div className={s.emptyIcon}><PostsIcon /></div>
                <div className={s.emptyTitle}>No blog posts yet</div>
                <div className={s.emptyDesc}>Create your first post to get started.</div>
                <Link href="/admin/blog/posts/new"><button className={`${s.btn} ${s.btnPrimary}`}><PlusIcon /> New Post</button></Link>
              </div>
            ) : (
              <table className={s.table}>
                <thead><tr>
                  <th className={s.th}>Title</th>
                  <th className={s.th}>Category</th>
                  <th className={s.th}>Status</th>
                  <th className={s.th}>Published</th>
                  <th className={s.th}>Views</th>
                  <th className={s.th} style={{textAlign:'right'}}>Actions</th>
                </tr></thead>
                <tbody>
                  {posts.map(post => (
                    <tr key={post._id} className={s.tr}>
                      <td className={s.td}>
                        <div style={{ fontWeight:600, maxWidth:320, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{post.title}</div>
                        <div style={{ fontSize:11, color:'var(--color-text-muted)', fontFamily:'monospace' }}>{post.slug}</div>
                        {post.isFeatured && <span style={{ fontSize:10, background:'#fef3c7', color:'#b45309', padding:'1px 5px', borderRadius:4, marginTop:2, display:'inline-block' }}>★ Featured</span>}
                      </td>
                      <td className={s.td} style={{ fontSize:12 }}>{post.categoryId?.name || <span style={{color:'var(--color-text-muted)'}}>Uncategorized</span>}</td>
                      <td className={s.td}>
                        <span className={`${s.badge} ${post.status==='published' ? s.badgeActive : s.badgeInactive}`} style={{ cursor:'pointer' }} onClick={() => toggleStatus(post)}>
                          {post.status}
                        </span>
                      </td>
                      <td className={s.td} style={{ fontSize:12 }}>{fmtDate(post.publishedAt)}</td>
                      <td className={s.td} style={{ fontSize:12 }}>{post.viewCount ?? 0}</td>
                      <td className={s.td} style={{ textAlign:'right' }}>
                        <div className={s.actions}>
                          <Link href={`/admin/blog/posts/${post._id}`}><button className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}><EditIcon /> Edit</button></Link>
                          <button className={`${s.btn} ${s.btnGhost} ${s.btnIcon} ${s.btnSm}`} style={{ color:'var(--color-danger)' }} onClick={() => setDeleteItem(post)}><TrashIcon /></button>
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
      {deleteItem && <ConfirmDeleteModal title="Delete Post?" message={`"${deleteItem.title}" will be permanently deleted.`} isLoading={delLoading} onConfirm={handleDelete} onCancel={() => setDeleteItem(null)} />}
    </div>
  );
}

export default function BlogPostsCMS() { return <ToastProvider><BlogPostsCMSInner /></ToastProvider>; }

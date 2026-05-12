'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import Pagination from '@/components/admin/shared/Pagination';
import s from '@/components/admin/portfolio/styles/shared.module.css';

// ── Icons ──────────────────────────────────────────────────────────────────
const PlusIcon     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const EditIcon     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const SearchIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const StarIcon     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const BookOpenIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const ImageIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;

// ── Types ──────────────────────────────────────────────────────────────────
interface CaseStudyRow {
  _id: string; title: string; slug: string; shortDesc: string;
  thumbnail: string; isFeatured: boolean; isActive: boolean;
  order: number; createdAt: string;
}

function CaseStudiesListInner() {
  const router = useRouter();
  const { toast } = useToast();

  const [studies, setStudies]       = useState<CaseStudyRow[]>([]);
  const [total, setTotal]           = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage]             = useState(1);
  const [search, setSearch]         = useState('');
  const [statusFilter, setStatus]   = useState('all');
  const [isLoading, setLoading]     = useState(true);
  const [deleteItem, setDeleteItem] = useState<CaseStudyRow | null>(null);
  const [deleteLoading, setDelLoad] = useState(false);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const isMount      = useRef(true);
  const LIMIT = 6;

  const fetchStudies = useCallback(async (pg: number = page, q: string = search, st: string = statusFilter) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(pg), limit: String(LIMIT), search: q, status: st });
      const res  = await fetch(`/api/admin/case-studies?${params}`);
      const data = await res.json();
      if (data.success) {
        setStudies(data.data as CaseStudyRow[]);
        setTotal(data.total as number);
        setTotalPages(data.totalPages as number);
      }
    } finally { setLoading(false); }
  }, [page, search, statusFilter]);

  useEffect(() => {
    let ignore = false;
    fetchStudies(page, search, statusFilter).catch(()=>{});
    return () => { ignore = true; };
  }, [page, statusFilter]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => { setPage(1); fetchStudies(1, search, statusFilter); }, 400);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoad(true);
    const res  = await fetch(`/api/admin/case-studies/${deleteItem._id}`, { method: 'DELETE' });
    const data = await res.json();
    setDelLoad(false); setDeleteItem(null);
    if (data.success) { toast('success', 'Case study deleted'); fetchStudies(page, search, statusFilter); }
    else toast('error', 'Delete failed', data.message);
  };

  const toggleField = async (item: CaseStudyRow, field: 'isActive' | 'isFeatured') => {
    const res  = await fetch(`/api/admin/case-studies/${item._id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: !item[field] }),
    });
    const data = await res.json();
    if (data.success) { toast('success', 'Updated'); fetchStudies(page, search, statusFilter); }
    else toast('error', 'Update failed');
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>Case Studies</span>
            <span className={s.cmsHeaderBreadcrumb}>Content / Case Studies</span>
          </div>
          <button className={`${s.btn} ${s.btnPrimary}`} onClick={() => router.push('/admin/case-studies/new')}>
            <PlusIcon /> New Case Study
          </button>
        </header>

        <main className={s.cmsContent}>
          {/* Toolbar */}
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input className={s.searchInput} placeholder="Search case studies…" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <select className={s.filterSelect} value={statusFilter} onChange={e => { setStatus(e.target.value); setPage(1); }}>
                <option value="all">All Status</option>
                <option value="active">Published</option>
                <option value="inactive">Draft</option>
              </select>
            </div>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              {total} case stud{total !== 1 ? 'ies' : 'y'}
            </span>
          </div>

          {/* Table */}
          <div className={s.tableWrapper}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th style={{ width: 64 }}>Thumb</th>
                  <th>Title</th>
                  <th>Slug</th>
                  <th style={{ width: 200 }}>Short Description</th>
                  <th style={{ width: 80, textAlign: 'center' }}>Featured</th>
                  <th style={{ width: 100 }}>Status</th>
                  <th style={{ width: 110 }}>Created</th>
                  <th style={{ width: 110 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <tr key={i} className={s.skeletonRow}>
                      <td><div className={s.skeleton} style={{ width: 56, height: 40 }} /></td>
                      {Array.from({ length: 7 }).map((__, j) => (
                        <td key={j}><div className={s.skeleton} style={{ width: '70%' }} /></td>
                      ))}
                    </tr>
                  ))
                ) : studies.length === 0 ? (
                  <tr><td colSpan={8}>
                    <div className={s.emptyState}>
                      <div className={s.emptyIcon}><BookOpenIcon /></div>
                      <div className={s.emptyTitle}>No case studies yet</div>
                      <div className={s.emptyDesc}>Create your first case study to showcase client successes.</div>
                      <button className={`${s.btn} ${s.btnPrimary}`} onClick={() => router.push('/admin/case-studies/new')}>
                        <PlusIcon /> New Case Study
                      </button>
                    </div>
                  </td></tr>
                ) : studies.map(item => (
                  <tr key={item._id}>
                    <td>
                      {item.thumbnail
                        ? <img src={item.thumbnail} alt={item.title} className={s.thumbPreview} />
                        : <div className={s.thumbPlaceholder}><ImageIcon /></div>}
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--color-text-primary)', maxWidth: 180 }}>
                      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                    </td>
                    <td>
                      <code style={{ fontSize: 11, background: 'var(--color-bg)', padding: '2px 6px', borderRadius: 4, color: 'var(--color-primary)' }}>
                        {item.slug}
                      </code>
                    </td>
                    <td style={{ fontSize: 12, color: 'var(--color-text-muted)', maxWidth: 200 }}>
                      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {item.shortDesc || '—'}
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`}
                        title="Toggle featured"
                        onClick={() => toggleField(item, 'isFeatured')}
                        style={{ color: item.isFeatured ? 'var(--color-warning)' : 'var(--color-text-muted)', margin: '0 auto' }}
                      >
                        <StarIcon />
                      </button>
                    </td>
                    <td>
                      <span
                        className={`${s.badge} ${item.isActive ? s.badgeActive : s.badgeInactive}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => toggleField(item, 'isActive')}
                        title="Click to toggle"
                      >
                        {item.isActive ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                      {formatDate(item.createdAt)}
                    </td>
                    <td>
                      <div className={s.actions}>
                        <button
                          className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`}
                          title="Edit"
                          onClick={() => router.push(`/admin/case-studies/${item._id}`)}
                        >
                          <EditIcon />
                        </button>
                        <button
                          className={`${s.btn} ${s.btnGhost} ${s.btnIcon}`}
                          title="Delete"
                          onClick={() => setDeleteItem(item)}
                          style={{ color: 'var(--color-danger)' }}
                        >
                          <TrashIcon />
                        </button>
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

      {deleteItem && (
        <ConfirmDeleteModal
          title="Delete Case Study?"
          message={`"${deleteItem.title}" will be permanently deleted, including all its content.`}
          isLoading={deleteLoading}
          onConfirm={handleDelete}
          onCancel={() => setDeleteItem(null)}
        />
      )}
    </div>
  );
}

export default function CaseStudiesList() {
  return <ToastProvider><CaseStudiesListInner /></ToastProvider>;
}

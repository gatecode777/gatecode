'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import s from '@/components/admin/portfolio/styles/shared.module.css';

const SearchIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const TrashIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const BriefcaseIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>;
const DownloadIcon  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;

interface Application {
  _id: string;
  applicationType: 'job' | 'internship';
  fullName: string;
  email: string;
  phone: string;
  position: string;
  resumeUrl: string;
  resumeOriginalName: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
  createdAt: string;
}

const STATUS_OPTIONS = ['new', 'reviewed', 'shortlisted', 'rejected'];
const STATUS_COLORS: Record<string, string> = {
  new:        s.badgeActive,
  reviewed:   s.badge,
  shortlisted: s.badge,
  rejected:   s.badgeInactive,
};
const STATUS_STYLE: Record<string, React.CSSProperties> = {
  shortlisted: { background: '#fef9c3', color: '#854d0e' },
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function JobApplicationsCMSInner() {
  const { toast } = useToast();
  const [apps, setApps]             = useState<Application[]>([]);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState('');
  const [typeF, setTypeF]           = useState('all');
  const [statusF, setStatusF]       = useState('all');
  const [deleteItem, setDeleteItem] = useState<Application | null>(null);
  const [delLoading, setDelLoading] = useState(false);
  const isMount = useRef(true);

  const fetch_ = async (q = search, tp = typeF, st = statusF) => {
    setLoading(true);
    const p = new URLSearchParams({
      ...(tp !== 'all' ? { type: tp } : {}),
      ...(st !== 'all' ? { status: st } : {}),
      ...(q ? { search: q } : {}),
    });
    const res = await fetch(`/api/admin/applications?${p}`);
    const d = await res.json();
    if (d.success) setApps(d.data);
    setLoading(false);
  };

  useEffect(() => { fetch_(); }, [typeF, statusF]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => fetch_(search, typeF, statusF), 350);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const changeStatus = async (app: Application, status: string) => {
    const res = await fetch(`/api/admin/applications/${app._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const d = await res.json();
    if (d.success) { toast('success', `Marked as ${status}`); fetch_(search, typeF, statusF); }
    else toast('error', 'Update failed');
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoading(true);
    const res = await fetch(`/api/admin/applications/${deleteItem._id}`, { method: 'DELETE' });
    const d = await res.json();
    setDelLoading(false); setDeleteItem(null);
    if (d.success) { toast('success', 'Deleted'); fetch_(search, typeF, statusF); }
    else toast('error', 'Delete failed');
  };

  const newCount = apps.filter(a => a.status === 'new').length;

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>
              Job Applications
              {newCount > 0 && (
                <span style={{ marginLeft: 8, background: '#ef4444', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: 11, fontWeight: 700 }}>
                  {newCount}
                </span>
              )}
            </span>
            <span className={s.cmsHeaderBreadcrumb}>Applications / All</span>
          </div>
        </header>

        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input
                  className={s.searchInput}
                  placeholder="Search by name, email or position…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <select className={s.filterSelect} value={typeF} onChange={e => setTypeF(e.target.value)}>
                <option value="all">All Types</option>
                <option value="job">Job</option>
                <option value="internship">Internship</option>
              </select>
              <select className={s.filterSelect} value={statusF} onChange={e => setStatusF(e.target.value)}>
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              {apps.length} application{apps.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className={s.tableWrapper}>
            {loading ? (
              <table className={s.table}>
                <tbody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className={s.skeletonRow}>
                      {Array.from({ length: 7 }).map((__, j) => (
                        <td key={j}><div className={s.skeleton} style={{ width: '80%' }} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : apps.length === 0 ? (
              <div className={s.emptyState}>
                <div className={s.emptyIcon}><BriefcaseIcon /></div>
                <div className={s.emptyTitle}>No applications yet</div>
                <div className={s.emptyDesc}>Job and internship applications from the website will appear here.</div>
              </div>
            ) : (
              <table className={s.table}>
                <thead>
                  <tr>
                    <th className={s.th}>Name</th>
                    <th className={s.th}>Email</th>
                    <th className={s.th}>Phone</th>
                    <th className={s.th}>Position</th>
                    <th className={s.th}>Type</th>
                    <th className={s.th}>Status</th>
                    <th className={s.th}>Date</th>
                    <th className={s.th} style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {apps.map(app => (
                    <tr
                      key={app._id}
                      className={s.tr}
                      style={{ background: app.status === 'new' ? 'var(--color-primary-pale, #f0fdf8)' : undefined }}
                    >
                      <td className={s.td} style={{ fontWeight: app.status === 'new' ? 700 : 500 }}>{app.fullName}</td>
                      <td className={s.td} style={{ fontSize: 12 }}>
                        <a href={`mailto:${app.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                          {app.email}
                        </a>
                      </td>
                      <td className={s.td} style={{ fontSize: 12 }}>{app.phone}</td>
                      <td className={s.td} style={{ fontSize: 12 }}>{app.position}</td>
                      <td className={s.td}>
                        <span
                          className={s.badge}
                          style={{
                            background: app.applicationType === 'job' ? '#dbeafe' : '#f3e8ff',
                            color: app.applicationType === 'job' ? '#1e40af' : '#7e22ce',
                            fontSize: 10,
                          }}
                        >
                          {app.applicationType === 'job' ? 'Job' : 'Internship'}
                        </span>
                      </td>
                      <td className={s.td}>
                        <select
                          value={app.status}
                          onChange={e => changeStatus(app, e.target.value)}
                          style={{
                            fontSize: 12,
                            padding: '3px 6px',
                            borderRadius: 6,
                            border: '1px solid var(--color-border)',
                            background: 'var(--color-surface)',
                            cursor: 'pointer',
                            color: app.status === 'rejected' ? '#dc2626' : app.status === 'shortlisted' ? '#854d0e' : 'inherit',
                          }}
                        >
                          {STATUS_OPTIONS.map(s => (
                            <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                          ))}
                        </select>
                      </td>
                      <td className={s.td} style={{ fontSize: 11, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{fmtDate(app.createdAt)}</td>
                      <td className={s.td} style={{ textAlign: 'right' }}>
                        <div className={s.actions}>
                          {app.resumeUrl && (
                            <a
                              href={app.resumeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
                              title={app.resumeOriginalName || 'Download Resume'}
                            >
                              <DownloadIcon /> Resume
                            </a>
                          )}
                          <button
                            className={`${s.btn} ${s.btnGhost} ${s.btnIcon} ${s.btnSm}`}
                            style={{ color: 'var(--color-danger)' }}
                            onClick={() => setDeleteItem(app)}
                          >
                            <TrashIcon />
                          </button>
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

      {deleteItem && (
        <ConfirmDeleteModal
          title="Delete Application?"
          message={`Application from "${deleteItem.fullName}" will be permanently deleted.`}
          isLoading={delLoading}
          onConfirm={handleDelete}
          onCancel={() => setDeleteItem(null)}
        />
      )}
    </div>
  );
}

export default function JobApplicationsCMS() {
  return <ToastProvider><JobApplicationsCMSInner /></ToastProvider>;
}
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider, useToast } from '@/components/admin/shared/Toast';
import ConfirmDeleteModal from '@/components/admin/shared/ConfirmDeleteModal';
import s from '@/components/admin/portfolio/styles/shared.module.css';

const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
const TrashIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" /></svg>;
const InboxIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>;
const EyeIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;

interface ClientInquiry {
  _id: string;
  name: string;
  phone: string;
  email: string;
  requirement: string;
  budget: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

const STATUS_NEXT: Record<string, string> = { new: 'read', read: 'replied', replied: 'new' };
const STATUS_LABEL: Record<string, string> = { new: 'New', read: 'Read', replied: 'Replied' };

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

function ClientInquiriesCMSInner() {
  const { toast } = useToast();
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusF, setStatusF] = useState('all');
  const [deleteItem, setDeleteItem] = useState<ClientInquiry | null>(null);
  const [delLoading, setDelLoading] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const isMount = useRef(true);

  const fetch_ = async (q = search, st = statusF) => {
    setLoading(true);
    const p = new URLSearchParams({
      ...(st !== 'all' ? { status: st } : {}),
      ...(q ? { search: q } : {}),
    });
    const res = await fetch(`/api/admin/client-inquiries?${p}`);
    const d = await res.json();
    if (d.success) setInquiries(d.data);
    setLoading(false);
  };

  useEffect(() => { fetch_(); }, [statusF]); // eslint-disable-line

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return; }
    const t = setTimeout(() => fetch_(search, statusF), 350);
    return () => clearTimeout(t);
  }, [search]); // eslint-disable-line

  const cycleStatus = async (item: ClientInquiry) => {
    const next = STATUS_NEXT[item.status];
    const res = await fetch(`/api/admin/client-inquiries/${item._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    });
    const d = await res.json();
    if (d.success) { toast('success', `Marked as ${next}`); fetch_(search, statusF); }
    else toast('error', 'Update failed');
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setDelLoading(true);
    const res = await fetch(`/api/admin/client-inquiries/${deleteItem._id}`, { method: 'DELETE' });
    const d = await res.json();
    setDelLoading(false);
    setDeleteItem(null);
    if (d.success) { toast('success', 'Deleted'); fetch_(search, statusF); }
    else toast('error', 'Delete failed');
  };

  const badgeClass = (status: string) => {
    if (status === 'new') return `${s.badge} ${s.badgeActive}`;
    if (status === 'replied') return `${s.badge} ${s.badgeInactive}`;
    return s.badge;
  };

  const newCount = inquiries.filter(r => r.status === 'new').length;

  return (
    <div className={s.cmsPage}>
      <Sidebar />
      <div className={s.cmsMain}>
        <header className={s.cmsHeader}>
          <div className={s.cmsHeaderLeft}>
            <span className={s.cmsHeaderTitle}>
              Client Enquiries
              {newCount > 0 && (
                <span style={{ marginLeft: 8, background: '#ef4444', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: 11, fontWeight: 700 }}>
                  {newCount}
                </span>
              )}
            </span>
            <span className={s.cmsHeaderBreadcrumb}>Enquiries / Client Enquiries</span>
          </div>
        </header>

        <main className={s.cmsContent}>
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              <div className={s.searchWrapper}>
                <span className={s.searchIcon}><SearchIcon /></span>
                <input
                  className={s.searchInput}
                  placeholder="Search by name, email or phone…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <select className={s.filterSelect} value={statusF} onChange={e => setStatusF(e.target.value)}>
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              {inquiries.length} enquir{inquiries.length !== 1 ? 'ies' : 'y'}
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
            ) : inquiries.length === 0 ? (
              <div className={s.emptyState}>
                <div className={s.emptyIcon}><InboxIcon /></div>
                <div className={s.emptyTitle}>No enquiries yet</div>
                <div className={s.emptyDesc}>Form submissions from landing pages will appear here.</div>
              </div>
            ) : (
              <table className={s.table}>
                <thead>
                  <tr>
                    <th className={s.th}>Name</th>
                    <th className={s.th}>Phone</th>
                    <th className={s.th}>Email</th>
                    <th className={s.th}>Requirement</th>
                    <th className={s.th}>Budget</th>
                    <th className={s.th}>Status</th>
                    <th className={s.th}>Date</th>
                    <th className={s.th} style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map(item => (
                    <React.Fragment key={item._id}>
                      <tr
                        className={s.tr}
                        style={{
                          cursor: 'pointer',
                          background: item.status === 'new' ? 'var(--color-primary-pale, #f0fdf8)' : undefined,
                        }}
                        onClick={() => setExpanded(expanded === item._id ? null : item._id)}
                      >
                        <td className={s.td} style={{ fontWeight: item.status === 'new' ? 700 : 500 }}>{item.name}</td>
                        <td className={s.td} style={{ fontSize: 12 }}>
                          <a href={`tel:${item.phone}`} onClick={e => e.stopPropagation()} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                            {item.phone}
                          </a>
                        </td>
                        <td className={s.td} style={{ fontSize: 12 }}>
                          <a href={`mailto:${item.email}`} onClick={e => e.stopPropagation()} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                            {item.email}
                          </a>
                        </td>
                        <td className={s.td}>
                          <span style={{
                            display: 'inline-block',
                            background: 'var(--color-primary-pale)',
                            color: 'var(--color-primary-dark)',
                            borderRadius: 4,
                            padding: '2px 8px',
                            fontSize: 12,
                            fontWeight: 600,
                          }}>
                            {item.requirement}
                          </span>
                        </td>
                        <td className={s.td} style={{ fontSize: 13, fontWeight: 600 }}>{item.budget}</td>
                        <td className={s.td}>
                          <span
                            className={badgeClass(item.status)}
                            style={{ cursor: 'pointer' }}
                            onClick={e => { e.stopPropagation(); cycleStatus(item); }}
                            title="Click to change status"
                          >
                            {STATUS_LABEL[item.status]}
                          </span>
                        </td>
                        <td className={s.td} style={{ fontSize: 11, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
                          {fmtDate(item.createdAt)}
                        </td>
                        <td className={s.td} style={{ textAlign: 'right' }}>
                          <div className={s.actions}>
                            <button
                              className={`${s.btn} ${s.btnSecondary} ${s.btnSm}`}
                              onClick={e => { e.stopPropagation(); setExpanded(expanded === item._id ? null : item._id); }}
                              title="View details"
                            >
                              <EyeIcon /> View
                            </button>
                            <button
                              className={`${s.btn} ${s.btnGhost} ${s.btnIcon} ${s.btnSm}`}
                              style={{ color: 'var(--color-danger)' }}
                              onClick={e => { e.stopPropagation(); setDeleteItem(item); }}
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        </td>
                      </tr>

                      {expanded === item._id && (
                        <tr className={s.tr}>
                          <td colSpan={8} style={{ padding: '0 16px 16px' }}>
                            <div style={{
                              background: 'var(--color-surface-2)',
                              border: '1px solid var(--color-border)',
                              borderRadius: 'var(--radius-md)',
                              padding: '16px 20px',
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                              gap: '16px',
                            }}>
                              <div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Contact</div>
                                <div style={{ fontSize: 14, color: 'var(--color-text-primary)', fontWeight: 600 }}>{item.name}</div>
                                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{item.email}</div>
                                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{item.phone}</div>
                              </div>
                              <div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Project Details</div>
                                <div style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>
                                  <strong>Requirement:</strong> {item.requirement}
                                </div>
                                <div style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>
                                  <strong>Budget:</strong> {item.budget}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      {deleteItem && (
        <ConfirmDeleteModal
          title="Delete Enquiry?"
          message={`Enquiry from "${deleteItem.name}" will be permanently deleted.`}
          isLoading={delLoading}
          onConfirm={handleDelete}
          onCancel={() => setDeleteItem(null)}
        />
      )}
    </div>
  );
}

export default function ClientInquiriesCMS() {
  return <ToastProvider><ClientInquiriesCMSInner /></ToastProvider>;
}

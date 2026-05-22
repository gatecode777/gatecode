'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import styles from './styles/Dashboard.module.css';
import type { AdminUser } from '@/types';
import { formatNumber } from '@/lib/utils';

const BellIcon      = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>);
const BriefcaseIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>);
const BookOpenIcon  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const SlidersIcon   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>);
const InboxIcon     = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>);
const TrendUpIcon   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:10,height:10}}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);

const QUICK_LINKS = [
  { label: 'Add New Project',       href: '/admin/portfolio/projects',    color: 'var(--color-primary)' },
  { label: 'Add Case Study',        href: '/admin/case-studies/new',      color: 'var(--color-info)' },
  { label: 'View Enquiries',        href: '/admin/contact',               color: 'var(--color-success)' },
  { label: 'View Applications',     href: '/admin/applications',          color: 'var(--color-warning)' },
  { label: 'Manage Blog Posts',     href: '/admin/blog/posts',            color: '#8b5cf6' },
  { label: 'Manage Portfolio Slider', href: '/admin/portfolio/slider',    color: '#ec4899' },
];

interface Stats {
  projects:     number;
  caseStudies:  number;
  heroSlides:   number;
  newEnquiries: number;
  newApps:      number;
  blogPosts:    number;
}

interface DashboardClientProps { admin: AdminUser | null; }

export default function DashboardClient({ admin }: DashboardClientProps) {
  const [stats, setStats] = useState<Stats>({ projects: 0, caseStudies: 0, heroSlides: 0, newEnquiries: 0, newApps: 0, blogPosts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/dashboard/stats')
      .then(r => r.json())
      .then(d => { if (d.success) setStats(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const h = new Date().getHours();
  const greeting = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  const adminName = admin?.name ?? 'Admin';
  const firstName = adminName.split(' ')[0];
  const initials  = adminName.split(' ').map((n: string) => n[0]).join('').slice(0,2).toUpperCase();

  const val = (n: number) => loading ? '—' : formatNumber(n);

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar adminName={adminName} adminEmail={admin?.email} />

      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerTitle}>Dashboard</div>
            <div className={styles.headerBreadcrumb}>Admin / Overview</div>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.headerDate}>{today}</span>
            <button className={styles.notifBtn} aria-label="Notifications">
              <BellIcon />
              {stats.newEnquiries + stats.newApps > 0 && <span className={styles.notifDot} />}
            </button>
            <div className={styles.headerAvatar} title={adminName}>{initials}</div>
          </div>
        </header>

        <main className={styles.pageContent}>
          <div className={styles.pageWelcome}>
            <h1 className={styles.welcomeText}>{greeting}, <span>{firstName}</span> 👋</h1>
            <p className={styles.welcomeSub}>Here&apos;s a live overview of your content management system.</p>
          </div>

          {/* Stat Cards */}
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} ${styles.statCardTeal}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconTeal}`}><BriefcaseIcon /></div>
                <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> Active</span>
              </div>
              <div className={styles.statValue}>{val(stats.projects)}</div>
              <div className={styles.statLabel}>Portfolio Projects</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: '72%', '--fill-color': 'var(--color-primary)' } as React.CSSProperties} /></div>
            </div>

            <div className={`${styles.statCard} ${styles.statCardGreen}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconGreen}`}><BookOpenIcon /></div>
                <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> Published</span>
              </div>
              <div className={styles.statValue}>{val(stats.caseStudies)}</div>
              <div className={styles.statLabel}>Case Studies</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: '55%', '--fill-color': 'var(--color-success)' } as React.CSSProperties} /></div>
            </div>

            <div className={`${styles.statCard} ${styles.statCardBlue}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconBlue}`}><SlidersIcon /></div>
                <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> Live</span>
              </div>
              <div className={styles.statValue}>{val(stats.heroSlides)}</div>
              <div className={styles.statLabel}>Hero Slides</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: '60%', '--fill-color': 'var(--color-info)' } as React.CSSProperties} /></div>
            </div>

            <div className={`${styles.statCard} ${styles.statCardOrange}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconOrange}`}><InboxIcon /></div>
                {stats.newEnquiries + stats.newApps > 0
                  ? <span className={`${styles.statBadge} ${styles.statBadgeUp}`} style={{ background: '#fef2f2', color: '#dc2626' }}>
                      🔴 {stats.newEnquiries + stats.newApps} new
                    </span>
                  : <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> All clear</span>
                }
              </div>
              <div className={styles.statValue}>{val(stats.newEnquiries)}</div>
              <div className={styles.statLabel}>New Enquiries</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: `${Math.min(100, stats.newEnquiries * 10)}%`, '--fill-color': 'var(--color-warning)' } as React.CSSProperties} /></div>
            </div>
          </div>

          {/* Secondary counts */}
          {(stats.blogPosts > 0 || stats.newApps > 0) && (
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              {stats.blogPosts > 0 && (
                <a href="/admin/blog/posts" style={{ textDecoration: 'none', flex: 1, padding: '12px 16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontWeight: 600 }}>Published Blog Posts</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: '#8b5cf6' }}>{val(stats.blogPosts)}</span>
                </a>
              )}
              {stats.newApps > 0 && (
                <a href="/admin/applications" style={{ textDecoration: 'none', flex: 1, padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#991b1b', fontWeight: 600 }}>New Job Applications</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: '#dc2626' }}>{val(stats.newApps)}</span>
                </a>
              )}
            </div>
          )}

          <div className={styles.bottomGrid}>
            {/* Quick Links */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardTitle}>Quick Actions</div>
                  <div className={styles.cardSubtitle}>Jump to common tasks</div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {QUICK_LINKS.map(link => (
                    <a key={link.href} href={link.href} style={{
                      display:'flex', alignItems:'center', gap:12, padding:'12px 16px',
                      background:'var(--color-surface-2)', border:'1px solid var(--color-border)',
                      borderRadius:'var(--radius-md)', textDecoration:'none',
                      transition:'all var(--transition-base)',
                      color:'var(--color-text-primary)', fontWeight:600, fontSize:13,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = link.color; (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-surface)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-border)'; (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-surface-2)'; }}
                    >
                      <span style={{ width:8, height:8, borderRadius:'50%', background:link.color, flexShrink:0 }} />
                      {link.label}
                      <span style={{ marginLeft:'auto', color:'var(--color-text-muted)', fontSize:16 }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardTitle}>Content Summary</div>
                  <div className={styles.cardSubtitle}>Live counts from database</div>
                </div>
                <button className={styles.cardAction} onClick={() => window.location.reload()}>Refresh</button>
              </div>
              <div className={styles.cardBody}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'Portfolio Projects', value: stats.projects,    color: 'var(--color-primary)' },
                    { label: 'Case Studies',        value: stats.caseStudies, color: 'var(--color-success)' },
                    { label: 'Hero Slides',         value: stats.heroSlides,  color: 'var(--color-info)' },
                    { label: 'Blog Posts',          value: stats.blogPosts,   color: '#8b5cf6' },
                    { label: 'New Enquiries',       value: stats.newEnquiries, color: '#f59e0b' },
                    { label: 'New Applications',    value: stats.newApps,     color: '#ef4444' },
                  ].map(row => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                      <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                        {row.label}
                      </span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: loading ? 'var(--color-text-muted)' : row.color }}>
                        {loading ? '…' : formatNumber(row.value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
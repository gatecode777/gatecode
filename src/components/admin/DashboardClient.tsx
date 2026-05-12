'use client';

import Sidebar from './Sidebar';
import styles from './styles/Dashboard.module.css';
import type { AdminUser } from '@/types';
import { formatNumber } from '@/lib/utils';

const BellIcon    = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>);
const BriefcaseIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>);
const BookOpenIcon  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const SlidersIcon   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>);
const EyeIcon       = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>);
const TrendUpIcon   = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:10,height:10}}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);

const CHART_DATA   = [45,72,56,88,64,95,78,82,91,68,75,100];
const CHART_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const QUICK_LINKS = [
  { label: 'Add New Project',    href: '/admin/portfolio/projects', color: 'var(--color-primary)' },
  { label: 'Add Case Study',     href: '/admin/case-studies/new',   color: 'var(--color-info)' },
  { label: 'Manage Slider',      href: '/admin/portfolio/slider',   color: 'var(--color-success)' },
  { label: 'Portfolio Categories', href: '/admin/portfolio/categories', color: 'var(--color-warning)' },
];

interface DashboardClientProps { admin: AdminUser | null; }

export default function DashboardClient({ admin }: DashboardClientProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const h = new Date().getHours();
  const greeting = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  const adminName = admin?.name ?? 'Admin';
  const firstName = adminName.split(' ')[0];
  const initials  = adminName.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();

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
              <BellIcon /><span className={styles.notifDot} />
            </button>
            <div className={styles.headerAvatar} title={adminName}>{initials}</div>
          </div>
        </header>

        <main className={styles.pageContent}>
          <div className={styles.pageWelcome}>
            <h1 className={styles.welcomeText}>{greeting}, <span>{firstName}</span> 👋</h1>
            <p className={styles.welcomeSub}>Here&apos;s an overview of your content management system.</p>
          </div>

          {/* Stat Cards */}
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} ${styles.statCardTeal}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconTeal}`}><BriefcaseIcon /></div>
                <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> Active</span>
              </div>
              <div className={styles.statValue}>{formatNumber(24)}</div>
              <div className={styles.statLabel}>Portfolio Projects</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: '72%', '--fill-color': 'var(--color-primary)' } as React.CSSProperties} /></div>
            </div>

            <div className={`${styles.statCard} ${styles.statCardGreen}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconGreen}`}><BookOpenIcon /></div>
                <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> Published</span>
              </div>
              <div className={styles.statValue}>{formatNumber(8)}</div>
              <div className={styles.statLabel}>Case Studies</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: '55%', '--fill-color': 'var(--color-success)' } as React.CSSProperties} /></div>
            </div>

            <div className={`${styles.statCard} ${styles.statCardBlue}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconBlue}`}><SlidersIcon /></div>
                <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> Live</span>
              </div>
              <div className={styles.statValue}>{formatNumber(6)}</div>
              <div className={styles.statLabel}>Hero Slides</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: '60%', '--fill-color': 'var(--color-info)' } as React.CSSProperties} /></div>
            </div>

            <div className={`${styles.statCard} ${styles.statCardOrange}`}>
              <div className={styles.statHeader}>
                <div className={`${styles.statIcon} ${styles.statIconOrange}`}><EyeIcon /></div>
                <span className={`${styles.statBadge} ${styles.statBadgeUp}`}><TrendUpIcon /> +3 new</span>
              </div>
              <div className={styles.statValue}>{formatNumber(284910)}</div>
              <div className={styles.statLabel}>Total Page Views</div>
              <div className={styles.statProgress}><div className={styles.statProgressFill} style={{ width: '85%', '--fill-color': 'var(--color-warning)' } as React.CSSProperties} /></div>
            </div>
          </div>

          <div className={styles.bottomGrid}>
            {/* Chart */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardTitle}>Traffic Overview</div>
                  <div className={styles.cardSubtitle}>Monthly visits — 2024</div>
                </div>
                <button className={styles.cardAction}>View report</button>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.chartPlaceholder}>
                  {CHART_DATA.map((h, i) => (
                    <div key={i} className={`${styles.chartBar} ${i===11?styles.chartBarActive:''}`} style={{ height:`${h}%` }} title={`${CHART_LABELS[i]}: ${formatNumber(Math.round(h*500))}`} />
                  ))}
                </div>
                <div className={styles.chartLabels}>{CHART_LABELS.map(l => <div key={l} className={styles.chartLabel}>{l}</div>)}</div>
              </div>
            </div>

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
          </div>
        </main>
      </div>
    </div>
  );
}

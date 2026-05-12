'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import styles from './styles/Sidebar.module.css';

const DashboardIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>);
const SlidersIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>);
const TagIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>);
const BriefcaseIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>);
const BookOpenIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const SettingsIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
const LogoutIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>);
const MenuIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);
const ShieldIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);


const ServiceIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>);
const LayersIcon  = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>);
const ListIcon    = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>);

const BrainIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>);

const mainItems     = [{ label: 'Dashboard',   href: '/admin/dashboard',            icon: DashboardIcon }];
const portfolioItems = [
  { label: 'Slider',     href: '/admin/portfolio/slider',     icon: SlidersIcon },
  { label: 'Categories', href: '/admin/portfolio/categories', icon: TagIcon },
  { label: 'Projects',   href: '/admin/portfolio/projects',   icon: BriefcaseIcon },
];
const serviceItems = [
  { label: 'Categories',    href: '/admin/services/categories',   icon: LayersIcon },
  { label: 'Sub-Services',  href: '/admin/services/sub-services', icon: ListIcon },
];

const technicalExpertiseItems = [
  { label: 'Tech Expertise', href: '/admin/technical-expertise', icon: BrainIcon },
];

const caseStudyItems = [{ label: 'All Studies', href: '/admin/case-studies', icon: BookOpenIcon }];
const systemItems    = [{ label: 'Settings',    href: '/admin/settings',     icon: SettingsIcon }];

interface SidebarProps { adminName?: string; adminEmail?: string; }

export default function Sidebar({ adminName = 'Admin', adminEmail = '' }: SidebarProps) {
  const pathname   = usePathname();
  const router     = useRouter();
  const { logout } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    try { await fetch('/api/admin/logout', { method: 'POST' }); } catch { /* silent */ }
    finally { logout(); router.push('/admin/login'); }
  };

  const initials = adminName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  const NavLink = ({ href, icon: Icon, label, badge }: { href: string; icon: React.ComponentType; label: string; badge?: number }) => {
    const isActive = pathname === href || (href !== '/admin/dashboard' && pathname.startsWith(href));
    return (
      <Link href={href} className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`} onClick={() => setMobileOpen(false)}>
        <span className={styles.navIcon}><Icon /></span>
        <span className={styles.navLabel}>{label}</span>
        {badge && <span className={styles.navBadge}>{badge}</span>}
      </Link>
    );
  };

  const NavSection = ({ label, items }: { label: string; items: { label: string; href: string; icon: React.ComponentType; badge?: number }[] }) => (
    <div className={styles.navSection}>
      <div className={styles.navSectionLabel}>{label}</div>
      {items.map(item => <NavLink key={item.href} {...item} />)}
    </div>
  );

  return (
    <>
      <button className={styles.mobileToggle} onClick={() => setMobileOpen(true)} aria-label="Open navigation"><MenuIcon /></button>
      {mobileOpen && <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)} />}
      <aside className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarLogo}>
          <div className={styles.logoIcon}><ShieldIcon /></div>
          <div className={styles.logoText}>
            <div className={styles.logoName}>AdminCore</div>
            <div className={styles.logoBadge}>Admin</div>
          </div>
        </div>
        <nav className={styles.sidebarNav}>
          <NavSection label="Main"         items={mainItems} />
          <div className={styles.navDivider} />
          <NavSection label="Portfolio"    items={portfolioItems} />
          <div className={styles.navDivider} />
          <NavSection label="Services"     items={serviceItems} />
          <div className={styles.navDivider} />
          <NavSection label="Tech Expertise" items={technicalExpertiseItems} />
          <div className={styles.navDivider} />
          <NavSection label="Case Studies" items={caseStudyItems} />
          <div className={styles.navDivider} />
          <NavSection label="System"       items={systemItems} />
        </nav>
        <div className={styles.sidebarFooter}>
          <div className={styles.userCard}>
            <div className={styles.userAvatar}>{initials}</div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>{adminName}</div>
              <div className={styles.userRole}>{adminEmail || 'Administrator'}</div>
            </div>
            <button className={styles.logoutBtn} onClick={handleLogout} title="Sign out" aria-label="Sign out"><LogoutIcon /></button>
          </div>
        </div>
      </aside>
    </>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ServicesDropdown, CompanyDropdown, TechnicalExpertiseDropdown } from '../NavbarDropdown/NavbarDropdown';
import './Navbar.css';

const navLinks = [
  { label: 'Company', path: '/about', hasDropdown: true },
  { label: 'Services', path: '/services', hasDropdown: true },
  { label: 'Technical Expertise', path: '/services', hasDropdown: true },
  { label: 'Blog', path: '/blog', hasDropdown: false },
  { label: 'Contact Us', path: '/contact', hasDropdown: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 968) { setMenuOpen(false); setActiveDropdown(null); }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleDropdownItemClick = () => { setActiveDropdown(null); setMenuOpen(false); };

  const toggleMenu = () => { setMenuOpen(p => !p); setActiveMobileDropdown(null); };
  const toggleDropdown = (label: string) => {
    if (typeof window !== 'undefined' && window.innerWidth > 968)
      setActiveDropdown(p => p === label ? null : label);
  };
  const toggleMobileDropdown = (label: string) =>
    setActiveMobileDropdown(v => v === label ? null : label);

  return (
    <>
      <div className="navbar__topbar" />
      <header ref={headerRef} className={`navbar${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="navbar__container">
          <Link href="/" className="navbar__logo" aria-label="Gatecode Technologies Home" onClick={() => setActiveDropdown(null)}>
            <Image src="/images/gatecode.webp" alt="Gatecode Technologies" width={184} height={92} priority />
          </Link>

          <nav className="navbar__nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <div
                key={link.label}
                className={`navbar__item-wrapper${link.label === 'Services' ? ' has-mega-menu' : ''}${activeDropdown === link.label ? ' dropdown-active' : ''}`}
              >
                <Link
                  href={link.path}
                  className="navbar__link"
                  aria-expanded={link.hasDropdown ? activeDropdown === link.label : undefined}
                  onClick={link.hasDropdown ? (e) => { e.preventDefault(); toggleDropdown(link.label); } : handleDropdownItemClick}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="navbar__dropdown-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </Link>

                {link.label === 'Services' && activeDropdown === 'Services' && (
                  <ServicesDropdown onItemClick={handleDropdownItemClick} />
                )}
                {link.label === 'Company' && activeDropdown === 'Company' && (
                  <CompanyDropdown onItemClick={handleDropdownItemClick} />
                )}
                {link.label === 'Technical Expertise' && activeDropdown === 'Technical Expertise' && (
                  <TechnicalExpertiseDropdown onItemClick={handleDropdownItemClick} />
                )}
              </div>
            ))}
          </nav>

          <div className="navbar__actions">
            <Link href="/get-started" className="btn btn--primary" onClick={() => { setMenuOpen(false); setActiveDropdown(null); }}>
              Get Started
            </Link>
          </div>

          <button
            className={`navbar__hamburger${menuOpen ? ' active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </header>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}

      {menuOpen && (
        <div className="navbar__mobile-menu open" aria-hidden={false}>
          {navLinks.map(link => (
            <div key={link.label} className="navbar__mobile-item">
              {link.hasDropdown ? (
                <>
                  <button
                    className={`navbar__mobile-link${activeMobileDropdown === link.label ? ' active' : ''}`}
                    onClick={() => toggleMobileDropdown(link.label)}
                  >
                    {link.label}
                    <svg className={`navbar__dropdown-icon${activeMobileDropdown === link.label ? ' rotate' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {activeMobileDropdown === link.label && link.label === 'Services' && (
                    <div className="navbar__mobile-dropdown">
                      <ServicesDropdown isMobile onItemClick={() => setMenuOpen(false)} />
                    </div>
                  )}
                  {activeMobileDropdown === link.label && link.label === 'Company' && (
                    <div className="navbar__mobile-dropdown">
                      <CompanyDropdown isMobile onItemClick={() => setMenuOpen(false)} />
                    </div>
                  )}
                  {activeMobileDropdown === link.label && link.label === 'Technical Expertise' && (
                    <div className="navbar__mobile-dropdown">
                      <TechnicalExpertiseDropdown isMobile onItemClick={() => setMenuOpen(false)} />
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.path} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>{link.label}</Link>
              )}
            </div>
          ))}
          <div className="navbar__mobile-actions">
            <Link href="/get-started" className="btn btn--primary" onClick={() => setMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import Link from 'next/link';

type NavCategory = {
  name: string;
  slug: string;
  subServices: {
    name: string;
    slug: string;
  }[];
};

type NavExpertise = {
  name: string;
  slug: string;
};

const STATIC_CATEGORIES: NavCategory[] = [
  { name: 'Web Development', slug: 'web-development', subServices: [{ name: 'Custom Website Development', slug: 'custom-website-development' }, { name: 'CMS Website Development', slug: 'cms-website-development' }] },

  { name: 'Software Development', slug: 'software-development', subServices: [{ name: 'Smart & Scalable Software Solutions', slug: 'scalable-solutions' }, { name: 'Custom Development & System Integration', slug: 'system-integration' }, { name: 'Ongoing Support & Future-Ready Technology', slug: 'ongoing-support' }] },

  { name: 'Mobile App Development', slug: 'mobile-app-development', subServices: [{ name: 'Android App Development', slug: 'android-development' }] },

  { name: 'Graphic Design', slug: 'graphic-design', subServices: [{ name: 'Motion Graphics & Creative Visuals', slug: 'motion-graphics' }, { name: 'Brand Identity Design', slug: 'brand-identity' }, { name: 'Banner & Poster Design', slug: 'banner-design' }, { name: 'Logo Design & Branding', slug: 'logo-design' }, { name: 'Packaging Design', slug: 'packaging-design' }, { name: 'Social Media Post Design', slug: 'social-media-design' }] },

  { name: 'Digital Marketing', slug: 'digital-marketing', subServices: [{ name: 'SEO (Search Engine Optimization)', slug: 'seo' }, { name: 'Lead Generation', slug: 'lead-generation' }, { name: 'SMM (Social Media Marketing)', slug: 'smm' }, { name: 'SMO (Social Media Optimization)', slug: 'smo' }, { name: 'Email Marketing', slug: 'email-marketing' }, { name: 'Search Engine Marketing', slug: 'sem' }, { name: 'Content Marketing', slug: 'content-marketing' }, { name: 'Content Writing', slug: 'content-writing' }, { name: 'Brand Strategy & Promotion', slug: 'brand-strategy' }] },

  { name: 'Data Management', slug: 'data-management', subServices: [{ name: 'Data Entry Services', slug: 'data-entry' }, { name: 'Data Processing', slug: 'data-processing' }, { name: 'Data Cleansing & Validation', slug: 'data-cleansing' }, { name: 'Document Digitization', slug: 'document-digitization' }, { name: 'Data Analysis & Reporting', slug: 'data-analysis' }, { name: 'CRM  Data Management', slug: 'crm-data' }, { name: 'Excel & Spread Sheet Management', slug: 'excel-management' }, { name: 'Data Migration Services', slug: 'data-migration' }] },

  { name: 'UI/UX Design', slug: 'ui-ux-design', subServices: [{ name: 'UI (User Interface) Design', slug: 'ui-design' }, { name: 'UX (User Experience) Design', slug: 'ux-design' }, { name: 'Wireframing and Prototyping', slug: 'wireframing' }, { name: 'User Research & Analysis', slug: 'user-research' }] },

  { name: 'BPO Services', slug: 'bpo-services', subServices: [{ name: 'Call Center Services', slug: 'call-center' }, { name: 'Custom Support Services', slug: 'custom-support' }, { name: 'Technical Support', slug: 'technical-support' }, { name: 'Back Office Services', slug: 'back-office' }] },
  
  { name: 'Accounting', slug: 'accounting', subServices: [{ name: 'Audit & Compliance Support', slug: 'audit-compliance' }, { name: 'Accurate Financial Management', slug: 'financial-management' }, { name: 'Taxation & Compliance Support', slug: 'taxation' }, { name: 'Strategic Financial Solutions', slug: 'financial-solutions' }] },
  
];

const STATIC_EXPERTISE: NavExpertise[] = [
  { name: 'Web Developers', slug: 'web-developers' },
  { name: 'App Developers', slug: 'app-developers' },
  { name: 'E-Commerce & CMS', slug: 'e-commerce-cms' },
  { name: 'Java Script Developers', slug: 'javascript-developers' },
  { name: 'UI/UX Designers', slug: 'ui-ux-designers' },
  { name: 'Graphic Designers', slug: 'graphic-designers' },
  { name: 'Digital Marketer', slug: 'digital-marketer' },
];

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Career', path: '/careers' },
  { label: 'Internship', path: '/internship' },
  { label: 'Case Studies', path: '/case-study' },
  { label: 'Blog', path: '/blog' },
  { label: 'Engagement Process', path: '/engagement-process' },
];

// ── Slug → URL helpers ─────────────────────────────────────────────────────
// All categories route to /services/[slug] — no hardcoded exceptions
function catHref(slug: string): string {
  return `/services/${slug}`;
}

// Sub-service pages go to /services/[category-slug]/[sub-slug]
function subHref(catSlug: string, slug: string): string {
  return `/services/${catSlug}/${slug}`;
}

// All expertise items route to /expertise/[slug]
function expertiseHref(slug: string): string {
  return `/expertise/${slug}`;
}

const SERVICE_COLUMN_SLUGS = [
  ['web-development', 'digital-marketing'],
  ['software-development', 'data-management'],
  ['mobile-app-development', 'ui-ux-design', 'accounting'],
  ['graphic-design', 'bpo-services'],
];

function getServiceColumns(): NavCategory[][] {
  return SERVICE_COLUMN_SLUGS.map(columnSlugs =>
    columnSlugs
      .map(slug => STATIC_CATEGORIES.find(cat => cat.slug === slug))
      .filter((cat): cat is NavCategory => Boolean(cat))
  );
}

interface DropdownProps {
  isMobile?: boolean;
  onItemClick: () => void;
}

// ── Services mega dropdown ─────────────────────────────────────────────────
export function ServicesDropdown({ isMobile, onItemClick }: DropdownProps) {
  const columns = getServiceColumns();

  return (
    <div className={`services-dropdown${isMobile ? ' services-dropdown--mobile' : ''}`}>
      <div className="services-dropdown__main">
        <div className="services-dropdown__container">
          {columns.map((col, ci) => (
            <div key={ci} className="services-dropdown__column">
              {col.map(cat => (
                <div key={cat.slug} className="services-dropdown__group">
                  {/* Category heading — always a link using its own slug */}
                  <h3 className="services-dropdown__heading">
                    <Link
                      href={catHref(cat.slug)}
                      className="services-dropdown__link"
                      onClick={onItemClick}
                    >
                      {cat.name}
                    </Link>
                  </h3>

                  {/* Sub-services — each also a clickable link using its own slug */}
                  {cat.subServices.length > 0 && (
                    <ul className="services-dropdown__list">
                      {cat.subServices.map(sub => (
                        <li key={sub.slug} className="services-dropdown__item">
                          <span className="services-dropdown__bullet">•</span>
                          <Link
                            href={subHref(cat.slug, sub.slug)}
                            className="services-dropdown__text services-dropdown__sublink"
                            onClick={onItemClick}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Company dropdown ───────────────────────────────────────────────────────
export function CompanyDropdown({ isMobile, onItemClick }: DropdownProps) {
  return (
    <div className={`simple-dropdown${isMobile ? ' simple-dropdown--mobile' : ''}`}>
      <ul className="simple-dropdown__list">
        {companyLinks.map(link => (
          <li key={link.label} className="simple-dropdown__item">
            <Link href={link.path} className="simple-dropdown__link" onClick={onItemClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Technical Expertise dropdown ───────────────────────────────────────────
export function TechnicalExpertiseDropdown({ isMobile, onItemClick }: DropdownProps) {
  return (
    <div className={`simple-dropdown${isMobile ? ' simple-dropdown--mobile' : ''}`}>
      <ul className="simple-dropdown__list">
        {STATIC_EXPERTISE.map(item => (
          <li key={item.slug} className="simple-dropdown__item">
            <Link
              href={expertiseHref(item.slug)}
              className="simple-dropdown__link"
              onClick={onItemClick}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

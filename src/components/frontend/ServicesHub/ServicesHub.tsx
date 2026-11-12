import Link from 'next/link';
import './ServicesHub.css';

export const SITE_URL = 'https://www.gatecode.in';

interface Category {
  slug: string;
  title: string;
  description: string;
  subs: { slug: string; label: string }[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Fast, responsive, search-friendly websites, from custom builds to CMS-powered sites you can edit yourself.',
    subs: [
      { slug: 'custom-website-development', label: 'Custom Website Development' },
      { slug: 'cms-website-development', label: 'CMS Website Development' },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    description: 'Custom business software, system integrations and long-term support for applications that grow with you.',
    subs: [
      { slug: 'scalable-solutions', label: 'Scalable Solutions' },
      { slug: 'system-integration', label: 'System Integration' },
      { slug: 'ongoing-support', label: 'Ongoing Support' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Android, iOS and cross-platform apps, from design to Play Store and App Store launch.',
    subs: [{ slug: 'android-development', label: 'Android App Development' }],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research-led interface and experience design that makes websites and apps easy to use and convert better.',
    subs: [
      { slug: 'ui-design', label: 'UI Design' },
      { slug: 'ux-design', label: 'UX Design' },
      { slug: 'user-research', label: 'User Research' },
      { slug: 'wireframing', label: 'Wireframing & Prototyping' },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Logos, brand identities, social creatives, packaging and motion graphics that make your brand recognisable.',
    subs: [
      { slug: 'logo-design', label: 'Logo Design' },
      { slug: 'brand-identity', label: 'Brand Identity' },
      { slug: 'social-media-design', label: 'Social Media Design' },
      { slug: 'banner-design', label: 'Banner & Poster Design' },
      { slug: 'packaging-design', label: 'Packaging Design' },
      { slug: 'motion-graphics', label: 'Motion Graphics' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Search, social, content and email marketing focused on qualified leads and measurable growth.',
    subs: [
      { slug: 'seo', label: 'SEO' },
      { slug: 'sem', label: 'Search Engine Marketing' },
      { slug: 'smm', label: 'Social Media Marketing' },
      { slug: 'smo', label: 'Social Media Optimisation' },
      { slug: 'content-marketing', label: 'Content Marketing' },
      { slug: 'content-writing', label: 'Content Writing' },
      { slug: 'email-marketing', label: 'Email Marketing' },
      { slug: 'lead-generation', label: 'Lead Generation' },
      { slug: 'brand-strategy', label: 'Brand Strategy' },
    ],
  },
  {
    slug: 'accounting',
    title: 'Accounting',
    description: 'Bookkeeping, taxation, audit support and financial planning handled by a dedicated team.',
    subs: [
      { slug: 'financial-management', label: 'Financial Management' },
      { slug: 'financial-solutions', label: 'Financial Solutions' },
      { slug: 'taxation', label: 'Taxation' },
      { slug: 'audit-compliance', label: 'Audit & Compliance' },
    ],
  },
  {
    slug: 'bpo-services',
    title: 'BPO Services',
    description: 'Call centre, back office and technical support teams that scale with your workload.',
    subs: [
      { slug: 'call-center', label: 'Call Center' },
      { slug: 'back-office', label: 'Back Office' },
      { slug: 'technical-support', label: 'Technical Support' },
      { slug: 'custom-support', label: 'Custom Support' },
    ],
  },
  {
    slug: 'data-management',
    title: 'Data Management',
    description: 'Accurate data entry, cleansing, migration, analysis and digitisation for reliable business records.',
    subs: [
      { slug: 'data-entry', label: 'Data Entry' },
      { slug: 'data-cleansing', label: 'Data Cleansing' },
      { slug: 'data-processing', label: 'Data Processing' },
      { slug: 'data-migration', label: 'Data Migration' },
      { slug: 'data-analysis', label: 'Data Analysis' },
      { slug: 'crm-data', label: 'CRM Data Management' },
      { slug: 'document-digitization', label: 'Document Digitisation' },
      { slug: 'excel-management', label: 'Excel Management' },
    ],
  },
];

export default function ServicesHub() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Services | Gatecode Technologies',
      url: `${SITE_URL}/services`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: CATEGORIES.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.title,
          url: `${SITE_URL}/services/${c.slug}`,
        })),
      },
    },
  ];

  return (
    <div className="sh-page">
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
      ))}

      <header className="sh-hero">
        <div className="sh-container">
          <h1 className="sh-hero-title">Our Services</h1>
          <p className="sh-hero-sub">
            Gatecode Technologies is a Jaipur-based team covering software and web development, design, digital
            marketing, accounting, BPO and data management. Choose a service below, or talk to us about combining a few.
          </p>
          <Link href="/contact" className="sh-cta">Get Free Consultation</Link>
        </div>
      </header>

      <section className="sh-section" aria-labelledby="sh-grid-title">
        <div className="sh-container">
          <h2 id="sh-grid-title" className="sh-section-title">What We Do</h2>
          <div className="sh-grid">
            {CATEGORIES.map((c) => (
              <article key={c.slug} className="sh-card">
                <h3 className="sh-card-title">
                  <Link href={`/services/${c.slug}`}>{c.title}</Link>
                </h3>
                <p className="sh-card-desc">{c.description}</p>
                <ul className="sh-sub-list">
                  {c.subs.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${c.slug}/${s.slug}`}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${c.slug}`} className="sh-more">
                  Explore {c.title} &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

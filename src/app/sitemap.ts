import type { MetadataRoute } from 'next';
import connectDB from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import BlogCategory from '@/models/BlogCategory';
import CaseStudyModel from '@/models/CaseStudy';

// Built from MongoDB on request, so posts/categories/case studies published in
// the admin appear without a redeploy.
export const dynamic = 'force-dynamic';

const SITE = 'https://gatecode.in';

// Static pages have no per-page modified date. Use a fixed date (bump it when the
// static content changes) instead of `new Date()`, which would claim every page
// changed on every crawl and teach Google to ignore <lastmod>.
const STATIC_LAST_MODIFIED = new Date('2026-05-28T12:00:57Z');

type Freq = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

function entry(path: string, priority: number, changeFrequency: Freq, lastModified: Date = STATIC_LAST_MODIFIED) {
  return { url: `${SITE}${path === '/' ? '' : path}`, lastModified, changeFrequency, priority };
}

const CORE = ['/about', '/contact', '/portfolio', '/case-study', '/careers', '/internship', '/engagement-process', '/get-started'];

const SERVICES: Record<string, string[]> = {
  'web-development': ['cms-website-development', 'custom-website-development'],
  'software-development': ['ongoing-support', 'scalable-solutions', 'system-integration'],
  'mobile-app-development': ['android-development'],
  'digital-marketing': [
    'brand-strategy', 'content-marketing', 'content-writing', 'email-marketing',
    'lead-generation', 'sem', 'seo', 'smm', 'smo',
  ],
  'ui-ux-design': ['ui-design', 'user-research', 'ux-design', 'wireframing'],
  'data-management': [
    'crm-data', 'data-analysis', 'data-cleansing', 'data-entry',
    'data-migration', 'data-processing', 'document-digitization', 'excel-management',
  ],
  'bpo-services': ['back-office', 'call-center', 'custom-support', 'technical-support'],
  accounting: ['audit-compliance', 'financial-management', 'financial-solutions', 'taxation'],
  'graphic-design': [
    'banner-design', 'brand-identity', 'logo-design', 'motion-graphics',
    'packaging-design', 'social-media-design',
  ],
};

const EXPERTISE = [
  'web-developers', 'app-developers', 'e-commerce-cms', 'javascript-developers',
  'ui-ux-designers', 'graphic-designers', 'digital-marketer',
];

// Landing / solution pages that were already in the previous sitemap
const SOLUTIONS = [
  '/app-development', '/website-development', '/custom-software', '/crm-custom-software',
  '/mobile-apps', '/technology-banking', '/connected-banking',
];

const LEGAL = ['/privacy-policy', '/terms-and-conditions', '/cookie-policy'];

function staticEntries(): MetadataRoute.Sitemap {
  return [
    entry('/', 1.0, 'weekly'),
    ...CORE.map(p => entry(p, 0.8, 'monthly')),
    ...Object.entries(SERVICES).flatMap(([service, subs]) => [
      entry(`/services/${service}`, 0.9, 'monthly'),
      ...subs.map(sub => entry(`/services/${service}/${sub}`, 0.8, 'monthly')),
    ]),
    ...EXPERTISE.map(slug => entry(`/expertise/${slug}`, 0.8, 'monthly')),
    ...SOLUTIONS.map(p => entry(p, 0.8, 'monthly')),
    ...LEGAL.map(p => entry(p, 0.3, 'yearly')),
  ];
}

async function dynamicEntries(): Promise<MetadataRoute.Sitemap> {
  await connectDB();

  const [posts, categories, postCounts, studies] = await Promise.all([
    BlogPost.find({ status: 'published', isActive: true })
      .select('slug updatedAt publishedAt')
      .sort({ publishedAt: -1 })
      .lean(),
    BlogCategory.find({ isActive: true }).select('_id slug updatedAt').lean(),
    BlogPost.aggregate([
      { $match: { status: 'published', isActive: true, categoryId: { $ne: null } } },
      { $group: { _id: '$categoryId', lastPost: { $max: '$updatedAt' } } },
    ]),
    CaseStudyModel.find({ isActive: true }).select('slug updatedAt').lean(),
  ]);

  const lastPostByCategory = new Map<string, Date>(postCounts.map((c: { _id: unknown; lastPost: Date }) => [String(c._id), c.lastPost]));
  const newestPost = posts[0]?.updatedAt ?? posts[0]?.publishedAt;

  return [
    // /blog itself: modified whenever the newest post is
    entry('/blog', 0.8, 'daily', newestPost ? new Date(newestPost) : STATIC_LAST_MODIFIED),

    ...posts.map(post => entry(`/blog/${post.slug}`, 0.8, 'weekly', new Date(post.updatedAt || post.publishedAt || new Date()))),

    // only categories with at least one published post (empty ones are thin pages)
    ...categories
      .filter(cat => lastPostByCategory.has(String(cat._id)))
      .map(cat => entry(`/blog/category/${cat.slug}`, 0.7, 'weekly', new Date(lastPostByCategory.get(String(cat._id)) as Date))),

    ...studies.map(study => entry(`/case-study/${study.slug}`, 0.7, 'monthly', new Date(study.updatedAt || new Date()))),
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = staticEntries();
  try {
    return [...pages, ...(await dynamicEntries())];
  } catch (error) {
    // A DB outage must not turn the whole sitemap into a 500 for crawlers.
    console.error('sitemap: failed to load dynamic entries', error);
    return pages;
  }
}

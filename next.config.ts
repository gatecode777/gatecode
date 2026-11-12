import type { NextConfig } from 'next';
import path from 'path';

// Before service pages were nested under their category the site used flat URLs such as
// /services/seo. Old sitemaps advertised them, so Google still requests them and gets 404.
// Frozen map of old flat slug -> current category; every target page exists.
const LEGACY_FLAT_SERVICE_SLUGS: Record<string, string> = {
  'android-development': 'mobile-app-development',
  'audit-compliance': 'accounting',
  'back-office': 'bpo-services',
  'banner-design': 'graphic-design',
  'brand-identity': 'graphic-design',
  'brand-strategy': 'digital-marketing',
  'call-center': 'bpo-services',
  'cms-website-development': 'web-development',
  'content-marketing': 'digital-marketing',
  'content-writing': 'digital-marketing',
  'crm-data': 'data-management',
  'custom-support': 'bpo-services',
  'custom-website-development': 'web-development',
  'data-analysis': 'data-management',
  'data-cleansing': 'data-management',
  'data-entry': 'data-management',
  'data-migration': 'data-management',
  'data-processing': 'data-management',
  'document-digitization': 'data-management',
  'email-marketing': 'digital-marketing',
  'excel-management': 'data-management',
  'financial-management': 'accounting',
  'financial-solutions': 'accounting',
  'lead-generation': 'digital-marketing',
  'logo-design': 'graphic-design',
  'motion-graphics': 'graphic-design',
  'ongoing-support': 'software-development',
  'packaging-design': 'graphic-design',
  'scalable-solutions': 'software-development',
  'sem': 'digital-marketing',
  'seo': 'digital-marketing',
  'smm': 'digital-marketing',
  'smo': 'digital-marketing',
  'social-media-design': 'graphic-design',
  'system-integration': 'software-development',
  'taxation': 'accounting',
  'technical-support': 'bpo-services',
  'ui-design': 'ui-ux-design',
  'user-research': 'ui-ux-design',
  'ux-design': 'ui-ux-design',
  'wireframing': 'ui-ux-design',
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'img.freepik.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
  },
  compress: true,
  // Real server-side 308s (crawlers see them, unlike a client-side router.replace)
  async redirects() {
    return [
      { source: '/blog/detail', destination: '/blog', permanent: true },
      { source: '/case-study-detail', destination: '/case-study', permanent: true },
      ...Object.entries(LEGACY_FLAT_SERVICE_SLUGS).map(([slug, category]) => ({
        source: `/services/${slug}`,
        destination: `/services/${category}/${slug}`,
        permanent: true,
      })),
    ];
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      'react-icons/fi',
      'react-icons/fa',
      'react-icons/bs',
      'framer-motion',
    ],
  },
  turbopack: {
    root: __dirname,
    resolveAlias: {
      'next/dist/build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
      '../build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
      '@next/polyfill-module': './src/lib/empty-polyfill.js',
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'next/dist/build/polyfills/polyfill-module': path.resolve(__dirname, 'src/lib/empty-polyfill.js'),
      '../build/polyfills/polyfill-module': path.resolve(__dirname, 'src/lib/empty-polyfill.js'),
    };
    return config;
  },
};

export default nextConfig;


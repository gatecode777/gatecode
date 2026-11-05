import type { NextConfig } from 'next';
import path from 'path';

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


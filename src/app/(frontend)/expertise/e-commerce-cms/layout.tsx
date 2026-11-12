import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce & CMS Web Development Company | Gatecode',
  description: 'Looking for an e-commerce website development company in India? Gatecode Technologies provides top e-commerce web development services, CMS development, and dedicated Shopify, WooCommerce, & Magento developers.',
  keywords: [
    'ecommerce app development company',
    'ecommerce web development',
    'ecommerce website development',
    'ecommerce development',
    'ecommerce development services',
    'ecommerce development company india',
    'ecommerce web development services',
    'hire ecommerce developer',
    'cms development company',
    'hire magento developer',
    'hire woocommerce developer',
    'hire shopify developer',
    'hire shopify developer india',
    'ecommerce website development company',
    'ecommerce website development company in india',
    'ecommerce website designing company in india',
    'best ecommerce website development company'
  ],
  alternates: {
    canonical: 'https://www.gatecode.in/expertise/e-commerce-cms',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'E-Commerce & CMS Web Development Company | Gatecode',
    description: 'Looking for an e-commerce website development company in India? Gatecode Technologies provides top e-commerce web development services, CMS development, and dedicated Shopify, WooCommerce, & Magento developers.',
    url: 'https://www.gatecode.in/expertise/e-commerce-cms',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'E-Commerce & CMS Web Development Company | Gatecode',
    description: 'Looking for an e-commerce website development company in India? Gatecode Technologies provides top e-commerce web development services and CMS solutions.',
  },
};

export default function ECommerceCMSExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


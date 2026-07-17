import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce & CMS Development | Gatecode Technologies',
  description: 'Launch powerful online stores and easy-to-manage CMS platforms with Gatecode Technologies. We deliver custom e-commerce web development, secure payment integrations, and WordPress solutions.',
  keywords: [
    'Gatecode Technologies',
    'E-Commerce & CMS Development',
    'E-Commerce Website Development',
    'CMS Website Development',
    'Shopping Cart & Checkout Integration',
    'Payment Gateway Integration',
    'Product & Inventory Management',
    'Website Migration & Upgrade',
    'Performance Optimization',
    'Security & Maintenance',
    'Shopify development',
    'WooCommerce development'
  ]
};

export default function ECommerceCMSExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

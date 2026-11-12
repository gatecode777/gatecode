import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Cleansing & Validation Services | Gatecode",
  description: "Restore database integrity, remove duplicate records and improve efficiency with professional data cleansing and validation services.",
  alternates: {
    canonical: '/services/data-management/data-cleansing',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Data Cleansing & Validation Services | Gatecode",
    description: "Restore database integrity, remove duplicate records and improve efficiency with professional data cleansing and validation services.",
    url: "https://www.gatecode.in/services/data-management/data-cleansing",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Data Cleansing & Validation Services | Gatecode",
    description: "Restore database integrity, remove duplicate records and improve efficiency with professional data cleansing and validation services.",
  },
};

export default function DataManagementDataCleansingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

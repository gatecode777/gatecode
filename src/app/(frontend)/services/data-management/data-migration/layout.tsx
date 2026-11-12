import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Migration Services, Zero Data Loss | Gatecode",
  description: "Move databases, applications and cloud assets safely with zero data loss, minimal downtime and rigorous post-migration testing.",
  alternates: {
    canonical: '/services/data-management/data-migration',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Data Migration Services, Zero Data Loss | Gatecode",
    description: "Move databases, applications and cloud assets safely with zero data loss, minimal downtime and rigorous post-migration testing.",
    url: "https://www.gatecode.in/services/data-management/data-migration",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Data Migration Services, Zero Data Loss | Gatecode",
    description: "Move databases, applications and cloud assets safely with zero data loss, minimal downtime and rigorous post-migration testing.",
  },
};

export default function DataManagementDataMigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

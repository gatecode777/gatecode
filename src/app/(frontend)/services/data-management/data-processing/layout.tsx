import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Processing Services | Gatecode",
  description: "Convert fragmented raw datasets into structured, validated and analytics-ready assets with automated, high-speed data processing workflows.",
  alternates: {
    canonical: '/services/data-management/data-processing',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Data Processing Services | Gatecode",
    description: "Convert fragmented raw datasets into structured, validated and analytics-ready assets with automated, high-speed data processing workflows.",
    url: "https://www.gatecode.in/services/data-management/data-processing",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Data Processing Services | Gatecode",
    description: "Convert fragmented raw datasets into structured, validated and analytics-ready assets with automated, high-speed data processing workflows.",
  },
};

export default function DataManagementDataProcessingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

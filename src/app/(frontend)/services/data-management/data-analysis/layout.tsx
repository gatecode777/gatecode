import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Analysis & Reporting Services | Gatecode",
  description: "Turn complex operational data into clear dashboards, trend analysis and executive business intelligence reports with Gatecode Technologies.",
  alternates: {
    canonical: '/services/data-management/data-analysis',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Data Analysis & Reporting Services | Gatecode",
    description: "Turn complex operational data into clear dashboards, trend analysis and executive business intelligence reports with Gatecode Technologies.",
    url: "https://www.gatecode.in/services/data-management/data-analysis",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Data Analysis & Reporting Services | Gatecode",
    description: "Turn complex operational data into clear dashboards, trend analysis and executive business intelligence reports with Gatecode Technologies.",
  },
};

export default function DataManagementDataAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

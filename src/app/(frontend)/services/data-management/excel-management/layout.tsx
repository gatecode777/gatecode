import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Excel & Spreadsheet Management Services | Gatecode",
  description: "Automate manual workbook tasks, build robust formulas and design executive dashboards with advanced Excel and spreadsheet management services.",
  alternates: {
    canonical: '/services/data-management/excel-management',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Excel & Spreadsheet Management Services | Gatecode",
    description: "Automate manual workbook tasks, build robust formulas and design executive dashboards with advanced Excel and spreadsheet management services.",
    url: "https://www.gatecode.in/services/data-management/excel-management",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Excel & Spreadsheet Management Services | Gatecode",
    description: "Automate manual workbook tasks, build robust formulas and design executive dashboards with advanced Excel and spreadsheet management services.",
  },
};

export default function DataManagementExcelManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

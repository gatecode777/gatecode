import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Financial Management Services for Businesses | Gatecode",
  description: "Strengthen cash flow, optimize working capital and gain real-time financial control with accurate corporate financial management from Gatecode Technologies.",
  alternates: {
    canonical: '/services/accounting/financial-management',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Financial Management Services for Businesses | Gatecode",
    description: "Strengthen cash flow, optimize working capital and gain real-time financial control with accurate corporate financial management from Gatecode Technologies.",
    url: "https://gatecode.in/services/accounting/financial-management",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Financial Management Services for Businesses | Gatecode",
    description: "Strengthen cash flow, optimize working capital and gain real-time financial control with accurate corporate financial management from Gatecode Technologies.",
  },
};

export default function AccountingFinancialManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

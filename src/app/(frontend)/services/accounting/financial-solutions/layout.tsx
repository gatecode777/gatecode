import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Strategic Financial Solutions & Advisory | Gatecode",
  description: "Scale with confidence using data-backed financial modeling, capital allocation strategy and profitability advisory from Gatecode Technologies.",
  alternates: {
    canonical: '/services/accounting/financial-solutions',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Strategic Financial Solutions & Advisory | Gatecode",
    description: "Scale with confidence using data-backed financial modeling, capital allocation strategy and profitability advisory from Gatecode Technologies.",
    url: "https://www.gatecode.in/services/accounting/financial-solutions",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Strategic Financial Solutions & Advisory | Gatecode",
    description: "Scale with confidence using data-backed financial modeling, capital allocation strategy and profitability advisory from Gatecode Technologies.",
  },
};

export default function AccountingFinancialSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

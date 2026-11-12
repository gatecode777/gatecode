import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taxation & Compliance Support Services | Gatecode",
  description: "Stay fully tax compliant, legally optimize corporate liabilities and avoid penalties with dedicated direct and indirect tax management support.",
  alternates: {
    canonical: '/services/accounting/taxation',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Taxation & Compliance Support Services | Gatecode",
    description: "Stay fully tax compliant, legally optimize corporate liabilities and avoid penalties with dedicated direct and indirect tax management support.",
    url: "https://www.gatecode.in/services/accounting/taxation",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Taxation & Compliance Support Services | Gatecode",
    description: "Stay fully tax compliant, legally optimize corporate liabilities and avoid penalties with dedicated direct and indirect tax management support.",
  },
};

export default function AccountingTaxationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

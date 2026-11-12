import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Audit & Compliance Support Services | Gatecode",
  description: "Expert audit and compliance support that delivers operational transparency, reduces financial risk and keeps your business aligned with regulations.",
  alternates: {
    canonical: '/services/accounting/audit-compliance',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Audit & Compliance Support Services | Gatecode",
    description: "Expert audit and compliance support that delivers operational transparency, reduces financial risk and keeps your business aligned with regulations.",
    url: "https://www.gatecode.in/services/accounting/audit-compliance",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Audit & Compliance Support Services | Gatecode",
    description: "Expert audit and compliance support that delivers operational transparency, reduces financial risk and keeps your business aligned with regulations.",
  },
};

export default function AccountingAuditComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Entry Services with 99.9% Accuracy | Gatecode",
  description: "Fast, reliable and double-verified data entry services that clear administrative backlogs and deliver 99.9% accuracy for your business.",
  alternates: {
    canonical: '/services/data-management/data-entry',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Data Entry Services with 99.9% Accuracy | Gatecode",
    description: "Fast, reliable and double-verified data entry services that clear administrative backlogs and deliver 99.9% accuracy for your business.",
    url: "https://gatecode.in/services/data-management/data-entry",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Data Entry Services with 99.9% Accuracy | Gatecode",
    description: "Fast, reliable and double-verified data entry services that clear administrative backlogs and deliver 99.9% accuracy for your business.",
  },
};

export default function DataManagementDataEntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

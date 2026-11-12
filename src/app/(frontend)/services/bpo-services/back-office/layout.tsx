import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Back Office Outsourcing Services | Gatecode",
  description: "Streamline operations, clear administrative backlogs and cut costs with accurate, scalable back-office outsourcing from Gatecode Technologies.",
  alternates: {
    canonical: '/services/bpo-services/back-office',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Back Office Outsourcing Services | Gatecode",
    description: "Streamline operations, clear administrative backlogs and cut costs with accurate, scalable back-office outsourcing from Gatecode Technologies.",
    url: "https://www.gatecode.in/services/bpo-services/back-office",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Back Office Outsourcing Services | Gatecode",
    description: "Streamline operations, clear administrative backlogs and cut costs with accurate, scalable back-office outsourcing from Gatecode Technologies.",
  },
};

export default function BpoServicesBackOfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

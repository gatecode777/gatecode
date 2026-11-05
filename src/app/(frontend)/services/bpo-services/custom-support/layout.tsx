import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Customer Support Services | Gatecode",
  description: "Dedicated, brand-aligned customer service teams built around your unique workflows to deliver support that exceeds customer expectations.",
  alternates: {
    canonical: '/services/bpo-services/custom-support',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Custom Customer Support Services | Gatecode",
    description: "Dedicated, brand-aligned customer service teams built around your unique workflows to deliver support that exceeds customer expectations.",
    url: "https://gatecode.in/services/bpo-services/custom-support",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Custom Customer Support Services | Gatecode",
    description: "Dedicated, brand-aligned customer service teams built around your unique workflows to deliver support that exceeds customer expectations.",
  },
};

export default function BpoServicesCustomSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

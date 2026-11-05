import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Content Marketing Services | Gatecode",
  description: "Build authority, traffic and trust with audience research, keyword mapping, long-form content and multi-channel distribution from Gatecode.",
  alternates: {
    canonical: '/services/digital-marketing/content-marketing',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Content Marketing Services | Gatecode",
    description: "Build authority, traffic and trust with audience research, keyword mapping, long-form content and multi-channel distribution from Gatecode.",
    url: "https://gatecode.in/services/digital-marketing/content-marketing",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Content Marketing Services | Gatecode",
    description: "Build authority, traffic and trust with audience research, keyword mapping, long-form content and multi-channel distribution from Gatecode.",
  },
};

export default function DigitalMarketingContentMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Optimization (SMO) Services | Gatecode",
  description: "Boost discoverability, profile credibility and organic reach by optimizing your social channels with Gatecode Technologies.",
  alternates: {
    canonical: '/services/digital-marketing/smo',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Social Media Optimization (SMO) Services | Gatecode",
    description: "Boost discoverability, profile credibility and organic reach by optimizing your social channels with Gatecode Technologies.",
    url: "https://gatecode.in/services/digital-marketing/smo",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Social Media Optimization (SMO) Services | Gatecode",
    description: "Boost discoverability, profile credibility and organic reach by optimizing your social channels with Gatecode Technologies.",
  },
};

export default function DigitalMarketingSmoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

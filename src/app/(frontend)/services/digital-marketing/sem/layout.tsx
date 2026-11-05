import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Search Engine Marketing (SEM) Services | Gatecode",
  description: "Capture high-intent demand with paid search: granular keyword targeting, smart bidding, persuasive ad copy and landing page alignment.",
  alternates: {
    canonical: '/services/digital-marketing/sem',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Search Engine Marketing (SEM) Services | Gatecode",
    description: "Capture high-intent demand with paid search: granular keyword targeting, smart bidding, persuasive ad copy and landing page alignment.",
    url: "https://gatecode.in/services/digital-marketing/sem",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Search Engine Marketing (SEM) Services | Gatecode",
    description: "Capture high-intent demand with paid search: granular keyword targeting, smart bidding, persuasive ad copy and landing page alignment.",
  },
};

export default function DigitalMarketingSemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brand Strategy & Promotion Services | Gatecode",
  description: "Define your identity and build lasting recognition with competitive positioning, messaging frameworks and multi-channel brand promotion.",
  alternates: {
    canonical: '/services/digital-marketing/brand-strategy',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Brand Strategy & Promotion Services | Gatecode",
    description: "Define your identity and build lasting recognition with competitive positioning, messaging frameworks and multi-channel brand promotion.",
    url: "https://gatecode.in/services/digital-marketing/brand-strategy",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Brand Strategy & Promotion Services | Gatecode",
    description: "Define your identity and build lasting recognition with competitive positioning, messaging frameworks and multi-channel brand promotion.",
  },
};

export default function DigitalMarketingBrandStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

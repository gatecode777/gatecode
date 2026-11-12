import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Logo Design Services | Gatecode",
  description: "Unique, timeless vector logos built on brand research, typography and versatile marks, with style guidelines for instant recognition.",
  alternates: {
    canonical: '/services/graphic-design/logo-design',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Custom Logo Design Services | Gatecode",
    description: "Unique, timeless vector logos built on brand research, typography and versatile marks, with style guidelines for instant recognition.",
    url: "https://www.gatecode.in/services/graphic-design/logo-design",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Custom Logo Design Services | Gatecode",
    description: "Unique, timeless vector logos built on brand research, typography and versatile marks, with style guidelines for instant recognition.",
  },
};

export default function GraphicDesignLogoDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

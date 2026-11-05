import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brand Identity Design Services | Gatecode",
  description: "Cohesive brand identity systems with custom logos, typography, color palettes, stationery and style guides for consistency in every medium.",
  alternates: {
    canonical: '/services/graphic-design/brand-identity',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Brand Identity Design Services | Gatecode",
    description: "Cohesive brand identity systems with custom logos, typography, color palettes, stationery and style guides for consistency in every medium.",
    url: "https://gatecode.in/services/graphic-design/brand-identity",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Brand Identity Design Services | Gatecode",
    description: "Cohesive brand identity systems with custom logos, typography, color palettes, stationery and style guides for consistency in every medium.",
  },
};

export default function GraphicDesignBrandIdentityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

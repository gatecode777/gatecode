import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Banner & Poster Design Services | Gatecode",
  description: "Eye-catching banners and posters for print and digital: event posters, web ads, trade show backdrops, standees and outdoor graphics.",
  alternates: {
    canonical: '/services/graphic-design/banner-design',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Banner & Poster Design Services | Gatecode",
    description: "Eye-catching banners and posters for print and digital: event posters, web ads, trade show backdrops, standees and outdoor graphics.",
    url: "https://www.gatecode.in/services/graphic-design/banner-design",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Banner & Poster Design Services | Gatecode",
    description: "Eye-catching banners and posters for print and digital: event posters, web ads, trade show backdrops, standees and outdoor graphics.",
  },
};

export default function GraphicDesignBannerDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

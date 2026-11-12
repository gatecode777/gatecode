import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Post Design Services | Gatecode",
  description: "Scroll-stopping social creatives: Instagram carousels, story templates, YouTube thumbnails and LinkedIn graphics tailored to your brand.",
  alternates: {
    canonical: '/services/graphic-design/social-media-design',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Social Media Post Design Services | Gatecode",
    description: "Scroll-stopping social creatives: Instagram carousels, story templates, YouTube thumbnails and LinkedIn graphics tailored to your brand.",
    url: "https://www.gatecode.in/services/graphic-design/social-media-design",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Social Media Post Design Services | Gatecode",
    description: "Scroll-stopping social creatives: Instagram carousels, story templates, YouTube thumbnails and LinkedIn graphics tailored to your brand.",
  },
};

export default function GraphicDesignSocialMediaDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

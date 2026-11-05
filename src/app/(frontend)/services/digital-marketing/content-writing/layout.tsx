import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Content Writing Services | Gatecode",
  description: "Clear, compelling, human-first content in your brand voice: website copy, articles, SEO blog posts, product descriptions and more.",
  alternates: {
    canonical: '/services/digital-marketing/content-writing',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Professional Content Writing Services | Gatecode",
    description: "Clear, compelling, human-first content in your brand voice: website copy, articles, SEO blog posts, product descriptions and more.",
    url: "https://gatecode.in/services/digital-marketing/content-writing",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Professional Content Writing Services | Gatecode",
    description: "Clear, compelling, human-first content in your brand voice: website copy, articles, SEO blog posts, product descriptions and more.",
  },
};

export default function DigitalMarketingContentWritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

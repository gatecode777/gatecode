import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best SEO Services in Jaipur | Expert SEO Company',
  description:
    'Looking for the best SEO services in Jaipur? Our expert services company delivers affordable search engine optimization for unmatched local growth.',
  keywords: [
    'best seo services in jaipur',
    'expert seo company',
    'affordable search engine optimization',
    'seo company jaipur',
    'seo services in jaipur',
    'Gatecode Technologies',
  ],
  alternates: {
    canonical: '/services/digital-marketing/seo',
  },
  openGraph: {
    title: 'Best SEO Services in Jaipur | Expert SEO Company',
    description:
      'Looking for the best SEO services in Jaipur? Our expert services company delivers affordable search engine optimization for unmatched local growth.',
    url: 'https://gatecode.in/services/digital-marketing/seo',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best SEO Services in Jaipur | Expert SEO Company',
    description:
      'Looking for the best SEO services in Jaipur? Our expert services company delivers affordable search engine optimization for unmatched local growth.',
  },
};

export default function SeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

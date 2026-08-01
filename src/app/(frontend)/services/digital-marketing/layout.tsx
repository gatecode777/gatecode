import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Company in India | Digital Marketing Agency',
  description: 'Gatecode Technologies is the best digital marketing company in India. We offer performance marketing agency solutions, seo digital marketing, social media marketing services, and b2b digital marketing services globally.',
  keywords: [
    'digital marketing agency',
    'digital marketing company',
    'digital marketing company in india',
    'best digital marketing company in india',
    'seo digital marketing',
    'search engine optimization digital marketing',
    'social media marketing agency',
    'social media marketing services',
    'performance marketing agency',
    'affordable local seo services',
    'seo services india',
    'b2b digital marketing services',
    'white label digital marketing services',
    'b2b lead generation services in india',
    'automated email marketing services',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/digital-marketing',
  },
  openGraph: {
    title: 'Best Digital Marketing Company in India | Digital Marketing Agency',
    description: 'Gatecode Technologies is the best digital marketing company in India offering performance marketing agency solutions, seo digital marketing, and social media marketing services.',
    url: 'https://gatecode.in/services/digital-marketing',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Company in India | Digital Marketing Agency',
    description: 'Gatecode Technologies is the best digital marketing company in India offering performance marketing agency solutions, seo digital marketing, and social media marketing services.',
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

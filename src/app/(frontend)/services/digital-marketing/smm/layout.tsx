import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affordable Social Media Marketing Services Agency',
  description:
    'Need affordable social media marketing services for small business? Our expert agency provides the best SMM marketing services to grow your brand.',
  keywords: [
    'affordable social media marketing services',
    'social media marketing agency',
    'smm marketing services',
    'social media marketing services for small business',
    'best smm marketing services',
    'Gatecode Technologies',
  ],
  alternates: {
    canonical: '/services/digital-marketing/smm',
  },
  openGraph: {
    title: 'Affordable Social Media Marketing Services Agency',
    description:
      'Need affordable social media marketing services for small business? Our expert agency provides the best SMM marketing services to grow your brand.',
    url: 'https://gatecode.in/services/digital-marketing/smm',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Social Media Marketing Services Agency',
    description:
      'Need affordable social media marketing services for small business? Our expert agency provides the best SMM marketing services to grow your brand.',
  },
};

export default function SmmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

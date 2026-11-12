import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Business Software Solutions Service In Jaipur',
  description:
    'Smart Software Solution Services, Providing Enterprise, Sap, Automotive, Shipping, And Business Software Solutions For Scalable Digital Growth.',
  keywords: [
    'software solution service',
    'software solutions',
    'enterprise software solutions',
    'sap software solutions',
    'automotive software solutions',
    'shipping software solutions',
    'business software solution',
    'best software solution service',
  ],
  alternates: {
    canonical: '/services/software-development/scalable-solutions',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'Best Business Software Solutions Service In Jaipur',
    description:
      'Smart Software Solution Services, Providing Enterprise, Sap, Automotive, Shipping, And Business Software Solutions For Scalable Digital Growth.',
    url: 'https://www.gatecode.in/services/software-development/scalable-solutions',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Best Business Software Solutions Service In Jaipur',
    description:
      'Smart Software Solution Services, Providing Enterprise, Sap, Automotive, Shipping, And Business Software Solutions For Scalable Digital Growth.',
  },
};

export default function ScalableSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

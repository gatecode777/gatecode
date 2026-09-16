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
    title: 'Best Business Software Solutions Service In Jaipur',
    description:
      'Smart Software Solution Services, Providing Enterprise, Sap, Automotive, Shipping, And Business Software Solutions For Scalable Digital Growth.',
    url: 'https://gatecode.in/services/software-development/scalable-solutions',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
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

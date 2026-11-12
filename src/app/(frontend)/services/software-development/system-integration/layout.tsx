import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Custom App Development & System Integration Services',
  description:
    'Custom Application Development, System Integration, Custom Software And App Development, And Integrated Management Services For Businesses.',
  keywords: [
    'custom application development services',
    'system integration services',
    'custom software development services',
    'custom app development services',
    'integrated management services',
  ],
  alternates: {
    canonical: '/services/software-development/system-integration',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'Best Custom App Development & System Integration Services',
    description:
      'Custom Application Development, System Integration, Custom Software And App Development, And Integrated Management Services For Businesses.',
    url: 'https://www.gatecode.in/services/software-development/system-integration',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Best Custom App Development & System Integration Services',
    description:
      'Custom Application Development, System Integration, Custom Software And App Development, And Integrated Management Services For Businesses.',
  },
};

export default function SystemIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

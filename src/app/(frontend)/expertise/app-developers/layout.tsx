import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dedicated App Developers in India | Android & iOS Team',
  description: 'Dedicated app developers delivering Android, iOS, and cross-platform solutions with expert teams, scalable technology, and reliable development support.',
  keywords: [
    'hire app developer',
    'hire mobile app developers',
    'hire android app developer',
    'hire android app developers in india',
    'hire mobile app developer in india',
    'hire mobile app developers in india',
    'hire ios app developer',
    'hire dedicated mobile app developers',
    'hire flutter app developers',
    'hire react native app developers',
    'hire flutter app developer india',
    'hire iphone app developer',
    'app development companies',
    'mobile app development company in india',
    'ecommerce app development company',
    'top app development companies in india',
    'best android app development company in india',
    'best mobile app development company',
    'best app development companies',
    'best app development companies in india',
    'custom app development company',
    'best custom app development company'
  ],
  alternates: {
    canonical: 'https://gatecode.in/expertise/app-developers',
  },
  openGraph: {
    title: 'Dedicated App Developers in India | Android & iOS Team',
    description: 'Dedicated app developers delivering Android, iOS, and cross-platform solutions with expert teams, scalable technology, and reliable development support.',
    url: 'https://gatecode.in/expertise/app-developers',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dedicated App Developers in India | Android & iOS Team',
    description: 'Dedicated app developers delivering Android, iOS, and cross-platform solutions with expert teams, scalable technology, and reliable development support.',
  },
};

export default function AppDevelopersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


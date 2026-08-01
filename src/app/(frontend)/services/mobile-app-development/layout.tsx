import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in India | App Development Services',
  description: 'Gatecode Technologies is a leading custom mobile app development company in India. We offer android app development services, ios app development services, and cross-platform app solutions for global businesses.',
  keywords: [
    'mobile app development company',
    'mobile app development company in india',
    'mobile app development services',
    'custom mobile app development company',
    'app development companies',
    'android app development company',
    'android app development services',
    'best android app development company in india',
    'ios app development company',
    'ios app development services',
    'ios and android app development services',
    'app developers',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile App Development Company in India | App Development Services',
    description: 'Gatecode Technologies is a leading custom mobile app development company in India offering android app development services, ios app development services, and mobile app development solutions.',
    url: 'https://gatecode.in/services/mobile-app-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company in India | App Development Services',
    description: 'Gatecode Technologies is a leading custom mobile app development company in India offering android app development services, ios app development services, and mobile app development solutions.',
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

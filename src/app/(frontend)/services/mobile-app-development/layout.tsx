import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Services In Jaipur | Android & Ios Apps',
  description: 'Mobile app development services for custom Android & iOS apps with innovative designs, advanced features, and scalable solutions for businesses.',
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
    title: 'Mobile App Development Services In Jaipur | Android & Ios Apps',
    description: 'Mobile app development services for custom Android & iOS apps with innovative designs, advanced features, and scalable solutions for businesses.',
    url: 'https://gatecode.in/services/mobile-app-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Services In Jaipur | Android & Ios Apps',
    description: 'Mobile app development services for custom Android & iOS apps with innovative designs, advanced features, and scalable solutions for businesses.',
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Android App Development Company in Jaipur | Custom Apps',
  description:
    'Android app development company offering custom mobile apps with innovative designs, advanced features, and scalable solutions for businesses.',
  keywords: [
    'android app development services',
    'android application development services',
    'best android app development company in jaipur',
    'android app development company',
    'custom android app development services',
    'native android app development',
    'kotlin app development company',
    'mobile app development services in jaipur',
    'android app developers',
    'hire android app developers',
    'custom mobile app development services',
    'Gatecode Technologies',
  ],
  alternates: {
    canonical: '/services/mobile-app-development/android-development',
  },
  openGraph: {
    title: 'Android App Development Company in Jaipur | Custom Apps',
    description:
      'Android app development company offering custom mobile apps with innovative designs, advanced features, and scalable solutions for businesses.',
    url: 'https://gatecode.in/services/mobile-app-development/android-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android App Development Company in Jaipur | Custom Apps',
    description:
      'Android app development company offering custom mobile apps with innovative designs, advanced features, and scalable solutions for businesses.',
  },
};

export default function AndroidAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

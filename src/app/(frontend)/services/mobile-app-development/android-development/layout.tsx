import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Android App Development Services In Jaipur',
  description:
    'Get expert Android app development services from Gatecode Technologies. We build custom, secure, and high-performance native Kotlin applications for your business.',
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
    title: 'Best Android App Development Services In Jaipur | Gatecode Technologies',
    description:
      'Get expert Android app development services from Gatecode Technologies. We build custom, secure, and high-performance native Kotlin applications.',
    url: 'https://gatecode.in/services/mobile-app-development/android-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Android App Development Services In Jaipur | Gatecode Technologies',
    description:
      'Get expert Android app development services from Gatecode Technologies. We build custom, secure, and high-performance native Kotlin applications.',
  },
};

export default function AndroidAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

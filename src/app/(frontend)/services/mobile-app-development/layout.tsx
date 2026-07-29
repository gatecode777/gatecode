import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Jaipur | Gatecode',
  description: 'Gatecode Technologies is a leading Mobile App Development Company in Jaipur, India. We build custom iOS, Android, and cross-platform mobile apps.',
  keywords: [
    'Mobile App Development Services',
    'Mobile App Development Company',
    'Custom Mobile App Development',
    'Mobile App Development Company in Jaipur',
    'Mobile App Development Services in India',
    'App Developers in Jaipur',
    'Android App Development Company',
    'iOS App Development Company',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile App Development Company in Jaipur | Gatecode',
    description: 'Gatecode Technologies is a leading Mobile App Development Company in Jaipur, India. We build custom iOS, Android, and cross-platform mobile apps.',
    url: 'https://gatecode.in/services/mobile-app-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company in Jaipur | Gatecode',
    description: 'Gatecode Technologies is a leading Mobile App Development Company in Jaipur, India. We build custom iOS, Android, and cross-platform mobile apps.',
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

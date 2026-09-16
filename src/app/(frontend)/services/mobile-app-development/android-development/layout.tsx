import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Maintenance Management Software & Fleet Solutions System',
  description:
    'Get Expert Android, Mobile, Web, Shopify, And Custom App Development Services To Build Secure, Scalable, And High-performing Applications.',
  keywords: [
    'android application development services',
    'app development services',
    'mobile app development service',
    'web app development services',
    'mobile application development service',
    'mobile development services',
    'web application development services',
    'shopify app development services',
    'custom mobile app development services',
    'custom app development services',
    'custom web app development services',
    'educational app development services',
  ],
  alternates: {
    canonical: '/services/mobile-app-development/android-development',
  },
  openGraph: {
    title: 'Best Maintenance Management Software & Fleet Solutions System',
    description:
      'Get Expert Android, Mobile, Web, Shopify, And Custom App Development Services To Build Secure, Scalable, And High-performing Applications.',
    url: 'https://gatecode.in/services/mobile-app-development/android-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Maintenance Management Software & Fleet Solutions System',
    description:
      'Get Expert Android, Mobile, Web, Shopify, And Custom App Development Services To Build Secure, Scalable, And High-performing Applications.',
  },
};

export default function AndroidAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI UX Design Company in Jaipur & Agency Services | Gatecode',
  description: 'Gatecode Technologies is a premier UI UX Design Company in Jaipur, India. We create intuitive web & mobile app interfaces, wireframes, and design systems.',
  keywords: [
    'UI UX Design Services',
    'UI UX Design Agency',
    'UI UX Design Company',
    'Custom UI UX Design Services',
    'UI UX Design Company in Jaipur',
    'UI UX Design Agency in Jaipur',
    'UI UX Design Services in India',
    'UI UX Designer in Jaipur',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/ui-ux-design',
  },
  openGraph: {
    title: 'UI UX Design Company in Jaipur & Agency Services | Gatecode',
    description: 'Gatecode Technologies is a premier UI UX Design Company in Jaipur, India. We create intuitive web & mobile app interfaces, wireframes, and design systems.',
    url: 'https://gatecode.in/services/ui-ux-design',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI UX Design Company in Jaipur & Agency Services | Gatecode',
    description: 'Gatecode Technologies is a premier UI UX Design Company in Jaipur, India. We create intuitive web & mobile app interfaces, wireframes, and design systems.',
  },
};

export default function UIUXDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

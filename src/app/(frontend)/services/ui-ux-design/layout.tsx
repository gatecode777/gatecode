import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI UX Design Agency in India | UI UX Design Services',
  description: 'Gatecode Technologies is a premier UI UX design company in India. We offer UI UX design services, mobile app UI UX design, wireframing and prototyping, and design system development services for global products.',
  keywords: [
    'ui ux design',
    'ui ux design agency',
    'ui ux design company',
    'ui ux design services',
    'ui ux design agency in india',
    'ui ux designer',
    'best ui ux agency',
    'wireframing and prototyping',
    'design system development services',
    'mobile app ui ux design company',
    'ui and ux design',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/ui-ux-design',
  },
  openGraph: {
    title: 'UI UX Design Agency in India | UI UX Design Services',
    description: 'Gatecode Technologies is a premier UI UX design company in India offering UI UX design services, mobile app UI UX design, and wireframing and prototyping.',
    url: 'https://gatecode.in/services/ui-ux-design',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI UX Design Agency in India | UI UX Design Services',
    description: 'Gatecode Technologies is a premier UI UX design company in India offering UI UX design services, mobile app UI UX design, and wireframing and prototyping.',
  },
};

export default function UIUXDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Gatecode Technologies | IT Company in Jaipur',
  description: 'Get in touch with Gatecode Technologies Pvt Ltd. Contact our IT engineering & sales teams for software development inquiries, project estimates, or consultations.',
  keywords: [
    'contact Gatecode Technologies',
    'hire software developers contact',
    'IT consulting inquiry',
    'contact IT company in India',
    'custom software project estimate',
    'Gatecode Technologies Jaipur office address',
    'software development inquiry contact',
    'Gatecode Technologies phone number',
    'Gatecode Technologies email'
  ],
  alternates: {
    canonical: 'https://www.gatecode.in/contact',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'Contact Gatecode Technologies | IT Company in Jaipur',
    description: 'Get in touch with Gatecode Technologies Pvt Ltd. Contact our IT engineering & sales teams for software development inquiries, project estimates, or consultations.',
    url: 'https://www.gatecode.in/contact',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Contact Gatecode Technologies | IT Company in Jaipur',
    description: 'Get in touch with Gatecode Technologies Pvt Ltd. Contact our IT engineering & sales teams for software development inquiries.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


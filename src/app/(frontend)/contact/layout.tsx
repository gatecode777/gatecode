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
    canonical: 'https://gatecode.in/contact',
  },
  openGraph: {
    title: 'Contact Gatecode Technologies | IT Company in Jaipur',
    description: 'Get in touch with Gatecode Technologies Pvt Ltd. Contact our IT engineering & sales teams for software development inquiries, project estimates, or consultations.',
    url: 'https://gatecode.in/contact',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
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


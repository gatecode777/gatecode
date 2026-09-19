import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top-rated Lead Generation Company & Services Agency',
  description:
    'Looking for a top lead generation company? Our lead generation agency provides expert lead generation services to boost sales for small businesses',
  keywords: [
    'top lead generation company',
    'lead generation services agency',
    'lead generation agency',
    'lead generation services to boost sales',
    'lead generation for small businesses',
    'Gatecode Technologies',
  ],
  alternates: {
    canonical: '/services/digital-marketing/lead-generation',
  },
  openGraph: {
    title: 'Top-rated Lead Generation Company & Services Agency',
    description:
      'Looking for a top lead generation company? Our lead generation agency provides expert lead generation services to boost sales for small businesses',
    url: 'https://gatecode.in/services/digital-marketing/lead-generation',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top-rated Lead Generation Company & Services Agency',
    description:
      'Looking for a top lead generation company? Our lead generation agency provides expert lead generation services to boost sales for small businesses',
  },
};

export default function LeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

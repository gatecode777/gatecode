import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & IT Job Openings in India | Gatecode Technologies',
  description: 'Join Gatecode Technologies Pvt Ltd. Explore current IT job openings for software developers, web developers, UI/UX designers, and digital marketing experts in India.',
  keywords: [
    'Gatecode Technologies careers',
    'software developer jobs in India',
    'best IT companies to work for in India',
    'IT job openings Jaipur',
    'web developer jobs',
    'UI UX designer jobs',
    'digital marketing jobs',
    'career at Gatecode Technologies',
    'IT careers India'
  ],
  alternates: {
    canonical: 'https://gatecode.in/careers',
  },
  openGraph: {
    title: 'Careers & IT Job Openings in India | Gatecode Technologies',
    description: 'Join Gatecode Technologies Pvt Ltd. Explore current IT job openings for software developers, web developers, UI/UX designers, and digital marketing experts in India.',
    url: 'https://gatecode.in/careers',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers & IT Job Openings in India | Gatecode Technologies',
    description: 'Join Gatecode Technologies Pvt Ltd. Explore current IT job openings for software developers and designers.',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


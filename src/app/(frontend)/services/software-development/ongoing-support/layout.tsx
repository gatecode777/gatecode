import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'It Support Services & Technology Solutions | Expert Team',
  description:
    'Get Reliable It Support Services And Technology Solutions To Improve Performance, Strengthen Security, Reduce Downtime, And Support Business Growth.',
  alternates: {
    canonical: '/services/software-development/ongoing-support',
  },
  openGraph: {
    title: 'It Support Services & Technology Solutions | Expert Team',
    description:
      'Get Reliable It Support Services And Technology Solutions To Improve Performance, Strengthen Security, Reduce Downtime, And Support Business Growth.',
    url: 'https://gatecode.in/services/software-development/ongoing-support',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'It Support Services & Technology Solutions | Expert Team',
    description:
      'Get Reliable It Support Services And Technology Solutions To Improve Performance, Strengthen Security, Reduce Downtime, And Support Business Growth.',
  },
};

export default function OngoingSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

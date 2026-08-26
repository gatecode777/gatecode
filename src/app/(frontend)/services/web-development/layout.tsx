import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Website Development Company In Jaipur',
  description: 'Get Expert Web Development, Website Design, Redesign And Programming Services From A Trusted Website Development Company For Your Business.',
  keywords: [
    'web development services',
    'website development services',
    'website design services',
    'website redesign services',
    'web design services',
    'best website development company',
    'website development',
    'website development company',
    'website programming company'
  ],
  alternates: {
    canonical: '/services/web-development',
  },
  openGraph: {
    title: 'Website Development Company in India | Web Design & Development Services',
    description: 'Gatecode Technologies is a premier website development company in India delivering custom web app development services, react web development, and full stack development services.',
    url: 'https://gatecode.in/services/web-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in India | Web Design & Development Services',
    description: 'Gatecode Technologies is a premier website development company in India delivering custom web app development services, react web development, and full stack development services.',
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

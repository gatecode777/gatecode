import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Development Company in India | Web Design & Development Services',
  description: 'Gatecode Technologies is a premier website development company in India. We deliver top-tier web design & development services, custom web app development services, react web development, and affordable web development services globally.',
  keywords: [
    'website development company',
    'website development company in india',
    'web design & development services',
    'web app development',
    'custom web app development services',
    'full stack development services',
    'react web development company',
    'api integration services',
    'website maintenance services',
    'affordable web development services',
    'hire a web developer india',
    'hire dedicated web developers',
    'Gatecode Technologies'
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best It Software Development Services Agency In Jaipur',
  description: 'Get Custom Software Development Services For Web And Business Needs From An Expert Software Development Agency With Scalable, Secure It Solutions.',
  keywords: [
    'software development company',
    'custom software development company',
    'custom software development services',
    'software development services',
    'software development company in india',
    'custom software development company in india',
    'software application development services',
    'enterprise application software',
    'enterprise software development',
    'custom crm development services',
    'erp software development services',
    'b2b software',
    'embedded software development services',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/software-development',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'Custom Software Development Company in India | Software Services',
    description: 'Gatecode Technologies is a leading custom software development company in India offering enterprise software development, custom CRM development services, and software application development.',
    url: 'https://gatecode.in/services/software-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Custom Software Development Company in India | Software Services',
    description: 'Gatecode Technologies is a leading custom software development company in India offering enterprise software development, custom CRM development services, and software application development.',
  },
};

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development Company in India | Software Services',
  description: 'Gatecode Technologies is a leading custom software development company in India. We provide enterprise application software, custom software development services, custom CRM development services, and ERP software solutions.',
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
    title: 'Custom Software Development Company in India | Software Services',
    description: 'Gatecode Technologies is a leading custom software development company in India offering enterprise software development, custom CRM development services, and software application development.',
    url: 'https://gatecode.in/services/software-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
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

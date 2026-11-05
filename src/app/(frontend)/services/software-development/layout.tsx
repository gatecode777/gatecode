import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Company in Jaipur | Custom Software Services | Gatecode',
  description: 'Gatecode is a software development company in Jaipur building custom software, CRM, ERP and integrations for businesses across India and worldwide.',
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
    title: 'Software Development Company in Jaipur | Custom Software Services | Gatecode',
    description: 'Gatecode is a software development company in Jaipur building custom software, CRM, ERP and integrations for businesses across India and worldwide.',
    url: 'https://gatecode.in/services/software-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Software Development Company in Jaipur | Custom Software Services | Gatecode',
    description: 'Gatecode is a software development company in Jaipur building custom software, CRM, ERP and integrations for businesses across India and worldwide.',
  },
};

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

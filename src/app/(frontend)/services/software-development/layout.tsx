import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development Company in Jaipur | Gatecode',
  description: 'Gatecode Technologies is a leading custom software development company in Jaipur, India. We build scalable enterprise software, CRM/ERP systems, and custom SaaS applications.',
  keywords: [
    'Software Development Services',
    'Custom Software Development Company',
    'Custom Software Development Services',
    'Software Development Company in Jaipur',
    'Software Development Services in India',
    'Software Developers in Jaipur',
    'Enterprise Software Solutions',
    'CRM ERP Development Services',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/software-development',
  },
  openGraph: {
    title: 'Custom Software Development Company in Jaipur | Gatecode',
    description: 'Gatecode Technologies is a leading custom software development company in Jaipur, India. We build scalable enterprise software, CRM/ERP systems, and custom SaaS applications.',
    url: 'https://gatecode.in/services/software-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Company in Jaipur | Gatecode',
    description: 'Gatecode Technologies is a leading custom software development company in Jaipur, India. We build scalable enterprise software, CRM/ERP systems, and custom SaaS applications.',
  },
};

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top BPO Companies in India | Business Process Outsourcing Services',
  description: 'Gatecode Technologies is among the top BPO companies in India. We provide business process outsourcing services, customer support outsourcing services, and inbound and outbound call center services.',
  keywords: [
    'bpo services',
    'bpo companies',
    'bpo outsourcing companies',
    'bpo companies in india',
    'top bpo companies in india',
    'business process outsourcing',
    'business process outsourcing services',
    'business process outsourcing companies',
    'customer support outsourcing services',
    'bpo customer service',
    'outbound call center services',
    'inbound and outbound call center services',
    'call center service provider in india',
    'call center services',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/bpo-services',
  },
  openGraph: {
    title: 'Top BPO Companies in India | Business Process Outsourcing Services',
    description: 'Gatecode Technologies is among the top BPO companies in India offering business process outsourcing services, customer support outsourcing services, and call center services.',
    url: 'https://gatecode.in/services/bpo-services',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top BPO Companies in India | Business Process Outsourcing Services',
    description: 'Gatecode Technologies is among the top BPO companies in India offering business process outsourcing services, customer support outsourcing services, and call center services.',
  },
};

export default function BPOServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BPO Company in Jaipur & Outsourcing Services | Gatecode',
  description: 'Gatecode Technologies is a leading BPO Company in Jaipur, India. We offer customer support, inbound/outbound call center services & back-office outsourcing.',
  keywords: [
    'BPO Services',
    'BPO Company',
    'Business Process Outsourcing Services',
    'BPO Company in Jaipur',
    'BPO Services in India',
    'Call Center in Jaipur',
    'Outsourcing Company in Jaipur',
    'Customer Support Services',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/bpo-services',
  },
};

export default function BPOServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BPO Services & Outsourcing Solutions | Gatecode Technologies',
  description: 'Optimize your business operations and customer satisfaction with professional BPO services from Gatecode Technologies. We provide customer support, email/chat support, technical assistance, and lead generation.',
  keywords: [
    'Gatecode Technologies',
    'BPO Services',
    'Customer Support Services',
    'Email & Chat Support',
    'Call Center Services',
    'Data Processing Services',
    'Technical Support Services',
    'Lead Generation Services',
    'Back Office Support',
    'Appointment Scheduling & Customer Coordination'
  ]
};

export default function BPOServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

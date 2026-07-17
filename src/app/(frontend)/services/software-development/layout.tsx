import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Services | Gatecode Technologies',
  description: 'Streamline operations and drive efficiency with Gatecode Technologies. We deliver custom software development, cloud applications, CRM/ERP systems, and enterprise solutions.',
  keywords: [
    'Gatecode Technologies',
    'Software Development Services',
    'Custom Software Development',
    'Cloud-Based Software Solutions',
    'Enterprise Software Solutions',
    'CRM & ERP Development',
    'Business Automation Software',
    'Desktop Application Development',
    'API & System Integration',
    'Software Maintenance & Support'
  ]
};

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

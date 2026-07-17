import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Management Services | Gatecode Technologies',
  description: 'Organize, secure, and leverage your business data with Gatecode Technologies. We offer professional data entry, database management, digitization, and analysis.',
  keywords: [
    'Gatecode Technologies',
    'Data Management Services',
    'Data Entry Services',
    'Data Processing Services',
    'Data Cataloging & Organization',
    'Database Management',
    'Document Digitization',
    'Data Analysis & Reporting',
    'Data Security & Confidentiality'
  ]
};

export default function DataManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

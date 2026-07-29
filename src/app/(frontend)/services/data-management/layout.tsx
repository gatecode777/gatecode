import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Management Company in Jaipur & Entry Services | Gatecode',
  description: 'Gatecode Technologies is a leading Data Management Company in Jaipur, India. We offer secure data entry services, database management, processing & analytics.',
  keywords: [
    'Data Management Services',
    'Data Entry Services',
    'Data Processing Services',
    'Database Management Services',
    'Data Management Company in Jaipur',
    'Data Entry Company in Jaipur',
    'Data Management Services in India',
    'Outsourced Data Entry Services India',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/data-management',
  },
};

export default function DataManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrated Data Management Services | Data Entry Services India',
  description: 'Gatecode Technologies is a top data management company in India. We provide integrated data management services, database management system solutions, data entry services India, and document digitization services.',
  keywords: [
    'data management',
    'integrated data management services',
    'data management companies in india',
    'database management system',
    'database management',
    'data entry',
    'data entry services india',
    'outsourced data entry services',
    'document digitization services',
    'data cataloging',
    'data processing services company',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/data-management',
  },
  openGraph: {
    title: 'Integrated Data Management Services | Data Entry Services India',
    description: 'Gatecode Technologies is a top data management company in India providing integrated data management services, database management system solutions, and data entry services India.',
    url: 'https://gatecode.in/services/data-management',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrated Data Management Services | Data Entry Services India',
    description: 'Gatecode Technologies is a top data management company in India providing integrated data management services, database management system solutions, and data entry services India.',
  },
};

export default function DataManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

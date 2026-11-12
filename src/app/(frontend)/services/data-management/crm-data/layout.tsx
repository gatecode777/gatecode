import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CRM Data Management Services | Gatecode",
  description: "Improve pipeline hygiene, remove duplicate accounts and enrich customer records across Salesforce, HubSpot and Zoho with expert CRM data management.",
  alternates: {
    canonical: '/services/data-management/crm-data',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "CRM Data Management Services | Gatecode",
    description: "Improve pipeline hygiene, remove duplicate accounts and enrich customer records across Salesforce, HubSpot and Zoho with expert CRM data management.",
    url: "https://www.gatecode.in/services/data-management/crm-data",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "CRM Data Management Services | Gatecode",
    description: "Improve pipeline hygiene, remove duplicate accounts and enrich customer records across Salesforce, HubSpot and Zoho with expert CRM data management.",
  },
};

export default function DataManagementCrmDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

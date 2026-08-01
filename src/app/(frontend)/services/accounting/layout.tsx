import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting and Bookkeeping Services | Accounting Firm in India',
  description: 'Gatecode Technologies is a leading accounting services company in India. We provide outsourced accounting and bookkeeping services, GST filing, payroll management services, and financial solutions.',
  keywords: [
    'accounting services',
    'accounting and bookkeeping services',
    'accounting bookkeeping service',
    'bookkeeping services in india',
    'accounting services company in india',
    'outsourced accounting and bookkeeping services',
    'accounting and taxation firm in india',
    'payroll management services',
    'indian cost accounts service',
    'gst filing goods and services tax',
    'accounting software company',
    'accounting firms',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/accounting',
  },
  openGraph: {
    title: 'Accounting and Bookkeeping Services | Accounting Firm in India',
    description: 'Gatecode Technologies is a leading accounting services company in India providing outsourced accounting and bookkeeping services, GST filing, and payroll management services.',
    url: 'https://gatecode.in/services/accounting',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting and Bookkeeping Services | Accounting Firm in India',
    description: 'Gatecode Technologies is a leading accounting services company in India providing outsourced accounting and bookkeeping services, GST filing, and payroll management services.',
  },
};

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

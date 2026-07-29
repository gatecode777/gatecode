import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Services & Bookkeeping Firm in Jaipur | Gatecode',
  description: 'Gatecode Technologies provides expert Accounting Services in Jaipur, India. We offer bookkeeping, GST & tax filing, payroll management, and financial reporting.',
  keywords: [
    'Accounting Services',
    'Bookkeeping Services',
    'Accounting Company',
    'Accounting Services in Jaipur',
    'Accounting Firm in Jaipur',
    'Bookkeeping Services in Jaipur',
    'Accounting Services in India',
    'GST and Tax Filing Services',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/accounting',
  },
};

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

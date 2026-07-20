import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Services | Gatecode Technologies',
  description: 'Simplify financial management and ensure tax compliance with Gatecode Technologies. We offer professional bookkeeping, GST/taxation, payroll, and reporting.',
  keywords: [
    'Gatecode Technologies',
    'Accounting Services',
    'Bookkeeping Services',
    'GST & Taxation Services',
    'Financial Reporting',
    'Payroll Management',
    'Accounts Payable & Receivable',
    'Tally & Accounting Software Management',
    'Budget Planning & Financial Analysis',
    'Audit & Compliance Support'
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Gatecode Technologies',
  description: 'Boost your online visibility and drive business growth with Gatecode Technologies. We offer result-driven SEO, SMM, PPC, content marketing, and brand strategies.',
  keywords: [
    'Gatecode Technologies',
    'Digital Marketing Services',
    'Search Engine Optimization (SEO)',
    'Social Media Marketing (SMM)',
    'Pay-Per-Click Advertising (PPC)',
    'Content Marketing',
    'Brand Strategy & Promotion',
    'Email Marketing',
    'Performance Marketing',
    'Analytics & Reporting',
    'lead generation'
  ]
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

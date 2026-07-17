import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketer Expertise | Gatecode Technologies',
  description: 'Grow your business with result-driven digital marketing from Gatecode Technologies. Hire experts in SEO, SMM, SEM, content writing, paid advertising, and email marketing.',
  keywords: [
    'Gatecode Technologies',
    'Digital Marketer Expertise',
    'Search Engine Optimization (SEO)',
    'Social Media Marketing (SMM)',
    'Search Engine Marketing (SEM)',
    'Content Marketing',
    'Email Marketing',
    'Social Media Optimization (SMO)',
    'Paid Ads (Google & Social Media)',
    'Analytics & Reporting',
    'lead generation'
  ]
};

export default function DigitalMarketerExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

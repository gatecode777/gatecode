import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | Gatecode Technologies',
  description: 'Start your journey with Gatecode Technologies today. Share your requirements and let us build powerful web, software, and brand solutions for your business.',
  keywords: [
    'Gatecode Technologies',
    'Get Started',
    'Share Your Requirements',
    'Consultation and Strategy',
    'Proposal and Planning',
    'Design and Development',
    'Delivery and Launch',
    'Ongoing Support and Growth',
    'custom digital solutions'
  ],
  alternates: {
    canonical: '/get-started',
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

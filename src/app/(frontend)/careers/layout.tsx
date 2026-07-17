import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & Job Opportunities | Gatecode Technologies',
  description: 'Join the team at Gatecode Technologies. Explore open roles in software development, UI/UX design, digital marketing, operations, and finance, and build a rewarding career with us.',
  keywords: [
    'Gatecode Technologies',
    'build your career',
    'Join our team',
    'Web Developer',
    'UI/UX Designer',
    'Digital Marketing Executive',
    'Data Entry Operator',
    'BPO Executive',
    'Accounting Executive',
    'Graphic Designer',
    'growth-driven environment'
  ]
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

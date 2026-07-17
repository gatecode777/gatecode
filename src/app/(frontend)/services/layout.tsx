import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Gatecode Technologies',
  description: 'Explore the comprehensive technology and operations services of Gatecode Technologies. We offer custom web development, software engineering, mobile apps, UI/UX design, accounting, and BPO solutions.',
  keywords: [
    'Gatecode Technologies',
    'Our Services',
    'custom web development',
    'software development services',
    'mobile app development',
    'UI/UX design services',
    'digital marketing solutions',
    'BPO services',
    'accounting support',
    'graphic design services'
  ]
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

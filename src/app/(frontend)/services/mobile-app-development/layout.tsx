import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Gatecode Technologies',
  description: 'Build secure, high-performance Android & iOS mobile apps with Gatecode Technologies. We deliver custom, cross-platform mobile app solutions and intuitive UI/UX.',
  keywords: [
    'Gatecode Technologies',
    'Mobile App Development',
    'Android App Development',
    'iOS App Development',
    'Cross-Platform App Development',
    'E-Commerce App Development',
    'Custom Mobile App Solutions',
    'UI/UX Design for Mobile Apps',
    'API & Third-Party Integration',
    'digital transformation'
  ],
  alternates: {
    canonical: '/services/mobile-app-development',
  },
};

export default function MobileAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

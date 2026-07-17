import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App Developer Expertise | Gatecode Technologies',
  description: 'Build smart, scalable, and high-performance mobile apps with Gatecode Technologies. Our expert app developers offer iOS, Android, and cross-platform solutions.',
  keywords: [
    'Gatecode Technologies',
    'App Developer Expertise',
    'custom app developers',
    'Android App Development',
    'iOS App Development',
    'Cross-Platform App Development',
    'UI/UX Design for Apps',
    'App Testing & Quality Assurance',
    'App Maintenance & Support',
    'API Integration',
    'App Deployment'
  ]
};

export default function AppDevelopersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

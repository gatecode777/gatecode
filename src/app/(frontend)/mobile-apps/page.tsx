import type { Metadata } from 'next';
import AppLandingPage from '@/components/frontend/LandingPage/AppLandingPage';

export const metadata: Metadata = {
  title: 'Mobile Apps Development | Gatecode Technologies',
  description: 'Custom mobile apps for iOS and Android.',
};

export default function MobileAppsRoutePage() {
  return <AppLandingPage />;
}

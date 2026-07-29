import type { Metadata } from 'next';
import AppLandingPage from '@/components/frontend/LandingPage/AppLandingPage';

export const metadata: Metadata = {
  title: 'Mobile App Development Agency | iOS & Android Apps',
  description: 'Custom native iOS, Android, and React Native / Flutter mobile applications engineered for high performance and scale.',
};

export default function AppDevelopmentRoutePage() {
  return <AppLandingPage />;
}

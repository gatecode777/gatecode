import type { Metadata } from 'next';
import AgencyLandingPage from '@/components/frontend/LandingPage/AgencyLandingPage';

export const metadata: Metadata = {
  title: 'Web Development Landing | Gatecode Technologies',
  description: 'Custom web development agency landing page.',
};

export default function WebDevelopmentLandingPage() {
  return <AgencyLandingPage />;
}

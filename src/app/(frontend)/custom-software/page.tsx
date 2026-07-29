import type { Metadata } from 'next';
import CrmLandingPage from '@/components/frontend/LandingPage/CrmLandingPage';

export const metadata: Metadata = {
  title: 'Custom Software Development | Gatecode Technologies',
  description: 'Custom CRM and business software solutions.',
};

export default function CustomSoftwareRoutePage() {
  return <CrmLandingPage />;
}

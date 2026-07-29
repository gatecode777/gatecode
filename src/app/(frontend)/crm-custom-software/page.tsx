import type { Metadata } from 'next';
import CrmLandingPage from '@/components/frontend/LandingPage/CrmLandingPage';

export const metadata: Metadata = {
  title: 'Custom CRM & Software Engineering | Gatecode Technologies',
  description: 'Tailored CRM systems, ERP business portals, and custom enterprise software automation engines.',
};

export default function CrmCustomSoftwareRoutePage() {
  return <CrmLandingPage />;
}

import type { Metadata } from 'next';
import TechBankingLandingPage from '@/components/frontend/LandingPage/TechBankingLandingPage';

export const metadata: Metadata = {
  title: 'Technology & Connected Banking Services | Gatecode Technologies',
  description:
    'Custom core banking systems, digital lending platforms, UPI/NACH API integrations, and RBI-compliant fintech solutions for banks, NBFCs, and cooperative societies across India.',
  keywords: [
    'core banking software India',
    'connected banking API',
    'NBFC technology solutions',
    'digital lending platform',
    'UPI NACH integration',
    'RBI compliant banking software',
    'cooperative bank software',
    'fintech development India',
    'banking KYC technology',
    'loan origination system',
  ],
};

export default function TechBankingPage() {
  return <TechBankingLandingPage />;
}

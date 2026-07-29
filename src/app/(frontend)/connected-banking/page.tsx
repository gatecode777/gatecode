import type { Metadata } from 'next';
import TechBankingLandingPage from '@/components/frontend/LandingPage/TechBankingLandingPage';

export const metadata: Metadata = {
  title: 'Connected Banking Solutions | Gatecode Technologies',
  description:
    'End-to-end connected banking technology — UPI, NACH, IMPS integrations, digital KYC, and custom fintech platforms built for Indian banks and NBFCs.',
  keywords: [
    'connected banking solutions',
    'banking API integration India',
    'UPI payment integration',
    'NACH automation',
    'digital banking platform',
    'NBFC software',
  ],
};

export default function ConnectedBankingPage() {
  return <TechBankingLandingPage />;
}

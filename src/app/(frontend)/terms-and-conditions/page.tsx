import type { Metadata } from 'next';
import HeroSection from '@/components/frontend/TermsAndConditions/HeroSection';
import TermsContent from '@/components/frontend/TermsAndConditions/TermsContent';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Gatecode Technologies',
  description: 'Read the Terms and Conditions for using the Gatecode Technologies website and our professional services, including IT, BPO, digital marketing, and accounting.',
  keywords: [
    'Gatecode Technologies',
    'Terms and Conditions',
    'acceptance of terms',
    'intellectual property',
    'limitation of liability',
    'IT services terms',
    'BPO terms of service',
    'website usage terms'
  ]
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <HeroSection />
      <TermsContent />
    </>
  );
}

import type { Metadata } from 'next';
import HeroSection from '@/components/frontend/TermsAndConditions/HeroSection';
import TermsContent from '@/components/frontend/TermsAndConditions/TermsContent';

export const metadata: Metadata = { title: 'TermsAndConditions' };

export default function TermsAndConditionsPage() {
  return (
    <>
      <HeroSection />
      <TermsContent />
    </>
  );
}

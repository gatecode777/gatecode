import type { Metadata } from 'next';
import HeroSection from '@/components/frontend/PrivacyPolicy/HeroSection';
import PrivacyContent from '@/components/frontend/PrivacyPolicy/PrivacyContent';

export const metadata: Metadata = { title: 'PrivacyPolicy' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection />
      <PrivacyContent />
    </>
  );
}

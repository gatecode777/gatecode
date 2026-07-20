import type { Metadata } from 'next';
import HeroSection from '@/components/frontend/PrivacyPolicy/HeroSection';
import PrivacyContent from '@/components/frontend/PrivacyPolicy/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gatecode Technologies',
  description: 'Read the Privacy Policy for Gatecode Technologies to understand how we collect, use, and safeguard your personal information when using our website and services.',
  keywords: [
    'Gatecode Technologies',
    'Privacy Policy',
    'personal information',
    'data protection',
    'information security',
    'privacy terms',
    'user privacy',
    'trusted third-party services'
  ],
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection />
      <PrivacyContent />
    </>
  );
}

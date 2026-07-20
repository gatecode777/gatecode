import type { Metadata } from 'next';
import HeroSection from '@/components/frontend/CookiePolicy/HeroSection';
import CookieContent from '@/components/frontend/CookiePolicy/CookieContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | Gatecode Technologies',
  description: 'Read the Cookie Policy for Gatecode Technologies to learn how we use cookies and similar technologies to improve website performance, functionality, and user experience.',
  keywords: [
    'Gatecode Technologies',
    'Cookie Policy',
    'essential cookies',
    'analytics cookies',
    'functional cookies',
    'marketing cookies',
    'third-party cookies',
    'managing cookies'
  ],
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <HeroSection />
      <CookieContent />
    </>
  );
}

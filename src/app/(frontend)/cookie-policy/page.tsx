import type { Metadata } from 'next';
import HeroSection from '@/components/frontend/CookiePolicy/HeroSection';
import CookieContent from '@/components/frontend/CookiePolicy/CookieContent';

export const metadata: Metadata = { title: 'CookiePolicy' };

export default function CookiePolicyPage() {
  return (
    <>
      <HeroSection />
      <CookieContent />
    </>
  );
}

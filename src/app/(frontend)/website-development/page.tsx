import type { Metadata } from 'next';
import AgencyLandingPage from '@/components/frontend/LandingPage/AgencyLandingPage';

export const metadata: Metadata = {
  title: 'Web Design & Development Agency | Gatecode Technologies',
  description: 'We build fast, high-converting custom websites, e-commerce storefronts, and web platforms tailored for business growth.',
  keywords: [
    'web design agency',
    'custom website development',
    'e-commerce web development',
    'website redesign',
    'landing page design',
    'Core Web Vitals optimization'
  ],
};

export default function WebsiteDevelopmentPage() {
  return <AgencyLandingPage />;
}

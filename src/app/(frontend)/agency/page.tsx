import type { Metadata } from 'next';
import AgencyLandingPage from '@/components/frontend/LandingPage/AgencyLandingPage';

export const metadata: Metadata = {
  title: 'Web Development Agency | Custom Websites & E-Commerce',
  description: 'High-speed custom websites, e-commerce storefronts, and conversion-focused web platforms.',
};

export default function AgencyPage() {
  return <AgencyLandingPage />;
}

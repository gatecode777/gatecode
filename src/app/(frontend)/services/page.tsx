import type { Metadata } from 'next';
import ServicesHub from '@/components/frontend/ServicesHub/ServicesHub';
import ServiceFAQ from '@/components/frontend/FAQSection/ServiceFAQ';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';

const title = 'Our Services | Software, Design, Marketing & BPO | Gatecode';
const description =
  'Explore Gatecode Technologies services: web, software and mobile app development, UI/UX and graphic design, digital marketing, accounting, BPO and data management in Jaipur, India.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title,
    description,
    url: 'https://www.gatecode.in/services',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.webp'] },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHub />
      <ServiceFAQ slug="services" serviceName="IT, marketing, accounting and BPO" />
      <ContactSection />
    </>
  );
}

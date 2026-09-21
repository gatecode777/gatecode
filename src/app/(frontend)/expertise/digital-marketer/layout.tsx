import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Dedicated Digital Marketers & SEO Experts | Gatecode',
  description: 'Looking for the best digital marketing agency or digital marketing company in India? Gatecode Technologies provides top digital marketing services, SEO specialist hiring, PPC ads & performance growth marketing.',
  keywords: [
    'digital marketing agency near me',
    'digital marketing company near me',
    'best digital marketing company near me',
    'digital marketing agency',
    'digital marketing company',
    'marketing agency',
    'best digital marketing agency',
    'digital marketing company in india',
    'top digital marketing companies',
    'best digital marketing company in india',
    'digital marketing services',
    'digital marketing hiring',
    'digital marketing websites',
    'best digital marketing company',
    'best marketing agencies',
    'hire seo specialist'
  ],
  alternates: {
    canonical: 'https://gatecode.in/expertise/digital-marketer',
  },
  openGraph: {
    title: 'Hire Dedicated Digital Marketers & SEO Experts | Gatecode',
    description: 'Looking for the best digital marketing agency or digital marketing company in India? Gatecode Technologies provides top digital marketing services, SEO specialist hiring, PPC ads & performance growth marketing.',
    url: 'https://gatecode.in/expertise/digital-marketer',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Dedicated Digital Marketers & SEO Experts | Gatecode',
    description: 'Looking for the best digital marketing agency or digital marketing company in India? Gatecode Technologies provides top digital marketing services and SEO expertise.',
  },
};

export default function DigitalMarketerExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


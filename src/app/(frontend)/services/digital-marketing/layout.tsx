import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Jaipur & Agency Services | Gatecode',
  description: 'Gatecode Technologies is a top Digital Marketing Company in Jaipur, India. We offer result-driven SEO services, PPC ads, social media marketing, and lead generation.',
  keywords: [
    'Digital Marketing Services',
    'Digital Marketing Agency',
    'Digital Marketing Company',
    'Digital Marketing Company in Jaipur',
    'Digital Marketing Agency in Jaipur',
    'Digital Marketing Services in India',
    'Best Digital Marketing Agency Jaipur',
    'SEO Services Jaipur',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Company in Jaipur & Agency Services | Gatecode',
    description: 'Gatecode Technologies is a top Digital Marketing Company in Jaipur, India. We offer result-driven SEO services, PPC ads, social media marketing, and lead generation.',
    url: 'https://gatecode.in/services/digital-marketing',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company in Jaipur & Agency Services | Gatecode',
    description: 'Gatecode Technologies is a top Digital Marketing Company in Jaipur, India. We offer result-driven SEO services, PPC ads, social media marketing, and lead generation.',
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

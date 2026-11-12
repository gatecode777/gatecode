import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Email Marketing Services | Gatecode",
  description: "Nurture leads and boost retention with lifecycle automation, audience segmentation, responsive design and conversion-focused email copy.",
  alternates: {
    canonical: '/services/digital-marketing/email-marketing',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Email Marketing Services | Gatecode",
    description: "Nurture leads and boost retention with lifecycle automation, audience segmentation, responsive design and conversion-focused email copy.",
    url: "https://www.gatecode.in/services/digital-marketing/email-marketing",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Email Marketing Services | Gatecode",
    description: "Nurture leads and boost retention with lifecycle automation, audience segmentation, responsive design and conversion-focused email copy.",
  },
};

export default function DigitalMarketingEmailMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

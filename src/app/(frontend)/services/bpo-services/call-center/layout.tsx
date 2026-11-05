import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Inbound & Outbound Call Center Services | Gatecode",
  description: "24/7 inbound and outbound call center solutions that scale customer engagement, improve first-call resolution and grow your sales pipeline.",
  alternates: {
    canonical: '/services/bpo-services/call-center',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Inbound & Outbound Call Center Services | Gatecode",
    description: "24/7 inbound and outbound call center solutions that scale customer engagement, improve first-call resolution and grow your sales pipeline.",
    url: "https://gatecode.in/services/bpo-services/call-center",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Inbound & Outbound Call Center Services | Gatecode",
    description: "24/7 inbound and outbound call center solutions that scale customer engagement, improve first-call resolution and grow your sales pipeline.",
  },
};

export default function BpoServicesCallCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Technical Support & IT Helpdesk | Gatecode",
  description: "Reliable multi-tier technical support and IT helpdesk services that resolve issues fast, reduce downtime and keep your systems running smoothly.",
  alternates: {
    canonical: '/services/bpo-services/technical-support',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "24/7 Technical Support & IT Helpdesk | Gatecode",
    description: "Reliable multi-tier technical support and IT helpdesk services that resolve issues fast, reduce downtime and keep your systems running smoothly.",
    url: "https://www.gatecode.in/services/bpo-services/technical-support",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "24/7 Technical Support & IT Helpdesk | Gatecode",
    description: "Reliable multi-tier technical support and IT helpdesk services that resolve issues fast, reduce downtime and keep your systems running smoothly.",
  },
};

export default function BpoServicesTechnicalSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

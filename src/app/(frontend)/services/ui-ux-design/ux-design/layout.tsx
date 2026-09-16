import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UX Design Services Company In Jaipur | Trusted UX Experts',
  description: 'Professional UX design services including UX audits, ecommerce UX design & user experience solutions to boost engagement and conversions.',
  alternates: {
    canonical: '/services/ui-ux-design/ux-design',
  },
  openGraph: {
    title: 'UX Design Services Company In Jaipur | Trusted UX Experts',
    description: 'Professional UX design services including UX audits, ecommerce UX design & user experience solutions to boost engagement and conversions.',
    url: 'https://gatecode.in/services/ui-ux-design/ux-design',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UX Design Services Company In Jaipur | Trusted UX Experts',
    description: 'Professional UX design services including UX audits, ecommerce UX design & user experience solutions to boost engagement and conversions.',
  },
};

export default function UXDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

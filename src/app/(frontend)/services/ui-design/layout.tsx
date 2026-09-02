import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Interface Design Services In Jaipur',
  description: 'Professional user interface design services in Jaipur - Gatecode Technologies delivers web, mobile & ecommerce UI design services. Get a free quote!',
  alternates: {
    canonical: '/services/ui-design',
  },
  openGraph: {
    title: 'User Interface Design Services In Jaipur',
    description: 'Professional user interface design services in Jaipur - Gatecode Technologies delivers web, mobile & ecommerce UI design services. Get a free quote!',
    url: 'https://gatecode.in/services/ui-design',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'User Interface Design Services In Jaipur',
    description: 'Professional user interface design services in Jaipur - Gatecode Technologies delivers web, mobile & ecommerce UI design services. Get a free quote!',
  },
};

export default function UIDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

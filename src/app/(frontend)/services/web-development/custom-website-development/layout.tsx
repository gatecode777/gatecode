import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Custom Website Development Services In Jaipur',
  description:
    'Get Custom Website Design, Development, Shopify And Ecommerce Services From A Professional Web Development Company To Grow Your Business Online.',
  keywords: [
    'front end website development',
    'shopify website development company',
    'responsive web development',
    'web page development services',
    'software development company',
    'custom software development companies',
    'custom software development',
    'front end web developer',
    'custom software development agency',
  ],
  alternates: {
    canonical: '/services/web-development/custom-website-development',
  },
  openGraph: {
    title: 'Best Custom Website Development Services In Jaipur',
    description:
      'Get Custom Website Design, Development, Shopify And Ecommerce Services From A Professional Web Development Company To Grow Your Business Online.',
    url: 'https://gatecode.in/services/web-development/custom-website-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Custom Website Development Services In Jaipur',
    description:
      'Get Custom Website Design, Development, Shopify And Ecommerce Services From A Professional Web Development Company To Grow Your Business Online.',
  },
};

export default function CustomWebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

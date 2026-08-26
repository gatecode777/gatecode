import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Wordpress Website Development Services In Jaipur',
  description:
    'Get Expert Wordpress Website Design, Development, Maintenance And Ecommerce Services To Build A Fast, Secure And Professional Business Website.',
  keywords: [
    'wordpress development services',
    'wordpress website design services',
    'wordpress development agencies',
    'wordpress website maintenance services',
    'wordpress website development services',
    'wordpress web design services',
    'wordpress web development services',
    'cms development services',
    'wordpress ecommerce development company',
    'wordpress site maintenance services',
  ],
  alternates: {
    canonical: '/services/cms-website-development',
  },
  openGraph: {
    title: 'Best Wordpress Website Development Services In Jaipur',
    description:
      'Get Expert Wordpress Website Design, Development, Maintenance And Ecommerce Services To Build A Fast, Secure And Professional Business Website.',
    url: 'https://gatecode.in/services/cms-website-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Wordpress Website Development Services In Jaipur',
    description:
      'Get Expert Wordpress Website Design, Development, Maintenance And Ecommerce Services To Build A Fast, Secure And Professional Business Website.',
  },
};

export default function CmsWebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

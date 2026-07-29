import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Company in Jaipur & Custom Services | Gatecode',
  description: 'Gatecode Technologies is a leading Web Development Company in Jaipur, India. We provide custom website development services, responsive web design, and scalable web solutions tailored to your business.',
  keywords: [
    'Web Development Services',
    'Website Development Company',
    'Custom Website Development Services',
    'Web Development Services in India',
    'Web Development Company in Jaipur',
    'website developer jaipur',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/web-development',
  },
  openGraph: {
    title: 'Web Development Company in Jaipur & Custom Services | Gatecode',
    description: 'Gatecode Technologies is a leading Web Development Company in Jaipur, India. We provide custom website development services, responsive web design, and scalable web solutions.',
    url: 'https://gatecode.in/services/web-development',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company in Jaipur & Custom Services | Gatecode',
    description: 'Gatecode Technologies is a leading Web Development Company in Jaipur, India. We provide custom website development services, responsive web design, and scalable web solutions.',
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

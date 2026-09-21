import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/frontend/Navbar/Navbar';

const Footer = dynamic(() => import('@/components/frontend/Footer/Footer'));
import FloatingWidgets from '@/components/frontend/FloatingWidgets/FloatingWidgets';
import './frontend.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gatecode.in'),
  title: 'Best It Services Company In Jaipur | Gatecode Technologies',
  description: 'Gatecode Technologies, a trusted IT service company in Jaipur, delivers web, software & cloud solutions to 100+ businesses. Get a free quote now!',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Best It Services Company In Jaipur | Gatecode Technologies',
    description: 'Gatecode Technologies, a trusted IT service company in Jaipur, delivers web, software & cloud solutions to 100+ businesses. Get a free quote now!',
    url: 'https://gatecode.in',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best It Services Company In Jaipur | Gatecode Technologies',
    description: 'Gatecode Technologies, a trusted IT service company in Jaipur, delivers web, software & cloud solutions to 100+ businesses. Get a free quote now!',
  },
};

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gatecode Technologies Pvt. Ltd.',
    alternateName: 'Gatecode Technologies',
    url: 'https://gatecode.in',
    logo: 'https://gatecode.in/images/logo.webp',
    image: 'https://gatecode.in/images/digitalbg1.webp',
    description: 'Gatecode Technologies is a premier Web & Custom Software Development Company in Jaipur, India providing software engineering and digital solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'India',
    },
    priceRange: '$$',
    sameAs: [
      'https://gatecode.hashnode.dev',
      'https://medium.com',
    ],
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

import type { Metadata } from 'next';
import Navbar from '@/components/frontend/Navbar/Navbar';
import Footer from '@/components/frontend/Footer/Footer';
import ScrollToTop from '@/components/frontend/ScrollToTop/ScrollToTop';
import Chatbot from '@/components/frontend/Chatbot/Chatbot';

export const metadata: Metadata = {
  metadataBase: new URL('https://gatecode.in'),
  title: 'Gatecode Technologies | Web & Software Development Company',
  description: 'Empowering businesses with technology driven solutions, custom web development, software engineering, and strategic IT expertise.',
  openGraph: {
    title: 'Gatecode Technologies | Web & Software Development Company',
    description: 'Empowering businesses with technology driven solutions, custom web development, software engineering, and strategic IT expertise.',
    url: 'https://gatecode.in',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gatecode Technologies | Web & Software Development Company',
    description: 'Empowering businesses with technology driven solutions, custom web development, software engineering, and strategic IT expertise.',
  },
};

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gatecode Technologies Pvt. Ltd.',
    alternateName: 'Gatecode Technologies',
    url: 'https://gatecode.in',
    logo: 'https://gatecode.in/images/logo.png',
    image: 'https://gatecode.in/images/digitalbg1.png',
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
      {children}
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Graphic Design Company in India | Graphic Design Agency',
  description: 'Gatecode Technologies is the best graphic design company in India. We provide graphic design services in India, logo design and brand identity, social media graphic design services, and custom packaging visuals.',
  keywords: [
    'graphic design',
    'graphic design agency',
    'graphic design companies',
    'graphic design company in india',
    'best graphic design company in india',
    'graphic design agency india',
    'graphic design services',
    'graphic design services in india',
    'best graphic design agency in india',
    'logo and brand design',
    'logo design and brand identity',
    'social media graphic design services',
    'packaging and labelling design',
    'graphic designer',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/services/graphic-design',
  },
  openGraph: {
    title: 'Best Graphic Design Company in India | Graphic Design Agency',
    description: 'Gatecode Technologies is the best graphic design company in India offering graphic design services in India, logo and brand design, and social media graphic design services.',
    url: 'https://gatecode.in/services/graphic-design',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Graphic Design Company in India | Graphic Design Agency',
    description: 'Gatecode Technologies is the best graphic design company in India offering graphic design services in India, logo and brand design, and social media graphic design services.',
  },
};

export default function GraphicDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

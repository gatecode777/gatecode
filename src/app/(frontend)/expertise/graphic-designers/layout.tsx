import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Dedicated Graphic Designers | Top Graphic Design Company in India',
  description: 'Looking to hire graphic designer experts? Gatecode Technologies is a top graphic design company in India & creative graphic design agency providing logo, branding, social media & custom design services.',
  keywords: [
    'graphic designer',
    'graphic designers near me',
    'hire graphic designer',
    'graphic design companies',
    'graphic design company names',
    'graphic design company in india',
    'best graphic design company in india',
    'top graphic design companies',
    'design company',
    'graphic design agency',
    'graphic design agency near me',
    'graphic design companies near me',
    'design agencies near me',
    'hire dedicated graphics designer',
    'hire a graphic designer in india',
    'top companies hiring graphic designers in india',
    'hiring creative graphic designer',
    'graphic design services company'
  ],
  alternates: {
    canonical: 'https://gatecode.in/expertise/graphic-designers',
  },
  openGraph: {
    title: 'Hire Dedicated Graphic Designers | Top Graphic Design Company in India',
    description: 'Looking to hire graphic designer experts? Gatecode Technologies is a top graphic design company in India & creative graphic design agency providing logo, branding, social media & custom design services.',
    url: 'https://gatecode.in/expertise/graphic-designers',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Dedicated Graphic Designers | Top Graphic Design Company in India',
    description: 'Looking to hire graphic designer experts? Gatecode Technologies is a top graphic design company in India providing creative branding and design services.',
  },
};

export default function GraphicDesignersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


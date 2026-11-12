import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Full Stack JavaScript Developers | Gatecode Tech',
  description: 'Looking to hire javascript developer talent? Gatecode Technologies is a premier javascript web development company providing full stack development with javascript, frontend UI, Node.js backend & custom javascript app development.',
  keywords: [
    'javascript developer',
    'which company developed javascript',
    'javascript development company',
    'hire javascript developer',
    'javascript app development',
    'javascript development services',
    'javascript web development company',
    'full stack development with javascript',
    'javascript in frontend development',
    'Hire Full Stack JavaScript Developer'
  ],
  alternates: {
    canonical: 'https://www.gatecode.in/expertise/javascript-developers',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'Hire Full Stack JavaScript Developers | Gatecode Tech',
    description: 'Looking to hire javascript developer talent? Gatecode Technologies is a premier javascript web development company providing full stack development with javascript, frontend UI, Node.js backend & custom javascript app development.',
    url: 'https://www.gatecode.in/expertise/javascript-developers',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Hire Full Stack JavaScript Developers | Gatecode Tech',
    description: 'Looking to hire javascript developer talent? Gatecode Technologies is a premier javascript web development company providing full stack development with javascript.',
  },
};

export default function JavaScriptDevelopersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


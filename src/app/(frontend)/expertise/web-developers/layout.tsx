import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Dedicated Web Developers | Full Stack Web Developer Team',
  description: 'Hire dedicated web developers in India from Gatecode Technologies. As a top web development company in India, we provide hire full stack web developer, front end, back end, and custom web app developers.',
  keywords: [
    'web development',
    'web site development',
    'web development company',
    'web development services',
    'web development company in india',
    'web development agency',
    'best web development company',
    'hire web developer',
    'web design and development company',
    'full stack web developer',
    'hire dedicated web developers',
    'hire full stack web developer',
    'web development services company',
    'hire front end web developer',
    'hire back end web developers',
    'hire custom web app developers',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: '/expertise/web-developers',
  },
  openGraph: {
    title: 'Hire Dedicated Web Developers | Full Stack Web Developer Team',
    description: 'Hire dedicated web developers in India from Gatecode Technologies. Top web development agency offering full stack, front end, back end, and custom web app developers.',
    url: 'https://gatecode.in/expertise/web-developers',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Dedicated Web Developers | Full Stack Web Developer Team',
    description: 'Hire dedicated web developers in India from Gatecode Technologies. Top web development agency offering full stack, front end, back end, and custom web app developers.',
  },
};

export default function WebDevelopersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

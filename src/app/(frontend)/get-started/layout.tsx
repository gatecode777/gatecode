import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | Hire Software & Web Developers | Gatecode Technologies',
  description: 'Start your digital transformation journey with Gatecode Technologies. Share your requirements for custom software development, web & mobile app engineering, and digital solutions.',
  keywords: [
    'get started IT project',
    'share software requirements',
    'hire software development company',
    'custom web development estimate',
    'start software project India',
    'Gatecode Technologies get started',
    'custom software engineering consultation',
    'mobile app project estimate',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: 'https://gatecode.in/get-started',
  },
  openGraph: {
    title: 'Get Started | Hire Software & Web Developers | Gatecode Technologies',
    description: 'Start your digital transformation journey with Gatecode Technologies. Share your requirements for custom software development, web & mobile app engineering, and digital solutions.',
    url: 'https://gatecode.in/get-started',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started | Hire Software & Web Developers | Gatecode Technologies',
    description: 'Start your digital transformation journey with Gatecode Technologies. Share your requirements for custom software development.',
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Dedicated UI/UX Designers in India | Gatecode',
  description: 'Looking to hire UI UX designer talent? Gatecode Technologies is a premier UI UX design company providing custom web & mobile app UI UX design services, Figma prototyping, and expert UI UX developers.',
  keywords: [
    'ui ux design',
    'ui ux',
    'ui ux designer',
    'what is ui ux design',
    'ui and ux',
    'ui ux designer job',
    'ui ux developer',
    'ui ux design services',
    'ui ux design company',
    'hire ui ux designer',
    'Hire Web & Mobile UI UX Designers',
    'ui ux design services company',
    'hire graphic designer',
    'designer hire',
    'hire ux designers'
  ],
  alternates: {
    canonical: 'https://gatecode.in/expertise/ui-ux-designers',
  },
  openGraph: {
    title: 'Hire Dedicated UI/UX Designers in India | Gatecode',
    description: 'Looking to hire UI UX designer talent? Gatecode Technologies is a premier UI UX design company providing custom web & mobile app UI UX design services, Figma prototyping, and expert UI UX developers.',
    url: 'https://gatecode.in/expertise/ui-ux-designers',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Dedicated UI/UX Designers in India | Gatecode',
    description: 'Looking to hire UI UX designer talent? Gatecode Technologies is a premier UI UX design company providing custom web & mobile app UI UX design services.',
  },
};

export default function UIUXDesignersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wireframing & Prototyping Services | Gatecode",
  description: "Turn product concepts into interactive wireframes and clickable Figma prototypes that de-risk engineering and align stakeholders.",
  alternates: {
    canonical: '/services/ui-ux-design/wireframing',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Wireframing & Prototyping Services | Gatecode",
    description: "Turn product concepts into interactive wireframes and clickable Figma prototypes that de-risk engineering and align stakeholders.",
    url: "https://gatecode.in/services/ui-ux-design/wireframing",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Wireframing & Prototyping Services | Gatecode",
    description: "Turn product concepts into interactive wireframes and clickable Figma prototypes that de-risk engineering and align stakeholders.",
  },
};

export default function UiUxDesignWireframingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

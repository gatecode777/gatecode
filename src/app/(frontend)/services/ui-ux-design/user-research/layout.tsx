import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "UX User Research & Analysis Services | Gatecode",
  description: "Uncover customer motivations and friction points, and build validated digital experiences backed by real user data.",
  alternates: {
    canonical: '/services/ui-ux-design/user-research',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "UX User Research & Analysis Services | Gatecode",
    description: "Uncover customer motivations and friction points, and build validated digital experiences backed by real user data.",
    url: "https://gatecode.in/services/ui-ux-design/user-research",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "UX User Research & Analysis Services | Gatecode",
    description: "Uncover customer motivations and friction points, and build validated digital experiences backed by real user data.",
  },
};

export default function UiUxDesignUserResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

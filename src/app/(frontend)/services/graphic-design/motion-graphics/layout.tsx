import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Motion Graphics & Animation Services | Gatecode",
  description: "Captivating motion graphics, 2D explainer animations, animated social assets and promo visuals that lift viewer retention and brand recall.",
  alternates: {
    canonical: '/services/graphic-design/motion-graphics',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Motion Graphics & Animation Services | Gatecode",
    description: "Captivating motion graphics, 2D explainer animations, animated social assets and promo visuals that lift viewer retention and brand recall.",
    url: "https://www.gatecode.in/services/graphic-design/motion-graphics",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Motion Graphics & Animation Services | Gatecode",
    description: "Captivating motion graphics, 2D explainer animations, animated social assets and promo visuals that lift viewer retention and brand recall.",
  },
};

export default function GraphicDesignMotionGraphicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

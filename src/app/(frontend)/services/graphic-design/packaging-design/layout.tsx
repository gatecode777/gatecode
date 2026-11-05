import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Packaging Design Services | Gatecode",
  description: "Commercially smart product packaging and label design that boosts shelf appeal, with dieline planning and print-ready production files.",
  alternates: {
    canonical: '/services/graphic-design/packaging-design',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Packaging Design Services | Gatecode",
    description: "Commercially smart product packaging and label design that boosts shelf appeal, with dieline planning and print-ready production files.",
    url: "https://gatecode.in/services/graphic-design/packaging-design",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Packaging Design Services | Gatecode",
    description: "Commercially smart product packaging and label design that boosts shelf appeal, with dieline planning and print-ready production files.",
  },
};

export default function GraphicDesignPackagingDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

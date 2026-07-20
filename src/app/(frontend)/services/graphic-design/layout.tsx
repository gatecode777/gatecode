import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design Services | Gatecode Technologies',
  description: 'Enhance your brand identity with creative graphic designs from Gatecode Technologies. We design custom social media posts, logos, brochures, packaging, and motion graphics.',
  keywords: [
    'Gatecode Technologies',
    'Graphic Design Services',
    'Social Media Post Design',
    'Logo Design & Branding',
    'Banner & Poster Design',
    'Brochure & Flyer Design',
    'Business Card Design',
    'Advertising Creatives',
    'Packaging Design',
    'Motion Graphics & Creative Visuals'
  ],
  alternates: {
    canonical: '/services/graphic-design',
  },
};

export default function GraphicDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

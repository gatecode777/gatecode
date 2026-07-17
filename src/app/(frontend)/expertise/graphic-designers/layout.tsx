import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Designer Expertise | Gatecode Technologies',
  description: 'Hire professional graphic designers from Gatecode Technologies. We deliver custom logo designs, social media graphics, branding packages, brochures, and motion graphics.',
  keywords: [
    'Gatecode Technologies',
    'Graphic Designer Expertise',
    'Logo Design & Branding',
    'Social Media Design',
    'Banner & Poster Design',
    'Packaging Design',
    'Brochure & Flyer Design',
    'Business Card Design',
    'Motion Graphics',
    'Ad Creatives'
  ]
};

export default function GraphicDesignersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

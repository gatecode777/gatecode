import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design Company in Jaipur & Creative Agency | Gatecode',
  description: 'Gatecode Technologies is a top Graphic Design Company in Jaipur, India. We offer custom social media graphics, branding, logo design, banners & creatives.',
  keywords: [
    'Graphic Design Services',
    'Graphic Design Company',
    'Graphic Design Agency',
    'Graphic Design Company in Jaipur',
    'Graphic Designer in Jaipur',
    'Graphic Design Services in India',
    'Best Graphic Design Agency Jaipur',
    'Logo Design and Branding',
    'Gatecode Technologies'
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Developer Expertise | Gatecode Technologies',
  description: 'Build powerful, scalable, and high-performing websites with Gatecode Technologies. Our expert web developers offer custom web development, e-commerce solutions, and speed optimization.',
  keywords: [
    'Gatecode Technologies',
    'Web Developer Expertise',
    'custom web developers',
    'Custom Website Development',
    'Responsive Web Design',
    'E-Commerce Development',
    'CMS Development',
    'Website Redesign',
    'Web Application Development',
    'SEO Friendly Development',
    'Speed Optimization'
  ],
  alternates: {
    canonical: '/expertise/web-developers',
  },
};

export default function WebDevelopersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

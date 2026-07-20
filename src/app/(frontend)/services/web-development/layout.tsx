import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services | Gatecode Technologies',
  description: 'Gatecode Technologies provides custom web development, e-commerce platforms, responsive web design, CMS development, and secure web applications tailored to your business.',
  keywords: [
    'Gatecode Technologies',
    'custom web solutions',
    'Web Development Services',
    'Custom Website Development',
    'Responsive Web Design',
    'E-Commerce Development',
    'CMS Development',
    'Web Application Development',
    'UI/UX Focused Development',
    'API & Third-Party Integration',
    'Website Maintenance & Support'
  ],
  alternates: {
    canonical: '/services/web-development',
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

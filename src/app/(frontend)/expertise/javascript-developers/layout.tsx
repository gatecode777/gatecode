import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JavaScript Developer Expertise | Gatecode Technologies',
  description: 'Hire experienced JavaScript developers from Gatecode Technologies. We build fast, interactive SPAs, dynamic web applications, and backend systems using React, Node.js, and TypeScript.',
  keywords: [
    'Gatecode Technologies',
    'JavaScript Developer Expertise',
    'Frontend Development',
    'Single Page Applications (SPA)',
    'Website Optimization',
    'Web Application Development',
    'API Integration',
    'JavaScript Framework Development',
    'React developers',
    'Node.js developers',
    'TypeScript solutions'
  ],
  alternates: {
    canonical: '/expertise/javascript-developers',
  },
};

export default function JavaScriptDevelopersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

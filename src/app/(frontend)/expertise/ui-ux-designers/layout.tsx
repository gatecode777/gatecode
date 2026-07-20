import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI/UX Designer Expertise | Gatecode Technologies',
  description: 'Hire expert UI/UX designers from Gatecode Technologies. We design intuitive user interfaces (UI) and conversion-focused user experiences (UX) using Figma and Sketch.',
  keywords: [
    'Gatecode Technologies',
    'UI/UX Designer Expertise',
    'User Interface (UI) Design',
    'User Experience (UX) Design',
    'Wireframing & Prototyping',
    'User Research & Analysis',
    'Mobile App Design',
    'Website Design',
    'UX Audit & Improvement',
    'Design Systems',
    'Figma designers'
  ],
  alternates: {
    canonical: '/expertise/ui-ux-designers',
  },
};

export default function UIUXDesignersExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

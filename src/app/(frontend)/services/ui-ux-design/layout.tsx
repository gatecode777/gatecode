import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Gatecode Technologies',
  description: 'Create intuitive, visually engaging digital experiences with Gatecode Technologies. We offer custom web & mobile UI/UX design, wireframing, prototyping, and design systems.',
  keywords: [
    'Gatecode Technologies',
    'UI/UX Design Services',
    'User Interface (UI) Design',
    'User Experience (UX) Design',
    'Wireframing & Prototyping',
    'Website UI/UX Design',
    'Mobile App UI/UX Design',
    'Dashboard & Admin Panel Design',
    'Design System & Branding',
    'Responsive & Interactive Design'
  ]
};

export default function UIUXDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

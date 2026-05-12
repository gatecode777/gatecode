import type { Metadata } from 'next';
export const metadata: Metadata = { title: { template: '%s | Technical Expertise', default: 'Technical Expertise' } };
export default function TELayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }

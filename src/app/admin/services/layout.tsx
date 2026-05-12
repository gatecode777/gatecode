import type { Metadata } from 'next';
export const metadata: Metadata = { title: { template: '%s | Services', default: 'Services' } };
export default function ServicesLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }

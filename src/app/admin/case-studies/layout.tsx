import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | Case Studies', default: 'Case Studies' },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

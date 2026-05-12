import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | Portfolio', default: 'Portfolio' },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

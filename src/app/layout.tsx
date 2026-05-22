import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gatecode Technologies',
  description: 'Empowering businesses with technology driven solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

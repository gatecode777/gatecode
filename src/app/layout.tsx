import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gatecode Technologies',
  description: 'Empowering businesses with technology driven solutions.',
  icons: {
    icon: [{ url: '/images/favicon.png', type: 'image/png' }],
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

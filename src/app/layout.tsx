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
        <Script src='https://www.noupe.com/embed/019e62849fa17851b12acc90bdc1fa654e0e.js' async />
      </body>
    </html>
  );
}

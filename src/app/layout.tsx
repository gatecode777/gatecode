import type { Metadata } from "next";
import Script from "next/script";
import {
  plusJakartaSans,
  castoroTitling,
  robotoFlex,
  inter,
  arimo,
} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gatecode Technologies",
  description: "Empowering businesses with technology driven solutions.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${castoroTitling.variable} ${robotoFlex.variable} ${inter.variable} ${arimo.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        {/* Google Tag Manager — single loader + unified init */}
        <Script id="gtm-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CERWSX5DM9');
            gtag('config', 'GT-MK985SPV');
          `}
        </Script>
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PSVZ559Q"
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSVZ559Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
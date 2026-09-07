import type { Metadata } from "next";
import Script from "next/script";
import {
  plusJakartaSans,
  jetbrainsMono,
  castoroTitling,
  robotoFlex,
  inter,
  arimo,
  playfairDisplay,
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${castoroTitling.variable} ${robotoFlex.variable} ${inter.variable} ${arimo.variable} ${playfairDisplay.variable}`}
    >
      <body>
        {/* Load Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PSVZ559Q"
        />

        {/* Initialize GTM Data Layer */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          `}
        </Script>

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
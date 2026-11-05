import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Document Digitization & OCR Services | Gatecode",
  description: "Convert paper archives into secure, indexed and fully searchable digital records using high-precision scanning and OCR solutions.",
  alternates: {
    canonical: '/services/data-management/document-digitization',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: "Document Digitization & OCR Services | Gatecode",
    description: "Convert paper archives into secure, indexed and fully searchable digital records using high-precision scanning and OCR solutions.",
    url: "https://gatecode.in/services/data-management/document-digitization",
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: "Document Digitization & OCR Services | Gatecode",
    description: "Convert paper archives into secure, indexed and fully searchable digital records using high-precision scanning and OCR solutions.",
  },
};

export default function DataManagementDocumentDigitizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

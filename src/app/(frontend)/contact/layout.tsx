import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Gatecode Technologies — Get in Touch',
  description: 'Get in touch with Gatecode Technologies today. Contact our sales and engineering teams for software inquiries, custom project consultations, or general support.',
  keywords: [
    'Gatecode Technologies',
    'Get In Touch',
    'digital transformation',
    'Web Development',
    'App Development',
    'Digital Marketing',
    'Business Consultancy',
    'contact details',
    'Jaipur, India',
    'Office Hours'
  ],
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

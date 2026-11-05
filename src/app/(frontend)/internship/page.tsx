// @ts-nocheck
import type { Metadata } from 'next';
import InternshipHero from '@/components/frontend/InternshipHero/InternshipHero';
import InternshipInfo from '@/components/frontend/InternshipInfo/InternshipInfo';
import CareerSuccess from '@/components/frontend/CareerSuccess/CareerSuccess';
import ApplicationForm from '@/components/frontend/ApplicationForm/ApplicationForm';

export const metadata: Metadata = {
  title: 'IT & Software Internship Program in India | Gatecode Technologies',
  description: 'Kickstart your IT career with the Gatecode Technologies internship program. Gain hands-on live project experience, mentorship in software development, web design & digital marketing.',
  keywords: [
    'software engineering internship',
    'web development internship in India',
    'IT internship Jaipur',
    'React developer internship',
    'fresher IT internship',
    'Gatecode Technologies internship',
    'UI UX design internship',
    'digital marketing internship',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: 'https://gatecode.in/internship',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'IT & Software Internship Program in India | Gatecode Technologies',
    description: 'Kickstart your IT career with the Gatecode Technologies internship program. Gain hands-on live project experience, mentorship in software development, web design & digital marketing.',
    url: 'https://gatecode.in/internship',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'IT & Software Internship Program in India | Gatecode Technologies',
    description: 'Kickstart your IT career with the Gatecode Technologies internship program.',
  },
};


export default function InternshipPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Company', item: 'https://gatecode.in/about' },
      { '@type': 'ListItem', position: 3, name: 'Internship', item: 'https://gatecode.in/internship' },
    ],
  };

  const programSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Gatecode Technologies Software Development Internship Program',
    description: 'Hands-on IT & software engineering internship program at Gatecode Technologies Pvt Ltd.',
    educationalProgramMode: 'in-person',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who can apply for the Gatecode Technologies IT internship program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'B.Tech, BCA, MCA, and Diploma students or fresh graduates looking for hands-on experience in software engineering, web development, UI/UX design, or digital marketing can apply.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I get an internship certificate and project experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All successful candidates receive an official Certificate of Completion, a Letter of Recommendation (LOR), and real project experience on live production builds.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InternshipHero />
      <InternshipInfo />
      <CareerSuccess />
      <ApplicationForm />
    </>
  );
}


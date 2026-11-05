import type { Metadata } from 'next';
import AboutHero from '@/components/frontend/AboutHero/AboutHero';
import AboutIntro from '@/components/frontend/AboutIntro/AboutIntro';
import VisionMission from '@/components/frontend/VisionMission/VisionMission';
import AboutExperience from '@/components/frontend/AboutExperience/AboutExperience';
import AboutExpertise from '@/components/frontend/AboutExpertise/AboutExpertise';
import WhatMakesDifferent from '@/components/frontend/WhatMakesDifferent/WhatMakesDifferent';
import AboutCapabilities from '@/components/frontend/AboutCapabilities/AboutCapabilities';
import OurProcess from '@/components/frontend/OurProcess/OurProcess';
import AboutTeam from '@/components/frontend/AboutTeam/AboutTeam';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import ServicesSlider from '@/components/frontend/ServicesSlider/ServicesSlider';

export const metadata: Metadata = {
  title: 'About Gatecode Technologies | Top IT Software Company in India',
  description: 'Learn about Gatecode Technologies Pvt Ltd. Recognized among the top IT companies in India, we deliver digital transformation services, custom software engineering & IT solutions.',
  keywords: [
    'top it companies in india',
    'best it companies in india',
    'best it companies to work for in india',
    'how much it cost to register a company in india',
    'it company',
    'software companies near me',
    'it companies in jaipur',
    'software development companies near me',
    'app development companies near me',
    'it software company near me',
    'gatecode technologies',
    'about gatecode technologies',
    'Gatecode Technologies Pvt Ltd',
    'gatecode',
    'full services it company',
    'digital transformation services',
    'digital transformation companies'
  ],
  alternates: {
    canonical: 'https://gatecode.in/about',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'About Gatecode Technologies | Top IT Software Company in India',
    description: 'Learn about Gatecode Technologies Pvt Ltd. Recognized among the top IT companies in India, we deliver digital transformation services, custom software engineering & IT solutions.',
    url: 'https://gatecode.in/about',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'About Gatecode Technologies | Top IT Software Company in India',
    description: 'Learn about Gatecode Technologies Pvt Ltd. Recognized among the top IT companies in India, we deliver digital transformation services and IT solutions.',
  },
};


const About = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gatecode Technologies Pvt. Ltd.',
    alternateName: 'Gatecode Technologies',
    url: 'https://gatecode.in',
    logo: 'https://gatecode.in/images/logo.webp',
    description: 'Gatecode Technologies Pvt. Ltd. is a top IT company in India specializing in custom software development, mobile apps, web development, BPO, and digital marketing.',
    sameAs: [
      'https://www.linkedin.com/company/gatecode-technologies',
      'https://twitter.com/gatecodein',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Gatecode Technologies Pvt Ltd provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is a full services IT company providing custom software development, web & mobile app development, UI/UX design, digital marketing, BPO services, and accounting support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Gatecode Technologies ranked among the top IT companies in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies combines agile development methodologies, senior engineering talent, transparent communication, and proven digital transformation services for global clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Gatecode Technologies located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gatecode Technologies is headquartered in India, delivering software development and IT services to clients locally in Jaipur and worldwide.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <AboutExperience />
      <AboutExpertise />
      <ServicesSlider />
      <WhatMakesDifferent />
      <OurProcess />
      <ContactSection />
    </>
  );
};

export default About;


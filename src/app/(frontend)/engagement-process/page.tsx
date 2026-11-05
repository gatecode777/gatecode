// @ts-nocheck
import type { Metadata } from 'next';
import EngagementHero from '@/components/frontend/EngagementHero/EngagementHero';
import EngagementSteps from '@/components/frontend/EngagementSteps/EngagementSteps';
import EngagementBenefits from '@/components/frontend/EngagementBenefits/EngagementBenefits';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';

export const metadata: Metadata = {
  title: 'Software Engagement Process & Models | Gatecode Tech',
  description: 'Discover the transparent software engagement process at Gatecode Technologies. Explore our agile IT development workflows, dedicated engineering teams, and fixed-price project models.',
  keywords: [
    'software engagement models',
    'agile software development process',
    'IT engagement process',
    'dedicated software development team model',
    'software project development methodology',
    'Gatecode engagement process',
    'requirement analysis & discovery',
    'IT outsourcing workflow',
    'fixed price vs dedicated team model',
    'Gatecode Technologies'
  ],
  alternates: {
    canonical: 'https://gatecode.in/engagement-process',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'Software Engagement Process & Models | Gatecode Tech',
    description: 'Discover the transparent software engagement process at Gatecode Technologies. Explore our agile IT development workflows, dedicated engineering teams, and fixed-price project models.',
    url: 'https://gatecode.in/engagement-process',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Software Engagement Process & Models | Gatecode Tech',
    description: 'Discover the transparent software engagement process at Gatecode Technologies. Explore our agile IT development workflows.',
  },
};


export default function EngagementProcessPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Gatecode Technologies Software Development Engagement Process',
    description: 'Step-by-step agile software engineering and IT project workflow at Gatecode Technologies.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Requirement Discovery & Analysis',
        text: 'Initial technical consultation to analyze business requirements and create project architecture blueprints.',
      },
      {
        '@type': 'HowToStep',
        name: 'Sprint Planning & Team Setup',
        text: 'Assigning dedicated software developers, project managers, and defining two-week agile sprint goals.',
      },
      {
        '@type': 'HowToStep',
        name: 'Development & Continuous Integration',
        text: 'Writing clean code, version control commits, and daily staging updates.',
      },
      {
        '@type': 'HowToStep',
        name: 'Quality Assurance & Security Testing',
        text: 'Automated unit tests, security vulnerability scans, and user acceptance testing (UAT).',
      },
      {
        '@type': 'HowToStep',
        name: 'Deployment & SLA Maintenance',
        text: 'Cloud server deployment and post-launch maintenance support.',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What software engagement models does Gatecode Technologies offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer Dedicated Development Teams, Fixed Price Project Delivery, Time & Material (T&M), and Hybrid Engagement Models tailored to project scale.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure code quality during development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We enforce strict code reviews, CI/CD pipeline automation, automated testing, and adherence to ISO/OWASP security standards.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EngagementHero />
      <EngagementSteps />
      <EngagementBenefits />
      <ProjectBanner />
      <ContactSection />
    </>
  );
}


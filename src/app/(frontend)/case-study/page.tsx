// @ts-nocheck
import type { Metadata } from 'next';
import CaseStudyComponent from '@/components/frontend/CaseStudy/CaseStudy';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import connectDB from '@/lib/db';
import CaseStudyModel from '@/models/CaseStudy';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'IT Case Studies & Client Success Stories | Gatecode Technologies',
  description: 'Explore software development case studies, IT success stories, and custom web & mobile app engineering solutions delivered by Gatecode Technologies.',
  keywords: [
    'DAMRU BY NAMO',
    'ECO-BIN',
    'COCOFINA SUGAR',
    'online ordering platform',
    'E-Commerce Website',
    'environmental cleaning services',
    'it case studies',
    'software development case studies',
    'web development success stories',
    'client success stories',
    'case study portfolio',
    'Software Engineering Case Studies & Success Stories',
    'Custom Web and Mobile App Case Studies',
    'Digital Transformation Client Success Stories',
    'Enterprise IT Solutions Case Studies',
    'Gatecode Technologies Case Studies',
    'e commerce website development case study',
    'custom software development case studies',
    'SaaS product development case study',
    'BPO & process automation case study',
    'mobile app UI UX design case study'
  ],
  alternates: {
    canonical: 'https://gatecode.in/case-study',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'IT Case Studies & Client Success Stories | Gatecode Technologies',
    description: 'Explore software development case studies, IT success stories, and custom web & mobile app engineering solutions delivered by Gatecode Technologies.',
    url: 'https://gatecode.in/case-study',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'IT Case Studies & Client Success Stories | Gatecode Technologies',
    description: 'Explore software development case studies, IT success stories, and custom web & mobile app engineering solutions.',
  },
};


function plain(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default async function CaseStudyPage() {
  await connectDB();

  const studies = await CaseStudyModel.find({ isActive: true })
    .sort({ order: 1 })
    .lean();

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gatecode Technologies Software Engineering Case Studies',
    description: 'Collection of IT case studies, web development success stories, and custom software engineering projects by Gatecode Technologies.',
    itemListElement: (studies || []).map((study: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: study.title || `Case Study ${index + 1}`,
      url: `https://gatecode.in/case-study/${study.slug || ''}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What industries do Gatecode Technologies case studies cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our case studies cover custom software engineering, e-commerce web development, mobile apps, SaaS platforms, healthcare, fintech, environmental services, and BPO process automation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Gatecode Technologies deliver measurable results in case studies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We apply agile sprint engineering, Core Web Vitals optimization, cloud microservices, and user-centric UI/UX design to deliver verified traffic growth and operational savings.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CaseStudyComponent studies={plain(studies)} />
      <ProjectBanner />
    </>
  );
}


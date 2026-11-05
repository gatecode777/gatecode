// @ts-nocheck

import type { Metadata } from 'next';
import PortfolioHero from '@/components/frontend/PortfolioHero/PortfolioHero';
import PortfolioSlider from '@/components/frontend/Portfolio/Portfolio';
import PortfolioClient from './PortfolioClient';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import connectDB from '@/lib/db';
import PortfolioSliderModel from '@/models/PortfolioSlider';
import PortfolioCategory from '@/models/PortfolioCategory';
import PortfolioProject from '@/models/PortfolioProject';

export const metadata: Metadata = {
  title: 'Web & Software Development Portfolio | Gatecode Tech',
  description: 'Explore the Gatecode Technologies portfolio showcasing custom web development, mobile app engineering, UI/UX design, and digital marketing success stories.',
  keywords: [
    'web development portfolio',
    'software development portfolio',
    'it project portfolio',
    'ui ux design portfolio',
    'mobile app development portfolio',
    'Web and Mobile App Development Portfolio',
    'Custom Software Projects Showcase',
    'Graphic Design and Branding Portfolio',
    'Digital Marketing Case Studies and Work',
    'Gatecode Technologies Project Portfolio',
    'best web design portfolio in india',
    'custom software engineering showcase',
    'e commerce website portfolio',
    'Figma UI UX design portfolio',
    'full stack development project showcase'
  ],
  alternates: {
    canonical: 'https://gatecode.in/portfolio',
  },
  openGraph: {
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Gatecode Technologies' }],
    title: 'Web & Software Development Portfolio | Gatecode Tech',
    description: 'Explore the Gatecode Technologies portfolio showcasing custom web development, mobile app engineering, UI/UX design, and digital marketing success stories.',
    url: 'https://gatecode.in/portfolio',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    images: ['/images/og-default.webp'],
    card: 'summary_large_image',
    title: 'Web & Software Development Portfolio | Gatecode Tech',
    description: 'Explore the Gatecode Technologies portfolio showcasing custom web development, mobile app engineering, and UI/UX design.',
  },
};

export const dynamic = 'force-dynamic';


function plain(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default async function Portfolio() {
  await connectDB();

  const [slides, categories, projects] = await Promise.all([
    PortfolioSliderModel.find({ isActive: true }).sort({ order: 1 }).lean(),
    PortfolioCategory.find({ isActive: true }).sort({ order: 1 }).lean(),
    PortfolioProject.find({ isActive: true })
      .populate('categoryId', 'name slug')
      .sort({ order: 1 })
      .lean(),
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gatecode Technologies Web & Software Development Portfolio',
    description: 'Showcase of web development, mobile apps, software engineering, and UI/UX design projects by Gatecode Technologies.',
    itemListElement: (projects || []).map((project: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title || `Project ${index + 1}`,
      url: `https://gatecode.in/portfolio`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of projects are included in the Gatecode Technologies portfolio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our portfolio features custom software development, Next.js web applications, mobile apps (iOS & Android), e-commerce stores, UI/UX design systems, and digital marketing projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Gatecode Technologies build custom web or mobile applications similar to portfolio projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We customize solutions based on your business requirements, offering full-stack development, UI/UX prototyping, and ongoing maintenance.',
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
      <PortfolioHero />
      <PortfolioSlider slides={plain(slides)} isLoading={false} />
      <PortfolioClient
        categories={plain(categories)}
        projects={plain(projects)}
      />
      <ProjectBanner />
    </>
  );
}


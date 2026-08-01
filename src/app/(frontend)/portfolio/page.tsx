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
  title: 'Web & Software Development Portfolio | Gatecode Technologies Showcase',
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
    title: 'Web & Software Development Portfolio | Gatecode Technologies Showcase',
    description: 'Explore the Gatecode Technologies portfolio showcasing custom web development, mobile app engineering, UI/UX design, and digital marketing success stories.',
    url: 'https://gatecode.in/portfolio',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & Software Development Portfolio | Gatecode Technologies Showcase',
    description: 'Explore the Gatecode Technologies portfolio showcasing custom web development, mobile app engineering, and UI/UX design.',
  },
};

export const dynamic = 'force-dynamic';

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        Web & Software Development Portfolio — Gatecode Technologies
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to the <strong>Gatecode Technologies Project Portfolio</strong>. Our showcase highlights real-world applications across custom software engineering, high-converting <strong>web development portfolio</strong> projects, mobile application development, and creative UI/UX design. Discover how we help brands scale through high-performance digital solutions.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Custom Software, Mobile Apps & UI UX Design Showcase
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Explore client deliverables built with modern tech stacks. Recognized as a provider of the <strong>best web design portfolio in india</strong>, we combine frontend elegance, robust cloud backends, and responsive multi-screen compatibility.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Web & E-Commerce Portfolio</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                View custom Next.js, React, and <strong>e commerce website portfolio</strong> builds featuring high Core Web Vitals scores and secure payment integration.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Mobile App & UI/UX Showcase</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Explore our <strong>mobile app development portfolio</strong> and interactive <strong>Figma UI UX design portfolio</strong> assets for iOS, Android, and cross-platform Flutter apps.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Enterprise Software & Growth Work</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Review our <strong>software development portfolio</strong> and <strong>custom software engineering showcase</strong> applications designed for enterprise automation.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Explore Gatecode Technologies Portfolio?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Reviewing our <strong>full stack development project showcase</strong> gives you full confidence in our execution standards. Gatecode Technologies delivers:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Verified Technical Mastery:</strong> Clean architecture using React, Next.js, Node.js, Python, Flutter, and cloud databases.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Conversion-Oriented UI/UX:</strong> Modern aesthetics tailored for optimal user retention and low bounce rates.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Scalable Code Standards:</strong> Enterprise security, API integration, and continuous deployment workflows.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

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
      <SeoContentSection />
      <ProjectBanner />
    </>
  );
}


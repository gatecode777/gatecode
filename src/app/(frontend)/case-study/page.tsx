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
    title: 'IT Case Studies & Client Success Stories | Gatecode Technologies',
    description: 'Explore software development case studies, IT success stories, and custom web & mobile app engineering solutions delivered by Gatecode Technologies.',
    url: 'https://gatecode.in/case-study',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Case Studies & Client Success Stories | Gatecode Technologies',
    description: 'Explore software development case studies, IT success stories, and custom web & mobile app engineering solutions.',
  },
};

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        IT Case Studies & Client Success Stories — Gatecode Technologies
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to the <strong>Gatecode Technologies Case Studies</strong> hub. Here you can explore real-world <strong>software development case studies</strong>, high-performing <strong>it case studies</strong>, and inspiring <strong>client success stories</strong>. Featuring flagship projects like <strong>DAMRU BY NAMO</strong> (an <strong>online ordering platform</strong>), <strong>ECO-BIN</strong> (smart <strong>environmental cleaning services</strong> platform), and <strong>COCOFINA SUGAR</strong> (an enterprise <strong>E-Commerce Website</strong>), our case study portfolio demonstrates how we deliver measurable business growth.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Custom Software Development Case Studies & Web Engineering Results
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Every project presents unique technical challenges. Discover how our engineers deliver <strong>web development success stories</strong>, <strong>e commerce website development case study</strong> implementations, and <strong>custom software development case studies</strong> designed to scale seamlessly under heavy traffic.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom Software & SaaS Case Studies</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Read detailed <strong>custom software development case studies</strong> and <strong>SaaS product development case study</strong> breakthroughs showcasing our agile engineering methodology.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Web & Mobile UI/UX Success Stories</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Explore <strong>web development success stories</strong> and <strong>mobile app UI UX design case study</strong> projects that dramatically improve conversion rates and user engagement.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Enterprise IT & BPO Automation</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Review <strong>Digital Transformation Client Success Stories</strong> and <strong>BPO & process automation case study</strong> projects for enterprise clients worldwide.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Explore Gatecode Technologies Case Studies?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Reviewing authentic <strong>Software Engineering Case Studies & Success Stories</strong> gives you clear visibility into our problem-solving capabilities, code quality, and delivery speed. We offer:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Proven Business Impact:</strong> Documented metrics showing traffic growth, cost reduction, and performance gains.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Full Stack Engineering Stack:</strong> Case studies spanning Next.js, React, Node.js, Python, Flutter, and cloud architecture.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Transparent Delivery Process:</strong> Step-by-step breakdowns of initial challenge, technical strategy, and final results.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
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
      <SeoContentSection />
      <ProjectBanner />
    </>
  );
}


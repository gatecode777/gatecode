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
    title: 'IT & Software Internship Program in India | Gatecode Technologies',
    description: 'Kickstart your IT career with the Gatecode Technologies internship program. Gain hands-on live project experience, mentorship in software development, web design & digital marketing.',
    url: 'https://gatecode.in/internship',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT & Software Internship Program in India | Gatecode Technologies',
    description: 'Kickstart your IT career with the Gatecode Technologies internship program.',
  },
};

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        IT & Software Internship Program in India — Gatecode Technologies
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Accelerate your technical skills through the <strong>Gatecode Technologies internship</strong> program. Designed for freshers, computer science graduates, and aspiring professionals, our <strong>software engineering internship</strong> offers hands-on mentorship on live client projects across full-stack development, mobile apps, and digital marketing.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Live Project Experience & Industry Mentorship
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Unlike theoretical training courses, our <strong>fresher IT internship</strong> pairs candidates with senior software architects. Work with modern technologies like React, Next.js, Node.js, Python, Figma, and performance SEO tools.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Web & Mobile Development Track</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Join our <strong>web development internship in India</strong> or <strong>React developer internship</strong>. Master frontend, backend APIs, and database design.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>UI/UX & Brand Design Track</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Learn wireframing, prototyping, and design systems with our <strong>UI UX design internship</strong> specialists using Figma and Adobe Creative Suite.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Digital Marketing Track</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Gain real experience in Search Engine Optimization, Google Ads, Meta Ads, and content marketing analytics with our performance marketing leads.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
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
      <SeoContentSection />
      <ApplicationForm />
    </>
  );
}


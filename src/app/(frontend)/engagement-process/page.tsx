// @ts-nocheck
import type { Metadata } from 'next';
import EngagementHero from '@/components/frontend/EngagementHero/EngagementHero';
import EngagementSteps from '@/components/frontend/EngagementSteps/EngagementSteps';
import EngagementBenefits from '@/components/frontend/EngagementBenefits/EngagementBenefits';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';

export const metadata: Metadata = {
  title: 'Agile Software Engagement Process & Work Models | Gatecode Technologies',
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
    title: 'Agile Software Engagement Process & Work Models | Gatecode Technologies',
    description: 'Discover the transparent software engagement process at Gatecode Technologies. Explore our agile IT development workflows, dedicated engineering teams, and fixed-price project models.',
    url: 'https://gatecode.in/engagement-process',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agile Software Engagement Process & Work Models | Gatecode Technologies',
    description: 'Discover the transparent software engagement process at Gatecode Technologies. Explore our agile IT development workflows.',
  },
};

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        Agile Software Engagement Process & Work Models — Gatecode Technologies
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        At <strong>Gatecode Technologies</strong>, our <strong>software engagement models</strong> are designed to offer maximum flexibility, complete cost transparency, and seamless communication. Whether you require a <strong>dedicated software development team model</strong> or a <strong>fixed price vs dedicated team model</strong> structure, our <strong>agile software development process</strong> ensures timely sprint deliveries.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Structured IT Outsourcing Workflow & Requirement Analysis
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Our end-to-end <strong>IT engagement process</strong> begins with in-depth <strong>requirement analysis & discovery</strong>. We align business goals, define technical architecture, and establish clear KPIs before writing the first line of code.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>1. Discovery & Strategy</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Complete <strong>requirement analysis & discovery</strong> to map tech stacks, user journeys, software scope, and sprint milestones.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>2. Dedicated Engineering Teams</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Access top talent via our <strong>dedicated software development team model</strong>. Gain full management control and daily progress visibility.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>3. QA & Deployment</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Rigorous automated testing, security audits, and zero-downtime deployment following strict <strong>IT outsourcing workflow</strong> standards.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Choose Gatecode Technologies Engagement Process?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Partnering with Gatecode gives you complete control over your budget and delivery timeline. Our <strong>software project development methodology</strong> offers:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Agile Sprint Schedulers:</strong> Two-week sprint cycles with live staging previews and code reviews.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Flexible Hiring Options:</strong> Full-time dedicated developers, part-time specialists, or milestone-based contracts.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Post-Launch Warranty & SLAs:</strong> Ongoing maintenance, security patches, and cloud monitoring.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
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
      <SeoContentSection />
      <ProjectBanner />
      <ContactSection />
    </>
  );
}


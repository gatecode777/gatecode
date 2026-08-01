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
    title: 'About Gatecode Technologies | Top IT Software Company in India',
    description: 'Learn about Gatecode Technologies Pvt Ltd. Recognized among the top IT companies in India, we deliver digital transformation services, custom software engineering & IT solutions.',
    url: 'https://gatecode.in/about',
    siteName: 'Gatecode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Gatecode Technologies | Top IT Software Company in India',
    description: 'Learn about Gatecode Technologies Pvt Ltd. Recognized among the top IT companies in India, we deliver digital transformation services and IT solutions.',
  },
};

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        About Gatecode Technologies — Top IT Company in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong> (<strong>Gatecode Technologies Pvt Ltd</strong>), an accredited <strong>it company</strong> recognized among the <strong>top it companies in india</strong> and <strong>best it companies in india</strong> rankings. When you search for <strong>about gatecode technologies</strong> or look for a trusted <strong>full services it company</strong>, we deliver enterprise-grade software engineering, mobile application development, and business process automation solutions for clients globally.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Leading Digital Transformation Company & Software Engineering Partner
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Embracing digital growth requires a technology partner capable of modernizing legacy systems. As one of the top <strong>digital transformation companies</strong> offering end-to-end <strong>digital transformation services</strong>, Gatecode empowers businesses to optimize workflows, adopt cloud architectures, and scale seamless user experiences.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>About Gatecode Technologies Pvt Ltd</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Learn more <strong>about gatecode technologies</strong>. Founded as a premier <strong>gatecode</strong> software lab, we stand out as a top <strong>it software company near me</strong> and global technology vendor.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Top IT Companies in India</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Ranked among the <strong>best it companies in india</strong> and <strong>best it companies to work for in india</strong>, our culture fosters innovation, continuous learning, and client success.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Software & App Development Near Me</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                If you are searching for <strong>software companies near me</strong>, <strong>software development companies near me</strong>, <strong>app development companies near me</strong>, or <strong>it companies in jaipur</strong>, Gatecode provides dedicated development teams.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Choose Gatecode Technologies?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Partnering with an established <strong>it company</strong> guarantees robust code quality, transparent milestone delivery, and long-term technical support. Gatecode Technologies offers:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>End-to-End Technology Stack:</strong> Web development, mobile app engineering, UI/UX design, BPO, and digital marketing.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Agile Sprint Execution:</strong> Dedicated project managers, daily code commits, and transparent sprint reporting.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Global Client Trust:</strong> Delivering high-availability software solutions for startups and enterprise leaders.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

const About = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gatecode Technologies Pvt. Ltd.',
    alternateName: 'Gatecode Technologies',
    url: 'https://gatecode.in',
    logo: 'https://gatecode.in/images/logo.png',
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
      <SeoContentSection />
      <ContactSection />
    </>
  );
};

export default About;


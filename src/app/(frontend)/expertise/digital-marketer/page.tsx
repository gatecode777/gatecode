"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import TSlider from '@/components/frontend/TSlider/TSlider';
import '@/components/frontend/WebDeveloper/HeroSectionWD.css';
import '@/components/frontend/WebDeveloper/IntroText.css';
import '@/components/frontend/WebDeveloper/WhatWeOffer.css';
import '@/components/frontend/WebDeveloper/WhyChoose.css';
import '@/components/frontend/WebDeveloper/DevelopmentProcess.css';
import '@/components/frontend/WebDeveloper/TechnologiesWeUse.css';
import { 
  FaChartBar, 
  FaChartLine, 
  FaFacebook,
  FaSearch,
  FaEnvelope,
  FaBullhorn
} from 'react-icons/fa';
import { 
  SiGoogleanalytics, 
  SiGoogleads, 
  SiSemrush, 
  SiMailchimp,
  SiHubspot,
  SiGooglesearchconsole,
  SiGooglemarketingplatform
} from 'react-icons/si';

// ==================== HeroSectionWD Component (Updated for Digital Marketing) ====================
const HeroSectionWD = () => {
    return (
        <section
            className="wd-hero-section"
            style={{ backgroundImage: 'url("/images/Rectangle 305.jpg")' }}
        >
            <div className="wd-hero-overlay"></div>

            <div className="wd-hero-content">
                <div className="wd-hero-left">
                    <h1>
                        GROW YOUR BUSINESS WITH<br />
                        RESULT-DRIVEN DIGITAL<br />
                        MARKETING
                    </h1>

                    <p>
                        Boost your online presence, generate quality leads, and increase sales with our<br />
                        expert digital marketing strategies.
                    </p>

                    <Link href="/contact" className="wd-hero-btn">
                        Get Free Consultation
                    </Link>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Strategic Digital Marketing Solutions by Gatecode Technologies"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== IntroText Component (Updated for Digital Marketing) ====================
const IntroText = () => {
    return (
        <section className="intro-container">
            <p className="intro-text">
                At Gatecode Technologies Pvt. Ltd., we provide comprehensive digital marketing services designed to help your business grow online.
                Our approach combines creativity, data analysis, and strategic planning to deliver measurable results. From increasing website traffic
                to improving conversions, we help you reach the right audience and achieve your business goals effectively.
            </p>
        </section>
    );
};

// ==================== WhatWeOffer Component (Updated for Digital Marketing) ====================
const services = [
    {
        icon: "/images/icon1.png",
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website ranking and visibility on search engines to attract organic traffic.",
    },
    {
        icon: "/images/icon2.png",
        title: "Social Media Marketing (SMM)",
        description: "Engage your audience and build brand awareness across social media platforms.",
    },
    {
        icon: "/images/icon3.png",
        title: "Search Engine Marketing (SEM)",
        description: "Run paid advertising campaigns to generate instant traffic and leads.",
    },
    {
        icon: "/images/icon4.png",
        title: "Content Marketing",
        description: "Create valuable and engaging content to attract and retain customers.",
    },
    {
        icon: "/images/icon5.png",
        title: "Email Marketing",
        description: "Reach your audience directly with targeted and personalized email campaigns.",
    },
    {
        icon: "/images/icon6.png",
        title: "Social Media Optimization (SMO)",
        description: "Optimize your social profiles to improve visibility and engagement.",
    },
    {
        icon: "/images/icon7.png",
        title: "Paid Ads (Google & Social Media)",
        description: "High-performing ad campaigns that maximize ROI and conversions.",
    },
    {
        icon: "/images/icon8.png",
        title: "Analytics & Reporting",
        description: "Track performance and measure success with detailed reports and insights.",
    },
];

const WhatWeOffer = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.offer-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="offer-section" ref={sectionRef}>
            <div className="offer-heading">
                <h2>
                    WHAT <span>WE OFFER</span>
                </h2>
                <div className="heading-line"></div>
            </div>

            <div className="offer-wrapper">
                <div className="offer-grid">
                    {services.map((service, index) => (
                        <div
                            className="offer-card"
                            key={index}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="offer-icon">
                                <Image src={service.icon} alt={`${service.title} - Gatecode Technologies`} width={50} height={50} />
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ==================== WhyChoose Component (Updated for Digital Marketing) ====================
const chooseData = [
    {
        image: "/images/img1.jpg",
        title: "Data-Driven Marketing Strategies",
    },
    {
        image: "/images/img2.jpg",
        title: "Increased Website Traffic",
    },
    {
        image: "/images/img3.jpg",
        title: "Better Lead Generation",
    },
    {
        image: "/images/img4.jpg",
        title: "Targeted Audience Reach",
    },
    {
        image: "/images/img5.jpg",
        title: "Improved Conversion Rates",
    },
    {
        image: "/images/img6.jpg",
        title: "Measurable ROI",
    },
];

const WhyChoose = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.why-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="why-choose-section" ref={sectionRef}>
            <div className="why-choose-heading">
                <h2>
                    WHY <span>CHOOSE US</span>
                </h2>
                <div className="why-choose-divider" />
                <p>We focus on delivering real results, not just promises.</p>
            </div>

            <div className="why-choose-wrapper">
                <div className="why-choose-grid">
                    {chooseData.map((item, index) => (
                        <div
                            className="why-card"
                            key={index}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="why-card-image">
                                <Image src={item.image} alt={`${item.title} - Gatecode Technologies`} width={300} height={200} />
                                <div className="why-card-overlay" />
                            </div>
                            <div className="why-card-content">
                                <div className="why-card-num">{String(index + 1).padStart(2, '0')}</div>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ==================== DevelopmentProcess Component (Updated for Digital Marketing) ====================
// const processSteps = [
//     "Research & Strategy",
//     "Campaign Planning",
//     "Execution",
//     "Monitoring",
//     "Reporting",
//     "Optimization",
// ];

// const DevelopmentProcess = () => {
//     return (
//         <section className="development-section">
//             <div className="development-heading">
//                 <h2>
//                     OUR <span>DEVELOPMENT PROCESS</span>
//                 </h2>
//                 <div className="development-line"></div>
//             </div>

//             <div className="process-wrapper">
//                 <div className="process-line-horizontal"></div>

//                 <div className="process-grid">
//                     {processSteps.map((step, index) => (
//                         <div className="process-card" key={index}>
//                             <div className="vertical-drop-line"></div>
//                             <h3>{step}</h3>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

const DevelopmentProcess = () => {
    return (
        <section className="dev-process-section">
            <div className="dev-process-heading">
                <h2>Our <span>Development Process</span></h2>
                <div className="dev-process-divider" />
            </div>
            <div className="dev-process-body">
                <div className="dev-process-box">
                    {/* Desktop video (hidden on ≤426px) */}
                    <video
                        className="dev-video-desktop"
                        src="/videos/JavaScript Developer_video.mp4"
                        poster="/images/2.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video (shown on ≤426px) */}
                    <video
                        className="dev-video-mobile"
                        src="/videos/4th.mp4"
                        poster="/images/2.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== Technologies Component (Updated with content from image) ====================
interface TechnologyItem {
    name: string;
    icon: React.ReactNode;
}

interface TechnologyCategory {
    title: string;
    icon: React.ReactNode;
    items: TechnologyItem[];
}

const technologies: TechnologyCategory[] = [
    {
        title: "Analytics & Reporting",
        icon: <FaChartBar />,
        items: [
            { name: "Google Analytics", icon: <SiGoogleanalytics style={{ color: '#E37400' }} /> },
            { name: "Google Search Console", icon: <SiGooglesearchconsole style={{ color: '#4285F4' }} /> },
            { name: "Data Studio", icon: <FaChartLine style={{ color: '#0d9488' }} /> },
        ],
    },
    {
        title: "SEO & Paid Ads",
        icon: <FaSearch />,
        items: [
            { name: "Google Ads", icon: <SiGoogleads style={{ color: '#4285F4' }} /> },
            { name: "SEMrush", icon: <SiSemrush style={{ color: '#FF6600' }} /> },
            { name: "Ahrefs", icon: <SiGooglemarketingplatform style={{ color: '#4285F4' }} /> },
        ],
    },
    {
        title: "Social Media Marketing",
        icon: <FaBullhorn />,
        items: [
            { name: "Meta Ads (Facebook/Instagram)", icon: <FaFacebook style={{ color: '#1877F2' }} /> },
            { name: "Google Marketing Platform", icon: <SiGooglemarketingplatform style={{ color: '#4285F4' }} /> },
        ],
    },
    {
        title: "Email & CRM",
        icon: <FaEnvelope />,
        items: [
            { name: "Mailchimp", icon: <SiMailchimp style={{ color: '#FFE01B', backgroundColor: '#000000', borderRadius: '2px' }} /> },
            { name: "HubSpot", icon: <SiHubspot style={{ color: '#FF7A59' }} /> },
        ],
    },
];

const TechnologiesWeUse: React.FC = () => {
    return (
        <section className="tech-section">
            <h2 className="tech-title">
                <span className="tech-title-light">MARKETING TOOLS</span> WE USE
            </h2>
            <div className="tech-divider"></div>

            <div className="tech-scroll-wrapper">
                <div className="tech-grid">
                    {technologies.map((category, index) => (
                        <div key={index} className="tech-category">
                            <div className="tech-category-header">
                                <span className="tech-category-icon">{category.icon}</span>
                                <h3 className="tech-category-title">{category.title}</h3>
                            </div>
                            <ul className="tech-list">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="tech-item">
                                        <span className="tech-item-icon">{item.icon}</span>
                                        <span className="tech-item-name">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        Best Digital Marketing Company in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong>, an accredited <strong>digital marketing company in india</strong> recognized among the <strong>top digital marketing companies</strong> and <strong>best digital marketing company in india</strong> rankings. Whether you are looking for a reliable <strong>digital marketing agency</strong>, a full-service <strong>marketing agency</strong>, or searching for the <strong>best digital marketing company near me</strong>, we deliver data-driven <strong>digital marketing services</strong> that generate qualified leads and maximize ROI.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Top Digital Marketing Agency & Performance Growth Marketing
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Scaling your business online requires integrated growth strategies across search engines, paid ads, and social media channels. As the <strong>best digital marketing agency</strong> and a leading <strong>digital marketing company</strong>, we craft high-converting <strong>digital marketing websites</strong> and omnichannel marketing campaigns for startups and enterprise brands.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire SEO & Performance Specialists</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Accelerate organic rankings. Easily <strong>hire seo specialist</strong> leads or fulfill your <strong>digital marketing hiring</strong> goals with dedicated marketers trained in technical SEO, link building, and Google Ads management.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Full-Service Growth Marketing</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Work with one of the <strong>best marketing agencies</strong>. From Search Engine Optimization (SEO) to Pay-Per-Click (PPC) and Social Media Marketing (SMM), our <strong>best digital marketing company</strong> team manages your entire marketing funnel.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Local & Global Campaign Execution</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                If you are searching for a <strong>digital marketing agency near me</strong> or <strong>digital marketing company near me</strong>, Gatecode Technologies combines local targeting with global campaign execution.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Choose Gatecode Technologies for Digital Marketing?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Partnering with an accredited <strong>digital marketing company</strong> ensures predictable customer acquisition, low cost-per-lead (CPL), and transparent monthly reporting. Gatecode Technologies offers:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Data-Driven SEO & Content:</strong> Technical audits, keyword research, on-page optimization, and authority link building.</li>
                        <li style={{ marginBottom: '10px' }}><strong>High-ROI Paid Advertising:</strong> Google Search Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, and remarketing funnels.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Dedicated Growth Marketers:</strong> Flexible engagement options for full-time, part-time, or campaign-based digital marketing team hiring.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

// ==================== Main Page Component ====================
const DigitalMarketingServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Gatecode Technologies Digital Marketing Strategy & Process',
        description: 'Watch our 6-step digital marketing and lead generation process covering SEO Strategy, Campaign Setup, Content Creation, Performance Optimization, Analytics, and Scaling at Gatecode Technologies.',
        thumbnailUrl: [
            'https://gatecode.in/images/2.jpg',
            'https://gatecode.in/images/digitalbg1.png',
        ],
        uploadDate: '2026-01-15T08:00:00+05:30',
        contentUrl: 'https://gatecode.in/videos/JavaScript%20Developer_video.mp4',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
            { '@type': 'ListItem', position: 2, name: 'Technical Expertise', item: 'https://gatecode.in/expertise/digital-marketer' },
            { '@type': 'ListItem', position: 3, name: 'Digital Marketer', item: 'https://gatecode.in/expertise/digital-marketer' },
        ],
    };

    const digitalMarketingSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Digital Marketing Services',
        name: 'Best Digital Marketing Company in India',
        provider: {
            '@type': 'Organization',
            name: 'Gatecode Technologies Pvt. Ltd.',
            url: 'https://gatecode.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        description: 'Best digital marketing company in India providing top SEO services, PPC paid advertising, social media marketing, and dedicated SEO specialist hiring.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Why should I choose Gatecode Technologies as my digital marketing company in India?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gatecode Technologies is a top digital marketing agency in India providing comprehensive SEO services, PPC campaign management, social media marketing, and dedicated SEO specialists.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I hire an SEO specialist or PPC manager individually?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! You can hire dedicated SEO specialists, Google Ads managers, or content marketers for full-time or project-based marketing hiring.',
                },
            },
            {
                '@type': 'Question',
                name: 'What digital marketing services do you provide?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We provide Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing (SMM), Content Marketing, Email Automation, and Conversion Rate Optimization (CRO).',
                },
            },
        ],
    };

    return (
        <div className="web-development-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMarketingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HeroSectionWD />
            <IntroText />
            <WhatWeOffer />
            <WhyChoose />
            <DevelopmentProcess />
            <TechnologiesWeUse />
            <SeoContentSection />
            {/* <TSlider /> */}
            <ContactSection />
        </div>
    );
};

export default DigitalMarketingServicesPage;

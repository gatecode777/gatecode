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
    FaMobileAlt,
    FaServer,
    FaDatabase,
    FaTools,
    FaAndroid,
    FaApple,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaCreditCard,
    FaLink
} from 'react-icons/fa';
import {
    SiFlutter,
    SiMysql,
    SiMongodb,
    SiFirebase
} from 'react-icons/si';

// ==================== HeroSectionWD Component (Updated for App Development) ====================
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
                        BUILD SMART, SCALABLE<br />
                        & HIGH-PERFORMANCE<br />
                        MOBILE APPS
                    </h1>

                    <p>
                        We develop powerful mobile applications that deliver seamless user experience,<br />
                        boost engagement, and drive business growth.
                    </p>

                    <Link href="/contact" className="wd-hero-btn">
                        Get Free Consultation
                    </Link>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Custom Mobile App Development Services by Gatecode Technologies"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== IntroText Component (Updated for App Development) ====================
const IntroText = () => {
    return (
        <section className="intro-container">
            <p className="intro-text">
                At Gatecode Technologies Pvt. Ltd., we create innovative and user-friendly mobile applications tailored to your business needs.
                Our focus is on performance, usability, and scalability to ensure your app stands out in the competitive market.
                Whether you need an Android app, iOS app, or cross-platform solution, we deliver secure and high-quality applications
                that help you connect with your audience effectively.
            </p>
        </section>
    );
};

// ==================== WhatWeOffer Component (Updated for App Development) ====================
const services = [
    {
        icon: "/images/icon1.png",
        title: "Android App Development",
        description: "Custom Android applications designed for performance, scalability, and user engagement.",
    },
    {
        icon: "/images/icon2.png",
        title: "iOS App Development",
        description: "High-quality iOS apps with smooth performance and premium user experience.",
    },
    {
        icon: "/images/icon3.png",
        title: "Cross-Platform App Development",
        description: "Apps that work seamlessly on both Android and iOS using modern frameworks.",
    },
    {
        icon: "/images/icon4.png",
        title: "UI/UX Design for Apps",
        description: "Intuitive and visually appealing app designs that enhance user interaction.",
    },
    {
        icon: "/images/icon5.png",
        title: "App Testing & Quality Assurance",
        description: "Thorough testing to ensure bug-free and high-performance applications.",
    },
    {
        icon: "/images/icon6.png",
        title: "App Maintenance & Support",
        description: "Ongoing updates, improvements, and technical support.",
    },
    {
        icon: "/images/icon7.png",
        title: "API Integration",
        description: "Seamless integration with third-party services and tools.",
    },
    {
        icon: "/images/icon8.png",
        title: "App Deployment",
        description: "Publishing apps on Google Play Store and Apple App Store.",
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

// ==================== WhyChoose Component (Updated for App Development) ====================
const chooseData = [
    {
        image: "/images/img1.jpg",
        title: "High-Performance Applications",
    },
    {
        image: "/images/img2.jpg",
        title: "User-Friendly Design",
    },
    {
        image: "/images/img3.jpg",
        title: "Secure And Scalable Solutions",
    },
    {
        image: "/images/img4.jpg",
        title: "Cross-Platform Compatibility",
    },
    {
        image: "/images/img5.jpg",
        title: "Fast Development And Delivery",
    },
    {
        image: "/images/img6.jpg",
        title: "Ongoing Support And Updates",
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
                <p>We build apps that are not just functional but also impactful. Our focus is on creating apps that deliver real business results.</p>
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

// ==================== DevelopmentProcess Component (Updated for App Development) ====================
// const processSteps = [
//     "Requirement Analysis",
//     "UI/UX Design",
//     "Development",
//     "Testing",
//     "Launch",
//     "Support",
// ];

// const DevelopmentProcess = () => {
//     return (
//         <section className="development-section">
//             <div className="development-heading">
//                 <h2>
//                     OUR <span>APP DEVELOPMENT PROCESS</span>
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
                        src="/videos/expertise_video.mp4"
                        poster="/images/2.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video shown only on ≤426px */}
                    <video
                        className="dev-video-mobile"
                        src="/videos/1st.mp4"
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
        title: "Mobile Development",
        icon: <FaMobileAlt />,
        items: [
            { name: "Kotlin (Android)", icon: <FaAndroid style={{ color: '#3DDC84' }} /> },
            { name: "Swift (iOS)", icon: <FaApple style={{ color: '#000000' }} /> },
            { name: "Flutter", icon: <SiFlutter style={{ color: '#02569B' }} /> },
            { name: "React Native", icon: <FaReact style={{ color: '#61DAFB' }} /> },
        ],
    },
    {
        title: "Backend Development",
        icon: <FaServer />,
        items: [
            { name: "Node.js", icon: <FaNodeJs style={{ color: '#339933' }} /> },
            { name: "PHP", icon: <FaPhp style={{ color: '#777BB4' }} /> },
            { name: "Python", icon: <FaPython style={{ color: '#3776AB' }} /> },
        ],
    },
    {
        title: "Database",
        icon: <FaDatabase />,
        items: [
            { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> },
            { name: "MongoDB", icon: <SiMongodb style={{ color: '#47A248' }} /> },
            { name: "Firebase", icon: <SiFirebase style={{ color: '#FFCA28' }} /> },
        ],
    },
    {
        title: "Tools",
        icon: <FaTools />,
        items: [
            { name: "Git", icon: <FaGitAlt style={{ color: '#F05032' }} /> },
            { name: "GitHub", icon: <FaGithub style={{ color: '#181717' }} /> },
            { name: "Payment Gateway Integration", icon: <FaCreditCard style={{ color: '#0d9488' }} /> },
            { name: "REST APIs", icon: <FaLink style={{ color: '#0d9488' }} /> },
            { name: "Firebase Services", icon: <SiFirebase style={{ color: '#FFCA28' }} /> },
        ],
    },
];

const TechnologiesWeUse: React.FC = () => {
    return (
        <section className="tech-section">
            <h2 className="tech-title">
                <span className="tech-title-light">TECHNOLOGIES</span> WE USE
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
                        Hire Dedicated Mobile App Developers in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong>, a leading <strong>mobile app development company in india</strong> recognized among the <strong>top app development companies in india</strong>. When you need to <strong>hire app developer</strong> professionals or <strong>hire mobile app developers</strong>, our team delivers high-performance native iOS, Android, and hybrid app solutions. Whether you want to <strong>hire mobile app developer in india</strong> or build a global mobile product, we rank as the <strong>best mobile app development company</strong> for enterprise brands and growing startups.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Android, iOS & Cross-Platform Mobile App Development Company in India
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Building scalable mobile applications requires expert talent across native and multi-platform frameworks. As a full-service <strong>custom app development company</strong> and specialized <strong>ecommerce app development company</strong>, we make it simple to <strong>hire dedicated mobile app developers</strong> who deliver seamless UI/UX, robust security, and cloud integrations.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire Android & iOS App Developers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Work with a team certified as the <strong>best android app development company in india</strong>. Easily <strong>hire android app developer</strong> engineers or <strong>hire android app developers in india</strong> alongside expert engineers when you <strong>hire ios app developer</strong> or <strong>hire iphone app developer</strong> leads.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Flutter & React Native Developers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Accelerate launch timelines across multi-platforms. <strong>Hire flutter app developers</strong>, <strong>hire flutter app developer india</strong> specialists, or <strong>hire react native app developers</strong> to build cross-platform apps with single-codebase efficiency.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom & E-Commerce Mobile Apps</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Partner with the <strong>best custom app development company</strong>. From <strong>ecommerce app development company</strong> solutions to enterprise portals, our engineers deliver tailored mobile software.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Choose Gatecode Technologies Among Top App Development Companies?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Choosing from elite <strong>app development companies</strong> ensures your application scales efficiently. When you <strong>hire mobile app developers in india</strong> from Gatecode Technologies, you get:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Agile & Transparent Development:</strong> Direct access to developers with daily code commits and sprint demos.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Flexible Hiring Models:</strong> Hourly, monthly, or dedicated project teams matched to your budget.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Full Lifecycle Support:</strong> From UI/UX architecture to App Store/Google Play deployment & maintenance.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

// ==================== Main Page Component ====================
const AppDevelopmentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Gatecode Technologies App Development Process',
        description: 'Watch our 6-step mobile app development process covering Research & Strategy, UI/UX Design, Development, Testing, Launch, and Support at Gatecode Technologies.',
        thumbnailUrl: [
            'https://gatecode.in/images/2.jpg',
            'https://gatecode.in/images/digitalbg1.png',
        ],
        uploadDate: '2026-01-15T08:00:00+05:30',
        contentUrl: 'https://gatecode.in/videos/expertise_video.mp4',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
            { '@type': 'ListItem', position: 2, name: 'Technical Expertise', item: 'https://gatecode.in/expertise/app-developers' },
            { '@type': 'ListItem', position: 3, name: 'App Developers', item: 'https://gatecode.in/expertise/app-developers' },
        ],
    };

    const appDeveloperSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Hire Mobile App Developers',
        name: 'Hire Dedicated Mobile App Developers in India',
        provider: {
            '@type': 'Organization',
            name: 'Gatecode Technologies Pvt. Ltd.',
            url: 'https://gatecode.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        description: 'Top mobile app development company in India allowing businesses to hire dedicated mobile app developers, Android, iOS, Flutter, React Native, and custom e-commerce app developers.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Why should I hire mobile app developers from Gatecode Technologies?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gatecode Technologies is a top mobile app development company in India allowing you to hire app developer talent, dedicated Android/iOS leads, Flutter & React Native developers with flexible hiring models.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I hire Android and iOS developers individually?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! You can hire android app developer experts or hire ios app developer specialists dedicated to native or cross-platform mobile development.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do your developers build custom and e-commerce mobile applications?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. As a custom app development company and ecommerce app development company, we build high-converting mobile apps for Android and iOS.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(appDeveloperSchema) }}
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

export default AppDevelopmentPage;

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
    FaCode,
    FaServer,
    FaTools,
    FaReact,
    FaAngular,
    FaVuejs,
    FaNodeJs,
    FaLink,
    FaJs
} from 'react-icons/fa';
import {
    SiExpress,
    SiRedux,
    SiNextdotjs,
    SiWebpack,
    SiTypescript
} from 'react-icons/si';

// ==================== HeroSectionWD Component (Updated for JavaScript Developer) ====================
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
                        HIRE EXPERT JAVASCRIPT<br />
                        DEVELOPERS FOR SCALABLE<br />
                        & DYNAMIC WEB SOLUTIONS
                    </h1>

                    <p>
                        Build fast, interactive, and high-performance web applications with our<br />
                        experienced JavaScript developers.
                    </p>

                    <Link href="/contact" className="wd-hero-btn">
                        Get Free Consultation
                    </Link>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Custom Full Stack JavaScript Development by Gatecode Technologies"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== IntroText Component (Updated for JavaScript Developer) ====================
const IntroText = () => {
    return (
        <section className="intro-container">
            <p className="intro-text">
                At Gatecode Technologies Pvt. Ltd., we provide skilled JavaScript developers who specialize in building modern, responsive, and scalable web applications.
                From dynamic websites to complex web platforms, our developers use the latest JavaScript technologies to deliver fast, secure, and user-friendly solutions
                tailored to your business needs.
            </p>
        </section>
    );
};

// ==================== WhatWeOffer Component (Updated for JavaScript Developer) ====================
const services = [
    {
        icon: "/images/icon1.png",
        title: "Custom JavaScript Development",
        description: "Building tailored web solutions using JavaScript for unique business requirements.",
    },
    {
        icon: "/images/icon2.png",
        title: "Frontend Development",
        description: "Creating interactive and responsive user interfaces for seamless user experience.",
    },
    {
        icon: "/images/icon3.png",
        title: "Single Page Applications (SPA)",
        description: "Fast and dynamic applications that provide smooth and app-like user experiences.",
    },
    {
        icon: "/images/icon4.png",
        title: "Website Optimization",
        description: "Improving speed, performance, and responsiveness of websites.",
    },
    {
        icon: "/images/icon5.png",
        title: "Web Application Development",
        description: "Developing scalable and high-performance web applications.",
    },
    {
        icon: "/images/icon6.png",
        title: "API Integration",
        description: "Connecting applications with third-party services for enhanced functionality.",
    },
    {
        icon: "/images/icon7.png",
        title: "JavaScript Framework Development",
        description: "Using modern frameworks to build efficient and scalable applications.",
    },
    {
        icon: "/images/icon8.png",
        title: "Maintenance & Support",
        description: "Ongoing updates and support for smooth performance.",
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

// ==================== WhyChoose Component (Updated for JavaScript Developer) ====================
const chooseData = [
    {
        image: "/images/img1.jpg",
        title: "Web Application Development",
    },
    {
        image: "/images/img2.jpg",
        title: "API Integration",
    },
    {
        image: "/images/img3.jpg",
        title: "JavaScript Framework Development",
    },
    {
        image: "/images/img4.jpg",
        title: "Maintenance & Support",
    },
    {
        image: "/images/img5.jpg",
        title: "On-Time Project Delivery",
    },
    {
        image: "/images/img6.jpg",
        title: "Dedicated Support",
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
                <p>We deliver high-quality JavaScript solutions that are fast, scalable, and user-focused.</p>
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

// ==================== DevelopmentProcess Component (Updated for JavaScript Developer) ====================

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
        title: "Core Technologies",
        icon: <FaCode />,
        items: [
            { name: "JavaScript (ES6+)", icon: <FaJs style={{ color: '#F7DF1E', backgroundColor: '#000000', borderRadius: '2px' }} /> },
            { name: "TypeScript", icon: <SiTypescript style={{ color: '#3178C6' }} /> },
        ],
    },
    {
        title: "Frontend Frameworks",
        icon: <FaCode />,
        items: [
            { name: "React.js", icon: <FaReact style={{ color: '#61DAFB' }} /> },
            { name: "Angular", icon: <FaAngular style={{ color: '#DD0031' }} /> },
            { name: "Vue.js", icon: <FaVuejs style={{ color: '#4FC08D' }} /> },
        ],
    },
    {
        title: "Backend",
        icon: <FaServer />,
        items: [
            { name: "Express.js", icon: <SiExpress style={{ color: '#000000' }} /> },
            { name: "Node.js", icon: <FaNodeJs style={{ color: '#339933' }} /> },
        ],
    },
    {
        title: "Tools & Libraries",
        icon: <FaTools />,
        items: [
            { name: "Redux", icon: <SiRedux style={{ color: '#764ABC' }} /> },
            { name: "Next.js", icon: <SiNextdotjs style={{ color: '#000000' }} /> },
            { name: "REST APIs", icon: <FaLink style={{ color: '#0d9488' }} /> },
            { name: "Webpack", icon: <SiWebpack style={{ color: '#8DD6F9' }} /> },
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
                        Hire Dedicated JavaScript Developers in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong>, an accredited <strong>javascript development company</strong> and recognized <strong>javascript web development company</strong>. When you need to <strong>hire javascript developer</strong> experts or build scalable web applications, our certified <strong>javascript developer</strong> engineers deliver end-to-end <strong>javascript app development</strong> and comprehensive <strong>javascript development services</strong> for modern enterprises worldwide.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Full Stack Development with JavaScript & Modern Frameworks
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        JavaScript powers over 98% of the web today. If you are curious about <strong>which company developed javascript</strong> (Netscape created it in 1995), modern web applications now rely heavily on <strong>full stack development with javascript</strong> using React, Next.js, Vue, Node.js, and TypeScript.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire Full Stack JavaScript Developer</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Build end-to-end applications when you <strong>Hire Full Stack JavaScript Developer</strong> leads. We master <strong>full stack development with javascript</strong> from database design to API architecture.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Frontend JavaScript Experts</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                High-performance UI/UX engineering. Our team specializes in <strong>javascript in frontend development</strong>, single-page apps (SPAs), progressive web apps (PWAs), and <strong>javascript app development</strong>.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>JavaScript Development Company Services</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Partner with an established <strong>javascript development company</strong>. We offer custom web app engineering, code refactoring, and enterprise <strong>javascript development services</strong>.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Choose Gatecode Technologies for JavaScript Development?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Partnering with a dedicated <strong>javascript web development company</strong> ensures rapid development sprints, high speed performance, and clean modular code. Gatecode Technologies offers:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Full-Stack Technical Mastery:</strong> React, Next.js, Node.js, Express, Vue.js, Angular, and TypeScript.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Direct Developer Access:</strong> Daily Slack communication, transparent code commits, and agile sprint demos.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Flexible Hiring Models:</strong> Dedicated full-time, part-time, or hourly JavaScript developers.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

// ==================== Main Page Component ====================
const JavaScriptDeveloperPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Gatecode Technologies JavaScript Development Process',
        description: 'Watch our 6-step agile JavaScript development process covering Research & Strategy, UI/UX Design, Development, Testing, Launch, and Support at Gatecode Technologies.',
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
            { '@type': 'ListItem', position: 2, name: 'Technical Expertise', item: 'https://gatecode.in/expertise/javascript-developers' },
            { '@type': 'ListItem', position: 3, name: 'JavaScript Developers', item: 'https://gatecode.in/expertise/javascript-developers' },
        ],
    };

    const jsSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'JavaScript Development Services',
        name: 'Hire Full Stack JavaScript Developer in India',
        provider: {
            '@type': 'Organization',
            name: 'Gatecode Technologies Pvt. Ltd.',
            url: 'https://gatecode.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        description: 'Top JavaScript development company in India allowing businesses to hire dedicated JavaScript developers, full stack JavaScript engineers, React, Node, and Vue experts.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Why should I hire JavaScript developers from Gatecode Technologies?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gatecode Technologies is a premier JavaScript development company in India allowing you to hire JavaScript developers, full stack JavaScript engineers, and frontend/backend specialists.',
                },
            },
            {
                '@type': 'Question',
                name: 'Which company developed JavaScript initially?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'JavaScript was originally developed by Netscape Communications Corporation (specifically Brendan Eich) in 1995 as a scripting language for web browsers.',
                },
            },
            {
                '@type': 'Question',
                name: 'What technologies do your full stack JavaScript developers specialize in?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our full stack JavaScript developers specialize in React, Next.js, Node.js, Express, Vue.js, Angular, TypeScript, MongoDB, and PostgreSQL.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsSchema) }}
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

export default JavaScriptDeveloperPage;

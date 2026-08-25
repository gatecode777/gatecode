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
  FaPalette, 
  FaMobileAlt, 
  FaUsers, 
  FaFigma, 
  FaPlay, 
  FaGem,
  FaPuzzlePiece
} from 'react-icons/fa';
import { 
  SiSketch, 
  SiInvision, 
  SiNotion 
} from 'react-icons/si';

// ==================== HeroSectionWD Component (Updated for UI/UX Designer) ====================
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
                        DESIGN EXPERIENCES THAT<br />
                        USERS LOVE & BUSINESSES<br />
                        GROW FROM
                    </h1>

                    <p>
                        Hire expert UI/UX designers to create intuitive, engaging, and<br />
                        conversion-focused digital experiences.
                    </p>

                    <Link href="/contact" className="wd-hero-btn">
                        Get Free Consultation
                    </Link>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Creative UI UX Design Services by Gatecode Technologies"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== IntroText Component (Updated for UI/UX Designer) ====================
const IntroText = () => {
    return (
        <section className="intro-container">
            <p className="intro-text">
                At Gatecode Technologies Pvt. Ltd., we design user-centric digital experiences that are visually appealing and highly functional.
                Our UI/UX designers focus on understanding user behavior, simplifying interactions, and creating designs that enhance engagement
                and drive results. From websites to mobile apps, we ensure every design delivers a seamless and meaningful user journey.
            </p>
        </section>
    );
};

// ==================== WhatWeOffer Component (Updated for UI/UX Designer) ====================
const services = [
    {
        icon: "/images/icon1.png",
        title: "UI (User Interface) Design",
        description: "Modern, visually appealing interfaces that reflect your brand identity and attract users.",
    },
    {
        icon: "/images/icon2.png",
        title: "UX (User Experience) Design",
        description: "Creating smooth, intuitive, and user-friendly experiences that improve usability.",
    },
    {
        icon: "/images/icon3.png",
        title: "Wireframing & Prototyping",
        description: "Building structured layouts and interactive prototypes before development.",
    },
    {
        icon: "/images/icon4.png",
        title: "User Research & Analysis",
        description: "Understanding user needs, behaviors, and expectations to create effective designs.",
    },
    {
        icon: "/images/icon5.png",
        title: "Mobile App Design",
        description: "Designing engaging and responsive mobile app interfaces.",
    },
    {
        icon: "/images/icon6.png",
        title: "Website Design",
        description: "Crafting modern and responsive website designs for better engagement.",
    },
    {
        icon: "/images/icon7.png",
        title: "UX Audit & Improvement",
        description: "Analyzing and improving existing designs for better performance.",
    },
    {
        icon: "/images/icon8.png",
        title: "Design Systems",
        description: "Creating consistent design guidelines for scalable and uniform products.",
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

// ==================== WhyChoose Component (Updated for UI/UX Designer) ====================
const chooseData = [
    {
        image: "/images/img1.jpg",
        title: "User-Centered Design Approach",
    },
    {
        image: "/images/img2.jpg",
        title: "Modern And Creative Designs",
    },
    {
        image: "/images/img3.jpg",
        title: "Improved User Engagement",
    },
    {
        image: "/images/img4.jpg",
        title: "Conversion-Focused Layouts",
    },
    {
        image: "/images/img5.jpg",
        title: "Consistent And Scalable Design Systems",
    },
    {
        image: "/images/img6.jpg",
        title: "Fast And Efficient Delivery",
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
                <p>We focus on designing experiences that are not just beautiful, but also functional and result-driven.</p>
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

// ==================== DevelopmentProcess Component (Updated for UI/UX Designer) ====================
// const processSteps = [
//     "Research & Discovery",
//     "Wireframing",
//     "UI Design",
//     "Prototyping",
//     "Testing",
//     "Delivery",
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
                        src="/videos/UX Designer_video.mp4"
                        poster="/images/2.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video shown only on ≤426px */}
                    <video
                        className="dev-video-mobile"
                        src="/videos/2nd.mp4"
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
        title: "Design Tools",
        icon: <FaPalette />,
        items: [
            { name: "Figma", icon: <FaFigma style={{ color: '#F24E1E' }} /> },
            { name: "Adobe XD", icon: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', backgroundColor: '#2E001F', color: '#FF61F6', border: '1px solid #FF61F6', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>Xd</span> },
            { name: "Sketch", icon: <SiSketch style={{ color: '#FDB300' }} /> },
        ],
    },
    {
        title: "Prototyping Tools",
        icon: <FaMobileAlt />,
        items: [
            { name: "Figma Prototype", icon: <FaPlay style={{ color: '#0d9488' }} /> },
            { name: "InVision", icon: <SiInvision style={{ color: '#FF3366' }} /> },
        ],
    },
    {
        title: "Collaboration Tools",
        icon: <FaUsers />,
        items: [
            { name: "Zeplin", icon: <FaPuzzlePiece style={{ color: '#F2A530' }} /> },
            { name: "Notion", icon: <SiNotion style={{ color: '#000000' }} /> },
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
                        Hire Web & Mobile UI UX Designers in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong>, an accredited <strong>ui ux design company</strong> and premier provider of <strong>ui ux design services</strong>. When you need to <strong>hire ui ux designer</strong> experts or <strong>hire ux designers</strong>, our senior product designers combine research, wireframing, and interactive prototyping. Understanding <strong>what is ui ux design</strong> excellence, we craft conversion-focused digital products across mobile apps, SaaS platforms, and enterprise websites.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Top-Rated UI UX Design Services & UI UX Design Company
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Creating memorable user experiences requires deep mastery of both <strong>ui and ux</strong> design principles. Recognized as a leading <strong>ui ux design services company</strong>, we make it effortless for businesses seeking a <strong>designer hire</strong> or <strong>ui ux developer</strong> partner to build intuitive web interfaces and high-converting mobile applications.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire Dedicated UI UX Designers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Build pixel-perfect interfaces when you <strong>hire ui ux designer</strong> or <strong>hire ux designers</strong>. Our team covers user journey mapping, design systems, and frontend developer handoffs.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire Web & Mobile UI UX Designers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Complete product design coverage. <strong>Hire Web & Mobile UI UX Designers</strong> or <strong>hire graphic designer</strong> talent for responsive web apps, iOS/Android UIs, and branding assets.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Figma & Interactive Prototyping</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Partner with an expert <strong>ui ux design company</strong> for high-fidelity Figma prototypes, micro-interactions, usability testing, and custom design systems.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Partner with Gatecode Technologies for UI UX Design?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Choosing certified <strong>ui ux design</strong> specialists guarantees seamless navigation, reduced user drop-off, and maximum user engagement. Choosing Gatecode Technologies gives you:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Data-Driven User Research:</strong> User personas, usability testing, wireframes, and journey maps before coding.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Figma & Design Systems:</strong> Standardized UI component libraries for rapid scalability and brand consistency.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Flexible Hiring Models:</strong> Dedicated full-time, part-time, or hourly UI UX designer engagement.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

// ==================== Main Page Component ====================
const UxDesignerPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Gatecode Technologies UI/UX Design Process',
        description: 'Watch our 6-step agile UI/UX design process covering User Research, Wireframing, UI Design, Prototyping, Testing, and Handoff at Gatecode Technologies.',
        thumbnailUrl: [
            'https://gatecode.in/images/2.jpg',
            'https://gatecode.in/images/digitalbg1.png',
        ],
        uploadDate: '2026-01-15T08:00:00+05:30',
        contentUrl: 'https://gatecode.in/videos/UX%20Designer_video.mp4',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
            { '@type': 'ListItem', position: 2, name: 'Technical Expertise', item: 'https://gatecode.in/expertise/ui-ux-designers' },
            { '@type': 'ListItem', position: 3, name: 'UI/UX Designers', item: 'https://gatecode.in/expertise/ui-ux-designers' },
        ],
    };

    const uiUxSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'UI UX Design Services',
        name: 'Hire Web & Mobile UI UX Designers in India',
        provider: {
            '@type': 'Organization',
            name: 'Gatecode Technologies Pvt. Ltd.',
            url: 'https://gatecode.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        description: 'Top UI UX design company in India allowing businesses to hire dedicated UI UX designers, web & mobile designers, Figma experts, and UI UX developers.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Why should I hire UI UX designers from Gatecode Technologies?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gatecode Technologies is a leading UI UX design company in India allowing you to hire UI UX designer talent, web & mobile designers, and Figma prototyping experts with flexible hiring options.',
                },
            },
            {
                '@type': 'Question',
                name: 'What design tools do your UI UX designers use?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our UI UX designers master industry-standard tools including Figma, Sketch, Adobe XD, InVision, and Photoshop to build responsive design systems.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is included in your UI UX design services?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our UI UX design services cover user research, wireframing, interactive prototyping, UI design systems, usability testing, and developer handoff assets.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(uiUxSchema) }}
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

export default UxDesignerPage;

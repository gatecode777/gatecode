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
    FaLaptopCode,
    FaDatabase,
    FaTools,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaNodeJs,
    FaPhp,
    FaPython,
    FaWordpress,
    FaShopify,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaLink
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiPostgresql
} from 'react-icons/si';

// ==================== HeroSectionWD Component ====================
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
                        BUILD POWERFUL, SCALABLE
                        & HIGH-PERFORMING
                        WEBSITES
                    </h1>

                    <p>
                        We create modern, fast, and conversion-focused websites<br />
                        that help your business grow, attract customers, and stand out
                        online.
                    </p>

                    <Link href="/contact" className="wd-hero-btn">
                        Get Free Consultation
                    </Link>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Custom Website Development Services by Gatecode Technologies"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== IntroText Component ====================
const IntroText = () => {
    return (
        <section className="intro-container">
            <p className="intro-text">
                At Gatecode Technologies Pvt. Ltd., we develop high-quality websites tailored to your business goals. Our focus is not just design, but performance, user
                experience, and conversions. Whether you need a business website, e-commerce platform, or custom web application, we deliver secure, scalable, and <br />
                result-driven solutions that help you succeed in the digital world.
            </p>
        </section>
    );
};

// ==================== WhatWeOffer Component ====================
const services = [
    {
        icon: "/images/icon1.png",
        title: "Custom Website Development",
        description: "Fully customized websites designed according to your brand and business needs.",
    },
    {
        icon: "/images/icon2.png",
        title: "Responsive Web Design",
        description: "Mobile-friendly and device-optimized websites for better user experience.",
    },
    {
        icon: "/images/icon3.png",
        title: "E-Commerce Development",
        description: "Complete online store solutions with secure payments and smooth user journey.",
    },
    {
        icon: "/images/icon4.png",
        title: "CMS Development",
        description: "Easy-to-manage websites using platforms like WordPress.",
    },
    {
        icon: "/images/icon5.png",
        title: "Website Redesign",
        description: "Upgrade your existing website with a modern and professional look.",
    },
    {
        icon: "/images/icon6.png",
        title: "Web Application Development",
        description: "Custom web apps built for performance, scalability, and efficiency.",
    },
    {
        icon: "/images/icon7.png",
        title: "SEO Friendly Development",
        description: "Optimized website structure to rank better on search engines.",
    },
    {
        icon: "/images/icon8.png",
        title: "Speed Optimization",
        description: "Fast-loading websites to reduce bounce rate and improve user experience.",
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

// ==================== WhyChoose Component ====================
const chooseData = [
    {
        image: "/images/img1.jpg",
        title: "Technical Expertise & Innovation",
    },
    {
        image: "/images/img2.jpg",
        title: "Client-Centric Solutions",
    },
    {
        image: "/images/img3.jpg",
        title: "Agile Development Process",
    },
    {
        image: "/images/img4.jpg",
        title: "Quality Assurance & Testing",
    },
    {
        image: "/images/img5.jpg",
        title: "On-Time Delivery",
    },
    {
        image: "/images/img6.jpg",
        title: "Support & Maintenance",
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
                <p>Your business goals, our innovative web solutions.</p>
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

// ==================== DevelopmentProcess Component ====================
// const processSteps = [
//     "Requirement & Strategy",
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
                    {/* Desktop & tablet video (hidden on ≤425px) */}
                    <video
                        className="dev-video-desktop"
                        src="/videos/expertise_video.mp4"
                        poster="/images/2.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video shown only on ≤425px */}
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


// ==================== Technologies Component ====================
// const technologies = [
//     {
//         title: "Frontend",
//         items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
//     },
//     {
//         title: "Backend",
//         items: ["Node.js", "PHP", "Python"],
//     },
//     {
//         title: "CMS & Platforms",
//         items: ["WordPress", "Shopify"],
//     },
//     {
//         title: "Database",
//         items: ["MySQL", "MongoDB", "Postgresql"],
//     },
//     {
//         title: "Tools",
//         items: ["Git", "GitHub", "Figma", "APIs Integration"],
//     },
// ];

// const Technologies = () => {
//     return (
//         <section className="technologies-section">
//             <div className="technologies-heading">
//                 <h2>
//                     <span>TECHNOLOGIES</span> WE USE
//                 </h2>
//                 <div className="technologies-line"></div>
//             </div>

//             <div className="technologies-box">
//                 <div className="technologies-grid">
//                     {technologies.map((tech, index) => (
//                         <div className="technology-column" key={index}>
//                             <div className="column-header">
//                                 <h3>{tech.title}</h3>
//                             </div>
//                             <div className="column-content">
//                                 {tech.items.map((item, i) => (
//                                     <p key={i}>{item}</p>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

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
        title: "Frontend",
        icon: <FaCode />,
        items: [
            { name: "HTML5", icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
            { name: "CSS3", icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
            { name: "JavaScript", icon: <FaJs style={{ color: '#F7DF1E', backgroundColor: '#000', borderRadius: '2px' }} /> },
            { name: "Bootstrap", icon: <FaBootstrap style={{ color: '#7952B3' }} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
        ],
    },
    {
        title: "Backend",
        icon: <FaServer />,
        items: [
            { name: "Node.js", icon: <FaNodeJs style={{ color: '#339933' }} /> },
            { name: "PHP", icon: <FaPhp style={{ color: '#777BB4' }} /> },
            { name: "Python", icon: <FaPython style={{ color: '#3776AB' }} /> },
        ],
    },
    {
        title: "CMS & Platforms",
        icon: <FaLaptopCode />,
        items: [
            { name: "WordPress", icon: <FaWordpress style={{ color: '#21759B' }} /> },
            { name: "Shopify", icon: <FaShopify style={{ color: '#7AB55C' }} /> },
        ],
    },
    {
        title: "Database",
        icon: <FaDatabase />,
        items: [
            { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> },
            { name: "MongoDB", icon: <SiMongodb style={{ color: '#47A248' }} /> },
            { name: "Postgresql", icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
        ],
    },
    {
        title: "Tools",
        icon: <FaTools />,
        items: [
            { name: "Git", icon: <FaGitAlt style={{ color: '#F05032' }} /> },
            { name: "GitHub", icon: <FaGithub style={{ color: '#181717' }} /> },
            { name: "Figma", icon: <FaFigma style={{ color: '#F24E1E' }} /> },
            { name: "APIs Integration", icon: <FaLink style={{ color: '#0d9488' }} /> },
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
                        Hire Dedicated Web Developers in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong>, a premier <strong>web development company in india</strong> and trusted <strong>web development agency</strong>. When you need to <strong>hire web developer</strong> experts or <strong>hire dedicated web developers</strong>, our team provides senior <strong>full stack web developer</strong> engineers delivering high-performance <strong>web site development</strong>, robust <strong>web development services</strong>, and scalable web solutions for brands worldwide.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Full Stack, Front-End & Back-End Web Development Services Company
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Building modern web applications requires versatile technical mastery across client and server layers. Recognized as the <strong>best web development company</strong> and a top <strong>web design and development company</strong>, we make it effortless to <strong>hire full stack web developer</strong> specialists, <strong>hire front end web developer</strong> experts, <strong>hire back end web developers</strong>, or <strong>hire custom web app developers</strong> for your projects.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire Full Stack Web Developers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Build end-to-end web products when you <strong>hire full stack web developer</strong> talent. Our engineers master React, Next.js, Node.js, PHP, and database architectures.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Front-End & Back-End Specialists</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Scale your engineering team. Easily <strong>hire front end web developer</strong> experts for pixel-perfect UIs and <strong>hire back end web developers</strong> for robust microservices.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Custom Web App Developers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Accelerated product development with a specialized <strong>web development services company</strong>. <strong>Hire custom web app developers</strong> for SaaS platforms and enterprise portals.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Hire Web Developers from Gatecode Technologies?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Partnering with an accredited <strong>web development company</strong> guarantees clean code, agile sprint delivery, and zero technical debt. Choosing Gatecode Technologies gives you:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Flexible Engagement Models:</strong> Full-time, part-time, or milestone-based dedicated web developer hiring.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Direct Developer Communication:</strong> Transparent Slack/Jira workflows with daily code commits.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Strict NDA & IP Protection:</strong> 100% intellectual property ownership and enterprise security protocols.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

// ==================== Main Page Component ====================
const WebDevelopmentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Gatecode Technologies Web Development Process',
        description: 'Watch our 6-step agile web development process covering Research & Strategy, UI/UX Design, Development, Testing, Launch, and Support at Gatecode Technologies.',
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
            { '@type': 'ListItem', position: 2, name: 'Technical Expertise', item: 'https://gatecode.in/expertise/web-developers' },
            { '@type': 'ListItem', position: 3, name: 'Web Developers', item: 'https://gatecode.in/expertise/web-developers' },
        ],
    };

    const webDeveloperSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Hire Web Developers',
        name: 'Hire Dedicated Web Developers in India',
        provider: {
            '@type': 'Organization',
            name: 'Gatecode Technologies Pvt. Ltd.',
            url: 'https://gatecode.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        description: 'Top web development company in India allowing businesses to hire dedicated web developers, full stack web developers, front end, back end, and custom web app developers.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Why should I hire dedicated web developers from Gatecode Technologies?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gatecode Technologies is a premier web development company in India allowing you to hire dedicated web developers, full stack web developer leads, and custom web app developers with flexible hiring models.',
                },
            },
            {
                '@type': 'Question',
                name: 'What technologies do your full stack web developers specialize in?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our full stack web developers specialize in React, Next.js, Vue, Node.js, Python, PHP, Laravel, WordPress, Shopify, and modern cloud databases.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I hire front end and back end web developers individually?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! You can hire front end web developer UI specialists or hire back end web developers for microservices and API development based on your project requirements.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webDeveloperSchema) }}
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

export default WebDevelopmentPage;

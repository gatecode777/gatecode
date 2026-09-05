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
    FaShoppingCart,
    FaEdit,
    FaCode,
    FaCreditCard,
    FaShopify,
    FaWordpress,
    FaBriefcase,
    FaTools,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPhp,
    FaNodeJs,
    FaPaypal,
    FaLink,
    FaCogs
} from 'react-icons/fa';
import {
    SiWoocommerce,
    SiStripe
} from 'react-icons/si';

// ==================== HeroSectionWD Component (Updated for E-Commerce & CMS) ====================
const HeroSectionWD = () => {
    return (
        <section
            className="wd-hero-section"
            style={{ backgroundImage: 'url("/images/Rectangle 305.webp")' }}
        >
            <div className="wd-hero-overlay"></div>

            <div className="wd-hero-content">
                <div className="wd-hero-left">
                    <h1>
                        BUILD POWERFUL E-COMMERCE STORES<br />
                        & EASY-TO-MANAGE CMS<br />
                        WEBSITES
                    </h1>

                    <p>
                        We create scalable online stores and user-friendly CMS platforms that help you sell smarter,<br />
                        manage content easily, and grow your business faster.
                    </p>

                    <Link href="/contact" className="wd-hero-btn">
                        Get Free Consultation
                    </Link>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.webp"
                        alt="Custom E-Commerce and CMS Website Solutions by Gatecode Technologies"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== IntroText Component (Updated for E-Commerce & CMS) ====================
const IntroText = () => {
    return (
        <section className="intro-container">
            <p className="intro-text">
                At Gatecode Technologies Pvt. Ltd., we specialize in building high-performance e-commerce websites and flexible CMS solutions tailored to your business needs.
                Whether you want to launch an online store or manage your website content without technical knowledge, we provide secure, scalable, and easy-to-use solutions
                that help you stay ahead in the digital market.
            </p>
        </section>
    );
};

// ==================== WhatWeOffer Component (Updated for E-Commerce & CMS) ====================
const services = [
    {
        icon: "/images/icon1.webp",
        title: "E-Commerce Website Development",
        description: "Custom online stores designed for seamless shopping experiences and high conversions.",
    },
    {
        icon: "/images/icon2.webp",
        title: "CMS Website Development",
        description: "User-friendly websites that allow you to manage content easily without coding knowledge.",
    },
    {
        icon: "/images/icon3.webp",
        title: "Shopping Cart & Checkout Integration",
        description: "Smooth and secure checkout systems to improve user experience and reduce cart abandonment.",
    },
    {
        icon: "/images/icon4.webp",
        title: "Payment Gateway Integration",
        description: "Secure payment solutions including UPI, cards, wallets, and international payment options.",
    },
    {
        icon: "/images/icon5.webp",
        title: "Product & Inventory Management",
        description: "Efficient systems to manage products, stock, pricing, and categories.",
    },
    {
        icon: "/images/icon6.webp",
        title: "Website Migration & Upgrade",
        description: "Upgrade or migrate your existing website to modern platforms without data loss.",
    },
    {
        icon: "/images/icon7.webp",
        title: "Performance Optimization",
        description: "Fast-loading websites to improve user experience and increase sales.",
    },
    {
        icon: "/images/icon8.webp",
        title: "Security & Maintenance",
        description: "Regular updates, backups, and security measures to protect your website.",
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

// ==================== WhyChoose Component (Updated for E-Commerce & CMS) ====================
const chooseData = [
    {
        image: "/images/img1.webp",
        title: "Easy-To-Manage Content System",
    },
    {
        image: "/images/img2.webp",
        title: "Secure And Scalable Solutions",
    },
    {
        image: "/images/img3.webp",
        title: "Mobile-Friendly Design",
    },
    {
        image: "/images/img4.webp",
        title: "High Conversion-Focused Layouts",
    },
    {
        image: "/images/img5.webp",
        title: "Fast And Reliable Performance",
    },
    {
        image: "/images/img6.webp",
        title: "Ongoing Support & Maintenance",
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
                <p>We build platforms that are not only visually appealing but also optimized for performance, sales, and easy management.</p>
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

// ==================== DevelopmentProcess Component (Updated for E-Commerce & CMS) ====================
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
                        src="/videos/expertise_video.mp4"
                        poster="/images/2.webp"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video shown only on ≤426px */}
                    <video
                        className="dev-video-mobile"
                        src="/videos/1st.mp4"
                        poster="/images/2.webp"
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
        title: "E-Commerce Platforms",
        icon: <FaShoppingCart />,
        items: [
            { name: "Shopify", icon: <FaShopify style={{ color: '#7AB55C' }} /> },
            { name: "WooCommerce", icon: <SiWoocommerce style={{ color: '#96588A' }} /> },
            { name: "Custom E-Commerce Solutions", icon: <FaBriefcase style={{ color: '#0d9488' }} /> },
        ],
    },
    {
        title: "CMS Platforms",
        icon: <FaEdit />,
        items: [
            { name: "WordPress", icon: <FaWordpress style={{ color: '#21759B' }} /> },
            { name: "Custom CMS Development", icon: <FaTools style={{ color: '#5a8a8a' }} /> },
        ],
    },
    {
        title: "Technologies",
        icon: <FaCode />,
        items: [
            { name: "HTML5", icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
            { name: "CSS3", icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
            { name: "JavaScript", icon: <FaJs style={{ color: '#F7DF1E', backgroundColor: '#000', borderRadius: '2px' }} /> },
            { name: "React.js", icon: <FaReact style={{ color: '#61DAFB' }} /> },
            { name: "PHP", icon: <FaPhp style={{ color: '#777BB4' }} /> },
            { name: "Node.js", icon: <FaNodeJs style={{ color: '#339933' }} /> },
        ],
    },
    {
        title: "Payment & Integration Tools",
        icon: <FaCreditCard />,
        items: [
            { name: "Razorpay", icon: <FaCreditCard style={{ color: '#0d9488' }} /> },
            { name: "Stripe", icon: <SiStripe style={{ color: '#635BFF' }} /> },
            { name: "PayPal", icon: <FaPaypal style={{ color: '#003087' }} /> },
            { name: "REST APIs", icon: <FaLink style={{ color: '#0d9488' }} /> },
            { name: "API Integrations", icon: <FaCogs style={{ color: '#5a8a8a' }} /> },
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
                        E-Commerce & CMS Website Development Company in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong>, an accredited <strong>ecommerce website development company in india</strong> and trusted <strong>cms development company</strong>. When you are looking to <strong>hire ecommerce developer</strong> specialists, build custom online stores, or launch scalable CMS portals, our team delivers complete <strong>ecommerce web development</strong> and <strong>ecommerce development services</strong> designed to maximize conversions and simplify content management.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Custom E-Commerce Web Development & CMS Solutions
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Transform your digital store with an enterprise <strong>ecommerce development company india</strong> partner. As a top-rated <strong>ecommerce website designing company in india</strong>, we offer end-to-end <strong>ecommerce web development services</strong> that combine seamless shopping cart UX, secure payment gateway integrations, and responsive multi-platform storefronts.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire Shopify & Platform Developers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Scale your online business effortlessly. Easily <strong>hire shopify developer</strong> leads, <strong>hire shopify developer india</strong> experts, <strong>hire woocommerce developer</strong> specialists, or <strong>hire magento developer</strong> engineers tailored to your store architecture.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Full-Service E-Commerce Development</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Work with the <strong>best ecommerce website development company</strong>. We deliver high-speed <strong>ecommerce website development</strong>, custom checkout integrations, and automated catalog syncing.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>E-Commerce App & CMS Platforms</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Connect web and mobile. As a full-suite <strong>ecommerce app development company</strong> and <strong>ecommerce website development company</strong>, we engineer custom mobile apps and headless CMS platforms.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Partner with Gatecode Technologies for E-Commerce & CMS?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Choosing a dedicated <strong>ecommerce development</strong> team ensures fast loading speeds, zero checkout friction, and robust database security. Choosing Gatecode Technologies gives you:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Custom & Headless Architecture:</strong> Shopify, WooCommerce, WordPress, Magento, and Next.js headless storefronts.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Secure Payment Integrations:</strong> Stripe, PayPal, Razorpay, and multi-currency payment checkout setup.</li>
                        <li style={{ marginBottom: '10px' }}><strong>SEO & Speed Optimization:</strong> Core Web Vitals optimization for top Google rankings and high conversion rates.</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

// ==================== Main Page Component ====================
const ECommerceCmsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Gatecode Technologies E-Commerce & CMS Development Process',
        description: 'Watch our 6-step agile E-Commerce & CMS development process covering Research & Strategy, UI/UX Design, Development, Testing, Launch, and Support at Gatecode Technologies.',
        thumbnailUrl: [
            'https://gatecode.in/images/2.webp',
            'https://gatecode.in/images/digitalbg1.webp',
        ],
        uploadDate: '2026-01-15T08:00:00+05:30',
        contentUrl: 'https://gatecode.in/videos/expertise_video.mp4',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
            { '@type': 'ListItem', position: 2, name: 'Technical Expertise', item: 'https://gatecode.in/expertise/e-commerce-cms' },
            { '@type': 'ListItem', position: 3, name: 'E-Commerce & CMS', item: 'https://gatecode.in/expertise/e-commerce-cms' },
        ],
    };

    const ecommerceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'E-Commerce & CMS Development',
        name: 'E-Commerce & CMS Website Development Company in India',
        provider: {
            '@type': 'Organization',
            name: 'Gatecode Technologies Pvt. Ltd.',
            url: 'https://gatecode.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        description: 'Premier e-commerce website development company in India allowing businesses to hire Shopify developers, WooCommerce developers, Magento developers, and custom CMS developers.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Why should I choose Gatecode Technologies as my e-commerce website development company in India?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gatecode Technologies is a leading e-commerce website development company in India offering end-to-end e-commerce web development, CMS development, and dedicated developers for Shopify, WooCommerce, & Magento.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I hire Shopify and WooCommerce developers individually?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! You can hire dedicated Shopify developers, hire WooCommerce developers, or hire Magento developers for full-time, hourly, or project-based engagement models.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you offer mobile app development for e-commerce stores?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, as a specialized e-commerce app development company, we build native iOS/Android apps and cross-platform mobile shopping apps synced directly with your online store.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceSchema) }}
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

export default ECommerceCmsPage;

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
            style={{ backgroundImage: 'url("/images/Rectangle 305.jpg")' }}
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
                        src="/images/Rectangle 305.jpg"
                        alt="E-Commerce & CMS Development"
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
        icon: "/images/icon1.png",
        title: "E-Commerce Website Development",
        description: "Custom online stores designed for seamless shopping experiences and high conversions.",
    },
    {
        icon: "/images/icon2.png",
        title: "CMS Website Development",
        description: "User-friendly websites that allow you to manage content easily without coding knowledge.",
    },
    {
        icon: "/images/icon3.png",
        title: "Shopping Cart & Checkout Integration",
        description: "Smooth and secure checkout systems to improve user experience and reduce cart abandonment.",
    },
    {
        icon: "/images/icon4.png",
        title: "Payment Gateway Integration",
        description: "Secure payment solutions including UPI, cards, wallets, and international payment options.",
    },
    {
        icon: "/images/icon5.png",
        title: "Product & Inventory Management",
        description: "Efficient systems to manage products, stock, pricing, and categories.",
    },
    {
        icon: "/images/icon6.png",
        title: "Website Migration & Upgrade",
        description: "Upgrade or migrate your existing website to modern platforms without data loss.",
    },
    {
        icon: "/images/icon7.png",
        title: "Performance Optimization",
        description: "Fast-loading websites to improve user experience and increase sales.",
    },
    {
        icon: "/images/icon8.png",
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
                                <Image src={service.icon} alt={service.title} width={50} height={50} />
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
        image: "/images/img1.jpg",
        title: "Easy-To-Manage Content System",
    },
    {
        image: "/images/img2.jpg",
        title: "Secure And Scalable Solutions",
    },
    {
        image: "/images/img3.jpg",
        title: "Mobile-Friendly Design",
    },
    {
        image: "/images/img4.jpg",
        title: "High Conversion-Focused Layouts",
    },
    {
        image: "/images/img5.jpg",
        title: "Fast And Reliable Performance",
    },
    {
        image: "/images/img6.jpg",
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
                                <Image src={item.image} alt={item.title} width={300} height={200} />
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
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video shown only on ≤426px */}
                    <video
                        className="dev-video-mobile"
                        src="/videos/1st.mp4"
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

// ==================== Main Page Component ====================
const ECommerceCmsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="web-development-page">
            <HeroSectionWD />
            <IntroText />
            <WhatWeOffer />
            <WhyChoose />
            <DevelopmentProcess />
            <TechnologiesWeUse />
            <TSlider />
            <ContactSection />
        </div>
    );
};

export default ECommerceCmsPage;

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
import '@/components/frontend/WebDeveloper/Technologies.css';

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
const processSteps = [
    "Requirement Analysis",
    "UI/UX Design",
    "Development",
    "Testing",
    "Launch",
    "Support",
];

const DevelopmentProcess = () => {
    return (
        <section className="development-section">
            <div className="development-heading">
                <h2>
                    OUR <span>DEVELOPMENT PROCESS</span>
                </h2>
                <div className="development-line"></div>
            </div>

            <div className="process-wrapper">
                <div className="process-line-horizontal"></div>

                <div className="process-grid">
                    {processSteps.map((step, index) => (
                        <div className="process-card" key={index}>
                            <div className="vertical-drop-line"></div>
                            <h3>{step}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ==================== Technologies Component (Updated with content from image) ====================
const technologies = [
    {
        title: "E-Commerce Platforms",
        items: ["Shopify", "WooCommerce", "Custom E-Commerce Solutions"],
    },
    {
        title: "CMS Platforms",
        items: ["WordPress", "Custom CMS Development"],
    },
    {
        title: "Technologies",
        items: ["HTML5", "CSS3", "JavaScript", "React.js", "PHP", "Node.js"],
    },
    {
        title: "Payment & Integration Tools",
        items: ["Razorpay", "Stripe", "PayPal", "API Integrations"],
    },
];

const Technologies = () => {
    return (
        <section className="technologies-section">
            <div className="technologies-heading">
                <h2>
                    <span>TECHNOLOGIES</span> WE USE
                </h2>
                <div className="technologies-line"></div>
            </div>

            <div className="technologies-box">
                <div className="technologies-grid">
                    {technologies.map((tech, index) => (
                        <div className="technology-column" key={index}>
                            <div className="column-header">
                                <h3>{tech.title}</h3>
                            </div>
                            <div className="column-content">
                                {tech.items.map((item, i) => (
                                    <p key={i}>{item}</p>
                                ))}
                            </div>
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
            <Technologies />
            <TSlider />
            <ContactSection />
        </div>
    );
};

export default ECommerceCmsPage;

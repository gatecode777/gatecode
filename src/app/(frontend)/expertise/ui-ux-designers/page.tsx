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
                        alt="UI/UX Design"
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

// ==================== DevelopmentProcess Component (Updated for UI/UX Designer) ====================
const processSteps = [
    "Research & Discovery",
    "Wireframing",
    "UI Design",
    "Prototyping",
    "Testing",
    "Delivery",
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
        title: "Design Tools",
        items: ["Figma", "Adobe XD", "Sketch"],
    },
    {
        title: "Prototyping Tools",
        items: ["Figma Prototype", "InVision"],
    },
    {
        title: "Collaboration Tools",
        items: ["Zeplin", "Notion"],
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
const UxDesignerPage = () => {
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

export default UxDesignerPage;

"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import TSlider from '@/components/frontend/TSlider/TSlider';
import '@/components/frontend/WebDeveloper/HeroSectionWD.css';
import '@/components/frontend/WebDeveloper/IntroText.css';
import '@/components/frontend/WebDeveloper/WhatWeOffer.css';
import '@/components/frontend/WebDeveloper/WhyChoose.css';
import '@/components/frontend/WebDeveloper/DevelopmentProcess.css';
import '@/components/frontend/WebDeveloper/Technologies.css';

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

                    <button className="wd-hero-btn">
                        Get Free Consultation
                    </button>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Digital Marketing"
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

// ==================== DevelopmentProcess Component (Updated for Digital Marketing) ====================
const processSteps = [
    "Research & Strategy",
    "Campaign Planning",
    "Execution",
    "Monitoring",
    "Reporting",
    "Optimization",
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

// ==================== Technologies Component (Updated with Marketing Tools from image) ====================
const technologies = [
    {
        title: "Marketing Tools",
        items: ["Google Analytics", "Google Ads", "Meta Ads (Facebook & Instagram)", "SEMrush", "AdWords", "Mailchimp"],
    },
];

const Technologies = () => {
    return (
        <section className="technologies-section">
            <div className="technologies-heading">
                <h2>
                    <span>MARKETING TOOLS</span> WE USE
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
const DigitalMarketingServicesPage = () => {
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

export default DigitalMarketingServicesPage;
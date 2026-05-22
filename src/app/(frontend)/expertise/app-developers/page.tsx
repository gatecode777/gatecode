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

                    <button className="wd-hero-btn">
                        Get Free Consultation
                    </button>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="App Development"
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

// ==================== DevelopmentProcess Component (Updated for App Development) ====================
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
                    OUR <span>APP DEVELOPMENT PROCESS</span>
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
        title: "Mobile Development",
        items: ["Kotlin (Android)", "Swift (iOS)", "Flutter", "React Native"],
    },
    {
        title: "Backend Development",
        items: ["Node.js", "PHP", "Python"],
    },
    {
        title: "Database",
        items: ["MySQL", "MongoDB", "Firebase"],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "Payment Gateway Integration", "REST APIs", "Firebase Services"],
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
const AppDevelopmentPage = () => {
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

export default AppDevelopmentPage;
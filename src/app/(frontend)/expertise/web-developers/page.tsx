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

                    <button className="wd-hero-btn">
                        Get Free Consultation
                    </button>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Website Development"
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

// ==================== DevelopmentProcess Component ====================
const processSteps = [
    "Requirement & Strategy",
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

// ==================== Technologies Component ====================
const technologies = [
    {
        title: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
    },
    {
        title: "Backend",
        items: ["Node.js", "PHP", "Python"],
    },
    {
        title: "CMS & Platforms",
        items: ["WordPress", "Shopify"],
    },
    {
        title: "Database",
        items: ["MySQL", "MongoDB", "Postgresql"],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "Figma", "APIs Integration"],
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
const WebDevelopmentPage = () => {
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

export default WebDevelopmentPage;
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
  FaMagic, 
  FaFigma, 
  FaVectorSquare, 
  FaCamera 
} from 'react-icons/fa';
import { 
  SiCanva 
} from 'react-icons/si';

// ==================== HeroSectionWD Component (Updated for Graphic Designer) ====================
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
                        CREATIVE DESIGNS THAT<br />
                        CAPTURE ATTENTION &<br />
                        BUILD STRONG BRANDS
                    </h1>

                    <p>
                        Hire professional graphic designers to create visually stunning designs that<br />
                        communicate your brand message effectively.
                    </p>

                    <Link href="/contact" className="wd-hero-btn">
                        Get Free Consultation
                    </Link>
                </div>

                <div className="wd-hero-right">
                    <Image
                        src="/images/Rectangle 305.jpg"
                        alt="Graphic Design"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

// ==================== IntroText Component (Updated for Graphic Designer) ====================
const IntroText = () => {
    return (
        <section className="intro-container">
            <p className="intro-text">
                At Gatecode Technologies Pvt. Ltd., we bring your ideas to life with creative and impactful graphic design solutions.
                Our designers focus on creating visually appealing content that not only looks great but also communicates your brand message clearly.
                From branding to marketing materials, we design everything that helps your business stand out in a competitive market.
            </p>
        </section>
    );
};

// ==================== WhatWeOffer Component (Updated for Graphic Designer) ====================
const services = [
    {
        icon: "/images/icon1.png",
        title: "Logo Design & Branding",
        description: "Unique and memorable logos for various industries.",
    },
    {
        icon: "/images/icon2.png",
        title: "Social Media Design",
        description: "Engaging posts, banners, and creative designs to boost your online presence.",
    },
    {
        icon: "/images/icon3.png",
        title: "Banner & Poster Design",
        description: "Eye-catching banners and posters for marketing, promotions, and events.",
    },
    {
        icon: "/images/icon4.png",
        title: "Packaging Design",
        description: "Creative packaging designs that attract customers and enhance product appeal.",
    },
    {
        icon: "/images/icon5.png",
        title: "Brochure & Flyer Design",
        description: "Professional brochures and flyers for effective marketing communication.",
    },
    {
        icon: "/images/icon6.png",
        title: "Business Card Design",
        description: "Modern and professional business card designs that leave a lasting impression.",
    },
    {
        icon: "/images/icon7.png",
        title: "Motion Graphics",
        description: "Create animations and motion visuals for digital marketing and branding.",
    },
    {
        icon: "/images/icon8.png",
        title: "Ad Creatives",
        description: "High-converting advertisement designs for online and offline campaigns.",
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

// ==================== WhyChoose Component (Updated for Graphic Designer) ====================
const chooseData = [
    {
        image: "/images/img1.jpg",
        title: "Creative and Unique Design Concepts",
    },
    {
        image: "/images/img2.jpg",
        title: "Strong Branding Focus",
    },
    {
        image: "/images/img3.jpg",
        title: "High-Quality Visual Output",
    },
    {
        image: "/images/img4.jpg",
        title: "Fast Delivery And Revisions",
    },
    {
        image: "/images/img5.jpg",
        title: "Trend-Based Modern Designs",
    },
    {
        image: "/images/img6.jpg",
        title: "Client-Focused Approach",
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
                <p>We don't just design visuals—we create designs that communicate, engage, and convert.</p>
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

// ==================== DevelopmentProcess Component (Updated for Graphic Designer) ====================
// const processSteps = [
//     "Requirement & Idea Discussion",
//     "Concept Creation",
//     "Design Development",
//     "Review & Feedback",
//     "Revisions",
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
                        src="/videos/Graphic Designer_video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video shown only on ≤426px */}
                    <video
                        className="dev-video-mobile"
                        src="/videos/3rd.mp4"
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
            { name: "Adobe Photoshop", icon: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', backgroundColor: '#001E36', color: '#31A8FF', border: '1px solid #31A8FF', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>Ps</span> },
            { name: "Adobe Illustrator", icon: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', backgroundColor: '#261300', color: '#FF9A00', border: '1px solid #FF9A00', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>Ai</span> },
            { name: "Adobe After Effects", icon: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', backgroundColor: '#1D002B', color: '#D29BFF', border: '1px solid #D29BFF', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>Ae</span> },
            { name: "Canva", icon: <SiCanva style={{ color: '#00C4CC' }} /> },
            { name: "Adobe Premiere Pro", icon: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', backgroundColor: '#16002B', color: '#EA77FF', border: '1px solid #EA77FF', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>Pr</span> },
        ],
    },
    {
        title: "Creative Tools",
        icon: <FaMagic />,
        items: [
            { name: "Figma", icon: <FaFigma style={{ color: '#F24E1E' }} /> },
            { name: "CorelDraw", icon: <FaVectorSquare style={{ color: '#0d9488' }} /> },
            { name: "RAW", icon: <FaCamera style={{ color: '#5a8a8a' }} /> },
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
const GraphicDesignerPage = () => {
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

export default GraphicDesignerPage;

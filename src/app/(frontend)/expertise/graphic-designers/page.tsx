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
            style={{ backgroundImage: 'url("/images/Rectangle 305.webp")' }}
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
                        src="/images/Rectangle 305.webp"
                        alt="Creative Graphic Design and Branding Services by Gatecode Technologies"
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
        icon: "/images/icon1.webp",
        title: "Logo Design & Branding",
        description: "Unique and memorable logos for various industries.",
    },
    {
        icon: "/images/icon2.webp",
        title: "Social Media Design",
        description: "Engaging posts, banners, and creative designs to boost your online presence.",
    },
    {
        icon: "/images/icon3.webp",
        title: "Banner & Poster Design",
        description: "Eye-catching banners and posters for marketing, promotions, and events.",
    },
    {
        icon: "/images/icon4.webp",
        title: "Packaging Design",
        description: "Creative packaging designs that attract customers and enhance product appeal.",
    },
    {
        icon: "/images/icon5.webp",
        title: "Brochure & Flyer Design",
        description: "Professional brochures and flyers for effective marketing communication.",
    },
    {
        icon: "/images/icon6.webp",
        title: "Business Card Design",
        description: "Modern and professional business card designs that leave a lasting impression.",
    },
    {
        icon: "/images/icon7.webp",
        title: "Motion Graphics",
        description: "Create animations and motion visuals for digital marketing and branding.",
    },
    {
        icon: "/images/icon8.webp",
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

// ==================== WhyChoose Component (Updated for Graphic Designer) ====================
const chooseData = [
    {
        image: "/images/img1.webp",
        title: "Creative and Unique Design Concepts",
    },
    {
        image: "/images/img2.webp",
        title: "Strong Branding Focus",
    },
    {
        image: "/images/img3.webp",
        title: "High-Quality Visual Output",
    },
    {
        image: "/images/img4.webp",
        title: "Fast Delivery And Revisions",
    },
    {
        image: "/images/img5.webp",
        title: "Trend-Based Modern Designs",
    },
    {
        image: "/images/img6.webp",
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
                        poster="/images/2.webp"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Mobile video shown only on ≤426px */}
                    <video
                        className="dev-video-mobile"
                        src="/videos/3rd.mp4"
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

// ==================== SeoContentSection Component (SEO Optimized Content) ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        Hire Dedicated Graphic Designers in India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Welcome to <strong>Gatecode Technologies</strong>, an accredited <strong>graphic design company in india</strong> recognized among the <strong>top graphic design companies</strong> and <strong>best graphic design company in india</strong> rankings. When you want to <strong>hire graphic designer</strong> talent, <strong>hire a graphic designer in india</strong>, or search for top <strong>graphic designers near me</strong>, our team delivers high-impact brand identities, marketing collateral, social media creatives, and UI assets for global brands.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Top-Rated Graphic Design Company & Creative Design Agency
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Standing out in today's visual market requires innovative design expertise. As a full-service <strong>graphic design agency</strong> and specialized <strong>graphic design services company</strong>, we offer custom visual branding solutions. If you are comparing <strong>graphic design company names</strong> or searching for local <strong>graphic design companies near me</strong> and <strong>design agencies near me</strong>, our studio provides creative excellence at competitive rates.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Hire Dedicated Graphic Designers</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Scale your marketing team. Easily <strong>hire dedicated graphics designer</strong> talent or complete your search for <strong>hiring creative graphic designer</strong> professionals dedicated exclusively to your brand requirements.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Branding & Marketing Design</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Partner with an established <strong>design company</strong> and <strong>graphic design agency near me</strong>. We design custom logos, brochures, social media post templates, ad banners, and corporate stationery.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Top Design Agency Standards</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Work with a leader among <strong>top companies hiring graphic designers in india</strong>. As an elite <strong>graphic design companies</strong> partner, we deliver print-ready and web-optimized visual assets.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Why Partner with Gatecode Technologies for Graphic Design?
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Partnering with an experienced <strong>graphic designer</strong> team guarantees consistent brand messaging, high conversion rates, and professional aesthetics. Gatecode Technologies offers:
                    </p>

                    <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Complete Visual Identity Solutions:</strong> Logo design, brand style guides, marketing collateral, and digital ad graphics.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Multi-Tool Expertise:</strong> Photoshop, Illustrator, InDesign, CorelDraw, Figma, and Canva.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Flexible Engagement Models:</strong> Dedicated full-time, part-time, or project-based graphic designer hiring.</li>
                    </ul>

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

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Gatecode Technologies Graphic Design Process',
        description: 'Watch our 6-step creative graphic design process covering Brand Research, Visual Concepts, Logo & Asset Creation, Revisions, Final Export, and Brand Delivery at Gatecode Technologies.',
        thumbnailUrl: [
            'https://gatecode.in/images/2.webp',
            'https://gatecode.in/images/digitalbg1.webp',
        ],
        uploadDate: '2026-01-15T08:00:00+05:30',
        contentUrl: 'https://gatecode.in/videos/Graphic%20Designer_video.mp4',
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
            { '@type': 'ListItem', position: 2, name: 'Technical Expertise', item: 'https://gatecode.in/expertise/graphic-designers' },
            { '@type': 'ListItem', position: 3, name: 'Graphic Designers', item: 'https://gatecode.in/expertise/graphic-designers' },
        ],
    };

    const graphicDesignSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Graphic Design Services',
        name: 'Hire Dedicated Graphic Designers in India',
        provider: {
            '@type': 'Organization',
            name: 'Gatecode Technologies Pvt. Ltd.',
            url: 'https://gatecode.in',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        description: 'Top graphic design company in India allowing businesses to hire dedicated graphic designers, logo designers, brand identity specialists, and digital marketing graphic designers.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Why should I hire graphic designers from Gatecode Technologies?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gatecode Technologies is a top graphic design company in India allowing you to hire dedicated graphic designers, creative branding specialists, and visual graphic designers with flexible hiring options.',
                },
            },
            {
                '@type': 'Question',
                name: 'What graphic design services do your designers offer?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our graphic designers specialize in custom logo design, brand style guides, marketing brochures, social media post creatives, UI assets, packaging design, and ad graphics.',
                },
            },
            {
                '@type': 'Question',
                name: 'Which software tools do your graphic designers use?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our team uses industry-leading design tools including Adobe Photoshop, Illustrator, InDesign, Figma, and Canva.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(graphicDesignSchema) }}
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

export default GraphicDesignerPage;

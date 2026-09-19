"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/frontend/ContactSection/ContactSection';
import '@/components/frontend/DigitalMarketing/DigitalMarketing.css';

// ==================== Section 1: Hero Section ====================
const DigitalHero = () => {
  return (
    <section className="dm-hero">
      <div
        className="dm-hero-bg"
        style={{ backgroundImage: `url('/images/graphic.webp')` }}
      />
      <div className="dm-container dm-hero-content">
        <div className="dm-hero-text-wrapper" style={{ maxWidth: '900px' }}>
          <h1 className="dm-hero-title" style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: '1.2', textTransform: 'none' }}>
            Dynamic Motion Graphics &amp; Creative Visuals That Bring Ideas to Life
          </h1>
          <p className="dm-hero-subtitle" style={{ maxWidth: '750px', marginTop: '20px' }}>
            At Gatecode Technologies Pvt. Ltd., we create captivating motion graphics, 2D explainer animations, animated social assets, and promotional video visuals. Our motion design services combine narrative pacing, kinetic typography, and fluid visual effects to elevate viewer retention and brand recognition.
          </p>
          <Link href="/contact" className="dm-cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 2: Introduction Section ====================
const DigitalAbout = () => {
  return (
    <section className="dm-about-section">
      <div className="dm-container">
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          Motion is one of the most powerful tools in digital visual communication. In fast-scrolling environments where static images are easily overlooked, purposeful animation catches the eye, clarifies complex technical workflows, and conveys brand personality within seconds.
        </p>
        <p className="dm-about-text" style={{ marginBottom: '18px' }}>
          At Gatecode Technologies Pvt. Ltd., our motion graphic artists focus on clarity, pacing, and visual storytelling. Rather than creating movement for its own sake, we design motion graphics that support your commercial message — guiding viewer focus toward key product benefits, explainer points, or calls to action.
        </p>
        <p className="dm-about-text">
          From short-form animated social reels and logo stings to comprehensive product walkthroughs and corporate presentation motion design, we produce video assets optimized for all digital channels. We ensure seamless rendering across resolutions, delivering compelling visuals that keep your audience engaged.
        </p>
      </div>
    </section>
  );
};

// ==================== Section 3: Our Motion Graphics Services ====================
const services = [
  {
    title: '2D Explainer & Product Animations',
    desc: 'We transform complex services and software workflows into clear, engaging animated video explainers that drive conversions.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Animated Social Media & Reel Assets',
    desc: 'We produce short-form kinetic animations and vertical motion templates tailored to stop scrolling on Instagram and TikTok.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Logo Animation & Brand Stings',
    desc: 'We design fluid, memorable animated logo stings and signature brand intros for corporate videos, webinars, and presentations.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Kinetic Typography & Title Sequences',
    desc: 'We craft rhythmic, expressive text animations that deliver core messaging clearly even when viewers watch with audio muted.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'UI/UX Micro-Interactions & App Demos',
    desc: 'We showcase digital interfaces, mobile app features, and SaaS dashboards with smooth animated product walkthroughs.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Promotional Video Ads & Banners',
    desc: 'We build high-converting animated advertising creatives formatted for Meta Ads, YouTube bumper ads, and digital billboards.',
    color: '#fbff06',
    text: '#000000',
  },
  {
    title: 'Presentation & Pitch Deck Graphics',
    desc: 'We integrate subtle, professional motion elements into investor pitch decks and conference keynotes for enhanced engagement.',
    color: '#4e7c7e',
    text: '#ffffff',
  },
  {
    title: 'Visual Effects & Media Compositing',
    desc: 'We combine vector graphics, sound effects, typography, and live-action video footage into polished, cohesive visual stories.',
    color: '#fbff06',
    text: '#000000',
  },
];

const DigitalServices = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.dm-service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dm-services-section" ref={sectionRef}>
      <div className="dm-container">
        <h2 className="dm-section-title">Our Motion Graphics Services</h2>
        <div className="dm-services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="dm-service-card"
              style={{ 
                backgroundColor: service.color, 
                color: service.text,
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              <h3>{service.title}</h3>
              <div
                className="dm-service-divider"
                style={{ backgroundColor: service.color === '#fbff06' ? '#4e7c7e' : '#fbff06' }}
              />
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== Section 4: Why Choose Us / Key Benefits ====================
const benefits = [
  'Custom narrative storyboards crafted to communicate your core message effectively',
  'Fluid, broadcast-grade animation using industry-standard motion design tools',
  'Multi-platform aspect ratios optimized for vertical reels, widescreen, and square feeds',
  'Clear sound design integration and audio-independent visual storytelling',
  'Seamless brand alignment incorporating your typography, colors, and design guidelines',
  'Reliable milestone-based delivery with structured feedback and revision checkpoints',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Gatecode Technologies for Motion Graphics?
        </h2>
        <p className="dm-about-text dm-about-text-left" style={{ marginBottom: '16px' }}>
          Producing effective motion design requires a fine balance of creative storytelling, animation timing, and message clarity. We don’t just create flashy animations — we craft focused visual narratives that help viewers quickly understand your value proposition.
        </p>
        <p className="dm-about-text dm-about-text-left">
          At Gatecode Technologies, our motion artists manage every step of production, from initial scriptwriting and storyboards to final sound mixing and rendering, ensuring a cohesive and polished result.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits:
            </h3>
            <ul className="dm-benefits-list">
              {benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dm-why-choose-image">
            <Image
              src="/images/path.webp"
              alt="Motion Graphics and Creative Visuals Production Workflow - Gatecode Technologies"
              className="dm-path-illustration"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 5: Marketing Process ====================
const processSteps = [
  {
    title: '1. Script & Narrative Conception',
    desc: 'We define the core objective, message points, timing parameters, and voiceover script for your animation.',
  },
  {
    title: '2. Storyboarding & Styleframes',
    desc: 'We develop frame-by-frame visual sketches and high-fidelity styleframes to lock in the visual direction upfront.',
  },
  {
    title: '3. Asset Illustration & Prep',
    desc: 'Our illustrators build custom vector characters, icons, and interface layouts prepped for animation rigging.',
  },
  {
    title: '4. Motion Animation & Keyframing',
    desc: 'We bring the visual assets to life with natural physics, kinetic typography, and fluid visual transitions.',
  },
  {
    title: '5. Sound Design & Audio Mixing',
    desc: 'We incorporate professional voiceovers, licensed background tracks, and custom sound effects for impact.',
  },
  {
    title: '6. Multi-Format Final Rendering',
    desc: 'We render the final animation in optimal formats (MP4, WebM, Lottie/JSON, GIF) suited for web and social feeds.',
  },
];

const DigitalProcess = () => {
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

    const items = sectionRef.current?.querySelectorAll('.dm-process-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dm-process-section" ref={sectionRef}>
      <div className="dm-container">
        <h2 className="dm-section-title">Our Motion Graphics Process</h2>
        <div className="dm-process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="dm-process-item">
              <div className="dm-process-label">{item.title}</div>
              <div className="dm-process-content">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== Industries Section ====================
const industries = [
  'E-Commerce & Retail',
  'Real Estate',
  'Healthcare & Wellness',
  'Education & Training',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Startups & Enterprises',
];

const DigitalIndustries = () => {
  return (
    <section className="dm-industries-section">
      <div className="dm-container">
        <div className="dm-industries-layout">
          <div className="dm-industries-info">
            <h2 className="dm-section-title dm-section-header-left">
              Industries We Serve
            </h2>
            <ul className="dm-industries-list">
              {industries.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dm-image-grid">
            <Image src="/images/1.webp" alt="E-Commerce Product Motion Ads - Gatecode Technologies" className="dm-industry-img-1" width={200} height={150} />
            <Image src="/images/2.webp" alt="Real Estate Property Video Walkthroughs - Gatecode Technologies" className="dm-industry-img-2" width={200} height={150} />
            <Image src="/images/3.webp" alt="Healthcare Explainer Animations - Gatecode Technologies" className="dm-industry-img-3" width={200} height={150} />
            <Image src="/images/4.webp" alt="Educational Course Animation Graphics - Gatecode Technologies" className="dm-industry-img-4" width={200} height={150} />
            <Image src="/images/5.webp" alt="Corporate Business Presentation Motion - Gatecode Technologies" className="dm-industry-img-5" width={200} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== Section 6: Image Reference Section (SEO & Conversion Highlight) ====================
const SeoContentSection = () => {
  return (
    <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="dm-container">
        <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
            Professional Motion Graphics Agency for Engaging Visual Storytelling
          </h2>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
            Welcome to Gatecode Technologies Pvt. Ltd., your creative studio for high-impact motion graphics and dynamic visual content. We help forward-thinking companies clarify complex messages, captivate digital viewers, and boost engagement across marketing channels through purposeful animation.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Engaging Audiences with Fluid Animation &amp; Clear Communication
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Animation combines visual art, sound, and timing into a single cohesive medium. Our motion design team focuses on practical business communication — whether showcasing how your mobile app functions, highlighting key product specifications, or driving paid ad conversions.
          </p>

          {/* Key Feature Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>2D Explainer Animations</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Simplify complex software workflows and corporate services into engaging, easily understood animated video narratives.
              </p>
            </div>
            
            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Logo Stings &amp; Intros</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Reinforce brand identity across webinars, YouTube channels, and sales videos with fluid, polished logo reveal animations.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Social Media Motion Ads</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Drive higher click-through rates across Instagram, TikTok, and Meta Ads with short, high-energy animated video creatives.
              </p>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>UI Demos &amp; Micro-Animations</h4>
              <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                Bring software user experiences to life with smooth interface mockups and lightweight Lottie animations for websites.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
            Why Partner with Gatecode Technologies for Motion Graphics?
          </h3>
          
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
            Quality animation delivers measurable viewer retention. Partnering with our motion studio gives your business:
          </p>

          <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '16px', color: '#555555' }}>
            <li style={{ marginBottom: '10px' }}><strong>Complete Production Pipeline:</strong> In-house scriptwriting, custom illustration, animation keyframing, and sound design.</li>
            <li style={{ marginBottom: '10px' }}><strong>Platform-Optimized Deliverables:</strong> Formats tailored for web performance, video feeds, presentation decks, and advertising networks.</li>
            <li style={{ marginBottom: '10px' }}><strong>Transparent Collaboration:</strong> Structured storyboard reviews and milestone approvals to ensure seamless execution.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// ==================== Main Page Component ====================
const MotionGraphicsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gatecode.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gatecode.in/services/graphic-design' },
      { '@type': 'ListItem', position: 3, name: 'Motion Graphics', item: 'https://gatecode.in/services/graphic-design/motion-graphics' },
    ],
  };

  const motionServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Motion Graphics & Creative Visuals',
    name: 'Motion Graphics Agency',
    provider: {
      '@type': 'Organization',
      name: 'Gatecode Technologies Pvt. Ltd.',
      url: 'https://gatecode.in',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: 'Professional motion graphics agency offering 2D explainer video animations, logo stings, kinetic typography, animated social media ads, and product video demos.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of motion graphics do you produce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We create 2D explainer animations, animated social media ads, logo reveals, kinetic typography, UI/UX software demos, and corporate video graphics.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide voiceovers and sound design for animations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide full audio mixing including licensed background music, sound effects, and professional voiceover coordination.',
        },
      },
    ],
  };

  return (
    <div className="digital-marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(motionServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitalHero />
      <DigitalAbout />
      <DigitalServices />
      <DigitalWhyChoose />
      <DigitalProcess />
      <DigitalIndustries />
      <SeoContentSection />
      <ContactSection />
    </div>
  );
};

export default MotionGraphicsPage;

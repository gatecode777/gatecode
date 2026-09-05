'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './ServicesSlider.css';

interface ServiceStep {
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hiddenSet, setHiddenSet] = useState<Set<number>>(new Set());
  const [isInView, setIsInView] = useState(false);

  const isAnimating = useRef(false);
  const stackRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const touchStartX = useRef<number | null>(null);

  const services: ServiceStep[] = [
    {
      title: "IT SERVICES & SOFTWARE DEVELOPMENT",
      description: "We offer professional website development and custom software development services tailored to your business needs.",
      bullets: [
        "Website Design & Development (Responsive & SEO-Friendly)",
        "Custom Software Development Solutions",
        "Web Application Development",
        "Business Process Automation Systems",
        "CRM & ERP Development"
      ],
      image: "/images/rectangle-135.webp"
    },
    {
      title: "BPO SERVICES & BACKEND OPERATIONS SUPPORT",
      description: "Our BPO and back-office support services help businesses streamline operations and reduce manual workload.",
      bullets: [
        "Data Entry & Data Management Services",
        "Back-office Process Support",
        "Business Process Outsourcing (BPO)",
        "Workflow Automation & Optimization",
        "Virtual Assistance Services"
      ],
      image: "/images/rectangle-136.webp"
    },
    {
      title: "DIGITAL MARKETING SERVICES",
      description: "We deliver performance-driven digital marketing solutions to help businesses generate leads and grow online visibility.",
      bullets: [
        "Search Engine Optimization (SEO Services)",
        "Social Media Marketing (SMM)",
        "Lead Generation & Performance Marketing",
        "Online Brand Management",
        "Conversion Optimization"
      ],
      image: "/images/rectangle-136-1.webp"
    },
    {
      title: "ACCOUNTING & BUSINESS CONSULTANCY SERVICES",
      description: "We provide reliable accounting and business consulting services to improve financial management and operational efficiency.",
      bullets: [
        "Bookkeeping & Accounting Services",
        "Financial Reporting & Management",
        "Business Consulting & Strategy",
        "Process Optimization & Cost Reduction"
      ],
      image: "/images/rectangle-136-2.webp"
    }
  ];

  const goNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    if (activeIndex >= services.length - 1) {
      setHiddenSet(new Set());
      setActiveIndex(0);
    } else {
      setHiddenSet((prev) => new Set([...prev, activeIndex]));
      setActiveIndex((prev) => prev + 1);
    }

    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  };

  const goPrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    if (activeIndex <= 0) {
      const allPrev = new Set<number>();
      for (let i = 0; i < services.length - 1; i++) {
        allPrev.add(i);
      }
      setHiddenSet(allPrev);
      setActiveIndex(services.length - 1);
    } else {
      const prevIndex = activeIndex - 1;
      setHiddenSet((prev) => {
        const next = new Set(prev);
        next.delete(prevIndex);
        return next;
      });
      setActiveIndex(prevIndex);
    }

    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      { threshold: [0, 0.5, 1.0] }
    );

    if (stackRef.current) {
      observer.observe(stackRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    const cooldown = 700;

    const handleWheel = (e: WheelEvent) => {
      if (!isInView) return;
      const now = Date.now();
      const isScrollingRight = e.deltaX > 0;
      const isScrollingLeft = e.deltaX < 0;

      if (isScrollingRight || isScrollingLeft) {
        e.preventDefault();
        if (now - lastScrollTime.current > cooldown) {
          if (isScrollingRight) {
            goNext();
          } else {
            goPrev();
          }
          lastScrollTime.current = now;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isInView || touchStartX.current === null) return;

      const touchEndX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;
      const isScrollingRight = deltaX > 30;
      const isScrollingLeft = deltaX < -30;

      if (isScrollingRight || isScrollingLeft) {
        if (Math.abs(deltaX) > 50) {
          e.preventDefault();
          const now = Date.now();
          if (now - lastScrollTime.current > cooldown) {
            if (isScrollingRight) {
              goNext();
            } else {
              goPrev();
            }
            lastScrollTime.current = now;
            touchStartX.current = null;
          }
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartX.current = null;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeIndex, services.length, isInView]);

  // Autoplay functionality with flicker-free hover-pause using matches(':hover')
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      const isHoveredCurrently = stackRef.current?.closest('.services-slider-section')?.matches(':hover');
      if (isHoveredCurrently || isAnimating.current) return;

      goNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, activeIndex, services.length]);

  const getCardClass = (index: number) => {
    if (hiddenSet.has(index)) return 'services-slider-card hide';
    if (index === activeIndex) return 'services-slider-card active';
    return 'services-slider-card';
  };

  const getZIndex = (index: number) => {
    if (hiddenSet.has(index)) return 0;
    if (index === activeIndex) return 10;
    return Math.max(1, 9 - (index - activeIndex));
  };

  return (
    <section className="services-slider-section fe-root">
      <div className="services-slider-header">
        <h2 className="services-slider-title">
          OUR <span className="services-slider-title--highlight">SERVICES</span>
        </h2>
        <p className="services-slider-subtitle">
          We provide end-to-end business solutions in India and globally, helping companies improve efficiency, reduce operational costs, and scale with technology-driven systems.
        </p>
      </div>

      <div className="services-slider-container" ref={stackRef}>
        <div className="services-slider-card-stack">
          {services.map((service, index) => (
            <div
              key={index}
              className={getCardClass(index)}
              style={{ zIndex: getZIndex(index) }}
            >
              <div className="services-slider-card-content">
                <h3 className="services-slider-card-title">
                  {service.title}
                </h3>
                <p className="services-slider-card-description">
                  {service.description}
                </p>
                <ul className="services-slider-card-bullets">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="services-slider-bullet-item">
                      <span className="bullet-dot"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services-slider-card-image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="services-slider-card-image"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}

          <button
            className="services-slider-arrow services-slider-arrow-left"
            onClick={goPrev}
            aria-label="Previous service"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="services-slider-arrow services-slider-arrow-right"
            onClick={goNext}
            aria-label="Next service"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="services-slider-nav">
          {services.map((_, index) => (
            <button
              key={index}
              className={`services-slider-nav-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                const newHidden = new Set<number>();
                for (let i = 0; i < index; i++) {
                  newHidden.add(i);
                }
                setHiddenSet(newHidden);
                setActiveIndex(index);
              }}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;

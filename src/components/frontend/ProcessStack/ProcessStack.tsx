// @ts-nocheck
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ProcessStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hiddenSet, setHiddenSet] = useState(new Set());
  const [isInView, setIsInView] = useState(false);

  const isAnimating = useRef(false);
  const stackRef = useRef(null);
  const lastScrollTime = useRef(0);
  const touchStartX = useRef(null);

  const processSteps = [
    {
      title: "Consultation",
      description:
        "We begin by understanding your business goals, challenges, and requirements to create a clear and effective strategy.",
      image: "/images/Consultation.webp",
      alt: "Business consultation services for strategic growth",
    },

    {
      title: "Analysis",
      description:
        "Our team conducts in-depth analysis to identify opportunities, optimize processes, and design the best possible solution.",
      image: "/images/Analysis.webp",
      alt: "Business analysis services and data insights",
    },

    {
      title: "Execution",
      description:
        "We implement the planned strategy using proven methods and technologies to deliver efficient and measurable results.",
      image: "/images/Execution.webp",
      alt: "Business strategy execution and project management team",
    },

    {
      title: "Support",
      description:
        "We provide continuous support and maintenance to ensure smooth operations and long-term success.",
      image: "/images/Support.webp",
      alt: "IT support services and customer assistance team",
    },
  ];

  const goNext = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    if (activeIndex >= processSteps.length - 1) {
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
      const allPrev = new Set();
      for (let i = 0; i < processSteps.length - 1; i++) {
        allPrev.add(i);
      }
      setHiddenSet(allPrev);
      setActiveIndex(processSteps.length - 1);
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
        setIsInView(
          entry.isIntersecting && entry.intersectionRatio > 0.5
        );
      },
      {
        threshold: [0, 0.5, 1.0],
      }
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

    const handleWheel = (e) => {
      if (!isInView) return;

      const now = Date.now();

      const isScrollingRight = e.deltaX > 0;
      const isScrollingLeft = e.deltaX < 0;

      const canGoNext = true;

      const canGoPrev = true;

      if (
        (isScrollingRight && canGoNext) ||
        (isScrollingLeft && canGoPrev)
      ) {
        e.preventDefault();

        if (
          now - lastScrollTime.current >
          cooldown
        ) {
          if (isScrollingRight) {
            goNext();
          } else {
            goPrev();
          }

          lastScrollTime.current = now;
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.current =
        e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (
        !isInView ||
        touchStartX.current === null
      )
        return;

      const touchEndX =
        e.touches[0].clientX;

      const deltaX =
        touchStartX.current - touchEndX;

      const isScrollingRight = deltaX > 30;
      const isScrollingLeft = deltaX < -30;

      const canGoNext = true;

      const canGoPrev = true;

      if (
        (isScrollingRight && canGoNext) ||
        (isScrollingLeft && canGoPrev)
      ) {
        if (Math.abs(deltaX) > 50) {
          e.preventDefault();

          const now = Date.now();

          if (
            now - lastScrollTime.current >
            cooldown
          ) {
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

    el.addEventListener(
      'wheel',
      handleWheel,
      { passive: false }
    );

    el.addEventListener(
      'touchstart',
      handleTouchStart,
      { passive: true }
    );

    el.addEventListener(
      'touchmove',
      handleTouchMove,
      { passive: false }
    );

    el.addEventListener(
      'touchend',
      handleTouchEnd,
      { passive: true }
    );

    return () => {
      el.removeEventListener(
        'wheel',
        handleWheel
      );

      el.removeEventListener(
        'touchstart',
        handleTouchStart
      );

      el.removeEventListener(
        'touchmove',
        handleTouchMove
      );

      el.removeEventListener(
        'touchend',
        handleTouchEnd
      );
    };
  }, [
    activeIndex,
    processSteps.length,
    isInView,
  ]);

  // Autoplay functionality with flicker-free hover-pause using matches(':hover')
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      // Check if mouse is hovering over the slider container to pause autoplay
      const isHoveredCurrently = stackRef.current?.closest('.process-flow-section')?.matches(':hover');
      if (isHoveredCurrently || isAnimating.current) return;

      goNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, activeIndex, processSteps.length]);

  const getCardClass = (index) => {
    if (hiddenSet.has(index))
      return 'process-flow-card hide';

    if (index === activeIndex)
      return 'process-flow-card active';

    return 'process-flow-card';
  };

  const getZIndex = (index) => {
    if (hiddenSet.has(index)) return 0;

    if (index === activeIndex) return 10;

    return Math.max(
      1,
      9 - (index - activeIndex)
    );
  };

  return (
    <div className="process-flow-section fe-root">
      <div className="process-flow-header">
        <h2 className="process-flow-title">
          HOW WE WORK
        </h2>

        <h3 className="process-flow-subtitle">
          A simple, proven 4-step process
        </h3>
      </div>

      <div
        className="process-flow-container"
        ref={stackRef}
      >
        <div className="process-flow-card-stack">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={getCardClass(index)}
              style={{
                zIndex: getZIndex(index),
              }}
            >
              <div className="process-flow-card-content">
                <h4 className="process-flow-card-title">
                  {step.title}
                </h4>

                <p className="process-flow-card-description">
                  {step.description}
                </p>
              </div>

              <div className="process-flow-card-image-wrapper">
                <Image
                  src={step.image}
                  alt={step.alt}
                  className="process-flow-card-image"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}

          <button
            className="process-flow-arrow process-flow-arrow-left"
            onClick={goPrev}
            aria-label="Previous step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="process-flow-arrow process-flow-arrow-right"
            onClick={goNext}
            aria-label="Next step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="process-flow-nav">
          {processSteps.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to step ${index + 1}`}
              className={`process-flow-nav-dot ${
                index === activeIndex
                  ? 'active'
                  : ''
              }`}
              onClick={() => {
                const newHidden = new Set();

                for (
                  let i = 0;
                  i < index;
                  i++
                ) {
                  newHidden.add(i);
                }

                setHiddenSet(newHidden);

                setActiveIndex(index);
              }}
              aria-label={`Go to step ${
                index + 1
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessStack;
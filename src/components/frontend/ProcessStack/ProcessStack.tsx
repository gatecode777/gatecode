// @ts-nocheck
'use client';

import {  useState, useEffect, useRef  } from 'react';
import './ProcessStack.css';

const ProcessStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hiddenSet, setHiddenSet] = useState(new Set());
  const [isInView, setIsInView] = useState(false);

  const isAnimating = useRef(false);
  const stackRef = useRef(null);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(null);

  const processSteps = [
    {
      title: "Consultation",
      description:
        "We begin by understanding your business goals, challenges, and requirements to create a clear and effective strategy.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    },

    {
      title: "Analysis",
      description:
        "Our team conducts in-depth analysis to identify opportunities, optimize processes, and design the best possible solution.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },

    {
      title: "Execution",
      description:
        "We implement the planned strategy using proven methods and technologies to deliver efficient and measurable results.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },

    {
      title: "Support",
      description:
        "We provide continuous support and maintenance to ensure smooth operations and long-term success.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const goNext = () => {
    if (
      isAnimating.current ||
      activeIndex >= processSteps.length - 1
    )
      return;

    isAnimating.current = true;

    setHiddenSet((prev) => new Set([...prev, activeIndex]));

    setActiveIndex((prev) => prev + 1);

    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  };

  const goPrev = () => {
    if (isAnimating.current || activeIndex <= 0) return;

    isAnimating.current = true;

    const prevIndex = activeIndex - 1;

    setHiddenSet((prev) => {
      const next = new Set(prev);
      next.delete(prevIndex);
      return next;
    });

    setActiveIndex(prevIndex);

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

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      const canGoNext =
        activeIndex < processSteps.length - 1;

      const canGoPrev = activeIndex > 0;

      if (
        (isScrollingDown && canGoNext) ||
        (isScrollingUp && canGoPrev)
      ) {
        e.preventDefault();

        if (
          now - lastScrollTime.current >
          cooldown
        ) {
          if (isScrollingDown) {
            goNext();
          } else {
            goPrev();
          }

          lastScrollTime.current = now;
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current =
        e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (
        !isInView ||
        touchStartY.current === null
      )
        return;

      const touchEndY =
        e.touches[0].clientY;

      const deltaY =
        touchStartY.current - touchEndY;

      const isScrollingDown = deltaY > 30;
      const isScrollingUp = deltaY < -30;

      const canGoNext =
        activeIndex < processSteps.length - 1;

      const canGoPrev = activeIndex > 0;

      if (
        (isScrollingDown && canGoNext) ||
        (isScrollingUp && canGoPrev)
      ) {
        if (Math.abs(deltaY) > 50) {
          e.preventDefault();

          const now = Date.now();

          if (
            now - lastScrollTime.current >
            cooldown
          ) {
            if (isScrollingDown) {
              goNext();
            } else {
              goPrev();
            }

            lastScrollTime.current = now;

            touchStartY.current = null;
          }
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
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

        <p className="process-flow-subtitle">
          A simple, proven 4-step process
        </p>
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
                <h2 className="process-flow-card-title">
                  {step.title}
                </h2>

                <p className="process-flow-card-description">
                  {step.description}
                </p>
              </div>

              <div className="process-flow-card-image-wrapper">
                <img
                  src={step.image}
                  alt={step.title}
                  className="process-flow-card-image"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="process-flow-nav">
          {processSteps.map((_, index) => (
            <button
              key={index}
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
// @ts-nocheck
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import './Portfolio.css';

function Portfolio({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideConfig, setSlideConfig] = useState({ cardWidth: 0, gap: 16, visibleCards: 3 });
  const wrapperRef = useRef(null);

  // Use live slides or fall back to original static images
  const portfolioItems = (slides && slides.length > 0)
    ? slides.map((s, i) => ({ id: s._id || i, image: s.desktopImage, altText: s.altText || '' }))
    : [
        { id: 1, image: '/images/portfolio-1.jpg', altText: 'Damru Restaurant' },
        { id: 2, image: '/images/portfolio-2.jpg', altText: 'Coconut Sugar' },
        { id: 3, image: '/images/portfolio-3.jpg', altText: 'Eco Environmental' },
      ];

  const totalItems = portfolioItems.length;
  const extendedItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

  useEffect(() => { setCurrentIndex(0); }, [slides]);

  const measure = useCallback(() => {
    if (!wrapperRef.current) return;
    const wrapperWidth = wrapperRef.current.clientWidth;
    const style = window.getComputedStyle(wrapperRef.current);
    const paddingLeft = parseFloat(style.paddingLeft) || 0;
    const paddingRight = parseFloat(style.paddingRight) || 0;
    const innerWidth = wrapperWidth - paddingLeft - paddingRight;

    let visibleCards = 3;
    if (window.innerWidth <= 600) visibleCards = 1;
    else if (window.innerWidth <= 900) visibleCards = 2;

    const currentGap = visibleCards === 1 ? 0 : window.innerWidth <= 900 ? 12 : 16;
    const totalGaps = visibleCards - 1;
    const singleCardWidth = Math.floor((innerWidth - totalGaps * currentGap) / visibleCards);

    setSlideConfig({ cardWidth: singleCardWidth, gap: currentGap, visibleCards });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const { cardWidth, gap, visibleCards } = slideConfig;
  const offset = currentIndex * (cardWidth + gap);
  const clipperWidth = (visibleCards * cardWidth) + ((visibleCards - 1) * gap);

  return (
    <section className="portfolio" id="portfolio-section">
      <div className="portfolio__container">
        <div className="portfolio__slider">

          <button
            className="portfolio__arrow portfolio__arrow--left"
            aria-label="Previous project"
            id="portfolio-prev"
            onClick={handlePrev}
          >
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 13 26" /></svg>
          </button>

          <div className="portfolio__cards-wrapper" ref={wrapperRef}>
            <div className="portfolio__cards-clipper" style={{ width: `${clipperWidth}px` }}>
              <div
                className="portfolio__cards-track"
                style={{ transform: `translateX(-${offset}px)`, gap: `${gap}px` }}
              >
                {extendedItems.map((item, index) => (
                  <article
                    key={`${item.id}-${index}`}
                    className="portfolio__card"
                    style={{ width: `${cardWidth}px`, minWidth: `${cardWidth}px` }}
                  >
                    <img
                      src={item.image}
                      alt={item.altText}
                      className="portfolio__card-image"
                      loading="lazy"
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>

          <button
            className="portfolio__arrow portfolio__arrow--right"
            aria-label="Next project"
            id="portfolio-next"
            onClick={handleNext}
          >
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 2 13 14 3 26" /></svg>
          </button>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;

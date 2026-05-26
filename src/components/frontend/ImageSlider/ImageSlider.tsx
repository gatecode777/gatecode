'use client';

import { useState, useEffect } from 'react';
import './ImageSlider.css';

const slides = [
  { src: '/images/image1.png', text: 'Client-Centric Approach' },
  { src: '/images/image2.png', text: 'Experienced Team' },
  { src: '/images/image3.png', text: 'End-to-End Product Engineering' },
  { src: '/images/image4.png', text: 'Multi-Domain Expertise' },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamic non-blocking auto-slide loop (3 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Calculate shortest circular distance for infinite looped transformations
  const getDiff = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -slides.length / 2) diff += slides.length;
    if (diff > slides.length / 2) diff -= slides.length;
    return diff;
  };

  const getStyles = (index: number) => {
    const diff = getDiff(index);
    const absDiff = Math.abs(diff);

    let translateX = 0;
    let scale = 1;
    let rotateY = 0;
    let zIndex = 10 - absDiff;
    let opacity = 1;

    const stepX = 350; 

    if (diff === 0) {
      scale = 1.05;
      rotateY = 0;
      opacity = 1;
      translateX = 0;
    } else if (diff === 1 || diff === -3) {
      scale = 0.84;
      rotateY = -26;
      opacity = 0.85;
      translateX = stepX - 60;
    } else if (diff === -1 || diff === 3) {
      scale = 0.84;
      rotateY = 26;
      opacity = 0.85;
      translateX = -stepX + 60;
    } else {
      scale = 0.65;
      rotateY = diff > 0 ? -40 : 40;
      opacity = 0;
      zIndex = 1;
      translateX = diff > 0 ? stepX * 1.5 : -stepX * 1.5;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
    };
  };

  return (
    <section className="panorama-slider-section">
      <div className="panorama-slider-perspective">
        <div className="panorama-slider-track">
          {slides.map((slide, index) => {
            const styles = getStyles(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`panorama-slide-item ${isActive ? 'active' : ''}`}
                style={styles}
                onClick={() => setActiveIndex(index)}
              >
                <div className="panorama-image-wrapper">
                  <img
                    src={slide.src}
                    alt={slide.text}
                    loading="lazy"
                  />
                  <div className="panorama-text-overlay">
                    <span className="panorama-overlay-text">{slide.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Horizontal Capsule Indicators */}
      <div className="panorama-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`panorama-indicator-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;

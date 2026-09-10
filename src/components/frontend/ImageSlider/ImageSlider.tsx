'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/images/image1.webp',
    text: 'Client-Centric Approach',
    alt: 'Consultant showing client-centric mindset while having business discussion',
  },
  {
    src: '/images/image2.webp',
    text: 'Experienced Team',
    alt: 'IT experts working together in office using laptop',
  },
  {
    src: '/images/image3.webp',
    text: 'End-to-End Product Engineering',
    alt: 'Precision automated machines demonstrating end-to-end product engineering cycle',
  },
  {
    src: '/images/image4.webp',
    text: 'Multi-Domain Expertise',
    alt: 'IT specialist exhibiting cross-domain knowledge via global digital technology network',
  },
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
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="panorama-text-overlay">
                    <h3 className="panorama-overlay-text">{slide.text}</h3>
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

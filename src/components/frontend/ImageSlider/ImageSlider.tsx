'use client';

import './ImageSlider.css';

const slides = [
  { src: '/images/image1.png', text: 'Client-Centric Approach' },
  { src: '/images/image2.png', text: 'Experienced Team' },
  { src: '/images/image3.png', text: 'End-to-End Product Engineering' },
  { src: '/images/image4.png', text: 'Multi-Domain Expertise' },
];

const ImageSlider = () => {
  
  const repeatedSlides = [...slides, ...slides];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {repeatedSlides.map((slide, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-image-wrapper">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
              <div className="text-overlay">
                <span className="overlay-text">{slide.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

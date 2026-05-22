// @ts-nocheck
'use client';

import './ImageSlider.css';

import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';

const slides = [
  { src: img1, text: 'Client-Centric Approach' },
  { src: img2, text: 'Experienced Team' },
  { src: img3, text: 'End-to-End Product Engineering' },
  { src: img4, text: 'Multi-Domain Expertise' },
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

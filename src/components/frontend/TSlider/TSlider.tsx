// @ts-nocheck
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import './TSlider.css';

const FALLBACK_MEMBERS = [
  { _id: '1', name: "Rishab Singh", designation: "Graphic Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop", stars: 5 },
  { _id: '2', name: "Geeta Bisht", designation: "UI/UX Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop", stars: 5 },
  { _id: '3', name: "Balram Suman", designation: "Full Stack Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop", stars: 5 },
  { _id: '4', name: "Kanchan Meena", designation: "HR", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop", stars: 5 },
  { _id: '5', name: "Arjun Sharma", designation: "Backend Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop", stars: 5 },
  { _id: '6', name: "Priya Verma", designation: "Product Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop", stars: 5 },
];

const INTERVAL = 2500;
const TRANSITION = 600;

const TSlider = () => {
  const [MEMBERS, setMEMBERS] = useState([]);
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [useTransition, setUseTransition] = useState(true);
  const autoPlayRef = useRef(null);

  const [dimensions, setDimensions] = useState({ cardWidth: 200, cardGap: 10 });

  const applyMembers = useCallback((members) => {
    setMEMBERS(members);
    setItems([...members, ...members, ...members]);
    setActiveIndex(members.length);
  }, []);

  // Fetch live members from API
  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/team-members', {
      cache: 'no-store',
      signal: controller.signal,
    })
      .then(r => r.json())
      .then(d => {
        if (d.success && d.data?.length >= 1) {
          applyMembers(d.data);
        } else {
          applyMembers(FALLBACK_MEMBERS);
        }
      })
      .catch(error => {
        if (error?.name !== 'AbortError') {
          console.error('Failed to load team members', error);
          applyMembers(FALLBACK_MEMBERS);
        }
      });

    return () => controller.abort();
  }, [applyMembers]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth < 640
        ? { cardWidth: 160, cardGap: 5 }
        : { cardWidth: 200, cardGap: 10 });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stepWidth = dimensions.cardWidth + dimensions.cardGap;

  const handleNavigate = (dir) => {
    if (isAnimating || MEMBERS.length === 0) return;
    setIsAnimating(true);
    setUseTransition(true);
    setActiveIndex(prev => prev + dir);
  };

  useEffect(() => {
    if (MEMBERS.length === 0) return;

    if (activeIndex >= MEMBERS.length * 2 || activeIndex < MEMBERS.length) {
      const timer = setTimeout(() => {
        setUseTransition(false);
        setActiveIndex(prev => prev >= MEMBERS.length * 2 ? prev - MEMBERS.length : prev + MEMBERS.length);
        setIsAnimating(false);
      }, TRANSITION);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), TRANSITION);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, MEMBERS.length]);

  useEffect(() => {
    if (MEMBERS.length === 0) return;

    autoPlayRef.current = setInterval(() => handleNavigate(1), INTERVAL);
    return () => clearInterval(autoPlayRef.current);
  }, [activeIndex, isAnimating, MEMBERS.length]);

  return (
    <div className="tslider">
      <div className="tslider__header">
        <h2 className="tslider__title">MEET <span className="tslider__highlight">OUR EXPERT</span> MEMBERS</h2>
        <p className="tslider__subtitle">Our experts bring experience, creativity, and commitment to help your business succeed.</p>
      </div>

      <div className="tslider__track">
        <button className="tslider__btn prev" onClick={() => handleNavigate(-1)}>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="38" y1="12" x2="2" y2="12" /><polyline points="10 4 2 12 10 20" />
          </svg>
        </button>

        <div className="tslider__cards-viewport">
          <div
            className="tslider__cards-strip"
            style={{
              transform: `translateX(calc(50% - ${activeIndex * stepWidth + dimensions.cardWidth / 2}px))`,
              transition: useTransition ? `transform ${TRANSITION}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none'
            }}
          >
            {items.map((member, idx) => {
              const isCenter = idx === activeIndex;
              const avatarSize = isCenter ? "150px" : "135px";
              const opacity = isCenter ? 1 : 0.5;
              const scale = isCenter ? 1 : 0.9;
              const filledStars = member.stars ?? 5;

              return (
                <div
                  key={`${idx}-${member._id}`}
                  className={`tslider__card ${isCenter ? 'is-center' : ''}`}
                  style={{
                    width: `${dimensions.cardWidth}px`,
                    margin: `0 ${dimensions.cardGap / 2}px`,
                    opacity,
                    transform: `scale(${scale}) translateY(${isCenter ? 0 : 10}px)`,
                    transition: useTransition ? `all ${TRANSITION}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none'
                  }}
                  onClick={() => !isCenter && handleNavigate(idx - activeIndex)}
                >
                  <div className="tslider__avatar" style={{ width: avatarSize, height: avatarSize }}>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="tslider__stars" style={{ marginTop: isCenter ? '22px' : '18px' }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <span key={s} className="tslider__star" style={{
                        color: s <= filledStars ? (isCenter ? "#f0a500" : "#f1d48c") : "#e2e8f0",
                        fontSize: isCenter ? "22px" : "16px"
                      }}>★</span>
                    ))}
                  </div>
                  <div className="tslider__info">
                    <div className="tslider__name" style={{
                      fontWeight: isCenter ? "600" : "400",
                      fontSize: isCenter ? "18px" : "15px",
                      color: isCenter ? "#1a1a1a" : "#666"
                    }}>{member.name}</div>
                    <div className="tslider__role" style={{
                      fontSize: isCenter ? "14px" : "12px",
                      color: isCenter ? "#888" : "#999"
                    }}>({member.designation})</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="tslider__btn next" onClick={() => handleNavigate(1)}>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="2" y1="12" x2="38" y2="12" /><polyline points="30 4 38 12 30 20" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TSlider;

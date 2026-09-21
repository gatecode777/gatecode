'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show/hide button based on scroll position with passive & rAF throttle
  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY || document.documentElement.scrollTop;
          setIsVisible(scrolled > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={`scroll-to-top${isVisible ? ' visible' : ''}`}>
      <button onClick={scrollToTop} className="scroll-btn" aria-label="Scroll to top">
        <FaArrowUp className="arrow-icon" />
      </button>
    </div>
  );
}

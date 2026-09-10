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

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || window.pageYOffset;
      setIsVisible(scrolled > 100);
    };
    window.addEventListener('scroll', toggleVisibility);
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

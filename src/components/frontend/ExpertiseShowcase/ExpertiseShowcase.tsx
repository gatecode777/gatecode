'use client';

import {  useEffect  } from 'react';
import './ExpertiseShowcase.css';

const ExpertiseShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="expertise-showcase">
      <div className="container">
        <h1>Expertise Showcase</h1>
        <p>This is a placeholder for the Expertise Showcase component.</p>
      </div>
    </div>
  );
};

export default ExpertiseShowcase;

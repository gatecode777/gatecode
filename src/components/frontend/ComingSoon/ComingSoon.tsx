'use client';

import './ComingSoon.css';

function ComingSoon({ category }: { category?: string }) {
  return (
    <div className="coming-soon">
      <div className="coming-soon__icon-wrapper">
        <img
          src="/images/coming-soon-icon.webp"
          alt="Coming Soon"
          className="coming-soon__icon"
        />
      </div>
      <h3 className="coming-soon__title">Coming Soon</h3>
      <p className="coming-soon__description">
        {category
          ? `We're working on amazing ${category} projects. Check back soon!`
          : "We're working on exciting new projects. Check back soon!"}
      </p>
    </div>
  );
}

export default ComingSoon;

// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import PortfolioHero from '@/components/frontend/PortfolioHero/PortfolioHero';
import PortfolioSlider from '@/components/frontend/Portfolio/Portfolio';
import Categories from '@/components/frontend/Categories/Categories';
import ProjectCards from '@/components/frontend/ProjectCards/ProjectCards';
import ProjectBanner from '@/components/frontend/ProjectBanner/ProjectBanner';

export default function Portfolio() {
  const [slides, setSlides]           = useState([]);
  const [categories, setCategories]   = useState([]);
  const [projects, setProjects]       = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch slider + categories on mount
  useEffect(() => {
    fetch('/api/portfolio/slider')
      .then(r => r.json())
      .then(d => { if (d.success) setSlides(d.data); })
      .catch(() => {});

    fetch('/api/portfolio/categories')
      .then(r => r.json())
      .then(d => {
        if (d.success && d.data.length > 0) {
          setCategories(d.data);
          setActiveCategory(d.data[0]); // select first category by default
        }
      })
      .catch(() => {});
  }, []);

  // Fetch projects whenever active category changes
  useEffect(() => {
    if (!activeCategory) return;
    const qs = activeCategory._id ? `?categoryId=${activeCategory._id}` : '';
    fetch(`/api/portfolio/projects${qs}`)
      .then(r => r.json())
      .then(d => { if (d.success) setProjects(d.data); })
      .catch(() => {});
  }, [activeCategory]);

  return (
    <>
      <PortfolioHero />
      <PortfolioSlider slides={slides} />
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProjectCards
        projects={projects}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProjectBanner />
    </>
  );
}

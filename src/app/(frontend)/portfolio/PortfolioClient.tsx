// @ts-nocheck
'use client';

import { useState, useEffect, useMemo } from 'react';
import Categories from '@/components/frontend/Categories/Categories';
import ProjectCards from '@/components/frontend/ProjectCards/ProjectCards';

export default function PortfolioClient({ categories, projects }) {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const filteredProjects = useMemo(() => {
    if (!activeCategory) return [];
    if (activeCategory._id === 'all') return projects;
    return projects.filter(
      (p) => String(p.categoryId?._id || p.categoryId) === activeCategory._id
    );
  }, [projects, activeCategory]);

  return (
    <>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isLoading={false}
      />
      <ProjectCards
        projects={filteredProjects}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isLoading={false}
      />
    </>
  );
}

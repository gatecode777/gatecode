// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import './ProjectCards.css';
import ComingSoon from '@/components/frontend/ComingSoon/ComingSoon';

const PER_PAGE = 3;

function ProjectCards({ projects, categories, activeCategory, setActiveCategory }) {
  const [page, setPage] = useState(1);

  // Reset to page 1 whenever category changes
  useEffect(() => { setPage(1); }, [activeCategory?._id]);

  const isEmpty     = !projects || projects.length === 0;
  const totalPages  = isEmpty ? 1 : Math.max(1, Math.ceil(projects.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageItems   = isEmpty ? [] : projects.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <section className="project-cards">
      <div className="project-cards__container">

        {/* No projects → Coming Soon */}
        {isEmpty ? (
          <ComingSoon category={activeCategory?.name} />
        ) : (
          <div className="project-cards__grid">
            {pageItems.map((project) => {
              const activeButtons = (project.buttons || [])
                .filter(b => b.isActive)
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

              return (
                <article key={project._id} className="project-card">
                  <div className="project-card__image-wrapper">
                    <img src={project.thumbnail} alt={project.title} className="project-card__image" />
                  </div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    {activeButtons.length > 0
                      ? activeButtons.map(btn => (
                          <button
                            key={btn._id}
                            className="project-card__button"
                            onClick={() => btn.url && btn.url !== '#' && window.open(btn.url, btn.openInNewTab ? '_blank' : '_self')}
                          >
                            {btn.label}
                          </button>
                        ))
                      : <button className="project-card__button" disabled>Visit Website</button>
                    }
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Pagination — only when more than 1 page of projects exist */}
        {!isEmpty && totalPages > 1 && (
          <div className="project-cards__pagination">
            <div className="project-cards__pagination-wrapper">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  className={`project-cards__page-btn ${currentPage === num ? 'project-cards__page-btn--active' : ''}`}
                  onClick={() => setPage(num)}
                  aria-label={`Page ${num}`}
                  aria-current={currentPage === num ? 'page' : undefined}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProjectCards;

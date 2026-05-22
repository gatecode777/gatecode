// @ts-nocheck
'use client';

import './Categories.css';

function Categories({ categories, activeCategory, setActiveCategory }) {
  // Use live categories or fall back to static list
  const cats = (categories && categories.length > 0)
    ? categories
    : [
        { _id: '1', name: 'Web Development' },
        { _id: '2', name: 'Software Development' },
        { _id: '3', name: 'UI/UX Design' },
        { _id: '4', name: 'Graphic Design' },
        { _id: '5', name: 'Digital Marketing' },
        { _id: '6', name: 'Mobile App' },
      ];

  return (
    <section className="categories" id="categories-section">
      <div className="categories__container">
        <div className="categories__list">
          {cats.map((cat) => (
            <button
              key={cat._id}
              className={`categories__btn ${activeCategory?._id === cat._id ? 'categories__btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

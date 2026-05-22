// @ts-nocheck
'use client';

const BlogSidebar = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-card">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Categories</h2>
        </div>
        <ul className="category-list">
          {categories.map((cat, index) => (
            <li
              key={index}
              className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <span className="cat-name">{cat.name}</span>
              <span className="cat-count">{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
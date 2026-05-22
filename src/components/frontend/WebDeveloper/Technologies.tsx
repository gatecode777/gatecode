'use client';

import "./Technologies.css";

const technologies = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PHP", "Python"],
  },
  {
    title: "CMS & Platforms",
    items: ["WordPress", "Shopify"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "Postgresql"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Figma", "APIs Integration"],
  },
];

const Technologies = () => {
  return (
    <section className="technologies-section">

      <div className="technologies-heading">
        <h2>
          <span>TECHNOLOGIES</span> WE USE
        </h2>

        <div className="technologies-line"></div>
      </div>

      <div className="technologies-box">

        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <div className="technology-column" key={index}>

              <div className="column-header">
                <h3>{tech.title}</h3>
              </div>

              <div className="column-content">
                {tech.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Technologies;
'use client';

import React from "react";
import "./Technologies.css";

const techData = [
  {
    name: "HTML",
    img: "/images/tech-html.webp",
  },
  {
    name: "CSS",
    img: "/images/tech-css.webp",
  },
  {
    name: "Java Script",
    img: "/images/tech-js.webp",
  },
  {
    name: "Next.Js",
    img: "/images/tech-nextjs.webp",
  },
];

export default function Technologies() {
  return (
    <section className="tech-section">
      <h2 className="tech-title">TECHNOLOGIES USED</h2>

      <div className="tech-container">
        <div className="tech-line"></div>

        {techData.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className={`tech-circle ${index === 0 ? "active" : ""}`}>
              <img src={tech.img} alt={tech.name} width={40} height={40} loading="lazy" />
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
'use client';

import React from "react";
import "./Technologies.css";

const techData = [
  {
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS",
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "Java Script",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
  },
  {
    name: "Next.Js",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
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
              <img src={tech.img} alt={tech.name} />
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
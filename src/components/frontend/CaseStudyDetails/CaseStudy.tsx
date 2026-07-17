// @ts-nocheck
'use client';

import React from "react";
import "./CaseStudy.css";

const CaseStudy = () => {
  return (
    <section className="case-study">
      <div className="case-container">

        <div className="case-text">
          <h4 className="head_four">CASE STUDIES</h4>
          <h2 className="head_two">DAMRU BY NAMO</h2>
          <p className="head_p">
            Transforming a restaurant business with a seamless online ordering platform
          </p>
        </div>

        <div className="case-image">
          <img
            src="./Background_img.jpg"
            alt="Gatecode Technologies Case Study Context Banner"
          />
        </div>
      </div>
      <div className="img_container">
        <img src="./Casestudy_img.jpg" alt="Damru By Namo E-Commerce Restaurant Project Case Study" />
      </div>
    </section>
  );
};

export default CaseStudy;
'use client';

import React from "react";
import "./FeaturesResults.css";

const FeaturesResults = () => {
  return (
    <section className="fr-section">
      <div className="fr-container">
        <div className="fr-left">

          <div className="fr-block">
            <h2>KEY FEATURES</h2>
            <ul>
              <li>Interactive and easy-to-use food menu</li>
              <li>Seamless online ordering system</li>
              <li>Banquet hall booking functionality</li>
              <li>Mobile-friendly and responsive design</li>
              <li>Fast loading and optimized performance</li>
              <li>Clean and modern UI/UX design</li>
              <li>Contact and location integration</li>
            </ul>
          </div>

          <div className="fr-block">
            <h2>RESULTS</h2>
            <ul>
              <li>Enhanced customer convenience with dual functionality (ordering + booking)</li>
              <li>Increased engagement through improved user experience</li>
              <li>Simplified process for event bookings</li>
              <li>Stronger online presence for the restaurant</li>
            </ul>
          </div>

        </div>

        <div className="box">
          <img src="/images/homepage.jpeg" alt="home" />
        </div>

      </div>
    </section>
  );
};

export default FeaturesResults;
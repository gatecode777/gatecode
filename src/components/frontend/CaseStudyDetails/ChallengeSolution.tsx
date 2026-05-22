// @ts-nocheck
'use client';

import React from "react";
import "./ChallengeSolution.css";

const ChallengeSolution = () => {
  return (
    <section className="cs-section">
      <div className="cs-container">

        <div className="cs-text">

          <div className="cs-block">
            <h2>CHALLENGE</h2>
            <p>
              The client needed a website that could handle both online food ordering
              and banquet hall bookings in a simple and user-friendly way. The challenge
              was to design a platform that balances multiple functionalities while
              maintaining a smooth user experience across all devices.
            </p>
          </div>

          <div className="cs-block">
            <h2>SOLUTION</h2>
            <p>
              We designed and developed a fully responsive website that combines an
              interactive food ordering system with a dedicated banquet hall booking
              feature. The platform allows users to easily explore the menu, place orders,
              and book the banquet hall for events—all within a clean, intuitive interface.
            </p>
          </div>

        </div>

        <div className="cs-image">
          <img
            src="./challenges_img.png"
            alt="Challenge Solution Illustration"
          />
        </div>

      </div>
    </section>
  );
};

export default ChallengeSolution;
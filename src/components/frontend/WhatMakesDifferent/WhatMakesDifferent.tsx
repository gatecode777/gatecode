'use client';

import './WhatMakesDifferent.css';

const WhatMakesDifferent = () => {
  return (
    <section className="wmd-section">
      <div className="wmd-container">

        <h2 className="wmd-title">
          WHAT <span className="wmd-title--highlight">MAKES US</span> DIFFERENT
        </h2>
        <div className="wmd-divider" />

        <div className="wmd-images-row">
          <div className="wmd-img-card wmd-img-card--side">
            <img
              src="https://img.freepik.com/free-vector/data-points-concept-illustration_114360-3001.jpg?w=600"
              alt="Digital interaction"
            />
          </div>
          <div className="wmd-img-card wmd-img-card--center">
            <img
              src="https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?w=740"
              alt="UI/UX Design"
            />
          </div>
          <div className="wmd-img-card wmd-img-card--side">
            <img
              src="https://img.freepik.com/free-vector/home-office-concept-illustration_114360-849.jpg?w=600"
              alt="Workspace analytics"
            />
          </div>
        </div>

        <div className="wmd-body">
          <p className="wmd-body__para">
            Most companies focus on delivering services. At Gatecode Technologies Pvt. Ltd., we focus on delivering measurable business results through
            ROI-driven IT and business solutions.<br />
            We combine technology, automation, and business understanding to solve real operational challenges — not just complete tasks.
          </p>

          <ul className="wmd-bullet-list">
            <li>ROI-focused IT services and business solutions</li>
            <li>Customized strategies tailored to your business goals</li>
            <li>Expertise in business process automation and backend operations</li>
            <li>Dedicated support with a long-term partnership approach</li>
            <li>Cost-effective and scalable solutions for growing businesses</li>
          </ul>

          <p className="wmd-body__para wmd-body__para--closing">
            We don't work as a typical vendor — we act as your extended technology and operations team, helping you improve efficiency, reduce costs,
            and scale sustainably.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatMakesDifferent;

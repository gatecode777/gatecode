'use client';

import Image from 'next/image';
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
            <Image
              src="/images/wmd-data-points.webp"
              alt="Custom Software and Digital Interaction Solutions - Gatecode Technologies"
              width={220}
              height={170}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="wmd-img-card wmd-img-card--center">
            <Image
              src="/images/wmd-ui-ux-design.webp"
              alt="UI UX Design Services - Gatecode Technologies"
              width={290}
              height={230}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="wmd-img-card wmd-img-card--side">
            <Image
              src="/images/wmd-home-office.webp"
              alt="Enterprise Analytics and Operations Management Workspace - Gatecode Technologies"
              width={220}
              height={170}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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

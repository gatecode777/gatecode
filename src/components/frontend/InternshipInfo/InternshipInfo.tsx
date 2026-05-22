'use client';

import './InternshipInfo.css';

const InternshipInfo = () => {
  return (
    <section className="internship-info">
      <div className="container">
        <div className="info-box intro-box">
          <p>
            At Gatecode Technologies Pvt. Ltd., internship program is designed to help you learn, grow, and develop practical skills by working on real projects. Whether you're a student or a fresher, this is your opportunity to explore your potential, enhance your knowledge, and prepare for a successful professional career.
          </p>
        </div>

        <div className="info-box benefits-box">
          <div className="benefits-content">
            <h2 className="benefits-title">What You'll Get</h2>
            <ul className="benefits-list">
              <li>
                <strong>Real Project Experience</strong> – Work on live projects
              </li>
              <li>
                <strong>Mentorship & Guidance</strong> – Learn from industry professionals
              </li>
              <li>
                <strong>Skill Development</strong> – Hands-on learning with modern tools
              </li>
              <li>
                <strong>Certificate of Completion</strong> (if applicable)
              </li>
              <li>
                <strong>Future Opportunities</strong> – Chance to join as a full-time employee
              </li>
            </ul>
          </div>
          <div className="benefits-image">
            <img src="/images/bird_img.png" alt="Internship Benefits" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipInfo;

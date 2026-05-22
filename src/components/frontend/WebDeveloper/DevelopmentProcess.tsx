'use client';

import "./DevelopmentProcess.css";

const processSteps = [
  "Requirement & Strategy",
  "UI/UX Design",
  "Development",
  "Testing",
  "Launch",
  "Support",
];

const DevelopmentProcess = () => {
  return (
    <section className="development-section">
      <div className="development-heading">
        <h2>
          OUR <span>DEVELOPMENT PROCESS</span>
        </h2>
        <div className="development-line"></div>
      </div>

      <div className="process-wrapper">
        <div className="process-line-horizontal"></div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-card" key={index}>
              <div className="vertical-drop-line"></div>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
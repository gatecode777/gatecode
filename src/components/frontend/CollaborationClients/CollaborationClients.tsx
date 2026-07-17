'use client';

import './CollaborationClients.css';

const CollaborationClients = () => {
  return (
    <section className="cc-section">
      <div className="cc-container">
        <div className="cc-collab">
          <div className="cc-header">
            <h2 className="cc-title">OUR <span className="cc-teal">COLLABORATION</span></h2>
            <p className="cc-subtitle">Stronger Together for Better Solutions</p>
          </div>

          <div className="cc-rmax">
            <img src="/images/rmax.png" alt="Rmax Solutions Partnership Logo - Gatecode Technologies" className="cc-rmax-logo" />
          </div>

          <p className="cc-desc">
            Gatecode Technologies Pvt. Ltd. collaborates with Rmax Solutions, a trusted manufacturer of innovative
            products such as napkin incinerator machines and GPS-based solutions. This partnership enables us to
            integrate smart technology with reliable hardware solutions, delivering efficient, practical,
            and scalable outcomes for businesses and institutions.
          </p>
        </div>

        <div className="cc-divider"></div>

        <div className="cc-clients">
          <h2 className="cc-clients-title">
            TRUSTED BY <span className="cc-teal">INDUSTRY LEADERS</span>: MEET OUR <span className="cc-teal">VALUED CLIENTS</span>
          </h2>
          <div className="cc-clients-grid">
            <a href="https://gatexpay.in/" target='_blank'><img src="/images/1.jpeg" alt="Gatexpay Client Logo - Gatecode Technologies" className="cc-clients-image" /></a>
            <a href="#" target='_blank'><img src="/images/2.jpeg" alt="Valued Enterprise Client Logo - Gatecode Technologies" className="cc-clients-image" /></a>
            <a href="#" target='_blank'><img src="/images/3.jpeg" alt="Partner Business Client Logo - Gatecode Technologies" className="cc-clients-image" /></a>
            <a href="https://cocofinasugar.com/" target='_blank'><img src="/images/7.png" alt="Cocofina Sugar Brand Client Logo - Gatecode Technologies" className="cc-clients-image" /></a>
            <a href="https://ecobinuae.com/" target='_blank'><img src="/images/4.jpeg" alt="Ecobin UAE Client Logo - Gatecode Technologies" className="cc-clients-image" /></a>
            <a href="https://destoura.com/" target='_blank'><img src="/images/5.jpeg" alt="Destoura Client Logo - Gatecode Technologies" className="cc-clients-image" /></a>
            <a href="https://www.instagram.com/thedamrubynamo.pratapnagar/" target='_blank'><img src="/images/6.png" alt="The Damru Dynamo Pratapnagar Client Logo - Gatecode Technologies" className="cc-clients-image" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationClients;

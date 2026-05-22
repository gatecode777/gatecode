'use client';

import './AboutIntro.css';

const AboutIntro = () => {
  return (
    <section className="about-intro">
      <div className="about-intro__container">
        <div className="about-intro__grid">
          <div className="about-intro__text">
            <h2 className="about-intro__heading">WHO WE ARE</h2>
            <div className="about-intro__divider" />
            
            <p className="about-intro__description">
              Gatecode Technologies Pvt. Ltd. is a <strong>result-driven</strong> technology and business solutions company helping startups, SMEs, and growing businesses streamline operations, reduce costs, and scale through the right technology and backend support.
            </p>
            
            <p className="about-intro__highlight">
              We don't just offer services — we solve real business problems.
            </p>
            
            <p className="about-intro__description">
              From custom software development and website development to BPO services, accounting support, and digital marketing, we work closely with founders and teams to identify what's slowing them down — and build systems that fix it.
            </p>
            
            <div className="about-intro__principles">
              <p>Our approach is built around three core principles:</p>
              <ul>
                <li>Eliminate operational bottlenecks that waste time and resources</li>
                <li>Reduce unnecessary business costs through smarter outsourcing and process automation</li>
                <li>Improve execution speed so your business moves faster, delivers consistently, and scales without breaking</li>
              </ul>
            </div>

            <p className="about-intro__description">
              What makes us different is how we work — as a dedicated technology and operations partner, not just an outside vendor. Every solution we build is tailored to your specific business needs, goals, and growth stage.
            </p>

            <p className="about-intro__description">
              Whether you’re a founder dealing with operational chaos or a team that’s outgrown manual processes, Gatecode Technologies is built to help you move forward — efficiently and reliably.
            </p>
          </div>

          <div className="about-intro__visual">
            <img
              src="/images/who_we_are.png"
              alt="Who We Are Illustration"
              className="about-intro__illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

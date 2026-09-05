'use client';

const benefits = [
  'Increased online visibility',
  'Improved customer engagement',
  'Targeted audience reach',
  'Lead generation and conversions',
  'Data-driven marketing strategies',
  'Performance tracking and optimization',
];

const DigitalWhyChoose = () => {
  return (
    <section className="dm-why-choose-section">
      <div className="dm-container">
        <h2 className="dm-section-title dm-section-header-left">
          Why Choose Our Digital Marketing Services
        </h2>
        <p className="dm-about-text dm-about-text-left">
          We focus on creating innovative and result-oriented marketing strategies tailored to your business goals. Our approach combines creativity,
          audience targeting, and performance analysis to improve brand visibility, generate leads, and maximize digital growth.
        </p>

        <div className="dm-why-choose-layout">
          <div className="dm-why-choose-content">
            <h3 className="dm-benefits-title">
              Key Benefits
            </h3>
            <ul className="dm-benefits-list">
              {benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dm-why-choose-image">
            <img
              src="/images/path.webp"
              alt="Digital Marketing Illustration"
              className="dm-path-illustration"
              width={500}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWhyChoose;

'use client';

const industries = [
  'E-Commerce & Retail',
  'Restaurants & Hospitality',
  'Corporate Businesses',
  'Education & Training',
  'Healthcare & Wellness',
  'Real Estate & Construction',
  'Startups & Enterprises',
];

const DigitalIndustries = () => {
  return (
    <section className="dm-industries-section">
      <div className="dm-container">
        <div className="dm-industries-layout">
          <div className="dm-industries-info">
            <h2 className="dm-section-title dm-section-header-left">
              Industries We Serve
            </h2>
            <ul className="dm-industries-list">
              {industries.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dm-image-grid">
            <img src="/images/1.jpg" alt="E-Commerce and Retail Industry Solutions" className="dm-industry-img-1" />
            <img src="/images/2.jpg" alt="Restaurants and Hospitality Website Development" className="dm-industry-img-2" />
            <img src="/images/3.jpg" alt="Corporate Business Software Solutions" className="dm-industry-img-3" />
            <img src="/images/4.jpg" alt="Education and E-Learning Web Portals" className="dm-industry-img-4" />
            <img src="/images/5.jpg" alt="Healthcare and Wellness Digital Campaigns" className="dm-industry-img-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalIndustries;

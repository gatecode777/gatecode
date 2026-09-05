'use client';

import Image from 'next/image';

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
            <Image src="/images/1.webp" alt="E-Commerce and Retail Industry Solutions" className="dm-industry-img-1" width={380} height={250} style={{ width: 'auto', height: 'auto' }} />
            <Image src="/images/2.webp" alt="Restaurants and Hospitality Website Development" className="dm-industry-img-2" width={200} height={150} style={{ width: 'auto', height: 'auto' }} />
            <Image src="/images/3.webp" alt="Corporate Business Software Solutions" className="dm-industry-img-3" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
            <Image src="/images/4.webp" alt="Education and E-Learning Web Portals" className="dm-industry-img-4" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
            <Image src="/images/5.webp" alt="Healthcare and Wellness Digital Campaigns" className="dm-industry-img-5" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalIndustries;

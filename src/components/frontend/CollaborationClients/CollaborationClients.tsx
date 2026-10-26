import Image from 'next/image';

const CollaborationClients = () => {
  return (
    <section className="cc-section">
      <div className="cc-container">
        <div className="cc-collab">
          <div className="cc-header">
            <h2 className="cc-title">OUR <span className="cc-teal">COLLABORATION</span></h2>
            <p className="cc-subtitle">Stronger Together for Better Solutions</p>
          </div>

          <div className="cc-collab-logos">
            <div className="cc-collab-logo-item">
              <Image 
                src="/images/rmax.webp" 
                alt="Rmax Solutions Partnership Logo - Gatecode Technologies" 
                width={135} 
                height={61} 
                className="cc-collab-logo cc-logo-rmax" 
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </div>
            <div className="cc-collab-logo-divider" aria-hidden="true" />
            <div className="cc-collab-logo-item">
              <Image 
                src="/images/Cars24 new logo.svg" 
                alt="CARS24 Partnership Logo - Gatecode Technologies" 
                width={175} 
                height={36} 
                className="cc-collab-logo cc-logo-cars24" 
                style={{ width: 'auto', height: 'auto' }}
                unoptimized
                priority
              />
            </div>
          </div>

          <p className="cc-desc">
            Gatecode Technologies Pvt. Ltd. collaborates with industry leaders like{' '}
            <strong className="cc-partner-highlight">Rmax Solutions</strong> and{' '}
            <strong className="cc-partner-highlight">CARS24</strong> to deliver tailored, high-impact business solutions. In partnership with Rmax Solutions, we integrate smart technology with innovative hardware such as napkin incinerators and GPS tracking systems. Alongside CARS24, we deliver dedicated BPO services and operational excellence—ensuring efficient, reliable, and scalable outcomes for modern enterprises.
          </p>
        </div>

        <div className="cc-divider"></div>

        <div className="cc-clients">
          <h2 className="cc-clients-title">
            TRUSTED BY <span className="cc-teal">INDUSTRY LEADERS</span>: MEET OUR <span className="cc-teal">VALUED CLIENTS</span>
          </h2>
          <div className="cc-clients-grid">
            <a href="https://gatexpay.in/" target='_blank' rel="noopener noreferrer">
              <Image src="/images/client-logo-1.webp" alt="Gatexpay Client Logo - Gatecode Technologies" width={1254} height={1254} className="cc-clients-image" style={{ width: 'auto', height: 'auto' }} />
            </a>
            <div className="cc-client-item">
              <Image src="/images/client-logo-2.webp" alt="Valued Enterprise Client Logo - Gatecode Technologies" width={1320} height={731} className="cc-clients-image" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="cc-client-item">
              <Image src="/images/client-logo-3.webp" alt="Partner Business Client Logo - Gatecode Technologies" width={588} height={177} className="cc-clients-image" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <a href="https://cocofinasugar.com/" target='_blank' rel="noopener noreferrer">
              <Image src="/images/client-logo-7.webp" alt="Cocofina Sugar Brand Client Logo - Gatecode Technologies" width={260} height={260} className="cc-clients-image" style={{ width: 'auto', height: 'auto' }} />
            </a>
            <a href="https://ecobinuae.com/" target='_blank' rel="noopener noreferrer">
              <Image src="/images/client-logo-4.webp" alt="Ecobin UAE Client Logo - Gatecode Technologies" width={1289} height={949} className="cc-clients-image" style={{ width: 'auto', height: 'auto' }} />
            </a>
            <a href="https://destoura.com/" target='_blank' rel="noopener noreferrer">
              <Image src="/images/client-logo-5.webp" alt="Destoura Client Logo - Gatecode Technologies" width={1563} height={1563} className="cc-clients-image" style={{ width: 'auto', height: 'auto' }} />
            </a>
            <a href="https://damrurestro.com/" target='_blank' rel="noopener noreferrer">
              <Image src="/images/client-logo-6.webp" alt="The Damru Dynamo Pratapnagar Client Logo - Gatecode Technologies" width={290} height={290} className="cc-clients-image" style={{ width: 'auto', height: 'auto' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationClients;

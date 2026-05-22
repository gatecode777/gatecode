'use client';

import './PrivacyContent.css';

const PrivacyContent = () => {
  return (
    <section className="privacy-content">
      <div className="privacy-content__container">
        <div className="privacy-content__header">
          <span className="privacy-content__tag">Effective Date: [28/04/2026]</span>
          <p className="privacy-content__intro">
            At Gatecode Technologies Pvt. Ltd., we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide while using our website and services.
          </p>
        </div>

        <div className="privacy-content__grid">

          <section className="privacy-section">
            <h2 className="privacy-section__title">01. Information We Collect</h2>
            <div className="privacy-section__body">
              <p>We may collect the following types of information:</p>
              <div className="privacy-sub">
                <h3 className="privacy-sub__title">Personal Information</h3>
                <ul className="privacy-list">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Resume/CV (for career or internship applications)</li>
                </ul>
              </div>
              <div className="privacy-sub">
                <h3 className="privacy-sub__title">Non-Personal Information</h3>
                <ul className="privacy-list">
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Pages visited on our website</li>
                  <li>Cookies and usage data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">02. How We Use Your Information</h2>
            <div className="privacy-section__body">
              <p>We use the collected information to:</p>
              <ul className="privacy-list privacy-list--check">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Process job and internship applications</li>
                <li>Communicate updates and important information</li>
                <li>Improve website functionality and user experience</li>
                <li>Maintain website security and prevent misuse</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">03. Cookies Policy</h2>
            <div className="privacy-section__body">
              <p>
                Our website may use cookies to enhance user experience and analyze website traffic. Cookies help us understand how visitors interact with our website and improve performance.
              </p>
              <div className="privacy-alert">
                <p><strong>Note:</strong> You can choose to disable cookies through your browser settings.</p>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">04. Data Protection</h2>
            <div className="privacy-section__body">
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no online platform can guarantee complete security.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">05. Third Party Services</h2>
            <div className="privacy-section__body">
              <p>
                We may use trusted third-party tools or services for analytics, payment processing, or communication purposes. These third parties may have access to limited information required to perform their services.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">06. Information Sharing</h2>
            <div className="privacy-section__body">
              <p>
                We do not sell, trade, or rent users' personal information to others. Your information is only used for business and communication purposes related to our services.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">07. External Links</h2>
            <div className="privacy-section__body">
              <p>
                Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">08. Career & Internship Applications</h2>
            <div className="privacy-section__body">
              <p>
                Any information submitted through career or internship forms will only be used for recruitment purposes and kept confidential.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">09. Your Rights</h2>
            <div className="privacy-section__body">
              <p>You may request to:</p>
              <div className="privacy-rights">
                <div className="privacy-right-item">
                  <span className="privacy-right-icon">👁️</span>
                  <span>Access your personal data</span>
                </div>
                <div className="privacy-right-item">
                  <span className="privacy-right-icon">✏️</span>
                  <span>Correct inaccurate information</span>
                </div>
                <div className="privacy-right-item">
                  <span className="privacy-right-icon">🗑️</span>
                  <span>Request deletion of your data</span>
                </div>
                <div className="privacy-right-item">
                  <span className="privacy-right-icon">🚫</span>
                  <span>Withdraw consent for communication</span>
                </div>
              </div>
              <div className="privacy-alert">
                <p>To make such requests, please contact us using the information below.</p>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">10. Changes to This Policy</h2>
            <div className="privacy-section__body">
              <p>
                Gatecode Technologies Pvt. Ltd. reserves the right to update or modify this Privacy Policy at any time. Changes will be updated on this page.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">11. Contact Us</h2>
            <div className="privacy-section__body">
              <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
              <div className="privacy-contact">
                <div className="privacy-contact__item">
                  <strong>Gatecode Technologies Pvt. Ltd.</strong>
                </div>
                <div className="privacy-contact__item">
                  <strong>Email:</strong> <a href="mailto:info@gatecode.in">info@gatecode.in</a>
                </div>
                <div className="privacy-contact__item">
                  <strong>Phone:</strong> +91 8502888838
                </div>
                <div className="privacy-contact__item">
                  <strong>Address:</strong> 712 Sumer Nagar, Mansarover, 302330
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="privacy-footer-note">
          <p>By using our website, you agree to the terms outlined in this Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;

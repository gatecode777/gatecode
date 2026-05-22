'use client';

import './CookieContent.css';

const CookieContent = () => {
  return (
    <section className="privacy-content">
      <div className="privacy-content__container">
        <div className="privacy-content__header">
          <span className="privacy-content__tag">Effective Date: [28/04/2026]</span>
          <p className="privacy-content__intro">
            This Cookie Policy explains how Gatecode Technologies Pvt. Ltd. uses cookies and similar technologies when you visit our website. By continuing to use our website, you agree to the use of cookies as described in this policy.
          </p>
        </div>

        <div className="privacy-content__grid">

          <section className="privacy-section">
            <h2 className="privacy-section__title">01. What Are Cookies?</h2>
            <div className="privacy-section__body">
              <p>
                Cookies are small text files stored on your device when you visit a website. They help websites remember user preferences, improve functionality, and enhance the browsing experience.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">02. How We Use Cookies</h2>
            <div className="privacy-section__body">
              <p>We use cookies to:</p>
              <ul className="privacy-list privacy-list--check">
                <li>Improve website performance and functionality</li>
                <li>Understand user behavior and website traffic</li>
                <li>Remember user preferences and settings</li>
                <li>Enhance user experience</li>
                <li>Maintain website security and reliability</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">03. Types of Cookies We Use</h2>
            <div className="privacy-section__body">
              <div className="privacy-sub">
                <h3 className="privacy-sub__title">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly and cannot be disabled in our systems.</p>
              </div>
              <div className="privacy-sub">
                <h3 className="privacy-sub__title">Performance & Analytics Cookies</h3>
                <p>These cookies help us understand how visitors interact with our website by collecting anonymous information such as page visits and traffic sources.</p>
              </div>
              <div className="privacy-sub">
                <h3 className="privacy-sub__title">Functional Cookies</h3>
                <p>These cookies allow the website to remember choices you make, such as language preferences or form details.</p>
              </div>
              <div className="privacy-sub">
                <h3 className="privacy-sub__title">Marketing Cookies</h3>
                <p>These cookies may be used to deliver relevant advertisements and track the effectiveness of marketing campaigns.</p>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">04. Third-Party Cookies</h2>
            <div className="privacy-section__body">
              <p>
                Some cookies may be placed by third-party services such as analytics tools, embedded content, or advertising platforms. These third parties may collect information according to their own privacy policies.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">05. Managing Cookies</h2>
            <div className="privacy-section__body">
              <p>You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality and user experience.</p>
              <div className="privacy-sub">
                <h3 className="privacy-sub__title">Browser Settings</h3>
                <p>Most browsers allow you to:</p>
                <ul className="privacy-list">
                  <li>View stored cookies</li>
                  <li>Delete cookies</li>
                  <li>Block cookies from websites</li>
                  <li>Disable all cookies completely</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">06. Data Protection</h2>
            <div className="privacy-section__body">
              <p>
                Any information collected through cookies is used responsibly and securely to improve our website and services.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">07. Privacy</h2>
            <div className="privacy-section__body">
              <p>
                Your use of this website is also governed by our Privacy Policy. By using our website, you consent to the collection and use of information as outlined in the Privacy Policy.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">08. Updates to This Policy</h2>
            <div className="privacy-section__body">
              <p>
                Gatecode Technologies Pvt. Ltd. reserves the right to update or modify this Cookie Policy at any time. Any changes will be posted on this page.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">09. Contact Us</h2>
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
                  <strong>Phone:</strong> <a href="tel:+918502888838">+91 8502888838</a>
                </div>
                <div className="privacy-contact__item">
                  <strong>Address:</strong> 712 Sumer Nagar, Mansarover, 302030
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="privacy-footer-note">
          <p>By using our website, you consent to the use of cookies in accordance with this Cookie Policy.</p>
        </div>
      </div>
    </section>
  );
};

export default CookieContent;

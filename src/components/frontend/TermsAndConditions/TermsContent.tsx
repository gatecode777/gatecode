'use client';

import './TermsContent.css';

const TermsContent = () => {
  return (
    <section className="privacy-content">
      <div className="privacy-content__container">
        <div className="privacy-content__header">
          <span className="privacy-content__tag">Effective Date: [28/04/2026]</span>
          <p className="privacy-content__intro">
            Welcome to Gatecode Technologies Pvt. Ltd.. By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our website.
          </p>
        </div>

        <div className="privacy-content__grid">

          <section className="privacy-section">
            <h2 className="privacy-section__title">01. Acceptance of Terms</h2>
            <div className="privacy-section__body">
              <p>
                By accessing this website, you confirm that you accept these Terms & Conditions and agree to follow all applicable laws and regulations. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">02. Services</h2>
            <div className="privacy-section__body">
              <p>Gatecode Technologies Pvt. Ltd. provides services including but not limited to:</p>
              <ul className="privacy-list privacy-list--check">
                <li>IT Services</li>
                <li>BPO Services</li>
                <li>Data Entry Services</li>
                <li>Digital Marketing</li>
                <li>Accounting Solutions</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">03. Use of Website</h2>
            <div className="privacy-section__body">
              <p>
                You agree to use this website only for lawful purposes and in a manner that does not harm, disrupt, or interfere with the website’s functionality or security. You must not:
              </p>
              <ul className="privacy-list">
                <li>Attempt unauthorized access to our systems</li>
                <li>Upload harmful or malicious content</li>
                <li>Use website content without permission</li>
                <li>Engage in fraudulent or misleading activities</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">04. Intellectual Property</h2>
            <div className="privacy-section__body">
              <p>
                All content on this website, including text, graphics, logos, images, designs, and other materials, is the property of Gatecode Technologies Pvt. Ltd. and is protected by applicable copyright and intellectual property laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">05. User Information</h2>
            <div className="privacy-section__body">
              <p>
                Our website may use cookies to enhance user experience and analyze website traffic. Cookies help us understand how visitors interact with our website and improve performance.
              </p>
              <p className="privacy-alert">
                We reserve the right to contact you regarding your inquiry or application.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">06. Third-Party Links</h2>
            <div className="privacy-section__body">
              <p>
                Our website may include links to external websites for additional information or services. We are not responsible for the content, privacy practices, or policies of third-party websites.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">07. Limitation of Liability</h2>
            <div className="privacy-section__body">
              <p>Gatecode Technologies Pvt. Ltd. shall not be held responsible for:</p>
              <ul className="privacy-list">
                <li>Any direct or indirect damages arising from website usage</li>
                <li>Temporary website unavailability</li>
                <li>Data loss or technical interruptions</li>
                <li>Errors or inaccuracies in website content</li>
              </ul>
              <p className="privacy-alert">Users access and use the website at their own risk.</p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">08. Privacy</h2>
            <div className="privacy-section__body">
              <p>
                Your use of this website is also governed by our Privacy Policy. By using our website, you consent to the collection and use of information as outlined in the Privacy Policy.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">09. Modifications to Terms</h2>
            <div className="privacy-section__body">
              <p>
                We reserve the right to update or change these Terms & Conditions at any time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">10. Governing Law</h2>
            <div className="privacy-section__body">
              <p>
                These Terms & Conditions shall be governed and interpreted in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the appropriate courts.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section__title">11. Contact Us</h2>
            <div className="privacy-section__body">
              <p>If you have any questions regarding these Terms & Conditions, please contact us:</p>
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
          <p>By using our website, you agree to the terms outlined in this Terms & Conditions policy.</p>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;

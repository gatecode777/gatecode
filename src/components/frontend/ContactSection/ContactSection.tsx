'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    projectDetails: '',
    name: '',
    email: '',
    phone: '',
    agreePrivacy: false,
    requestNda: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const upd = (k: string, v: string | boolean) => {
    let finalVal = v;
    if (k === 'phone' && typeof v === 'string') {
      let digits = v.replace(/\D/g, '');
      if (digits.startsWith('91') && digits.length > 10) {
        digits = digits.substring(2);
      } else if (digits.startsWith('0') && digits.length > 10) {
        digits = digits.substring(1);
      }
      finalVal = digits.slice(0, 10);
    }
    setForm(f => ({ ...f, [k]: finalVal }));
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.projectDetails.trim()) e.projectDetails = 'Please describe your project or requirements';
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) e.email = 'Invalid email address';

    if (!form.phone.trim()) {
      e.phone = 'Phone number is required';
    } else {
      if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
        e.phone = 'Invalid phone number';
      }
    }

    if (!form.agreePrivacy) e.agreePrivacy = 'You must agree to the Privacy Policy';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setErrors({});
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const d = await res.json();
      if (d.success) {
        setSuccess(true);
        setForm({ projectDetails: '', name: '', email: '', phone: '', agreePrivacy: false, requestNda: false });
      } else {
        setErrors({ submit: d.message || 'Submission failed. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const errStyle: React.CSSProperties = { color: '#e53e3e', fontSize: 12, marginTop: 4, display: 'block', fontWeight: 500 };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <h2 className="contact-title">Let&apos;s Build Something Great Together</h2>
          <p className="contact-subtitle">
            Tell us about your requirements, and our team will connect with you to create the right solution for your business.
          </p>

          {success ? (
            <div style={{ padding: '32px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
              <h3 style={{ color: '#0d9488', marginBottom: 8, fontSize: 18 }}>Request Submitted!</h3>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>Thank you! Our team will contact you within 24 hours.</p>
              <button
                onClick={() => setSuccess(false)}
                className="form-submit-btn"
                style={{ maxWidth: 200, margin: '0 auto' }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">Project Details*</label>
                <textarea
                  className="form-textarea"
                  placeholder="Share your project details or business needs..."
                  value={form.projectDetails}
                  onChange={e => upd('projectDetails', e.target.value)}
                  style={errors.projectDetails ? { borderColor: '#e53e3e' } : {}}
                />
                {errors.projectDetails && <span className="field-error-msg">{errors.projectDetails}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name*</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => upd('name', e.target.value)}
                    style={errors.name ? { borderColor: '#e53e3e' } : {}}
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Business Email*</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Type your email"
                    value={form.email}
                    onChange={e => upd('email', e.target.value)}
                    style={errors.email ? { borderColor: '#e53e3e' } : {}}
                  />
                  {errors.email && <span className="field-error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number*</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter contact number"
                    value={form.phone}
                    onChange={e => upd('phone', e.target.value)}
                    maxLength={10}
                    style={errors.phone ? { borderColor: '#e53e3e' } : {}}
                  />
                  {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                </div>
                <div className="form-checkbox-group">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={form.agreePrivacy}
                      onChange={e => upd('agreePrivacy', e.target.checked)}
                    />
                    <span>I agree to the Privacy Policy</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={form.requestNda}
                      onChange={e => upd('requestNda', e.target.checked)}
                    />
                    <span>Request NDA for confidentiality</span>
                  </label>
                  {errors.agreePrivacy && <span className="field-error-msg">{errors.agreePrivacy}</span>}
                </div>
              </div>

              {errors.submit && (
                <p className="field-error-msg" style={{ fontSize: 13, marginBottom: 8 }}>{errors.submit}</p>
              )}

              <button
                type="submit"
                className="form-submit-btn"
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : 'Submit Your Request'}
              </button>
            </form>
          )}
        </div>

        <div className="contact-card">
          <h2 className="contact-title">How We Get Started</h2>
          <div className="process-list">
            <div className="process-step">
              <div className="step-header">
                <div className="step-number">1.</div>
                <div className="step-label-wrapper">
                  <div className="step-label">Step</div>
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Understanding Your Vision</h3>
                <p className="step-desc">
                  We begin by understanding your goals, challenges, and expectations to align with your business needs.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-header">
                <div className="step-number">2.</div>
                <div className="step-label-wrapper">
                  <div className="step-label">Step</div>
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Requirement Analysis</h3>
                <p className="step-desc">
                  Our experts evaluate your requirements and identify the best approach for optimal results.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-header">
                <div className="step-number">3.</div>
                <div className="step-label-wrapper">
                  <div className="step-label">Step</div>
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Strategic Planning</h3>
                <p className="step-desc">
                  We create a clear, structured plan with timelines, technologies, and execution strategy.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-header">
                <div className="step-number">4.</div>
                <div className="step-label-wrapper">
                  <div className="step-label">Step</div>
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Execution &amp; Delivery</h3>
                <p className="step-desc">
                  Our team delivers high-quality solutions while ensuring performance, accuracy, and timely completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
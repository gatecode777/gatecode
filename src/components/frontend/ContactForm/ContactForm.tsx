// @ts-nocheck
'use client';

import {  useState  } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name] : value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required';
    if (!formData.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrors({});

    try {
      const res = await fetch('/api/company-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setErrors({ submit: data.message || 'Submission failed. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const errStyle = { color: '#e53e3e', fontSize: 12, marginTop: 4, display: 'block', fontWeight: 500 };

  return (
    <div className="contact-form-col">
      <div className="form-container">
        <div className="form-header">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        {success ? (
          <div className="form-success">
            <FiCheckCircle className="form-success__icon" />
            <h3 className="form-success__title">Message Sent!</h3>
            <p className="form-success__text">Thank you! Your message has been submitted successfully.</p>
          </div>
        ) : (
        <form className="main-contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName"
                name="firstName"
                placeholder=" Enter FirstName" 
                value={formData.firstName}
                onChange={handleChange}
                style={errors.firstName ? { borderColor: '#e53e3e' } : {}}
                required 
              />
              {errors.firstName && <span style={errStyle}>{errors.firstName}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName"
                name="lastName"
                placeholder="Enter LastName" 
                value={formData.lastName}
                onChange={handleChange}
                style={errors.lastName ? { borderColor: '#e53e3e' } : {}}
                required 
              />
              {errors.lastName && <span style={errStyle}>{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="youremail@example.com" 
                value={formData.email}
                onChange={handleChange}
                style={errors.email ? { borderColor: '#e53e3e' } : {}}
                required 
              />
              {errors.email && <span style={errStyle}>{errors.email}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                placeholder="+91 00000 00000" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <select 
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={errors.subject ? { borderColor: '#e53e3e' } : {}}
              required
            >
              <option value="">Select a Subject</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="marketing">Digital Marketing</option>
              <option value="consultancy">Business Consultancy</option>
              <option value="other">Other Inquiry</option>
            </select>
            {errors.subject && <span style={errStyle}>{errors.subject}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message"
              placeholder="Tell us about your project..." 
              rows="6" 
              value={formData.message}
              onChange={handleChange}
              style={errors.message ? { borderColor: '#e53e3e' } : {}}
              required
            ></textarea>
            {errors.message && <span style={errStyle}>{errors.message}</span>}
          </div>

          {errors.submit && <p style={{ ...errStyle, fontSize: 13, marginBottom: 8 }}>{errors.submit}</p>}

          <button type="submit" className="contact-submit-btn" disabled={submitting}>
            <span>{submitting ? 'Sending...' : 'Send Message'}</span>
            {!submitting && <FiSend />}
          </button>
        </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

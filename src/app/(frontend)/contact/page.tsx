"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

import '@/components/frontend/Contact.css';
import '@/components/frontend/ContactForm.css';
import '@/components/frontend/ContactInfo.css';

// ==================== ContactInfo Component ====================
const InfoCard = ({ icon, title, details }: { icon: React.ReactNode; title: string; details: string[] }) => (
  <div className="info-card">
    <div className="info-icon-wrapper">{icon}</div>
    <div className="info-details">
      <h3>{title}</h3>
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  </div>
);

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FiPhone />,
      title: 'Call Us',
      details: ['+91 8502888838', '+91 8502888839']
    },
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['info@gatecode.in', 'support@gatecode.in']
    },
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      details: ['412, Sumer Nagar, Mansarovar.', 'Jaipur, India']
    },
    {
      icon: <FiClock />,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM']
    }
  ];

  const socials = [
    { icon: <FaLinkedinIn />, link: '#' },
    { icon: <BsTwitterX />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaYoutube />, link: '#' }
  ];

  return (
    <div className="contact-info-col">
      <div className="info-card-grid">
        {contactDetails.map((item, index) => (
          <InfoCard key={index} {...item} />
        ))}
      </div>

      <div className="social-connect">
        <h3 style={{ color: '#ffffff' }}>Connect With Us</h3>
        <div className="social-links">
          {socials.map((social, index) => (
            <a key={index} href={social.link} className="social-btn" target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== ContactForm Component ===============
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      let digits = value.replace(/\D/g, '');
      if (digits.startsWith('91') && digits.length > 10) {
        digits = digits.substring(2);
      } else if (digits.startsWith('0') && digits.length > 10) {
        digits = digits.substring(1);
      }
      value = digits.slice(0, 10);
    }
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone.trim()) {
      if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
        setErrors(prev => ({ ...prev, phone: 'Invalid phone number' }));
      }
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) nextErrors.email = 'Invalid email address';

    if (formData.phone.trim()) {
      if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
        nextErrors.phone = 'Invalid phone number';
      }
    }

    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required';
    if (!formData.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/company-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

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

  const errStyle: React.CSSProperties = { color: '#e53e3e', fontSize: 12, marginTop: 4, display: 'block', fontWeight: 500 };

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
                  placeholder="Enter FirstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={errors.firstName ? { borderColor: '#e53e3e' } : {}}
                  required
                />
                {errors.firstName && <span className="field-error-msg">{errors.firstName}</span>}
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
                {errors.lastName && <span className="field-error-msg">{errors.lastName}</span>}
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
                {errors.email && <span className="field-error-msg">{errors.email}</span>}
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter contact number"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handlePhoneBlur}
                  maxLength={10}
                  style={errors.phone ? { borderColor: '#e53e3e' } : {}}
                />
                {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
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
              {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                style={errors.message ? { borderColor: '#e53e3e' } : {}}
                required
              ></textarea>
              {errors.message && <span className="field-error-msg">{errors.message}</span>}
            </div>

            {errors.submit && <p className="field-error-msg" style={{ fontSize: 13, marginBottom: 8 }}>{errors.submit}</p>}

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

// ==================== SeoContentSection Component ====================
const SeoContentSection = () => {
    return (
        <section className="dm-seo-content-section" style={{ backgroundColor: '#ffffff', padding: '60px 20px', borderTop: '1px solid #eaeaea', boxSizing: 'border-box', width: '100%' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', width: '100%' }}>
                <div style={{ width: '100%', color: '#333333', lineHeight: '1.8' }}>
                    
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'left' }}>
                        Contact Gatecode Technologies — IT Software Company in Jaipur, India
                    </h2>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '24px' }}>
                        Ready to start your next software project or <strong>hire software developers contact</strong> specialists? <strong>Gatecode Technologies Pvt Ltd</strong> is a premier <strong>contact IT company in India</strong> providing technical consultations, custom project estimates, and full-stack software development services.
                    </p>

                    <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginTop: '30px', marginBottom: '14px' }}>
                        Get a Custom Software Project Estimate & Technical Consultation
                    </h3>
                    
                    <p style={{ fontSize: '16px', color: '#555555', marginBottom: '20px' }}>
                        Send us your project scope via the form above or visit our corporate office at the <strong>Gatecode Technologies Jaipur office address</strong>. Our engineering leads evaluate your requirements and provide a free <strong>custom software project estimate</strong> within 24 business hours.
                    </p>

                    {/* Key Feature Highlight Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Direct Phone & Sales Line</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Speak with our consultants directly via <strong>Gatecode Technologies phone number</strong> at +91 8502888838 for urgent inquiries.
                            </p>
                        </div>
                        
                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Email Support & RFPs</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Submit your detailed project documentation to <strong>Gatecode Technologies email</strong> at info@gatecode.in.
                            </p>
                        </div>

                        <div style={{ padding: '24px', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid #4e7c7e' }}>
                            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>Office Location</h4>
                            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>
                                Located at 412, Sumer Nagar, Mansarovar, Jaipur, India. Schedule an in-person meeting with our team.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// ==================== Main Contact Page Component ====================
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/McNsbMEo8EvS4npw5', '_blank');
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gatecode Technologies Pvt. Ltd.',
    image: 'https://gatecode.in/images/logo.webp',
    '@id': 'https://gatecode.in/#organization',
    url: 'https://gatecode.in',
    telephone: '+918502888838',
    email: 'info@gatecode.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '412, Sumer Nagar, Mansarovar',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302020',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8524,
      longitude: 75.7656,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How fast can I get a custom software project estimate from Gatecode Technologies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our engineering leads review all project inquiries and provide a detailed estimate and proposal within 24 business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I schedule a video call with Gatecode Technologies engineers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! After submitting your contact inquiry, our team schedules a 1-on-1 Zoom or Google Meet technical discovery call.',
        },
      },
    ],
  };

  return (
    <div className="contact-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="contact-hero">
        <div className="contact-hero__container">
          <h1 className="contact-hero__title">Get In Touch</h1>
          <p className="contact-hero__subtitle">
            Have a project in mind or just want to say hello? We'd love to hear from you.
            Our team is ready to help you navigate your digital transformation.
          </p>
        </div>
      </section>

      <div className="contact-content-wrapper">
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <SeoContentSection />

      <section className="map-section">
        <div className="map-overlay">
          <div className="map-info">
            <h3>Find Us On Google Maps</h3>
            <button className="view-map-btn" onClick={handleGetDirections}>
              Get Directions
            </button>
          </div>
        </div>
        <Image
          src="/images/contact-map-bg.webp"
          alt="Map Placeholder"
          className="map-placeholder-img"
          width={2000}
          height={600}
          priority
        />
      </section>
    </div>
  );
};

export default ContactPage;

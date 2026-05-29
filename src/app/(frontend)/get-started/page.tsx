// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './GetStarted.css';

const stepsData = [
  {
    num: '01',
    title: 'Share Your Requirements',
    desc: 'Tell us about your project vision, business goals, and expectations. The more detail you provide, the better we can tailor a solution that truly fits your needs.',
  },
  {
    num: '02',
    title: 'Consultation & Strategy',
    desc: 'Our experts analyze your requirements in depth and craft a strategic approach — recommending the best technologies, timelines, and team structures for your goals.',
  },
  {
    num: '03',
    title: 'Proposal & Planning',
    desc: 'You receive a transparent proposal covering full scope, phased milestones, cost estimation, and a realistic delivery timeline — no surprises.',
  },
  {
    num: '04',
    title: 'Design & Development',
    desc: 'Our team gets to work with regular updates, sprint reviews, and continuous feedback loops so you are always in the loop and in control.',
  },
  {
    num: '05',
    title: 'Delivery & Launch',
    desc: 'We deliver the final product with thorough QA, performance testing, and a smooth go-live process backed by our full support.',
  },
  {
    num: '06',
    title: 'Ongoing Support & Growth',
    desc: 'Post-launch, we continue optimizing, scaling, and supporting your product — because great partnerships don\'t end at delivery.',
  },
];

const servicesData = [
  'Website Development',
  'Mobile App Development',
  'Custom Software Solutions',
  'UI/UX Design',
  'Graphic & Brand Design',
  'Digital Marketing',
  'Branding & Promotion',
  'Data Management & BPO',
];

const GetStartedPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({
    projectDetails: '',
    name: '',
    email: '',
    phone: '',
    agreePrivacy: false,
    requestNda: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleStep = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const updateForm = (key, value) => {
    let finalVal = value;
    if (key === 'phone' && typeof value === 'string') {
      let digits = value.replace(/\D/g, '');
      if (digits.startsWith('91') && digits.length > 10) {
        digits = digits.substring(2);
      } else if (digits.startsWith('0') && digits.length > 10) {
        digits = digits.substring(1);
      }
      finalVal = digits.slice(0, 10);
    }
    setForm(prev => ({ ...prev, [key]: finalVal }));
    if (errors[key]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!form.projectDetails.trim()) nextErrors.projectDetails = 'Please describe your project or requirements';
    if (!form.name.trim()) nextErrors.name = 'Full name is required';
    if (!form.email.trim()) nextErrors.email = 'Business email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) nextErrors.email = 'Invalid email address';

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    } else {
      if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
        nextErrors.phone = 'Invalid phone number';
      }
    }

    if (!form.agreePrivacy) nextErrors.agreePrivacy = 'You must agree to the Privacy Policy';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setForm({
          projectDetails: '',
          name: '',
          email: '',
          phone: '',
          agreePrivacy: false,
          requestNda: false,
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

  const errorStyle = { color: '#e53e3e', fontSize: 12, marginTop: 6, display: 'block', fontWeight: 500 };

  return (
    <div className="get-started-page">

      <section className="gs-hero gs-section">
        <div className="gs-hero__bg" style={{ background: 'url("/images/Hero_img.jpg") center/cover no-repeat' }} />
        <div className="gs-hero__overlay" />

        <div className="gs-hero__content">
          <h1 className="gs-hero__title">LET'S GET STARTED</h1>

          <p className="gs-hero__sub">
            Share your ideas with us, and we'll turn them into powerful digital
            solutions tailored to your business goals.
          </p>

          <Link href="/contact" className="gs-btn">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="gs-intro gs-section">
        <div className="gs-intro__label">
          <span>Our Approach</span>
        </div>
        <p className="gs-intro__text">
          At <strong>Gatecode Technologies Pvt. Ltd.</strong>, we make it effortless to begin your journey
          with us. Whether you're looking to build a website, develop software, design your brand,
          or grow your digital presence — our team is here to guide you at every step, with clarity
          and craftsmanship at the core.
        </p>
      </section>

      <section className="gs-how gs-section">
        <div className="gs-how__inner">

          <div className="gs-how__heading-wrap">
            <p className="gs-how__eyebrow">Process</p>
            <h2 className="gs-how__title">
              How It<br />
              <span className="gs-how__title-line">Works</span>
            </h2>
            <p className="gs-how__subtitle">
              A clear, structured process designed to take your idea from concept to launch — transparently, efficiently, and on your terms.
            </p>
          </div>

          <div className="gs-steps">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={`gs-step${activeIndex === index ? ' is-active' : ''}`}
                onClick={() => toggleStep(index)}
              >
                <div className="gs-step__head">
                  <div className="gs-step__num">{step.num}</div>
                  <h3 className="gs-step__title">{step.title}</h3>
                  <div className="gs-step__toggle">+</div>
                </div>
                {activeIndex === index && (
                  <p className="gs-step__body">{step.desc}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="gs-contact gs-section" id="start-form">
        <div className="gs-contact__inner">

          <form className="gs-form-card" onSubmit={handleSubmit} noValidate>
            <p className="gs-section-label">Get In Touch</p>
            <h2 className="gs-form-card__title">Let's Build Something<br />Great Together</h2>
            <p className="gs-form-card__sub">
              Tell us about your project and our team will connect with you to create the perfect solution.
            </p>

            {success && (
              <p style={{ color: '#0d9488', fontSize: 14, marginBottom: 18, fontWeight: 600 }}>
                Thank you! Your request has been submitted successfully.
              </p>
            )}

            <div className="gs-field">
              <label className="gs-textarea-label">Project Details *</label>
              <textarea
                className="gs-textarea"
                placeholder="Describe your project, goals, and any specific requirements..."
                value={form.projectDetails}
                onChange={event => updateForm('projectDetails', event.target.value)}
                style={errors.projectDetails ? { borderColor: '#e53e3e' } : {}}
              />
              {errors.projectDetails && <span className="field-error-msg">{errors.projectDetails}</span>}
            </div>

            <div className="gs-row">
              <div className="gs-field">
                <label>Full Name *</label>
                <input
                  className="gs-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={event => updateForm('name', event.target.value)}
                  style={errors.name ? { borderColor: '#e53e3e' } : {}}
                />
                {errors.name && <span className="field-error-msg">{errors.name}</span>}
              </div>
              <div className="gs-field">
                <label>Business Email *</label>
                <input
                  className="gs-input"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={event => updateForm('email', event.target.value)}
                  style={errors.email ? { borderColor: '#e53e3e' } : {}}
                />
                {errors.email && <span className="field-error-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="gs-row">
              <div className="gs-field">
                <label>Phone Number *</label>
                <input
                  className="gs-input"
                  type="text"
                  placeholder="Enter contact number"
                  value={form.phone}
                  onChange={event => updateForm('phone', event.target.value)}
                  maxLength={10}
                  style={errors.phone ? { borderColor: '#e53e3e' } : {}}
                />
                {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
              </div>
              <div className="gs-checks">
                <label className="gs-check-label">
                  <input
                    type="checkbox"
                    checked={form.agreePrivacy}
                    onChange={event => updateForm('agreePrivacy', event.target.checked)}
                  /> I agree to the Privacy Policy
                </label>
                <label className="gs-check-label">
                  <input
                    type="checkbox"
                    checked={form.requestNda}
                    onChange={event => updateForm('requestNda', event.target.checked)}
                  /> Request NDA for confidentiality
                </label>
                {errors.agreePrivacy && <span className="field-error-msg">{errors.agreePrivacy}</span>}
              </div>
            </div>

            {errors.submit && <p className="field-error-msg" style={{ fontSize: 13, marginBottom: 8 }}>{errors.submit}</p>}

            <button className="gs-submit" type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Request'}
              {!submitting && <span>→</span>}
            </button>
          </form>

          <div className="gs-sidebar">
            <p className="gs-section-label">Services</p>
            <h3 className="gs-sidebar__title">What You Can<br />Start With</h3>

            <ul className="gs-services">
              {servicesData.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>

            <div className="gs-img-card">
              <img src="/images/Start_img.jpg" alt="Start your project" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GetStartedPage;

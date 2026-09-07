// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './GetStarted.css';

const stepsData = [
  {
    num: '01',
    title: 'Share Your Requirements',
    desc: 'Tell us about your custom software development vision, business goals, and tech stack expectations. The more detail you provide when you share software requirements, the better we can tailor a high-performance solution for your enterprise.',
  },
  {
    num: '02',
    title: 'Consultation & Strategy',
    desc: 'Our expert software architects analyze your requirements in depth to craft a strategic digital transformation roadmap — recommending the best cloud architectures, web development frameworks, and engineering team structures.',
  },
  {
    num: '03',
    title: 'Proposal & Planning',
    desc: 'You receive a transparent custom software project estimate covering clear milestone deliverables, sprint schedules, cost breakdown, and delivery timelines — zero hidden fees.',
  },
  {
    num: '04',
    title: 'Design & Development',
    desc: 'Our dedicated IT engineering team builds your product using agile two-week sprints, continuous staging previews, and regular code reviews to ensure maximum transparency.',
  },
  {
    num: '05',
    title: 'Delivery & Launch',
    desc: 'We launch your web or mobile application with automated QA testing, security audits, and zero-downtime deployment backed by full technical documentation.',
  },
  {
    num: '06',
    title: 'Ongoing Support & Growth',
    desc: 'Post-launch, our IT company in India provides continuous cloud monitoring, SLA maintenance, and product scaling — because long-term partnerships drive business growth.',
  },
];

const servicesData = [
  'Custom Software Development',
  'Website Development & Next.js',
  'Mobile App Development (iOS & Android)',
  'UI/UX Design & Prototyping',
  'Graphic & Brand Identity Design',
  'Digital Marketing & Performance SEO',
  'Data Management & BPO Services',
  'Accounting & Financial Support',
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

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Started with Gatecode Technologies for Software Development',
    description: 'Step-by-step process to kickstart custom web engineering, mobile app development, and digital transformation with Gatecode Technologies.',
    step: stepsData.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I start a custom software project with Gatecode Technologies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply fill out the Get Started project form with your software requirements. Our technical leads will analyze your scope and contact you within 24 business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Gatecode Technologies sign a non-disclosure agreement (NDA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide strict NDAs upon request to protect your proprietary business ideas and intellectual property before discussing technical details.',
        },
      },
    ],
  };

  return (
    <div className="get-started-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="gs-hero gs-section">
        <div className="gs-hero__bg" style={{ background: 'url("/images/Hero_img.webp") center top/cover no-repeat' }} />
        <div className="gs-hero__overlay" />

        <div className="gs-hero__content">
          <h1 className="gs-hero__title">LET'S GET STARTED</h1>

          <p className="gs-hero__sub">
            Share your custom software engineering and web development ideas with us, and we'll turn them into powerful digital solutions tailored to your business goals.
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
          At <strong>Gatecode Technologies Pvt. Ltd.</strong>, we make it effortless to start your digital transformation journey with us. Whether you're looking to hire software developers, build a custom web application, design your brand, or scale your business operations — our top IT company team is here to guide you at every step.
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
              A clear, structured agile software development process designed to take your idea from concept to launch — transparently, efficiently, and on your terms.
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
              Tell us about your software project or web application requirements and our engineering leads will connect with you to create the perfect solution.
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
              <img src="/images/Start_img.webp" alt="Start your software project" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GetStartedPage;


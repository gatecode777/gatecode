'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface ProjectInquiryFormProps {
  buttonBg?: string;
}

// ─── Inline style objects for layout-critical rules ───────────────────────────
const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '12px',
  padding: '36px 32px',
  boxShadow: '0 8px 24px rgba(15, 185, 177, 0.12)',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  height: '100%',
  boxSizing: 'border-box',
  fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif",
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 800,
  color: '#0f172a',
  marginBottom: '8px',
  lineHeight: 1.3,
  letterSpacing: '-0.01em',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '15px',
  color: '#475569',
  marginBottom: '24px',
  lineHeight: 1.5,
};

const errorStyle: React.CSSProperties = {
  background: '#fef2f2',
  border: '1px solid #fecaca',
  color: '#dc2626',
  fontSize: '13px',
  padding: '10px 14px',
  borderRadius: '8px',
  marginBottom: '16px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
};

const fieldGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  width: '100%',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: '#0f172a',
  lineHeight: 1.4,
  letterSpacing: '0.01em',
};

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: '46px',
  padding: '0 14px',
  border: '1.5px solid #cbd5e1',
  borderRadius: '8px',
  fontSize: '14px',
  fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif",
  color: '#0f172a',
  backgroundColor: '#f8fafc',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  paddingRight: '40px',
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
};

const focusStyle: React.CSSProperties = {
  border: '1.5px solid #0fb9b1',
  boxShadow: '0 0 0 3px rgba(15, 185, 177, 0.15)',
  backgroundColor: '#ffffff',
};

// ─────────────────────────────────────────────────────────────────────────────

export default function ProjectInquiryForm({
  buttonBg = '#0fb9b1',
}: ProjectInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    budget: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) { setErrorMsg('Please enter your name'); return; }
    if (!formData.phone.trim()) { setErrorMsg('Please enter your phone number'); return; }
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) { setErrorMsg('Enter a valid 10-digit mobile number starting with 6–9'); return; }
    if (!formData.email.trim()) { setErrorMsg('Please enter your business email'); return; }
    if (!formData.requirement) { setErrorMsg('Please select what you need'); return; }
    if (!formData.budget) { setErrorMsg('Please select your budget range'); return; }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/client-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          requirement: formData.requirement,
          budget: formData.budget,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setErrorMsg('Failed to submit form. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  const getInputStyle = (fieldName: string): React.CSSProperties => ({
    ...inputStyle,
    ...(focusedField === fieldName ? focusStyle : {}),
  });

  const getSelectStyle = (fieldName: string): React.CSSProperties => ({
    ...selectStyle,
    ...(focusedField === fieldName ? focusStyle : {}),
  });

  if (submitted) {
    return (
      <div style={{ ...cardStyle, alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px 24px' }}>
        <CheckCircle size={48} style={{ color: '#10b981', marginBottom: '16px' }} />
        <h3 style={{ ...titleStyle, marginBottom: '10px' }}>Thank You!</h3>
        <p style={{ ...subtitleStyle, marginBottom: '24px' }}>Your inquiry has been received. Our team will get back to you shortly.</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', requirement: '', budget: '' });
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            height: '48px',
            padding: '0 24px',
            background: buttonBg,
            border: 'none',
            borderRadius: '8px',
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
          }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>Get a Project Estimate</h3>
      <p style={subtitleStyle}>Fill out the details below and we&apos;ll get back to you promptly.</p>

      {errorMsg && <div style={errorStyle}>{errorMsg}</div>}

      <form onSubmit={handleSubmit} style={formStyle} noValidate>

        {/* 1. Name */}
        <div style={fieldGroupStyle}>
          <label htmlFor="inquiry-name" style={labelStyle}>
            Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="inquiry-name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            style={getInputStyle('name')}
          />
        </div>

        {/* 2. Phone */}
        <div style={fieldGroupStyle}>
          <label htmlFor="inquiry-phone" style={labelStyle}>
            Phone <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="inquiry-phone"
            type="tel"
            name="phone"
            placeholder="10-digit mobile number"
            value={formData.phone}
            inputMode="numeric"
            maxLength={10}
            onKeyDown={e => {
              // If the field is empty, block keys 0-5 as the first digit
              if (formData.phone.length === 0 && /^[012345]$/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={e => {
              const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
              setFormData(prev => ({ ...prev, phone: digits }));
              if (errorMsg) setErrorMsg('');
            }}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            required
            style={getInputStyle('phone')}
          />
        </div>

        {/* 3. Business Email */}
        <div style={fieldGroupStyle}>
          <label htmlFor="inquiry-email" style={labelStyle}>
            Business Email <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="inquiry-email"
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            style={getInputStyle('email')}
          />
        </div>

        {/* 4. What do you need? */}
        <div style={fieldGroupStyle}>
          <label htmlFor="inquiry-requirement" style={labelStyle}>
            What do you need? <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="inquiry-requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            onFocus={() => setFocusedField('requirement')}
            onBlur={() => setFocusedField(null)}
            required
            style={getSelectStyle('requirement')}
          >
            <option value="" disabled>Select requirement...</option>
            <option value="New Website">New Website</option>
            <option value="eCommerce Store">eCommerce Store</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Web Application">Web Application</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>

        {/* 5. Budget range */}
        <div style={fieldGroupStyle}>
          <label htmlFor="inquiry-budget" style={labelStyle}>
            Budget range <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="inquiry-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            onFocus={() => setFocusedField('budget')}
            onBlur={() => setFocusedField(null)}
            required
            style={getSelectStyle('budget')}
          >
            <option value="" disabled>Select budget range...</option>
            <option value="Under ₹50k">Under ₹50k</option>
            <option value="₹50k–₹1.5L">₹50k–₹1.5L</option>
            <option value="₹1.5L–₹5L">₹1.5L–₹5L</option>
            <option value="₹5L+">₹5L+</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
            height: '48px',
            padding: '0 24px',
            background: submitting ? '#94a3b8' : buttonBg,
            border: 'none',
            borderRadius: '8px',
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            cursor: submitting ? 'not-allowed' : 'pointer',
            marginTop: '8px',
            boxShadow: '0 4px 14px rgba(15, 185, 177, 0.25)',
            transition: 'opacity 0.2s ease, transform 0.15s ease',
            letterSpacing: '0.01em',
          }}
        >
          {submitting ? (
            <>
              <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Submitting...
            </>
          ) : (
            <>
              <Send size={18} /> Submit Requirement
            </>
          )}
        </button>
      </form>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// @ts-nocheck
'use client';

import { useState } from 'react';
import './ApplicationForm.css';

const IconUser = () => (
  <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.41 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.55-.55a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" /></svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" /></svg>
);
const IconPaperclip = () => (
  <svg viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
);
const IconSend = () => (
  <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
);

const POSITIONS = {
  job: [
    { value: 'frontend', label: 'Frontend Developer' },
    { value: 'backend', label: 'Backend Developer' },
    { value: 'fullstack', label: 'Full Stack Developer' },
    { value: 'uiux', label: 'UI/UX Designer' },
    { value: 'marketing', label: 'Digital Marketing Executive' },
    { value: 'data-entry', label: 'Data Entry Operator' },
    { value: 'bpo', label: 'BPO Executive' },
    { value: 'accounting', label: 'Accounting Executive' },
    { value: 'graphic', label: 'Graphic Designer' },
  ],
  internship: [
    { value: 'frontend-intern', label: 'Frontend Development Intern' },
    { value: 'backend-intern', label: 'Backend Development Intern' },
    { value: 'uiux-intern', label: 'UI/UX Design Intern' },
    { value: 'marketing-intern', label: 'Digital Marketing Intern' },
    { value: 'graphic-intern', label: 'Graphic Design Intern' },
    { value: 'data-entry-intern', label: 'Data Entry Intern' },
    { value: 'hr-intern', label: 'HR Intern' },
  ],
};

const errStyle = {
  color: '#e53e3e',
  fontSize: 11,
  marginTop: 3,
  display: 'block',
  fontWeight: 500,
};

export default function ApplicationForm() {
  const [activeTab, setActiveTab] = useState('job');
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', position: '' });
  const [fileName, setFileName] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const upd = (k, v) => {
    if (k === 'phone') {
      let digits = v.replace(/\D/g, '');
      if (digits.startsWith('91') && digits.length > 10) {
        digits = digits.substring(2);
      } else if (digits.startsWith('0') && digits.length > 10) {
        digits = digits.substring(1);
      }
      v = digits.slice(0, 10);
    }
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  const handlePhoneBlur = () => {
    if (form.phone.trim()) {
      if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
        setErrors(prev => ({ ...prev, phone: 'Invalid phone number' }));
      }
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setForm(f => ({ ...f, position: '' })); // reset position when tab changes
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size limit: 5MB = 5 * 1024 * 1024 bytes
    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, resume: 'Please upload a resume smaller than 5MB.' }));
      setResumeFile(null);
      setFileName('');
      e.target.value = '';
      return;
    }

    setResumeFile(file);
    setFileName(file.name);
    if (errors.resume) setErrors(e => { const n = { ...e }; delete n.resume; return n; });
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) e.email = 'Invalid email address';

    if (!form.phone.trim()) {
      e.phone = 'Phone number is required';
    } else {
      if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
        e.phone = 'Invalid phone number';
      }
    }

    if (!form.position) e.position = 'Please select a position';
    
    if (!resumeFile) {
      e.resume = 'Please attach your resume';
    } else if (resumeFile.size > 5 * 1024 * 1024) {
      e.resume = 'Please upload a resume smaller than 5MB';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrors({});

    try {
      // Step 1: upload resume file
      setUploading(true);
      const fd = new FormData();
      fd.append('file', resumeFile);
      fd.append('category', 'resumes'); // Specify resumes category to bypass auth check

      const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      
      // Handle potential raw 413 Payload Too Large error from web servers (Nginx/Vercel)
      if (uploadRes.status === 413) {
        setErrors({ submit: 'File is too large. Please upload a resume smaller than 5MB.' });
        setSubmitting(false);
        setUploading(false);
        return;
      }

      if (!uploadRes.ok) {
        let errMsg = 'Failed to upload resume. Please try again.';
        try {
          const errData = await uploadRes.json();
          if (errData && errData.message) {
            errMsg = errData.message;
          }
        } catch (_) {}
        setErrors({ submit: errMsg });
        setSubmitting(false);
        setUploading(false);
        return;
      }

      const uploadData = await uploadRes.json();
      setUploading(false);

      if (!uploadData.success) {
        setErrors({ submit: uploadData.message || 'Failed to upload resume. Please try again.' });
        setSubmitting(false);
        return;
      }

      // Step 2: submit application
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applicationType: activeTab,
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          position: form.position,
          resumeUrl: uploadData.data.url,
          resumeOriginalName: resumeFile.name,
        }),
      });
      const d = await res.json();

      if (d.success) {
        setSuccess(true);
        setForm({ fullName: '', email: '', phone: '', position: '' });
        setFileName('');
        setResumeFile(null);
      } else {
        setErrors({ submit: d.message || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      console.error('Application submit error:', err);
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
      setUploading(false);
    }
  };

  if (success) {
    return (
      <section className="application">
        <div className="application-card" style={{ textAlign: 'center', padding: '52px 40px' }}>
          <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
          <h3 style={{ color: '#0d9488', marginBottom: 8, fontSize: 20 }}>Application Submitted!</h3>
          <p style={{ color: '#666', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>
            Thank you for applying! Our HR team will review your application and get back to you soon.
          </p>
          <button
            className="submit-btn"
            onClick={() => setSuccess(false)}
            style={{ maxWidth: 220, margin: '0 auto' }}
          >
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="application" id="apply-form">
      <div className="application-card">

        <div className="application-tabs">
          <button
            className={`tab-btn ${activeTab === 'job' ? 'active' : ''}`}
            onClick={() => handleTabChange('job')}
            type="button"
          >
            For Job
          </button>
          <button
            className={`tab-btn ${activeTab === 'internship' ? 'active' : ''}`}
            onClick={() => handleTabChange('internship')}
            type="button"
          >
            For Internship
          </button>
        </div>

        <form className="application-form" onSubmit={handleSubmit} noValidate>

          {/* Full Name */}
          <div>
            <div className="input-group" style={errors.fullName ? { borderColor: '#e53e3e' } : {}}>
              <span className="input-icon"><IconUser /></span>
              <input
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={e => upd('fullName', e.target.value)}
              />
            </div>
            {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
          </div>

          {/* Email + Phone */}
          <div className="app-form-row">
            <div>
              <div className="input-group" style={errors.email ? { borderColor: '#e53e3e' } : {}}>
                <span className="input-icon"><IconMail /></span>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => upd('email', e.target.value)}
                />
              </div>
              {errors.email && <span className="field-error-msg">{errors.email}</span>}
            </div>
            <div>
              <div className="input-group" style={errors.phone ? { borderColor: '#e53e3e' } : {}}>
                <span className="input-icon"><IconPhone /></span>
                <input
                  type="text"
                  placeholder="Contact Number"
                  value={form.phone}
                  onChange={e => upd('phone', e.target.value)}
                  onBlur={handlePhoneBlur}
                  maxLength={10}
                />
              </div>
              {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
            </div>
          </div>

          {/* Position */}
          <div>
            <div className="input-group" style={errors.position ? { borderColor: '#e53e3e' } : {}}>
              <span className="input-icon"><IconBriefcase /></span>
              <select
                className="form-select"
                value={form.position}
                onChange={e => upd('position', e.target.value)}
              >
                <option value="" disabled>Position Applied For</option>
                {POSITIONS[activeTab].map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
            {errors.position && <span className="field-error-msg">{errors.position}</span>}
          </div>

          {/* Resume */}
          <div>
            <div className="file-input-wrapper" style={errors.resume ? { borderColor: '#e53e3e' } : {}}>
              <span className="input-icon"><IconPaperclip /></span>
              <label className={`file-input-label ${fileName ? 'has-file' : ''}`}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                {fileName || 'Attach Resume (.pdf, .doc, .docx)'}
              </label>
            </div>
            {errors.resume && <span className="field-error-msg">{errors.resume}</span>}
          </div>

          {/* Submit error */}
          {errors.submit && (
            <span className="field-error-msg" style={{ fontSize: 13, marginBottom: 12 }}>{errors.submit}</span>
          )}

          <button type="submit" className="submit-btn" disabled={submitting}>
            {uploading ? 'Uploading Resume…' : submitting ? 'Submitting…' : 'SUBMIT DETAILS'}
            {!submitting && <IconSend />}
          </button>

        </form>
      </div>
    </section>
  );
}
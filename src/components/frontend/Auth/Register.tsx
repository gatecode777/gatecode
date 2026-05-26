// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiEye, FiEyeOff, FiArrowLeft, FiUser, FiPhone, FiMail, FiLock } from 'react-icons/fi';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const upd = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';

    if (!form.phone.trim()) {
      e.phone = 'Phone number is required';
    } else {
      const cleanPhone = form.phone.replace(/[-\s()]+/g, '');
      if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
        e.phone = 'Invalid phone number';
      }
    }

    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      e.email = 'Invalid email address';
    }

    if (!form.password) {
      e.password = 'Password is required';
    } else if (form.password.length < 6) {
      e.password = 'Password must be at least 6 characters';
    }

    if (form.password !== form.confirmPassword) {
      e.confirmPassword = 'Passwords do not match';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Registration attempt', form);
  };

  const errStyle = { color: '#e53e3e', fontSize: 11, marginTop: -4, marginBottom: 12, display: 'block', fontWeight: 500, alignSelf: 'flex-start', paddingLeft: 12 };

  return (
    <div className="register-container">
      <button className="back-button" onClick={() => router.push('/')}>
        <FiArrowLeft /> Back
      </button>

      <div className="register-card">
        <h1 className="register-title">REGISTRATION</h1>

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group" style={errors.fullName ? { borderColor: '#e53e3e' } : {}}>
            <FiUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              value={form.fullName}
              onChange={e => upd('fullName', e.target.value)}
              required
            />
          </div>
          {errors.fullName && <span style={errStyle}>{errors.fullName}</span>}

          <div className="input-group" style={errors.phone ? { borderColor: '#e53e3e' } : {}}>
            <FiPhone className="input-icon" />
            <input
              type="tel"
              placeholder="Contact Number"
              className="input-field"
              value={form.phone}
              onChange={e => upd('phone', e.target.value)}
              required
            />
          </div>
          {errors.phone && <span style={errStyle}>{errors.phone}</span>}

          <div className="input-group" style={errors.email ? { borderColor: '#e53e3e' } : {}}>
            <FiMail className="input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
              value={form.email}
              onChange={e => upd('email', e.target.value)}
              required
            />
          </div>
          {errors.email && <span style={errStyle}>{errors.email}</span>}

          <div className="input-group" style={errors.password ? { borderColor: '#e53e3e' } : {}}>
            <FiLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              value={form.password}
              onChange={e => upd('password', e.target.value)}
              required
            />
            <div className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {errors.password && <span style={errStyle}>{errors.password}</span>}

          <div className="input-group" style={errors.confirmPassword ? { borderColor: '#e53e3e' } : {}}>
            <FiLock className="input-icon" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input-field"
              value={form.confirmPassword}
              onChange={e => upd('confirmPassword', e.target.value)}
              required
            />
            <div className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {errors.confirmPassword && <span style={errStyle}>{errors.confirmPassword}</span>}

          <p className="agreement-text">
            By signing below, you agree to the <a href="#">terms of use</a> and <a href="#">privacy notice</a>
          </p>

          <button type="submit" className="register-button">Log in</button>
        </form>

        <p className="login-prompt">
          Already have an account? <a href="#" onClick={() => router.push('/login')}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

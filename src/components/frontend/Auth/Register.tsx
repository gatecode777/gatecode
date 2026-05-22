// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import {  useState  } from 'react';
import { FiEye, FiEyeOff, FiArrowLeft, FiUser, FiPhone, FiMail, FiLock } from 'react-icons/fi';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt');
  };

  return (
    <div className="register-container">
      <button className="back-button" onClick={() => router.push('/')}>
        <FiArrowLeft /> Back
      </button>

      <div className="register-card">
        <h1 className="register-title">REGISTRATION</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FiUser className="input-icon" />
            <input type="text" placeholder="Full Name" className="input-field" required />
          </div>

          <div className="input-group">
            <FiPhone className="input-icon" />
            <input type="tel" placeholder="Contact Number" className="input-field" required />
          </div>

          <div className="input-group">
            <FiMail className="input-icon" />
            <input type="email" placeholder="Email Address" className="input-field" required />
          </div>

          <div className="input-group">
            <FiLock className="input-icon" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="input-field"
              required
            />
            <div className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          <div className="input-group">
            <FiLock className="input-icon" />
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm Password" 
              className="input-field"
              required
            />
            <div className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

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

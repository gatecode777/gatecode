// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import {  useState  } from 'react';
import { FiEye, FiEyeOff, FiArrowLeft, FiLock } from 'react-icons/fi';
import './ResetPassword.css';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="auth-container">
      <button className="back-button" onClick={() => router.push('/verify-otp')}>
        <FiArrowLeft /> Back
      </button>

      <div className="auth-card">
        <h1 className="auth-title">RESET PASSWORD</h1>

        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); router.push('/login'); }}>
          <div className="input-group">
            <FiLock className="input-icon" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="New Password" 
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

          <button type="submit" className="auth-button">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

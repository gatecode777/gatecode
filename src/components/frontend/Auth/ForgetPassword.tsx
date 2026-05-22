// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const router = useRouter();

  return (
    <div className="auth-container">
      <button className="back-button" onClick={() => router.push('/login')}>
        <FiArrowLeft /> Back
      </button>

      <div className="auth-card">
        <h1 className="auth-title">FORGET PASSWORD</h1>

        <p className="auth-instruction">
          Please enter your email address below you will receive a verification link
        </p>

        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); router.push('/verify-otp'); }}>
          <div className="input-group">
            <FiMail className="input-icon" />
            <input type="email" placeholder="Email Address" className="input-field" required />
          </div>

          <button type="submit" className="auth-button">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

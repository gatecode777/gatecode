// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import {  useState, useEffect  } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './VerifyOTP.css';

const VerifyOTP = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(33);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="auth-container">
      <button className="back-button" onClick={() => router.push('/forget-password')}>
        <FiArrowLeft /> Back
      </button>

      <div className="auth-card">
        <h1 className="auth-titlee">VERIFY OTP</h1>

        <p className="auth-instruction">
          Enter the 4-digit code sent to your email/phone
        </p>

        <div className="otp-container">
          {otp.map((data, index) => (
            <input
              className="otp-input"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        <p className="resend-text">
          Didn't receive the code ? <span className="resend-link">Resend OTP</span>
          {timer > 0 && <span className="timer"> 00:{timer < 10 ? `0${timer}` : timer}</span>}
        </p>

        <button 
          className="auth-button" 
          onClick={() => router.push('/reset-password')}
        >
          Verify & Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;

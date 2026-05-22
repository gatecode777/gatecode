// @ts-nocheck
'use client';

import { useRouter } from 'next/navigation';
import {  useState  } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => router.push('/')}>
        <FiArrowLeft /> Back
      </button>
      <div className="login-card">
        <h1 className="login-title">WELCOME BACK !</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FiMail className="input-icon" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FiLock className="input-icon" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          <a href="#" className="forgot-password" onClick={() => router.push('/forget-password')}>Forget Password ?</a>

          <button type="submit" className="login-button">Log in</button>
        </form>

        <p className="signup-text">
          Don't have an account ? 
          <a href="#" className="signup-link" onClick={() => router.push('/register')}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

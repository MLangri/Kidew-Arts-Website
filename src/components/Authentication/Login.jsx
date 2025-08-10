import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
//import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/userSlice';

export default function Login() {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [recaptchaToken, setRecaptchaToken] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    {/*if (!recaptchaToken) return alert('Please complete reCAPTCHA');*/}
    dispatch(loginUser({ email, password }));//put recaptcha token after password once configured
  };

  return (
    <div className="login-container">
    <form onSubmit={onSubmit}>
      <h2>Welcome to Kidew Arts Gallery </h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required 
      />
      {/*<ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={token => setRecaptchaToken(token)} />*/}
      <button 
        type="submit" 
        disabled={status === 'loading'}
      >
        Login
      </button>
      {error && <p style={{color:'red'}}>{error}</p>}
      {/*<p>Don't have an account? <Link to="/register">Register here</Link></p>
      <p>Forgot your password? <Link to="/forgot-password">Reset it here</Link></p>
      <button 
          type="button" 
          onClick={() => navigate(-1)} 
          className="back-btn"
        >
          &larr; Back
        </button>*/}
    </form>
    </div>
  );
}

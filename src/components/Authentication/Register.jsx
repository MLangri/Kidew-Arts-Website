import React, { useState } from 'react';
import './register.css';
//import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/userSlice';

export default function Register() {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [recaptchaToken, setRecaptchaToken] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    {/*if (!recaptchaToken) return alert('Please complete reCAPTCHA');*/}
    dispatch(registerUser({ email, password, role: 'user' }));//put recaptcha token after user once configured
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
      {/*<ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={token => setRecaptchaToken(token)} />*/}
      <button type="submit" disabled={status === 'loading'}>Sign Up</button>
      {error && <p style={{color:'red'}}>{error}</p>}
      <button 
          type="button" 
          onClick={() => navigate(-1)} 
          className="back-btn"
        >
          &larr; Back
        </button>
    </form>
  );
}

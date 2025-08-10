import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/authSlice';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(s => s.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaToken) return alert('Please complete the reCAPTCHA');
    dispatch(registerUser({ email, password: pw, displayName: name, recaptchaToken }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={pw} onChange={e=>setPw(e.target.value)} placeholder="Password" type="password" />
      <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={token => setRecaptchaToken(token)} />
      <button type="submit" disabled={loading}>Sign Up</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  );
}

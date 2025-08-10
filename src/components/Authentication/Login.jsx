import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';

export default function LoginForm() {
  const dispatch = useDispatch();
  const[name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password: pw }));
  };
  return (
    <form onSubmit={handleLogin}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" /> 
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={pw} onChange={e=>setPw(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

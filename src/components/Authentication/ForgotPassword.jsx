import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../store/authSlice';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handle = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ email })).then(res => {
      if (res.meta.requestStatus === 'fulfilled') alert('Check your email');
      else alert(res.payload || 'Error');
    });
  };
  return (
    <form onSubmit={handle}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Reset Password</button>
    </form>
  );
}

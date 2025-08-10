import React from 'react';
import Login from '../Authentication/login';
import Register from '../Authentication/register';

const profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1, maxWidth: '400px' }}>
        <h2>Login</h2>
        <Login />
      </div>
      <div style={{ flex: 1, maxWidth: '400px' }}>
        <h2>Register</h2>
        <Register />
      </div>
    </div>
  );
};

export default profile;

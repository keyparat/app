import React, { useState } from 'react';
import { login } from '../services/api';
export default function Login({ onLogin }) {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password');
  async function submit(e) {
    e.preventDefault();
    try {
      const { token, user } = await login(email, password);
      localStorage.setItem('token', token);
      onLogin(token);
    } catch (err) {
      alert('Login failed: '+err.message);
    }
  }
  return (
    <div style={{maxWidth:700, margin:'50px auto'}}>
      <h2>Admin Login</h2>
      <form onSubmit={submit}>
        <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email"/></div>
        <div><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" type="password"/></div>
        <button>Login</button>
      </form>
    </div>
  );
}
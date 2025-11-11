import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
function App(){
  const [token,setToken] = useState(localStorage.getItem('token'));
  if (!token) return <Login onLogin={(t)=>setToken(t)} />;
  return <Dashboard token={token} />;
}
createRoot(document.getElementById('root')).render(<App />);
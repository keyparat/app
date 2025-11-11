const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Login failed');
  return res.json();
}

export async function fetchContents(token) {
  const res = await fetch(`${API_BASE}/api/admin/contents`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error();
  return res.json();
}

export async function createContent(token, payload) {
  const res = await fetch(`${API_BASE}/api/admin/contents`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
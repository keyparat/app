import React, { useEffect, useState } from 'react';
import { fetchContents, createContent } from '../services/api';
export default function Dashboard({ token }) {
  const [items, setItems] = useState([]);
  useEffect(()=>{ load() }, []);
  async function load() { try { setItems(await fetchContents(token)); } catch(e){ console.error(e) } }
  async function add() {
    const title = prompt('Title');
    if (!title) return;
    await createContent(token, { title, body: '' });
    load();
  }
  return (
    <div style={{maxWidth:900, margin:'24px auto'}}>
      <h2>Contents</h2>
      <button onClick={add}>Create</button>
      <table style={{width:'100%', marginTop:12}}>
        <thead><tr><th>Title</th><th>Slug</th><th>Updated</th></tr></thead>
        <tbody>
          {items.map(it=>(
            <tr key={it.id}><td>{it.title}</td><td>{it.slug}</td><td>{it.updated_at}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
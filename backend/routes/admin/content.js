const express = require('express');
const db = require('../../db');
const { authMiddleware, requireAdmin } = require('../../middleware/auth');
const { logAudit } = require('../../helpers/audit');
const router = express.Router();

// Admin content endpoints prefixed with /api/admin/contents
router.use(authMiddleware);
router.use(requireAdmin);

// GET list (with optional filters)
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT c.*, u.name as author_name FROM contents c LEFT JOIN users u ON c.author_id = u.id ORDER BY c.updated_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// GET by id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM contents WHERE id = ? LIMIT 1', [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// POST create
router.post('/', async (req, res) => {
  const { title, body, type = 'page', status = 'published', category_id = null } = req.body || {};
  if (!title) return res.status(400).json({ error: 'Title required' });
  const slug = (title || '').toString().toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
  try {
    const [r] = await db.query('INSERT INTO contents (title, slug, body, type, status, category_id, author_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, slug, body || '', type, status, category_id, req.user.id]);
    await logAudit(req.user.id, 'create', 'content', r.insertId, JSON.stringify({ title }));
    const [rows] = await db.query('SELECT * FROM contents WHERE id = ?', [r.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// PUT update
router.put('/:id', async (req, res) => {
  const { title, body, status, category_id } = req.body || {};
  try {
    const slug = title ? title.toString().toLowerCase().trim().replace(/[\s\W-]+/g, '-') : undefined;
    await db.query('UPDATE contents SET title = COALESCE(?, title), slug = COALESCE(?, slug), body = COALESCE(?, body), status = COALESCE(?, status), category_id = COALESCE(?, category_id), updated_at = NOW() WHERE id = ?', [title, slug, body, status, category_id, req.params.id]);
    await logAudit(req.user.id, 'update', 'content', req.params.id, JSON.stringify(req.body));
    const [rows] = await db.query('SELECT * FROM contents WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM contents WHERE id = ?', [req.params.id]);
    await logAudit(req.user.id, 'delete', 'content', req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

module.exports = router;
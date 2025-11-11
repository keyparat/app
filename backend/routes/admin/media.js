const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../../db');
const { authMiddleware, requireAdmin } = require('../../middleware/auth');
const { logAudit } = require('../../helpers/audit');
require('dotenv').config();

const uploadDir = process.env.UPLOAD_DIR || path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const name = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;
    cb(null, name);
  }
});
const upload = multer({ storage });

const router = express.Router();
router.use(authMiddleware);
router.use(requireAdmin);

// POST /api/admin/media (single)
router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'File required' });
  const fileUrl = `/uploads/${req.file.filename}`;
  try {
    const [r] = await db.query('INSERT INTO media (file_name, file_path, mime_type, size, uploaded_by) VALUES (?, ?, ?, ?, ?)', [req.file.originalname, fileUrl, req.file.mimetype, req.file.size, req.user.id]);
    await logAudit(req.user.id, 'upload', 'media', r.insertId, req.file.filename);
    res.status(201).json({ id: r.insertId, file_name: req.file.originalname, url: fileUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// GET media list
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM media ORDER BY uploaded_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

module.exports = router;
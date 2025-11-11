const db = require('../db');

async function logAudit(userId, action, objectType, objectId, detail) {
  try {
    await db.query(
      `INSERT INTO audit_logs (user_id, action, object_type, object_id, detail) VALUES (?, ?, ?, ?, ?)`,
      [userId || null, action, objectType, objectId ? String(objectId) : null, detail || null]
    );
  } catch (err) {
    console.error('Audit log error', err);
  }
}

module.exports = { logAudit };
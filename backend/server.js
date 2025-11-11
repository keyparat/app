const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/admin/content');
const mediaRoutes = require('./routes/admin/media');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// API
app.use('/api/auth', authRoutes);
app.use('/api/admin/contents', contentRoutes);
app.use('/api/admin/media', mediaRoutes);

// Serve uploads
const uploadsPath = path.join(__dirname, process.env.UPLOAD_DIR || 'uploads');
app.use('/uploads', express.static(uploadsPath));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));

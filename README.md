# Admin Content Manager (Express + MySQL + React admin frontend)

Overview
- Backend: Node.js + Express + MySQL
- Frontend: small React admin app (Vite)

Setup (Backend)
1. Copy .env.example -> .env and fill values.
2. Create DB and schema:
   mysql -u root -p < backend/schema.sql
3. Install dependencies:
   cd backend
   npm install
4. Start server:
   npm run dev
   Backend default: http://localhost:4000

Initial admin credentials
- The schema seeds a user admin@example.com with password "password". Change it immediately:
  Use the register-admin route or update password in DB with bcrypt.

Setup (Frontend admin)
1. Create frontend app:
   cd frontend-admin
   npm create vite@latest . --template react
   npm install
2. Add files from frontend-admin/src/ and set .env.local:
   VITE_API_URL=http://localhost:4000
3. Start:
   npm run dev
   Open the dev URL (usually http://localhost:5173)

Smoke tests (use these after backend starts)
- see README in repo for curl commands and tests

Notes & Security
- Replace JWT_SECRET and default admin password immediately in production.
- Remove or restrict the register-admin route in production.
- Do not commit .env with secrets; add .env to .gitignore.
- Use HTTPS and secure upload handling for production; consider virus scanning and S3 (or equivalent) for media storage.

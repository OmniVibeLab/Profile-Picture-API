import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// API Route
app.get('/api/profile', (req, res) => {
  res.json({
    dp: "/dp.png", // just the path, Express serves it
    message: "Profile picture fetched successfully 🚀"
  });
});

// Optional redirect endpoint
app.get('/dp', (req, res) => {
  res.redirect("/dp.png");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

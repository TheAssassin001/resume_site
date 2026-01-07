import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'waitlist.json');

// Middleware
app.use(cors());
app.use(express.json());

// Initialize data file if it doesn't exist
async function initDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify({ emails: [] }, null, 2));
  }
}

// Read waitlist data
async function readWaitlist() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { emails: [] };
  }
}

// Write waitlist data
async function writeWaitlist(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// POST /api/waitlist - Add email to waitlist
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Read current waitlist
    const waitlist = await readWaitlist();

    // Check for duplicates
    const emailLower = email.toLowerCase();
    const exists = waitlist.emails.some(
      entry => entry.email.toLowerCase() === emailLower
    );

    if (exists) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Add new entry
    const newEntry = {
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
      ip: req.ip
    };

    waitlist.emails.push(newEntry);
    await writeWaitlist(waitlist);

    res.status(201).json({ 
      success: true, 
      message: 'Successfully added to waitlist',
      email: email.toLowerCase()
    });

  } catch (error) {
    console.error('Error adding to waitlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/waitlist - Get all waitlist entries (admin endpoint)
app.get('/api/waitlist', async (req, res) => {
  try {
    const waitlist = await readWaitlist();
    res.json({
      total: waitlist.emails.length,
      emails: waitlist.emails
    });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/health - Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
async function start() {
  await initDataFile();
  app.listen(PORT, () => {
    console.log(`🚀 Backend server running on http://localhost:${PORT}`);
    console.log(`📝 Waitlist data saved to: ${DATA_FILE}`);
  });
}

start();

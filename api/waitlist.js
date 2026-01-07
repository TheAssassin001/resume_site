import fs from 'fs/promises';
import path from 'path';

// Use /tmp for serverless environment
const DATA_FILE = '/tmp/waitlist.json';

// Initialize data file
async function initDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify({ emails: [] }, null, 2));
  }
}

// Read waitlist
async function readWaitlist() {
  try {
    await initDataFile();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { emails: [] };
  }
}

// Write waitlist
async function writeWaitlist(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // GET - Retrieve all waitlist entries
  if (req.method === 'GET') {
    try {
      const waitlist = await readWaitlist();
      res.status(200).json({
        total: waitlist.emails.length,
        emails: waitlist.emails
      });
    } catch (error) {
      console.error('Error fetching waitlist:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    return;
  }

  // POST - Add email to waitlist
  if (req.method === 'POST') {
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
        email: emailLower,
        timestamp: new Date().toISOString(),
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      };

      waitlist.emails.push(newEntry);
      await writeWaitlist(waitlist);

      res.status(201).json({ 
        success: true, 
        message: 'Successfully added to waitlist',
        email: emailLower
      });

    } catch (error) {
      console.error('Error adding to waitlist:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    return;
  }

  // Method not allowed
  res.status(405).json({ error: 'Method not allowed' });
}

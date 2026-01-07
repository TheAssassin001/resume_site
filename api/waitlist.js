import { sql } from '@vercel/postgres';

// Initialize database table
async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ip VARCHAR(45)
      )
    `;
  } catch (error) {
    console.error('Database initialization error:', error);
  }
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
      await initDatabase();
      const result = await sql`
        SELECT email, timestamp, ip 
        FROM waitlist 
        ORDER BY timestamp DESC
      `;
      
      res.status(200).json({
        total: result.rows.length,
        emails: result.rows.map(row => ({
          email: row.email,
          timestamp: row.timestamp,
          ip: row.ip
        }))
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
      await initDatabase();
      const { email } = req.body;

      // Validate email
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      const emailLower = email.toLowerCase();
      const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

      // Check for duplicates and insert
      try {
        await sql`
          INSERT INTO waitlist (email, ip)
          VALUES (${emailLower}, ${userIp})
        `;

        res.status(201).json({ 
          success: true, 
          message: 'Successfully added to waitlist',
          email: emailLower
        });
      } catch (dbError) {
        // Check if it's a duplicate key error
        if (dbError.code === '23505') {
          return res.status(409).json({ error: 'Email already registered' });
        }
        throw dbError;
      }

    } catch (error) {
      console.error('Error adding to waitlist:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    return;
  }

  // Method not allowed
  res.status(405).json({ error: 'Method not allowed' });
}

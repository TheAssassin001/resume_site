import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    // Check if environment variables are set
    const hasEnvVars = !!(process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL);
    
    if (!hasEnvVars) {
      return res.status(500).json({ 
        error: 'Database not configured',
        message: 'Environment variables missing. Make sure database is connected in Vercel.' 
      });
    }

    // Try a simple query
    const result = await sql`SELECT NOW() as current_time`;
    
    res.status(200).json({ 
      status: 'Database connected!',
      currentTime: result.rows[0].current_time,
      env: hasEnvVars ? 'Variables found' : 'Variables missing'
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Database connection failed',
      message: error.message,
      code: error.code
    });
  }
}

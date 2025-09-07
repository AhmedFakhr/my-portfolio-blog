// lib/db.js
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // use .env.local
    ssl: {
        rejectUnauthorized: false, // if you're using services like Railway, Heroku, Supabase
    },
});

export default pool;

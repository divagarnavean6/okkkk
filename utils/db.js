import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
NEXT_PUBLIC_DRIZZLE_DB_URL=postgresql://neondb_owner:npg_4TPasep8ZhmV@ep-holy-thunder-a5rgas2a-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql,{schema});

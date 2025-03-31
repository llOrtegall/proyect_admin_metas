import { DB_POWERBI_DATABASE, DB_POWERBI_HOST, DB_POWERBI_PASS, DB_POWERBI_PORT, DB_POWERBI_USER } from '../config/envSchema';
import { createPool, type Pool } from 'mysql2/promise';

const pool = createPool({
  host: DB_POWERBI_HOST,
  port: DB_POWERBI_PORT,
  database: DB_POWERBI_DATABASE,
  user: DB_POWERBI_USER,
  password: DB_POWERBI_PASS,
  timezone: '-00:00',
  connectionLimit: 10
})

export const PoolConnection = (): Pool => pool;

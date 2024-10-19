import { Sequelize } from 'sequelize';

const HOST_POWERBI = process.env.DB_POWERBI_HOST!;
const PORT_POWERBI = process.env.DB_POWERBI_PORT!;
const USER_POWERBI = process.env.DB_POWERBI_USER!;
const PASS_POWERBI = process.env.DB_POWERBI_PASS!;
const DB_POWERBI = process.env.DB_POWERBI_DATABASE!;

export const PowerBI = new Sequelize(DB_POWERBI, USER_POWERBI, PASS_POWERBI, {
  host: HOST_POWERBI,
  port: parseInt(PORT_POWERBI),
  dialect: 'mysql',
  timezone: '-05:00',
});
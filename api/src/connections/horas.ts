import { Sequelize } from 'sequelize';

const HOST_HORA = process.env.DB_HORA_HOST!;
const PORT_HORA = process.env.DB_HORA_PORT!;
const USER_HORA = process.env.DB_HORA_USER!;
const PASS_HORA = process.env.DB_HORA_PASS!;
const DB_HORA = process.env.DB_HORA_DATABASE!;

export const horaConnection = new Sequelize(DB_HORA, USER_HORA, PASS_HORA, {
  host: HOST_HORA,
  port: parseInt(PORT_HORA),
  dialect: 'mysql',
  timezone: '-05:00',
});
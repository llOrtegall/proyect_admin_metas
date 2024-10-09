import { Sequelize } from 'sequelize';
 
const host = process.env.DB_POWERBI_HOST!;
const port = process.env.DB_POWERBI_PORT!;
const user = process.env.DB_POWERBI_USER!;
const pass = process.env.DB_POWERBI_PASS!;
const database = process.env.DB_POWERBI_DATABASE!;

const connPoweBi = new Sequelize(database, user, pass, {
  host: host,
  port: parseInt(port),
  dialect: 'mysql',
  timezone: '-05:00'
});

export { connPoweBi }
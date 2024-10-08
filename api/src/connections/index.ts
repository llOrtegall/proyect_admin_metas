import { Sequelize } from 'sequelize';
 
const host = process.env.DB_METAS_HOST!;
const port = process.env.DB_METAS_PORT!;
const user = process.env.DB_METAS_USER!;
const pass = process.env.DB_METAS_PASS!;
const database = process.env.DB_METAS_DATABASE!;

const con_db = new Sequelize(database, user, pass, {
  host: host,
  port: parseInt(port),
  dialect: 'mariadb'
});

export { con_db }
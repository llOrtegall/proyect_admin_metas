import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { con_db } from '../connections/index';

class Logueo extends Model<InferAttributes<Logueo>, InferCreationAttributes<Logueo>> {
  declare username: string
  declare sucursal: number
  declare fecha_login: Date
}

Logueo.init({
  username: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  sucursal: { type: DataTypes.INTEGER, allowNull: false },
  fecha_login: { type: DataTypes.DATE, allowNull: false }
}, {
  sequelize: con_db,
  tableName: 'HIST_USUARIOS_LOGUEADOS',
  timestamps: false
});

export { Logueo };
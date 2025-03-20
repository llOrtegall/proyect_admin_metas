import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { PowerBI } from '../connections/powerbi';

class Logueo extends Model<InferAttributes<Logueo>, InferCreationAttributes<Logueo>> {
  declare username: string;
  declare sucursal: number;
  declare fecha_login: Date;
  declare fechacreate?: Date;
  declare fechaupdate?: Date;
  declare version?: number;
}

Logueo.init({
  username: { type: DataTypes.STRING(15), allowNull: false, primaryKey: true },
  sucursal: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  fecha_login: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  fechacreate: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
  fechaupdate: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
  version: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
}, {
  sequelize: PowerBI,
  tableName: 'HIST_USUARIOS_LOGUEADOS',
  timestamps: false
});

export { Logueo };
import { InferAttributes, InferCreationAttributes, DataTypes, Model } from 'sequelize';
import { PowerBI } from '../connections/powerbi';

class Vendedores extends Model<InferAttributes<Vendedores>, InferCreationAttributes<Vendedores>> {
  declare USERNAME: string;
  declare SUCURSAL: number;
  declare FECHA_LOGIN: Date;
  declare FECHACREATE?: Date;
  declare FECHAUPDATE?: Date;
  declare VERSION: number;
}

Vendedores.init({
  USERNAME: { type: DataTypes.STRING(15), allowNull: false, primaryKey: true },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  FECHA_LOGIN: { type: DataTypes.DATE, allowNull: false, primaryKey: true, defaultValue: DataTypes.NOW },
  FECHACREATE: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
  FECHAUPDATE: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
  VERSION: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
}, {
  sequelize: PowerBI,
  tableName: 'Vendedores',
  timestamps: false
});

export { Vendedores };
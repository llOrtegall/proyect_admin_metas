import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize'
import { PowerBI } from '../connections/powerbi';

class HoraDispoSucursal extends Model<InferAttributes<HoraDispoSucursal>, InferCreationAttributes<HoraDispoSucursal>> {
  declare ZONA: string;
  declare CCOSTO: string;
  declare CODIGO: string;
  declare HABIL: number;
  declare FESTIVO: number;
  declare HORADISPO: string;
  declare VERSION: string;
}

HoraDispoSucursal.init({
  ZONA: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  CCOSTO: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  CODIGO: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  HABIL: { type: DataTypes.INTEGER, allowNull: false },
  FESTIVO: { type: DataTypes.INTEGER, allowNull: false },
  HORADISPO: { type: DataTypes.STRING(5), allowNull: false, primaryKey: true },
  VERSION: { type: DataTypes.STRING(20), allowNull: false }
}, {
  sequelize: PowerBI,
  tableName: 'HORASDISPO_SUCURSAL',
  timestamps: false
})

export { HoraDispoSucursal }
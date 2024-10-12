import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { con_db } from '../connections/index';

class Sugeridos extends Model<InferAttributes<Sugeridos>, InferCreationAttributes<Sugeridos>> {
  declare FECHA: Date;
  declare ZONA: number;
  declare SUCURSAL: number;
  declare USUARIO: string;
  declare NOMBRES: string;
  declare SUGERIDO1: string;
  declare SUGERIDO2: string;
  declare VTA_CHANCE: number;
  declare VTA_PAGAMAS: number;
  declare VTA_PAGATODO: number;
  declare VTA_GANE5: number;
  declare VTA_PATA_MILLONARIA: number;
  declare VTA_DOBLECHANCE: number;
  declare VTA_CHANCE_MILLONARIO: number;
  declare META_SUG1: number;
  declare META_SUG2: number;
}

Sugeridos.init({
  FECHA: { type: DataTypes.DATE, allowNull: false },
  ZONA: { type: DataTypes.INTEGER, allowNull: false },
  SUCURSAL: { type: DataTypes.INTEGER, allowNull: false },
  USUARIO: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  NOMBRES: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO1: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO2: { type: DataTypes.STRING, allowNull: false },
  VTA_CHANCE: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  VTA_PAGAMAS: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  VTA_PAGATODO: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  VTA_GANE5: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  VTA_PATA_MILLONARIA: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  VTA_DOBLECHANCE: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  VTA_CHANCE_MILLONARIO: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  META_SUG1: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  META_SUG2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
}, {
  sequelize: con_db,
  tableName: 'SUGERIDOS_VENDEDOR',
  timestamps: false
});

export { Sugeridos };
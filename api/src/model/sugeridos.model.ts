import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { PowerBI } from '../connections/powerbi';

export class SugeridosVendedorPB extends Model<InferAttributes<SugeridosVendedorPB>, InferCreationAttributes<SugeridosVendedorPB>> {
  declare ID: number;
  declare FECHA: string;
  declare ZONA: string;
  declare CCOSTO: string;
  declare SUCURSAL: string;
  declare LOGIN: string;
  declare CATEGORIA: string;
  declare PRODUCTO: string;
  declare VTA_SUGERIDO: number;
  declare FRM_SUGERIDO: number;
  declare META_CANTIDAD: number;
  declare META_VALOR: number;
  declare ESTADO: string;
  declare VERSION: string;
}

SugeridosVendedorPB.init({
  ID: { type: DataTypes.INTEGER, allowNull: true },
  FECHA: { type: DataTypes.DATEONLY, allowNull: false },
  ZONA: { type: DataTypes.STRING(10), allowNull: false },
  CCOSTO: { type: DataTypes.STRING(10), allowNull: false },
  SUCURSAL: { type: DataTypes.STRING(10), allowNull: false },
  LOGIN: { type: DataTypes.STRING(20), allowNull: true },
  CATEGORIA: { type: DataTypes.STRING(20), allowNull: true },
  PRODUCTO: { type: DataTypes.STRING(50), allowNull: true },
  VTA_SUGERIDO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  FRM_SUGERIDO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  META_CANTIDAD: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  META_VALOR: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  ESTADO: {
    type: DataTypes.ENUM('INICIAL', 'ENPROGRESO', 'SUPERADO'),
    allowNull: true,
    defaultValue: null
  },
  VERSION: { type: DataTypes.STRING(20), allowNull: true }
}, {
  sequelize: PowerBI,
  tableName: 'SUGERIDOSVENDEDOR',
  timestamps: false
})
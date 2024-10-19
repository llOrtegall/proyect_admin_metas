import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { PowerBI } from '../connections/powerbi';

class SucursalesPowerBi extends Model<InferAttributes<SucursalesPowerBi>, InferCreationAttributes<SucursalesPowerBi>> {
  declare ZONA: string;
  declare CCOSTO: string;
  declare CODIGO: string;
  declare NOMBRE: string;
  declare DIRECCION: string;
  declare TIPO: string;
  declare DISPOSITIVO: string;
  declare SUPERVISOR: string;
  declare CANAL: string;
  declare CATEGORIA: string;
  declare HORA_ENTRADA: string;
  declare HORA_SALIDA: string;
  declare HORA_ENTRADA_FES: string;
  declare HORA_SALIDA_FES: string;
  declare SUBZONA: string;
  declare CELULA: string;
  declare HORAS_ORDINARIAS: number;
  declare HORAS_FESTIVAS: number;
  declare ESTADO: string;
}

SucursalesPowerBi.init({
  ZONA: { type: DataTypes.STRING(10), allowNull: false, defaultValue: null },
  CCOSTO: { type: DataTypes.STRING(10), allowNull: false, defaultValue: null },
  CODIGO: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  NOMBRE: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null },
  DIRECCION: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null },
  TIPO: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null },
  DISPOSITIVO: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null },
  SUPERVISOR: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null },
  CANAL: { type: DataTypes.STRING(30), allowNull: true, defaultValue: null },
  CATEGORIA: { type: DataTypes.STRING(30), allowNull: true, defaultValue: null },
  HORA_ENTRADA: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  HORA_SALIDA: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  HORA_ENTRADA_FES: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  HORA_SALIDA_FES: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  SUBZONA: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  CELULA: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  HORAS_ORDINARIAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 8 },
  HORAS_FESTIVAS: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 6 },
  ESTADO: { type: DataTypes.STRING, allowNull: true, defaultValue: 'A' }
}, {
  sequelize: PowerBI,
  tableName: 'SUCURSALES',
  timestamps: true
})

export { SucursalesPowerBi };
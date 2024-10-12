import { DataTypes, Model, Optional } from 'sequelize';
import { con_db } from '../connections';

interface SucursalAttributes {
  zona: string;
  codigo: string;
  nombre: string;
  direccion: string;
  categoria: string;
  version: string;
}

type SucursalCreationAttributes = Optional<SucursalAttributes, 'codigo'>;

export class Sucursal extends Model<SucursalAttributes, SucursalCreationAttributes> implements SucursalAttributes {
  declare zona: string;
  declare codigo: string;
  declare nombre: string;
  declare direccion: string;
  declare categoria: string;
  declare version: string;
}

Sucursal.init({
  zona: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false },
  nombre: { type: DataTypes.STRING, allowNull: false },
  direccion: { type: DataTypes.STRING, allowNull: false },
  categoria: { type: DataTypes.STRING, allowNull: false },
  version: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize: con_db,
  tableName: 'INFORMACION_PUNTOSVENTA',
  timestamps: false
});

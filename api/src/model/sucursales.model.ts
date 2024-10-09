import { DataTypes, Model, Optional } from 'sequelize';
import { connPoweBi } from '../connections/powerbi';

interface SucursalAttributes {
  zona: string;
  codigo: string;
  nombre: string;
  direccion: string;
}

type SucursalCreationAttributes = Optional<SucursalAttributes, 'codigo'>;

export class Sucursal extends Model<SucursalAttributes, SucursalCreationAttributes> {
  declare zona: string;
  declare codigo: string;
  declare nombre: string;
  declare direccion: string;
}

Sucursal.init({
  zona: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  codigo: { type: DataTypes.STRING, allowNull: false },
  nombre: { type: DataTypes.STRING, allowNull: false },
  direccion: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize: connPoweBi,
  tableName: 'SUCURSALES',
  timestamps: false
});

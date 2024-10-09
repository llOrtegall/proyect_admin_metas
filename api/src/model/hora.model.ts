import { horaConnection } from '../connections/horas';
import { DataTypes, Model, Optional } from 'sequelize';

interface HoraAttributes {
  id?: number;
  sucursal: number;
  zona: number;
  fecha: Date;
  hora: Date;
  chance: number;
  gane5: number;
  astro: number;
  createdAt?: Date;
  updatedAt?: Date;
}

type HoraCreationAttributes = Optional<HoraAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export class Hora extends Model<HoraAttributes, HoraCreationAttributes> implements HoraAttributes {
  declare id: number;
  declare sucursal: number;
  declare zona: number;
  declare fecha: Date;
  declare hora: Date;
  declare chance: number;
  declare gane5: number;
  declare astro: number;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Hora.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  sucursal: { type: DataTypes.INTEGER, allowNull: false },
  zona: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false },
  hora: { type: DataTypes.DATE, allowNull: false },
  chance: { type: DataTypes.INTEGER, allowNull: false },
  gane5: { type: DataTypes.INTEGER, allowNull: false },
  astro: { type: DataTypes.INTEGER, allowNull: false }
}, {
  sequelize: horaConnection,
  tableName: 'Meta'
});
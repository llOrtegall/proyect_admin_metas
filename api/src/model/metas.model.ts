import { DataTypes, Model, Optional } from 'sequelize';
import { con_db } from '../connections'


interface MetaAttributes {
  sucursal: number;
  zona: number;
  fecha: Date;
  chance: number;
  pagamas: number;
  pagatodo: number;
  doblechance: number;
  chance_millonario: number;
  astro: number;
  loteria_fisica: number;
  loteria_virtual: number;
  betplay: number;
  giros: number;
  soat: number;
  recargas: number;
  promedio_diario_chance: number;
  promedio_diario_pagamas: number;
  promedio_diario_pagatodo: number;
  promedio_diario_doblechance: number;
  promedio_diario_chmill: number;
  promedio_diario_astro: number;
  promedio_diario_lf: number;
  promedio_diario_lv: number;
  promedio_diario_betplay: number;
  promedio_diario_giros: number;
  promedio_diario_soat: number;
  promedio_diario_recargas: number;
}

type MetaCreationAttributes = Optional<MetaAttributes, 'sucursal'>;

export class Meta extends Model<MetaAttributes, MetaCreationAttributes> {
  declare sucursal: number;
  declare zona: number;
  declare fecha: Date;
  declare chance: number;
  declare pagamas: number;
  declare pagatodo: number;
  declare doblechance: number;
  declare chance_millonario: number;
  declare astro: number;
  declare loteria_fisica: number;
  declare loteria_virtual: number;
  declare betplay: number;
  declare giros: number;
  declare soat: number;
  declare recargas: number;
  declare promedio_diario_chance: number;
  declare promedio_diario_pagamas: number;
  declare promedio_diario_pagatodo: number;
  declare promedio_diario_doblechance: number;
  declare promedio_diario_chmill: number;
  declare promedio_diario_astro: number;
  declare promedio_diario_lf: number;
  declare promedio_diario_lv: number;
  declare promedio_diario_betplay: number;
  declare promedio_diario_giros: number;
  declare promedio_diario_soat: number;
  declare promedio_diario_recargas: number;
}

Meta.init({
  sucursal: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  zona: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  fecha: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  chance: { type: DataTypes.INTEGER, allowNull: false },
  pagamas: { type: DataTypes.INTEGER, allowNull: false },
  pagatodo: { type: DataTypes.INTEGER, allowNull: false },
  doblechance: { type: DataTypes.INTEGER, allowNull: false },
  chance_millonario: { type: DataTypes.INTEGER, allowNull: false },
  astro: { type: DataTypes.INTEGER, allowNull: false },
  loteria_fisica: { type: DataTypes.INTEGER, allowNull: false },
  loteria_virtual: { type: DataTypes.INTEGER, allowNull: false },
  betplay: { type: DataTypes.INTEGER, allowNull: false },
  giros: { type: DataTypes.INTEGER, allowNull: false },
  soat: { type: DataTypes.INTEGER, allowNull: false },
  recargas: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_chance: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_pagamas: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_pagatodo: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_doblechance: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_chmill: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_astro: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_lf: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_lv: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_betplay: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_giros: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_soat: { type: DataTypes.INTEGER, allowNull: false },
  promedio_diario_recargas: { type: DataTypes.INTEGER, allowNull: false }
}, {
  sequelize: con_db,
  tableName: 'METASPRODUCTOS',
  timestamps: false
});
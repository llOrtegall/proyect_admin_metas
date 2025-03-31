import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import { PowerBI } from '../connections/powerbi';

class VendedoresPB extends Model<InferAttributes<VendedoresPB>, InferCreationAttributes<VendedoresPB>> {
  declare DOCUMENTO: string;
  declare NOMBRES: string;
  declare GRPVTAS_CODIGO: string;
  declare CARGO: string;
  declare VERSION: string;
  declare NOMBRECARGO: string;
  declare CCOSTO: string;
}

VendedoresPB.init({
  DOCUMENTO: { type: DataTypes.STRING(20), primaryKey: true },
  NOMBRES: { type: DataTypes.STRING(60) },
  GRPVTAS_CODIGO: { type: DataTypes.STRING(30) },
  CARGO: { type: DataTypes.STRING(30) },
  VERSION: { type: DataTypes.STRING(20) },
  NOMBRECARGO: { type: DataTypes.STRING(30) },
  CCOSTO: { type: DataTypes.STRING(10) },
}, {
  sequelize: PowerBI,
  tableName: "VENDEDORES",
  timestamps: false,
}
);

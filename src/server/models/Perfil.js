import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Perfil = sequelize.define(
  'perfil',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'perfil',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'perfil_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

export default Perfil;

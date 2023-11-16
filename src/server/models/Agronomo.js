import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

import Usuario from './Usuario.js';

const Agronomo = sequelize.define(
  'agronomo',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    formacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especializacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'agronomo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'agronomo_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

Agronomo.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

export default Agronomo;

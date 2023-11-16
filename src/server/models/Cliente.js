import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

import Usuario from './Usuario.js';

const Cliente = sequelize.define(
  'cliente',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    propriedade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cultivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    problema: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notificacao: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'cliente',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'cliente_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

Cliente.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

export default Cliente;

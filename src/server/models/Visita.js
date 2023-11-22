import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

import Cliente from './Cliente.js';
import Agronomo from './Agronomo.js';
import Status from './Status.js';

const Visita = sequelize.define(
  'visita',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    chegada: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    saida: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    objetivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diagnostico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    praga: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    produto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    plantio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    venda: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'id',
      },
    },
    agronomo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'agronomo',
        key: 'id',
      },
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id',
      },
    },
    foto: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'visita',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'visita_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

Visita.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Cliente.hasMany(Visita, { foreignKey: 'cliente_id', as: 'visitas' });

Visita.belongsTo(Agronomo, { foreignKey: 'agronomo_id' });
Agronomo.hasMany(Visita, { foreignKey: 'agronomo_id', as: 'visitas' });

Visita.belongsTo(Status, { foreignKey: 'status_id' });
Status.hasMany(Visita, { foreignKey: 'status_id', as: 'visitas' });

export default Visita;

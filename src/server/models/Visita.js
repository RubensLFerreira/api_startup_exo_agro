const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Cliente = require('./Cliente.js');
const Agronomo = require('./Agronomo.js');
const Status = require('./Status.js');

const Visita = sequelize.define(
  'visita',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    objetivo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    diagnostico: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    praga: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    produto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    plantio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    foto: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
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
    venda: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    chegada: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    saida: {
      type: DataTypes.TIME,
      allowNull: false,
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

module.exports = Visita;

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');
const Usuario = require('./Usuario.js');

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
      allowNull: true,
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
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = Agronomo;

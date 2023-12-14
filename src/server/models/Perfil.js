const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

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

module.exports = Perfil;

// admin
// agronomo
// cliente
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Status = sequelize.define(
  'status',
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
    tableName: 'status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'status_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

module.exports = Status;

// andamento
// finalziado
// cancelado
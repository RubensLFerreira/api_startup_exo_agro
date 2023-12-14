const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');
const Usuario = require('./Usuario.js');

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

module.exports = Cliente;

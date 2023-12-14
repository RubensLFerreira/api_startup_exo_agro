const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');
const Usuario = require('./Usuario.js');

const Admin = sequelize.define(
  'admin',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    tableName: 'admin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'admin_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

Admin.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

module.exports = Admin;

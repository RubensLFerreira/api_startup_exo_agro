const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Usuario = sequelize.define(
  'usuario',
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
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: 'usuario_cpf_key',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'usuario_email_key',
    },
    nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'perfil',
        key: 'id',
      },
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'usuario_cpf_key',
        unique: true,
        fields: [{ name: 'cpf' }],
      },
      {
        name: 'usuario_email_key',
        unique: true,
        fields: [{ name: 'email' }],
      },
      {
        name: 'usuario_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

module.exports = Usuario;

import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Usuario = sequelize.define(
  'usuario',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
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
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'usuario_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
);

export default Usuario;

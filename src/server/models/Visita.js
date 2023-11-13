import { DataTypes } from 'sequelize';
import sequelize from '../database';

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
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    saida: {
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
      type: DataTypes.CHAR(1),
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
    fotos: {
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
export default Visita;

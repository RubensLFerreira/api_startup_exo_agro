import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Visita = sequelize.define('visita', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  chegada: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  saida: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  objetivo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  diagnostico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  praga: {
    type: DataTypes.STRING,
    allowNull: true
  },
  produto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  plantio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  venda: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'cliente',
      key: 'id'
    }
  },
  agronomo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'agronomo',
      key: 'id'
    }
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'status',
      key: 'id'
    }
  },
  fotos: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'visita',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: 'visita_pkey',
      unique: true,
      fields: [
        { name: 'id' },
      ]
    },
  ]
});
export default Visita;

import { DataTypes } from 'sequelize';
import sequelize from '../database';

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
export default Status;

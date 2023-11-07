import { DataTypes } from 'sequelize';
import sequelize from '../database';

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

export default Admin;

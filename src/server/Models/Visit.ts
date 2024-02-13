import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/connection';

import Agronomist from './Agronomist';
import Client from './Client';

class Visita extends Model {
  id!: string;
  goal!: string;
  diagnosis?: string;
  pest?: string;
  product?: string;
  observations?: string;
  planting?: string;
  photo?: string[];
  status!: 'pending' | 'done' | 'canceled';
  date!: string;
  arrival!: string;
  exit!: string;
  clientId!: string;
  agronomistId!: string;
}

Visita.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  goal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diagnosis: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pest: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  product: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  observations: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  planting: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  photo: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true,  
  },
  status: {
    type: DataTypes.ENUM('pending', 'done', 'canceled'),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  arrival: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  exit: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  client_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Client,
      key: 'id',
    },
  },
  agronomist_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Agronomist,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Visita',
  tableName: 'Visita',
  underscored: true,
});

Client.hasMany(Visita, { foreignKey: 'client_id', as: 'visitas' });
Visita.belongsTo(Client, { foreignKey: 'client_id' });

Agronomist.hasMany(Visita, { foreignKey: 'agronomist_id', as: 'visitas' });
Visita.belongsTo(Agronomist, { foreignKey: 'agronomist_id' });

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized database');
// });

export default Visita;
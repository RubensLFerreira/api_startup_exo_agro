import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/connection';

import User from './User';

class Client extends Model {
  public id!: string;
  public area!: number;
  public cultivation!: string;
  public problem!: string;
  public notification!: string;
  public userId!: string;
}

Client.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  area: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  cultivation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  problem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notification: {
    type: DataTypes.ENUM('email', 'whatsapp'),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Client',
  tableName: 'Client',
  underscored: true,
});

User.hasMany(Client, { foreignKey: 'user_id', as: 'clients' });
Client.belongsTo(User, { foreignKey: 'user_id' });

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized database');
// });

export default Client;
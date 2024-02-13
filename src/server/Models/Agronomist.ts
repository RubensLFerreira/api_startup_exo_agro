import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/connection';

import User from './User';

class Agronomist extends Model {
  public id!: string;
  public education!: string;
  public userId!: string;
}

Agronomist.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  education: {
    type: DataTypes.STRING,
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
  modelName: 'Agronomist',
  tableName: 'Agronomist',
  underscored: true,
});

User.hasMany(Agronomist, { foreignKey: 'user_id', as: 'agronomists' });
Agronomist.belongsTo(User, { foreignKey: 'user_id' });

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized database');
// });

export default Agronomist;
import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/connection';

import User from './User';

class Admin extends Model {
  public id!: string;
  public userId!: string;
}

Admin.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Admin',
    tableName: 'Admin',
    underscored: true,
  }
);

User.hasMany(Admin, { foreignKey: 'user_id', as: 'admins' });
Admin.belongsTo(User, { foreignKey: 'user_id' });

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized database');
// });

export default Admin;

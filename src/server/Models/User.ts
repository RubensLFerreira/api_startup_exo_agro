import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../config/connection';

class User extends Model {
  public id!: string;
  public name!: string;
  public phone!: string;
  public cpf!: string;
  public email!: string;
  public password!: string;
  public gender!: 'mm' | 'mf' | 'ff' | 'fm' | 'o';
  public birth!: string;
  public role!: 'admin' | 'agronomist' | 'client';
  public road!: string;
  public neighborhood!: string;
  public city!: string;
  public photo!: string;
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM('mm', 'mf', 'ff', 'fm', 'o'),
    allowNull: false
  },
  birth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'agronomist', 'client'),
    allowNull: false
  },
  road: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'user',
  underscored: true,
});

// sequelize.sync({ force: true }).then(() => {
//   console.log('Synchronized database');
// });

export default User;

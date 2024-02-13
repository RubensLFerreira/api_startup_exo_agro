import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
	dialect: 'sqlite',
  storage: 'src/server/database/exoAgro.sqlite',
  logging: false
});

export default sequelize;
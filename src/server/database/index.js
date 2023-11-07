import { Sequelize } from 'sequelize';
import chalk from 'chalk';

import 'dotenv/config';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      chalk.bgGreen.bold(
        '\nConnection to the database successfully established!\n',
      ),
    );
  })
  .catch((error) => {
    console.log({
      message: '\nAn error occurred while connecting to the database!\n',
      error: error,
    });
  });

export default sequelize;

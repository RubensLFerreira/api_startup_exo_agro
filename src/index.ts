import sequelize from './server/config/connection';
import server from './server/Server';

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established successfully!');

    server.listen(process.env.PORT || 8080, () => {
      console.log(`Server running at http://localhost:${process.env.PORT!}`);
    });
  }).catch((error) => {
    console.error(`Database connection failed: ${error}`);
  });

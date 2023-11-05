import { server } from './server/Server.js';
import chalk from 'chalk';

server.listen(process.env.PORT || 8080, () => {
  console.log(
    chalk.blue(
      `\nServer running at port http://localhost:${process.env.PORT}\n`,
    ),
  );
});

import { server } from './server/Server.js';
import chalk from 'chalk';

server.listen(process.env.PORT || 8080, () => {
  console.log(
    chalk.blue(
      `\nServer running at port http://127.0.0.1:${process.env.PORT}\n`,
    ),
  );
});

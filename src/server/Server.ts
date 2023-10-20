import * as express from 'express';
import { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  return res.send('Hi guys!');
});

export { server };
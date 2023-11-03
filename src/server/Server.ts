import 'dotenv/config';

import * as express from 'express';
import { PrismaClient } from '@prisma/client';

import { Request, Response } from 'express';
import { router } from './routes';

const prisma = new PrismaClient();
const server = express();

server.use(express.json());

server.use(router);

server.get('/clientes', async (req: Request, res: Response) => {
  const result = await prisma.cliente.findMany();
  res.json(result);
});

export { server };
import 'dotenv/config';

import express from 'express';
import cors from 'cors';

// import login from './routes';
// import adminRoutes from './routes/adminRoutes';
// import agronomistRoutes from './routes/agronomistRoutes';
// import clientRoutes from './routes/clientRoutes';
// import visitRoutes from './routes/visitRoutes';
// import userRoutes from './routes/userRoutes';
import routes from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// server.use('/login', login);
// server.use('/admin', adminRoutes);
// server.use('/agronomist', agronomistRoutes);
// server.use('/client', clientRoutes);
// server.use('/visit', visitRoutes);
// server.use('/user', userRoutes);
server.use(routes);

export default server;


import express from 'express';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import connectDatabase from './config/db.js';

const app = express();

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`),
);

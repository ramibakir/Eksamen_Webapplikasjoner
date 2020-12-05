import express from 'express';
import morgan from 'morgan';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';

import errorMiddleware from './middleware/errors.js';
import connectDatabase from './config/db.js';
import article from './routes/article.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(`${process.env.BASE_URL}/articles`, article);

app.use(errorMiddleware);

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`),
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});

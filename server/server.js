import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { PORT } from './constants/index';
import 'dotenv/config';

import errorMiddleware from './middleware/errors';
import connectDatabase from './config/db';
import article from './routes/article';
import user from './routes/user';
import auth from './routes/auth';
import category from './routes/category';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(`${process.env.BASE_URL}/articles`, article);
app.use(`${process.env.BASE_URL}/users`, user);
app.use(`${process.env.BASE_URL}/`, auth);
app.use(`${process.env.BASE_URL}/newarticle`, category);

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

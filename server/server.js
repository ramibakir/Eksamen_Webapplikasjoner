import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';
import csrf from 'csurf';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';

import errorMiddleware from './middleware/errors.js';
import connectDatabase from './config/db.js';
import article from './routes/article.js';
import user from './routes/user.js';
import auth from './routes/auth.js';
import category from './routes/category.js';

const app = express();

app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

app.use(limiter);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(csrf({ cookie: true }));

app.get(`${process.env.BASE_URL}/csrf-token`, (req, res) => {
  res.status(200).json({ data: req.csrfToken() });
});

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

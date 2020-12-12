import displayRoutes from 'express-routemap';
import { app } from './app.js';
import { PORT } from './constants/index.js';
import connectDatabase from './config/db.js';

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

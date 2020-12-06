import jwt from 'jsonwebtoken';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  let token;
  if (req.cookie?.token) {
    token = req.cookie.token;
  }

  if (!token) {
    return next(new ErrorHandler('Logg inn', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userService.getUserById(decoded.id);

  if (!user) {
    return next(new ErrorHandler('Finner ikke brukeren', 404));
  }

  req.user = user;
  next();
});

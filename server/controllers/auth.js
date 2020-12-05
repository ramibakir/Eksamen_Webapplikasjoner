import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/ErrorHandler.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  sendToken(user, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Fyll inn epost og passord', 400));
  }

  const user = await userService.getUserByEmail({ email });

  if (!user) {
    return next(new ErrorHandler('Fyll inn epost og passord', 400));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler('Fyll inn epost og passord', 400));
  }

  sendToken(user, res);
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  // implement logout
});

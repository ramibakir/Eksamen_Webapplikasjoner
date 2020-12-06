import { categoryService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    return next(
      new ErrorHandler(`Finner ikke kategori med id ${req.params.id}`, 404),
    );
  }
  res.status(200).json(category);
});

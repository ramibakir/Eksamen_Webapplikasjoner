import path from 'path';
import { imageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorHandler('Last opp en bildefil', 400));
  }
  const image = await imageService.uploadImage(req.file);
  res.status(200).json({
    success: true,
    data: image,
  });
});

export const get = catchAsyncErrors(async (req, res, next) => {
  const image = await imageService.getImageById(req.params.id);
  if (!image) {
    return next(new ErrorHandler('Fant ikke bildefil', 404));
  }

  //   res.set({
  //     'Content-Type': image.file_mimetype,
  //   });
  // const imagePath = image.file_path.replace(/\\/g, '/').replace('public', '');

  //   res.sendFile(path.join(__dirname, '..', imagePath));

  const imagePath = image.file_path.replace(/\\/g, '/').replace('public', '');
  res.status(200).json({
    success: true,
    data: { image, imagePath },
  });
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const images = await imageService.listImages();
  if (!images) {
    return next(new ErrorHandler('Fant ikke bilder', 404));
  }
  res.status(200).json({ success: true, data: images });
});

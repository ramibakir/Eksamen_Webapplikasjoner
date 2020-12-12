import multer from 'multer';
import ErrorHandler from '../utils/errorHandler.js';

function fileFilter(req, file, cb) {
  const filetypes = /\.(jpeg|JPEG|jpg|JPG|png|PNG)$/;
  if (!file.originalname.match(filetypes)) {
    return cb(new ErrorHandler('Kun bildefiler er tillat', 400));
  }
  cb(null, true);
} /*(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i) */

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, `LGRor_${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 2000000 },
  fileFilter,
}).single('image');

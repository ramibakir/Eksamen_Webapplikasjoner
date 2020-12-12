import express from 'express';
import { imageController } from '../controllers/index.js';
import { upload } from '../middleware/image.js';

const router = express.Router();

router.get('/download/:id', imageController.get);
router.post('/upload', upload, imageController.create);
router.get('/image', imageController.list);

export default router;

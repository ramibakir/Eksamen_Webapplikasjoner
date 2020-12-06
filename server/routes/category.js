import express from 'express';
import { categoryController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', categoryController.get);
router.get('/', categoryController.list);
router.post('/', categoryController.create);

export default router;
